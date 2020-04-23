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
         <el-input v-model="listQuery.data1" placeholder="全部" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        </el-form-item>
        <el-form-item prop="region" label="投资人">
          <el-input v-model="listQuery.data2" placeholder="全部" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
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
          >重置</el-button> -->
        </el-form-item>
      </el-form>
    </div>
     <player-detail @close1="addvisiable=false" @success1="handleAddSuccess" :addVisiable="addvisiable"></player-detail>

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
        <el-table-column prop="data2" label="投资人"></el-table-column>
        <el-table-column prop="data3" label="入驻时间" width="160"></el-table-column>
        <el-table-column prop="data4" label="直播收益"></el-table-column>
        <el-table-column prop="data5" label="投资人收益"></el-table-column>
        <el-table-column prop="data6" label="入驻时长"></el-table-column>
        <el-table-column prop="data7" label="展示状态">
             <!-- <el-table-column label="状态">
          <template slot-scope="scope">
            <el-tag
              plain
              :type="scope.row.state==0 ? '': scope.row.state== 1?'success' : 'warning'"
            >{{scope.row.state|capitalize}}</el-tag>
          </template>
        </el-table-column>-->
        </el-table-column>
        <el-table-column prop="data8" label="最新修改时间" width="160"></el-table-column>
        <el-table-column
          prop="data9"
          label="操作"
          align="center"
          width="180"
          class-name="small-padding fixed-width"
        >
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="handleDetail(scope.row)">详细资料</el-button>
            <!-- <el-button v-if="scope.row.status!='published'" size="mini" type="success" @click="handleModifyStatus(scope.row,'published')">
            {{ $t('table.publish') }}
          </el-button>
          <el-button v-if="scope.row.status!='draft'" size="mini" @click="handleModifyStatus(scope.row,'draft')">
            {{ $t('table.draft') }}
            </el-button>-->
            <el-button size="mini" type="danger" @click="handleGover(scope.row)">禁用</el-button>
          </template>
        </el-table-column>
      </el-table>

    </div>
  </div>
</template>
<script>
import playerDetail from './playerDetail.vue'
export default {
  data() {
    return {
      addvisiable: false, //开启新对话弹框
      detailVisible: false, //详情信息弹框
      pageSize: 10, //每页显示数量
      pageNum: 1, //页数
      total: 0, //总条数
      orderName: "msgId",
      orderType: "DESC",
      caseNum: "", //案件号码弹框
      detailList: "", //单个详情列表
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
          data9: "3",
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
      tableHead: {
        "background-color": "#DCDFE6",
        height: "30px",
        "text-align": "center"
      },
      tableCell: {
        "text-align": "center",
        height: "20px"
      },
      //搜索选框测试数据
      listQuery: {
        page: 1,
        limit: 20,
        data1: undefined,
        data2: undefined,
        data3: undefined
      },
    };
  },
  components:{
    playerDetail,
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
     handleAddSuccess() {
      this.addvisiable = false;
      this.$message({
          message: '新增标的成功',
          type: 'success'
        });
      this.initList();
    },
    //表头搜索提交按钮
    onSubmit(formName) {},
    //表头搜索重置按钮
    onReset(formName) {
      this.$refs[formName].resetFields();
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
    //查看详情
    handleDetail(row) {
      // console.log(row);
      this.addvisiable=true
    },
    //提前结束
    handleGover(row) {
      console.log(row);
    },
    handleFilter(){
      console.log('搜索')
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
