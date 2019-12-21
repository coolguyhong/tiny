<template>
  <v-app light>
    <LeftNavi @isDrawer="isDrawer" :drawer="drawer" :miniVariant="miniVariant" :clipped="clipped"></LeftNavi>

    <Header @isDrawer="isDrawer" @isRightDrawer="isRightDrawer" @isMiniVariant="isMiniVariant" @isClipped="isClipped" @isFixed="isFixed"
            :clipped="clipped" :drawer="drawer" :miniVariant="miniVariant" :rightDrawer="rightDrawer" :fixed="fixed" :title="title"></Header>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <RightNavi @isRightDrawer="isRightDrawer" @isRight="isRight" :rightDrawer="rightDrawer" :right="right"></RightNavi>

    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import LeftNavi from '@/components/default/LeftNavi.vue'
import Header from '@/components/default//Header.vue'
import RightNavi from '@/components/default/RightNavi.vue'

export default {
  components: {
    LeftNavi,
    Header,
    RightNavi
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods: {
    isDrawer (value) {
      this.drawer = value
    },
    isRightDrawer (value) {
      this.rightDrawer = value
    },
    isMiniVariant (value) {
      this.miniVariant = value
    },
    isClipped (value) {
      this.clipped = value
    },
    isFixed (value) {
      this.fixed = value
    },
    isRight (value) {
      this.right = value
    }
  }
}
</script>
