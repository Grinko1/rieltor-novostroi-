import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { fetchFlat, updateFlat } from '../../../slices/flatSlice';
import EditForm from './EditForm';
import './FormFlat.scss';
import { toast } from 'react-toastify';
import { deleteImage } from '../../../slices/imageSlice';

const FormForEdit = () => {
  let { flat, status } = useSelector((state) => state.flats);
  const navigate = useNavigate()

  const { balconies, builds, facades, bathrooms, decorations, floors, resales, rooms } =
    useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [files, setFiles] = useState([]);
  const [area, setArea] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [lift, setLift] = useState('');
  const [city, setCity] = useState('');
  const [square, setSquare] = useState('');
  const [kitchenSquare, setKitchenSquare] = useState('');
  const [price, setPrice] = useState('');
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
  const [adress, setAdress] = useState('');
  const [coordinate, setCoordinate] = useState('');
  const [oldImages, setOldImages] = useState([]);

  useEffect(() => {
    dispatch(fetchFlat(id));
  }, [id]);



  useEffect(() => {
    if (flat !== null) {
      console.log(flat.area);
      setArea(flat.area);
      setAdress(flat.adress)
      setCoordinate(flat.coordinate)
      setTitle(flat.title);
      setDesc(flat.desc);
      setLift(flat.lift);
      setCity(flat.city);
      setSquare(flat.square);
      setKitchenSquare(flat.kitchenSquare);
      setTotal_floors(flat.total_floors);
      setPrice(flat.price);
      setYearOfBuild(flat.yearOfBuild);
      setBuild_id(flat.build_id);
      setResale_id(flat.resale_id);
      setRoom_id(flat.room_id);
      setFloor_id(flat.floor_id);
      setDecoration_id(flat.decoration_id);
      setBathroom_id(flat.bathroom_id);
      setBalcony_id(flat.balcony_id);
      setFacade_id(flat.facade_id);
      setOldImages(flat.images)
    }
  }, [flat]);

  if (status === 'loading' && flat === null) return <h1>Loading</h1>;


  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('title', title)
    formData.append('area', area)
    formData.append('adress', adress)
    formData.append('coordinate', coordinate)
    formData.append('desc', desc)
    formData.append('city', city)
    formData.append('lift', lift)
    formData.append('square', square)
    formData.append('price', price)
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

    console.log(id);

    axios.post(`http://127.0.0.1:8000/api/flats/${id}`, formData,
    {
  config:{

    headers:{
      'Content-Type' : 'multipart/form-data'
  }
  }
}
).then(res=>{
  toast.success('Объявление обновленно', {
    position: 'bottom-left',
  });
  navigate('/admin/edit')
})
  };

  const handleDeleteOldImg = (id) => {
   
    dispatch(deleteImage(id))
   const leavingImg = oldImages.filter(item => item.id !== id)
   setOldImages(leavingImg)
    toast.success('Изображение удаленно', {
      position: 'bottom-left',
    });
 
}
  return (
    <div>
      <EditForm
        flat={flat}
         area={area}
         setArea={setArea}
         adress={adress}
         setAdress={setAdress}
         coordinate={coordinate}
         setCoordinate={setCoordinate}
         handleSubmit={handleSubmit}
         title={title}
         setTitle={setTitle}
         total_floors={total_floors}
         setTotal_floors={setTotal_floors}
         desc={desc}
         setDesc={setDesc}
         lift={lift}
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
         oldImages={oldImages}
         setOldImages={setOldImages}
         handleDeleteOldImg={handleDeleteOldImg}
      />
   
    </div>
  );
};

export default FormForEdit;
