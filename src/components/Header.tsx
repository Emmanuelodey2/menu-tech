'use client'
import React, { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [active, setActive] = useState(false);
   // Use the router from next/router

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setActive(true) : setActive(false);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <header className={`${active ? 'bg-black-heavy' : 'bg-none'} fixed top-0 w-full z-50 h-[85px] flex items-center left-0 right-0 transition-all duration-200`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href='/' passHref>
            <Image
              className="w-full h-28"
              src='/assets/watermark.png' width={100} height={40} alt="Logo" />
          </Link>
          {/* Nav */}
          <Nav />
          {/* Button */}
          
                        <Button variant='orange' className="hidden lg:block" size='sm' asChild>
                          <Link href='/login' className="cursor-pointer"> 
                           Login
                           </Link>
                           </Button>
              
          {/* Mobile Nav */}
          <NavMobile containerStyles='xl:hidden ' iconStyles='text-3xl' linkStyles='uppercase' />
        </div>
      </div>
    </header>
  );
}

export default Header;
