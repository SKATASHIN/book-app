<template>
  <div>
    データの表示<br>
    <div v-for="(task, index) in tasks" :key="index">
        id: {{ task.id }} / title : {{ task.title }}
    </div>
  </div>
</template>

<script>
/* collectionでコレクション情報を指定 */
import { getFirestore, collection, getDocs } from 'firebase/firestore'
export default {
    data(){
        return {
            tasks: []
        }
    },
    async created(){
        try{
            const db = getFirestore(this.$firebase)
            /* tasksのcollectionのデータが取得できる。 */
            const querySnapshot = await getDocs(collection(db, 'tasks'))
            querySnapshot.forEach( doc =>{
                /* firestoreから取得したデータを配列で取得する */
                this.tasks.push(doc.data())
            })
        }catch(e){
            console.error('error:', e)
        }
    }

}
</script>

<style>

</style>