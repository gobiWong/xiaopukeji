<template>
  <el-dialog
    class="earnings-detail"
    :visible.sync="detailVisible"
    @close="onClose"
    :before-close="handleClose"
    width="61.8%"
  >
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">日统计</el-menu-item>
      <el-menu-item index="2">周统计</el-menu-item>
      <el-menu-item index="3">月统计</el-menu-item>
    </el-menu>
    <div class="mm_table" v-show="this.activeIndex==1?true:false">
      <el-table stripe :data="dataList1" :header-cell-style="tableHead" :cell-style="tableCell">
        <el-table-column prop="data1" label="日期"></el-table-column>
        <el-table-column prop="data2" label="斗鱼"></el-table-column>
        <el-table-column prop="data3" label="抖音"></el-table-column>
        <el-table-column prop="data4" label="总收益"></el-table-column>
        <el-table-column
          prop="data5"
          label="操作"
          align="center"
          width="180"
          class-name="small-padding fixed-width"
        >
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="handleDetail(scope.row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="mm_table" v-show="this.activeIndex==2?true:false">
      <el-table stripe :data="dataList2" :header-cell-style="tableHead" :cell-style="tableCell">
        <el-table-column prop="data1" label="周统计"></el-table-column>
        <el-table-column prop="data2" label="统计周期"></el-table-column>
        <el-table-column prop="data1" label="斗鱼"></el-table-column>
        <el-table-column prop="data2" label="抖音"></el-table-column>
        <el-table-column prop="data1" label="总收益"></el-table-column>
      </el-table>
    </div>
    <div class="mm_table" v-show="this.activeIndex==3?true:false">
      <el-table stripe :data="dataList3" :header-cell-style="tableHead" :cell-style="tableCell">
        <el-table-column prop="data1" label="月统计"></el-table-column>
        <el-table-column prop="data2" label="统计周期"></el-table-column>
        <el-table-column prop="data1" label="斗鱼"></el-table-column>
        <el-table-column prop="data2" label="抖音"></el-table-column>
        <el-table-column prop="data1" label="总收益"></el-table-column>
      </el-table>
    </div>
    <div class="footer-btn">
      <el-button @click="onClose" size="small">取 消</el-button>
      <el-button type="primary" @click="goNewTalk" size="small">确定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: "typeAdd",
  props: {
    detailVisible: {
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
      activeIndex: "1",
      formInline: {
        user: "",
        region: ""
      },
      dataList1: [
        {
          data1: "9月10日",
          data2: "1000",
          data3: "1000",
          data4: "1000",
          data5: ""
        },
        {
          data1: "9月9日",
          data2: "请输入",
          data3: "请输入",
          data4: "计算得出",
          data5: ""
        },
        {
          data1: "9月8日",
          data2: "1000",
          data3: "1000",
          data4: "0",
          data5: ""
        },
        {
          data1: "9月7日",
          data2: "1000",
          data3: "1000",
          data4: "1000",
          data5: ""
        }
      ],
      dataList2: [
        {
          data1: "第四周",
          data2: "大哥1",
          data3: "2019-05-07 15:22:12"
        },
        {
          data1: "第三周",
          data2: "大哥2",
          data3: "2019-05-07 15:22:12"
        },
        {
          data1: "第二周",
          data2: "大哥3",
          data3: "2019-05-07 15:22:12"
        },
        {
          data1: "第一周",
          data2: "大哥4",
          data3: "2019-05-07 15:22:12",
          data4: "4533"
        }
      ],
      dataList3: [
        {
          data1: "第一个月",
          data2: "大哥1",
          data3: "2019-05-07 15:22:12"
        },
        {
          data1: "第二个月",
          data2: "大哥2",
          data3: "2019-05-07 15:22:12"
        },
        {
          data1: "第三个月",
          data2: "大哥3",
          data3: "2019-05-07 15:22:12"
        },
        {
          data1: "第四个月",
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
    },
    handleSelect(key, keyPath) {
      console.log(key);
      this.activeIndex = key;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.footer-btn {
  margin-top: 31.8px;
}
.el-menu-demo {
  margin-bottom: 16px;
  border: none;
  .el-menu-item {
    font-size: 18px;
    font-weight: 700;
  }
  .is-active {
  }
}
</style>