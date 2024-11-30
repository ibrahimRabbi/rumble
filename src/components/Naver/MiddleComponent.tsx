import Link from "next/link";

 

 
const MiddleComponent = () => {
   
    return (
        <ul className=" hidden lg:flex items-center text-sm justify-center gap-10 ml-12 font-semibold">
            <li className="hover:text-green-900 hover:scale-105"><Link href={{ pathname: `/products/category/`, query: { value: 'mens' } }}>Mens</Link></li>
            <li className="hover:text-green-900 hover:scale-105"><Link href={{ pathname: `/products/category/`, query: { value: 'womans' } }}>Woman</Link></li>
            <li className="hover:text-green-900 hover:scale-105"><Link href={{ pathname: `/products/category/`, query: { value: 'kids' } }}>Kids</Link></li>
            <li className="hover:text-green-900 hover:scale-105"><Link href={{ pathname: `/products/category/`, query: { value: 'bag & shoes' } }}>Bag & shoes</Link></li>
            <li className="hover:text-green-900 hover:scale-105"><Link href={{ pathname: `/products/category/`, query: { value: 'electronics' } }}>Electronics</Link></li>
        </ul>
    );
};

export default MiddleComponent;