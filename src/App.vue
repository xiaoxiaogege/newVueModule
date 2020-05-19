<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<style lang="less">
@import 'assets/css/reset';
@import 'assets/css/common';
#app {
  font-size: 32px;
}
</style>
