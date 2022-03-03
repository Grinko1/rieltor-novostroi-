import './Compare.scss';
import ItemForCompare from './ItemForCompare';
import { useDispatch, useSelector } from 'react-redux';
import iconHm from '../../img/iconHm.png';
import './Compare.scss';
import { addToFavorite } from '../../slices/favoriteSlice';
import { removeFromCompare } from '../../slices/compareSlice';
import {FaRegTrashAlt, FaRegHeart} from 'react-icons/fa'
import MobileComparePage from './MobileComparePage';

const ComparePage = () => {
  const compareFlats = useSelector((state) => state.compare.compareFlats);



  return (
 <>
 <MobileComparePage/>
    <div className='compare-container'>
        <div className="empty"></div>
        <h1>Сравнение</h1>
        <div className='each-compare'>
            <div className='each-head'>
            <div className='each-img'>
                <img src={iconHm} alt=""/>
            </div>
        <div><p className='head-p'>Вид недвижимости</p></div>
        <div><p className='head-p'>Новостройка/вторичка</p></div>
        <div><p className='head-p'>К-во комнат</p></div>
        <div><p className='head-p'>Площадь</p></div>
        <div><p className='head-p'>Площадь кухни</p></div>
        <div><p className='head-p'>Цена</p></div>
        <div><p className='head-p'>Цена за м&sup2;</p></div>
        <div><p className='head-p'>Адрес</p></div>
        <div><p className='head-p'>Район</p></div>
        <div><p className='head-p'>Этаж</p></div>
        <div><p className='head-p'>Лифт</p></div>
        <div><p className='head-p'>Ремонт</p></div>
        <div><p className='head-p'>Санузел</p></div>
        <div><p className='head-p'>Балкон</p></div>
        <div><p className='head-p'>Дом</p></div>
        <div><p className='head-p'>Год</p></div>
            </div>
            <div className='compare-body'>
                <ItemForCompare/>
            </div>

        </div>

    </div>
    </>
  );
};

export default ComparePage;
