<template>
  <div id="manageQuestionView">
    <a-table
      :ref="tableRef"
      :columns="columns"
      :data="dataList"
      :scroll="scroll"
      :pagination="{
        showTotal: true,
        pageSize: searchParams.pageSize,
        current: searchParams.current,
        total,
      }"
      column-resizable
      :bordered="{ cell: true }"
      @page-change="onPageChange"
    >
      <template #optional="{ record }">
        <a-space>
          <a-button type="primary" @click="doUpdate(record)"> 修改</a-button>
          <a-button status="danger" @click="doDelete(record)">删除</a-button>
        </a-space>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import {
  Page_Question_,
  Question,
  QuestionControllerService,
} from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import * as querystring from "querystring";
import { useRouter } from "vue-router";

const show = ref(true);
const tableRef = ref();

const dataList = ref([]);
const scroll = {
  x: 2000,
  y: 200,
};
const total = ref(0);
const searchParams = ref({
  pageSize: 1,
  current: 1,
});

const loadData = async () => {
  const res = await QuestionControllerService.listQuestionByPageUsingPost(
    searchParams.value
  );
  if (res.code === 0) {
    dataList.value = res.data.records;
    total.value = res.data.total;
  } else {
    message.error("加载失败，" + res.message);
  }
};
/**
 * 监听 searchParams 变量，改变时触发页面的重新加载
 */
watchEffect(() => {
  loadData();
});

/**
 * 页面加载时，请求数据
 */
onMounted(() => {
  loadData();
});

const columns = [
  {
    title: "id",
    dataIndex: "id",
    width: 100,
  },
  {
    title: "标题",
    dataIndex: "title",
    width: 150,
    ellipsis: true,
    tooltip: true,
  },
  {
    title: "内容",
    dataIndex: "content",
    width: 150,
    ellipsis: true,
    tooltip: true,
  },
  {
    title: "标签",
    dataIndex: "tags",
    width: 150,
    ellipsis: true,
    tooltip: true,
  },
  {
    title: "答案",
    dataIndex: "answer",
    width: 150,
    ellipsis: true,
    tooltip: true,
  },
  {
    title: "提交数",
    dataIndex: "submitNum",
    width: 100,
  },
  {
    title: "通过数",
    dataIndex: "acceptedNum",
    width: 100,
  },
  {
    title: "判题配置",
    dataIndex: "judgeConfig",
    width: 150,
    ellipsis: true,
    tooltip: true,
  },
  {
    title: "判题用例",
    dataIndex: "judgeCase",
    width: 150,
    ellipsis: true,
    tooltip: true,
  },
  {
    title: "用户id",
    dataIndex: "userId",
    width: 100,
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
    width: 120,
  },
  {
    title: "操作",
    slotName: "optional",
    fixed: "right",
    width: 120,
  },
];

const doDelete = async (question: Question) => {
  const res = await QuestionControllerService.deleteQuestionUsingPost({
    id: question.id,
  });
  if (res.code === 0) {
    message.success("删除成功");
    loadData();
  } else {
    message.error("删除失败");
  }
};

const router = useRouter();

const doUpdate = (question: Question) => {
  router.push({
    path: "/update/question",
    query: {
      id: question.id,
    },
  });
};
const onPageChange = (page: number) => {
  searchParams.value = {
    ...searchParams.value,
    current: page,
  };
};
</script>

<style scoped>
#manageQuestionView {
}
</style>
