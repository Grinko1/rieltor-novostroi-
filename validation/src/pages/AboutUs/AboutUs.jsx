import './AboutUs.scss';
import aboutus from '../../img/aboutus.jpeg';
import {RiBankLine, RiBriefcaseLine} from 'react-icons/ri'
import {BsSearch} from 'react-icons/bs'
import {FaCoins} from 'react-icons/fa'

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="empty"></div>
      <h1>О нас</h1>
      <div className="first-container">
       
        <div className="aboutus-desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eum! Perspiciatis
            quaerat praesentium, eius, cupiditate sit, expedita repellat id magnam ea assumenda vel
            culpa quisquam labore quas animi! Hic, non aperiam. Neque accusamus tempora ducimus odit
            quidem maiores provident facilis id officia dolores, suscipit voluptates natus debitis
            saepe ex cum autem ipsum sint. Corporis voluptates nesciunt magnam? Sit error illo sunt
            iste officiis sequi ipsam excepturi, minus explicabo iure architecto.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptates ab quos, a,
            non porro soluta necessitatibus quibusdam id qui optio saepe odio laborum vitae quam
            molestias! Veniam ex voluptatem id autem. Illo alias est quos ut, eius eveniet culpa,
            accusantium adipisci sed itaque soluta aut aspernatur in, nisi id?
          </p>
        </div>
        <div className="aboutus-img">
          <img src={aboutus} alt="" />
        </div>
      </div>
      <div className="second-container">
          <div className='circl-info'>
              <p><RiBankLine className='icon'/> </p>
              
              <p>ПОМОЩЬ В ПОЛУЧЕНИИ ИПОТЕКЕ</p>
          </div>
          <div className='circl-info'>
              <p><RiBriefcaseLine className='icon'/> </p>
              
              <p>СОПРОВОЖДЕНИЕ ВСЕЙ СДЕЛКИ</p>
          </div>
          <div className='circl-info'>
              <p><BsSearch className='icon'/> </p>
              
              <p> ПОДБОР НЕДВИЖИМОСТИ</p>
          </div>
          <div className='circl-info'>
              <p><FaCoins className='icon'/></p>
                 
                <p>ПОМОЩЬ В ПРОДАЖЕ</p>
          </div>
      </div>
    </div>
  );
};

export default AboutUs;
