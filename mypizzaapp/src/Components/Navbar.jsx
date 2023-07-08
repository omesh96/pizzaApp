import React from 'react'
import "../Css/Navbar.css"
import { FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi"
import {Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Input, Spacer, useDisclosure} from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'
const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
   <>
     <div className='largeScreen'>
        <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/themes/panpie/assets/img/logo-dark.png" alt="" />
      
        <div className='routes'>
           <div className='dropdown home'>
           <li className='dropbtn'>HOME  <i class="fa fa-caret-down"></i> </li>
           <div class="dropdown-content">
      <a href="#">Home 1</a>
      <a href="#">Home 2</a>
      <a href="#">Home 3</a>
      <a href="#">Home 1</a>
      <a href="#">Home 2</a>
      <a href="#">Home 3</a>
    </div>
           </div>

           <div className='dropdown menu'>
           <li className='dropbtn'>MENU  <i class="fa fa-caret-down"></i> </li>
           <div class="dropdown-content">
      <a href="#">Food Menu 01</a>
      <a href="#">Food Menu 02</a>
      <a href="#">Food Menu 03</a>
      <a href="#">Food Menu 01</a>
      <a href="#">Food Menu 02</a>
      <a href="#">Food Menu 03</a>
    </div>
           </div>
          
           <div className='dropdown pages'>
           <li className='dropbtn'>PAGES  <i class="fa fa-caret-down"></i> </li>
           <div class="dropdown-content">
           <a href="#">Pages</a>
      <a href="#">Gallery Page</a>
      <a href="#">Team Page</a>
      <a href="#">Event Page</a>
    </div>
           </div>
          
           <div className='dropdown blog'>
           <li className='dropbtn'>BLOG  <i class="fa fa-caret-down"></i> </li>
           <div class="dropdown-content">
      <a href="#">Blog 1</a>
      <a href="#">Blog 2</a>
      <a href="#">Single Blog</a>
    </div>
           </div>
          
           <div className='dropdown shop'>
           <li className='dropbtn'>SHOP  <i class="fa fa-caret-down"></i> </li>
           <div class="dropdown-content">
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


     {/* <div className='mobileScreen'>
     <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/themes/panpie/assets/img/logo-dark.png" alt="" />
      
      <li>
        <span class="material-symbols-outlined icons">
shopping_cart
</span>
        </li>
        <li>
        <span className="material-symbols-outlined icons">
phone_in_talk
</span>
        </li>
        <li>
            <span class="material-symbols-outlined icons">search</span>
            </li>
            <span class="material-symbols-outlined">
menu
</span>
     </div> */}

{/* <div className='drawer'>
  
  <Box className='drawer-btn'>
  <Button ref={btnRef} colorScheme='transparent' onClick={onOpen} >
   <HamburgerIcon style={{ color:"black",height:"60px",width:"30px"}} />
    </Button>
  </Box>
     <Box className='drawer-logo'>
     <Image src="https://images.indianexpress.com/2021/01/myntra.png" alt="logo" s/>
    
     </Box>
         
         <Box id='drawer-flex'>
         <Box className="flex" >
    < >
    <Image src="https://cdn.icon-icons.com/icons2/2406/PNG/512/user_account_icon_145918.png" alt="acntlogo" 
     style={{height:"25px"}}
    />
   
    </>
   </Box>

   <Spacer />

<Box className={"flex"} >
 < >
 <Image src="https://w7.pngwing.com/pngs/978/882/png-transparent-wishlist-save-save-for-later-shopping-ecommerce-favorite-add-to-wishlist-ecommerce-online-shopping-icon-thumbnail.png" alt="acntlogo" 
  style={{height:"25px"}}
 />
 <Spacer />

 </>
</Box>

<Spacer />

<Box className={"flex"} >
 < >
 <Image src="https://w7.pngwing.com/pngs/833/426/png-transparent-shopping-cart-icon-shopping-cart-black-design-trade-thumbnail.png" alt="acntlogo" 
  style={{height:"25px"}}
 />
 <Spacer />

 </>
</Box>
         </Box>



       <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Box >
  <Image src='https://i0.wp.com/fashionmostwanted.com/wp-content/uploads/2022/02/0c3b9-myntra-logo.jpeg?fit=1200%2C706&ssl=1' alt='Dan Abramov'  />
</Box>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
   </div> */}
   
   </>
  )
}

export default Navbar