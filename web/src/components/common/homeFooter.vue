<template>
  <div class="footer">
    <footer class="footer-area text-center">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- Footer Nav Area -->
            <div class="classy-nav-container breakpoint-off">
              <!-- Classy Menu -->
              <nav class="classy-navbar justify-content-center">
                <!-- Navbar Toggler -->
                <div class="classy-navbar-toggler">
                  <span class="navbarToggler"
                    ><span></span><span></span><span></span
                  ></span>
                </div>

                <!-- Menu -->
                <div class="classy-menu">
                  <!-- close btn -->
                  <div class="classycloseIcon">
                    <div class="cross-wrap">
                      <span class="top"></span><span class="bottom"></span>
                    </div>
                  </div>

                  <!-- Nav Start -->
                  <div class="classynav">
                    <ul>
                      <li v-for="(item, index) in items" :key="index">
                        <router-link to="/" tag="a">
                          {{ item.name }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                  <!-- Nav End -->
                </div>
              </nav>
            </div>

            <!-- Footer Social Area -->
            <div class="footer-social-area mt-30">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Pinterest"
                v-for="(icon, index) in links"
                :key="index"
              >
                <i :class="icon.iconClassName" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "home",
  data() {
    return {
      items: [],
      links: [],
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

    // 首页友链数据
    async linkload() {
      const res = await this.$http.get("/links/list");
      this.links = res.data;
    },
  },

  created() {
    this.feach();
    this.linkload();
  },
};
</script>

