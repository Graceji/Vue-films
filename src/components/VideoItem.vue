<template>
  <el-col :span="5">
    <router-link to="/detail/1">
      <el-card :body-style="{ padding: '0px' }">
      <!-- <img src="~examples/assets/images/hamburger.png" class="image"> -->
        <div style="padding: 14px;">
          <div class="bottom clearfix">
            <div class="img">
              <img :src="baseUrl + item.img" alt="">
            </div>
            <span>{{ item.name }}</span>
            <el-rate v-model="star" disabled show-score text-color="#ff9900" score-template="{value}">
            </el-rate>
          </div>
        </div>
      </el-card>
    </router-link>
  </el-col>
</template>

<script>
  export default {
    data () {
      return {
        baseUrl: 'http://vue.wclimb.site/images/',
        star: parseFloat(this.item.star)
      }
    },
    props: ['item']
  }
</script>

<style lang="scss">
  .el-col {
    border-radius: 4px;
    margin-right: 30px;
    margin-bottom: 30px;
    a {
      display: block;
      text-decoration: none;
    }
    .img {
      width: 160px;
      height: 220px;
      margin: 0 auto;
      margin-bottom: 8px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
