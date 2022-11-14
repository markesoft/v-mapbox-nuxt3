<template>
  <main class="w-screen h-screen">
    <v-map class="w-full h-full" :options="state.map.options" />
  </main>
</template>

<script lang="ts">
import VMap from "v-mapbox";
export default defineComponent({
  name: "CommonMap",
  components: {
    VMap,
  },
  setup() {
    const state = reactive({
      map: {
        container: "map",
        accessToken:
          "pk.eyJ1Ijoic29jaWFsZXhwbG9yZXIiLCJhIjoiREFQbXBISSJ9.dwFTwfSaWsHvktHrRtpydQ",
        style: "mapbox://styles/mapbox/streets-v11?optimize=true",
        // style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
        center: [73.8567, 18.5204] as number[],
        zoom: 11,
        maxZoom: 22,
        crossSourceCollisions: false,
        failIfMajorPerformanceCaveat: false,
        preserveDrawingBuffer: true,
        hash: false,
        minPitch: 0,
        attributionControl: false,
        maxPitch: 60,
      },
    });

    return {
      state,
    };
  },
});
</script>

<style>
.w-screen {
  width: 100vw;
}
.h-screen {
  height: 100vh;
}
.h-full {
  height: 100%;
}
.w-full {
  width: 100%;
}
</style>