import self from "../img/reactphoto.jpeg"



import project1back from "../img/project1back.png";



/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Rashad",
    lastName: "Gurbanov",
    initials: "cv", // the example uses first and last, but feel free to use three or more if you like.
    position: "Junior frontend devoloper",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the AZE'
        },
        {
            emoji: "💼",
            text: "Web Devoloper"
        },
        {
            emoji: "📧",
            text: "general96.1996@gmail.com"
        }, 

        {
            emoji: "📱",
            text: "+994515674954  +994514448025"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/resad.qurbanov.1996/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/resadqurbanov267/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Humbarg",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        },

        
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Rashad. I'm a junior frontend devoloper. I studied expertise at AKU, Communicative and team-working skills, I love innovations and constantly think about my own development. I never get bored and I work until I get what I want. I am patient, responsible, I accept criticism as normal. I can find an effective solution to difficult issues"
    ,skills:
        {
            juniorWith: ['javascript', 'react', 'microsoft VS code ', 'canva',  'brackets',  ' github', 'bootstrap', 'html5', 'css3', 'scss', 'figma', 'metatrader4(5)'],
            exposedTo: ['nodejs', '1c', 'adobe illustrator', 'Wordpress']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        },

        {
            label: 'video games ',
            emoji: '🎮'
        },



        
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
       
        {
            title: "Demo Project",
            live: "https://react-pizza-v2.vercel.app/",
            source: "",
            image: project1back
        },
    ]
}