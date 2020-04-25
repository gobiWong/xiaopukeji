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
        <el-form-item prop="region" label="菜单">
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
          >新增菜单</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 数据表格 -->
    <div class="mm_table">
      <el-table stripe :data="dataList" :header-cell-style="tableHead" :cell-style="tableCell">
        <el-table-column prop="data1" label="菜单名称"></el-table-column>
        <el-table-column prop="data2" label="icon"></el-table-column>
        <el-table-column prop="data1" label="权重"></el-table-column>
        <el-table-column prop="data2" label="状态"></el-table-column>
        <el-table-column prop="data1" label="创建时间"></el-table-column>
        <el-table-column prop="data2" label="更新时间"></el-table-column>
        <el-table-column
          prop="data3"
          label="操作"
          align="center"
          width="180"
          class-name="small-padding fixed-width"
        >
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="handleDetail(scope.row)">修改</el-button>
            <!-- <el-button size="mini" type="danger" @click="handleGover(scope.row)">禁用</el-button> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 菜单弹框 -->
    <edit-menu :editVisiable="editVisiable" @close="editVisiable=false" @success="handleEditSuccess"></edit-menu>
    <add-menu :addVisiable="addVisiable" @close="addVisiable=false" @success="handleAddSuccess"></add-menu>
  </div>
</template>
<script>
import editMenu from "./editMenu.vue";
import addMenu from "./addMenu.vue";
export default {
  data() {
    return {
      addVisiable: false,
      editVisiable: false,
      dataList: [
        {
          data1: "陈1",
          data2: "大哥1",
          data3: "2019-05-07 15:22:12"
        },
        {
          data1: "陈2",
          data2: "大哥2",
          data3: "2019-05-07 15:22:12"
        },
        {
          data1: "陈3",
          data2: "大哥3",
          data3: "2019-05-07 15:22:12"
        },
        {
          data1: "陈四",
          data2: "大哥4",
          data3: "2019-05-07 15:22:12",
          data4: "4533"
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
    editMenu
  },
  created() {},

  methods: {
    handleDetail() {
      this.editVisiable = true;
    },
    handleAddSuccess() {
      this.addVisiable = false;
      this.$message({
        message: "新增菜单成功",
        type: "success"
      });
      // this.initList();
    },
    handleEditSuccess(){
      this.editVisiable = false;
      this.$message({
        message: "修改菜单成功",
        type: "success"
      });
      // this.initList();
    }
  }
};
</script>
<style lang="scss" scope>
</style>
