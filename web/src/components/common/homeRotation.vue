<template>
  <div class="rotation">
    <!-- 轮播图 -->
    <div class="hero-area">
      <!-- Hero Slides Area -->
      <div class="hero-slides owl-carousel">
        <!-- Single Slide -->
        <div
          class="single-hero-slide bg-img"
          v-for="(img, index) in images"
          :key="index"
          :style="{ backgroundImage: 'url(' + img.imageUrl + ')' }"
        >
          <div class="container h-100">
            <div class="row h-100 align-items-center">
              <div class="col-12">
                <div class="slide-content text-center">
                  <div class="post-tag">
                    <a href="#" data-animation="fadeInUp">{{
                      img.parent.name
                    }}</a>
                  </div>
                  <h2 data-animation="fadeInUp" data-delay="250ms">
                    <a href="single-post.html">{{ img.title }}</a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 轮播图 -->
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "home",
  data() {
    return {
      images: [],
    };
  },
  methods: {
    // 轮播图数据
    async imageload() {
      const res = await this.$http.get("/images/list");
      this.images = res.data;
    },
  },

  created() {
    this.imageload();
  },
};
</script>

