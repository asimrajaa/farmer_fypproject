import { React, useState } from 'react'
import { images } from "../../constants";
import { Rating, Productdetails } from '../../components';

const Seller_myproductcard = () => {

    const [showDetails, setShowDetails] = useState(false);

    const handlecheckdetails = () => {
        setShowDetails(prevState => !prevState);
    };


    return (
        <div>

            <div className="text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-36 " src={images.bringing} alt="Bonnie Avatar"></img>
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Wheat</a>
                </h3>

                <p className='flex justify-center' ><Rating /></p>
                <div className='flex justify-center flex-row'>
                    <p className='text-sm mx-2'><span>TS: </span><span>100</span></p>
                    <p className='text-sm mx-2'><span>SL: </span><span>100</span></p>
                </div>

                <div>
                    {showDetails ? <Productdetails isOpen={showDetails} closeDrawer={handlecheckdetails} /> : null}

                    <div className="flex justify-center mt-4 space-x-4">
                        <button 
                            type="button"
                            onClick={handlecheckdetails}
                            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            Check Details
                        </button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Seller_myproductcard