<template>
  <div>
   <img src="http://localhost.media.com/captcha"/>
   <input type="text" v-model="code">
   <button @click="btn">点击</button>
  </div>
</template>
<script>
 import axios from "axios";
 axios.defaults.withCredentials=true;
export default {
 
  data() {
    return {
      res: "",
      code:'',
    };
  },
  created() {
    // this.initList();

  },
  methods: {
    btn(){
      // console.log('13')
      console.log(this.code)
      axios.post("http://localhost.media.com/admin/login/verify_code",{code:this.code}).then(res=>{
        console.log(res)
      })
    }
    // async initList() {
    //   this.res = await axios.post("http://localhost.media.com/admin/login/verify_code",{code:'ubtej'});
    //   console.log(this.res)
    // }
  }
}
</script>