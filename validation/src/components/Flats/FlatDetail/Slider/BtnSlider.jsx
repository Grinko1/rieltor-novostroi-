import "./Slide.scss";
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai'

export default function BtnSlider({ direction, moveSlide }) {

  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? <AiOutlineDoubleRight className='rigthIcon'/> : <AiOutlineDoubleLeft className='leftIcon'/> }
    </button>
  );
}