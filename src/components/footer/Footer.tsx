import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/rumble-logo.png'
import bekash from '@/assets/payment/bekash.png'
import nagad from '@/assets/payment/nagad-removebg-preview.png'
import visa from '@/assets/payment/visa-removebg-preview.png'
import master from '@/assets/payment/masterCard.png'


const Footer = () => {
    return (
        <footer className="bg-gray-100 w-full text-gray-800">

            <div className="w-[90$] mx-auto grid grid-cols-4 gap-10 pt-10">
                
                <div className="px-4">
                    <Image src={logo} alt='logo' width={120}/>
                    <p className="text-sm mt-4">
                        Rumble 2023 সালে প্রতিষ্ঠিত একটি অনলাইন E-Commerce প্লাটফর্ম
                        যা আপনি একই ছাদের নিচে আপনার প্রয়োজনীয় সমস্ত জিনিসপত্র পেয়ে যাবেন
                    </p>
                </div>

                
                <div className="px-4">
                    <h4 className="text-lg font-semibold mb-4">Seller</h4>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:text-pink-600">Join as a seller</Link></li>
                        <li><Link href="#" className="hover:text-pink-600">Seller Registration</Link></li>
                        <li><Link href="#" className="hover:text-pink-600">All Shops</Link></li>
                    </ul>
                </div>

                
                <div className="px-4">
                    <h4 className="text-lg font-semibold mb-4">Shop Location</h4>
                    <address className="text-sm not-italic space-y-2">
                        <p>House No:913, Shyampur bottola, Jatrabari, Dhaka-3700, Bnagladesh</p>
                        <p><Link href="tel:+8801723000909" className="hover:text-pink-600">+880 1309785530</Link></p>
                        <p><Link href="mailto:shop@duhandar.com" className="hover:text-pink-600">rumble.wears@gmail.com</Link></p>
                    </address>
                </div>

                
                <div className="px-4">
                    <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:text-pink-600">Contact Us</Link></li>
                        <li><Link href="#" className="hover:text-pink-600">Order Process</Link></li>
                        <li><Link href="#" className="hover:text-pink-600">Payment Method</Link></li>
                        <li><Link href="#" className="hover:text-pink-600">Privacy Policy</Link></li>
                        <li><Link href="#" className="hover:text-pink-600">Shipping, Refund, and Return Policy</Link></li>
                        <li><Link href="#" className="hover:text-pink-600">Terms & Conditions</Link></li>
                    </ul>
                </div>

            </div>

            
            <div className="border-t border-gray-300 bg-green-50 mt-8 pt-6">
                <div className="container mx-auto text-center space-y-4">
                    
                    <div className="flex justify-center space-x-4">
                        <Link href="#" className="text-gray-600 hover:text-pink-600"><i className="fab fa-facebook"></i></Link>
                        <Link href="#" className="text-gray-600 hover:text-pink-600"><i className="fab fa-twitter"></i></Link>
                        <Link href="#" className="text-gray-600 hover:text-pink-600"><i className="fab fa-youtube"></i></Link>
                        <Link href="#" className="text-gray-600 hover:text-pink-600"><i className="fab fa-instagram"></i></Link>
                        <Link href="#" className="text-gray-600 hover:text-pink-600"><i className="fab fa-linkedin"></i></Link>
                    </div>

                   
                    <div>
                        <h4 className="text-lg font-semibold">Payment Methods</h4>
                        <div className="mt-2 flex justify-center space-x-4">
                            <Image src={bekash} alt="Visa" width={40}/>
                            <Image src={nagad} alt="MasterCard" width={40} />
                            <Image src={visa} alt="bKash" width={40} />
                            <Image src={master} alt="Nagad" width={40} />
                            
                        </div>
                    </div>

                    <p className="text-sm">
                        Trade License: TRAD/DSCC/03514/2021
                    </p>
                    <p className="text-sm">© 2023 Rumble. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
