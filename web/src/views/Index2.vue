<template>
  <div class="header">
    <div id="preloader">
      <div class="preload-content">
        <div id="original-load"></div>
      </div>
    </div>

    <!-- Subscribe Modal -->
    <div class="subscribe-newsletter-area">
      <div
        class="modal fade"
        id="subsModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="subsModal"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div class="modal-body">
              <h5 class="title">Subscribe to my newsletter</h5>
              <form action="#" class="newsletterForm" method="post">
                <input
                  type="email"
                  name="email"
                  id="subscribesForm2"
                  placeholder="Your e-mail here"
                />
                <button type="submit" class="btn original-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <homeHeader></homeHeader>

    <!-- 轮播图 -->
    <homeRotation></homeRotation>
    <!-- 轮播图 -->

    <!-- 文章 -->
    <homeArticle></homeArticle>
    <!-- 文章 -->
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

export default {
  name: "home",
  data() {
    return {
      items: [],
      links: [],
      images: [],
      articles: [],
      Lifestyle: [],
      february: [],
      tags: [],
      newest: [],
    };
  },

  components: {
    homeHeader,
    homeRotation,
    homeFooter,
    homePhoto,
    homeArticle
  },

  methods: {
    // 首页导航数据
    async feach() {
      const res = await this.$http.get("/categories/all");
      res.data.forEach((item, index) => {
        if (item.parent == undefined) {
          this.items.push(item);
        }
      });
    },

    // 获取tags数据
    async tagsload() {
      const res = await this.$http.get("/categories/tags");
      this.tags = res.data.children;
    },

    // 获取最新帖子数据
    async newestload() {
      const res = await this.$http.get("/article/newdate");
      this.newest = res.data;
    },

    // 首页友链数据
    async linkload() {
      const res = await this.$http.get("/links/list");
      this.links = res.data;
    },

    // 轮播图数据
    async imageload() {
      const res = await this.$http.get("/images/list");
      this.images = res.data;
    },

    // 文章数据
    async articleload() {
      const res = await this.$http.get("/article/init");
      this.articles = res.data;
    },

    // 获取生活方式数据
    async articleLifestyle() {
      const res = await this.$http.get("/article/lifestyle");
      this.Lifestyle = res.data;
    },

    // 获取二月份数据
    async articleFebruary() {
      const res = await this.$http.get("/article/ctimelist");
      this.february = res.data;
    },
  },

  created() {
    this.feach();
    this.linkload();
    this.tagsload();
    this.newestload();
    this.imageload();
    this.articleload();
    this.articleLifestyle();
    this.articleFebruary();
  },
};
</script>
