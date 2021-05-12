<template>
  <div id="app">
    <div>
      <b-table 
        :items="items"
        :fields="fields"
        :current-page="currentPage"
        :filter="filter"
        :filter-included-fields="filterOn"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        stacked="md"
        show-empty
        small
      >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template #cell(actions)="row">
        <b-button size="sm" @click="deleteHotel(row.item, row.index, $event.target)" class="mr-1">
          Eliminar
        </b-button>
        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Detalle
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <p></p>
          <div>
            <b-img :src="row.item.imagen" fluid :alt="row.item.nombre"></b-img>
          </div>
        </b-card>
      </template>
      </b-table>
      </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [],
      fields: [
          { key: 'id', label: 'id', sortable: true, sortDirection: 'desc' },
          { key: 'nombre', label: 'Nombre del Hotel', sortable: true, sortDirection: 'desc' },
          { key: 'capacidad', label: 'Capacidad Max Hotel', sortable: true, sortDirection: 'desc' },
          { key: 'ubicacion', label: 'Ubicacion', sortable: true, sortDirection: 'desc' },
          { key: 'observacion', label: 'Nombre del Hotel', sortable: true, sortDirection: 'desc' },
          {
            key: 'isActive',
            label: 'Is Active',
            formatter: (value, key, item) => {
              return value ? 'Yes' : 'No'
            },
            sortable: true,
            sortByFormatted: true,
            filterByFormatted: true
          },
          { key: 'actions', label: 'Actions' }
      ],
      totalRows: 1,
      currentPage: 1,
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: ''
      }
    }
  },
  async mounted() {
    try{
      // Generamos Asignacion
      await this.$store.dispatch('loadHoteles')
      this.items = this.$store.state.hoteles
      // this.items = 
    } catch (error) {
    }
  },
  methods: {
    async deleteHotel (item, index, target) {
      this.$store.dispatch('eliminarHoteles', item.id)
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
