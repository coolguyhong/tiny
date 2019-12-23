<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Sign Up</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <form>
              <v-text-field
                v-validate="'required|max:10'"
                v-model="name"
                :counter="10"
                label="Name"
                data-vv-name="name"
                required
              ></v-text-field>
              <v-text-field
                v-validate="'required|email'"
                v-model="email"
                label="E-mail"
                data-vv-name="email"
                required
              ></v-text-field>
              <v-select
                v-validate="'required'"
                :items="items"
                v-model="select"
                label="Select"
                data-vv-name="select"
                required
              ></v-select>
              <v-checkbox
                v-validate="'required'"
                v-model="checkbox"
                value="1"
                label="Option"
                data-vv-name="checkbox"
                type="checkbox"
                required
              ></v-checkbox>

              <v-btn>submit</v-btn>
              <v-btn>clear</v-btn>
            </form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'loginLayout',
  name: 'index',
  data () {
    return {
      name: '',
      email: '',
      checkbox: '',
      items: [],
      select: ''
    }
  }
}
</script>

<style scoped>

</style>
