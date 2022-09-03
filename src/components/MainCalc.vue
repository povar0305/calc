<template>
  <v-row class="content">

    <v-row>
      <v-col
          cols="12"
          sm="6">
        <p class="text-justify">Тут вы можете перевести свою валюту в другие. На данный момент доступны такие валюты
          как - {{ Currency.join(', ') }}.</p>
      </v-col>
      <v-col
          cols="12"
          sm="5">
        <v-row>
          <v-col
              cols="12"
              sm="6">
            <v-text-field @input="checkAll" v-model="FirstSum" label="Ваша сумма" type="number"
                          class="input_white"></v-text-field>
          </v-col>
          <v-col
              cols="12"
              sm="6">
            <v-select
                :items="Currency"
                label="Ваша валюта"
                @input="onInputFirstCurrency"
                solo
            ></v-select>
          </v-col>
        </v-row>
        <v-select
            :items="Currency"
            label="Перевести в "
            @input="onInputSecondCurrency"
            solo
        ></v-select>
      </v-col>
    </v-row>
    <ModalResult v-bind:Result="this.Result"
                 v-bind:ShowPopup="this.ShowPopup"
                 v-bind:SecondCurrency="this.SecondCurrency"
                 @closePopup="closePopup">
    </ModalResult>
  </v-row>

</template>

<script>
import axios from "axios";
import ModalResult from "@/components/ModalResult";

export default {
  name: "MainCalc",
  components: {ModalResult},
  data: () => ({

    FirstSum: '',
    FirstCurrency: '',
    SecondCurrency: '',
    Currency: {},
    CurrencyStr: null,
    Result: null,
    NameCurrencyResult: {},
    ShowPopup: false,
    new: null
  }),
  methods: {
    onInputFirstCurrency(currency) {
      this.FirstCurrency = currency

      this.checkAll()
    },
    onInputSecondCurrency(currency) {
      this.SecondCurrency = currency
      this.checkAll()
    },
    checkAll() {
      if (this.FirstCurrency && this.SecondCurrency && this.FirstSum) {
        this.ShowPopup = true
        this.calcResult()

      } else {
        this.closePopup()
      }
    },
    closePopup() {
      this.ShowPopup = false
    },
    calcResult() {

      this.Result=this.FirstSum*this.NameCurrencyResult[this.FirstCurrency].Nominal
      console.log(this.Result)
      this.Result=this.Result*this.NameCurrencyResult[this.FirstCurrency].Value
      console.log(this.Result)
      this.Result=this.Result/this.NameCurrencyResult[this.SecondCurrency].Value
      console.log(this.Result)
      this.Result= this.Result/this.NameCurrencyResult[this.SecondCurrency].Nominal
      console.log(this.Result)

    }

  },
  mounted() {
    axios.get('https://www.cbr-xml-daily.ru/latest.js')
        .then(response => this.Currency = Object.keys(response.data.rates));
    axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
        .then(response => this.NameCurrencyResult = response.data.Valute);
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
  justify-content: space-between;

}

</style>

