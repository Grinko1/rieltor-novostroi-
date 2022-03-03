import React from 'react';
import './Menu.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { SiHomebridge, SiOpenstreetmap } from 'react-icons/si';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { useSelector } from 'react-redux';

const Menu = ({ active, setActiveMenu }) => {
  const role = useSelector(state => state.user.role)
  console.log(role);
  const mapData = {
    center: [50.258061, 127.561812],
    zoom: 15,
  };

  const coordinates = [[50.258061, 127.561812]];
  return (
    <div className={active ? 'menu active' : 'menu'} onClick={() => setActiveMenu(false)}>
      <div className="empty"></div>
      <div className="blur" />
      <div className="menu_content" onClick={(e) => e.stopPropagation()}>
        <div className="menu_header">
          <div className="btn-close" onClick={() => setActiveMenu(false)}>
            <AiOutlineClose />
          </div>

          <div className="menu_contact">
            <h3>
              {' '}
              <SiHomebridge /> Новострой
            </h3>

            <p>
              <BsFillTelephoneFill /> 8 914 123 45 67 Оксана
            </p>
            <p>
              <BsFillTelephoneFill /> 8 914 675 43 21 Валера
            </p>
          </div>
        </div>
        <div className="menu_item">
        {
            role === 'ADMIN' ? ( <button>
              <Link to="admin" onClick={() => setActiveMenu(false)}>
                Aдмин
              </Link>
            </button>) :''
          }
          <button>
            <Link to="favorited" onClick={() => setActiveMenu(false)}>
              Избранное
            </Link>
          </button>
          <button>
            <Link to="consultation" onClick={() => setActiveMenu(false)}>
              Получить консультацию
            </Link>
          </button>
          <button>
            <Link to="ipoteka" onClick={() => setActiveMenu(false)}>
              Ипотека
            </Link>
          </button>
          <button>
            <Link to="about-us" onClick={() => setActiveMenu(false)}>
              О нас
            </Link>
          </button>

          <p className="menu-adress">
            <SiOpenstreetmap /> г.Благовещенск, ул. Гагарина,40
          </p>
          <div>
            <YMaps>
              <Map
                defaultState={mapData}
                style={{ width: '200px', height: '200px', margin: 'auto',}}>
                {coordinates.map((coordinate) => (
                  <Placemark key={coordinate} geometry={coordinate} />
                ))}
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
