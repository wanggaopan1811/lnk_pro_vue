<template>
  <!-- 我的留言 -->
  <div class="my_nala_centre ilizi_centre">
    <div class="ilizi cle">
      <div class="box">
        <div class="box_1">
          <div class="userCenterBox boxCenterList clearfix" style="_height:1%; font-size:14px;">
            <h5><span>我的留言</span></h5>
            <div class="blank"></div>
            <div class="blank"></div>
            <div class="message-all">
              <ul>
                <!-- 留言列表 -->
                <li>
                  <div>
                    <!-- 留言类型五选一 -->
                    <span>留言：</span>
                    <!-- <span>投诉：</span>
                    <span>询问：</span>
                    <span>售后：</span>
                    <span>求购：</span> -->
                    <span>留言的主题</span>
                    <span>（2019-02-08 01:03）</span>
                  </div>
                  <div>
                    很长的留言内容很长的留言内容很长的留言内容很长的留言内容很长的留言内容很长的留言内容很长的留言内容很长的留言内容很长的留言内容很长的留言内容很长的留言内容很长的留言内容很长的留言内容很长的留言内容
                  </div>
                  <div>
                    <a>删除</a>
                    <a href="#" target="_blank">查看上传的文件</a>
                  </div>
                </li>

              </ul>
            </div>
            <form action="" method="post" enctype="multipart/form-data" name="formMsg">
              <table width="100%" border="0" cellpadding="3">
                <tbody>
                <tr>
                  <td align="right">留言类型：</td>
                  <td>
                    <input type="radio" id="one" name="msg_type" value="1">
                    <label for="one">留言</label>
                    <input type="radio" id="two" name="msg_type" value="2">
                    <label for="two">投诉</label>
                    <input type="radio" id="three" name="msg_type" value="3">
                    <label for="three">询问</label>
                    <input type="radio" id="four" name="msg_type" value="4">
                    <label for="four">售后</label>
                    <input type="radio" id="five" name="msg_type" value="5">
                    <label for="five">求购</label>
                  </td>
                </tr>
                <tr>
                  <td align="right">主题：</td>
                  <td><input name="msg_title" type="text" size="30" class="inputBg"></td>
                </tr>
                <tr>
                  <td align="right" valign="top">留言内容：</td>
                  <td><textarea name="msg_content" cols="50" rows="4" wrap="virtual" class="B_blue"></textarea></td>
                </tr>
                <tr>
                  <td align="right">上传文件：</td>
                  <td><input type="file" name="message_img" size="45" class="inputBg"></td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td><input type="hidden" name="act" value="act_add_message">
                    <a class="btn_blue_1">提交</a>
                  </td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>
                    <font color="red">小提示：</font><br>
                    您可以上传以下格式的文件：<br>gif、jpg、png、word、excel、txt、zip、ppt、pdf
                  </td>
                </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.message-all {
    border-bottom: 1px solid #ccc;
}
.message-all  li{
    border-bottom: 1px solid #ddd;
    padding: 10px;
}

.my_nala_centre {
    float:right;
    width:970px;
    background-color:#fff
}
.ilizi_centre {
    background:0
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

.btn_blue_1{
  display: inline-block;
  padding: 4px 12px;
  height: 24px;
  line-height: 25px;
  _line-height: 18px;
  border: 1px solid #1e9246;
  border-radius: 3px;
  font-size: 100%;
  color: #fff;
  background-color: #09c762;
  overflow: hidden;
  vertical-align: middle;
  cursor: pointer;
  text-decoration: none;
  vertical-align: middle;
}
.userCenterBox table td{
    padding: 5px;
}
</style>
