import { YMaps, Map, Placemark} from 'react-yandex-maps';
import './FlatDetail.scss'



const MapSmall = ({copyCoord, isLoading}) => {


  const mapData = {
    center: copyCoord,
    zoom: 15,
  };
  
  const coordinates = [
    copyCoord,
    // [57.684758, 39.738521]
  ];


  if(isLoading) return <h1>Loading...</h1>
  return (
    <YMaps>
    <Map defaultState={mapData}
    className='mapStyle'
    // style={{width:'800px', height:'500px', margin:'auto'}}
    >
      {coordinates.map(coordinate => <Placemark key={coordinate} geometry={coordinate} />)}
    </Map>
  </YMaps>
 
  );
};

export default MapSmall;
