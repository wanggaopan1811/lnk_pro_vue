<template>
 <!-- 页面主体 -->
  <div id="wrapper" class="cle">
    <div class="here cle">
      <router-link to="app/home/index">首页</router-link>
      <code>></code>
      用户中心
    </div>
    <div class="my_nala_main">
      <member-menu></member-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import memberMenu from './member-menu'
export default {
  components: {
    'member-menu': memberMenu
  }
}
</script>

<style scoped>
.my_nala_main h3.my_nala {
    height:60px;
    border:1px solid #e7e7e7;
    border-bottom:0
}
.my_nala_main h3.my_nala a {
    display:block;
    height:60px;
    font-size:22px;
    text-align:center;
    line-height:60px;
    overflow:hidden
}
.my_nala_main h3.my_nala a:hover {
    text-decoration:none
}
</style>
