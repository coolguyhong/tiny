<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Sign Up</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="userId" label="ID" data-vv-name="id" required></v-text-field>
                  <v-text-field v-model="password" label="Password" data-vv-name="email" required></v-text-field>
                  <v-text-field v-model="name" label="Name" data-vv-name="name" required></v-text-field>
                  <v-text-field v-model="email" label="E-mail" data-vv-name="email" required></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="cancel">Cancel</v-btn>
                <v-spacer />
                <v-btn color="primary" @click="register">Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  //https://dev.to/mandeepm91/how-to-add-authentication-to-your-universal-nuxt-app-using-nuxt-auth-module-3ffm
  layout: 'loginLayout',
  name: 'index',
  data () {
    return {
      userId: '',
      password: '',
      name: '',
      email: ''
    }
  },
  methods: {
    cancel () {
      this.$router.push('/')
    },
    async register () {
      try {
        let data = {
          userId: this.userId,
          password: this.password,
          name: this.name,
          email: this.email,
          date: new Date().toISOString().slice(0, 19) // 2011-10-05T14:48:00
        }
        await axios.post('/api/v1/users', data).then((res) => {
          if (res.status === 200) {
            this.$router.push('/signin')
          }
        })
      } catch (e) {
        console.error(e.message)
      }
    }
  }
}
</script>

<style scoped>

</style>
