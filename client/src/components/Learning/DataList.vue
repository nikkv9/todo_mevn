<template>
  <h4>{{ userInfo.name }}</h4>
  <span>{{ formatDate(userInfo.date) }}</span>
</template>

<script>
export default {
  name: "DataList",
  props: {
    userInfo: Object,
  },
  methods: {
    formatDate(dateString) {
      const parts = dateString.toString().split(" ");
      console.log(parts);

      const month = parts[1];
      const date = parts[2];
      const year = parts[3];
      return `${month} ${date}, ${year}`;
    },
  },
};
</script>

<style scoped></style>
