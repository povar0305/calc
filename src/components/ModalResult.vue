<template>
  <v-main v-if="this.ShowPopup" class="popup">
    <v-row class="popup_main">
      <v-col>
        <h3 class="text-center">Вы получите {{ Result.toFixed(2) }} {{ SecondCurrency }} </h3>
        <button @click="closePopup">
          Закрыть
        </button>
      </v-col>
    </v-row>
  </v-main>

</template>

<script>
export default {
  name: "ModalResult",
  props: {
    Result: Number,
    SecondCurrency: String,
    ShowPopup: Boolean
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    }
  }

}
</script>

<style scoped lang="scss">
$color_2: rgba(255, 255, 255, 0.5);
$color_2_1: #4951F2;

.popup {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent !important;
  justify-content: center;
  backdrop-filter: blur(4px);

  &_main {
    background-color: $color_2;
    border-radius: 8px;
    max-width: 350px;
    margin: 0 auto;
    min-height: 350px;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    display: flex;
    align-items: center;
    flex-direction: column;

    & .col {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & h3 {
        margin-bottom: 1rem;
      }

      & button {
        border: 1px solid white;
        padding: 0.5rem 1rem;
        background-color: transparent;
        border-radius: 8px;
        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

        &:hover {
          border-color: $color_2_1;

        }
      }
    }
  }

}
</style>