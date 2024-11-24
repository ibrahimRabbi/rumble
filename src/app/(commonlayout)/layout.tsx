import Footer from '@/components/footer/Footer';
import Navber from '@/components/Naver/navber';
import React, { ReactNode } from 'react';
import Navigation from '../responsive/Navigation';

const layout = ({ children }: { children: ReactNode, newArrival :ReactNode}) => {
    return (
        <div> 
            <Navber/>
            {children}
            <Footer />
            <Navigation/>
        </div>
    );
};

export default layout;