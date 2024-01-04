<template>
    <div>
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
        currentImageSource: "src/assets/nav1.png",
      };
    },
    methods: {
      changeImageAndRoute(newImage, newRoute) {
        // Update the currentImageSource based on the clicked area
        this.currentImageSource = `src/assets/${newImage}.png`;
  
        // Use router.push() to navigate to the specified route
        this.$router.push(newRoute);
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
  