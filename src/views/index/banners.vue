<template>
<!-- Banners -->
    <div class="banner-warp">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in banners" :key="item.goods">
            <router-link :to="'/app/home/productDetail/'+item.goods" target="_blank">
              <img :src="item.image" alt=""/>
            </router-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

</template>

<script>
import { bannerGoods } from '../../api/api'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      banners: [],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 3000, // 时间间隔3秒
          stopOnLastSlide: false, // 到了最后一张是否停止 （false 不停止）
          disableOnInteraction: false // 用户操作之后是否禁止自动播放（false 不禁止）
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created () {
    this.getBanner()
  },
  methods: {
    getBanner () {
      bannerGoods().then(response => {
        // console.log(response.data)
        this.banners = response.data
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.banner-warp{
  height:300px;
}
</style>
