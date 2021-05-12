<template>
  <div id="app">
    <div>
      <b-table striped hover :items="items"></b-table>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: []
    }
  },
  async mounted() {
    try{
      // Generamos Asignacion
      await this.$store.dispatch('loadHoteles')
      console.error(this.$store.state.hoteles)
      this.items = this.$store.state.hoteles
    } catch (error) {
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
