<template>
  <el-dialog title="标的设置" :visible.sync="editVisible" @close="onClose" :before-close="handleClose" width="61.8%">
    <el-form
      ref="form"
      :model="form"
      size="small"
      label-position="left"
      label-width="80px"
      style="width: 600px; margin-left:50px;"
    >
      <el-form-item label="主播昵称">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai"/>
          <el-option label="Zone two" value="beijing"/>
        </el-select>
      </el-form-item>
      <el-form-item label="期数">
        <el-input style="width:100px" v-model="form.name"/>
      </el-form-item>
      <el-form-item label="募资时间">
        <div style="display:flex">
          <el-date-picker v-model="form.date1" type="date" style="width: 45%;"/>
          <el-date-picker v-model="form.date2" type="date" style="width: 45%;"/>
          <!-- <span>上期募资时间</span><span>2019/10/11-2019/11/11</span> -->
        </div>
      </el-form-item>
      <el-form-item label="推广时间">
       <div style="display:flex">
          <el-date-picker v-model="form.date3" type="date" style="width: 45%;"/>
          <el-date-picker v-model="form.date4" type="date" style="width: 45%;"/>
          <!-- <span>上期推广时间</span><span>2019/10/11-2019/11/11</span> -->
        </div>
      </el-form-item>
      <el-form-item label="募集金额">
        <el-input style="width:100px" v-model="form.name"/>
      </el-form-item>
      <el-form-item label="分润占比">
        <el-input style="width:100px" v-model="form.name"/>
      </el-form-item>
      <el-form-item label="推广方式">
        <el-input style="width:100px" v-model="form.desc"/>
      </el-form-item>
      <el-form-item>
        <el-button @click="onClose" size="small">取 消</el-button>
        <el-button type="primary" @click="goNewTalk" size="small">确定</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  name: "typeEdit",
  props: {
    editVisible: {
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
    goNewTalk() {
      //点击确定处理业务逻辑之后触发一个'success1'方法名
      this.$emit("success");
    }
  }
};
</script>