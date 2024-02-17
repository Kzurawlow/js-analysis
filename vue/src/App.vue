<template>
  <div>
    <h1>Zdjęcia:</h1>
    <div class="buttonsContainer">
      <button @click="clearData">Wyczyść zdjęcia</button>
      <button @click="fetchData">Załaduj zdjęcia</button>
    </div>

    <div class="container">
      <div class="movie-card" v-for="photo in photos">
        <Photo :key="xd" :photo="photo" />
      </div>
    </div>
  </div>

</template>

<script>
import {ref, onMounted} from 'vue';
import Photo from "@/components/Photo.vue";
import {createClient} from 'pexels';

export default {
  components: {
    Photo
  },
  setup() {
    const photos = ref([]);
    const page = ref(1);

    const client = createClient('eqDK60Xl9lzIP4RHt4YCNdwO2mm5RLkFzl1WGyQytonWVWaHOOzdBhfr');

    async function fetchData() {
      try {
        const resp = await client.photos.search({query: 'Nature', per_page: 12, page: page.value})
        page.value += 1;
        photos.value = resp.photos;
      } catch (e) {
        console.log(e)
      }
    }

    function clearData() {
      page.value = 1;
      photos.value = [];
      console.log('1')
    }

    onMounted(fetchData);

    return {
      photos,
      fetchData,
      clearData
    }
  }
}
</script>

<style>
.buttonsContainer {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.movie-card {
  width: 30%;
}
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
  margin: auto;
}


body {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 320px;
  min-height: 100vh;
  color: unset;
  background: unset;
}

</style>
