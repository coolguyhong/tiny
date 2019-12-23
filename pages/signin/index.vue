<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Sign in to Portal</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="ID" name="id" type="text" v-model="id"/>
                  <v-text-field id="password" label="Password" name="password" type="password" v-model="password"/>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="signup">Sign Up</v-btn>
                <v-spacer />
                <v-btn color="primary" @click="login">Sign In</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  layout: 'loginLayout',
  name: 'index',
  data () {
    return {
      returnMsg: null,
      id: '',
      password: ''
    }
  },
  methods: {
    async login () {
      try {
        await this.$store.dispatch('login', {
          id: this.id,
          pw: this.password
        }).then(() => this.redirect())
      } catch (e) {
        this.returnMsg = e.message
      }
    },
    redirect () {
      this.$router.push('/')
    },
    signup () {
      this.$router.push('/signup')
    }
  }
}
</script>

<style scoped>

</style>
