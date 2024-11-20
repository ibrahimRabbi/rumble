import Image from 'next/image';
 
 

const CategoryCard = ({image,name}:{image:any,name:string}) => {

    
    return (
        <div className='text-center'>
            <div className="avatar">
                <div className="w-36 border-2 ring-2 rounded-full">
                    <Image src={image} alt='t-shirt' />
                </div>
            </div>
            <p className='font-semibold text-zinc-700 text-xl'>{name}</p>
        </div>
    );
};

export default CategoryCard;