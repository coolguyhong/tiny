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
      fixedChild: false
    }
  },
  watch: {
    fixed (value) {
      this.fixedChild = value
    },
    fixedChild (value) {
      alert(value)
    }
  }
}
</script>

<style scoped>

</style>
