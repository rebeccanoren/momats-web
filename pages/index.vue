<template>
  <slice-zone type="page" uid="homepage" :lang="$route.params.lang" />
</template>

<script>
import SliceZone from "vue-slicezone";

export default {
  components: {
    SliceZone,
  },
};
</script>