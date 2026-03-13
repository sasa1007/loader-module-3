<template>
  <v-overlay
    class="loader-vuex-overlay"
    :model-value="isLoading"
    :z-index="zIndex"
    scrim="rgba(15, 23, 42, 0.72)"
  >
    <v-progress-circular
      :color="color"
      :size="size"
      indeterminate
    />
  </v-overlay>
</template>

<script>
export default {
  name: 'loader-vuex',
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
      return this.$store.state.loaderModule.loaderDialog;
    },
  },
};
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
