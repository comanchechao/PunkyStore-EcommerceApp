<template>
  <div class="h-carousel w-carousel bg-mainBlue">
    <image-zoom
      regular="../assets/images/Socks.webp"
      img-class="img-fluid"
      alt="Sky"
    >
    </image-zoom>
  </div>
</template>

<script>
import ImageZoom from "vue-image-zoomer";

export default {
  components: {
    ImageZoom,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
