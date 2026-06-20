import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About Us",
      path: "/about",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Image height={42} width={190} src="/logo.svg" alt="logo" />

        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.id} href={item.path}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
