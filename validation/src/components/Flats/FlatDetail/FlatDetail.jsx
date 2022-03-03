import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import './FlatDetail.scss'
import {FaMapMarkedAlt, FaRegHeart,FaRegBuilding, FaPaintRoller} from 'react-icons/fa'
import {GrMoney} from 'react-icons/gr'
import {GiBathtub,GiLift} from 'react-icons/gi'
import {BiHomeSmile} from 'react-icons/bi'
import { addToFavorite } from '../../../slices/favoriteSlice';
import { useGetFlatQuery } from '../../../slices/flatApi';
import {FaBalanceScaleRight, FaMapMarkerAlt} from 'react-icons/fa'
import { addToCompare } from '../../../slices/compareSlice';
import Slider from './Slider/Slider';
import MapSmall from './MapSmall';







const FlatDetail = () => {



    const {id} = useParams()
    const dispatch = useDispatch()

    const {data, isLoading, isError} = useGetFlatQuery(id)



    const flat = data

    console.log(flat);
    const flatCoordinate = flat?.coordinate

    const splited = flatCoordinate?.split(',')
  
    const copyCoord = []
    splited?.forEach(element => {
      copyCoord.push(parseFloat(element))
  
    });



 
    const handleFavorite = (flat) => {
      dispatch(addToFavorite(flat))
    }
    const handleToCompare = (flat) => {
      dispatch(addToCompare(flat))
  }


  
    return (
        <div className='flat-detail'>
            <div className='empty'></div>
            { flat &&
            <>
            <div>
               <h2>{flat.title}</h2>
                       
            </div>
            <Slider flat={flat}/>

    
            <div className='detail_title'>
            <h2>{flat.build.build} {flat.square} м&sup2; , {flat.room.room}{flat.room.room.toString().length > 1 ? '' : '-ком.' }</h2>
                </div>
                <div className='detail_info'>
                       <div className='detail-area'>
                    <b><FaMapMarkedAlt className='icon'/> Район: {flat.area}</b>
                    <b>Дом: {flat.facade.facade},  {flat.resale.resale}, {flat.yearOfBuild}г</b>
                </div>
                <div className='detail_price'>
                    <b><GrMoney  className='icon'/>  {String(flat.price).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')}&#8381; / {(flat.price/flat.square).toFixed(1)}м&sup2; </b>
                    <b>Общая площадь: {flat.square} м&sup2;,  Кухня: {flat.kitchenSquare} м&sup2;   </b>
                    <p></p>
                </div>  
                <div className='detail-addition'>
                  
                  <div>
                  <p><FaMapMarkerAlt className='icon'/>Адрес: {flat.adress}</p>
                    <p>
                    <FaRegBuilding  className='icon'/> Этаж :{flat.floor.floor} / {flat.total_floors}
                      </p>
                  </div>
                  <div>
              
                    <p><GiLift  className='icon'/>Лифт: {flat.lift}</p>
                    <p><FaPaintRoller  className='icon'/>Ремонт: {flat.decoration.decoration}</p>
                  </div>
                  <div>
                    <p>
                    <GiBathtub  className='icon'/> Санузел :{flat.bathroom.bathroom}
                    </p>
                  <p><BiHomeSmile  className='icon'/>Балкон: {flat.balcony.balcony}</p>
                  </div>
    
                    </div> 
                </div>
              
                
                <div className="detail_desc">
                    <p>{flat.desc}</p>

                         <div className='flat-item-btns'>
                 <div onClick={() => handleToCompare(flat)} >
            <p className='flat-item-btn'><FaBalanceScaleRight/> В сравнение</p>
            </div>
            <div onClick={() => handleFavorite(flat)} >
           
              <p className='flat-item-btn'><FaRegHeart/>   В избранное</p> 
            </div>
            </div>
                </div>
                
            </>
            }

<MapSmall copyCoord={copyCoord} isLoading={isLoading}/>
{/* <GMap/> */}

  
        </div>
    );
};

export default FlatDetail;