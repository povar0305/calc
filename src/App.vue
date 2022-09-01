<template>
  <v-app>
    <v-main >
      <v-row>
        <v-col>
          <h1 class="text-center">Валютный калькулятор</h1>
          <h3 class="text-center"> Динамичный калькулятор валюты</h3>
        </v-col>
      </v-row>


    </v-main>



  </v-app>
</template>

<script>

export default {
  name: 'App',


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

$color_1: #D9D9D9;
$color_2: #A6A6A6;
$color_3: #737373;
$color_4: #595959;
$color_5: #262626;

#app {
  background-color: $color_1;
  padding: 1rem;
  border-radius: 8px;

  & .v-main {
    background-color: $color_2;
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
</style>