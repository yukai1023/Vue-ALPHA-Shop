<template>
  <div class="part" v-show="currentStep === 1">
    <h2 class="form-title">寄送地址</h2>
    <div class="form-container-1">
      <div class="form-container-gender">
        <div class="form-row">
          <label>稱謂</label>
          <select
            name="gender"
            id="gender"
            class="w-100"
            v-model="form1.gender"
          >
            <option value="" disabled selected>請選擇稱謂</option>
            <option value="gentle">先生</option>
            <option value="women">小姐</option>
          </select>
        </div>
      </div>
      <div class="form-container-name">
        <div class="form-row">
          <label for="">姓名</label>
          <input
            name="name"
            id="name"
            type="text"
            class="w-100"
            placeholder="請輸入姓名"
            v-model="form1.name"
          />
        </div>
      </div>
      <div class="form-container-phone">
        <div class="form-row">
          <label for="">電話</label>
          <input
            name="phone"
            id="phone"
            type="text"
            class="w-100"
            placeholder="請輸入行動電話"
            v-model="form1.phone"
          />
        </div>
      </div>
      <div class="form-container-email">
        <div class="form-row">
          <label for="">Email</label>
          <input
            name="email"
            id="email"
            type="text"
            class="w-100"
            placeholder="請輸入電子郵件"
            v-model="form1.email"
          />
        </div>
      </div>
      <div class="form-container-cities">
        <div class="form-row">
          <label>縣市</label>
          <select
            name="County"
            id="cities"
            class="w-100"
            v-model="form1.County"
          >
            <option value="" disabled selected>請選擇縣市</option>
            <option value="taipei">臺北市</option>
            <option value="hsinchu">新竹縣</option>
            <option value="taichung">台中市</option>
            <option value="tainan">台南市</option>
            <option value="kaohsiung">高雄市</option>
            <option value="pingtung">屏東縣</option>
          </select>
        </div>
      </div>
      <div class="form-container-address">
        <div class="form-row">
          <label for="">地址</label>
          <input
            name="address"
            id="address"
            type="text"
            class="w-100"
            placeholder="請輸入地址"
            v-model="form1.address"
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
      form1: {
        gender: "",
        name: "",
        phone: "",
        email: "",
        County: "",
        address: "",
      },
    };
  },
  watch: {
    form1: {
      handler: function () {
        this.saveStorage();
      },
      deep: true,
    },
  },
  created() {
    this.form1 = JSON.parse(localStorage.getItem("form1")) || this.form1;
  },
  methods: {
    FreeButton() {
      this.$emit("FreeButton");
    },
    DHLButton() {
      this.$emit("DHLButton");
    },
    saveStorage() {
      localStorage.setItem("form1", JSON.stringify(this.form1));
    },
  },
};
</script>