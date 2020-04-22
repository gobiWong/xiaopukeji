<template>
  <div>
    <img src="http://localhost.media.com/captcha">
    <input type="text" v-model="code">
    <button @click="btn">点击</button>
    <!-- <button @click="login">点击login</button>
    <button @click="user">点击user</button>
    <button @click="logout">点击logout</button> -->
  </div>
</template>
<script>
import axios from "axios";
axios.defaults.withCredentials = true;
export default {
  data() {
    return {
      res: "",
      code: ""
    };
  },
  created() {
    // this.initList();
  },
  methods: {
    btn() {
      // console.log('13')
      console.log(this.code);
      axios
        .post("http://localhost.media.com/admin/login/verify_code", {
          code: this.code
        })
        .then(res => {
          console.log(res);
        });
    },
    // login() {
    //   // console.log('13')
    //   console.log(this.code);
    //   axios
    //     .post("http://localhost.media.com/admin/login/test_login")
    //     .then(res => {
    //       console.log(res);
    //     });
    // },
    // user() {
    //   // console.log('13')
    //   console.log(this.code);
    //   axios
    //     .post("http://localhost.media.com/admin/login/test_user")
    //     .then(res => {
    //       console.log(res);
    //     });
    // },
    // logout() {
    //   // console.log('13')
    //   console.log(this.code);
    //   axios
    //     .post("http://localhost.media.com/admin/login/test_logout")
    //     .then(res => {
    //       console.log(res);
    //     });
    // }
    // async initList() {
    //   this.res = await axios.post("http://localhost.media.com/admin/login/verify_code",{code:'ubtej'});
    //   console.log(this.res)
    // }
  }
};
</script>