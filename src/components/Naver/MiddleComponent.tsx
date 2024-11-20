import Link from "next/link";

 

 
const MiddleComponent = () => {
    return (
        <ul className="flex items-center justify-center gap-10 ml-12 font-semibold">
            <li className="hover:text-green-900 hover:scale-105"><Link href='/showAll'>Mens</Link></li>
            <li className="hover:text-green-900 hover:scale-105"><Link href='/category/women'>Woman</Link></li>
            <li className="hover:text-green-900 hover:scale-105"><Link href='/category/kids'>Kids</Link></li>
            <li className="hover:text-green-900 hover:scale-105"><Link href='/category/kids'>Bag & shoes</Link></li>
            <li className="hover:text-green-900 hover:scale-105"><Link href='/category/kids'>Electronics</Link></li>
        </ul>
    );
};

export default MiddleComponent;