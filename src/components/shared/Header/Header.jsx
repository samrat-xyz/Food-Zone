import Link from "next/link";
import React from "react";

function Header() {
  const links = (
    <>
      <li>
        <Link href='/foods' className="btn">Foods</Link>
      </li>
      <li>
        <Link href='/reviews' className="btn">Reviews</Link>
      </li>
    </>
  );
  return (
    <nav className="flex items-center justify-between border p-6 bg-[#3D240C]">
      <Link href='/' className="text-3xl font-semibold text-yellow-500">FoodZone</Link>
      <ul className="flex items-center gap-4 ">{links}</ul>
    </nav>
  );
}

export default Header;
