'use client'

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";

 

const Filter = () => {

    const [openItem, setOpenItem] = useState('item-1');




    return (
        <div className="border p-4">
            <div>
                <p className="text-lg uppercase">Sort by :</p>

                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder='Relevance' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="relevance">Relevance</SelectItem>
                        <SelectItem value="new Arrival">New Arrival</SelectItem>
                        <SelectItem value="Low price">price (Low To High)</SelectItem>
                        <SelectItem value="High price">price (High To Low)</SelectItem>
                        <SelectItem value="Rating">Rating</SelectItem>
                    </SelectContent>
                </Select>


                <div className="mt-8">
                    <div>
                        <p className="text-xl uppercase">Filters</p>
                        <p className="text-sm text-zinc-500">500+ Products</p>
                    </div>
                    <hr className="mt-4" />
                    
                    <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem} className="w-full">


                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-xl font-semibold text-zinc-600">Category</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-5">
                                    <div className="flex gap-3 items-center text-zinc-700 text-[17px]">
                                        <Checkbox id="terms" />
                                        <label htmlFor="terms">Mens T-Shirt</label>
                                    </div>
                                    <div className="flex gap-3 items-center text-zinc-700 text-[17px]">
                                        <Checkbox id="terms" />
                                        <label htmlFor="terms">Mens Jeans pant</label>
                                    </div>
                                    <div className="flex gap-3 items-center text-zinc-700 text-[17px]">
                                        <Checkbox id="terms" />
                                        <label htmlFor="terms">Mens Hoodie</label>
                                    </div>
                                    <div className="flex gap-3 items-center text-zinc-700 text-[17px]">
                                        <Checkbox id="terms" />
                                        <label htmlFor="terms">Mens Jacket</label>
                                    </div>
                                    <div className="flex gap-3 items-center text-zinc-700 text-[17px]">
                                        <Checkbox id="terms" />
                                        <label htmlFor="terms">Mens Full sleeve Shirt</label>
                                    </div>









                                    <div className="flex gap-3 items-center text-zinc-700 text-[17px]">
                                        <Checkbox id="terms" />
                                        <label htmlFor="terms">Woman Crop Top</label>
                                    </div>

                                    <div className="flex gap-3 items-center text-zinc-700 text-[17px]">
                                        <Checkbox id="terms" />
                                        <label htmlFor="terms">Mens Full sleeve Shirt</label>
                                    </div>

                                    <div className="flex gap-3 items-center text-zinc-700 text-[17px]">
                                        <Checkbox id="terms" />
                                        <label htmlFor="terms">Kameez and 3pcs set</label>
                                    </div>

                                    <div className="flex gap-3 items-center text-zinc-700 text-[17px]">
                                        <Checkbox id="terms" />
                                        <label htmlFor="terms">party Grawn</label>
                                    </div>
                                </div>    

                            </AccordionContent>
                        </AccordionItem>






                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-xl font-semibold text-zinc-600">Gender</AccordionTrigger>
                            <AccordionContent>
                                <div className="flex items-center gap-4">
                                    <p className="bg-slate-200 border-2 text-zinc-900 text-lg px-4 py-2 rounded-md">Male</p>
                                    <p className="bg-slate-200 border-2 text-lg py-2 px-4 rounded-md">Female</p>
                                    <p className="bg-slate-200 border-2 text-lg py-2 px-4 rounded-md">Others</p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>







                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-xl font-semibold text-zinc-600">Color</AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-wrap items-center gap-4">
                                    <div className="bg-zinc-950 py-4 px-5 border rounded-lg" > </div>
                                    <div className="bg-slate-200 py-4 px-5 border rounded-lg"></div>
                                    <div className="bg-red-900 py-4 px-5 border rounded-lg"></div>
                                    <div className="bg-green-950 py-4 px-5 border rounded-lg"></div>
                                    <div className="bg-sky-600 py-4 px-5 border rounded-lg"></div>
                                    <div className="bg-sky-900 py-4 px-5 border rounded-lg"></div>
                                    <div className="bg-orange-950 py-4 px-5 border rounded-lg"></div>
                                    <div className="bg-yellow-500 py-4 px-5 border rounded-lg"></div>
                                    <div className="bg-gray-600 py-4 px-5 border rounded-lg"></div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>




                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-xl font-semibold text-zinc-600">Size</AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-wrap items-center gap-4">
                                    <p className="bg-slate-300 py-2 px-4 rounded-md font-semibold text-slate-700">S</p>
                                    <p className="bg-slate-300 py-2 px-4 rounded-md   font-semibold text-slate-700">M</p>
                                    <p className="bg-slate-300 py-2 px-4 rounded-md font-semibold text-slate-700">L</p>
                                    <p className="bg-slate-300 py-2 px-4 rounded-md font-semibold text-slate-700">XL</p>
                                    <p className="bg-slate-300 py-2 px-4 rounded-md font-semibold text-slate-700">2XL</p>
                                    <p className="bg-slate-300 py-2 px-4 rounded-md font-semibold text-slate-700">M</p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>


                

            </div>
        </div>
    );
};

export default Filter;