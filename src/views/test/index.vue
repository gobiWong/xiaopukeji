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
        <el-form-item prop="region" label="昵称">
          <el-select v-model="formInline.region" placeholder="全部">
            <el-option label="全部" value="1"></el-option>
            <el-option label="开启防撸" value="2"></el-option>
            <el-option label="正常尽量" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="region" label="状态">
          <el-select v-model="formInline.region" placeholder="全部">
            <el-option label="全部" value="1"></el-option>
            <el-option label="开启防撸" value="2"></el-option>
            <el-option label="正常尽量" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="region" label="期数">
          <el-select v-model="formInline.region" placeholder="全部">
            <el-option label="全部" value="1"></el-option>
            <el-option label="开启防撸" value="2"></el-option>
            <el-option label="正常尽量" value="3"></el-option>
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
          <el-button
            style="backgroundColor: #F67F77;color:#fff;border-radius:8px;"
            icon="el-icon-circle-plus-outline"
            size="small"
            @click="addvisiable=true"
          >添加标的</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 开启新对话弹框 -->
    <!-- <el-dialog title="开启新对话" :visible.sync="dialogVisible" width="28%" :before-close="handleClose">
      <div class="line"></div>
      <div class="new_talk">
        <div class="talk_content">请注明与此新对话相关的参考号码（计划号码，介绍人代码，帐户号码 [预付卡] ，或贷款号码）</div>
      </div>
      <p>案件号码</p>
      <el-input
        prefix-icon="el-icon-search"
        size="small"
        placeholder
        v-model="caseNum"
        class="input-with-select"
      ></el-input>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="goNewTalk" size="small">继 续</el-button>
      </span>
    </el-dialog>-->
    <Add @close1="addvisiable=false" @success1="handleAddSuccess" :addVisiable="addvisiable"></Add>

    <!-- 详细信息 -->
    <!-- <el-dialog
      title="详细信息"
      top="5vh"
      :visible.sync="detailVisible"
      width="80%"
      :before-close="handleClose"
    >
      <el-card class="box-card" shadow="never">
        <el-row class="user_info">
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <h3>参考#</h3>
              <p>565810</p>
              <h3>独一编号</h3>
              <p>2108960</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <h3>全名</h3>
              <p>565810</p>
              <h3>档案文件类型</h3>
              <p>2108960</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <h3>介绍人</h3>
              <p>565810</p>
              <h3>最后更新</h3>
              <p>2019-07-14 23:35:48</p>
            </div>
          </el-col>
        </el-row>
      </el-card>
      <el-card class="box-card" shadow="never">
        <el-row class="user_info">
          <el-col :span="24">
            <div class="grid-content bg-purple">
              <h3>验证报告：</h3>
              <ul class="report_list">
                <li>ASDCJJJYEUCB.PDF</li>
                <li>ADFRGIDFHEWFHIO(VER 20-190).PGF</li>
                <li>HHFHEWOFJDYFEJIIJISJAKCJAS(VER1.23).PDF</li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </el-card>
      <el-card class="box-card" shadow="never">
        <el-row class="third_info">
          <el-col :span="8">
            <div class="third_left">
              <p>
                <i>讯息#:</i>
                <span>1407860</span>
              </p>
              <p>
                <i>提交人:</i>
                <span>System（ITA）</span>
              </p>
              <p>
                <i>日期:</i>
                <span>2019-07-14 23:26:16</span>
              </p>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="third_right">
              <p>此协议/申请书将继续等待核准，直到我们收齐及审核所有文件</p>
              <p>若已提交所有的文件，我们将会立即审核此协议/申请书。必要时，我们将会发布一个新信息以要求任何缺少，不完整或额外（若需要）丶以及需要更正的资讯或文件。</p>
            </div>
          </el-col>
        </el-row>
      </el-card>
      <el-card class="box-card forth" shadow="never">
        <el-row class="third_info">
          <el-col :span="8">
            <div class="third_left">
              <p>
                <i>讯息#:</i>
                <span>1407860</span>
              </p>
              <p>
                <i>提交人:</i>
                <span>System（ITA）</span>
              </p>
              <p>
                <i>日期:</i>
                <span>2019-07-14 23:26:16</span>
              </p>
              <p>
                <i>附件:</i>
              </p>
              <ul class="report_list">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4...</li>
              </ul>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="forth_right">
              <p>您好：</p>
              <p>收到顾问的报聘协议书。</p>
              <p>经审核，烦请顾问568810查看上方文件分享区验证报告"SDF-dd.pdf"</p>
              <p>-若顾问确认与验证报告里提及的人士为同一人，请于此线上服务互动平台通知我们。</p>
              <p>-若顾问确认本人并非与验证报告"SDF-dd.pdf"里所提及的人士为同一人,请提交以下文件:</p>
              <p>(i)请完成并提交II204身份证明声明书.</p>
              <p>(ii)请在验证报告"SDF-dd.pdf"的每一页空白处简签,证明顾问已查阅相关文件。</p>
              <p>谢谢您。</p>
            </div>
          </el-col>
        </el-row>
      </el-card>
      <span slot="footer" class="dialog-footer">
        <el-button @click="detailVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="detailVisible = false" size="small">确 定</el-button>
      </span>
    </el-dialog>-->

    <!-- 数据表格 -->
    <div class="mm_table">
      <el-table
        stripe
        :data="dataList"
        :header-cell-style="tableHead"
        :cell-style="tableCell"
        @sort-change="handleSort"
      >
        <el-table-column prop="data1" label="主播昵称">
        </el-table-column>
        <el-table-column prop="data2" label="募资期数" ></el-table-column>
        <el-table-column prop="data3" label="募资时间"></el-table-column>
        <el-table-column prop="data4" label="推广时间"></el-table-column>
        <el-table-column prop="data5" label="目标募资金额" width="120"></el-table-column>
        <el-table-column prop="data6" label="已募资金额" width="100"></el-table-column>
        <el-table-column prop="data7" label="剩余募资金额" width="120"></el-table-column>
        <el-table-column prop="data8" label="分成占比"></el-table-column>
        <el-table-column prop="data9" label="已投人数"></el-table-column>
        <el-table-column prop="data10" label="当期募资状态" width="120"></el-table-column>
        <!-- <el-table-column label="状态">
          <template slot-scope="scope">
            <el-tag
              plain
              :type="scope.row.state==0 ? '': scope.row.state== 1?'success' : 'warning'"
            >{{scope.row.state|capitalize}}</el-tag>
          </template>
        </el-table-column>-->
        <el-table-column prop="data11" label="操作" align="center" width="180" class-name="small-padding fixed-width">
          <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleDetail(scope.row)">详情</el-button>
          <!-- <el-button v-if="scope.row.status!='published'" size="mini" type="success" @click="handleModifyStatus(scope.row,'published')">
            {{ $t('table.publish') }}
          </el-button>
          <el-button v-if="scope.row.status!='draft'" size="mini" @click="handleModifyStatus(scope.row,'draft')">
            {{ $t('table.draft') }}
          </el-button> -->
          <el-button  size="mini" type="danger" @click="handleGover(scope.row)">
          提前结束
          </el-button>
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
  </div>
