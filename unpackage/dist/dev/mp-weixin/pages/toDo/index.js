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
    return {
      current: 0,
      items: [
        {
          title: "全部",
          id: 0
        },
        {
          title: "待处理",
          id: 1
        },
        {
          title: "已处理",
          id: 2
        }
      ],
      allList: [
        {
          title: "待办事项标题",
          time: "2023-06-14 15:00 发布",
          status: "1",
          person: "藤桑、藤桑2、藤桑3",
          info: "待办事项内容待办事项内容待办事项内容待办事项内容待办事项内容待办事项内容待办事"
        },
        {
          title: "待办事项标题",
          time: "2023-06-14 15:00 发布",
          status: "0",
          person: "藤桑、藤桑2、藤桑3",
          info: "待办事项内容待办事项内容待办事项内容待办事项内容待办事项内容待办事项内容待办事"
        }
      ]
    };
  },
  methods: {
    onClickItem(e) {
      if (this.current != e.currentIndex) {
        this.current = e.currentIndex;
      }
    },
    toggleNav(e) {
      this.current = e;
    }
  }
};
if (!Array) {
  const _component_ToDoCard = common_vendor.resolveComponent("ToDoCard");
  const _component_empty = common_vendor.resolveComponent("empty");
  (_component_ToDoCard + _component_empty)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: index,
        c: common_vendor.o(($event) => $options.toggleNav(item.id), index),
        d: common_vendor.n($data.current === item.id ? "nav-item-active" : "nav-item")
      };
    }),
    b: $data.current === 0
  }, $data.current === 0 ? {
    c: common_vendor.p({
      ["all-list"]: $data.allList
    })
  } : {}, {
    d: $data.current === 1
  }, $data.current === 1 ? {} : {}, {
    e: $data.current === 2
  }, $data.current === 2 ? {} : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/project/wangjunjun/tengyi/test-tengyi-app/pages/toDo/index.vue"]]);
wx.createPage(MiniProgramPage);
