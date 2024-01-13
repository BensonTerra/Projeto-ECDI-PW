<template>
  <div id="containerBrazilMap" class="svg-container">
    <svg
      class="map"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      role="img"
      width="460"
      height="465"
    >
      <g class="model-green">
        <a
          v-for="state in states"
          :key="state.id"
          :class="['state', { 'clicked': state.clicked }]"
          :xlink:href="`#${state.id}`"
          @click="toggleAreaClicked(state)"
        >
          <desc class="description">{{ state.name }}</desc>
          <path
            class="shape"
            :d="state.path"
            @mousemove="updateHoverPosition"
            @mouseover="showAreaName(state.name)"
            @mouseout="hideAreaName"
          ></path>
          <image
            class="pin"
            v-if="state.clicked"
            :xlink:href="state.src" 
            width="7vw"
            height="7vh"
            :x="state.x - 7"
            :y="state.y - 7"
          ></image>
        </a>
      </g>
    </svg>

    <div
      class="hoverState"
      v-if="showArea"
      :style="{ top: hoverY + 'px', left: hoverX + 'px' }"
    >
      <p>{{ areaName }}</p>
    </div>
  </div>
</template>
  
  <script>
  import SideBar from "@/components/SideBar.vue";
  import { useUserStore } from '../stores/user.js';


  export default {
    components: {
      SideBar,
    },
  
    data() {
      return {
        hoverX: -10,
        hoverY: -10,
        showArea: false,
        areaName: "",
        areaClicked: false,
        nameState:"",
        userStore: useUserStore(),
      };
    },
    
    methods: {
      showAreaName(name) {
        this.showArea = true;
        this.areaName = name;
      },
      hideAreaName() {
        this.showArea = false;
        this.areaName = "";
      },
      updateHoverPosition(event) {
        this.hoverX = event.pageX + -520; // Adjust offset as needed
        this.hoverY = event.pageY - 100; // Adjust offset as needed
      },
      toggleAreaClicked(state) {
        state.clicked = !state.clicked;
      },
    },

    computed: {
      states() {
        return this.userStore.getStates 
      }
    },
  };
  </script>
  
  <style>
  #containerBrazilMap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 10px;
  }
  
  .shape {
    fill: #183d3d;
    transition: fill 0.3s ease; /* Add smooth transition */
  }
  
  .shape.clicked {
    fill: #091d1d; /* Darker color when clicked */
  }
  
  .label-state {
    fill: #fff;
  }
  
  .icon-state {
    fill: #183d3d;
  }
  
  .hoverState {
    position: absolute;
    background-color: #ecece4;
    color: #2e5f69;
    padding: 0.35rem;
    font-weight: bolder;
    border: none;
  }
  
  .pin {
    transition: opacity 0.3s ease; /* Add smooth transition for pin */
  }
  
  </style>
  