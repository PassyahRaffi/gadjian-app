import React from "react";
import "flowbite";
import picture from "../assets/default-user.png";

export default function Nav() {
  return (
    <>
      <nav className="py-8 bg-white">
        <div className="md:flex md:justify-end md:w-9/12 md:m-auto">
          <div className="flex justify-between w-72">
            <h1 className="flex items-center w-16">Hallo :</h1>
            <h1 className="flex items-center w-full pl-2">Gajdian User</h1>

            <div className="flex justify-center items-center w-1/5">
              <img
                className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src={picture}
                alt="Bordered avatar"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
