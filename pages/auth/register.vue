<template>
  <div>ユーザー登録
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
                @click="signUp"
                >ユーザー登録する</v-btn>
        </v-col>
        <!-- .つけると同じ階層のログイン -->
        <v-col cols="3">
            <v-btn
                color="secondary"
                to="./login"
            >ログインページ</v-btn>
        </v-col>
    </v-row>
  </div>
</template>

<script>
// import { sign } from 'crypto';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
export default {
    data(){
        return{
            email:'',
            password: '',
        }
    },
    methods: {
        signUp(){
            /* 認証機能を使うことができるようにする */
            const auth = getAuth(this.$firebase)
            createUserWithEmailAndPassword(auth, this.email, this.password)
            /* 認証が成功した場合.thenで繋いで処理を記載、userCredentialマニュアルに合わせて書いている */
            .then( userCredential => {
                console.log( userCredential.user )
                console.log('ユーザー登録OK')
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