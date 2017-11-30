<template>
  <video-page :datas="films.length ? films : []" :title="title" />
</template>

<script>
  import videoPage from '../components/VideoPage.vue'
  import { mapState, mapMutations } from 'vuex'
  import * as types from '../store/mutation-type'
  import { getFilms } from '../data'
  export default {
    data () {
      return {
        title: '电影',
        activeIndex: 2
      }
    },
    computed: {
      ...mapState(['films'])
    },
    components: {
      'video-page': videoPage
    },
    methods: {
      ...mapMutations([types.FILM_DATA])
    },
    created () {
      // 实例创建后初始化数据
      getFilms()
        .then(data => {
          this[types.FILM_DATA](data)
        })
    }
  }
</script>
<style lang="scss">