<template>
  <el-dialog
    class="player-detail"
    title="主播详细资料"
    :visible.sync="addVisiable"
    @close1="onClose"
    :before-close="handleClose"
    width="61.8%"
  >
    <div class="box-card">
      <div>基本信息</div>
      <el-form   :inline="true" label-position="left" :model="formInline" class="demo-form-inline">
        <el-row>
          <el-col :span="12">
            <el-form-item label="主播艺名">
              <el-input v-model="formInline.user" placeholder="小葡娱乐"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="直播间ID">
              <el-input v-model="formInline.user" placeholder="123456"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="出生年月">
              <el-input v-model="formInline.user" placeholder="1998-8-8"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="主播类型">
              <el-input v-model="formInline.user" placeholder="可爱"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="直播方式">
              <el-input v-model="formInline.user" placeholder="直播方式"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="直播平台">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="直播经验">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="主播照片">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="展示状态">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="主播介绍">
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="formInline.user"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="box-card">
      <div>才艺展示</div>

      <div class="show">
        <span class="title">视频一</span>
        <el-input v-model="formInline.user" placeholder="请选择视频"></el-input>
      </div>
      <div class="show">
        <span class="title">视频一</span>
        <el-input v-model="formInline.user" placeholder="请选择视频"></el-input>
      </div>
      <div class="show">
        <span class="title">视频一</span>
        <el-input v-model="formInline.user" placeholder="请选择视频"></el-input>
      </div>
    </div>
    <div class="box-card">
      <div>其他信息</div>
      <div class="other">
        <span class="title">补充信息1</span>
        <el-input v-model="formInline.user" placeholder="请选择照片"></el-input>
        <el-input v-model="formInline.user" placeholder="请输入补充信息名称"></el-input>
      </div>
      <div class="other">
        <span class="title">补充信息2</span>
        <el-input v-model="formInline.user" placeholder="请选择照片"></el-input>
        <el-input v-model="formInline.user" placeholder="请输入补充信息名称"></el-input>
      </div>
      <div class="other">
        <span class="title">补充信息3</span>
        <el-input v-model="formInline.user" placeholder="请选择照片"></el-input>
        <el-input v-model="formInline.user" placeholder="请输入补充信息名称"></el-input>
      </div>
    </div>
    <el-button @click="onClose" size="small">取 消</el-button>
    <el-button type="primary" @click="goNewTalk" size="small">确定</el-button>
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
        name: "",
        region: "",
        date1: "",
        date2: "",
        date3: "",
        date4: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
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
      this.$emit("close1");
    },
    //点击取消关闭子组件点取消按钮，触发一'close1'方法名
    onClose() {
      this.$emit("close1");
    },
    goNewTalk() {
      //点击确定处理业务逻辑之后触发一个'success1'方法名
      this.$emit("success1");
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
      span{
        width: 10%;
      } 
    }
    .other {
      display: flex;
      box-sizing: border-box;
      .title{
        width: 20%;
      }
    }
  }
}
</style>