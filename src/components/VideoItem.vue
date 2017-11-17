<template>
  <el-col :span="6">
    <el-card :body-style="{ padding: '0px' }">
      <!-- <img src="~examples/assets/images/hamburger.png" class="image"> -->
      <div style="padding: 14px;">
        <span>{{ fileName }}</span>
        <div class="bottom clearfix">
          <time class="time">{{ score }}</time>
          <el-rate v-model="score" disabled show-score text-color="#ff9900" score-template="{value}">
          </el-rate>
        </div>
      </div>
    </el-card>
  </el-col>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props: ['fileName', 'score']
  }
</script>

<style>
  .el-col {
    border-radius: 4px;
    margin-right: 30px;
    margin-bottom: 30px;
  }
</style>
