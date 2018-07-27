<template>
  <div id="app">
    {{msg}}
    <button @click="getMsg">get</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
     getMsg() {
         this.$store.dispatch('getMsg')
     }
  },
  computed: {
      msg() {
        return this.$store.state.msg
      }
  }
}
</script>


