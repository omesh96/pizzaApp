 import React, { useEffect, useState } from 'react'
 import "../Css/Home.css";

 const dataArray=[
    {image:"https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_06-400x400.png",price:'18.00',title:"BBQ Pizza Tin Tin"},
    {image:"https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_011-400x400.png",price:'18.50',title:"Burger Kingo"},
    {image:"https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_016-400x400.png",price:'21.50',title:"Cheesy Pizza"},
    {image:"https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_08-400x400.png",price:'17.00',title:"BBQ pizza Tin Tin"},
    {image:"https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_014-400x400.png",price:'18.50',title:"Lemon Juice"},
    {image:"https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_010-400x400.png",price:'19.00',title:"Chicken Sandwich"}
 ]

 const imageUrls = [
    'https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/slide02-1.png',
    'https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_06-400x400.png',
    'https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2020/11/pro_08-400x400.png'
    
    // Add more image URLs as needed
  ];
 
 const Home = () => {
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
      
      // Function to display a random image at a specified interval
     
     
   return (
   <>

  


     <div className='secondContainer'>
      <div className='firstDiv'>
        <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/add01.jpg" alt="pic" />
      </div>
     <div className="secondDiv">
        <div className="secondFirstDiv">
            <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/add02.jpg" alt="pic" />
            <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/add03.jpg" alt="pic" />
        </div>
        <div className="secondSecondDiv">
            <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/add04.jpg" alt="pic" />
        </div>
     </div>

       </div>

       <div className="thirdContainer">
         <div className='headLine'>
            <p style={{color:"red",fontSize:"18px"}}>FRESH FROM PANPIE</p>
            <p>We Offer People Best Pizza</p>
         </div>

         <div className="content">
          

            {dataArray.map((el)=>{
                return <div className='items'>
                    <img src={el.image} alt="pic" />
                    <p className='price' style={{color:"red",fontSize:"20px"}}>$ {el.price}</p>
                    <p className='title'>{el.title}</p>

                    <div className="butn">
                        
                <a class="btn" href="#">View Option</a>
                    </div>
                </div>
            })}

         </div>
       </div>
   </>
   )
 }
 
 export default Home