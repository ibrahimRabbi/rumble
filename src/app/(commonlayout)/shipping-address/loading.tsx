
const loading = () => {
    return (
        <section className='lg:w-[90%] mx-auto lg:flex items-start justify-between lg:my-10 min-h-screen'>

            <div className='lg:w-[69%] w-[95%] mx-auto lg:mt-0 mt-4 space-y-4'>
                <div className="skeleton h-36 w-full"></div>
                <div className="skeleton h-36 w-full"></div>
                <div className="skeleton h-36 w-full"></div>
                <div className="skeleton h-36 w-full"></div>
            </div>


            <div className='lg:block hidden lg:w-[28%] border'>
                <div className="skeleton h-80 w-full"></div>
            </div>
        </section>
    );
};

export default loading;