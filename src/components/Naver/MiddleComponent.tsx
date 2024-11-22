import Link from "next/link";

 

 
const MiddleComponent = () => {
   
    return (
        <ul className=" hidden lg:flex items-center justify-center gap-10 ml-12 font-semibold">
            <li className="hover:text-green-900 hover:scale-105"><Link href={{ pathname: `/category/`, query: { name: 'mens' } }}>Mens</Link></li>
            <li className="hover:text-green-900 hover:scale-105"><Link href={{ pathname: `/category/`, query: { name: 'womans' } }}>Woman</Link></li>
            <li className="hover:text-green-900 hover:scale-105"><Link href={{ pathname: `/category/`, query: { name: 'kids' } }}>Kids</Link></li>
            <li className="hover:text-green-900 hover:scale-105"><Link href={{ pathname: `/category/`, query: { name: 'bag & shoes' } }}>Bag & shoes</Link></li>
            <li className="hover:text-green-900 hover:scale-105"><Link href={{ pathname: `/category/`, query: { name: 'electronics' } }}>Electronics</Link></li>
        </ul>
    );
};

export default MiddleComponent;