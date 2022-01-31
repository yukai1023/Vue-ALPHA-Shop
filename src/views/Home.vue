// ./src/views/Home.vue
<template>
  <div class="container">
    <Navbar />
    <div class="main-content">
      <div class="left-content">
        <Step :current-step="currentStep" />
        <div class="left-content-form">
          <form id="shopForm">
            <Form1 :current-step="currentStep" />
            <Form2
              :current-step="currentStep"
              :delivery-fee="deliveryFee"
              @DHLButton="DHLFee"
              @FreeButton="FreeFee"
            />
            <Form3 :current-step="currentStep" />
          </form>
        </div>
      </div>
      <ShoppingCart :delivery-fee="deliveryFee" @totalEmit="equalTotal" />
    </div>
    <div class="left-content-bottom">
      <div id="btn-control" class="control-panel">
        <button
          v-show="currentStep !== 1"
          @click.prevent.stop="previousStep"
          class="btn btn-outline"
        >
          ← 上一步
        </button>
        <button
          v-show="currentStep !== 3"
          @click.prevent.stop="nextStep"
          class="btn btn-primary"
        >
          下一步 →
        </button>
        <button
          v-show="currentStep === 3"
          class="btn btn-primary"
          @click="handleSubmit(), alert()"
        >
          確認下單 →
        </button>
      </div>
    </div>
    <Footer />
  </div>
</template>


<script>
import Navbar from "./../components/Navbar";
import Step from "./../components/Step";
import Form1 from "./../components/Form1";
import Form2 from "./../components/Form2";
import Form3 from "./../components/Form3";
import ShoppingCart from "./../components/ShoppingCart";
import PreviousNext from "./../components/PreviousNext";
import Footer from "./../components/Footer";
export default {
  components: {
    Navbar,
    Step,
    Form1,
    Form2,
    Form3,
    ShoppingCart,
    PreviousNext,
    Footer,
  },
  data() {
    return {
      currentStep: Number(this.$route.name),
      deliveryFee: 0,
      total: 5298,
      modal: [],
    };
  },
  watch: {
    deliveryFee() {
      this.FeeStorage();
    },
  },
  computed: {
    sum() {
      return this.deliveryFee + this.total;
    },
  },
  created() {
    let deliveryFee = JSON.parse(localStorage.getItem("deliveryFee")) || [];
    this.deliveryFee = Number(deliveryFee);
  },
  methods: {
    nextStep() {
      if (this.currentStep === 1) {
        this.$router.push({ name: "2" });
      } else if (this.currentStep === 2) {
        this.$router.push({ name: "3" });
      }
      this.currentStep++;
    },
    previousStep() {
      if (this.currentStep === 3) {
        this.$router.push({ name: "2" });
      } else if (this.currentStep === 2) {
        this.$router.push({ name: "1" });
      }
      this.currentStep--;
    },
    FreeFee() {
      this.deliveryFee = 0;
    },
    DHLFee() {
      this.deliveryFee = 500;
    },
    FeeStorage() {
      localStorage.setItem("deliveryFee", JSON.stringify(this.deliveryFee));
    },
    handleSubmit() {
      const form = document.getElementById("shopForm");
      const formData = new FormData(form);
      let all = [];
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
        all.push("|" + name + ": " + value + "|");
      }
      all.push("|" + "total" + ": " + this.sum + "|");
      console.log("total" + ": " + this.sum);
      this.modal = all;
    },
    equalTotal(total) {
      this.total = total;
    },
    alert() {
      let alert = this.modal.toString();
      this.$swal(alert);
    },
  },
};
</script>
