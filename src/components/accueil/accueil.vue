<template>
    <div>
        <b-container>
            <b-card-group deck v-for="(cObject, index) in cObjects" :key="index">
                <b-card-body id="objectCard" v-bind:class="{
                    'redCard': cObject.capacity <= 10,
                    'yellowCard': cObject.capacity > 10 && cObject.capacity < 50,
                    'greenCard': cObject.capacity >= 50
                }">
                <b-link to="/essentialData">
                    <b-row>
                        <b-col>
                            <b-card-text class="textColor">Identifiant: {{cObject.name}}</b-card-text>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-card-text class="textColor">Temps restant: {{cObject.timesRemaining}}min</b-card-text>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-card-text class="textColor">Capacité: {{cObject.capacity}}%</b-card-text>
                        </b-col>
                    </b-row>
                    </b-link>
                </b-card-body>
            </b-card-group>
        </b-container>
    </div>
</template>


<style scoped>
  @import './accueil.css';
</style>

<script>
export default {
  name: 'accueil',
  data: function () {
    return {
      cObjects: [
          {id:1, name: 'one', timesRemaining: 48, capacity: 25},
          {id:2, name: 'two', timesRemaining: 23, capacity: 5},
          {id:3, name: 'three', timesRemaining: 125, capacity: 75},
      ]
    }
  }
}
</script>