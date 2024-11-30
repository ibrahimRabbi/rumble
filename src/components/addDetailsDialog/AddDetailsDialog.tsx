import React from 'react';
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import DetailsForm from './DetailsForm';



const AddDetailsDialog = ({ isOpen, setIsOpen }: {isOpen:boolean, setIsOpen:any}) => {
    return (
        <div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>

                <DialogContent className="lg:w-[1000px] w-[400px]">
                    <div className="grid gap-4 py-4 text-center">
                        <DialogTitle className="font-bold">Add new Address and details</DialogTitle>
                        <DetailsForm setIsOpen={setIsOpen} />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AddDetailsDialog;