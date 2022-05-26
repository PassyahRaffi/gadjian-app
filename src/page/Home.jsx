import React, { useState, useEffect } from "react";
import Nav from "../component/Nav";
import gadjian from "../assets/gadjian.png";
// import { Link } from "react-router-dom";

import picture from "../assets/default-user.png";
import beranda from "../assets/beranda.png";
import person from "../assets/person.png";
import daily from "../assets/daily.png";
import option from "../assets/option.png";
// import { data } from "autoprefixer";
// import { Result } from "postcss";

export default function Home() {
  const [user, setUser] = useState([]);
  // const [dates, setDates] = useState([]);

  function getData() {
    const url = "https://randomuser.me/api/?results=28";
    const data = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(url, data)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results);
        // console.log("ini user >", user.results);
        // console.log("ini user dari object result >", user);
      })
  }

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      // date.getFullYear(),
    ].join(' - ');
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* <pre>{JSON.stringify(user, null, 1)}</pre> */}
      <div>
        <Nav />
        <header className="bg-white absolute inset-0 w-1/4 h-screen z-10">
          <div className="pt-5 flex justify-center">
            <img className="w-32" src={gadjian} alt="gadjian" />
          </div>

          <div className="pt-32 flex justify-center">
            <ul className="">
              <li className="flex w-80 py-5">
                <img className="px-2 w-10" src={beranda} alt="" />
                <h3 className="px-4">Beranda</h3>
              </li>
              <li className="flex w-80 py-5">
                <img className="px-2 w-10" src={person} alt="" />
                <h3 className="px-4">Personel List</h3>
              </li>
              <li className="flex w-80 py-5">
                <img className="px-2 w-10" src={daily} alt="" />
                <h3 className="px-4">Daily Attendance</h3>
              </li>
            </ul>
          </div>
        </header>

        {/* ABOVE */}
        <div className="flex justify-end w-full">
          <div className="bg-gray-100 h-full flex w-3/4">
            <div className="flex justify-between m-10 w-full">
              {/* LEFT */}
              <div className="h-32 w-full">
                <div className="flex h-1/2 items-end">
                  <h1 className="uppercase font-bold px-10 w-full">
                    personel list
                  </h1>
                </div>
                <div className="flex h-1/2">
                  <h1 className="flex px-10 w-full">List of all personnels</h1>
                </div>
              </div>

              {/* RIGHT */}
              <div className="h-32 w-full flex justify-end">
                {/* SEARCH */}
                <div className="flex items-center justify-center px-3 w-1/2">
                  <form key={1}>
                    <label
                      htmlFor="default-search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                    >
                      Search
                    </label>
                    <div className="relative w-60">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-biru-tosca dark:text-biru-tosca"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-biru-tosca focus:border-biru-tosca dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Find Personnels"
                        required
                      />
                      <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-biru-tosca hover:bg-biru-tosca focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>

                {/* BUTTON ADD */}
                <div className="flex items-center justify-center px-3 w-1/2">
                  <button className="flex justify-between w-60 h-12 bg-biru-tosca rounded-lg">
                    <div className="flex w-full h-full items-center">
                      <h1 className="w-full h-full font-bold text-1xl flex justify-center items-center text-white uppercase">
                        add personnel
                      </h1>
                      <h1 className="text-3xl pr-2 flex justify-center items-center h-full text-white font-bold">
                        +
                      </h1>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER */}
        <div className="flex justify-end w-full">
          <div className="bg-gray-100 h-full flex w-3/4">
            <div className="flex justify-between mt-0 m-10 w-full">
              
              {/* CARD */}
              {user.map((prop, index) => {
                  // console.log("ini prop >>>", prop);

                  let tglLahir =formatDate(new Date(prop.dob.date))
                  // console.log('tangal lahir >>>',tglLahir);
              
                  if (index < 4) {
                    return (
                  <div key={prop.id} className="w-1/2 mx-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-between py-2 border-b-2">
                      <div className="">
                        <h1 className="mx-10 w-full">Personel ID: 123456</h1>
                      </div>
                      <div className="">
                        <img className="mx-10 w-6" src={option} alt="" />
                      </div>
                    </div>

                    <div className="flex justify-center pt-4">
                      <img className="rounded-full h-40" src={picture} alt="" />
                    </div>

                
                    
                      <div className="p-5">
                        <div>
                          <h2 className="font-bold text-gray-500">Name</h2>
                          <div className="flex">
                          <h1 className="text-gray-500 mr-2">{prop.name.first}</h1>
                          <h1 className="text-gray-500">{prop.name.last}</h1>
                          </div>
                        </div>
                        <div>
                          <h2 className="font-bold text-gray-500">Telephone</h2>
                          <h1 className="text-gray-500">{prop.phone}</h1>
                        </div>
                        <div>
                          <h2 className="font-bold text-gray-500">Birthday</h2>
                          <div className="text-gray-500">{tglLahir}</div>
                        </div>
                        <div>
                          <h2 className="font-bold text-gray-500">Email</h2>
                          <h1 className="text-gray-500">{prop.email}</h1>
                        </div>
                      </div>
              </div>
                    );
                  }
                })}
            </div>
          </div>
        </div>

        {/* BELLOW */}
        <div className="flex justify-end w-full">
          <div className="bg-gray-100 h-full flex w-3/4">
            <div className="flex justify-center mt-0 m-10 w-full">
              <a
                href="#"
                className="inline-flex items-center py-2 px-4 mr-3   text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <svg
                  className="mr-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"></path>
                </svg>
                Previous Page
              </a>
              <a
                href="#"
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next Page
                <svg
                  className="ml-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
