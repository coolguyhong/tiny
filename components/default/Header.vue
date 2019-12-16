<template>
  <div>
    <v-app-bar
      :clipped-left="clippedChild"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="fnDrawer" />
      <v-btn
        icon
        @click.stop="fnMiniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariantChild ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fnClipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fnFixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="fnRightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['drawer', 'miniVariant', 'clipped', 'fixed', 'rightDrawer', 'title'],
  data () {
    return {
      drawerChild: null,
      miniVariantChild: null,
      clippedChild: null,
      rightDrawerChild: null,
      fixedChild: null
    }
  },
  methods: {
    fnDrawer () {
      this.drawerChild = this.drawerChild !== true
      this.$emit('isDrawer', this.drawerChild);
    },
    fnMiniVariant () {
      this.miniVariantChild = this.miniVariantChild !== true
      this.$emit('isMiniVariant', this.miniVariantChild)
    },
    fnClipped () {
      this.clippedChild = this.clippedChild !== true
      this.$emit('isClipped', this.clippedChild)
    },
    fnFixed () {
      this.fixedChild = this.fixedChild !== true
      this.$emit('isFixed', this.fixedChild)
    },
    fnRightDrawer () {
      this.rightDrawerChild = this.rightDrawerChild !== true
      this.$emit('isRightDrawer', this.rightDrawerChild)
    }
  },
  watch: {
    clipped (value) {
      this.clippedChild = value
    },
    drawer (value) {
      this.drawerChild = value
    },
    miniVariant (value) {
      this.miniVariantChild = value
    },
    fixed (value) {
      this.fixedChild = value
    },
    rightDrawer (value) {
      this.rightDrawerChild = value
    }
  }
}
</script>

<style scoped>

</style>
