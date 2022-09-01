<template>
  <v-row class="content">

    <v-col
        cols="12"
        sm="3">
      <p class="text-justify">Тут вы можете перевести свою валюту в другие. На данный момент доступны такие валюты
        как - </p>
    </v-col>
    <v-col
        cols="12"
        sm="5">
      <v-text-field v-model="FirstSum" label="Ваша сумма" type="number" class="input_white"></v-text-field>
      <v-select
          :items="myArray"
          label="Ваша валюта"
          @input="onInputFirstCurrency"
          solo
      ></v-select>
      <v-select
          :items="myArray"
          label="Перевести в "
          @input="onInputSecondCurrency"
          solo
      ></v-select>
    </v-col>
    <v-col
        cols="12"
        sm="2">
      <h3 class="text-center">Вы получите </h3>
    </v-col>
  </v-row>

</template>

<script>
import axios from "axios";

export default {
  name: "MainCalc",
  data: () => ({
    Currency: ['1', '2'],
    Currency2: ['1', '2'],
    FirstSum: '',
    FirstCurrency: Array,
    SecondCurrency: '',
    myArray: {},
    newArrayCurrency: []
  }),
  methods: {
    onInputFirstCurrency(currency) {
      this.FirstCurrency = currency
    },
    onInputSecondCurrency(currency) {
      this.SecondCurrency = currency

    }

  },
  mounted() {
    axios.get('https://www.cbr-xml-daily.ru/latest.js')
        .then(response => this.myArray = Object.keys(response.data.rates));

  }
}
</script>

<style scoped lang="scss">

$color_1: #0511F2;
$color_2: #4951F2;
$color_3: #999DF2;
$color_4: #B6B9F2;
$color_5: #F2F2F2;
$light_white: rgba(255, 255, 255, 0.5);

.content {
  background-color: $color_3;
  border-radius: 8px;
  padding: 1rem !important;
  margin-left: 0;
  margin-right: 0;
}

</style>

