import techImg from '../assets/images/tech.jpg';
import sportsImg from '../assets/images/sports.jpg';
import scienceImg from '../assets/images/science.jpg';
import worldImg from '../assets/images/world.jpg';
import healthImg from '../assets/images/health.jpg';
import nationImg from '../assets/images/nation.jpg';
import businessImg from '../assets/images/business.jpg';
import entertainmentImg from '../assets/images/entertainment.jpg';

const newsData = [
  {
    id: 1,
    title: "Tech: The Future of AI",
    category: "Technology",
    thumbnail: techImg,
    source: "TechCrunch",
    summary: "Artificial Intelligence continues to evolve rapidly, with new advancements in generative models, autonomous agents, and ethical decision-making systems.",
    views: 1234,
    likes: 100,
    dislikes: 5,
    comments: [
      { user: "Sarah", text: "Amazing progress!" },
      { user: "John", text: "Scary but impressive." }
    ],
    date: "2025-03-12T10:30:00",
    content: "Artificial Intelligence (AI) is advancing at an unprecedented pace, and its potential applications are vast and growing by the day. One of the most notable areas of development is in generative AI models. These systems are now capable of creating realistic text, images, and even music, offering new possibilities in creative industries and beyond. Meanwhile, autonomous agents, such as self-driving cars and drones, are becoming increasingly common and more reliable, thanks to improved algorithms and computing power. However, these innovations also bring about important ethical questions. As AI systems gain more autonomy, ensuring they are used responsibly and ethically is a major concern, particularly in sectors like healthcare and law enforcement where decisions could have life-changing consequences."
  },
  {
    id: 2,
    title: "Sports: Boxing Championship Highlights",
    category: "Sports",
    thumbnail: sportsImg,
    source: "ESPN",
    summary: "Heavyweight champion Luis Navarro defended his title in a 12-round bout. Judges called it a close but fair win.",
    views: 890,
    likes: 55,
    dislikes: 2,
    comments: [
      { user: "Tom", text: "What a fight!" }
    ],
    date: "2025-02-05T20:45:00",
    content: "In a thrilling heavyweight boxing match, Luis Navarro successfully defended his championship title in a closely contested 12-round bout. Navarro's opponent, a rising star in the boxing world, pushed him to his limits, with both fighters showing incredible resilience and skill. The fight was intense from start to finish, and despite the close scores on the judges' cards, Navarro managed to secure the victory in the final rounds with his powerful punches and strategic defense. Fans in the arena were on the edge of their seats throughout the match, and commentators were quick to praise both fighters for their professionalism and sportsmanship. While Navarro emerged victorious, many believe the young challenger is a force to be reckoned with in future bouts."
  },
  {
    id: 3,
    title: "Science: Breakthrough in DNA Research",
    category: "Science",
    thumbnail: scienceImg,
    source: "National Geographic",
    summary: "Researchers discovered a technique to reduce the risk of hereditary diseases by 60%.",
    views: 1456,
    likes: 130,
    dislikes: 4,
    comments: [],
    date: "2025-01-28T14:00:00",
    content: "A groundbreaking discovery in genetic research has the potential to change the way we approach hereditary diseases. Scientists have unveiled a technique that reduces the risk of passing on certain genetic disorders by up to 60%. The method involves targeted gene editing, which can correct genetic mutations before they are inherited by future generations. Researchers believe that this breakthrough could pave the way for new treatments that prevent the onset of diseases like cystic fibrosis and Huntington's disease. This achievement marks a significant milestone in the field of genomics, offering hope to millions of people worldwide who are affected by genetic conditions. With further research and testing, this technique could soon be used in clinical settings to improve the lives of many."
  },
  {
    id: 4,
    title: "World: Global Political Updates",
    category: "World",
    thumbnail: worldImg,
    source: "The Guardian",
    summary: "Leaders meet in Geneva to discuss climate change and cybersecurity.",
    views: 1023,
    likes: 75,
    dislikes: 3,
    comments: [],
    date: "2025-04-17T18:20:00",
    content: "In a highly anticipated summit held in Geneva, world leaders gathered to address two of the most pressing global challenges of our time: climate change and cybersecurity. With the devastating effects of climate change becoming increasingly apparent, nations are under intense pressure to take more substantial action to mitigate its impact. At the same time, the rise in cyberattacks and data breaches has highlighted vulnerabilities in national and corporate security systems. During the summit, leaders shared their countries' strategies and agreed on the need for stronger international collaboration. While there were differences in approach, the general consensus was that urgent and coordinated action is necessary to secure both the planet’s future and the safety of our digital infrastructure."
  },
  {
    id: 5,
    title: "Health: Elderly Care Innovations",
    category: "Health",
    thumbnail: healthImg,
    source: "Healthline",
    summary: "AI health monitors and robotic caregivers are changing elderly care.",
    views: 777,
    likes: 80,
    dislikes: 1,
    comments: [],
    date: "2025-05-03T09:10:00",
    content: "The field of elderly care is undergoing a transformative shift, thanks to advancements in artificial intelligence and robotics. AI-powered health monitors are now being used to track vital signs and predict potential health issues, allowing caregivers to intervene before problems arise. These smart devices can alert medical professionals or family members when something is amiss, providing an extra layer of protection for elderly individuals. Additionally, robotic caregivers are becoming increasingly common, offering assistance with tasks such as medication management, mobility support, and companionship. These innovations are not only improving the quality of life for seniors but also reducing the burden on family caregivers, who are often stretched thin by the demands of their loved ones' care."
  },
  {
    id: 6,
    title: "Nation: New Security Measures",
    category: "Nation",
    thumbnail: nationImg,
    summary: "Reforms to national security policies include enhanced airport screenings.",
    views: 1345,
    likes: 90,
    dislikes: 6,
    comments: [],
    date: "2025-06-21T15:55:00",
    source: "The New York Times",
    content: "The government has announced sweeping reforms to its national security policies in a bid to strengthen the country’s defenses against emerging threats. Key among these reforms is a major overhaul of airport screening procedures. The new measures include the introduction of state-of-the-art scanning technology that will allow security personnel to detect potential threats more efficiently and accurately. Additionally, the number of staff at airports will be increased to reduce wait times and enhance overall security. While these changes have been met with mixed reactions, many experts agree that they are necessary in an era of heightened security concerns. The government has also emphasized that the safety of citizens remains its top priority."
  },
  {
    id: 7,
    title: "Business: Global Markets Rally After Tech Boom",
    category: "Business",
    thumbnail: businessImg,
    summary: "Global stock markets surged as tech companies reported record quarterly earnings.",
    views: 2278,
    likes: 184,
    dislikes: 12,
    comments: [],
    date: "2025-06-22T10:30:00",
    source: "Bloomberg",
    content: "Global stock markets have experienced a significant rally, fueled by strong earnings reports from the world’s largest tech companies. Companies like Apple, Microsoft, and Amazon have posted record profits, driven by high demand for their products and services, particularly in the cloud computing and e-commerce sectors. Investors are optimistic about the tech industry's continued growth, and many analysts believe that the surge in stock prices will lead to broader market gains in the coming months. However, some market observers are cautioning that the tech sector’s rapid growth could face regulatory challenges in the near future, particularly with growing concerns about data privacy and monopolistic practices."
  },
  {
    id: 8,
    title: "Entertainment: Award Show Surprise Wins",
    category: "Entertainment",
    thumbnail: entertainmentImg,
    summary: "The annual film awards took fans by surprise with unexpected winners and emotional speeches.",
    views: 3187,
    likes: 264,
    dislikes: 9,
    comments: [],
    date: "2025-06-22T20:15:00",
    source: "Variety",
    content: "The annual film awards ceremony was full of shocking moments as underdog films took home top honors, defying expectations. One of the biggest surprises of the night was the Best Picture award, which went to an independent film that had initially flown under the radar but gained significant momentum in the weeks leading up to the ceremony. The film’s director delivered an emotional speech, thanking everyone who supported the project, and it became a defining moment of the evening. The Best Actor award went to a newcomer, who wowed the audience with a powerful performance in a drama about social justice. While the ceremony was full of surprises, the night ultimately celebrated the power of storytelling and the incredible talent in the film industry."
  }
];

export default newsData;
