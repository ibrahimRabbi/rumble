
const loading = () => {
    return (
        <div className="w-[90%] mx-auto grid lg:grid-cols-4 grid-cols-2 gap-10 ">
            {
                [94232312, 2203232334, 5645674563, 433057312, 573243488555, 456787896, 70345389012121, 4541234568, 528909089, 156345345560, 14919808902181, 17234329672].map(v => {
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