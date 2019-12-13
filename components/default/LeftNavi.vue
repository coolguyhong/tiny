<template>
  <div>
    <v-navigation-drawer
      v-model="drawerChild"
      :mini-variant="miniVariantChild"
      :clipped="clippedChild"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    name: "LeftNavi",
    props: ['drawer', 'miniVariant', 'clipped'],
    data () {
      return {
        drawerChild: null,
        miniVariantChild: null,
        clippedChild: null,
        items: [
          {
            icon: 'mdi-apps',
            title: 'Welcome',
            to: '/'
          },
          {
            icon: 'mdi-chart-bubble',
            title: 'Inspire',
            to: '/inspire'
          }
        ]
      }
    },
    watch: {
      drawer (value) {
        this.drawerChild = value
      },
      miniVariant (value) {
        this.miniVariantChild = value
      },
      clipped (value) {
        this.clippedChild = value
      },
      drawerChild (value) {
        this.$emit('isDrawer', value)
      }
    }
  }
</script>

<style scoped>

</style>
