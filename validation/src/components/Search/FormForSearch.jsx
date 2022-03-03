import React, { useState } from 'react';
import {  useSelector } from 'react-redux';
import './Form.scss';
import {BsChevronDoubleDown, BsChevronDoubleUp} from 'react-icons/bs'

const FormForSearch = (props) => {
  const [open, setOpen] = useState(false)

  const { setBuild_id,build_id,room_id, resale_id, area,  setRoom_id, setResale_id, setArea,price_from ,setPrice_from, price_to, setPrice_to ,handleSearch ,resetFilter, sort, setSort} = props


    const { builds, resales, rooms} = useSelector(state=> state.categories)
    const flats = useSelector(state => state.flats.flats)
 
   const areas = flats.map(flat => {
    return flat.area
   })

    
   const uniqAreas = areas.filter((e,i,a)=>a.indexOf(e)===i)

 
 
  

  return (
    <div className="search">
      <div className="empty"></div>
      <div className="search-container">
        <h3>Купить <span>
   
        <select  className='mainSelect' value={build_id} onChange={e => setBuild_id(e.target.value)} >
          {
            builds && builds.map( build =>(
              <option key={build.build } value={build.id} >{build.for_search} </option>
            )
             
            )
          }
           
           
            </select>
            </span> <br className='forMobail'/> в Благовещенске </h3>
            <div className='hideForMobile'>
              <div className="openFilter" onClick={()=>setOpen(!open)}>
                {
                  open ? (
                    <>
                    <h4><BsChevronDoubleUp/><br/>Закрыть фильтр 
            </h4>
            </>
                  ) : (
                    <>
                      <h4>Открыть фильтр <br/>
              <BsChevronDoubleDown/></h4>
              </>
                  )
                }
            
              </div>
        <div 
        className={open ? 'blockForHide' : 'hidden'}
        >
        <div>
         
         <div className='group-select'>
        
        <select value={room_id} onChange={e => setRoom_id(e.target.value)} >
          <option value=''>К-во комнат</option>
          {
            rooms && rooms.map(room => (
           
              <option key={room.room} value={room.id}>{room.room}</option>
          
            ))
          }
          
      
        </select>
        <select value={resale_id} onChange={e => setResale_id(e.target.value)}>
            {
              resales && resales.map(resale => (
                <option key={resale.resale} value={resale.id}>{resale.resale}</option>
              ))
            }
  
        
        </select>


        <select value={area} onChange={e => setArea(e.target.value)}>
        <option value="">район</option>
          {
            uniqAreas && uniqAreas.map(flat => (
              <option key={flat} value={flat}>{flat}</option>
            ))

          }
        

        </select>
     

        <label className='inputs'>Цена:</label>
        <input type='text' pattern={`/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '`} placeholder='от' value={price_from} onChange={e => setPrice_from(e.target.value)}/>
        <input type='number'  placeholder='до'value={price_to} onChange={e => setPrice_to(e.target.value)}/>
        </div>
     
        </div>

        <button className='main_btn_search'  onClick={()=>setOpen(false)}>Найти...</button>
      

      <div className='sort'>
        <div>
        <button className='btn-reset' onClick={resetFilter}>Сбросить фильтр</button>
      </div>
      <div>
        <select value={sort} onChange={e => setSort(e.target.value)}>
          <option disabled >Сортировать</option>
          <option value="new">Новые</option>
          <option value="min">Мин цена </option>
          <option value="max">Мах цена</option>
        </select>
      </div>
      </div>
      </div>
      </div>

      </div>
    </div>
  );
};

export default FormForSearch;
