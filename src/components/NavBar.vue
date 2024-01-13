<template>
  <div v-if="isNavVisible">
    <img :src="currentImageSource" class="nav" :style="{ left: isProfileRoute ? '42.5%' : '50%' }" id="navBar" usemap="#workmap">
    <map name="workmap">
      <area target="" alt="" title="" href="" coords="143,2,196,51" shape="rect" @click.prevent="changeImageAndRoute('nav1', '/home')">
      <area target="" alt="" title="" href="" coords="372,1,445,50" shape="rect" @click.prevent="changeImageAndRoute('nav2', '/dashboard')">
      <area target="" alt="" title="" href="" coords="609,1,686,51" shape="rect" @click.prevent="changeImageAndRoute('nav3', '/curiosities')">
      <area v-if="getUserLogged" target="" alt="" title="" href="" coords="858,3,903,51" shape="rect" @click.prevent="changeImageAndRoute('nav4', '/profile')">
      <area v-else target="" alt="" title="" href="" coords="858,3,903,51" shape="rect" @click.prevent="changeImageAndRoute('nav4', '/login')">


    </map>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/user';
export default {
  data() {
    return {
      userStore:useUserStore(),
      navImages: {
        '/home': 'nav1',
        '/dashboard': 'nav2',
        '/curiosities': 'nav3',
        '/login': 'nav4',
        '/profile': 'nav4',
        '/dashboard/airports': 'nav2',
        '/dashboard/companies': 'nav2',
        '/dashboard/flights': 'nav2',
        '/profile/admin': 'nav4',
        '/profile/configurations': 'nav4',
        '/profile/favorites': 'nav4',
        // Add more routes and corresponding image names as needed
      },
      currentImageSource: "",
    };
  },
  computed: {
    isNavVisible() {
      return this.$route.path !== '/' && this.$route.path !== '/base' && this.$route.path !== '/pageBlocked';
    },
    getUserLogged(){
      return this.userStore.isUser
    },
    isProfileRoute() {
      return (
        this.$route.path.startsWith('/profile') ||
        this.$route.name === 'profileAdmin' ||
        this.$route.name === 'profileFavorites' ||
        this.$route.name === 'profileConfigurations'
      );
    }
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
      this.currentImageSource = `/src/assets/${this.navImages[currentRoute]}.png`;
    },
  },
};
</script>

<style>
.nav {
  position: relative;
  transform: translateX(-50%);
  display: flex;
}

</style>
