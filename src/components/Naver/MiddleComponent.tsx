import ActiveRoute from "@/lib/ActiveRoute";
import Link from "next/link";

 

 
const MiddleComponent = () => {
   
    return (
        <ul className=" hidden lg:flex items-center text-sm justify-center gap-10 ml-12 font-semibold">
            <li className="hover:text-green-900 hover:scale-105"><ActiveRoute href={{ pathname: `/products/category`, query: { value: 'mens' } }}>Mens</ActiveRoute></li>
            <li className="hover:text-green-900 hover:scale-105"><ActiveRoute href={{ pathname: `/products/category`, query: { value: 'womans' } }}>Woman</ActiveRoute></li>
            <li className="hover:text-green-900 hover:scale-105"><ActiveRoute href={{ pathname: `/products/category`, query: { value: 'kids' } }}>Kids</ActiveRoute></li>
            <li className="hover:text-green-900 hover:scale-105"><ActiveRoute href={{ pathname: `/products/category`, query: { value: 'shoes' } }}>shoes</ActiveRoute></li>
            <li className="hover:text-green-900 hover:scale-105"><ActiveRoute href={{ pathname: `/products/category`, query: { value: 'electronic' } }}>Electronics</ActiveRoute></li>
        </ul>
    );
};

export default MiddleComponent;