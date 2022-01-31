<template>
  <nav class="nav">
    <div class="nav-logo">
      <div class="logo"></div>
    </div>
    <input type="checkbox" class="nav-toggle" id="nav-toggle" />
    <div class="nav-item">
      <a class="nav-link" href="#">男款</a>
      <a class="nav-link" href="#">女款</a>
      <a class="nav-link" href="#">最新消息</a>
      <a class="nav-link" href="#">客製商品</a>
      <a class="nav-link" href="#">聯絡我們</a>
    </div>
    <div class="nav-icon">
      <div class="nav-icon-size" id="search"></div>
      <div class="nav-icon-size" id="shop"></div>
      <label class="nav-icon-size" for="dark-toggle" id="dark-mode"></label>
      <input
        type="checkbox"
        class="dark-input"
        id="dark-toggle"
        @click="darkModeToggleHandler"
      />
    </div>
    <label class="nav-toggle-label" for="nav-toggle">
      <span class="hamburger"></span>
    </label>
  </nav>
</template>

<script>
export default {
  methods: {
    darkModeToggleHandler(event) {
      if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    },
  },
};
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}
</style>