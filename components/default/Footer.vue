<template>
  <div>
    <v-footer
      :fixed="fixedChild"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: ['fixed'],
  data () {
    return {
      fixedChild: null
    }
  },
  watch: {
    fixed (value) {
      this.fixedChild = value
    },
    fixedChild (value) {
      this.$emit('isFixed', value)
    }
  }
}
</script>

<style scoped>

</style>
