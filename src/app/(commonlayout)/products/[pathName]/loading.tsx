 
const loading = () => {
    return (
        <div className="w-[95%] mx-auto mt-12 grid lg:grid-cols-4 grid-cols-2 gap-10 ">  
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(v => {
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