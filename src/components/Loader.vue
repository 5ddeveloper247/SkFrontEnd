<template>
  <div class="loader" v-if="isLoading">
    <div class="door-container">
      <div class="door left-door"></div>
      <div class="door right-door"></div>
      <div class="house">
        <div class="roof"></div>
        <div class="walls"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(87, 86, 86, 0.5);
  z-index: 9999;
}

.door-container {
  position: relative;
  width: 150px;
  height: 200px;
  perspective: 1000px;
}

.door {
  position: absolute;
  width: 65px;
  height: 170px;
  background: #F45D08;
  border: 2px solid #654321;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: transform 2s;
}

.left-door {
  left: 0;
  transform-origin: left;
  animation: open-left-door 2s forwards;
}

.right-door {
  right: 0;
  transform-origin: right;
  animation: open-right-door 2s forwards;
}

.house {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%);
}

.roof {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 50px solid #1811e461;
}

.walls {
  width: 100px;
  height: 50px;
  background: #f63809;
  border: 2px solid #ff0b30;
}

@keyframes open-left-door {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(-90deg);
  }
}

@keyframes open-right-door {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(90deg);
  }
}
</style>
