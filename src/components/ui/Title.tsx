import React from 'react';

const Title = ({ title, description }: { title:string, description:string }) => {
    return (
        <div className='lg:w-[50%]'>
            <p className='text-2xl font-semibold'>{title}</p>
            <p className='text-sm text-zinc-600'>{description}</p>
        </div>
    );
};

export default Title;