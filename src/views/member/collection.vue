<template>
  <!-- 我的收藏 -->
  <div class="my_nala_centre ilizi_centre">
    <div class="ilizi cle">
      <div class="box">
        <div class="box_1">
          <div class="userCenterBox boxCenterList clearfix" style="_height:1%; font-size:14px;">
            <h5><span>我的收藏</span></h5>
            <div class="blank"></div>
            <table width="100%" border="0" cellpadding="5" cellspacing="1" bgcolor="#dddddd">
              <tbody>
              <tr align="center">
                <th width="35%" bgcolor="#ffffff">商品名称</th>
                <th width="30%" bgcolor="#ffffff">价格</th>
                <th width="35%" bgcolor="#ffffff">操作</th>
              </tr>
              <!-- 收藏商品列表 -->
              <tr v-for="(item, index) in goods" :key="item.id">
                <td bgcolor="#ffffff">
                  <a href="productDetail.html" class="f6" target="_blank">{{item.goods.name}}</a>
                </td>
                <td bgcolor="#ffffff">本店价<span class="goods-price">￥{{item.goods.shop_price}}元</span>
                </td>
                <td align="center" bgcolor="#ffffff">
                  <a class="f6" @click="delCollection(index, item.goods.id)">删除</a>
                </td>
              </tr>

              </tbody>
            </table>
            <form name="selectPageForm" action="" method="get">
              <div class="pagenav" id="pagenav">
                <ul>
                  <li>
                  </li>
                </ul>
                <div class="clear"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getCollecion, delCollecion} from '../../api/api'
export default {
  data () {
    return {
      goods: {
      }
    }
  },
  created () {
    this.getCollection()
  },
  methods: {
    getCollection () {
      getCollecion().then(response => {
        // console.log(response.data)
        this.goods = response.data
        console.log(this.goods, 'gggggggggggggggg')
      }).catch(error => {
        console.log(error)
      })
    },
    delCollection (index, id) {
      // 删除
      delCollecion(id).then(repsonse => {
        console.log(id)
        // this.goods = repsonse.data
        this.goods.splice(index, 1)
        alert('删除成功')
        // this.getCollection()
      }).catch(error => {
        console.log(error)
      })
    }
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

.my_nala_centre {
    float:right;
    width:970px;
    background-color:#fff
}
.my_nala_centre .trade_mod .h301 a.more {
    font-size:14px;
    color:#666;
    font-weight:normal
}
.my_nala_centre .trade_mod .h301 a.more:hover {
    color:#09c762
}
.my_nala_centre .something_interesting {
    margin-top:10px
}
.my_nala_centre .something_interesting ul {
    margin-left:20px
}
.my_nala_centre .something_interesting li {
    width:130px;
    text-align:center;
    float:left
}
.my_nala_centre .something_interesting b {
    font-weight:normal
}
.my_nala_centre .something_interesting em {
    font-size:12px;
    font-weight:bold;
    color:#09c762
}
.my_nala_centre .relate_goods {
    border:1px solid #e4e4e4;
    border-top:0
}
.my_nala_centre .pagenav {
    padding:15px 10px;
    border-top:1px solid #e4e4e4
}

.ilizi_centre {
    background:0
}

.ilizi {
    border:1px solid #e4e4e4;
    padding:16px 18px;
    margin-bottom:10px;
    background:#fff
}
.ilizi .face,.iface .face {
    display:block;
    float:left;
    width:100px;
    height:100px;
    position:relative
}
.ilizi .edit_face,.iface .edit_face {
    position:absolute;
    height:20px;
    line-height:20px;
    width:100px;
    display:block;
    background:rgba(0,0,0,0.5);
    text-align:center;
    color:#fff;
    left:1px;
    bottom:-1px;
    _bottom:0;
    filter:progid:DXImageTransform.Microsoft.gradient(enabled=true,startColorstr='#77000000',endColorstr='#77000000');
    visibility:hidden;
    margin:0
}
.ilizi .face img,.iface .face img {
    width:100px;
    height:100px;
    border:1px solid #e4e4e4
}
.ilizi .ilizi_info {
    width:800px;
    float:right;
    height:100px
}
.userCenterBox table td{
    padding: 5px;
}
</style>
