'use client'
import { useState } from "react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { setCookie } from "cookies-next/client";
import { useRouter } from "next/navigation";

const OTPInput = ({ data, sendingOtp, setIsOpen }: { data: any, sendingOtp: number, setIsOpen: any }) => {
    const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
    const [error, setError] = useState<boolean>(false);
    const router = useRouter()

    const handleChange = (value: string, index: number) => {
        if (/^\d$/.test(value) || value === "") {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);


            if (value && index < otp.length - 1) {
                const nextInput = document.getElementById(`otp-input-${index + 1}`);
                if (nextInput) (nextInput as HTMLInputElement).focus();
            }
        }
    };


    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            const prevInput = document.getElementById(`otp-input-${index - 1}`);
            if (prevInput) (prevInput as HTMLInputElement).focus();
        }
    };


    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").trim();
        if (/^\d+$/.test(pastedData)) {
            const pastedOtp = pastedData.slice(0, otp.length).split("");
            const newOtp = [...otp];
            pastedOtp.forEach((digit, i) => {
                if (i < otp.length) {
                    newOtp[i] = digit;
                }
            });
            setOtp(newOtp);


            const nextInputIndex = pastedOtp.length < otp.length ? pastedOtp.length : otp.length - 1;
            const nextInput = document.getElementById(`otp-input-${nextInputIndex}`);
            if (nextInput) (nextInput as HTMLInputElement).focus();
        }
    };


    const getOtpValue = (): string => otp.join("");


    const handleSubmit = async () => {
        const enteredOtp = parseInt(getOtpValue());
        const correctOtp = sendingOtp;

        if (enteredOtp === correctOtp) {
            const fetching = await fetch(`http://localhost:5000/api/verify`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data)
            })
            const response = await fetching.json()
            console.log(response)
            if (response?.accessToken) {
                setCookie('accessToken', response?.accessToken, { maxAge: 7 * 24 * 60 * 60 })
                setError(false);
                toast.success('sign up successfully');
                setIsOpen(false);
                router.push('/')
            } else {
                toast.error('something went wrong')
            }

        } else {
            setError(true);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "10px" }}>

            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        id={`otp-input-${index}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(e.target.value, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onPaste={handlePaste}
                        style={{
                            width: "40px",
                            height: "40px",
                            fontSize: "20px",
                            textAlign: "center",
                            border: error ? "2px solid red" : "2px solid #ccc",
                            borderRadius: "5px",
                        }}
                    />
                ))}
            </div>
            {error && <p style={{ color: "red", marginTop: "10px" }}>Invalid OTP</p>}
            <p>Verification code not received? <button className="text-sky-400 mt-3">Resend</button></p>
            <Button className="bg-[#ECE64A] hover:bg-[#dfd936] w-full text-zinc-700 font-bold mt-14" onClick={handleSubmit}> Verify OTP</Button>

        </div>
    );
};

export default OTPInput;
