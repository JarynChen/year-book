export default {
  path: "/search",
  meta: {
    icon: "ic:sharp-search",
    title: "搜索"
  },
  children: [
    {
      path: "/search/index",
      name: "Search",
      component: () => import("@/views/search/index.vue"),
      meta: {
        title: "简易搜索",
        showParent: true
      }
    }
  ]
} as RouteConfigsTable;
