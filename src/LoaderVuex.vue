<template>
  <v-overlay
    :model-value="isLoading"
    :z-index="zIndex"
    class="align-center justify-center"
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
.align-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}
</style>
