'use client'

import { Button } from "@/components/ui/button";

const ErrorPage = ({error,reset}:{error:any,reset:any}) => {
    return (
        <section className="flex justify-center items-center min-h-screen">
            <div>
                <h1 className="text-3xl">Something went wrong ⚠️</h1>
                <Button className="bg-green-600 w-48 mt-3 ml-16 font-semibold" onClick={() => reset()}>TRY AGAIN</Button>
            </div>
        </section>
    );
};

export default ErrorPage;