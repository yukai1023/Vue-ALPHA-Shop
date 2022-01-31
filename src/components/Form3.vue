<template>
  <div class="part" v-show="currentStep === 3">
    <h2 class="form-title">付款資訊</h2>
    <div class="form-container-3">
      <div class="form-container-address">
        <div class="form-row">
          <label>持卡人姓名</label>
          <input
            name="cardName"
            id="address"
            type="text"
            class="w-100"
            placeholder="John Doe"
            v-model="form3.cardName"
          />
        </div>
      </div>
      <div class="form-container-number">
        <div class="form-row">
          <label>卡號</label>
          <input
            name="cardNumber"
            id="number"
            type="text"
            class="w-100"
            placeholder="1111 2222 3333 4444"
            v-model="form3.cardNumber"
          />
        </div>
      </div>
      <div class="form-container-date">
        <div class="form-row">
          <label>有效期限</label>
          <input
            name="cardDate"
            id="date"
            type="text"
            class="w-100"
            placeholder="MM/YY"
            v-model="form3.cardDate"
          />
        </div>
      </div>
      <div class="form-container-cvc">
        <div class="form-row">
          <label>CVC/CCV</label>
          <input
            name="cvc/ccv"
            id="cvc"
            type="text"
            class="w-100"
            placeholder="MM/YY"
            v-model="form3.cvc"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      form3: {
        cardName: "",
        cardNumber: "",
        cardDate: "",
        cvc: "",
      },
    };
  },
  watch: {
    form3: {
      handler: function () {
        this.saveStorage();
      },
      deep: true,
    },
  },
  created() {
    this.form3 = JSON.parse(localStorage.getItem("form3")) || this.form3;
  },
  methods: {
    saveStorage() {
      localStorage.setItem("form3", JSON.stringify(this.form3));
    },
  },
};
</script>