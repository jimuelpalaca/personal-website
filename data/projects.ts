import { Project } from "../screens/projects"

export const projects: Project[] = [
  {
    title: "BridgeMe",
    role: "Mobile Developer",
    company: "Tappollo Media LLC.",
    description:
      "Bridge is an iOS app aiming to help solve loneliness by creating an activity-based concierge app that helps similar like-minded/life-stage individuals find each other",
    involvement: "support to UAT",
    date: "April 2022 - ongoing",
    logo: "/images/projects/bridge.png",
    platforms: [
      {
        name: "iOS",
        icon: "/images/icons/apple.png",
      },
      {
        name: "Firebase",
        icon: "/images/icons/backend.png",
      },
    ],
    tech: ["React", "React Native", "TypeScript", "Firestore"],
    tags: ["Social Media", "Mental Health"],
  },
  {
    title: "Threemata",
    role: "Web Developer",
    company: "Tappollo Media LLC.",
    description:
      "Threemata allows property owners host a virtual live tour of the property.",
    involvement: "support to UAT",
    date: "March 2022 - August 2022",
    logo: "/images/projects/threemata.svg",
    platforms: [
      {
        name: "Web",
        icon: "/images/icons/web.png",
      },
      {
        name: "Firebase",
        icon: "/images/icons/backend.png",
      },
    ],
    tech: ["React", "NextJS", "TypeScript", "Firestore"],
    tags: ["Real Estate", "Tours"],
  },
  {
    title: "RTG: LMS",
    role: "Mobile Developer",
    company: "Tappollo Media LLC.",
    description:
      "RTG LMS App was supposedly a learning app that would help RTG's employees to adapt to the business quickly.",
    involvement: "support to Production",
    date: "November 2021 - April 2022",
    logo: "/images/projects/lms.svg",
    platforms: [
      {
        name: "Android",
        icon: "/images/icons/android.png",
      },
      {
        name: "iOS",
        icon: "/images/icons/apple.png",
      },
      {
        name: "Firebase",
        icon: "/images/icons/backend.png",
      },
    ],
    tech: ["React", "React Native", "Expo", "TypeScript", "Firestore"],
    tags: ["Learning App", "Onboarding"],
  },
  {
    title: "RTG: Data Warehouse and Webtool",
    role: "Backend Developer",
    company: "Tappollo Media LLC.",
    description:
      "RTG Data Warehouse is a python scripts that is responsible for processing and backing up data from different physical stores.",
    involvement: "support to Production",
    date: "November 2021 - April 2022",
    logo: "/images/projects/rtg.svg",
    platforms: [
      {
        name: "Web",
        icon: "/images/icons/web.png",
      },
      {
        name: "Backend",
        icon: "/images/icons/backend.png",
      },
    ],
    tech: ["Python", "Flask", "AWS"],
    tags: ["Data Processing"],
  },
  {
    title: "RTG: LiHO Tea App",
    role: "Mobile Developer",
    company: "Tappollo Media LLC.",
    description:
      "The LiHO Tea App is a loyalty app that allows you to earn points and buy vouchers using it.",
    involvement: "support to UAT",
    date: "February 2022 - April 2022",
    logo: "/images/projects/liho.png",
    platforms: [
      {
        name: "iOS",
        icon: "/images/icons/apple.png",
      },
      {
        name: "Firebase",
        icon: "/images/icons/backend.png",
      },
    ],
    tech: ["React", "React Native", "Expo", "TypeScript", "Firestore"],
    tags: ["Loyalty App", "Voucher"],
  },
  {
    title: "PE Diet App",
    role: "Mobile Developer",
    company: "Tappollo Media LLC.",
    description:
      "The P:E Diet App is designed to help you plan and implement a diet to reach your body composition goals by focusing on these two factors, with minimal distractions.",
    involvement: "from start to Production",
    date: "September 2021 - January 2022",
    logo: "/images/projects/ped.png",
    platforms: [
      {
        name: "iOS",
        icon: "/images/icons/apple.png",
      },
      {
        name: "Firebase",
        icon: "/images/icons/backend.png",
      },
    ],
    tech: ["React", "React Native", "TypeScript", "Firebase", "Firestore"],
    tags: ["Fitness", "Diet", "Health"],
  },
  {
    title: "Splurge",
    role: "Backend Developer",
    company: "White Cloak Techonologies, Inc.",
    description:
      "Splurge is an NFT based social network platform that rewards content creators through the user-driven economy.",
    involvement: "from start to UAT",
    date: "March 2021 - December 2021",
    logo: "/images/projects/splurge.png",
    platforms: [
      {
        name: "Android",
        icon: "/images/icons/android.png",
      },
      {
        name: "iOS",
        icon: "/images/icons/apple.png",
      },
      {
        name: "Web",
        icon: "/images/icons/web.png",
      },
      {
        name: "Web Admin Portal",
        icon: "/images/icons/web.png",
      },
      {
        name: "Backend",
        icon: "/images/icons/backend.png",
      },
    ],
    tech: [
      "Flutter",
      "TypeScript",
      "NestJS",
      "Postgres",
      "MongoDB",
      "Redis",
      "Socket.io",
      "Firebase",
      "Paymaya",
    ],
    tags: ["Social Media", "NFT", "Crypto", "Art"],
  },
  {
    title: "Ancora",
    role: "Team Lead and Backend Developer",
    company: "White Cloak Techonologies, Inc.",
    description:
      "Ancora is an internal platform that allows trainer/instructors to build online courses for White Cloak Academy. ",
    involvement: "Team captain",
    date: "December 2020 - February 2021",
    logo: "/images/projects/ancora.png",
    platforms: [
      {
        name: "Web",
        icon: "/images/icons/web.png",
      },
      {
        name: "Web Admin Portal",
        icon: "/images/icons/web.png",
      },
      {
        name: "Backend",
        icon: "/images/icons/backend.png",
      },
    ],
    tech: [
      "TypeScript",
      "NextJS",
      "NestJS",
      "Postgres",
      "Microservice",
      "GraphQL",
      "Auth0",
    ],
    tags: ["Online Learning Platform", "Internal"],
  },
  {
    title: "Ayala RBG CMS",
    role: "Lead Backend Developer",
    company: "White Cloak Techonologies, Inc.",
    description:
      "Ayala Land, Inc. is the largest property developer in the Philippines. We created a multi-tenant CMS for their subsidiaries and affliates websites.",
    involvement: "from start to UAT",
    date: "June 2020 - December 2020",
    logo: "/images/projects/ayala.png",
    platforms: [
      {
        name: "Web",
        icon: "/images/icons/web.png",
      },
      {
        name: "Web Admin Portal",
        icon: "/images/icons/web.png",
      },
      {
        name: "Backend",
        icon: "/images/icons/backend.png",
      },
    ],
    tech: [
      "TypeScript",
      "NextJS",
      "ExpressJS",
      "NestJS",
      "Postgres",
      "Microservice",
      "OAuth",
      "Microsoft Azure",
    ],
    tags: ["Real Estate", "Marketing", "CMS"],
  },
  {
    title: "Valenzuela APP",
    role: "Backend Developer",
    company: "White Cloak Techonologies, Inc.",
    description:
      "Valenzuela App is a city's community app that will help citizen communicate more easily with the local government unit. It promote safety, cleanliness and a better Valenzuela. Citizen can send reports via app to their respective city department units",
    involvement: "from start to UAT",
    date: "January 2020 - June 2020",
    logo: "/images/projects/vapp.png",
    platforms: [
      {
        name: "Android",
        icon: "/images/icons/android.png",
      },
      {
        name: "iOS",
        icon: "/images/icons/apple.png",
      },
      {
        name: "Web",
        icon: "/images/icons/web.png",
      },
      {
        name: "Web Admin Portal",
        icon: "/images/icons/web.png",
      },
      {
        name: "Backend",
        icon: "/images/icons/backend.png",
      },
    ],
    tech: [
      "Kotlin Multiplatform",
      "TypeScript",
      "ExpressJS",
      "Strapi CMS",
      "Postgres",
      "Microservice",
      "OAuth",
      "Facebook",
      "Google",
    ],
    tags: ["Local Government Unit", "Social Media", "CMS"],
  },
  {
    title: "RESQFILL",
    role: "Backend Developer",
    company: "White Cloak Techonologies, Inc.",
    description:
      "RESQFILL is an online prescription app design for US citizen. It bridges the gap between doctors and on-the-go patients who need to have their prescriptions refilled. It offers its users great features and functionalities for an exceptional prescription refilling experience.",
    involvement: "from start to UAT",
    date: "January 2020 - June 2020",
    logo: "/images/projects/resqfill.png",
    platforms: [
      {
        name: "Android",
        icon: "/images/icons/android.png",
      },
      {
        name: "iOS",
        icon: "/images/icons/apple.png",
      },
      {
        name: "Backend",
        icon: "/images/icons/backend.png",
      },
    ],
    tech: ["Kotlin", "ExpressJS", "Postgres", "Prisma", "Facebook", "Google"],
    tags: ["International", "Medical", "Prescription"],
  },
  {
    title: "My Shopping Box",
    role: "Team Lead and Backend Developer",
    company: "CoreProc, Inc.",
    description:
      "My Shopping box makes your online shopping from US and Europe hassle-free. You can order items from US/Europe and they will be the one processing the shipment to the Philippines,",
    involvement: "from start to Production",
    date: "2019",
    logo: "/images/projects/my_shopping_box.png",
    platforms: [
      {
        name: "Android",
        icon: "/images/icons/android.png",
      },
      {
        name: "iOS",
        icon: "/images/icons/apple.png",
      },
      {
        name: "Web Admin Portal",
        icon: "/images/icons/web.png",
      },
      {
        name: "Backend",
        icon: "/images/icons/backend.png",
      },
    ],
    tech: [
      "Android Java",
      "Swift",
      "Laravel",
      "Laravel Nova",
      "MySQL",
      "Firebase",
    ],
    tags: ["International", "Shopping", "Delivery"],
  },
  {
    title: "Mansmith App",
    role: "Lead Backend Developer",
    company: "CoreProc, Inc.",
    description:
      "Mansmith App coordinates details of events such as conferences, seminars, and awards. It promotes the event information using real-time notification to spark the attention of the attendees and allows them to ask questions, answer polls and post a feed, during the event. The questions can be upvote by the other users, and the question with the highest vote will be answered by the speaker on the spot. The questions, upvote, polls, and feeds are posted in real-time.",
    involvement: "from start to production and maintenance",
    date: "2019",
    logo: "/images/projects/mansmith.png",
    platforms: [
      {
        name: "Android",
        icon: "/images/icons/android.png",
      },
      {
        name: "iOS",
        icon: "/images/icons/apple.png",
      },
      {
        name: "Web Admin Portal",
        icon: "/images/icons/web.png",
      },
      {
        name: "Backend",
        icon: "/images/icons/backend.png",
      },
    ],
    tech: [
      "Android Java",
      "Swift",
      "Laravel",
      "MySQL",
      "Redis",
      "Pusher",
      "Firebase",
    ],
    tags: ["Social Media", "Event", "Polls"],
  },
  {
    title: "Common Assembly",
    role: "Team Lead",
    company: "CoreProc, Inc.",
    description:
      "Common Assembly is a place that celebrates the stories and creations of female founders and artisans.",
    involvement: "from start to production",
    date: "2019",
    logo: "/images/projects/common_assembly.png",
    platforms: [
      {
        name: "Web",
        icon: "/images/icons/web.png",
      },
    ],
    tech: ["Shopify"],
    tags: ["Shooping", "Fashion"],
  },
  {
    title: "Filpet Ordering System",
    role: "Lead Backend Developer",
    company: "CoreProc, Inc.",
    description:
      "FILPET, Inc. is the leading manufacturer of bottles and containers that are made of polyethylene terephthalate (P.E.T.) materials and we created an ordering system for theri customers.",
    involvement: "from start to production",
    date: "2019",
    logo: "/images/projects/filpet.png",
    platforms: [
      {
        name: "Web",
        icon: "/images/icons/web.png",
      },
      {
        name: "Web CMS",
        icon: "/images/icons/web.png",
      },
      {
        name: "Backend",
        icon: "/images/icons/backend.png",
      },
    ],
    tech: ["Laravel", "Laravel Nova", "VueJS"],
    tags: ["Shooping", "Manufacturing"],
  },
  {
    title: "Beep App",
    role: "Backend Developer",
    company: "CoreProc, Inc.",
    description:
      "The beep app makes card usage more easy and convenient by allowing you to check your card balance and monitor card transactions",
    involvement: "support",
    date: "2018",
    logo: "/images/projects/beep.png",
    platforms: [
      {
        name: "Android",
        icon: "/images/icons/android.png",
      },
      {
        name: "iOS",
        icon: "/images/icons/apple.png",
      },
      {
        name: "Web CMS",
        icon: "/images/icons/web.png",
      },
      {
        name: "Backend",
        icon: "/images/icons/backend.png",
      },
    ],
    tech: ["Android Java", "Swift", "Laravel", "MySQL", "Firebase", "VueJS"],
    tags: ["Transportation", "Top-up"],
  },
  {
    title: "Angels Pizza App",
    role: "Backend Developer",
    company: "CoreProc, Inc.",
    description:
      "The Angles Pizza has a built-in rewards system that provides a give-gifts function to loyal customers",
    involvement: "support",
    date: "2018",
    logo: "/images/projects/angels_pizza.png",
    platforms: [
      {
        name: "Android",
        icon: "/images/icons/android.png",
      },
      {
        name: "iOS",
        icon: "/images/icons/apple.png",
      },
      {
        name: "Web CMS",
        icon: "/images/icons/web.png",
      },
      {
        name: "Backend",
        icon: "/images/icons/backend.png",
      },
    ],
    tech: ["Android Java", "Swift", "Laravel", "MySQL", "Firebase"],
    tags: ["Delivery", "Pizza", "Loyalty Points"],
  },
  {
    title: "Yamaha Rev Buddy",
    role: "Backend Developer",
    company: "CoreProc, Inc.",
    description:
      "In Yamaha Rev Buddy app you can reserve a product, have an instant access to all Yamaha Motorcycles, apparel, and accessories.",
    involvement: "from start to UAT",
    date: "2018",
    logo: "/images/projects/yamaha.png",
    platforms: [
      {
        name: "Android",
        icon: "/images/icons/android.png",
      },
      {
        name: "iOS",
        icon: "/images/icons/apple.png",
      },
      {
        name: "Web CMS",
        icon: "/images/icons/web.png",
      },
      {
        name: "Backend",
        icon: "/images/icons/backend.png",
      },
    ],
    tech: [
      "Android Java",
      "Swift",
      "Laravel",
      "Laravel - Nova",
      "MySQL",
      "Firebase",
    ],
    tags: ["Motorcycle", "Maintenance"],
  },
  {
    title: "BG Bridal Gallery",
    role: "Fullstack Developer",
    company: "CoreProc, Inc.",
    description:
      "With its user friendly interface, Bridal Gallery is the most innovative wedding planning app in the Philippines today. Reliable wedding planning services in Philippines is just so easy to find. Users can create an idea gallery by finding great planning tips, global themes, and the finest professionals.",
    involvement: "from revamp, production and support",
    date: "2017 - 2018",
    logo: "/images/projects/bg.png",
    platforms: [
      {
        name: "Android",
        icon: "/images/icons/android.png",
      },
      {
        name: "iOS",
        icon: "/images/icons/apple.png",
      },
      {
        name: "Web",
        icon: "/images/icons/web.png",
      },
      {
        name: "Web CMS",
        icon: "/images/icons/web.png",
      },
      {
        name: "Backend",
        icon: "/images/icons/backend.png",
      },
    ],
    tech: [
      "Android Java",
      "Swift",
      "Laravel",
      "VueJS",
      "MySQL",
      "Firebase",
      "Braintree Payments",
    ],
    tags: ["Wedding", "Professional Marketplace"],
  },
  {
    title: "Travelbook PH",
    role: "Backend Developer",
    company: "CoreProc, Inc.",
    description:
      "Travelbook is a travel buddy app, where you can book hotel, flight and any attraction.",
    involvement: "product support",
    date: "2017",
    logo: "/images/projects/travelbook.png",
    platforms: [
      {
        name: "Android",
        icon: "/images/icons/android.png",
      },
      {
        name: "iOS",
        icon: "/images/icons/apple.png",
      },
      {
        name: "Web",
        icon: "/images/icons/web.png",
      },
      {
        name: "Web CMS",
        icon: "/images/icons/web.png",
      },
      {
        name: "Backend",
        icon: "/images/icons/backend.png",
      },
    ],
    tech: ["Laravel", "MySQL"],
    tags: ["Travel", "Booking", "Tourist"],
  },
  {
    title: "Franchise Asia PH 2017",
    role: "Backend Developer",
    company: "CoreProc, Inc.",
    description:
      "Franchise Asia PH app is an event app that help their users locate boot/s during the expo day. This is my first official project at CoreProc.",
    involvement: "from start, production and support",
    date: "2017",
    logo: "/images/projects/faphl.png",
    platforms: [
      {
        name: "Android",
        icon: "/images/icons/android.png",
      },
      {
        name: "iOS",
        icon: "/images/icons/apple.png",
      },
      {
        name: "Web CMS",
        icon: "/images/icons/web.png",
      },
      {
        name: "Backend",
        icon: "/images/icons/backend.png",
      },
    ],
    tech: ["Android Java", "Swift", "Laravel", "MySQL"],
    tags: ["Event", "Franchise", "Expo"],
  },
  {
    title: "Bundy",
    role: "Fullstack Developer",
    company: "CoreProc, Inc.",
    description:
      "Bundy is an app for CoreProc to records employees time in and time out. This is an internal project to test my skill set on using Laravel on web development.",
    involvement: "from start, production and support",
    date: "2017",
    logo: "/images/projects/bundy.png",
    platforms: [
      {
        name: "Web",
        icon: "/images/icons/web.png",
      },
      {
        name: "Web CMS",
        icon: "/images/icons/web.png",
      },
      {
        name: "Backend",
        icon: "/images/icons/backend.png",
      },
    ],
    tech: ["Laravel", "MySQL", "JQuery"],
    tags: ["Bundy", "Internal"],
  },
]
