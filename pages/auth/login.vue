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
export default {
    data(){
        return{
            email:'',
            password: '',
        }
    },
    methods: {
        login(){
            /* vuexのアクションを指定していく(actionsの呼び出しのためdispatch) */
            /* 流れ。->inputで入力した値がdataに入り、dispatchにてactionsに渡す流れ */
            this.$store.dispatch('auth/login', {
                email: this.email,
                password: this.password,
            })
        }
    }
}
</script>

<style>

</style>