<template>
  <div>
    <div class="user_data_form">
      <form class="form_container" @submit.prevent="addUserData()">
        <input type="text" placeholder="Enter name" v-model="userName" />
        <VueDatePicker v-model="date" class="date_picker"></VueDatePicker>
        <button type="submit">Submit</button>
        <div v-for="item in userData" :key="item.id" class="user_lists">
          <DataList :userInfo="item" />
          <span @click="removeItem(item.id)"
            ><img src="../../assets/remove_icon.svg"
          /></span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import DatePicker from "./plugins/DatePicker.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import DataList from "./DataList.vue";
export default {
  name: "Learning",
  components: {
    VueDatePicker,
    DataList,
  },

  data() {
    return {
      userName: "",
      date: "",
      userData: [],
    };
  },

  methods: {
    addUserData() {
      let newUser = {
        id: Date.now(),
        name: this.userName,
        date: this.date,
      };
      if (!this.userName || !this.date) {
        return alert("Add all the fields!");
      }
      this.userData.push(newUser);
    },
    removeItem(id) {
      this.userData = this.userData.filter((item) => item.id !== id);
    },
  },
};
</script>

<style scoped>
.form_container {
  width: 25rem;
  margin: 0 auto;
  margin-top: 5rem;
}
.form_container input {
  width: 95%;
  margin-bottom: 1rem;
  padding: 0.6rem;
  outline: none;
  border: 1px solid lightgray;
}
.form_container button {
  margin-top: 2rem;
  background-color: teal;
  padding: 0.5rem;
  color: aliceblue;
  border: none;
  width: 100%;
}
.user_lists {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  border: 1px solid lightgray;
  padding: 0 1rem;
  position: relative;
}
.user_lists span {
  position: absolute;
  right: 1rem;
}
</style>
