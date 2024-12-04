import { ReactNode } from 'react';

const layout = ({ children, banner, hotdeal, category, shopicon,newarrival }: { children: ReactNode, banner: ReactNode, hotdeal: ReactNode, category: ReactNode, shopicon: ReactNode,newarrival:ReactNode }) => {
    return (
        <div>
            {children}
            {banner}
            {hotdeal}
            {category}
            {newarrival}
            {shopicon}
        </div>
    );
};

export default layout;
