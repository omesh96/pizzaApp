import React, { useEffect, useState } from 'react'
import "../Css/Slider.css"

const imageUrls = [
    'https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/slide02-1.png',
    'https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_06-400x400.png',
    'https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_08-400x400.png'
    
    // Add more image URLs as needed
  ];

const SliderAnimation = () => {
    const [image,setImage]=useState("")

    useEffect(()=>{
        const interval = setInterval(() => {
            const newRandomImage = getRandomImage();
            setImage(newRandomImage);
          }, 3000);
      
          return () => clearInterval(interval);
    },[])
    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        return imageUrls[randomIndex];
      }
  return (
    <div class="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicators" style={{marginTop:"10px"}}>
    <div class="carousel-indicators">
        <button aria-label="Slide 1" class="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" type="button"></button>
    </div>
    <div class="carousel-inner " style={{backgroundColor:"gray"}}>
        <div class="carousel-item active">
          <div className="secondFirstContainer">
          <img alt="..." class="d-block w-100" src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/slide02-1.png"  style={{height:"500px"}}/>
          </div>
            <div class="carousel-caption">
                <p class="animated bounceInRight" style={{animationDelay: "1s"}}>BIG ITALIAN</p>
                <p class="animated bounceInLeft d-none d-md-block" style={{animationDelay: "2s"}}>CHEESE PIZZA</p>
                <p class="animated bounceInLeft d-none d-md-block" style={{animationDelay: "2.5s"}}>Additional charge for premium topping are fixed</p>
                <a class="animated bounceInLeft d-none d-md-block" style={{animationDelay: "3.5s"}} href="#">  <a class="btn1" href="#">Order Now</a></a>
            </div>
        </div>
        <div class="carousel-item">
            <div class="carousel-caption">
                <p class="animated bounceInRight" style={{animationDelay: "1s"}}>BIG ITALIAN</p>
                <p class="animated bounceInLeft d-none d-md-block" style={{animationDelay: "2s"}}>CHEESE PIZZA</p>
                <p class="animated bounceInRight" style={{animationDelay: "3s"}}>Additional charge for premium topping are fixed</p>
                <a class="animated bounceInLeft d-none d-md-block" style={{animationDelay: "3.5s"}} href="#">  <a class="btn1" href="#">Order Now</a></a>
            </div>
            <div className="secondFirstContainer">
          <img alt="..." class="d-block w-100" src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_06-400x400.png"  style={{height:"500px"}}/>
          </div>
        </div>
        <div class="carousel-item" >
            <div class="carousel-caption">
            <p class="animated bounceInRight" style={{animationDelay: "1s"}}>BIG ITALIAN</p>
                <p class="animated bounceInLeft d-none d-md-block" style={{animationDelay: "2s"}}>CHEESE PIZZA</p>
                <p class="animated bounceInRight" style={{animationDelay: "3s"}}>Additional charge for premium topping are fixed</p>
                <a class="animated bounceInLeft d-none d-md-block" style={{animationDelay: "3.5s"}} href="#">  <a class="btn1" href="#">Order Now</a></a>
            </div>
            <div className="secondFirstContainer">
          <img alt="..." class="d-block w-100" src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/slide02-1.png"  style={{height:"500px"}}/>
          </div>
        </div>
    </div><button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" class="carousel-control-prev-icon"></span> <span class="visually-hidden">Previous</span></button> <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" class="carousel-control-next-icon"></span> <span class="visually-hidden">Next</span></button>
</div>
  )
}

export default SliderAnimation