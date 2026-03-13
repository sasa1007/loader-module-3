<template>
  <VOverlay
    class="loader-vuex-overlay"
    :model-value="isLoading"
    :z-index="zIndex"
    scrim="rgba(15, 23, 42, 0.72)"
  >
    <VProgressCircular
      indeterminate
      :size="size"
      :color="color"
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
      default: 2000
    },
    size: {
      type: Number,
      default: 64
    },
    color: {
      type: String,
      default: 'white'
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.loaderModule.loaderDialog
    }
  }
}
</script>

<style scoped>
.loader-vuex-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
