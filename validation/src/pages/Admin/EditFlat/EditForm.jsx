import React from 'react';
import { useSelector } from 'react-redux';
import DropzoneComponent from '../AddFlat/Dropzone';
import {TiDeleteOutline} from 'react-icons/ti'

const EditForm = (props) => {
    const {
        flat,
        area,
        setArea,
        adress,
        setAdress,
        coordinate,
        setCoordinate,
        handleSubmit,
        title,
        setTitle,
        desc,
        setDesc,
        total_floors,
        setTotal_floors,
        lift,
        setLift,
        city,
        setCity,
        square,
        setSquare,
        kitchenSquare,
        setKitchenSquare,
        images,
        price,
        setPrice,
        yearOfBuild,
        setYearOfBuild,
        build_id,
        setBuild_id,
        resale_id,
        setResale_id,
        room_id,
        setRoom_id,
        floor_id,
        setFloor_id,
        decoration_id,
        setDecoration_id,
        bathroom_id,
        setBathroom_id,
        balcony_id,
        setBalcony_id,
        facade_id,
        setFacade_id,
        files,
        setFiles,
        oldImages,
        setOldImages,
        handleDeleteOldImg
    
      } = props;
      console.log(oldImages);
      const {balconies, builds, facades, bathrooms, decorations, floors, resales, rooms} = useSelector(state=> state.categories)
    return (
         <form className="formEdit" onSubmit={handleSubmit}>
           <div>
        <DropzoneComponent files={files} setFiles={setFiles} />
        </div>
        <div className='oldImg-container'>
             {
               oldImages && oldImages.map((img, index) => (
                 <div  key={img.id} >
                 <img src={img.url}/>
                 <TiDeleteOutline key={img.name} className='deleteOldImg' 
                 onClick={() => handleDeleteOldImg(img.id)}
                  />
                 </div>
               ))
             }

           </div>
        <div className="group-input">
          <input type="text" defaultValue={flat?.id} name="id" hidden />
          <div>
          <p>Город:</p>
          <input
            type="text"
            placeholder="Город"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
          <div>
            <p>Район:</p>
            <input
              type="text"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              name="area"
            />
          </div>
          <div>
          <p>Адрес:</p>
          <input
            type="text"
            placeholder="Адрес"
            name="adress"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
        </div>
        <div>
        <p>Координаты точки на яндекс карте:</p>
          <input
            type="text"
            placeholder="Координаты точки на яндекс карте"
            name="coordinate"
            value={coordinate}
            onChange={(e) => setCoordinate(e.target.value)}
          />
        </div>
          <div>
            <p>Заголовок:</p>
            <input 
            type="text" 
            value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
          </div>
          <div>
            <p>Описание:</p>
            <textarea rows="10" 
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
      
          <div className="groupSmallInput">
            <div>
              <p>Лифт:</p>
              <input className="smallInput" 
              type="text" 
              value={lift}
              onChange={(e) => setLift(e.target.value)}/>
            </div>
            <div>
              <p>Площадь:</p>
              <input
                className="smallInput"
                type="number"
                value={square}
                onChange={(e) => setSquare(e.target.value)}
              />
            </div>
            <div>
              <p>Площадь кухни:</p>
              <input
                className="smallInput"
                type="number"
                value={kitchenSquare}
                onChange={(e) => setKitchenSquare(e.target.value)}
              />
            </div>
            <div>
              <p>Цена:</p>
              <input className="smallInput" 
              type="number" 
              value={price}
              onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div  >
              <p>Всего этажей:</p>
          <input
          className='smallInput'
            type="number"
            placeholder="Всего этажей"
            name="total_floors"
            value={total_floors}
            onChange={(e) => setTotal_floors(e.target.value)}
          />
        </div>
            <div>
              <p>Год :</p>
              <input
                className="smallInput"
                type="number"
                value={yearOfBuild}
                onChange={(e) => setYearOfBuild(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="group-select">
          <div>
            <p>Дом/Квартира</p>

            <select name="build"
            value={build_id} onChange={(e) => setBuild_id(e.target.value)}
            >
              {builds.map((build) => (
                <option
                  key={build.id}
                  value={build.id}
                  >
                  {build.build}
                </option>
              ))}
            </select>
          </div>
          <div>
            {' '}
            <p>Новостройка/вторичка</p>
            <select name="resale"
             value={resale_id}
             onChange={(e) => setResale_id(e.target.value)}
            >
              {resales.map((resale) => (
                <option
                  key={resale.id}
                  value={resale.id}
                  >
                  {resale.resale}
                </option>
              ))}
            </select>
          </div>
          <div>
            {' '}
            <p>К-во комнат</p>
            <select name="room"    value={room_id} onChange={(e) => setRoom_id(e.target.value)}>
              {rooms.map((room) => (
                <option
                  key={room.id}
                  value={room.id}

                  >
                  {room.room}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p>Этаж</p>
            <select name="floor"  value={floor_id} onChange={(e) => setFloor_id(e.target.value)}>
              {floors.map((floor) => (
                <option
                  key={floor.id}
                  value={floor.id}

                  >
                  {floor.floor}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p>Ремонт/отделка</p>
            <select name="decoration" 
                        value={decoration_id}
                        onChange={(e) => setDecoration_id(e.target.value)}
            >
              {decorations.map((decoration) => (
                <option
                  key={decoration.id}
                  value={decoration.id}
    
                  >
                  {decoration.decoration}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p>Санузел</p>
            <select name="bathroom" 
            value={bathroom_id}
            onChange={(e) => setBathroom_id(e.target.value)}
            >
              {bathrooms.map((bathroom) => (
                <option
                  key={bathroom.id}
                  value={bathroom.id}
                  >
                  {bathroom.bathroom}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p>Балкон</p>
            <select name="balcony" 
             value={balcony_id}
             onChange={(e) => setBalcony_id(e.target.value)}
            >
              {balconies.map((balcony) => (
                <option
                  key={balcony.id}
                  value={balcony.id}
          
                  >
                  {balcony.balcony}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p>Дом</p>
            <select name="facade"
             value={facade_id}
             onChange={(e) => setFacade_id(e.target.value)}
            >
              {facades.map((facade) => (
                <option
                  key={facade.id}
                  value={facade.id}
              
                  >
                  {facade.facade}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button className="btn-update-flat" type="submit">
          Обновить
        </button>
      </form> 
    );
};

export default EditForm;