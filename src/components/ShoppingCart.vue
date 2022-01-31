<template>
  <div class="right-content" id="price">
    <h2 class="right-content-title">購物籃</h2>
    <div class="right-content-item">
      <div class="item-left">
        <img src="../images/item-1@2x.png" alt="item-1" />
      </div>
      <div class="item-right">
        <span>破壞補丁修身牛仔褲</span>
        <div class="item-right-icon">
          <img
            class="icon"
            src="../images/icon-minus@2x.png"
            alt="item-minus"
            data-icon="minus"
            @click="item1Minus(), totalEmit()"
            v-show="shoppingCart.item1 !== 1"
          />
          <span data-id="item-1">{{ shoppingCart.item1 }}</span>
          <img
            class="icon"
            src="../images/icon-plus@2x.png"
            alt="item-plus"
            data-icon="plus"
            @click="item1Plus(), totalEmit()"
          />
        </div>
        <p>${{ shoppingCart.item1Cost }}</p>
      </div>
    </div>
    <div class="right-content-item">
      <div class="item-left">
        <img src="../images/item-2@2x.png" alt="item-2" />
      </div>
      <div class="item-right">
        <span>刷色直筒牛仔褲</span>
        <div class="item-right-icon">
          <img
            class="icon"
            src="../images/icon-minus@2x.png"
            alt="item-minus"
            data-icon="minus"
            @click="item2Minus(), totalEmit()"
            v-show="shoppingCart.item2 !== 1"
          />
          <span data-id="item-2">{{ shoppingCart.item2 }}</span>
          <img
            class="icon"
            src="../images/icon-plus@2x.png"
            alt="item-plus"
            data-icon="plus"
            @click="item2Plus(), totalEmit()"
          />
        </div>
        <p>${{ shoppingCart.item2Cost }}</p>
      </div>
    </div>
    <div class="right-content-fee">
      <span>運費</span>
      <p v-show="deliveryFee === 0">免費</p>
      <p v-show="deliveryFee === 500">$500</p>
    </div>
    <div class="right-content-total">
      <span>小計</span>
      <p id="total-amount">${{ sum }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    deliveryFee: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      shoppingCart: {
        item1: 1,
        item2: 1,
        item1Cost: 3999,
        item2Cost: 1299,
        total: 5298,
      },
    };
  },
  computed: {
    sum() {
      return this.shoppingCart.total + this.deliveryFee;
    },
  },
  watch: {
    shoppingCart: {
      handler: function () {
        this.saveStorage();
      },
      deep: true,
    },
  },
  created() {
    this.shoppingCart =
      JSON.parse(localStorage.getItem("shoppingCart")) || this.shoppingCart;
  },
  methods: {
    item1Plus() {
      this.shoppingCart.item1++;
      this.shoppingCart.item1Cost += 3999;
      this.shoppingCart.total += 3999;
    },
    item1Minus() {
      this.shoppingCart.item1--;
      this.shoppingCart.item1Cost -= 3999;
      this.shoppingCart.total -= 3999;
    },
    item2Plus() {
      this.shoppingCart.item2++;
      this.shoppingCart.item2Cost += 1299;
      this.shoppingCart.total += 1299;
    },
    item2Minus() {
      this.shoppingCart.item2--;
      this.shoppingCart.item2Cost -= 1299;
      this.shoppingCart.total -= 1299;
    },
    saveStorage() {
      localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart));
    },
    totalEmit() {
      this.$emit("totalEmit", this.shoppingCart.total);
    },
  },
};
</script>