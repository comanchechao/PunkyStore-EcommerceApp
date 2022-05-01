<template>
  <div class="h-carousel w-carousel bg-mainBlue">
    <inner-image-zoom
      class="w-96 h-96 bg-mainPurple"
      src="../src/assets/images/PunkyColor.webp"
      zoomSrc="../src/assets/images/PunkyHighlights.webp"
    />
  </div>
</template>

<script>
import "vue-inner-image-zoom/lib/vue-inner-image-zoom.css";
import InnerImageZoom from "vue-inner-image-zoom";

export default {
  components: {
    "inner-image-zoom": InnerImageZoom,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
