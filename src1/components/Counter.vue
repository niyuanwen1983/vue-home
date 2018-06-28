<template>
  <div>
    计数器：
    <button @click="minus">-</button>
    <br/>
    当前：{{this.$store.state.count}}
    <br/>
    计数器：
    <button @click="add">+</button>
    {{this.$store.getters.val}}
  </div>
</template>

<script>
  import * as Types from '../store/mutations-type';

  export default {
    name: "Counter",
    data() {
      return {};
    },
    methods: {
      add() {
        //提交add的mutation
        //payload（第2个参数）
        this.$store.commit(Types.INCREMENT, 2);//会去找mutation中的add
      },
      minus() {
        this.$store.commit(Types.DECREMENT);
      }
    }
  }
</script>

<style scoped>

</style>
