<template>
  <div class="app-container">
    <!-- 搜素表头 -->
    <div class="mm_button">
      <el-form
        :inline="true"
        :model="formInline"
        ref="serviceForm"
        class="demo-form-inline"
        size="small"
      >
        <el-form-item prop="region">
          <el-input v-model="formInline.region" placeholder="请输入内容"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            style="backgroundColor:#06A6F6;color:#fff;border-radius:8px;"
            icon="el-icon-search"
            @click="onSubmit('serviceForm')"
            plain
            size="small"
          >查询</el-button>
          <!-- <el-button
            style="backgroundColor: #656FE7;color:#fff;border-radius:8px;"
            icon="el-icon-delete"
            @click="onReset('serviceForm')"
            plain
            size="small"
          >重置</el-button>-->
          <el-button
            style="backgroundColor: #F67F77;color:#fff;border-radius:8px;"
            icon="el-icon-circle-plus-outline"
            size="small"
            @click="addVisiable=true"
          >新增用户</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 数据表格 -->
    <div class="mm_table">
      <el-table stripe :data="dataList" :header-cell-style="tableHead" :cell-style="tableCell">
        <el-table-column prop="data1" label="姓名"></el-table-column>
        <el-table-column prop="data2" label="邮箱"></el-table-column>
        <el-table-column prop="data3" label="电话"></el-table-column>
        <el-table-column prop="data4" label="创建时间"></el-table-column>
        <el-table-column prop="data5" label="状态"></el-table-column>
        <el-table-column
          prop="data6"
          label="操作"
          align="center"
          width="249"
          class-name="small-padding fixed-width"
        >
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="handleDetail(scope.row)">修改</el-button>
            <el-button size="mini" type="danger" @click="handleGover(scope.row)">删除</el-button>
            <el-button size="mini" type="success" @click="handleDistribution(scope.row)">分配</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 编辑弹框 -->
    <edit-menu
      ref="edit"
      :editVisiable="editVisiable"
      @close="editVisiable=false"
      @success="handleEditSuccess"
    ></edit-menu>
    <!-- 新增弹框 -->
    <add-menu :addVisiable="addVisiable" @close="addVisiable=false" @success="handleAddSuccess"></add-menu>
    <!-- 分配角色 -->
    <distribution :disVisiable="disVisiable" @close="disVisiable=false"></distribution>
  </div>
</template>
<script>
import editMenu from "./editMenu.vue";
import addMenu from "./addMenu.vue";
import distribution from "./distribution.vue";
export default {
  data() {
    return {
      addVisiable: false,
      editVisiable: false,
      disVisiable: false,
      dataList: [
        {
          data1: "admin",
          data2: "543332860@qq.com",
          data3: "13222332322",
          data4: "2019-05-07 15:22:12",
          data5: "开启",
          data6: ""
        },
        {
          data1: "editor",
          data2: "1233234@163.com",
          data3: "13890087888",
          data4: "2019-05-07 15:22:12",
          data5: "开启",
          data6: ""
        },
        {
          data1: "陈1毛",
          data2: "23829183@qq.com",
          data3: "13457878789",
          data4: "2019-05-07 15:22:12",
          data5: "关闭",
          data6: ""
        },
        {
          data1: "陈12",
          data2: "23829183@qq.com",
          data3: "13457878789",
          data4: "2019-05-07 15:22:12",
          data5: "开启",
          data6: "2019-05-07 15:22:12"
        }
      ],
      tableHead: {
        "background-color": "#DCDFE6",
        height: "30px",
        "text-align": "center"
      },
      tableCell: {
        "text-align": "center",
        height: "20px"
      },
      formInline: {
        region: ""
      }
    };
  },
  components: {
    addMenu,
    editMenu,
    distribution
  },
  created() {},

  methods: {
    handleDetail(record) {
      this.editVisiable = true;
      this.$refs.edit.setFormValues(record)
    },
    handleAddSuccess() {
      this.addVisiable = false;
      this.$message({
        message: "新增菜单成功",
        type: "success"
      });
      // this.initList();
    },
    handleEditSuccess() {
      this.editVisiable = false;
      this.$message({
        message: "修改菜单成功",
        type: "success"
      });
      // this.initList();
    },
    handleGover() {
      this.$message({
        message: "删除成功",
        type: "success"
      });
    },
    handleDistribution() {
      this.disVisiable = true;
    }
  }
};
</script>
<style lang="scss" scope>
</style>
