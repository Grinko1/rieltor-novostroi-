import React, {useState } from 'react';
import Flats from '../../components/Flats/Flats';
import FormForSearch from '../../components/Search/FormForSearch';
import { useGetFlatsQuery } from '../../slices/flatApi';
import './Home.scss';


const Home = () => {

  const [build_id, setBuild_id] = useState('');
  const [room_id, setRoom_id] = useState('');
  const [resale_id, setResale_id] = useState('');
  const [area, setArea] = useState('');
  const [price_from, setPrice_from] = useState('');
  const [price_to, setPrice_to] = useState('');
  const [sort, setSort] = useState('new');



  const {
    data = [],
    isLoading,
    isError,
  } = useGetFlatsQuery({ build_id, room_id, resale_id, area, price_from, price_to });

  if (data.data !== undefined) {
    var sortedData = [...data?.data].sort((a, b) => {
      if (sort === 'max') {
        return b.price - a.price;
      } else if (sort === 'min') {
        return a.price - b.price;
      }
    });
  }




  const handleSearch = () => {
    
  };

  const resetFilter = () => {
    setBuild_id('');
    setRoom_id('');
    setResale_id('');
    setArea('');
    setPrice_from('');
    setPrice_to('');
    setSort('new');
  };

  return (
    <div className="main-hame">
      <div>
        <FormForSearch
          area={area}
          setArea={setArea}
          build_id={build_id}
          setBuild_id={setBuild_id}
          room_id={room_id}
          setRoom_id={setRoom_id}
          resale_id={resale_id}
          setResale_id={setResale_id}
          price_from={price_from}
          setPrice_from={setPrice_from}
          price_to={price_to}
          setPrice_to={setPrice_to}
          handleSearch={handleSearch}
          resetFilter={resetFilter}
          sort={sort}
          setSort={setSort}
        />
      </div>
      {/* <CustomSelect /> */}

      <div>
        <Flats sortedData={sortedData} isLoading={isLoading} sort={sort} setSort={setSort} isError={isError}  />
      </div>
      {/* <MapMain/> */}
    </div>
  );
};

export default Home;
