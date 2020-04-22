<template>
  <div class="app-container">
    <!-- 数据表格 -->
    <div class="mm_table">
      <el-table stripe :data="dataList" :header-cell-style="tableHead" :cell-style="tableCell">
        <el-table-column prop="data1" label="主播艺名"></el-table-column>
        <el-table-column prop="data2" label="投资人"></el-table-column>
        <el-table-column
          prop="data3"
          label="操作"
          align="center"
          width="180"
          class-name="small-padding fixed-width"
        >
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="handleDetail(scope.row)">修改</el-button>
            <el-button size="mini" type="danger" @click="handleGover(scope.row)">禁用</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
      }
    };
  },
  created() {},

  methods: {}
};
</script>
<style lang="scss" scope>
</style>
