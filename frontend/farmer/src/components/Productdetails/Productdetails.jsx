import React from 'react'
import { images } from "../../constants";
import { Rating } from '../../components';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';

const Productdetails = ({ isOpen, closeDrawer }) => {
    return (


        <div>


            {/* <!-- drawer component --> */}
            {/* className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto  bg-white w-80 dark:bg-gray-800" */}
            <div id="drawer-form" className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto ${isOpen ? '' : 'transition-transform -translate-x-full duration-500 ease-in-out' } bg-white w-80 dark:bg-gray-800`}  aria-labelledby="drawer-form-label">
                <h5 id="drawer-label" className="inline-flex items-center text-lg mb-6 text-base font-bold text-black uppercase dark:text-gray-400">RICE</h5>
                <button type="button" onClick={closeDrawer} data-drawer-hide="drawer-form" aria-controls="drawer-form" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>



                <form className="mb-6">

                    <div className="mb-6">
                        <img src={images.bringing} alt="Image" className="w-full h-40 rounded-lg"></img>
                    </div>
                    <div className="mb-6">
                        {/* <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label> */}
                        <p id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write event description...">The Lorem ipsum text is derived from sections 1.10.32 and 1.10.33 of Cicero's De finibus bonorum et malorum.[7][8] The physical source may have been the 1914 Loeb Classical Library edition of De finibus, where the Latin text, presented on the left-hand (even) pages, breaks off on page 34 with "Neque porro quisquam est qui do-" and continues on page 36 with "lorem ipsum ...", suggesting that the galley type of that page was mixed up to make the dummy text seen today.[1]</p>
                    </div>
                    <div className="mb-6 flex items-center">
                        <label for="title" className="mr-4 text-sm font-bold font-medium text-gray-900 dark:text-white">Seller Name: </label>
                        <label for="title" className="text-sm font-medium text-gray-900 dark:text-white">Mr. JOHN</label>
                    </div>

                    <div className="mb-6 flex items-center">
                        <label for="title" className="mr-4 text-sm font-bold font-medium text-gray-900 dark:text-white">Stock Left: </label>
                        <label for="title" className="text-sm font-medium text-gray-900 dark:text-white">40 kg</label>
                    </div>


                    <div className="mb-6 flex items-center">
                        <label for="title" className="mr-4 text-sm font-bold font-medium text-gray-900 dark:text-white">Total Buyers: </label>
                        <label for="title" className="text-sm font-medium text-gray-900 dark:text-white">1.4k</label>
                    </div>

                    <div className="mb-6 flex items-center">
                        <label for="title" className="mr-4 text-sm font-bold font-medium text-gray-900 dark:text-white">Rating: </label>
                        <label for="title" className="text-sm font-medium text-gray-900 dark:text-white"><Rating /></label>
                    </div>


                    <div className="flex space-x-4">
                        <button type="button" className="flex items-center bg-green-500 hover:bg-green-600 text-white focus:outline-none focus:ring-2 focus:ring-green-400 rounded-lg text-sm px-5 py-2.5">
                            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                {/* <!-- Your update icon --> */}
                                <UpdateIcon></UpdateIcon>
                            </svg>
                            Update
                        </button>

                        <button type="button" className="flex items-center bg-red-500 hover:bg-red-600 text-white focus:outline-none focus:ring-2 focus:ring-red-400 rounded-lg text-sm px-5 py-2.5">
                            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                {/* <!-- Your delete icon --> */}
                                <DeleteIcon></DeleteIcon>
                            </svg>
                            Delete
                        </button>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default Productdetails