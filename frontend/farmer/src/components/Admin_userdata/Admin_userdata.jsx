import React from 'react'
import { images } from "../../constants";

const Admin_userdata = () => {
  return (
    <>
    <div>
        <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white p-5">#78458656 Details</h2>
    </div>
    <div className="flex flex-col md:flex-row gap-3">
        {/* <!-- Left side: Image upload box --> */}
        <div className="w-full md:w-1/3 p-4">
            {/* Image upload box */}
            <div className='flex flex-col items-center justify-center'>
                <label htmlFor="profile_image" className="block py-3 text-sm font-medium text-gray-700">
                    Profile Image
                </label>
                <div className="mt-1 flex items-center justify-center h-32 w-32 border-2 border-dashed border-gray-400 rounded-lg relative overflow-hidden">
                    {/* Display uploaded image */}

                        <img 
                            src={images.bank}
                            alt="Uploaded"
                            className="h-full w-full object-cover absolute top-0 left-0"
                        />
                
                </div>
            </div>
        </div>

        {/* <!-- Right side: Profile form --> */}
        <div className=" w-full md:w-2/3 bg-white p-4 rounded-lg">
            {/* <!-- Profile form --> */}
            <form>
                {/* <!-- Your form fields here --> */}
                <div className='flex lg:flex-row md:flex-col sm:flex-col gap-2'>

                    <div className="w-full sm:w-1/2 px-2 mb-4">
                        <label for="field1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" id="field1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div className="w-full sm:w-1/2 px-2 mb-4">
                        <label for="field2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="text" id="field2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                </div>

                <div className='flex lg:flex-row md:flex-col sm:flex-col gap-2'>

                    <div className="w-full sm:w-1/2 px-2 mb-4">
                        <label for="field1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                        <input type="text" id="field1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div className="w-full sm:w-1/2 px-2 mb-4">
                        <label for="field2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <input type="text" id="field2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                </div>

                <div className='flex lg:flex-row md:flex-col sm:flex-col gap-2'>

                    <div className="w-full sm:w-1/2 px-2 mb-4">
                        <label for="field1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total Sales</label>
                        <input type="text" id="field1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>



                </div>

                {/* <!-- Submit button --> */}
                <div className="mt-4">
                    <button type="submit" className="bg-white-500 text-black border px-4 py-2 rounded-md hover:bg-green-600 hover:text-white">Delete Account</button>
                </div>
            </form>
        </div>
    </div>

</>
  )
}

export default Admin_userdata