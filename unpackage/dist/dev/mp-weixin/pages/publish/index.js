"use strict";
const common_vendor = require("../../common/vendor.js");
const ToDoCard = () => "../component/toDoCard/index.js";
const empty = () => "../component/empty/index.js";
const _sfc_main = {
  components: {
    ToDoCard,
    empty
  },
  data() {
    return {};
  },
  methods: {
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
    },
    handleSubmit() {
      common_vendor.index.navigateTo({
        url: "/pages/toDo/index"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uni_nav_bar2 + _easycom_uni_card2 + _easycom_uni_icons2)();
}
const _easycom_uni_nav_bar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_nav_bar + _easycom_uni_card + _easycom_uni_icons)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      height: "3.75rem",
      border: false,
      dark: true,
      color: "#000",
      backgroundColor: "#74D1FF",
      ["left-icon"]: "left",
      title: "发布公告"
    }),
    b: common_vendor.p({
      ["is-shadow"]: false,
      border: false,
      margin: "0.75rem",
      padding: "0.75rem 0"
    }),
    c: common_vendor.p({
      ["is-shadow"]: false,
      border: false,
      margin: "0.75rem",
      padding: "0.75rem 0"
    }),
    d: common_vendor.p({
      ["custom-prefix"]: "custom-icon",
      type: "cloud-upload",
      size: "20",
      color: "#0163F5"
    }),
    e: common_vendor.o((...args) => $options.uploadFile && $options.uploadFile(...args)),
    f: common_vendor.p({
      ["is-shadow"]: false,
      border: false,
      margin: "0.75rem",
      padding: "0.75rem 0"
    }),
    g: common_vendor.o((...args) => $options.handleSubmit && $options.handleSubmit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/project/wangjunjun/tengyi/test-tengyi-app/pages/publish/index.vue"]]);
wx.createPage(MiniProgramPage);
