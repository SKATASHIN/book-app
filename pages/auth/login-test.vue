<template>
  <div>ログイン画面
    <v-row>
        <v-col cols="6">
            <v-text-field
                v-model="email"
                label="メールアドレス"
                />
            <v-text-field
                v-model="password"
                label="パスワード"
                />
        </v-col>
    </v-row>

    <v-row>
        <v-col cols="3">
            <v-btn
                color="primary"
                @click="login"
                >ログイン</v-btn>
        </v-col>
        <v-col cols="3">
            <v-btn
                color="info"
                to="./register"
                >ユーザー登録画面</v-btn>
        </v-col>
    </v-row>
  </div>
</template>

<script>
// import { sign } from 'crypto';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
export default {
    data(){
        return{
            email:'',
            password: '',
        }
    },
    methods: {
        login(){
            /* 認証機能を使うことができるようにする */
            const auth = getAuth(this.$firebase)
            signInWithEmailAndPassword(auth, this.email, this.password)
            /* 認証が成功した場合.thenで繋いで処理を記載、userCredentialマニュアルに合わせて書いている */
            .then( userCredential => {
                console.log( userCredential.user )
                console.log('ログインOK')
            })
            .catch( e => {
                alert(e.message)
            })
        }
    }
}
</script>

<style>

</style>