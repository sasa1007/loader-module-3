<template>
  <VOverlay
    :model-value="isLoading"
    :z-index="zIndex"
    class="d-flex align-center justify-center"
    scrim="rgba(15, 23, 42, 0.72)"
  >
    <VProgressCircular
      :color="color"
      :size="size"
      indeterminate
    />
  </VOverlay>
</template>

<script>
import { VOverlay, VProgressCircular } from 'vuetify/components';

export default {
  name: 'loader-vuex',
  components: {
    VOverlay,
    VProgressCircular,
  },
  props: {
    zIndex: {
      type: Number,
      default: 2000,
    },
    size: {
      type: Number,
      default: 64,
    },
    color: {
      type: String,
      default: 'primary',
    },
  },
  computed: {
    isLoading() {
      // Privremeni hard‑code za debug – uvek prikazuj loader
      return true;
      // Kada završimo debug, vratiti na:
      // return this.$store.state.loaderModule.loaderDialog;
    },
  },
};
</script>

<style scoped>
</style>
