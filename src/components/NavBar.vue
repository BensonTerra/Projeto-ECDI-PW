<template>
  <div v-if="isNavVisible">
    <img :src="currentImageSource" class="nav" id="navBar" usemap="#workmap">
    <map name="workmap">
      <area target="" alt="" title="" href="" coords="143,2,196,51" shape="rect" @click.prevent="changeImageAndRoute('nav1', '/home')">
      <area target="" alt="" title="" href="" coords="372,1,445,50" shape="rect" @click.prevent="changeImageAndRoute('nav2', '/dashboard')">
      <area target="" alt="" title="" href="" coords="609,1,686,51" shape="rect" @click.prevent="changeImageAndRoute('nav3', '/curiosities')">
      <area target="" alt="" title="" href="" coords="858,3,903,51" shape="rect" @click.prevent="changeImageAndRoute('nav4', '/profile')">
    </map>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navImages: {
        '/home': 'nav1',
        '/dashboard': 'nav2',
        '/curiosities': 'nav3',
        '/profile': 'nav4',
        // Add more routes and corresponding image names as needed
      },
      currentImageSource: "",
    };
  },
  computed: {
    isNavVisible() {
      return this.$route.path !== '/' && this.$route.path !== '/base' && this.$route.path !== '/pageBlocked';
    },
  },
  watch: {
    '$route'(to, from) {
      // Update the currentImageSource when the route changes
      this.updateNavImage();
    },
  },
  mounted() {
    // Initial update of the navbar image based on the current route
    this.updateNavImage();
  },
  methods: {
    changeImageAndRoute(newImage, newRoute) {
      // Update the currentImageSource based on the clicked area
      this.currentImageSource = `src/assets/${newImage}.png`;

      // Use router.push() to navigate to the specified route
      this.$router.push(newRoute);
    },
    updateNavImage() {
      // Get the current route and update the navbar image
      const currentRoute = this.$route.path;
      this.currentImageSource = `src/assets/${this.navImages[currentRoute]}.png`;
    },
  },
};
</script>

<style>
.nav {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}
</style>
