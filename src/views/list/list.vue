<template>
  <div id="wrapper">
    <current-loc :curLoc="curLoc"></current-loc>

    <div class="current-cle">
        <ListNav :currentCategoryName="currentCategoryName" :cateMenu="cateMenu" isObject="isObject" :proNum="proNum"></ListNav>
      <div class="maincon">
        <priceRange :priceRange="priceRange" @on-change="changePrice"></priceRange>
        <listSort @on-sort="changeSort" :proNum="proNum"></listSort>
        <div class="list-detail">
          <product-list :listData="listData"></product-list>
          <Page @pagefn="pagefn" pre-text="上一页" next-text="下一页" end-show="true" :page="curPage" :total-page="totalPage"></Page>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
import { getCategory, getCurrentLoc, getPriceRange, getGoods } from '../../api/api'
import currentLoc from './current-loc'
import listNav from './listNav'
import priceRange from './priceRange'
import listSort from './listSort'
import productList from './productList'
import page from './page'

export default {
  data () {
    return {
      top_category: '', // 商品类别id
      cateMenu: {}, // 菜单列表
      currentCategoryName: '', // 当前类别的一个名称
      isObject: true,
      curLoc: [], // 当前位置
      priceRange: [], // 价格区间
      pageType: 'list',
      searchWord: '',
      listData: [],
      proNum: 0,
      ordering: '-add_time',
      pricemin: '',
      pricemax: '',
      curPage: 1 // 当前页码
    }
  },
  components: {
    'current-loc': currentLoc,
    'ListNav': listNav,
    'priceRange': priceRange,
    'listSort': listSort,
    'product-list': productList,
    'Page': page

  },
  created () {
    this.getAllData()
  },
  methods: {
    getAllData () {
      // console.log(this.$route.params)
      if (this.$route.params.id) {
        this.top_category = this.$route.params.id
        this.getMenu(this.top_category) // 获取左侧列表
      } else {
        this.getMenu(null) // 获取左侧菜单列表
        this.pageType = 'search' // 搜索进来的
        this.searchWord = this.$route.params.keyword
      }
      this.getCurLoc() // 获取当前位置
      this.getPriceRange() // 获取价格区间
      this.getListData() // 获取产品列表
    },
    getMenu (id) {
      if (id != null) {
        getCategory({
          id: id
        }).then(response => {
          // console.log(response.data)
          this.cateMenu = response.data.sub_cat
          this.currentCategoryName = response.data.name
        }).catch(error => {
          console.log(error)
        })
      } else {
        getCategory({}).then(response => {
          // console.log(response.data)
          this.cateMenu = response.data
          this.isObject = false
        }).catch(error => {
          console.log(error)
        })
      }
    },
    getCurLoc () { // 获取当前位置
      getCurrentLoc({
        proType: this.top_category
      }).then(response => {
        // console.log(response.data)
        this.curLoc = response.data
      }).catch(error => {
        console.log(error)
      })
    },
    getPriceRange () { // 获取价格区间
      getPriceRange({
        proType: this.top_category
      }).then(response => {
        // console.log(response.data, 'wwww')
        this.priceRange = response.data
      }).catch(error => {
        console.log(error)
      })
    },
    getListData () {
      if (this.pageType === 'search') {
        getGoods({
          search: this.searchWord,
          ordering: this.ordering,
          pricemin: this.pricemin,
          pricemax: this.pricemax,
          page: this.curPage
        }).then(response => {
          // console.log(response.data)
          this.listData = response.data.results
          this.proNum = response.data.count
        }).catch(error => {
          console.log(error)
        })
      } else {
        getGoods({
          top_category: this.top_category,
          ordering: this.ordering,
          pricemin: this.pricemin,
          pricemax: this.pricemax,
          page: this.curPage
        }).then(response => {
          // console.log(response.data)
          this.listData = response.data.results
          this.proNum = response.data.count
        }).catch(error => {
          console.log(error)
        })
      }
    },
    changeSort (type) {
      this.ordering = type
      this.getListData()
    },
    changePrice (data) {
      this.pricemin = data.min
      this.pricemax = data.max
      this.getListData()
    },
    changeMenu (id) {
      this.top_category = id
      this.getCurLoc()
      this.getMenu(id)
      this.getListData()
    },
    pagefn (value) { // 点击分页
      this.curPage = value.page
      this.getListData()
    }
  },
  computed: {
    totalPage () {
      return Math.ceil(this.proNum / 12)
    }
  },
  watch: { // 路由有变化就重新加载数据
    '$route': 'getAllData'
  }
}
</script>

<style scoped>
.maincon {
    width: 970px;
    float: right;
}

</style>
