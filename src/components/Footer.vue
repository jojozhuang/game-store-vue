<template>
  <footer class="container-fluid text-center">
    <p>&copy; {{ currentYear }} jojozhuang.github.io, All rights reserved.</p>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
