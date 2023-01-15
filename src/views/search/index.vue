<script setup lang="ts">
defineOptions({
  name: "Search"
});
import { ref } from "vue";
const input = ref("");
</script>

<template>
  <el-row justify="center">
    <el-col :span="24">
      <el-space direction="vertical" alignment="center" :size="10">
        <el-input size="large" v-model="input" placeholder="input" clearable />
        <el-button type="primary">Search</el-button>
      </el-space></el-col
    >
  </el-row>
</template>
