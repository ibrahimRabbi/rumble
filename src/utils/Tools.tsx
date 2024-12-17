import tSshirt from '@/assets/icons/tShirt.jpg'
import kameez from '@/assets/icons/femaleDress.png'
import shoeas from '@/assets/icons/shoes.jpg'
import hoodie from '@/assets/icons/hoodie.jpg'
import sweatshirt from '@/assets/icons/sweatshirt.jpg'
import jacket from '@/assets/icons/jacket.jpeg'
import western from '@/assets/icons/western tops.jpg'
import watch from '@/assets/icons/watch.jpg'
import bag from '@/assets/icons/bags.jpg'


import mens from '@/assets/categorryIcons/mens.png'
import woman from '@/assets/categorryIcons/woman.png'
import watchs from '@/assets/categorryIcons/watch.png'
import health from '@/assets/categorryIcons/health.png'
import household from '@/assets/categorryIcons/houshold.png'
import kids from '@/assets/categorryIcons/kids.png'
import electronic from '@/assets/categorryIcons/electronic.png'
import art from '@/assets/categorryIcons/art.png'
import gadget from '@/assets/categorryIcons/gadget.png'




export const districts = [
    "Bagerhat", "Bandarban", "Barguna", "Barisal", "Bhola", "Bogra", "Brahmanbaria",
    "Chandpur", "Chapai Nawabganj", "Chattogram", "Chuadanga", "Cox's Bazar",
    "Cumilla", "Dhaka", "Dinajpur", "Faridpur", "Feni", "Gaibandha", "Gazipur",
    "Gopalganj", "Habiganj", "Jamalpur", "Jashore", "Jhalokathi", "Jhenaidah",
    "Joypurhat", "Khagrachari", "Khulna", "Kishoreganj", "Kurigram", "Kushtia",
    "Lakshmipur", "Lalmonirhat", "Madaripur", "Magura", "Manikganj", "Meherpur",
    "Moulvibazar", "Munshiganj", "Mymensingh", "Naogaon", "Narail", "Narayanganj",
    "Narsingdi", "Natore", "Netrokona", "Nilphamari", "Noakhali", "Pabna",
    "Panchagarh", "Patuakhali", "Pirojpur", "Rajbari", "Rajshahi", "Rangamati",
    "Rangpur", "Satkhira", "Shariatpur", "Sherpur", "Sirajganj", "Sunamganj",
    "Sylhet", "Tangail", "Thakurgaon"
].sort();

export const genders = ['male', 'female', 'trans-gender', 'others']


export const sizePreferences = [
    { type: 'numaric', sizes: ['38','39','40','41','42','43','44'] },
    { type: 'latter', sizes: ['S', 'M', 'L', 'XL', '2XL']}
]

export const colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", "Black", "White", "off-white", "coral", "cream", "Gray", "Cyan", "Magenta", "Lime", "Navy"];




export const categoryData = [
    { category: 'womans', subCategories: ['Sharee', 'Borka', 'Hijab', "Kameez", 'Western', 'tops', 't-shirt', 'full sleeve shirt', 'pant', 'watchs', 'bags', 'hoodie', 'inner-Wear', 'shoes', 'Plazzos', 'Jewellery', 'Makeup', 'perfume'] },

    { category: 'mens', subCategories: ['t-shirt', 'jacket', 'hoodie', 'sweat shirt', 'pant', 'full sleeve shirt', 'Jeans', 'shoes', "sunglass", 'shorts', 'punjabi', 'under-wear', 'perfume', 'belt', 'wallet'] },

    { category: 'kids', subCategories: ['t-shirt', 'jacket', 'hoodie', 'sweat shirt', 'pant', 'full sleeve shirt', 'jeans', 'shoes', "sunglass", 'shorts', 'punjabi', 'belt'] },

    { category: 'Health and Beauty', subCategories: ["Hair Care", "Body Care"] },

    { category: 'Household and Stationery', subCategories: ['Kitchen Accessories', 'Furniture'] },

    { category: 'Art and craft', subCategories: ['Wall Art', 'Canvas', 'Artificila Tree', 'Vase', 'Light', "wall Mount Watch", 'Mirror', 'Lamp', 'Carpet'] },

    { category: 'Electronic Accessories', subCategories: ['Gyser', 'hair dryer', 'Blender', 'Rice Cooker', 'Refrigaretor'] },

    { category: 'Gadget & Devices', subCategories: ['Computer', 'Mobail', 'Laptop', 'headset'] },
]




export const BannerCategoryData = [
    { icon: woman, name: 'womans & girl fashion', category:'womans' },
    { icon: mens, name: 'mens & boys fashion',category:'mens' },
    { icon: watchs, name: 'watchs & bags', category: 'watchs bags' },
    { icon: health, name: 'health and beauty', category: 'health and beauty' },
    { icon: household, name: 'household & stationery', category: 'household' },
    { icon: kids, name: 'kids & baby', category: 'kids' },
    { icon: electronic, name: 'electronic accessories', category: 'electronic' },
    { icon: art, name: 'art and craft', category: 'art and craft' },
    { icon: gadget, name: 'gadget & devices', category: 'devices' },
   ]


//for fileting data
export const products = [
    { category: 'mens', subCategory: 'T-shirt', name: "Mens T-Shirt" },
    { category: 'mens', subCategory: 'Jacket', name: 'Mens Jacket' },
    { category: 'mens', subCategory: 'hoodie', name: 'Mens Hoodie' },
    { category: 'mens', subCategory: 'jeans', name: 'Mens Jeans pant' },
    { category: 'mens', subCategory: 'Full sleeve Shirt', name: 'Mens Full sleeve Shirt' },
    { category: 'womans', subCategory: 'western', name: 'Woman Crop Top' },
    { category: 'womans', subCategory: 'party Grawn', name: 'party Grawn' },
    { category: 'womans', subCategory: 'kameez', name: 'Kameez and 3pcs set' },
]


export const category = [
    { name: 'T-shirt', image: tSshirt },
    { name: 'Hoodie', image: hoodie },
    { name: 'Sweat shirt', image: sweatshirt },
    { name: 'jacket', image: jacket },
    { name: 'Kameez', image: kameez },
    { name: 'western ', image: western },
    { name: 'Shoes', image: shoeas },
    { name: 'watch', image: watch },
    { name: 'jacket', image: bag },
]






