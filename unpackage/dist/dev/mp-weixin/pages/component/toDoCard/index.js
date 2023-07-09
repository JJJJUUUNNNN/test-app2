"use strict";
const common_vendor = require("../../../common/vendor.js");
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
  methods: {
    handleClick(status) {
      if (status === "0") {
        common_vendor.index.navigateTo({
          url: "/pages/toDo/details/pending/index"
        });
      } else if (status === "1") {
        common_vendor.index.navigateTo({
          url: "/pages/toDo/details/finish/index"
        });
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_uni_tag2 + _easycom_uni_card2)();
}
const _easycom_uni_tag = () => "../../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_card = () => "../../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_tag + _easycom_uni_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.allList, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.time),
        c: item.status === "1"
      }, item.status === "1" ? {
        d: "f2240cd2-1-" + i0 + "," + ("f2240cd2-0-" + i0),
        e: common_vendor.p({
          text: "已处理",
          ["custom-style"]: "background-color: #E8FFF6; border: none; color: #08C296;"
        })
      } : {}, {
        f: item.status === "0"
      }, item.status === "0" ? {
        g: "f2240cd2-2-" + i0 + "," + ("f2240cd2-0-" + i0),
        h: common_vendor.p({
          text: "未处理",
          ["custom-style"]: "background-color: #FFE9E8; border: none; color: #EB1C38;"
        })
      } : {}, {
        i: common_vendor.t(item.person),
        j: common_vendor.t(item.info),
        k: index,
        l: common_vendor.o(($event) => $options.handleClick(item.status), index),
        m: "f2240cd2-0-" + i0
      });
    }),
    b: common_vendor.p({
      ["is-shadow"]: false,
      border: false,
      margin: "0.75rem",
      padding: "0.75rem 0"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/project/wangjunjun/tengyi/test-tengyi-app/pages/component/toDoCard/index.vue"]]);
wx.createComponent(Component);
