<template>
  <div class="">
    <v-tooltip bottom class="sm:hidden">
      <template #activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          fab
          dark
          depressed
          x-large
          color="transparent"
          v-on="on"
          @click="drawer = !drawer"
        >
          <v-icon x-large>mdi-microsoft-xbox-controller-menu</v-icon>
        </v-btn>
      </template>
      <span class="sm:invisible"> Menu</span>
    </v-tooltip>

    <v-navigation-drawer
      v-model="drawer"
      left
      temporary
      app
      full-width
      class="drawer purple darken-4"
    >
      <div class="w-full h-full p-6">
        <div class="align-center w-full h-3/6 flex flex-col">
          <v-btn class="Btn" dark depressed rounded x-large color="transparent">
            <span class="aboutUs text-xl"> </span>
            <v-icon class="" large>mdi-home</v-icon>
          </v-btn>
          <v-btn class="Btn" dark depressed rounded x-large color="transparent">
            <span class="aboutUs text-xl"> </span>
            <v-icon class="" large>mdi-meditation</v-icon>
          </v-btn>
          <v-btn depressed x-large dark color="transparent" class="">
            <span class="white--text text-xl"> </span>
            <v-icon large>mdi-shopping</v-icon>
          </v-btn>
          <v-btn depressed dark x-large color="transparent" class="">
            <span class="white--text text-xl"> </span>
            <v-icon class="cowboy">mdi-account-cowboy-hat</v-icon>
          </v-btn>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style scoped>
span {
  text-align: center;
  display: flex;
  justify-self: center;
  align-self: center;
}
</style>
