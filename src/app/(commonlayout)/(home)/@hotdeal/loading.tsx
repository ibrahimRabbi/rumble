
const loading = () => {
    return (
        <div className="w-[90%] mx-auto grid lg:grid-cols-4 grid-cols-2 gap-10 lg:mt-0 mt-5">
            {
                [912, 234, 574563, 4332, 57555, 4566, 7012121, 45468, 5289, 156560, 14912181, 179672].map(v => {
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