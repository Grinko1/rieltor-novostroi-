import './Consultation.scss';
import {BsInstagram, BsWhatsapp, BsTelephone} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createApplication } from '../../slices/applicationsSlice';
import { toast } from 'react-toastify';
import { useRef, useState } from 'react';

const Consultation = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [time_since, setTime_since] = useState('')
    const [time_till, setTime_till] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        dispatch(createApplication(data))
        toast.success('Заявка отпралена', {
            position: 'bottom-left',
          });
          setName('')
          setTel('')
          setTime_since('')
          setTime_till('')

    }
    return (
        <div className='consul-container'>
            <div className="empty"></div>
            <h1>Получить консультацию</h1>

   <h3>Вы можете связать с риэлтором самостоятельно, любым удобным способом: </h3>
            <div className="first-block">
            <div className="self-block">
               
                 

                    <div className='key'> <p>Позвонив по номеру: </p>  </div> 
                    <div className='value'>
                    <p ><BsTelephone className='tel-icon'/> 8 914 123 45 67  Николай</p>
                        <p><BsTelephone className='tel-icon'/> 8 914 765 43 21 Ольга </p> 
                    </div>
                     
                    <div className='key'> <p>Написав в WhatsApp: </p>  </div> 
                    <div className='value'>
                    <a href=" https://api.whatsapp.com/send?phone=9140464566" target="_blank"><p > <> <BsWhatsapp  className='whats-icon'/></></p></a> 
                    </div>
                    <div className='key'> <p>Написав в Instagram: </p>  </div> 
                    <div className='value'>
                    <a href='https://www.instagram.com/colorista_bel/' target="_blank"><p > <BsInstagram  className='insta-icon'/></p></a>
                    </div>

            </div>
            </div>
            <div className="second-block">
            <h3>Либо заказать обратный звонок:</h3>
            <form className='formForCall' onSubmit={handleSubmit}>
                <input type="text" placeholder='Имя' name='name' value={name} onChange={e=> setName(e.target.value)}/>
                <input type="tel" placeholder='Телефон' name='tel'value={tel} onChange={e=> setTel(e.target.value)} />
                <div> В какое время перезвонить ? </div>
                    С <input type="time" placeholder='00:00' name='time_since' value={time_since} onChange={e=> setTime_since(e.target.value)}/>
                     
                          
                    До <input type="time" name='time_till' value={time_till} onChange={e=> setTime_till(e.target.value)}/> 
                <button className='btn-order-call' type='submit'>Отправить</button>
            </form>
            </div>
            
        </div>
    );
};

export default Consultation;