<template>
  <div class="not-found">
    <h1>Oops!</h1>
    <h3>
      The {{ resource ? resource : 'page' }} you're looking for is not here.
    </h3>
    <RouterLink class="back" :to="{ name: 'home-view' }"
      >Back to the home page</RouterLink
    >
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true
    }
  }
}
</script>
