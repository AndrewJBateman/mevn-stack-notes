<template>
  <div class="container">
    <nav class="navbar navbar-expand-sm bg-light navbar-light">
      <ul class="nav navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/create">Create</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/posts">Posts</a>
        </li>
      </ul>
    </nav>
    <br />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

<script>
export default {};
</script>
