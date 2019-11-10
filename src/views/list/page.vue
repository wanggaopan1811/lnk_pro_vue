<template>
<!-- 分页 -->
  <div>
    <footer class="footer" style="margin-top:30px;">
      <div class="footerK">
        <div class="pageNav">
          <!-- 页码 -->
          <span @click="pageCallback(page.page)" v-for="(page, index) in apages" :key="index" class="page" :class="[page.active?'cPageNum':'pageNum']">{{page.text}}</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    preText: {
      type: String,
      default: '下一页'
    },
    nextText: {
      type: String,
      default: '下一页'
    },
    endShow: {
      type: String,
      default: 'false'
    },
    page: [String, Number],
    totalPage: [String, Number]
  },
  computed: {
    apages: function () {
      return this.nav(parseInt(this.page), parseInt(this.totalPage)) // parseInt转一下int
    }
  },
  methods: {
    nav: function (a, b) { // 当前页, 总页数
      var c = [] // 最终要遍历的数组
      // 如果总页数 <= 1，不显示页码
      if (b <= 1) {
        return []
      }
      // 不走if 说明总页数 > 1
      // 如果总页数小于当前页，给当前页重新赋值总页数，也就是最后一页。
      b < a && (a = b)
      // 如果当前页小于等于1 就改成 1
      if (a <= 1) {
        a = 1
      } else { // 否则当前页 > 1
        // 就需要添加上一页和第一页
        c.push({page: a - 1, text: this.preText})
        c.push({page: 1, text: '1'})
      }
      // d表示当前页有几个，最少2个
      var d = 2
      // e是当前页后边有几个，最多9个，多了显示不下
      var e = b < 9 ? b : 9
      // 如果当前页 >= 7，说明前边太多
      if (a >= 7) {
        // 就在前边加上...
        c.push({page: '', text: '...'})
        // 重新计算当前页在哪，保证当前页始终在 中间
        d = a - 4
        e = a + 4
        e = b < e ? b : e
      }
      // 遍历当前页之前的页码
      for (; d < a; d++) c.push({page: d, text: d})
      // 插入当前页， 为激活状态、
      c.push({page: a, text: a, active: true})
      // 遍历当前页之后的页码
      for (d = a + 1; d <= e; d++)c.push({page: d, text: d})
      // 如果设置了页码过多时需要显示后置的省略号
      if (this.endShow === 'true') {
        // 当前页之后的页码还没达到总页数
        if (e < b) {
          // 插入省略号和总页数，即最后一页
          c.push({page: b, text: '...'})
          c.push({page: b, text: b})
        }
      }
      // 当前页 < 总页数。在插入下一页
      a < b && (c.push({page: a + 1, text: this.nextText}))
      return c
    },
    pageCallback (page) {
      this.$emit('pagefn', {page: page, totalPage: this.totalPage})
    }
  }
}
</script>

<style scoped>
footer {
  width: 100%;
  height: 60px;
  float: left;
}
.footerK {
  height: 100%;
  margin: 0px auto;
  line-height: 60px;
  text-align: right;
  position: relative;
}
.page{
  border: 1px solid #ddd;
  padding: 8px 12px;
  margin-left: 10px;
  text-align: center;
  cursor:pointer;
}
.page:hover{
  color:#09c762;
  border-color:#09c762;
}
.footerK a,
.cPageNum {
  line-height: 35px;
  font-size: 12px;

  color: #939393;
  border: none;
  tencursor: pointer;
}
.cPageNum {
  color: #333333;
  font-weight: bold;

}
.footerK a:hover {
  color: #fff;
  background: #68a0fc;
}
</style>
