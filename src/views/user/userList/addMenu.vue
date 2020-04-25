<template>
  <el-dialog
    class="player-detail"
    title="添加用户"
    :visible.sync="addVisiable"
    @close1="onClose"
    :before-close="handleClose"
    width="61.8%"
  >
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
      <el-input v-model="form.username" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>

      <el-button @click="onClose" size="small">取 消</el-button>
      <el-button type="primary" @click="confirm" size="small">确定</el-button>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  name: "typeAdd",
  props: {
    addVisiable: {
      default: false
    },
    type: {
      default: 0 //0 行业类型 1 服务类型 2商品类型
    }
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
        email: "",
        phone: ""
      }
    };
  },
  methods: {
    //点击叉叉按钮关闭，触发一'close1'方法名
    handleClose() {
      this.$emit("close");
    },
    //点击取消关闭子组件点取消按钮，触发一'close1'方法名
    onClose() {
      this.$emit("close");
    },
    confirm() {
      //点击确定处理业务逻辑之后触发一个'success1'方法名
      this.form = {};
      this.$emit("success");
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.player-detail {
  .box-card {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 6.18px 0;
    .show {
      display: flex;
      span {
        width: 10%;
      }
    }
    .other {
      display: flex;
      box-sizing: border-box;
      .title {
        width: 20%;
      }
    }
  }
}
</style>