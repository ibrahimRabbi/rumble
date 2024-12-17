'use client'
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { ReactNode, Suspense } from 'react';

const ActiveRoute = ({ children, href }: { children: ReactNode, href:{pathname:string,query:{value:string}} }) => {
    
    const pathname = usePathname();  
    const query = useSearchParams().toString();
    const currentPath = `${pathname}?${query}`;
    const landPath = `${href.pathname}?value=${href.query.value}`
     
    const matching = currentPath === landPath
     

    
    return <Suspense fallback={<p className='text-2xl'>loading...</p>}>
        <Link className={`${matching ? 'text-green-800 scale-110' : ''} bg-black`} href={href}>
            {children}
        </Link>
    </Suspense>

};

export default ActiveRoute;