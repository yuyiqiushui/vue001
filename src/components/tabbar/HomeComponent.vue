<template>
  <div>
    <swiper></swiper>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                <img src="../../images/menu1.png">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                <img src="../../images/menu2.png">
                <div class="mui-media-body">图片分享</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                <img src="../../images/menu3.png">
                <div class="mui-media-body">商品购买</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/messagelist">
                <img src="../../images/menu4.png">
                <div class="mui-media-body">留言反馈</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/videolist">
                <img src="../../images/menu5.png">
                <div class="mui-media-body">视频专区</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/contactus">
                <img src="../../images/menu6.png">
                <div class="mui-media-body">联系我们</div></router-link></li>
    </ul> 
  </div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue';
export default {
  data(){
    return {
      
    }
  },
  methods:{

  },
  components:{
    swiper
  }
}
</script>

<style lang="scss" scoped>
.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border: none;
  img{
    width: 60px;
    height: 60px;
  }
  
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {

    border: none;
  }
</style>
