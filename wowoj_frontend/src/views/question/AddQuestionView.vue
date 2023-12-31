<template>
  <div id="addQuestionView">
    <a-card class="card" title="创建题目" :bordered="true">
      <a-form :model="form" label-align="left">
        <a-form-item field="title" label="标题">
          <a-input v-model="form.title" placeholder="请输入标题" />
        </a-form-item>
        <a-divider :margin="10" />
        <a-form-item style="margin-top: 20px" field="tags" label="标签">
          <a-input-tag
            v-model="form.tags"
            placeholder="请选择标签"
            allow-clear
          />
        </a-form-item>
        <a-divider :margin="10" />
        <a-form-item style="margin-top: 20px" field="content" label="题目内容">
          <MdEditor :value="form.content" :handle-change="onContentChange" />
        </a-form-item>
        <a-divider :margin="10" />
        <a-form-item style="margin-top: 20px" field="answer" label="答案">
          <MdEditor :value="form.answer" :handle-change="onAnswerChange" />
        </a-form-item>
        <a-divider :margin="10" />
        <a-form-item
          label="判题配置"
          :content-flex="false"
          :merge-props="false"
          style="margin-top: 20px"
        >
          <a-space size="mini">
            <template #split>
              <a-divider direction="vertical" />
            </template>
            <a-form-item field="judgeConfig.timeLimit" label="时间限制">
              <a-input-number
                v-model="form.judgeConfig.timeLimit"
                style="width: 150px"
                placeholder="请输入时间限制"
                mode="button"
                min="0"
                size="large"
              />
            </a-form-item>
            <a-form-item field="judgeConfig.memoryLimit" label="内存限制">
              <a-input-number
                v-model="form.judgeConfig.memoryLimit"
                style="width: 150px"
                placeholder="请输入内存限制"
                mode="button"
                min="0"
                size="large"
              />
            </a-form-item>
            <a-form-item field="judgeConfig.stackLimit" label="堆栈限制">
              <a-input-number
                v-model="form.judgeConfig.stackLimit"
                style="width: 150px"
                placeholder="请输入堆栈限制"
                mode="button"
                min="0"
                size="large"
              />
            </a-form-item>
          </a-space>
        </a-form-item>
        <a-divider :margin="10" />
        <a-form-item
          label="测试用例配置"
          :content-flex="false"
          :merge-props="false"
          style="margin-top: 20px"
        >
          <a-form-item
            v-for="(judgeCaseItem, index) of form.judgeCase"
            :key="index"
            no-style
          >
            <a-space direction="vertical" style="min-width: 640px">
              <a-form-item
                :field="`form.judgeCase[${index}].input`"
                :label="`输入用例-${index}`"
                :key="index"
              >
                <a-input
                  v-model="judgeCaseItem.input"
                  placeholder="请输入测试输入用例"
                />
              </a-form-item>
              <a-form-item
                :field="`form.judgeCase[${index}].output`"
                :label="`输出用例-${index}`"
                :key="index"
              >
                <a-input
                  v-model="judgeCaseItem.output"
                  placeholder="请输入测试输出用例"
                />
              </a-form-item>
              <a-button status="danger" @click="handleDelete(index)">
                删除
              </a-button>
            </a-space>
          </a-form-item>
          <div style="margin-top: 32px">
            <a-button @click="handleAdd" type="outline" status="success"
              >新增测试用例
            </a-button>
          </div>
        </a-form-item>
        <a-divider :margin="10" />
        <div style="margin-top: 16px" />
        <a-form-item>
          <a-button
            shape="round"
            type="dashed"
            status="success"
            long
            @click="doSubmit"
            >提交
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import MdEditor from "@/components/MdEditor.vue";
import { QuestionControllerService } from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useRoute } from "vue-router";

const route = useRoute();
// 如果页面地址包含 update，视为更新页面
const updatePage = route.path.includes("update");

let form = ref({
  title: "",
  tags: ["java", "动态规划"],
  answer: "",
  content: "",
  judgeConfig: {
    memoryLimit: 1000,
    stackLimit: 1000,
    timeLimit: 1000,
  },
  judgeCase: [
    {
      input: "",
      output: "",
    },
  ],
});

/**
 * 根据题目 id 获取老的数据
 */
const loadData = async () => {
  const id = route.query.id;
  if (!id) {
    return;
  }
  const res = await QuestionControllerService.getQuestionByIdUsingGet(
    id as any
  );
  if (res.code === 0) {
    form.value = res.data as any;
    // json 转 js 对象
    if (!form.value.judgeCase) {
      form.value.judgeCase = [
        {
          input: "",
          output: "",
        },
      ];
    } else {
      form.value.judgeCase = JSON.parse(form.value.judgeCase as any);
    }
    if (!form.value.judgeConfig) {
      form.value.judgeConfig = {
        memoryLimit: 1000,
        stackLimit: 1000,
        timeLimit: 1000,
      };
    } else {
      form.value.judgeConfig = JSON.parse(form.value.judgeConfig as any);
    }
    if (!form.value.tags) {
      form.value.tags = [];
    } else {
      form.value.tags = JSON.parse(form.value.tags as any);
    }
  } else {
    message.error("加载失败，" + res.message);
  }
};

onMounted(() => {
  loadData();
});

const doSubmit = async () => {
  console.log(form.value);
  console.log(updatePage);
  // 区分更新还是创建
  if (updatePage) {
    const res = await QuestionControllerService.updateQuestionUsingPost(
      form.value
    );
    if (res.code === 0) {
      message.success("更新成功");
    } else {
      message.error("更新失败，" + res.message);
    }
  } else {
    const res = await QuestionControllerService.addQuestionUsingPost(
      form.value
    );
    if (res.code === 0) {
      message.success("创建成功");
    } else {
      message.error("创建失败，" + res.message);
    }
  }
};

/**
 * 新增判题用例
 */
const handleAdd = () => {
  form.value.judgeCase.push({
    input: "",
    output: "",
  });
};

/**
 * 删除判题用例
 */
const handleDelete = (index: number) => {
  form.value.judgeCase.splice(index, 1);
};

const onContentChange = (value: string) => {
  form.value.content = value;
};

const onAnswerChange = (value: string) => {
  form.value.answer = value;
};
</script>

<style scoped>
#addQuestionView .card {
  width: 1300px;
  min-width: 1000px;
  position: relative;
  margin-left: 30px;
  margin-right: 10px;
  border-radius: 20px;
}
</style>
