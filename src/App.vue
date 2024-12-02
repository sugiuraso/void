<script setup>
import i18n from '@/i18n';
import config from '@/settings/componentSetting';
</script>

<template>
  <VueConfigProvider :default-props="config" :exceljs="() => import('exceljs')" :echarts="() => import('echarts')" :i18n="i18n">
    <RouterView />
  </VueConfigProvider>
</template>
