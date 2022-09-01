<template>
  <v-app>
    <v-main >
      <v-row>
        <v-col>
          <h1 class="text-center">Валютный калькулятор</h1>
          <h3 class="text-center"> Динамичный калькулятор валюты</h3>
        </v-col>
      </v-row>
      <main-calc></main-calc>
    </v-main>



  </v-app>
</template>

<script>

import MainCalc from "@/components/MainCalc";
export default {
  name: 'App',
  components: {MainCalc},
  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600;900&display=swap');

* {
  font-family: 'Montserrat', sans-serif;
}
$color_1: #0511F2;
$color_2: #4951F2;
$color_3: #999DF2;
$color_4: #B6B9F2;
$color_5: #ffffff;

$light_white: rgba(255, 255, 255, 0.7);
#app {
  background-color: $color_5;
  padding: 1rem;
  border-radius: 8px;

  & .v-main {
    background-color: $color_4;
    border-radius: 8px;
    padding: 1rem !important;
  }
}

h1 {
  font-weight: 900;
}

h3 {
  font-weight: 600;
}

p {
  margin-bottom: 0;
  font-weight: 300;
}
.theme--light.v-text-field--solo > .v-input__control > .v-input__slot,.theme--light.v-sheet {
  background: $light_white;
  backdrop-filter: blur(8px);
}
.v-input__slot:before{
border-color: $light_white !important;
}
.v-text-field > .v-input__control > .v-input__slot:after{
  border-color: white!important;
}

.v-application .primary--text , div.v-input.input_white   label{
  color: $light_white !important;
}
</style>