<template>
  <div class="header">
    <!-- 订阅模式 -->
    <homeSubscribe></homeSubscribe>
    <!-- 订阅模式 -->
    <homeHeader></homeHeader>
    <!-- 轮播图 -->
    <homeRotation></homeRotation>
    <!-- 轮播图 -->
    <!-- 内容 -->

    <!-- ##### Blog Wrapper Start ##### -->
    <div class="constent" v-for="(item,index) in articles" :key="index">
        <!-- ##### Cool Facts Area Start ##### -->
        <div
          class="cool-facts-area section-padding-100-0 bg-img background-overlay"
          style="background-image: url(img/bg-img/b4.jpg)"
        >
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="single-blog-area blog-style-2 text-center mb-100">
                  <!-- Blog Content -->
                  <div class="single-blog-content">
                    <div class="line"></div>
                    <a href="#" class="post-tag">{{item.name}}</a>
                    <h4>
                      <a href="#" class="post-headline"
                        >Welcome to this Lifestyle blog</a
                      >
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris tempus vestibulum mauris quis aliquam. Integer accumsan
                      sodales odio, id tempus velit ullamcorper id. Quisque at erat
                      eu libero consequat tempus. Quisque molestie convallis tempus.
                      Ut semper purus metus, a euismod sapien sodales ac. Duis
                      viverra eleifend fermentum. Donec sagittis lacus sit amet
                      augue sodales, vel cursus enim tristique. Maecenas vitae massa
                      ut est consectetur sagittis quis vitae tortor. Sed et massa
                      vel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <!-- Single Cool Facts Area -->
              <div class="col-12 col-sm-6 col-lg-3">
                <div class="single-cool-facts-area text-center mb-100">
                  <h2><span class="counter">25</span></h2>
                  <p>Awards won</p>
                </div>
              </div>
              <!-- Single Cool Facts Area -->
              <div class="col-12 col-sm-6 col-lg-3">
                <div class="single-cool-facts-area text-center mb-100">
                  <h2><span class="counter">12</span>K</h2>
                  <p>FB Followers</p>
                </div>
              </div>
              <!-- Single Cool Facts Area -->
              <div class="col-12 col-sm-6 col-lg-3">
                <div class="single-cool-facts-area text-center mb-100">
                  <h2><span class="counter">9</span></h2>
                  <p>Team members</p>
                </div>
              </div>
              <!-- Single Cool Facts Area -->
              <div class="col-12 col-sm-6 col-lg-3">
                <div class="single-cool-facts-area text-center mb-100">
                  <h2><span class="counter">16</span></h2>
                  <p>Coffes/Day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ##### Cool Facts Area End ##### -->
        <!-- ##### Blog Wrapper Start ##### -->
        <div class="blog-wrapper section-padding-100-0 clearfix">
          <div class="container">
            <div class="row">
              <!-- Single Blog Area  -->
              <div class="col-12 col-md-6 col-lg-4" v-for="(article,index) in item.articleList" :key="index">
                <div class="single-blog-area blog-style-2 mb-100">
                  <div class="single-blog-thumbnail">
                    <img :src="article.imageUrl" alt="" />
                    <div class="post-date">
                      <a href="#">10 <span>{{article.date}}</span></a>
                    </div>
                  </div>
                  <!-- Blog Content -->
                  <div class="single-blog-content mt-50">
                    <div class="line"></div>
                    <a href="#" class="post-tag">{{item.name}}</a>
                    <h4>
                      <a href="#" class="post-headline">{{article.name}}</a>
                    </h4>
                    <p>
                        {{article.info}}
                    </p>
                    <div class="post-meta">
                      <p>By {{article.avatar}} <a href="#">{{article.avathor}}</a></p>
                      <p>3 comments</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Single Blog Area  -->
            </div>
          </div>
        </div>
        <!-- ##### Blog Wrapper End ##### -->
    </div>

    
    <!-- #####内容 ##### -->
    <!-- ##### 个人照片 ##### -->
    <homePhoto></homePhoto>
    <!-- ##### 个人照片end ##### -->
    <!-- 底部组件 -->
    <homeFooter></homeFooter>
    <!-- 底部组件 -->
  </div>
</template>

<script>
import Vue from "vue";
import homeHeader from "@/components/common/homeHeader";
import homeRotation from "@/components/common/homeRotation";
import homeFooter from "@/components/common/homeFooter";
import homePhoto from "@/components/common/homePhoto";
import homeArticle from "@/components/common/homeArticle";
import homeSubscribe from "@/components/common/homeSubscribe";

export default {
  name: "home",
  data() {
    return {
      articles:[],
    };
  },

  components: {
    homeHeader,
    homeRotation,
    homeFooter,
    homePhoto,
    homeArticle,
    homeSubscribe,
  },

  methods: {
    async categoryArticle() {
      const res = await this.$http.get("/categories/list");
      this.articles = res.data.children;
    },
  },

  created() {
    this.categoryArticle();
  },
};
</script>
