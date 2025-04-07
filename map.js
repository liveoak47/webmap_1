'use strict'
console.log('Loaded map.js')
mapboxgl.accessToken = pk.eyJ1IjoidGhvbWdpbDQ3IiwiYSI6ImNtOTdmczFkcTA3MXYyanB0cGVkcGY0c2IifQ.H7HivPlJvAaO2guZkYl8Q
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-73.93324, 40.80877],
    zoom: 14
});