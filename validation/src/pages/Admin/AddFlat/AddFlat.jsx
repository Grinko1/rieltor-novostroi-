import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import './AddFlat.scss';
import AddFlatForm from './AddFlatForm';


const AddFlat = () => {
  const navigate = useNavigate()


  const [files, setFiles] = useState([]);
  const [area, setArea] = useState('');
  const [adress, setAdress] = useState('');
  const [coordinate, setCoordinate] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [lift, setLift] = useState('');
  const [square, setSquare] = useState('');
  const [kitchenSquare, setKitchenSquare] = useState('');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('');
  const [total_floors, setTotal_floors] = useState('');
  const [yearOfBuild, setYearOfBuild] = useState('');
  const [build_id, setBuild_id] = useState(1);
  const [resale_id, setResale_id] = useState(1);
  const [room_id, setRoom_id] = useState(1);
  const [floor_id, setFloor_id] = useState(1);
  const [decoration_id, setDecoration_id] = useState(1);
  const [bathroom_id, setBathroom_id] = useState(1);
  const [balcony_id, setBalcony_id] = useState(1);
  const [facade_id, setFacade_id] = useState(1);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
  
    formData.append('title', title)
    formData.append('area', area)
    formData.append('adress', adress)
    formData.append('coordinate', coordinate)
    formData.append('desc', desc)
    formData.append('lift', lift)
    formData.append('square', square)
    formData.append('price', price)
    formData.append('city', city)
    formData.append('total_floors', total_floors)
    formData.append('kitchenSquare', kitchenSquare)
    formData.append('yearOfBuild', yearOfBuild)
    formData.append('build_id', build_id)
    formData.append('resale_id', resale_id)
    formData.append('room_id', room_id)
    formData.append('floor_id', floor_id)
    formData.append('decoration_id', decoration_id)
    formData.append('bathroom_id', bathroom_id)
    formData.append('balcony_id', balcony_id)
    formData.append('facade_id', facade_id)

  
    for (let i = 0; i < files.length; i++) {
      formData.append('files[]', files[i]);
    }

    axios.post('http://localhost:5000/api/flat', formData,{
  config:{
    headers:{
        'Content-Type' : 'multipart/form-data'
    }
  }
}).then(res=>{
  console.log(res);
  toast.success('Объявление добавленно', {
    position: 'bottom-left',
  });
  navigate('/admin')

})

  };



  return (
    <div>
      <div className="admin-form">
        <AddFlatForm 
            area={area}
            setArea={setArea}
            adress={adress}
            setAdress={setAdress}
            coordinate={coordinate}
            setCoordinate={setCoordinate}
            handleSubmit={handleSubmit}
            title={title}
            setTitle={setTitle}
            desc={desc}
            setDesc={setDesc}
            lift={lift}
            total_floors={total_floors}
            setTotal_floors={setTotal_floors}
            setLift={setLift}
            square={square}
            setSquare={setSquare}
            kitchenSquare={kitchenSquare}
            setKitchenSquare={setKitchenSquare}
            price={price}
            setPrice={setPrice}
            city={city}
            setCity={setCity}
            yearOfBuild={yearOfBuild}
            setYearOfBuild={setYearOfBuild}
            build_id={build_id}
            setBuild_id={setBuild_id}
            resale_id={resale_id}
            setResale_id={setResale_id}
            room_id={room_id}
            setRoom_id={setRoom_id}
            floor_id={floor_id}
            setFloor_id={setFloor_id}
            decoration_id={decoration_id}
            setDecoration_id={setDecoration_id}
            bathroom_id={bathroom_id}
            setBathroom_id={setBathroom_id}
            balcony_id={balcony_id}
            setBalcony_id={setBalcony_id}
            facade_id={facade_id}
            setFacade_id={setFacade_id}
            files={files}
            setFiles={setFiles}
            onSubmit={handleSubmit}
        />

 
      </div>
    </div>
  );
};

export default AddFlat;
