import './Favorite.scss'
import {FaMapMarkedAlt, FaRegHeart} from 'react-icons/fa'
import {GrMoney} from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {RiDeleteBack2Line} from 'react-icons/ri'
import { removeFromFavorite } from '../../slices/favoriteSlice';
import {BiBookHeart} from 'react-icons/bi'

const Favorite = () => {
    const favoritedFlat = useSelector(state => state.favorites.favoritedFlat)
    // console.log([...favoritedFlat]);





    const dispatch = useDispatch();
  
    const handleRemove = (id) => {
        dispatch(removeFromFavorite({id}))
    }
    return (
        <div className='favorited'>
            <div className="empty">
               
            </div>
            <h1>Избранное</h1>

            {
                !favoritedFlat.length ? (
                    <div className='ifEmpty'>
                         <h2>Вы ещё ничего не добавили </h2>
                         <p><BiBookHeart className='fav-book'/></p>
                         <h4>Вернуться на <Link to='/' >главную </Link></h4>
                    </div>
               
                ) : (
                    <>
                      {
                favoritedFlat.map(flat =>(
                    <div key={flat.id}  className='flat-item'>
                    <div className='flat-img'>
                        <Link to={`/flat/${flat.id}`}>
                        <img src={flat.images[0].url} alt=""/>
                        </Link>
                    </div>
                    <div className='flat-item-desc'>
                    <div>
                    <Link to={`/flat/${flat.id}`}>
                      
                        <h2>{flat.build.build} {flat.square} м&sup2; , {flat.room.room}{flat.room.room.toString().length > 1 ? '' : '-ком.' }</h2>
                        </Link>
                    </div>
                    <div>
                        <p><FaMapMarkedAlt color='gray'/>  {flat.area}</p>
                    </div>
                    <div>
                        <b><GrMoney color='lightgray'/>  {flat.price}&#8381;</b> <p>Цена за м&sup2; {(flat.price/flat.square).toFixed(1)} </p>
                    </div>
                    <div>
                        <p>{flat.title}</p>
                    </div>
                    <div onClick={e =>handleRemove(flat.id)} >
                      <p className='flat-item-favorite red'><RiDeleteBack2Line/>  Убрать </p> 
                    </div>
                    </div>
                    
                </div>
                )
                    )
            }
                    </>
                )
            }

          
         
      
            
        </div>
    );
};

export default Favorite;