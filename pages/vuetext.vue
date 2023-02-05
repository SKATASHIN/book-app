<template>
  <div>
    <!-- mutationsはcommitにて指定する必要がある。メソットの名前を指定する。 -->
    <v-btn @click="$store.commit('increment')">+</v-btn>
    {{ $store.state.counter }}<br>

    <ul>
        <li v-for="todo in todos" :key="todo.text">
        <input :checked="todo.done" @change="toggle(todo)" type="checkbox">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        </li>
        <!-- 入力してエンターを押したタイミングでaddTodoが走る -->
        <li><input @keyup.enter="addTodo" placeholder="What needs to be done?"></li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
/* computed必ずreturnする。todosのファイル名を指定（indexなら不要）してstateの中のプロパティ名を指定 */
export default {
    computed: {
    todos () {
        return this.$store.state.todos.list
        }
  },
  /* addTodoは引数にて入力した値を取得している */
  /* ファイル名/メソッド名 e.target.valueにてtodos.jsに値が入る（配列にpushして文字が入る） */
    methods: {
        addTodo (e) {
        this.$store.commit('todos/add', e.target.value)
        e.target.value = ''
        },
        ...mapMutations({
        toggle: 'todos/toggle'
        })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>