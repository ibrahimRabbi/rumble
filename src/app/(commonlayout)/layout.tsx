import Footer from '@/components/footer/Footer';
import Navber from '@/components/Naver/navber';
import React, { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode, newArrival :ReactNode}) => {
    return (
        <div> 
            <Navber/>
            {children}
            <Footer/>
            
        </div>
    );
};

export default layout;