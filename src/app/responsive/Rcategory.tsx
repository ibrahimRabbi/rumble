import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React from 'react';

const Rcategory = ({ sorthandler, genderhandler }: { genderhandler:any, sorthandler :any}) => {
    return (
        <div className='w-full p-2 border lg:hidden flex justify-between items-center'>
            <div className='flex items-center gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                </svg>
                <Select onValueChange={(value) => sorthandler(value)}>
                    <SelectTrigger>
                        <SelectValue placeholder='sort' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="relevance">Relevance</SelectItem>
                        <SelectItem value="new Arrival">New Arrival</SelectItem>
                        <SelectItem value="Low price">price (Low To High)</SelectItem>
                        <SelectItem value="High price">price (High To Low)</SelectItem>
                        <SelectItem value="Rating">Rating</SelectItem>
                    </SelectContent>
                </Select>
            </div>


            <div className='flex items-center gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                </svg>
                <p>Filter</p>
            </div>

            <div className='flex items-center gap-1'>
                <Select onValueChange={(value) => genderhandler(value)}>
                    <SelectTrigger>
                        <SelectValue placeholder='gender' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="male">male</SelectItem>
                        <SelectItem value="female">female</SelectItem>
                        <SelectItem value="unisex">unisex</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default Rcategory;