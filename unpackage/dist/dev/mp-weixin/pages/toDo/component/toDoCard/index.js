"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {
    allList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  _easycom_uni_card2();
}
const _easycom_uni_card = () => "../../../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  _easycom_uni_card();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.allList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.time),
        c: common_vendor.t(item.info),
        d: common_vendor.t(item.person),
        e: index,
        f: "cf355e10-0-" + i0
      };
    }),
    b: common_vendor.p({
      ["is-shadow"]: false,
      border: false,
      margin: "0.75rem",
      padding: "0.75rem 0"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/project/wangjunjun/tengyi/test-tengyi-app/pages/toDo/component/toDoCard/index.vue"]]);
wx.createComponent(Component);
