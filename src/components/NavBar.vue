<template>
  <div id="nav">
    <RouterLink data-testid="home" to="/">Home</RouterLink> |
    <RouterLink data-testid="about" :to="{ name: 'about-view' }"
      >About</RouterLink
    >
    |
    <RouterLink data-testid="discography" :to="{ name: 'discography-view' }"
      >Discography</RouterLink
    >
    |
    <RouterLink data-testid="events" :to="{ name: 'events-view' }"
      >Events</RouterLink
    >
  </div>
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: royalblue;
  text-decoration: none;
}

@media (max-width: 359px) {
  #nav {
    display: grid;
  }
}
@media (min-width: 360px) {
  #nav {
    padding-left: 80px;
    padding-right: 80px;
  }
}
@media (min-width: 411px) {
  #nav {
    padding-left: 50px;
    padding-right: 50px;
  }
}
</style>
