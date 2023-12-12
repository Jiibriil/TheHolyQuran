<template>
  <div>
    <TheNav />
    <!-- <div
      v-for="verse in data"
      class="text-red-600 py-2 font-Naskh text-right"
    >
      {{ verse.text_uthmani }}
    </div> -->
    {{ data }}
    <NuxtPage />
  </div>
</template>

<script setup>
const { data, pending, error, refresh } = await useFetch(
  "https://api.quran.com/api/v4/chapters/1?fields=verses.text_uthmani",
  {
    headers: {
      Accept: "application/json",
    },
  }
);
</script>

<style scoped></style>
