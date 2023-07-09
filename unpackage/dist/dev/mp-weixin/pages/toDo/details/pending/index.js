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
      imageStyles: {
        height: 60,
        width: 60,
        border: {
          color: "#eee",
          width: "1px",
          style: "solid",
          radius: "50%"
        }
      },
      rules: {
        result: {
          rules: [
            {
              required: true,
              errorMessage: "请填写处理结果"
            }
          ]
        }
      },
      formData: {
        result: ""
      },
      textNum: 0,
      src: ""
    };
  },
  methods: {
    count(e) {
      this.textNum = e.detail.value.length;
    },
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
    },
    uploadFile() {
      common_vendor.index.chooseImage({
        count: 6,
        sizeType: ["original", "compressed"],
        sourceType: ["album"],
        success: function(res) {
          console.log(JSON.stringify(res.tempFilePaths));
          const url = JSON.stringify(res.tempFilePaths);
          this.src = url[0];
        }
      });
    }
  }
};
if (!Array) {
  const _component_ToDoCard = common_vendor.resolveComponent("ToDoCard");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_component_ToDoCard + _easycom_uni_card2 + _easycom_uni_icons2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_card = () => "../../../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_forms_item = () => "../../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_card + _easycom_uni_icons + _easycom_uni_forms_item + _easycom_uni_forms)();
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
        b: "22e41b10-3-" + i0 + ",22e41b10-2",
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
        f: "22e41b10-4-" + i0 + ",22e41b10-2",
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
    f: common_vendor.o([($event) => $data.formData.result = $event.detail.value, (...args) => $options.count && $options.count(...args)]),
    g: $data.formData.result,
    h: common_vendor.t($data.textNum),
    i: common_vendor.p({
      label: "处理结果",
      name: "result",
      required: true
    }),
    j: common_vendor.p({
      ["custom-prefix"]: "custom-icon",
      type: "cloud-upload",
      size: "20",
      color: "#0163F5"
    }),
    k: common_vendor.o((...args) => $options.uploadFile && $options.uploadFile(...args)),
    l: common_vendor.p({
      label: "添加图片"
    }),
    m: common_vendor.sr("baseForm", "22e41b10-6,22e41b10-5"),
    n: common_vendor.p({
      modelValue: $data.formData,
      ["label-position"]: "top",
      rules: $data.rules
    }),
    o: common_vendor.p({
      ["is-shadow"]: false,
      border: false,
      margin: "0.75rem",
      padding: "0.75rem 0"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/project/wangjunjun/tengyi/test-tengyi-app/pages/toDo/details/pending/index.vue"]]);
wx.createPage(MiniProgramPage);
