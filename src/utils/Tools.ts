import tSshirt from '@/assets/icons/tShirt.jpg'
import kameez from '@/assets/icons/femaleDress.png'
import shoeas from '@/assets/icons/shoes.jpg'
import hoodie from '@/assets/icons/hoodie.jpg'
import sweatshirt from '@/assets/icons/sweatshirt.jpg'
import jacket from '@/assets/icons/jacket.jpeg'
import western from '@/assets/icons/western tops.jpg'
import watch from '@/assets/icons/watch.jpg'
import bag from '@/assets/icons/bags.jpg'



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


export const subCategories = ['t-shirt', 'jacket', 'hoodie', 'sweat shirt', 'pant', 'kameez', 'western tops', 'woman t-shirt', 'woman pant', 'shoes', 'woman shoes', 'watch','woman watch','woman bag','wallet','school bag','belt','sunglass','woman sunglass','android','laptop','hair dryer','headphone']

export const categories = ['mens', 'women', 'kids','accessories','care & beauty']


export const category = [
    { name: 'T-shirt', image: tSshirt },
    { name: 'Hoodie', image: hoodie },
    { name: 'Sweat shirt', image: sweatshirt },
    { name: 'jacket', image: jacket },
    { name: 'Kameez', image: kameez },
    { name: 'western tops', image: western },
    { name: 'Shoeas', image: shoeas },
    { name: 'smart watch', image: watch },
    { name: 'jacket', image: bag },

]

