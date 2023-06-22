import  panther  from '../assets/panther.jpg'
import  harry  from '../assets/harry.jpg'
import  BoysLife  from '../assets/boysLife.jpg'
import  japan  from '../assets/japan arrives.jpg'
import Books from './books'

const data = [
    {
        id: 1,
        title: "japan Arrives",
        image: japan,
        desc: "nfoWorld is targeted to Senior IT professionals. Content is segmented into Channels and Topic Centers. InfoWorld also celebrates people, companies, and projects.",
        names: ['Akio','Haru'],

    },
    {
        id: 2,
        title: "Boys Life",
        image: BoysLife,
        desc: "Boys Life is the official youth magazine for the Boy Scouts of America. Published since 1911, it contains a proven mix of news, nature, sports, history, fiction, science, comics, and Scouting.",
        names: ['Wade','Dave'],
        
    },
    {
        id: 3,
        title: "Harry Potter",
        image: harry,
        desc: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
        names: ['Lord Voldemort','Harry Potter']
        
    },
    {
        id: 4,
        title: "The Knight in the Panthers Skin",
        image: panther,
        desc: "The poem was written during the Golden Age of the Kingdom of Georgia and the reign of Queen Tamar, who was enthroned by her father King George III of Georgia. Tamar was celebrated by poets for her beauty, intelligence.",
        names: ['Avtandil ','Tariel']

    },
]

const BooksList = () => {
    function funb(title,names){
        console.log(`title: ${title} , characters: ${names}` )
    }
  return (
    <div className='bookslist'>
       {data.map((book)=> <Books key={book.id} title={book.title} image={book.image} desc={book.desc} names={book.names} action={funb}/>)}
    </div>
  )
}

export default BooksList 