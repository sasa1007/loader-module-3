<template>
  <v-overlay
    :model-value="isLoading"
    :opacity="opacity"
    :z-index="zIndex"
  >
    <v-progress-circular
      indeterminate
      :size="size"
      :color="color"
    ></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
  name: 'loader-vuex',
  props: {
    opacity: {
      type: Number,
      default: 0.7
    },
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
      default: 'primary'
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
.v-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
