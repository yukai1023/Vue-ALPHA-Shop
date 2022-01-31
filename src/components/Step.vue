<template>
  <form id="a-form">
    <div class="left-content-title">
      <h2 class="title">結帳</h2>
    </div>
    <div class="left-content-stepper">
      <div
        class="stepper-container"
        :class="{
          active: currentStep === 1,
          checked: currentStep === 2 || currentStep === 3,
        }"
      >
        <span class="stepper-container-line"></span>
        <div class="stepper-container-circle"></div>
      </div>
      <div
        class="stepper-container"
        :class="{
          active: currentStep === 2,
          checked: currentStep === 3,
        }"
      >
        <span class="stepper-container-line"></span>
        <div class="stepper-container-circle"></div>
      </div>
      <div
        class="stepper-container"
        :class="{
          active: currentStep === 3,
        }"
      >
        <div class="stepper-container-circle"></div>
      </div>
    </div>
  </form>
</template>


<script>
export default {
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
  },
};
</script>