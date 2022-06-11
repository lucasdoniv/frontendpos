<template>
  <v-app-bar app color="white">
    <div class="d-flex align-center">
      <router-link to="/">
        <v-img alt="logo" class="shrink mr-2" contain src="../assets/icone.png" transition="scale-transition"
          width="100" />
      </router-link>
    </div>

    <v-spacer></v-spacer>
    <v-autocomplete solo ref="country" :items="carSearchingHeader" label="Busque por modelo"
      placeholder="Busque por modelo" prepend-inner-icon="mdi-magnify" class="pt-6"></v-autocomplete>

    <v-btn depressed color="white" font-color="black">
      <span class="mr-2 black--text">DEPOIMENTOS</span>
    </v-btn>

    <v-btn depressed color="white" font-color="black">
      <span class="mr-2 black--text">FALE CONOSCO</span>
    </v-btn>
    <v-btn depressed color="white" font-color="black">
      <span class="mr-2 black--text">SOBRE NÓS</span>
    </v-btn>
    <router-link to="/login">
      <v-btn depressed color="#CFCACA" font-color="black">
        <span class="mr-2 black--text">Login</span>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',

  data: () => ({
    carSearchingHeader: ["Sandero", "Corsa", "Fiesta", "Cruze"]
  })
}
</script>
