import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboardpersonaldetails = () => {
    const [image, setImage] = useState(null);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        totalSales: ''
    });

    const navigate = useNavigate();




    useEffect(() => {
        
        const fulluser_profile = localStorage.getItem("user");
        const userDataFromStorage = JSON.parse(fulluser_profile);

        if (!userDataFromStorage) {
            console.log("dashboard: no user exist");
            // Redirect user to home page if user data is not found in local storage
            navigate("/");
            return;
        }

        setUserData(userDataFromStorage);

        console.log("userDataFromStorage.image: " + userDataFromStorage.image);
        import(/* @vite-ignore */ `../../uploads/${userDataFromStorage.image}`).then((image)=>{
            setImage(image.default);
        });

    }, []);

    const handleImageUpload = (e) => {
        const selectedImage = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result);
            }
        };

        if (selectedImage) {
            reader.readAsDataURL(selectedImage);
        }
    };

    return (
        <>
            <div>
                <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white p-5">Personal Details</h2>
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
                            {image ? (
                                <img
                                    src={image}
                                    alt="Uploaded"
                                    className="h-full w-full object-cover absolute top-0 left-0"
                                />
                            ) : (
                                <span className="text-gray-500">Upload Image</span>
                            )}
                            {/* File input */}
                            <input
                                accept="image/*"
                                type="file"
                                id="profile_image"
                                className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer"
                                onChange={handleImageUpload}

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
                                <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input
                                    type="text"
                                    id="field1"
                                    value={userData.name}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    readOnly
                                />
                            </div>

                            <div className="w-full sm:w-1/2 px-2 mb-4">
                                <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input
                                    type="text"
                                    id="field2"
                                    value={userData.email}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    readOnly
                                />
                            </div>
                        </div>

                        <div className='flex lg:flex-row md:flex-col sm:flex-col gap-2'>

                            <div className="w-full sm:w-1/2 px-2 mb-4">
                                <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                <input
                                    type="text"
                                    id="field1"
                                    value={userData.phoneNumber}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    readOnly
                                />
                            </div>

                            <div className="w-full sm:w-1/2 px-2 mb-4">
                                <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                <input
                                    type="text"
                                    id="field2"
                                    value={userData.address}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    readOnly
                                />
                            </div>

                        </div>

                        {/* <div className='flex lg:flex-row md:flex-col sm:flex-col gap-2'>

                            <div className="w-full sm:w-1/2 px-2 mb-4">
                                <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total Sales</label>
                                <input
                                    type="text"
                                    id="field1"
                                    value={userData.totalSales}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    readOnly
                                />
                            </div>
                        </div> */}

                        {/* <!-- Submit button --> */}
                        {/* <div className="mt-4">
                            <button type="submit" className="bg-white-500 text-black border px-4 py-2 rounded-md hover:bg-green-600 hover:text-white">Save Data</button>
                        </div> */}
                    </form>
                </div>
            </div>

        </>

    )
}

export default Dashboardpersonaldetails;
