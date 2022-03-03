import React, { useState } from 'react';
import './FlatForEdit.scss'
import {Link} from 'react-router-dom'
import {FaMapMarkedAlt, FaRegHeart} from 'react-icons/fa'
import {GrMoney} from 'react-icons/gr'
import Modal from './Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFlat, deleteFromFront } from '../../../slices/flatSlice';
import { toast } from 'react-toastify';


const ListFlat = () => {
    const [active, setActive] = useState(false)
    const [idForDelete, setIdForDelete] = useState('')
    const dispatch = useDispatch()

   

    const flats = useSelector(state => state.flats.flats)

 const openModal = (id) => {

        setActive(true)
        setIdForDelete(id)


    }

    console.log(idForDelete, 'idForDelete');
     
    const handleDelete =(idForDelete) => {
        console.log(idForDelete, 'handleDelete');
        dispatch(deleteFlat(idForDelete))
        dispatch(deleteFromFront(idForDelete))
        setActive(false)
        toast.success('Квартира удалена с сайта и базы данных', {
            position: 'bottom-left',
          });
        
    }

    return (
        <div className='listOfFlat'>  
            {
flats && flats.map(flat =>
             (       
            <div key={flat.id} className="item-flat">
       {     active ?    
   
          (<Modal active={active} setActive={setActive} >
              <p></p>
                  <b>Вы действительно хотите удалить объявление?</b>
                
                  <div className='modal-btns' >
                      <button onClick={()=>handleDelete(idForDelete)}  className='modal-btn delete'>Удалить</button>
                      <button onClick={() => setActive(false)}  className='modal-btn cancel'>Отменить</button>
                  </div>
          </Modal> )
          :
             (   <div className="item-info">
              
                    <div className='forCentrImg'>
                <img className='item-flat-img' src={flat.images[0]?.url} alt=""/>
                </div>
                <div className='forCentrDesc'>
                <h2>{flat.build.build} {flat.square} м&sup2; , {flat.room.room}
                {flat.room.room.toString().length > 1 ? '' : '-ком.' }
                </h2>
                <p><FaMapMarkedAlt color='gray'/>  {flat.area}</p>
                <b><GrMoney color='lightgray'/>  {flat.price}&#8381; / {(flat.price/flat.square).toFixed(1)} м&sup2; </b> 
                <p className='title'>{flat.title}</p>
                <div className='forCentrBtn'>
                <button onClick={() => openModal(flat.id)} className='btn btn-delete'>Удалить</button>

            
                
                <Link to={`${flat.id}`} className='btn btn-edit'>Редактировать</Link>
                </div>
                </div> 
               
                </div>) 
                }
           
            </div>
             )
    )} 
        </div>
    );
};

export default ListFlat;