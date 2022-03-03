import React, {useState} from 'react'
import './Slide.scss'
import BtnSlider from './BtnSlider'



export default function Slider({flat}) {


    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== flat.images.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === flat.images.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(flat.images.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div>
        <div className="container-slider">
            {flat.images.map((img, index) => {
                return (
                    <div
                    key={img.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={img.url} 
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

  
        </div>
        <div className="container-dots">
            <div className="dots">
                {flat.images.map((item, index) => (
                    <div 
                    key={item.id}
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
                </div>
            </div>
        </div>
    )
}