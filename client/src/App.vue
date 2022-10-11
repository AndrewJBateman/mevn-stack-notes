<template>
  <div class="container">
    <br />
    <router-view v-slot="{ Component }">
      <transition name="page">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style></style>

<script>
export default { name: "App" };
</script>
