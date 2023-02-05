export const state = () => ({
    counter: 0
  })
  
  export const mutations = {
    increment(state) {
      state.counter++
    }
  }

  /* stateとmutationsがあってプロパティやメソットが含まれている */
  /* 流れとして、mutationsからstateを変更する、incrementとのメソッドがあり引数にstate */
  