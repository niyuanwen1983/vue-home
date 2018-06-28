<template>
  <div>
    <MHeader :back="true" :title="title">首页（插槽）</MHeader>
    <div class="content">
      <Loading v-if="loading">疯狂加载中</Loading>
      <template v-else>
        <Swiper :swiperSlides="sliders"></Swiper>
        <div class="container">
          <h3>热门图书</h3>
          <ul>
            <li v-for="hot in hotBooks">
              <img :src="hot.bookCover" alt=""/>
              <b>{{hot.bookName}}</b>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader.vue'
  import Swiper from '../base/Swiper.vue'
  //import {getSliders, getHotBook} from "../api";//会直接找api下的index.js（必须是这个名字）
  import {getAll} from "../api";
  import Loading from '../base/Loading.vue';

  export default {
    name: 'Home',
    data: function () {
      return {
        title: '首页（属性）',
        sliders: [],
        hotBooks: [],
        loading: true
      }
    },
    /*async created() {
      console.log('0');
      //给data起别名，对象中的属性名字必须和得到的结果名字一致
      let {data: sliders} = await getSliders();
      console.log('s=' + sliders);
      console.log('2');
      //将获取的数据放到sliders中
      this.sliders = sliders;
    },*/
    created() {
      //this.getSlider();//获取轮播图
      //this.getHot();//获取最新图书
      this.getData();
    },
    methods: {
      /*async getSlider() {
        this.sliders = await getSliders();
      },
      async getHot() {
        this.hotBooks = await getHotBook();
      }*/
      async getData() {
        let [sliders, hotBooks] = await getAll();//[sliders,books]
        this.sliders = sliders;
        this.hotBooks = hotBooks;
        //轮播图和热门图书已经获取完成
        this.loading = false;
      }
    },
    /*和上面的代码等价
    created: function () {
      console.log(0);
      getSliders().then((res) => {
        this.sliders = res.data;
        let a = '';
        console.log('c=' + this.sliders);
      });
      console.log(this.sliders);
      console.log(2);
    },*/
    components: {MHeader, Swiper, Loading}
  }
</script>

<style scoped lang="less">
  h3 {
    color: #999999;
    padding: 5px 0;
  }

  .container {
    width: 90%;
    margin: 0 auto;
    ul {
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 10px;
      li {
        width: 50%;
        text-align: center;
        margin: 5px 0;
        img {
          width: 100%;
        }
      }
    }
  }
</style>
