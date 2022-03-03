import React from 'react';
import {FaMapMarkedAlt, FaRegHeart} from 'react-icons/fa'
import {GrMoney} from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToFavorite } from '../../slices/favoriteSlice';
import {addToCompare} from '../../slices/compareSlice'
import {FaBalanceScaleRight} from 'react-icons/fa'
import { toast } from 'react-toastify';


const FlatItem = ({ id,adress, area,title,desc,images,lift,square,kitchenSquare,price,yearOfBuild,build,resale, room, floor,decoration,bathroom,balcony, facade}) => {

    const dispatch = useDispatch()
    const flat = {id,adress, area,title,desc, images, lift,square,kitchenSquare,price,yearOfBuild,build,resale, room, floor,decoration,bathroom,balcony, facade}
    const compareFlats = useSelector(state => state.compare.compareFlats)
 

    const handleFavorite = (flat) => {

        dispatch(addToFavorite(flat))
    }

    const handleToCompare = (flat) => {
        if(compareFlats.length < 4){
            dispatch(addToCompare(flat))
        } else{
            toast.error('Добавленно максимальное количество для сравнения', {
                position: 'bottom-left',
              });
        }
        
    }
    return (
        <div  className='flat-item'>
            <div className='flat-img'>
                <Link to={`flat/${id}`}>
                <img src={images && images[0].url} alt=""/>
                </Link>
            </div>
            <div className='flat-item-desc'>
            <div>
            <Link to={`flat/${id}`}>
                <h2>{build.build} {square} м&sup2; , {room.room}{room.room.toString().length > 1 ? '' : '-ком.' }</h2>
                </Link>
            </div>
            <div>
                <p><FaMapMarkedAlt color='gray'/>  {area}</p>
            </div>
            <div>
                <b><GrMoney color='lightgray'/>  {String(price).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')}&#8381;</b> <p>Цена за м&sup2; {(price/square).toFixed(1)} </p>
            </div>
            <div>
                <p>{title}</p>
            </div>
            <div className='flat-item-btns'>
                 <div onClick={() => handleToCompare(flat)} >
            <p className='flat-item-btn'><FaBalanceScaleRight/> В сравнение</p>
            </div>
            <div onClick={() => handleFavorite(flat)} >
           
              <p className='flat-item-btn'><FaRegHeart/>   В избранное</p> 
            </div>
            </div>
           
      
                
           
            </div>
            
        </div>
    );
};

export default FlatItem;