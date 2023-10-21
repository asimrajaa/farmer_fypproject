import  {React, useEffect, useState }  from 'react'
import {useNavigate} from 'react-router-dom'


const Signup = () => {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate= useNavigate();
    
    useEffect(()=>{
        let auth= localStorage.getItem("user"); 
        if(auth)
        {
          navigate("/");
        }
    
      })

    const collectdata = async () => {
        console.warn(name, email, password);

        let fetchapi = await fetch('http://localhost:3000/register', {
            method: "POST",
            body: JSON.stringify({
                name, email, password
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        fetchapi = await fetchapi.json();

        localStorage.setItem("user", JSON.stringify(fetchapi));
        if(fetchapi)
        {
         navigate('/');
        }
    }
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex justify-center items-center h-screen">
                    <div className="w-full lg:max-w-xl p-6 space-y-5 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center pb-5">
                            SIGNUP TO FARMER
                        </h2>
                        <div className="mt-8 space-y-6">
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                                <input value={name}
                                    onChange={(e) => { setname(e.target.value) }}
                                    type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Asim Raja" required></input>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input
                                    value={email}
                                    onChange={(e) => { setemail(e.target.value) }} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required></input>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input value={password}
                                    onChange={(e) => { setpassword(e.target.value) }} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input type="confirmpassword" name="confirmpassword" id="confirmpassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
                            </div>

                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"></input>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="font-medium text-gray-500 dark:text-gray-400">Remember this device</label>
                                </div>

                            </div>
                            <div className='flex justify-center items-center'>
                                <button onClick={collectdata} type="submit" className=" w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">REGISTER</button>
                            </div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                                Want to LOGIN? <a onClick={()=>{navigate('/login');}} className="text-blue-600 hover:underline dark:text-blue-500">click here</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup