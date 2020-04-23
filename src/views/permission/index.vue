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
        <el-form-item prop="region" label="权限名称">
          <el-input v-model="formInline.region" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item prop="region" label="所属分类">
           <el-select v-model="formInline.data3" placeholder="全部">
            <el-option label="全部" value="1"></el-option>
            <el-option label="顶级分类" value="2"></el-option>
            <el-option label="用户管理" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="region" label="状态">
          <el-select v-model="formInline.data3" placeholder="全部">
            <el-option label="全部" value="1"></el-option>
            <el-option label="显示" value="2"></el-option>
            <el-option label="隐藏" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="region" label="状态">
          <el-select v-model="formInline.data3" placeholder="全部">
            <el-option label="全部" value="1"></el-option>
            <el-option label="启用" value="2"></el-option>
            <el-option label="禁用" value="2"></el-option>
          </el-select>
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
          >新增权限</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 数据表格 -->
    <div class="mm_table">
      <el-table stripe :data="dataList" :header-cell-style="tableHead" :cell-style="tableCell">
        <el-table-column prop="data1" label="权限名称"></el-table-column>
        <el-table-column prop="data2" label="所属分类"></el-table-column>
        <el-table-column prop="data1" label="模块名称"></el-table-column>
        <el-table-column prop="data2" label="控制器名称"></el-table-column>
        <el-table-column prop="data1" label="方法名称"></el-table-column>
        <el-table-column prop="data2" label="是否显示"></el-table-column>
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
            <el-button size="mini" type="danger" @click="handleDisabled(scope.row)">禁用</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 菜单弹框 -->
    <edit-permission
      :editVisiable="editVisiable"
      @close="editVisiable=false"
      @success="handleEditSuccess"
    ></edit-permission>
    <add-permission
      :addVisiable="addVisiable"
      @close="addVisiable=false"
      @success="handleAddSuccess"
    ></add-permission>
  </div>
</template>
<script>
import editPermission from "./editPermission.vue";
import addPermission from "./addPermission.vue";
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
    editPermission,
    addPermission
  },
  created() {},

  methods: {
    handleDetail() {
      this.editVisiable = true;
    },
    handleAddSuccess() {
      this.addVisiable = false;
      this.$message({
        message: "新增权限成功",
        type: "success"
      });
      // this.initList();
    },
    handleEditSuccess() {
      this.editVisiable = false;
      this.$message({
        message: "修改权限成功",
        type: "success"
      });
      // this.initList();
    },
    //禁用
    handleDisabled() {
      console.log("禁用");
    }
  }
};
</script>
<style lang="scss" scope>
</style>
