<!--
 * @Author: your name
 * @Date: 2021-04-06 20:38:56
 * @LastEditTime: 2021-04-07 19:36:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_back_stage\src\components\Home.vue
-->
<template>
<div>
    <el-button type="info" @click="logout">退出</el-button>
</div>
</template>

<script>
export default {
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style scope>
</style>
