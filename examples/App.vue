<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ph-form
      :form-obj="formInfo"
      @add="onAdd"
      @search="searchSubmit"
      @resetSearch="resetSearch"
    />
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  data: () => {
    return {
      formInfo: {
        title: "表单通用组件",
        ref: "searchForm",
        rules: {},
        inline: true,
        data: {
          name: "",
          type: "",
          isDisable: "",
          date: "",
        },
        formItemArr: [
          [
            {
              type: "group",
              label: "",
              labelWidth: "40px",
              text: "搜索",
              span: 2,
              icon: "el-icon-s-custom",
            },
            {
              type: "el-input",
              prop: "name",
              label: "券码名称",
              labelWidth: "100px",
              span: 7,
              placeholder: "请输入券码名称",
              event: "search",
              required: true
            },
          ],
          [
            {
              type: "group",
              label: "",
              labelWidth: "40px",
              text: "筛选",
              span: 2,
              icon: "el-icon-pie-chart",
            },
            {
              type: "el-select",
              prop: "type",
              label: "券码类型",
              labelWidth: "100px",
              options: [{ label: "全部", value: "" }],
              span: 7,
              placeholder: "请选择券码类型",
            },
            {
              type: "el-select",
              prop: "isDisable",
              label: "券码状态",
              labelWidth: "100px",
              options: [{ label: "全部", value: "" }],
              span: 7,
              placeholder: "请选择券码状态",
            },
          ],
          [
            {
              type: "group",
              label: "",
              labelWidth: "40px",
              text: "时间",
              span: 2,
              icon: "el-icon-time",
            },
            {
              type: "el-date-picker",
              prop: "date",
              label: "有效时间",
              selectType: "datetimerange",
              valformat: "yyyy-MM-dd HH:mm:ss",
              labelWidth: "100px",
              span: 12,
              placeholder: "请选择有效时间",
            },
          ],
          [
            {
              type: "el-button",
              span: 12,
              btns: [
                {
                  name: "搜索",
                  type: "primary",
                  event: "search",
                },
                {
                  name: "重置",
                  event: "resetSearch",
                },
                {
                  name: "添加",
                  event: "add",
                },
              ],
            },
          ],
        ],
      },
    };
  },
  mounted(){
    this.getFormSearchObj()
  },
  methods: {
    searchSubmit() {
      console.log("点击搜索-查询参数：", JSON.stringify(this.formInfo.data));
    },
    resetSearch() {
      console.log("重置表单", this.formInfo.data);
    },
    getFormSearchObj() {
      this.formInfo.formItemArr[1][1].options = [
        { label: "全部", value: "" },
        { label: "正常", value: "1" },
        { label: "过期", value: "0" },
      ];
    },
    onAdd(){
      console.log('点击添加优惠券')
    }
  },
};
</script>
<style>

</style>