</template>
<script>
// import {
//   getMessageList, //查询消息列表
//   addMessage, //新增消息
//   getMessageDetailList, //查询消息详情列表
//   addMessageDetail //新增消息详情
// } from "@/api/serviceOnline";
import Add from './add.vue'
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
          data2: "2",
          data3: "2019-5-7",
          data4: "2019-5-7",
          data5: "1123",
          data6: "1000",
          data7: "1000",
          data8: "10%",
          data9: "3",
          data10: "募集中",
          data11: "详情 提前结束"
        },
        {
          data1: "陈1",
          data2: "2",
          data3: "2019-5-7",
          data4: "2019-5-7",
          data5: "1123",
          data6: "1000",
          data7: "1000",
          data8: "10%",
          data9: "3",
          data10: "募集中",
          data11: "详情 提前结束"
        },
        {
          data1: "陈1",
          data2: "2",
          data3: "2019-5-7",
          data4: "2019-5-7",
          data5: "1123",
          data6: "1000",
          data7: "1000",
          data8: "10%",
          data9: "3",
          data10: "募集中",
          data11: "详情 提前结束"
        },
        {
          data1: "陈1",
          data2: "2",
          data3: "2019-5-7",
          data4: "2019-5-7",
          data5: "1123",
          data6: "1000",
          data7: "1000",
          data8: "10%",
          data9: "3",
          data10: "募集中",
          data11: "详情 提前结束"
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
      formInline: {
        user: "",
        region: ""
      }
    };
  },
  components:{
    Add
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
    //查看详情
    handleDetail(row){
      console.log(row)
    },
    //提前结束
    handleGover(row){
       console.log(row)
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
// .service_online {
//   .mm_button {
//     box-sizing: border-box;
//     padding-bottom: 10px;
//     border-bottom: 1px solid #dcdfe6;
//     text-align: left;
//   }
//   .line {
//     width: 100%;
//     height: 1px;
//     margin-bottom: 15px;
//     background-color: #ccc;
//   }
//   .new_talk {
//     border-left: 3px solid rgb(94, 194, 161);
//     width: 100%;
//     height: 55px;
//     line-height: 25px;
//     background: #cbdce0;
//     color: cornflowerblue;
//     margin-bottom: 10px;
//     .talk_content {
//       margin-left: 10px;
//     }
//   }
//   .input-with-select {
//     margin-top: 10px;
//   }
//   .mm_table {
//     margin-top: 10px;
//   }
//   .box-card {
//     background-color: #eee;
//     margin-bottom: 10px;
//   }
//   .report_list {
//     text-indent: 0.5em;
//     line-height: 20px;
//   }
//   .forth {
//     height: 260px;
//     .forth_right {
//       height: 200px;
//       line-height: 20px;
//       background-color: #fff;
//       margin: 10px 5px 0 0;
//     }
//   }
//   .user_info {
//     h3 {
//       font-weight: 600;
//       line-height: 20px;
//     }
//     p {
//       line-height: 20px;
//     }
//   }
//   .third_info {
//     .third_left {
//       p > i {
//         font-weight: 600;
//         line-height: 20px;
//       }
//     }
//     .third_right {
//       margin-top: 6px;
//       margin-right: 5px;
//       background-color: #fff;
//       line-height: 20px;
//     }
//   }
//   .forth_right {
//     height: 200px;
//   }
// }
</style>
