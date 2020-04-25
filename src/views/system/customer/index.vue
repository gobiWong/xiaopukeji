<template>
  <div>
    <el-button>商户管理</el-button>
    <!-- <el-button @click="btn">获取用户信息</el-button> -->
    <!-- <h3>{{userInfo}}</h3> -->
  </div>
</template>
<script>
import { getList } from "@/api/table.js";
import { userInfo1 } from "@/api/userInfo1.js";
export default {
  data() {
    return {
      tableList: [],
      userInfo1: null
    };
  },
  created() {
    // this.initList();
  },
  methods: {
    async initList() {
      const res = await getList();
      console.log(res);
    },
    btn() {
      this.userInfo1 = userInfo1;
      console.log(this.userInfo1)
    }
  }
};
</script>