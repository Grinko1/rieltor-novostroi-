import React from 'react';
    import {useDispatch, useSelector} from 'react-redux'
    import {FaRegTrashAlt, FaRegHeart} from 'react-icons/fa'
import { addToFavorite } from '../../slices/favoriteSlice';
import { removeFromCompare } from '../../slices/compareSlice';
import { Link } from 'react-router-dom';


const ItemForCompare = () => {
    const compareFlats = useSelector(state => state.compare.compareFlats)
    console.log(compareFlats.length);

    const dispatch = useDispatch()

    const handleToFavorite = (flat) => {
        dispatch(addToFavorite(flat))
    }
    const handleRemoveFromCompare= (id) => {
            dispatch(removeFromCompare({id}))
    }


    return (
        <>
        {
            !compareFlats.length 
            ? (
            <div className='each-body-empty'>
                <h1>Вы ничего не добавили для сравнения</h1>
                <p>Вернуться на  <Link to='/'>главную</Link> </p>
            </div>)
             : (
                <>
                {
                    compareFlats.map((flat) => (
                        <div key={flat.id} className='each-body'>
       
                       <div className='each-img'>
                           <img  src={flat.images[0].url} alt=""/>
                       </div>
                       <div><p>{flat.build.build}</p></div>
                       <div><p>{flat.resale.resale}</p></div>
                       <div><p>{flat.room.room}</p></div>
                       <div><p>{flat.square}м&sup2;</p></div>
                       <div><p>{flat.kitchenSquare}м&sup2;</p></div>
                       <div><p>{flat.price}</p></div>
                       <div><p>{(flat.price/flat.square).toFixed(1)}</p></div>
                       <div><p>{flat.adress}</p></div>
                       <div><p>{flat.area}</p></div>
                       <div><p>{flat.floor.floor}</p></div>
                       <div><p>{flat.lift}</p></div>
                       <div><p>{flat.decoration.decoration}</p></div>
                       <div><p>{flat.bathroom.bathroom}</p></div>
                       <div><p>{flat.balcony.balcony}</p></div>
                       <div><p>{flat.facade.facade}</p></div>
                       <div><p>{flat.yearOfBuild}</p></div>
                       <div className='each-compare-btn' >
                           <p onClick={e => handleToFavorite(flat)}><FaRegHeart className='btn-favorite'/></p>
                        <p onClick={e => handleRemoveFromCompare(flat.id)}><FaRegTrashAlt className='btn-delete'/></p>
                        </div>
                       </div>
                    ))
                }
                </>
            )
        }

        

           

           
            
        </>
    );
};

export default ItemForCompare;