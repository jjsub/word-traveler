/* global google:ture */

(function(){
  'use strict';
  var map;

  $(document).ready(function(){
    initMap(36.2, -86.7, 9);
  });

  function initMap(lat, lng, zoom){
    var styles     = [{'featureType':'landscape','stylers':[{'color':'#6c8080'},{'visibility':'simplified'}]},{'featureType':'administrative','elementType':'labels.text','stylers':[{'visibility':'off'}]},{'featureType':'road','stylers':[{'visibility':'simplified'}]},{'featureType':'poi','stylers':[{'visibility':'off'}]},{'featureType':'road.highway','elementType':'labels','stylers':[{'visibility':'off'}]},{'featureType':'road.highway','elementType':'labels','stylers':[{'visibility':'off'}]},{'featureType':'road','elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'transit','elementType':'labels','stylers':[{'visibility':'off'}]},{'elementType':'labels','stylers':[{'visibility':'off'}]},{'featureType':'road.highway','stylers':[{'color':'#d98080'},{'hue':'#eeff00'},{'lightness':100},{'weight':1.5}]}],
        mapOptions = {center: new google.maps.LatLng(lat, lng), zoom: zoom, mapTypeId: google.maps.MapTypeId.HYBRID, styles:styles};
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

})();


