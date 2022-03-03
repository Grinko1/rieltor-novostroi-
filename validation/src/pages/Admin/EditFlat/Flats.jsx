import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFlat, deleteFromFront, fetchFlat, fetchFlats } from '../../../slices/flatSlice';
import ListFlat from './ListFlat';
import { toast } from 'react-toastify';
import Modal from './Modal/Modal';

const Flats = () => {
    const flats = useSelector(state => state.flats.flats)
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)

    const openModal = () => {
        setActive(true)
        console.log(active);
    }

    console.log(active);
  
 
    const handleDelete =(id) => {
        console.log(id);
        // dispatch(deleteFlat(id))
        // dispatch(deleteFromFront(id))
        setActive(false)
        toast.success('Квартира удалена с сайта и базы данных', {
            position: 'bottom-left',
          });
        
    }


    return (
        <div className='listOfFlat'>
           
        { flats && flats.map(flat => (

            <ListFlat
            key={flat.id}
            id={flat.id}
            imageUrl={flat.imageUrl}
            images={flat.images}
            area={flat.area}
            title={flat.title}
            desc={flat.desc}
            lift={flat.lift}
            square={flat.square}
            kitchenSquare={flat.kitchenSquare}
            price={flat.price}
            yearOfBuild={flat.yearOfBuild}
            build={flat.build.build}
            resale={flat.resale.resale}
            room={flat.room.room}
            floor={flat.floor.floor}
            decoration={flat.decoration.decoration}
            bathroom={flat.bathroom.bathroom}
            balcony={flat.balcony.balcony}
            facade={flat.facade.facade}
            room ={flat.room.room}
            handleDelete={handleDelete}
            active={active} 
            setActive={setActive} 
            openModal={openModal}

             />
        ))

        }
    
        </div>
    );
};

export default Flats;