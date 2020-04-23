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
      <el-form-item label="标的管理">
        <el-checkbox-group v-model="form.targetList">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="禁用"></el-checkbox>
          <el-checkbox label="选中且禁用"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="主播管理">
        <el-checkbox-group v-model="form.playerList">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="禁用"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="收益管理">
        <el-checkbox-group v-model="form.earningsList">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="禁用"></el-checkbox>
          <el-checkbox label="选中且禁用"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="系统设置">
        <el-checkbox-group v-model="form.systemList">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="权限1"></el-checkbox>
          <el-checkbox label="权限2"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="合作伙伴">
        <el-checkbox-group v-model="form.partnersList">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="禁用"></el-checkbox>
          <el-checkbox label="选中且禁用"></el-checkbox>
        </el-checkbox-group>
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
    },
    type: {
      default: 0 //0 行业类型 1 服务类型 2商品类型
    }
  },
  data() {
    return {
      form: {
        targetList: ["复选框 A"],
        playerList: ["复选框 B"],
        earningsList: ["复选框 C"],
        systemList: ["复选框 A", "复选框 C"],
        partnersList: ["禁用", "选中且禁用"]
      },
      formInline: {
        user: "",
        region: ""
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