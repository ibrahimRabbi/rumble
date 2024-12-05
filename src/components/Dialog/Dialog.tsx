import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import OtpInput from "./OtpInput";
 
 
 




const DialogModal = ({data, isOpen, setIsOpen, sendingOtp }: {data:any, isOpen: boolean, setIsOpen: any, sendingOtp: number }) => {
    
    return (
        <div>
            <Dialog open={isOpen}>

                <DialogContent className="sm:max-w-[425px]">
                    <div className="grid gap-4 py-4 text-center">
                        <DialogTitle className="font-bold">OTP Verification</DialogTitle>
                        <OtpInput data={data} setIsOpen={setIsOpen} sendingOtp={sendingOtp}  />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default DialogModal;