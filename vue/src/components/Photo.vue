<template>
  <div class="photoCard">
    <div class="photoName">{{photo.alt}}</div>
    <img width="250" height="360" :src="`${photo.src.original}`" />
    <button type="button" @click="toggleDialog">Show photo data</button>

  </div>
  <div v-if="dialogVisible" class="modal-overlay" />
</template>

<script>
import {ref} from "vue";

export default {
  props: {
    photo: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const dialogVisible = ref(false);
    function toggleDialog() {
      dialogVisible.value = !dialogVisible.value;
    }


    return {
      toggleDialog,
      dialogVisible
    }
  }
}

</script>

<style scoped>
img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.photoCard {
  width: 250px;
  height: 390px;
  padding: 20px;
  background-color: #f1f1f1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.photoName {
  display: flex;
  justify-content: flex-start;
  width: 250px;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: #fff;
  padding: 20px;
  min-width: 30%;
  max-width: 80%;
  overflow-y: auto;
  max-height: 80vh;
}

.modalHeader {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  .h3 {
    padding: 0;
    margin: 0;

  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
}
</style>
