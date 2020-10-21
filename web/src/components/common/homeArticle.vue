<template>
  <div class="homearticle">
    <div class="blog-wrapper section-padding-100 clearfix">
      <div class="container">
        <div class="row align-items-end">
          <!-- Single Blog Area -->
          <div class="col-12 col-lg-4">
            <div class="single-blog-area clearfix mb-100">
              <!-- Blog Content -->
              <div class="single-blog-content">
                <div class="line"></div>
                <a
                  href="#"
                  class="post-tag"
                  v-for="(sort, index) in Lifestyle.sorts"
                  :key="index"
                >
                  {{ sort.name }}
                </a>
                <h4>
                  <router-link tag="a" :to="`/content/${Lifestyle._id}`" class="post-headline" @click.native="flunload()">{{ Lifestyle.name }}</router-link>
                  <!-- <a href="#" class="post-headline">{{ Lifestyle.name }}</a> -->
                </h4>
                <p>{{ Lifestyle.info }}</p>
                <!-- <p v-html="Lifestyle.content"></p> -->
                <a href="#" class="btn original-btn">Read More</a>
              </div>
            </div>
          </div>
          <!-- Single Blog Area -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="single-catagory-area clearfix mb-100">
              <img :src="Lifestyle.imageUrl" alt="" />
              <!-- Catagory Title -->
              <div
                class="catagory-title"
                v-for="(sort, index) in Lifestyle.sorts"
                :key="index"
              >
                <a href="#">{{ sort.name }}</a>
              </div>
            </div>
          </div>
          <!-- Single Blog Area -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="single-catagory-area clearfix mb-100">
              <img src="img/blog-img/2.jpg" alt="" />
              <!-- Catagory Title -->
              <div class="catagory-title">
                <a href="#">latest posts</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="container">
        <div
          class="single-blog-area blog-style-2 mb-50 wow fadeInUp"
          data-wow-delay="0.4s"
          data-wow-duration="1000ms"
        >
          <div class="row">
            <div class="col-12">
              <div class="single-blog-thumbnail">
                <img src="img/blog-img/7.jpg" alt="" />
                <div class="post-date">
                  <a href="#">10 <span>march</span></a>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="single-blog-content mt-50">
                <div class="line"></div>
                <a href="#" class="post-tag">Lifestyle</a>
                <h4>
                  <a href="#" class="post-headline"
                    >10 Tips to organize the perfect party</a
                  >
                </h4>
                <p>
                  Curabitur venenatis efficitur lorem sed tempor. Integer
                  aliquet tempor cursus. Nullam vestibulum convallis risus vel
                  condimentum. Nullam auctor lorem in libero luctus, vel
                  volutpat quam tincidunt.
                </p>
                <div class="post-meta">
                  <p>By <a href="#">james smith</a></p>
                  <p>3 comments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-9">
            <!-- Single Blog Area  -->
            <div
              class="single-blog-area blog-style-2 mb-50 wow fadeInUp"
              data-wow-delay="0.5s"
              data-wow-duration="1000ms"
              v-for="(article, index) in february"
              :key="index"
            >
              <div class="row align-items-center">
                <div class="col-12 col-md-6">
                  <div class="single-blog-thumbnail">
                    <img :src="article.imageUrl" alt="" />
                    <div class="post-date">
                      <a href="#"
                        >12 <span>{{ article.date }}</span></a
                      >
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6">
                  <!-- Blog Content -->
                  <div class="single-blog-content">
                    <div class="line"></div>
                    <a
                      href="#"
                      class="post-tag"
                      v-for="(sort, index) in article.sorts"
                      :key="index"
                      >{{ sort.name }}</a
                    >
                    <h4>
                      <router-link tag="a" :to="`/content/${article._id}`" class="post-headline" @click.native="flunload()">{{ article.name }}</router-link>
                    </h4>
                    <p>
                      {{ article.info }}
                    </p>
                    <div class="post-meta">
                      <p>
                        由<a href="#">{{ article.avatar }}</a>
                      </p>
                      <p>3 comments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Single Blog Area  -->
          </div>
          <!-- ##### Sidebar Area ##### -->
          <div class="col-12 col-md-4 col-lg-3">
            <div class="post-sidebar-area">
              <!-- Widget Area -->
              <div class="sidebar-widget-area">
                <form action="#" class="search-form">
                  <input
                    type="search"
                    name="search"
                    id="searchForm"
                    placeholder="Search"
                  />
                  <input type="submit" value="submit" />
                </form>
              </div>

              <!-- Widget Area -->
              <div class="sidebar-widget-area">
                <h5 class="title subscribe-title">
                  Subscribe to my newsletter
                </h5>
                <div class="widget-content">
                  <form action="#" class="newsletterForm">
                    <input
                      type="email"
                      name="email"
                      id="subscribesForm"
                      placeholder="Your e-mail here"
                    />
                    <button type="submit" class="btn original-btn">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>

              <!-- Widget Area -->
              <div class="sidebar-widget-area">
                <h5 class="title">Advertisement</h5>
                <a href="#"><img src="img/bg-img/add.gif" alt="" /></a>
              </div>

              <!-- Widget Area -->
              <div class="sidebar-widget-area">
                <h5 class="title">Latest Posts</h5>

                <div class="widget-content">
                  <!-- Single Blog Post -->
                  <div
                    class="single-blog-post d-flex align-items-center widget-post"
                    v-for="(news, index) in newest"
                    :key="index"
                  >
                    <!-- Post Thumbnail -->
                    <div class="post-thumbnail">
                      <img :src="news.imageUrl" alt="" />
                    </div>
                    <!-- Post Content -->
                    <div class="post-content">
                      <a
                        href="#"
                        class="post-tag"
                        v-for="(sort, index) in news.sorts"
                        :key="index"
                        >{{ sort.name }}</a
                      >
                      <h4>
                        <router-link tag="a" :to="`/content/${news._id}`" class="post-headline" @click.native="flunload()">{{ news.name }}</router-link>
                      </h4>
                      <div class="post-meta">
                        <p>
                          <a href="#">{{ news.date }}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Widget Area -->
              <div class="sidebar-widget-area">
                <h5 class="title">Tags</h5>
                <div class="widget-content">
                  <ul class="tags">
                    <router-link
                      to="/"
                      tag="li"
                      v-for="(tag, index) in tags"
                      :key="index"
                    >
                      <a href="#">{{ tag.name }}</a>
                    </router-link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      items: [],
      links: [],
      articles: [],
      Lifestyle: [],
      february: [],
      tags: [],
      newest: [],
    };
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

    flunload(){
      this.$router.go(0)
    },

  },

  created() {
    this.feach();
    this.tagsload();
    this.newestload();
    this.articleload();
    this.articleLifestyle();
    this.articleFebruary();
  },
};
</script>
