<template>
  <div class="app-container">
    <!-- 搜素表头 -->
    <div class="mm_button">
      <el-form
        :inline="true"
        :model="listQuery"
        ref="serviceForm"
        class="demo-form-inline"
        size="small"
      >
        <el-form-item prop="region" label="主播艺名">
          <el-input
            v-model="listQuery.data1"
            placeholder="全部"
            style="width: 200px;"
            class="filter-item"
            @keyup.enter.native="handleFilter"
          />
        </el-form-item>
        <el-form-item prop="region" label="投资人">
          <el-input
            v-model="listQuery.data2"
            placeholder="全部"
            style="width: 200px;"
            class="filter-item"
            @keyup.enter.native="handleFilter"
          />
        </el-form-item>
        <el-form-item prop="region" label="展示状态">
          <el-select v-model="listQuery.data3" placeholder="全部">
            <el-option label="全部" value="1"></el-option>
            <el-option label="新入驻" value="2"></el-option>
            <el-option label="优质" value="3"></el-option>
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
        </el-form-item>
      </el-form>
    </div>
    <!-- 数据表格 -->
    <div class="mm_table">
       <el-table
        stripe
        :data="dataList"
        :header-cell-style="tableHead"
        :cell-style="tableCell"
        @sort-change="handleSort"
      >
        <el-table-column prop="data1" label="主播艺名"></el-table-column>
        <el-table-column prop="data2" label="分成占比"></el-table-column>
        <el-table-column prop="data3" label="昨日收益" ></el-table-column>
        <el-table-column prop="data4" label="上周收益"></el-table-column>
        <el-table-column prop="data5" label="总收益"></el-table-column>
        <el-table-column prop="data6" label="投资人昨日收益" width="160"></el-table-column>
        <el-table-column prop="data7" label="投资人上周收益" width="160"></el-table-column>
        <el-table-column prop="data7" label="投资人上月收益" width="160"></el-table-column>
        <el-table-column prop="data8" label="投资人总收益" width="160"></el-table-column>
        <el-table-column
          prop="data9"
          label="操作"
          align="center"
          class-name="small-padding fixed-width"
        >
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="handleDetail(scope.row)">录入</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页工具 -->
      <!-- <div class="page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>-->
    </div>
    <!-- 录入弹框 -->
    <detail-earnings :detailVisible="detailVisible" @close="detailVisible=false"></detail-earnings>
  </div>
</template>
<script>
import detailEarnings from "./detailEarnings.vue";
export default {
  data() {
    return {
      dialogVisible: false, //开启新对话弹框
      detailVisible: false, //详情信息弹框
      pageSize: 10, //每页显示数量
      pageNum: 1, //页数
      total: 0, //总条数
      dataList: [
        {
          data1: "陈1",
          data2: "大哥1",
          data3: "2019-05-07 15:22:12",
          data4: "1141",
          data5: "1000",
          data6: "90天",
          data7: "新入驻",
          data8: "2019-05-07 15:22:12",
          data9: "3"
        },
        {
          data1: "陈2",
          data2: "大哥2",
          data3: "2019-05-07 15:22:12",
          data4: "2323",
          data5: "1123",
          data6: "80天",
          data7: "新入驻",
          data8: "2019-05-07 15:22:12",
          data9: "3"
        },
        {
          data1: "陈3",
          data2: "大哥3",
          data3: "2019-05-07 15:22:12",
          data4: "1234",
          data5: "1123",
          data6: "60天",
          data7: "新入驻",
          data8: "2019-05-07 15:22:12",
          data9: "3"
        },
        {
          data1: "陈四",
          data2: "大哥4",
          data3: "2019-05-07 15:22:12",
          data4: "4533",
          data5: "1123",
          data6: "40天",
          data7: "优质",
          data8: "2019-05-07 15:22:12",
          data9: "3"
        }
      ],
      tableCell: {
        "text-align": "center",
        height: "20px"
      },
      tableHead: {
        "background-color": "#DCDFE6",
        height: "30px",
        "text-align": "center"
      },

      //搜索选框测试数据
      listQuery: {
        page: 1,
        limit: 20,
        data1: undefined,
        data2: undefined,
        data3: undefined
      }
    };
  },
  components: {
    detailEarnings
  },
  created() {
    this.initList();
  },

  filters: {
    capitalize: function(value) {
      return value == 0 ? "新对话" : value == 1 ? "已读取" : "已回复";
    }
  },

  methods: {
    //表头搜索提交按钮
    onSubmit(formName) {},
    //表头搜索重置按钮
    onReset(formName) {
      this.$refs[formName].resetFields();
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      // this.pageNum = 1;
      this.initList();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pageNum = val;
      this.initList();
    },

    // 初始化表格数据
    initList() {
      // this.loading = true;
      // getMessageList({
      //   orderName: this.orderName,
      //   orderType: this.orderType,
      //   pageNum: this.pageNum,
      //   pageSize: this.pageSize
      // }).then(res => {
      //   this.dataList = res.dataList;
      //   this.pageSize = res.myPageInfo.pageSize; //每页显示数量
      //   this.pageNum = res.myPageInfo.currentPage; //页数
      //   this.total = res.myPageInfo.total;
      //   this.loading = false;
      // });
    },
    //排序
    handleSort(column, prop, order) {
      console.log(column, prop, order);
      this.orderName = column.prop;
      if (column.order === "ascending") {
        this.orderType = "ASC";
      } else if (column.order === "descending") {
        this.orderType = "DESC";
      }
      this.page = 1;
      this.initList();
    },
    //录入
    handleDetail(row) {
      // console.log(row);
      this.detailVisible = true;
    },
    //提前结束
    handleGover(row) {
      console.log(row);
    },
    handleFilter() {
      console.log("搜索");
    },
    //获取详情弹框
    messageDetail(row) {
      this.detailVisible = true;
      getMessageDetailList({
        userId: parseInt(this.$store.getters.userId),
        msgId: row
      }).then(res => {
        this.detailList = res.otherData;
      });
    },
    //开启新的对话框
    startFilter() {
      this.dialogVisible = true;
    },
    //继续新对话业务
    goNewTalk() {
      this.dialogVisible = false;
      // console.log(this.caseNum);
      // addMessage({ referNum: this.caseNum }).then(res => {
      //   console.log(res);
      // });
    },
    //确认关闭弹框
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>
<style lang="scss" scope>
</style>
