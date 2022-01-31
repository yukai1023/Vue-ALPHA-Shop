<template>
  <div class="part" v-show="currentStep === 2">
    <h2 class="form-title">運送方式</h2>
    <div class="form-container-2">
      <div class="form-container-deliver">
        <div class="deliver">
          <label for="standard">
            <div class="deliver-container">
              <div class="circle">
                <input
                  name="deliver"
                  type="radio"
                  value="standard"
                  id="standard"
                  data-deliver="free"
                  :checked="deliveryFee === 0"
                  @click="FreeButton"
                />
              </div>
              <div class="word">
                <span>標準運送</span>
                <p style="font-size: 12px">約3~7個工作天</p>
              </div>
              <div class="fee">
                <span>免費</span>
              </div>
            </div>
          </label>
        </div>
        <div class="deliver">
          <label for="dhl">
            <div class="deliver-container">
              <div class="circle">
                <input
                  name="deliver"
                  type="radio"
                  value="dhl"
                  id="dhl"
                  data-deliver="500"
                  @click="DHLButton"
                  :checked="deliveryFee === 500"
                />
              </div>
              <div class="word">
                <span style="font-weight: bold">DHL 貨運</span>
                <p style="font-size: 12px">48小時內送達</p>
              </div>
              <div class="fee">
                <span>$500</span>
              </div>
            </div>
          </label>
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
    deliveryFee: {
      type: Number,
      required: true,
    },
  },
  methods: {
    FreeButton() {
      this.$emit("FreeButton");
    },
    DHLButton() {
      this.$emit("DHLButton");
    },
  },
};
</script>