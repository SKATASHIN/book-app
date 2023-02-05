/* action->mutations->state */
import { getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
export const state = () => ({
    isLoggedIn: false,
    userUid: '',
    email: '',
  })
  
  /* mutationsから上のstateを変更する関数（メソッド）作る */
  /* 第二引数に入ってくる名前を指定する。mutationsでこの第二引数を渡してあげれば、それがstateの方に入ってくる。 */
  export const mutations = {
    setLoginState( state, loggedIn ){
        state.isLoggedIn = loggedIn
    },
    setUserUid( state, Userid ){
        state.userUid = Userid
    },
    setEmail( state, email ){
        state.email = email
    },
  }
  /* context.commitの記載を省略できる、第二引数のpayloadはお約束で渡ってくる値 */
  export const actions = {
    async login({ commit }, payload ){
        /* 認証機能を使うことができるようにする（firebaseの初期化） */
        const auth = getAuth(this.$firebase)
        await signInWithEmailAndPassword(auth, payload.email, payload.password)
        /* 認証が成功した場合.thenで繋いで処理を記載、userCredentialマニュアルに合わせて書いている */
        .then( userCredential => {
            /* commitにてmutationsに渡す,ログインしたあとの情報を取得してcommitにてmutationsに渡す */
            commit('setLoginState', true)
            commit('setUserUid', userCredential.user.uid)
            commit('setEmail', userCredential.user.email)
            this.$router.push('/book')
        })
        .catch( e => {
            alert(e.message)
        })
    },
    async logout({ commit }){
        const auth = getAuth(this.$firebase)
        await signOut(auth)
        .then (() => {
            commit('setLoginState', false)
            commit('setUserUid', '')
            commit('setEmail', '')
            this.$router.push('/auth/login')
        })
        .catch(e => {
            /* エラーは省略しているだけ */
        })
    },
    addUserInfo({ commit }, payload){
        commit('setLoginState', true)
        commit('setUserUid', payload.uid)
        commit('setEmail', payload.email)
    }
  }
  /* !!で二重否定にて真偽値にキャストし、trueかfalseで入ってくる様になる */
  export const getters = {
    // getLoggedIn(state){
    //     return !!state.isLoggedIn
    // }
    getLoggedIn: state => !!state.isLoggedIn,
    getUserUid: state => !!state.isLoggedIn,
    getEmail: state => !!state.isLoggedIn,
  }

  /* stateとmutationsがあってプロパティやメソットが含まれている */
  /* 流れとして、mutationsからstateを変更する、incrementとのメソッドがあり引数にstate */