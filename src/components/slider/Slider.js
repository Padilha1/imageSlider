import {useState, useEffect} from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {sliderData} from "./slider-data";
import "./Slider.scss";

const Slider = () => {
    const [currentSlide, setcurrentSlide] = useState(0);
    const slideLength = sliderData.length; // = 1 2 3

    // currentSlide = 0, 1, 2
    const nextSlide = () => {
        setcurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1  );
    };
    const previousSlide = () => {
        setcurrentSlide(currentSlide === 0 ? slideLength -1 : currentSlide - 1 );
    };

    useEffect( ()=>{
        setcurrentSlide(0)
    }, []);
    useEffect( ()=>{
        if(autoScroll){
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    function auto(){
        slideInterval = setInterval(nextSlide, intervalTime)
    }

  return (
    <div className='slider'>
        
        <AiOutlineArrowLeft className="arrow prev" onClick={previousSlide}/>
        <AiOutlineArrowRight className="arrow next" onClick={nextSlide}/>

        {sliderData.map((slide, index) => {
            return(
                <div className={index === currentSlide ? "slide current" : "slide"} key={index} >
                    {index === currentSlide && (
                        <>
                            <img src={slide.image} alt="slide"/>
                            <div className='content'>
                                <h2>{slide.heading}</h2>
                                <p>{slide.desc}</p>
                                <hr/>
                                <button className='--btn --btn-primary'>Get Started</button>
                            </div>
                        </>
                    )}
                </div>
            )
        })}


    </div>
  );
}

export default Slider