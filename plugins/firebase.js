/* 初期化用関数をインポート */
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/* コンフィグの設定 */
const firebaseConfig = {
  apiKey: "AIzaSyAt8aiWDU8LQo9IfDBuoTHO9qDv8S6i_LU",
  authDomain: "nuxt-book-app-5e79d.firebaseapp.com",
  projectId: "nuxt-book-app-5e79d",
  storageBucket: "nuxt-book-app-5e79d.appspot.com",
  messagingSenderId: "371042040285",
  appId: "1:371042040285:web:eb6b2cb5dc97c368b09e34"
};

/* 初期化インスタンス化 */
const firebaseApp = initializeApp(firebaseConfig);

/* 他のファイルで使えるようexport (this.$firebaseで使える様になる)inject第一引数が使う時の名前になっている,第二引数にて渡す関数名 */
export default ( context, inject ) => {
    inject('firebase', firebaseApp)
  }

/* plugin設定後にnuxt.config.js設定にて使える様になるので忘れずに */
