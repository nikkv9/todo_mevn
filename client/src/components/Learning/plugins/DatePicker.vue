<template>
  <VueDatePicker v-bind="date"></VueDatePicker>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  name: "DatePicker",
  components: { VueDatePicker },
  props: {
    date: String,
  },
};
</script>
