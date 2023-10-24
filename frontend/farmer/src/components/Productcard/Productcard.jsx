import React from "react";
import { images } from "../../constants";
import { Rating } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ChatIcon from '@mui/icons-material/Chat';
const Productcard = () => {
    return (
        <div className="w-full">

                <div>
                    <a
                        href="#"
                        className="flex flex-column border ">
                        <img
                            className="object-cover w-full rounded-t-lg h-32 md:w-48 md:rounded-none md:rounded-l-lg"
                            src={images.bringing}
                            alt=""
                        ></img>
                        <div className="flex flex-col gap-0 p-4 leading-normal">
                            <h5 className=" text-2xl font-bold text-gray-900 dark:text-white">
                                RICE
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <Rating/>
                            </p>
                            <p className="text-xs font-normal text-gray-700 dark:text-gray-400 pl-2">
                                <p>3.3 of 5.0</p>
                            </p>
                        </div>
                         <div className="flex flex-col  p-4 leading-normal">
                            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                Seller Name: 
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                ABCDEF
                            </p>
                        </div>
                        <div className="flex flex-col  p-4 leading-normal">
                            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                Location: 
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Multan
                            </p>
                        </div>
                        <div className="flex flex-col  p-4 leading-normal">
                            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                Stock Left: 
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                50
                            </p>
                        </div>

                        <div className="flex flex-col  p-4 leading-normal">
                            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                Total Sales: 
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                50
                            </p>
                        </div>
                        <div className="flex flex-col  p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">

                            <button type="button" className="flex flex-row focus:outline-none text-white border border-black bg-transparent hover:bg-transparent focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-transparent dark:hover:bg-transparent dark:focus:ring-8 dark:focus:ring-green-800">
                                <p className="text-black">MORE DETAILS</p>
                            </button>
                            </h5>

                        </div>
                        <div className="flex flex-col  p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <button type="button" className="flex flex-row focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                <ShoppingCartIcon/>
                                <p>ADD TO CART</p>
                            </button>
                            <button type="button" className="flex flex-row focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                <ChatIcon/>
                                <p className="pl-1">CHAT WITH SELLER</p>
                            </button>

                            </h5>

                        </div>
                        

                    </a>
                </div>
        </div>
    );
};

export default Productcard;
