<template>
    <b-container fluid>
        <b-card body-class="backgroundMainCardBody">
            <b-row>
                <b-col>
                   <vue-ellipse-progress 
                    :progress="54"
                    :angle="-90"
                    color="#00CB8B"
                    emptyColor="#1f9f76"
                    :thickness="5"
                    emptyThickness="1%"
                    dash="60 0.9"
                    animation="reverse 700 400"
                    :noData="false"
                    :loading="false"                      
                    fontColor="white"
                    :half="false"
                    :gap="10"
                    fontSize="1rem">
                        <b-icon icon="lightning-fill" style="color: #7952b3;"></b-icon>
                        <h2 slot="legend-caption">54%</h2>
                    </vue-ellipse-progress>
                </b-col>
                <b-col align-self="center">
                    <b-row align-h="center">
                        <h6>Time left charging</h6>
                    </b-row>
                    <b-row align-h="center">
                        <h1>01</h1><h6> H </h6><h1>05</h1><h6> Min</h6>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-link to="/detailTable">
                                <b-button pill variant="success" class="optiButton">Button</b-button>
                            </b-link>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-row class="objectCard">
                <b-col>
                    <b-card body-class="backgroundCardbody" class="border-0" >
                        <b-row>
                            <b-col md="8"><h6>Battery Cooler</h6></b-col>
                        </b-row>
                    <b-row>
                        <b-col cols="8">
                            <h4>31°C</h4>
                        </b-col>
                        <b-col cols="4">
                            <b-icon icon="thermometer-half" class="icons"></b-icon>
                        </b-col>
                    </b-row>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card body-class="backgroundCardbody" class="border-0" >
                        <b-row>
                            <b-col md="8"><h6>Voltage</h6></b-col>
                        </b-row>
                    <b-row>
                        <b-col cols="8">
                            <h4>3.9V</h4>
                        </b-col>
                        <b-col cols="4">
                            <b-icon icon="exclamation-triangle-fill" variant="warning" class="icons"></b-icon>
                        </b-col>
                    </b-row>
                    </b-card>
                </b-col>
            </b-row>
            <b-card class="objectCard border-0" body-class="backgroundCardbody" border-variant="dark" >
                <b-row>
                    <b-col cols="2">
                        <b-icon icon="shield-fill-plus" variant="warning" class="icons"></b-icon>
                    </b-col>
                    <b-col cols="10">
                        <b-row align-h="start"><h6>Power Proctection (Unprotected)</h6></b-row>
                        <b-row align-h="start">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-row>
                        <b-row align-h="end"><b-link to="/detailTable">Enabled</b-link></b-row>
                    </b-col>
                </b-row>
            </b-card>
            <b-card body-class="backgroundCardbody" class="border-0" >
                <b-row>
                    <b-col cols="2">
                        <b-icon icon="shield-lock-fill" variant="primary" class="icons"></b-icon>
                    </b-col>
                    <b-col cols="10">
                        <b-row align-h="start"><h6>Saver Mode (Default Mode)</h6></b-row>
                    </b-col>
                </b-row>
            </b-card>
        </b-card>
    </b-container>
</template>


<style scoped>
  @import './essentialData.css';
</style>

<script>
  export default {
    data() {
      return {
        options: {
            text: {
                color: '#FFFFFF',
                shadowEnable: true,
                shadowColor: '#000000',
                fontSize: 14,
                fontFamily: 'Helvetica',
                dynamicPosition: false,
                hideText: false
            },
        }
      }
    },
  }
</script>
