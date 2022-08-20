const mongoose = require('mongoose');
const Listings = require('./models/listing');
const Username = require('./models/user');


mongoose.connect('mongodb://localhost:27017/myListing')
    .then(() => {
        console.log("Connection open");
    })
    .catch(err => {
        console.log("Connection error");
        console.log(err);
    })

    const seedListings = [
        {
            listname: 'Two Rivers Teepees & Treehouse',
            image: '/images/teepee-tiny-house.jpg',
            uploader: 'Nicole',
            description:'Your Glass Teepee is a modern rendition of the native bahay kubo. Wake up to the sound of chirping birds with lush mountain views. Right beside your Tiny house for the day is a creek and two rivers. You can take a dip in Cayabu Creek or Lanatin River or explore the nearby farms and trails which are connected to mountain peaks and waterfalls',
            details: 'Tanay is known as an adventure-seekers paradise with its mountain ridges and network of rivers. If you are looking to bring the whole family on an adventurous weekend, Two River Campsite offers the Giant Teepee, which can accommodate up to eight guests.The A frame accommodation has two bedrooms, one in the attic with two double beds and another in the common area with two single beds. It also has four bathrooms on the ground floor. In front of the giant teepee is a hut where you and your companions can grill food, start a bonfire or simply hang out. Apart from staying in the Giant Teepee, there are plenty of things to do within the camp. You can take a dip in Cayabu Creek or Lanatin River or explore the nearby farms and trails which are connected to mountain peaks and waterfalls.',
            address: 'Sta. Ines Road Cayabu Creek corner Lanatin River,Tanay,Rizal,Philippines 1800',
            posted_date: '2022-06-15',
            reviews : ['It is ok! We were not expecting that it would be sort of a glamping location but that is more our fault for not researching the area well. Flawless check-in and check out. Bonfire nightly is a great treat as well',
                      ' A perfect place for a weekend getaway to disconnect from the city life to relax and unwind. Host, Jun and Myk, are accommodating. Thank you for accepting the booking despite the tight trip schedule.',
                      ' Great place. Really nice host. Location is great as it is by the river where you can swim anytime. You can also go hiking and enjoy the waterfalls. I really recommend this place so book it asap'],
            location: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDRMNRhLnyj5Qw3TT9oyIeStPpIwZHfNSA&q=Two+Rivers+Teepees+and+Treehouse&center=14.665381626449197,121.34254197198435&zoom=18&maptype=satellite'
            
    },
        {
            listname: 'Ridges and Clouds Nature Camp',
            image: '/images/ridges-and-clouds.jpg',
            uploader: 'Emily',
            description:'Nestled on a mountainside is this cozy bungalow which opens up to majestic views of the Sierra Madre mountains, where you can catch the sunrise and cool breeze from your veranda',
            details:'Nestled on a mountainside is this cozy bungalow which opens up to majestic views of the Sierra Madre mountains, where you can catch the sunrise and cool breeze from your veranda. Climb up a treehouse, or take a nap in the hammock of your kubo. At night, roast marshmallows over a steady bonfire. Take the scenic drive via Marcos Highway for a truly unforgettable trip, only 1-1.5 hours away from Manila!Ridges and Clouds Nature Camp features an amazing view of the foothills of Sierra Madre and a sea of clouds during sunrise (thus the name). Accommodation options include a cabana for two (P2,500 to P4,000), a family cabana for four (P4,000), and the Twin Ifugao House for six (P7,000). You can also pitch your own tent for P500 a night. Rooms at the nature camp or not air-conditioned, but the fresh mountain air is cold enough to keep you comfortable. It\'s pet-friendly, solar-powered, and off-the-grid (no WiFi and mobile signal).',
            address: 'Maysawa Circuit,Sitio Maysawa Tanay,Rizal,Philippines 1800',
            posted_date: '2022-05-11',
            reviews : ['We had a great stay. Beautiful view kt was breathtaking specially when the sun comes up a lot of complimentary, Host is very responsive with our questions and concern. The staffs are very nice and accommodating. Will book this listing again with the family.',
                     'This is the best I have stayed in! Both the host and the staff was very responsive. Super clean, super view, super cool, super stay! Thanks, You and your staff are such a blessing!',
                     'Ridges and Clouds Nature Camp is wonderful! The cabin is cozy, clean, and aesthetically designed. The views were amazing, and the hospitality was top-notch. It was very smooth communicating with them. We had a great time!'],
            location: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDRMNRhLnyj5Qw3TT9oyIeStPpIwZHfNSA&q=Ridges+and+Clouds+Nature+Camp&center=14.601235251075193,121.35740582698087&zoom=18&maptype=satellite'
            
        },
        {
            listname: 'Diocesan Shrine and Parish of Nuestra Señora de Aranzazu',
            image: '/images/aransazu-church.jpg',
            uploader: 'Rey',
            description:'The history of the Nuestra Señora de Aránzazu (also known as Birhen ng Bayang San Mateo) in San Mateo, Rizal dates back to the early Spanish era of 1705.',
            details: 'The history of the Nuestra Señora de Aránzazu (also known as Birhen ng Bayang San Mateo) in San Mateo, Rizal dates back to the early Spanish era of 1705. A Jesuit priest, Padre Juan de Echazabal, started the devotion to Our Lady of Aránzazu from Spain and changed the patron of the town from St. Matthew to Nuestra Señora de Aránzazu. In 1716, a new church was constructed on the site of the current church and placed the church of San Mateo under the patronage of the Nuestra Señora de Aránzazu. The first image of the Virgin of Aránzazu was brought to the Philippines by a Spanish captain from the Basque region. In 1732, the Dominican Order of Letran in Intramuros made effort in spreading the devotion to the Nuestra Señora de Aránzazu among Filipinos during the Spanish era. The church was proclaimed as Diocesan Shrine and Parish of Nuestra Señora de Aránzazu on 16 July 2004.',
            address: 'Gen. Luna Ave, San Mateo, Rizal, Philippines 1850',
            posted_date: '2022-08-11',
            reviews: ['Spectacular composition & delightful details',
                     'Stunning captures, Rich. Have a great day, my friend.',
                     'The image, from the town of aranzazu, nueva vizcaya, spain, was installed by the jesuits when they took over san mateo from the augustinians in 1689.'],
           location: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDRMNRhLnyj5Qw3TT9oyIeStPpIwZHfNSA&q=Diocesan+Shrine+and+Parish+of+Nuestra+Señora+de+Aranzazu&center=14.695639764481276,121.11753312266441&zoom=18&maptype=satellite'
        }       
    ]
    
   
    Listings.insertMany(seedListings)
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    })   

        const seedUsernames = [
            {
               }
        ]

  

        Username.insertMany(seedUsernames)
        .then(res => {
            console.log(res);
        })
        .catch(e => {
            console.log(e);
        })   