import React from 'react'
import {Seller_myproductcard} from '../../components';

const Dashboarditems = () => {
    return (
        <div>

            <div className="flex flex-col md:flex-row gap-3">
                {/* <!-- Left side: Image upload box --> */}
                <div className="w-full md:w-1/3 p-4 ">
                    {/* <!-- Image upload box --> */}
                    <div className='flex flex-col items-center justify-center'>


                        <div>
                            <h2 className="mb-4 text-2xl text-center tracking-tight font-bold leading-tight text-gray-900 dark:text-white p-5">MY ITEMS</h2>
                        </div>


                    </div>

                    {/* <!-- Add more styling or functionality for image upload --> */}
                </div>

                {/* <!-- Right side: Profile form --> */}
                <div className=" w-full md:w-2/3 bg-white p-4 py-8 rounded-lg">
                    {/* <!-- Profile form --> */}
                    <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">



<Seller_myproductcard></Seller_myproductcard>

<Seller_myproductcard></Seller_myproductcard>


    <Seller_myproductcard></Seller_myproductcard>
    <Seller_myproductcard></Seller_myproductcard>
    <Seller_myproductcard></Seller_myproductcard>




</div>
                </div>
            </div>


        </div>
    )
}

export default Dashboarditems