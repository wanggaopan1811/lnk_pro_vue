<template>
<!-- 面包屑导航 -->
    <div class="current-loc">
      <div class="breadcrumbs cle">
        <div class="menus">
          <!-- 面包屑路径 -->
          <div v-for="(item,index) in curLoc" :key="index" style="display: inline-block">
            <router-link :to="{name: 'index'}" v-if="index===0">{{item.name}}</router-link>
            <router-link :to="{name: 'list', params: {id: item.id}}" v-else>{{item.name}}</router-link>
            <code v-if="index!==curLoc.length-1">&gt;</code>
          </div>
<!--          <a href="list.html">酒水饮料</a>-->
<!--          <code>&gt;</code>-->
<!--          <a href="list.html">粮油副食</a>-->
<!--          <code>&gt;</code>-->
<!--          <a href="list.html">休闲食品</a>-->
<!--          <code>&gt;</code>-->
<!--          <a href="list.html">蔬菜水果</a>-->
<!--          <code>&gt;</code>-->
<!--          <a href="list.html">奶类食品</a>-->
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    curLoc: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style scoped>
/***********************************************************面包屑导航***********************************************************/
.cle:after{
    visibility:hidden;
    display:block;
    font-size:0;
    content:'\20';
    clear:both;
    height:0
}
.cle{
    *zoom:1
}

a {
    text-decoration:none;
    color:#333;
    -webkit-transition:color .2s;
    -moz-transition:color .2s;
    -o-transition:color .2s;
    -ms-transition:color .2s;
    transition:color .2s
}
a:hover {
    color:#09c762
}
a:focus,area:focus {
    outline:0
}

canvas {
    -ms-touch-action:double-tap-zoom
}

.breadcrumbs {
    padding:0 5px 0 0;
    line-height:38px;
    color:#666
}
.breadcrumbs .menus {
    float:left
}
.breadcrumbs .menus a {
    /*margin-right:6px*/
    margin-left: 6px;
    margin-right: 6px;
}
.breadcrumbs .right {
    float:right;
    color:#bbb
}
.breadcrumbs .right i {
    font-size:20px;
    margin-right:5px;
    vertical-align:-2px
}
.breadcrumbs .right .code {
    color:#fafafa;
    margin-right:30px;
    display:inline-block
}

</style>
