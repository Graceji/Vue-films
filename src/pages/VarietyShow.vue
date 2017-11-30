<template>
  <video-page :datas="variety.length ? variety : []" :title="title" />
</template>

<script>
  import videoPage from '../components/VideoPage.vue'
  import { mapState, mapMutations } from 'vuex'
  import * as types from '../store/mutation-type'
  import { getFilms } from '../data'
  export default {
    data () {
      return {
        title: '综艺',
        activeIndex: 4
      }
    },
    computed: {
      ...mapState(['variety'])
    },
    components: {
      'video-page': videoPage
    },
    methods: {
      ...mapMutations([types.VARIETY_DATA])
    },
    created () {
      // 实例创建后初始化数据
      getFilms()
        .then(data => {
          this[types.VARIETY_DATA](data)
        })
    }
  }
</script>

<style lang="scss">