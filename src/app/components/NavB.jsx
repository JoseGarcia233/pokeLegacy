import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button,NavbarMenu,NavbarMenuItem} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";
import { ActiveLink } from "./activeLink.jsx";
import DarkModeBtn from "./DarkModeBtn.jsx";
import style from '../css/navbar.module.css'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'Pokemon',
      href: '/pokemon'
  },
  // {
  //     text: 'Contact',
  //     href: '/contact'
  // },
  // {
  //     text: 'Pricing',
  //     href: '/pricing'
  // },
];

export default function NavB() {
  return (
    
    <Navbar
    position="static"
    shouldHideOnScroll
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarBrand>
        <span>
          
        </span>
        <AcmeLogo />
        <p className="font-bold text-inherit"></p>
      </NavbarBrand>
      {/* <div className={style.medianav}> */}
      <NavbarContent  justify="center">
        <NavbarItem>
          <div className={style.medianav} >

          {
            menuItems.map(({text, href}) =>(
                  
        
              <ActiveLink key={href} href={href} Text={text} />
                
              ))
          }
          </div>
        </NavbarItem>
        
      </NavbarContent>
      
      <NavbarContent justify="end">
        <NavbarItem className=" lg:flex">
          {/* <DarkModeBtn  value ={'dark'}/> */}
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <div>
        <NavbarItem  className="hidden">
          <Button as={Link} color="danger" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      {/* </div> */}
    </Navbar>
  );
}
