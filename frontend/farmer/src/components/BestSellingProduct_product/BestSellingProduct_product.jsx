import React from 'react'
import { images } from '../../constants'
import {Rating} from '../../components';

const BestSellingProduct_product = () => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('https://example.com/api/product')
            .then(response => response.json())
            .then(data => setProduct(data));
    }, []);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    {product && (
        <>
            <a href="#">
                <img className="rounded-t-lg w-full" src={product.image} alt={product.name} />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rating: {product.rating}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Check Details
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </>
    )}
</div>
  )
}

export default BestSellingProduct_product