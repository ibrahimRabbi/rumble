'use client'
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { ReactNode } from 'react';

const ActiveRoute = ({ children, href }: { children: ReactNode, href: string | any }) => {
    
    const pathname = usePathname();  
    const query = useSearchParams().toString();
    const currentPath = `${pathname}?${query}`;
    const landPath = `${href.pathname}?value=${href.query.value}`
     
    const matching = currentPath === landPath
     

    
    return <Link className={`${matching ? 'text-green-800 scale-110' : ''} bg-black`} href={href}>
        {children}
    </Link>
};

export default ActiveRoute;