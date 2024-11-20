import Navber from '@/components/Naver/navber';
import React, { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode, newArrival :ReactNode}) => {
    return (
        <div> 
            <Navber/>
            {children}
            
        </div>
    );
};

export default layout;