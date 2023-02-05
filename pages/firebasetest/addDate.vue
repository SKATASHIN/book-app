<template>
  <div>
    <v-btn
    color="info"
    @click="addData"
    >追加
    </v-btn>
  </div>
</template>

<script>
import { getFirestore, collection, addDoc } from 'firebase/firestore'

export default {
    data(){
        return {
            id: '001',
            title: 'テスト',
        }
    },
    methods:{
        async addData(){
            try {
                /* firebaseを使える様にする設定 */
                const db = getFirestore(this.$firebase)
                /* データの追加。専用の関数addDocにて追加 第一引数にfirestoreの情報をいれるので設定、第二引数でその名前 */
                const docRef = await addDoc(collection(db, 'tasks'), {
                    id: this.id,
                    title: this.title,
                })
                console.log('追加したデータID:', docRef.id)
            } catch (e){
                console.error('error:', e)
            }
        }
    }
}
</script>


<style>

</style>