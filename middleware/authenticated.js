import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default function({
  $firebase,
  store,
  route,
  redirect
}){
 const auth = getAuth($firebase)
 if(!store.getters['auth/getLoggedIn']){
   onAuthStateChanged(auth, user =>{
     if(user){
       store.dispatch('auth/addUserInfo', user)
     } else if(!route.path.match(/\/auth\//)){
      redirect('/auth/login')    
     }
   })
 }
}



// string.match(/文字列/)の文字列を含むかチェック(/\/auth\//)\これはエスケープの意味を持つ。