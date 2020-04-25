<template>
  <el-dialog
    class="player-detail"
    title="菜单编辑"
    :visible.sync="editVisiable"
    @close1="onClose"
    :before-close="handleClose"
    width="61.8%"
  >
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.data1" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.data2"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.data3"></el-input>
      </el-form-item>
      <el-button @click="onClose" size="small">取 消</el-button>
      <el-button type="primary" @click="confirm" size="small">确定</el-button>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  name: "typeEdit",
  props: {
    editVisiable: {
      default: false
    }
  },
  data() {
    return {
      form: {
        data1: "",
        data2: "",
        data3: ""
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
      console.log(this.form)
      //点击确定处理业务逻辑之后触发一个'success1'方法名
      this.$emit("success");
    },
    setFormValues(record) {
      console.log(record);
      this.form = record;
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