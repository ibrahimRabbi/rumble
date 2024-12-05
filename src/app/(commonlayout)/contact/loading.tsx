
const loading = () => {
    return (
        <section className="lg:w-[50%] min-h-screen lg:my-12 my-10 w-[90%] mx-auto">
            <div className="skeleton h-16 w-full"></div>

            <div className="w-[70%] mx-auto flex flex-wrap justify-center items-start gap-5 mt-5">
                <div className="skeleton h-16 w-full"></div>
                <div className="skeleton h-16 w-full"></div>
                <div className="skeleton h-16 w-full"></div>
            </div>




            <div className='w-[85%] mx-auto mt-12 space-y-6'>
                <div className="skeleton h-16 w-full"></div>
                <div className="skeleton h-16 w-full"></div>
                <div className="skeleton h-12 w-full"></div>
            </div>

        </section>
    );
};

export default loading;