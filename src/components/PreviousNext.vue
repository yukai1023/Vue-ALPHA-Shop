<template>
  <div class="left-content-bottom">
    <div id="btn-control" class="control-panel">
      <button
        v-show="currentStep !== 1"
        @click.prevent.stop="previousButton"
        class="btn btn-outline"
      >
        ← 上一步
      </button>
      <button
        v-show="currentStep !== 3"
        @click.prevent.stop="nextButton"
        class="btn btn-primary"
      >
        下一步 →
      </button>
      <button
        type="submit"
        v-show="currentStep === 3"
        class="btn btn-primary"
        @click="handleSubmit"
      >
        確認下單 →
      </button>
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
  methods: {
    nextButton() {
      this.$emit("nextButton");
    },
    previousButton() {
      this.$emit("previousButton");
    },
    handleSubmit() {
      this.$refs["shopForm"].submit((valid) => {
        if (valid) {
          console.log("123");
        } else {
          return false;
        }
      });
    },
  },
};
</script>