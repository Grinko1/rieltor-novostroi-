import React , { useEffect, useRef, useState } from "react";
import { YMaps, Map, Circle, Placemark } from "react-yandex-maps";



const POINTS = [
  {
    type: "Point",
    coordinates: [50.302837, 127.553174],
    name: '1 ctydio'
  },
  {
    type: "Point",
    coordinates: [50.296608, 127.508062]
  },
  {
    type: "Point",
    coordinates: [50.303730, 127.528748]
  }
];



const MapMain = ()  =>{
  const map = useRef(null);

const [ymaps, setYmaps] = useState(null);
const [objects, setObjects] = useState([]);

useEffect(() => {
  if (ymaps && map.current) {
    const objs = ymaps.geoQuery(POINTS).addToMap(map.current);
    setObjects(objs);
  }
}, [ymaps, map]);
  return (
    <div className="App">
    <YMaps>
      <Map
        instanceRef={map}
        modules={["geoQuery"]}
        state={{
          center: [50.257456, 127.534611],
          zoom: 10
        }}
        onLoad={(ymapsInstance) => {
          setYmaps(ymapsInstance);
        }}
        options={{ searchControlProvider: "yandex#search" }}
        style={{width:'800px', height:'500px', margin:'auto'}}
      >
     
      </Map>
    </YMaps>
  </div>
  );
}
export default MapMain