import React from 'react'
import "../Css/Navbar.css"

const Navbar = () => {
   
  return (
   <>
     <div className='largeScreen'>
        <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/themes/panpie/assets/img/logo-dark.png" alt="" />
      
        <div className='routes'>
           <div className='dropdown1 home'>
           <li className='dropbtn1'>HOME  <i class="fa fa-caret-down"></i> </li>
           <div class="dropdown-content1">
      <a href="#">Home 1</a>
      <a href="#">Home 2</a>
      <a href="#">Home 3</a>
      <a href="#">Home 1</a>
      <a href="#">Home 2</a>
      <a href="#">Home 3</a>
    </div>
           </div>

           <div className='dropdown1 menu'>
           <li className='dropbtn1'>MENU  <i class="fa fa-caret-down"></i> </li>
           <div class="dropdown-content1">
      <a href="#">Food Menu 01</a>
      <a href="#">Food Menu 02</a>
      <a href="#">Food Menu 03</a>
      <a href="#">Food Menu 01</a>
      <a href="#">Food Menu 02</a>
      <a href="#">Food Menu 03</a>
    </div>
           </div>
          
           <div className='dropdown1 pages'>
           <li className='dropbtn1'>PAGES  <i class="fa fa-caret-down"></i> </li>
           <div class="dropdown-content1">
           <a href="#">Pages</a>
      <a href="#">Gallery Page</a>
      <a href="#">Team Page</a>
      <a href="#">Event Page</a>
    </div>
           </div>
          
           <div className='dropdown1 blog'>
           <li className='dropbtn1'>BLOG  <i class="fa fa-caret-down"></i> </li>
           <div class="dropdown-content1">
      <a href="#">Blog 1</a>
      <a href="#">Blog 2</a>
      <a href="#">Single Blog</a>
    </div>
           </div>
          
           <div className='dropdown1 shop'>
           <li className='dropbtn1'>SHOP  <i class="fa fa-caret-down"></i> </li>
           <div class="dropdown-content1">
      <a href="#">Shop</a>
      <a href="#">Cart</a>
      <a href="#">Checkout</a>
    </div>
           </div>
          
            <li>CONTACT</li> 

        </div>

        <div className="contactAndCartDiv">
        <div className='contact'>
        <span className="material-symbols-outlined icons">
phone_in_talk
</span>
   <div className='contactNumber'>
   <p>HOT LINE :</p>
   <p>+304-456-789</p>
   </div>
        </div>
        <li>
        <span class="material-symbols-outlined icons">
shopping_cart
</span>
        </li>
            <li>
            <span class="material-symbols-outlined icons">search</span>
            </li>
        </div>
     </div>


    
   
   </>
  )
}

export default Navbar