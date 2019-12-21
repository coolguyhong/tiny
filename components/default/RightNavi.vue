<template>
  <div>
    <v-navigation-drawer
      v-model="rightDrawerChild"
      :right="rightChild"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="fnRight">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'RightNavi',
  props: ['rightDrawer', 'right'],
  data () {
    return {
      rightDrawerChild: null,
      rightChild: null
    }
  },
  methods: {
    fnRight () {
      this.rightChild = this.rightChild !== true
      this.$emit('isRight', this.rightChild)
    }
  },
  watch: {
    rightDrawer (value) {
      this.rightDrawerChild = value
    },
    right (value) {
      this.rightChild = value
    },
    rightDrawerChild (value) {
      this.$emit('isRightDrawer', value)
    }
  }
}
</script>

<style scoped>

</style>
