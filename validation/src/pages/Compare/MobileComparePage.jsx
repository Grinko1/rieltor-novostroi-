import React from 'react';
import { addToFavorite } from '../../slices/favoriteSlice';
import { removeFromCompare } from '../../slices/compareSlice';
import {FaRegTrashAlt, FaRegHeart} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import './Compare.scss'

const MobileComparePage = () => {
    const compareFlats = useSelector((state) => state.compare.compareFlats);

  const dispatch = useDispatch()

  const handleToFavorite = (flat) => {
      dispatch(addToFavorite(flat))
  }
  const handleRemoveFromCompare= (id) => {
          dispatch(removeFromCompare({id}))
  }

    return (
        <div className="mob-compare">
        <div className="empty"></div>
        <h1>Сравнение</h1>
        <div className="mob-com-container">
          <div className="mob-each-head">
            <p className="mob-head-p">Вид недвижимости</p>
          </div>
          <div  className="mob-each-body">
               {compareFlats.map((flat, index) => (
            <div key={flat.id}>
              <p>({index+1}) {flat.build.build}</p>
            </div>
          ))}
          </div>
          <div className="mob-each-head">
            <p className="mob-head-p">Фото</p>
          </div>
          <div  className="mob-each-body">
               {compareFlats.map((img) => (
            <div key={img.id}>
             <img src={img.images[0].url} alt=""/>
            </div>
          ))}
          </div>
          <div className="mob-each-head">
            <p className="mob-head-p">Новостройка/вторичка</p>
          </div>
          <div  className="mob-each-body">
               {compareFlats.map((flat,index) => (
            <div key={flat.id}>
              <p>({index+1}) {flat.resale.resale}</p>
            </div>
          ))}
          </div>
          <div className="mob-each-head">
            <p className="mob-head-p">К-во комнат</p>
          </div>
          <div  className="mob-each-body">
               {compareFlats.map((flat, index) => (
            <div key={flat.id}>
              <p> ({index+1}) {flat.room.room}</p>
            </div>
          ))}
          </div>
  
          <div className="mob-each-head">
            <p className="mob-head-p">Площадь</p>
          </div>
          <div  className="mob-each-body">
               {compareFlats.map((flat, index) => (
            <div key={flat.id}>
              <p>({index+1})  {flat.square}м&sup2;</p>
            </div>
          ))}
          </div>
  
  
          <div className="mob-each-head">
            <p className="mob-head-p">Площадь кухни</p>
          </div>
          <div  className="mob-each-body">
               {compareFlats.map((flat, index) => (
            <div key={flat.id}>
              <p>({index+1}) {flat.kitchenSquare}м&sup2;</p>
            </div>
          ))}
          </div>
  
          <div className="mob-each-head">
            <p className="mob-head-p">Цена</p>
          </div>
          <div  className="mob-each-body">
               {compareFlats.map((flat, index) => (
            <div key={flat.id}>
              <p>({index+1})  {flat.price}</p>
            </div>
          ))}
          </div>
  
          <div className="mob-each-head">
            <p className="mob-head-p">Цена за м&sup2;</p>
          </div>
          <div  className="mob-each-body">
               {compareFlats.map((flat, index) => (
            <div key={flat.id}>
              <p>({index+1}) {(flat.price/flat.square).toFixed(1)}</p>
            </div>
          ))}
          </div> 
  
          <div className="mob-each-head">
            <p className="mob-head-p">Адрес</p>
          </div>
          <div  className="mob-each-body">
               {compareFlats.map((flat, index) => (
            <div key={flat.id}>
              <p>({index+1}) {flat.adress}</p>
            </div>
          ))}
          </div> 
          <div className="mob-each-head">
            <p className="mob-head-p">Район</p>
          </div>
          <div  className="mob-each-body">
               {compareFlats.map((flat, index) => (
            <div key={flat.id}>
              <p>({index+1}) {flat.area}</p>
            </div>
          ))}
          </div> 
  
          <div className="mob-each-head">
            <p className="mob-head-p">Этаж</p>
          </div>
          <div  className="mob-each-body">
               {compareFlats.map((flat,index) => (
            <div key={flat.id}>
              <p>({index+1}) {flat.floor.floor}-й</p>
            </div>
          ))}
          </div> 
  
          <div className="mob-each-head">
            <p className="mob-head-p">Лифт</p>
          </div>
          <div  className="mob-each-body">
               {compareFlats.map((flat, index) => (
            <div key={flat.id}>
              <p> ({index+1}) {flat.lift}</p>
            </div>
          ))}
          </div>
  
          <div className="mob-each-head">
            <p className="mob-head-p">Ремонт</p>
          </div>
          <div  className="mob-each-body">
               {compareFlats.map((flat,index) => (
            <div key={flat.id}>
              <p>({index+1}) {flat.decoration.decoration}</p>
            </div>
          ))}
          </div>
  
          <div className="mob-each-head">
            <p className="mob-head-p">Санузел</p>
          </div>
          <div  className="mob-each-body">
               {compareFlats.map((flat, index) => (
            <div key={flat.id}>
              <p>({index+1}) {flat.bathroom.bathroom}</p>
            </div>
          ))}
          </div>
  
  
          <div className="mob-each-head">
            <p className="mob-head-p">Балкон</p>
          </div>
          <div  className="mob-each-body">
               {compareFlats.map((flat, index) => (
            <div key={flat.id}>
              <p>({index+1}) {flat.balcony.balcony}</p>
            </div>
          ))}
          </div>
  
          <div className="mob-each-head">
            <p className="mob-head-p">Дом</p>
          </div>
          <div  className="mob-each-body">
               {compareFlats.map((flat, index) => (
            <div key={flat.id}>
              <p>({index+1}) {flat.facade.facade}</p>
            </div>
          ))}
          </div>
          <div className="mob-each-head">
            <p className="mob-head-p">Год</p>
          </div>
          <div  className="mob-each-body">
               {compareFlats.map((flat, index) => (
                 
            <div key={flat.id}>
              <p>({index+1}) {flat.yearOfBuild}</p>
            
            <p><FaRegHeart onClick={e => handleToFavorite(flat)} className='btn-favorite'/></p>
                   <p onClick={e => handleRemoveFromCompare(flat.id)}><FaRegTrashAlt className='btn-delete'/></p>
                   </div>
          ))}
          </div>
  
       
  
  
  
        </div>
      </div>
    );
};

export default MobileComparePage;