import './Flat.scss';
import FlatItem from './FlatItem';

const Flats = ({sortedData, isLoading, sort}) => {

  if(isLoading) return <h1>Loading...</h1>
  if(!sortedData.length) return <h1 style={{marginTop:'50px'}}> К сожалению , ничего не найдено </h1>
  return (
    <div>
      <div className="flats-list">
        {sortedData &&
          sortedData.map((flat) => (
            <FlatItem
              key={flat.id}
              id={flat.id}
              imageUrl={flat.imageUrl}
              images={flat.images}
              area={flat.area}
              adress ={flat.adress}
              title={flat.title}
              desc={flat.desc}
              lift={flat.lift}
              square={flat.square}
              kitchenSquare={flat.kitchenSquare}
              price={flat.price}
              yearOfBuild={flat.yearOfBuild}
              build={flat.build}
              resale={flat.resale}
              room={flat.room}
              floor={flat.floor}
              decoration={flat.decoration}
              bathroom={flat.bathroom}
              balcony={flat.balcony}
              facade={flat.facade}
             
            />
          ))}
      </div>
    </div>
  );
};

export default Flats;
