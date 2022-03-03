import './Applications.scss';
import {AiOutlineDelete} from 'react-icons/ai'
import { useState } from 'react';

const Apllication = ({id, name, tel, time_since, time_till, handleDelete}) => {

    // const handleDelete = (id) => {

    // }
 
    return (
        <div className='oneApplicat'>
            <p>Имя: {name}</p>
            <p>Телефон: {tel}</p>
            <p>Время для звонка : с {time_since} до {time_till}</p>
            <div className='isDone'>
             
                  <p className='delete-appl' onClick={e=> handleDelete(id)}><AiOutlineDelete/></p>
            
            </div>
         
            
        </div>
    );
};

export default Apllication;