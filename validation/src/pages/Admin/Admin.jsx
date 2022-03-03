import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link,NavLink,  Outlet } from 'react-router-dom';
import { fetchApplications } from '../../slices/applicationsSlice';
import { fetchBalcony, fetchBathroom, fetchBuild, fetchDecoration, fetchFacade, fetchFloor, fetchResale, fetchRoom } from '../../slices/categoriesSlice';
import AddFlat from './AddFlat/AddFlat';
import './Admin.scss'
import Applications from './Applications/Applications';

const Admin = () => {
   
  const {balconies, builds, facades, bathrooms, decorations, floors, resales, rooms} = useSelector(state=> state.categories)

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchApplications())
    },[])


    return (
        <div className='admin'>
          <div className="empty"></div>
            <h1 className='admin-panel'>Админ панель   / <Link to='/login'>Выйти</Link></h1>
            <div className="admin-container">
            <div className='admin-sidebar'>
                    <div className='admin-item'>
                      <NavLink to='create'>Добавить квартиру/дом</NavLink>  
                    </div>
                    <div className='admin-item'>
                      <NavLink to='edit'>Редактировать квартиру/дом</NavLink>  
                    </div>
                    <div className='admin-item'>
                      <NavLink to='requests'>Заявки на обратный звонок</NavLink>  
                    </div>
                   
                   
                </div>
                <div className="main-admin">
                  
                  <Outlet/>
      
                </div>
             
             </div>

            
            
        </div>
    );
};

export default Admin;