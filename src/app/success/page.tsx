import Link from "next/link";
import basket from '@/assets/shopping-basket.png'
import Image from "next/image";

const OrderSuccess = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center ml-10">
                <div className="flex items-center justify-center mx-auto">
                    <Image width={90} src={basket} alt="order success" />
                </div>
                <h2 className="mt-4 text-[24px] font-semibold text-gray-800">
                  Thank you for your purchess
                </h2>
                <p className="mt-2 text-gray-600">
                    Your order has been placed successfully.{" "}
                    <Link
                        href="#"
                        className="text-green-600 hover:underline"
                    >
                        Order History
                    </Link>
                </p>
                <p className="mt-1 text-[13px] text-gray-500">
                    we will deliver your product within approximatly 3-4 business days
                </p>
                
                <div className="flex justify-center items-center gap-2">
                    <button className="px-4 py-2 mt-6 text-white bg-green-600 rounded hover:bg-green-700">
                        view order status
                    </button>
                    <Link href='/category' className="px-4 py-2 mt-6 text-white bg-green-600 rounded hover:bg-green-700">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccess;
