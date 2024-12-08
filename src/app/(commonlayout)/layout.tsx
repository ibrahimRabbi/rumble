import Footer from '@/components/footer/Footer';
import Navber from '@/components/Naver/navber';
import React, { ReactNode } from 'react';
import Navigation from '../../components/responsive/Navigation';
import { Toaster } from "@/components/ui/toaster"

const layout = ({ children }: { children: ReactNode, newArrival: ReactNode }) => {
    return (
        <div>
            <Navber />
            {children}
            <Footer />
            <Navigation />
            <Toaster />
        </div>
    );
};

export default layout;