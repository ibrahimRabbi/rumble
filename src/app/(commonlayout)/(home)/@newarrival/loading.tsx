
const loading = () => {
    return (
        <div className="w-[90%] mx-auto grid lg:grid-cols-4 grid-cols-2 gap-10 ">
            {
                [914642, 236454, 57454564563, 4334352, 572345555, 4523466, 701223423121, 45432468, 5223489, 156560, 14912181, 179672].map(v => {
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