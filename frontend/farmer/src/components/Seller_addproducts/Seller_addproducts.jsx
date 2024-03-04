import { React, useState } from 'react'

const Seller_addproducts = ({ onDisableselleraddproduct }) => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleButtonClick = () => {
        onDisableselleraddproduct(); // Call the function to disable PaymentOptions
    };

    const handleFileInputChange = (event) => {
        // Access the selected file from the input element
        const file = event.target.files[0];
        setSelectedFile(file);

        // You can perform additional operations with the selected file here
        // For instance, you can read the file content or perform validations
    };

    return (
        <div>
            {/* <!-- Main modal --> */}
            <div id="crud-modal" tabindex="-1" aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-screen w-screen bg-gray-900 bg-opacity-50">
                <div className="relative p-4 max-w-[80%] md:max-w-md w-full max-h-full md:max-h-[80vh]">

                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Create New Product
                            </h3>
                            <button onClick={handleButtonClick} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <form className="p-4 md:p-5">
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2 flex flex-col items-start ">
                                    <label for="name" className="items-start  mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""></input>
                                </div>

                                <div className="col-span-2 flex flex-col items-start ">
                                    <label for="name" className="items-start  mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Location" required=""></input>
                                </div>


                                <div className="col-span-2 sm:col-span-1 flex flex-col items-start ">
                                    <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                    <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""></input>
                                </div>
                                <div className="col-span-2 sm:col-span-1 flex flex-col items-start ">
                                    <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                    <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option selected="">Select category</option>
                                        <option value="TV">Fruit</option>
                                        <option value="PC">Vegetables</option>
                                        <option value="GA">Rice</option>
                                        <option value="PH">Cereal</option>
                                    </select>
                                </div>

                                <div className="col-span-2 sm:col-span-1 flex flex-col items-start ">
                                    <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock</label>
                                    <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="25k" required=""></input>
                                </div>

                                <div className="col-span-2 flex flex-col items-start ">
                                    <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                                    <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>
                                </div>
                                <div className="col-span-2 flex flex-col items-start ">
                                    <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Image</label>
                                    <input type="file" accept="image/*" // Allow only image files 
                                        onChange={handleFileInputChange} name="imagefile" id="imagefile" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Upload Image" required=""></input>

                                    {selectedFile && (
                                        <div>
                                            {/* <p>Selected File: {selectedFile.name}</p> */}
                                            {/* Display the selected image preview */}
                                            <img
                                                src={URL.createObjectURL(selectedFile)}
                                                alt="Selected"
                                                style={{ maxWidth: '200px', maxHeight: '200px' }}
                                            />
                                        </div>
                                    )}


                                </div>
                            </div>
                            <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                Add new product
                            </button>
                        </form>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default Seller_addproducts