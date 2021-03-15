<template>
    <b-container>
        <b-row>
            <b-table
            id="my-table"
            :items="items"
            :per-page="perPage"
            :current-page="currentPage"
            small
            ></b-table>
        </b-row>
        <b-row>
            <b-col>
                <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
                class="mt-2"
                align="right"
                ></b-pagination>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
  export default {
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        items: [
          { capteur: 'XMA1', voltage: '12mA', temperature: '28°C'},
          { capteur: 'XMB2', voltage: '15mA', temperature: '29°C'},
          { capteur: 'XMC3', voltage: '18mA', temperature: '30°C'},
          { capteur: 'XMD4', voltage: '20mA', temperature: '31°C'},
          { capteur: 'XME5', voltage: '22mA', temperature: '32°C'},
          { capteur: 'XMF6', voltage: '24mA', temperature: '33°C'},
          { capteur: 'XMG7', voltage: '26mA', temperature: '34°C'},
          { capteur: 'XMH8', voltage: '28mA', temperature: '35°C'},
          { capteur: 'XMI9', voltage: '30mA', temperature: '36°C'}
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
  }
</script>
