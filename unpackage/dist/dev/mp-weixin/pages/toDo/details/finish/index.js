"use strict";
const common_vendor = require("../../../../common/vendor.js");
const ToDoCard = () => "../../component/toDoCard/index.js";
const _sfc_main = {
  components: {
    ToDoCard
  },
  data() {
    return {
      dataList: [
        {
          title: "待办事项标题",
          time: "2023-06-14 15:00 发布",
          status: "3",
          person: "藤桑、藤桑2、藤桑3",
          info: "待办事项内容待办事项内容待办事项内容待办事项内容待办事项内容待办事项内容待办事"
        }
      ],
      fileLists: [
        {
          name: "file.txt",
          extname: "txt",
          isActive: false
        },
        {
          name: "file.txt",
          extname: "txt",
          isActive: false
        },
        {
          name: "file.txt",
          extname: "txt",
          isActive: true
        }
      ],
      listData: [
        {
          name: "处理人A",
          status: "0"
        },
        {
          name: "处理人A",
          status: "1"
        },
        {
          name: "处理人A",
          status: "1"
        }
      ]
    };
  },
  methods: {
    checkFile(isActive) {
      console.log(isActive);
      isActive = !isActive;
    },
    downloadFile() {
      common_vendor.index.chooseImage({
        count: 6,
        sizeType: ["original", "compressed"],
        sourceType: ["album"],
        success: function(res) {
          console.log(JSON.stringify(res.tempFilePaths));
        }
      });
    }
  }
};
if (!Array) {
  const _component_ToDoCard = common_vendor.resolveComponent("ToDoCard");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  (_component_ToDoCard + _easycom_uni_card2 + _easycom_uni_icons2 + _easycom_uni_tag2)();
}
const _easycom_uni_card = () => "../../../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_tag = () => "../../../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
if (!Math) {
  (_easycom_uni_card + _easycom_uni_icons + _easycom_uni_tag)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      ["all-list"]: $data.dataList
    }),
    b: common_vendor.f(2, (item, index, i0) => {
      return {
        a: index
      };
    }),
    c: common_vendor.p({
      ["is-shadow"]: false,
      border: false,
      margin: "0.75rem",
      padding: "0.75rem 0"
    }),
    d: common_vendor.f($data.fileLists, (item, index, i0) => {
      return common_vendor.e({
        a: item.isActive
      }, item.isActive ? {
        b: "527ec110-3-" + i0 + ",527ec110-2",
        c: common_vendor.p({
          ["custom-prefix"]: "custom-icon",
          type: "cloud-download",
          size: "20",
          color: "#fff"
        }),
        d: common_vendor.o((...args) => $options.downloadFile && $options.downloadFile(...args), index)
      } : {}, {
        e: !item.isActive
      }, !item.isActive ? {
        f: "527ec110-4-" + i0 + ",527ec110-2",
        g: common_vendor.p({
          ["custom-prefix"]: "custom-icon",
          type: "checkbox",
          size: "20",
          color: "#0163F5"
        })
      } : {}, {
        h: index,
        i: common_vendor.o(($event) => $options.checkFile(item.isActive), index)
      });
    }),
    e: common_vendor.p({
      ["is-shadow"]: false,
      border: false,
      margin: "0.75rem",
      padding: "0.75rem 0"
    }),
    f: common_vendor.f($data.listData, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.name),
        b: item.status === "0"
      }, item.status === "0" ? {
        c: "527ec110-6-" + i0 + ",527ec110-5",
        d: common_vendor.p({
          text: "未处理",
          ["custom-style"]: "background-color: #FFE9E8; border: none; color: #EB1C38;"
        })
      } : {}, {
        e: item.status === "1"
      }, item.status === "1" ? {
        f: "527ec110-7-" + i0 + ",527ec110-5",
        g: common_vendor.p({
          text: "已处理",
          ["custom-style"]: "background-color: #E8FFF6; border: none; color: #08C296;"
        })
      } : {}, {
        h: item.status === "1"
      }, item.status === "1" ? {} : {}, {
        i: index
      });
    }),
    g: common_vendor.p({
      ["is-shadow"]: false,
      border: false,
      margin: "0.75rem",
      padding: "0.75rem 0"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/project/wangjunjun/tengyi/test-tengyi-app/pages/toDo/details/finish/index.vue"]]);
wx.createPage(MiniProgramPage);
