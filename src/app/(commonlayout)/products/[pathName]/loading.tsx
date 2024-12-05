 
const loading = () => {
    return (
        <div className="w-[95%] mx-auto mt-12 grid lg:grid-cols-4 grid-cols-2 gap-10 ">  
                {
                [9145452, 9331234, 6523274563, 40332, 2357555, 4894566, 7654566012121, 453545468, 521232389, 1565898960, 1407967912181, 17345435339672].map(v => {
                        return (
                            <div key={v} className="flex flex-col gap-4">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                        )
                    })
                }
        </div>
    );
};

export default loading;