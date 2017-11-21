<template>
  <div>{{test}}</div>
</template>

<script>
  export default {
    data () {
      return {
        test: 1
      }
    },
    methods: {
      changeText () {
        console.log('jinlaoilema?')
        this.test = 3
      }
    },
    created () {
      console.log('jinlaoile')
      console.log(typeof this.changeText)
      setTimeout(() => {
        this.changeText()
      }, 3000)
    }
  }
</script>

