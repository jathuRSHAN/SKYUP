import { Facebook, Twitter, Instagram, YouTube, ArrowRightAlt, CloudOutlined, FavoriteBorder, Public, PersonOutlined } from "@mui/icons-material"

export const social = [
    {
        icon: <Facebook />,
        url: "https://web.facebook.com/sownthararsa.jathu"
    },
    {
        icon: <Twitter />,
        url: ""
    },
    {
        icon: <Instagram />,
        url: ""
    },
    {
        icon: <YouTube />,
        url: ""
    },

]

export const navlink = [
    {
        url: "/",
        text: "Home",
    },
    {
        url: "/about",
        text: "About",
    },
    {
        url: "/team",
        text: "Team",
    },
    // {
    //     url: "/portfolio",
    //     text: "Portfolio",
    // },
    // {
    //     url: "/testimonials",
    //     text: "Testimonials",
    // },
    {
        url: "/blog",
        text: "Articles",
    },
    {
        url: "/contact",
        text: "Contact us",
    },
]


export const hero = [
    {
        name: "Unlock your Knowledge",
        title: "Learn with SKYUP best online education",
        des: "Success doesn’t come to you, you go to it. Enroll now and take charge of your future.",
        btn1: "GET STARTED NOW",
        btn2: "view course",
        icon: <ArrowRightAlt sx={{ fontSize: 30 }} />
    }
]
export const services = [
    {
        id: 1,
        cover: "https://img.icons8.com/dotty/80/000000/storytelling.png",
        title: "Online Courses",
        desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
    },
    {
        id: 2,
        cover: "https://img.icons8.com/ios/80/000000/diploma.png",
        title: "Earn A Certificates",
        desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
    },
    {
        id: 3,
        cover: "https://img.icons8.com/ios/80/000000/athlete.png",
        title: "Learn with Expert",
        desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
    },
    // {
    //     id: 4,
    //     cover: "https://img.icons8.com/ios/80/000000/athlete.png",
    //     title: "Material UI	",
    //     desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
    // },
    // {
    //     id: 5,
    //     cover: "https://img.icons8.com/ios/80/000000/athlete.png",
    //     title: "Material UI Icons",
    //     desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
    // },
    // {
    //     id: 6,
    //     cover: "https://img.icons8.com/ios/80/000000/athlete.png",
    //     title: "Awesome Support",
    //     desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
    // },
]

export const course = [
    {
        id: 1,
        type: "admin",
        date: "JAN. 18, 2021",
        com: "3 COMMENTS ",
        title: "Build your Dream Software & Engineering Career",
        desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        cover: "../images/blog/b1.webp",
    },
    {
        id: 2,
        type: "admin",
        date: "API. 25, 2022",
        com: "5 COMMENTS ",
        title: "Build your Dream Software & Engineering Career",
        desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        cover: "../images/blog/b2.webp",
    },
    {
        id: 3,
        type: "user",
        date: "MAY. 15, 2022",
        com: "10 COMMENTS ",
        title: "Build your Dream Software & Engineering Career",
        desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        cover: "../images/blog/b3.webp",
    },
    {
        id: 4,
        type: "admin",
        date: "JAN. 02, 2022",
        com: "3 COMMENTS ",
        title: "Build your Dream Software & Engineering Career",
        desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        cover: "../images/blog/b4.webp",
    },
    {
        id: 5,
        type: "admin",
        date: "DEC. 14, 2022",
        com: "3 COMMENTS ",
        title: "Build your Dream Software & Engineering Career",
        desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        cover: "../images/blog/b5.webp",
    },
    {
        id: 6,
        type: "user",
        date: "JAN. 18, 2021",
        com: "12 COMMENTS ",
        title: "Build your Dream Software & Engineering Career",
        desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        cover: "../images/blog/b6.webp",
    },
]


export const coursesCard = [
    {
        id: 1,
        cover: "../images/back.webp",
        courTeacher: [
            {
                dcover: "./images/back.webp",
                name: "by John Smith",
                totalTime: "50 lectures (190 hrs)",
            },
        ],
        coursesName: "Introducing to Software Engineering",
        desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        priceAll: "$100 All Course",
        pricePer: "$15 per month",
        available: true
    },
    {
        id: 2,
        cover: "../images/back.webp",
        courTeacher: [
            {
                dcover: "./images/back.webp",
                name: "by Ram Gurung",
                totalTime: "30 lectures (125 hrs)",
            },
        ],
        coursesName: "Enhancing Adobe Photoshop",
        desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        priceAll: "$200 All Course",
        pricePer: "$25 per month",
        available: false
    },
    {
        id: 3,
        cover: "../images/back.webp",
        courTeacher: [
            {
                dcover: "./images/back.webp",
                name: "by Saroj Nepal",
                totalTime: "50 lectures (50 hrs)",
            },
        ],
        coursesName: "HTML, CSS, and Javascript",
        desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        priceAll: "$50 All Course",
        pricePer: "$5 per month",
        available: false
    },
    {
        id: 4,
        cover: "../images/back.webp",
        courTeacher: [
            {
                dcover: "./images/back.webp",
                name: "by John Smith",
                totalTime: "50 lectures (190 hrs)",
            },
        ],
        coursesName: "Introducing to Software Engineering",
        desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        priceAll: "$100 All Course",
        pricePer: "$15 per month",
        available: false
    },
    {
        id: 5,
        cover: "../images/back.webp",
        courTeacher: [
            {
                dcover: "./images/back.webp",
                name: "by Ram Gurung",
                totalTime: "30 lectures (125 hrs)",
            },
        ],
        coursesName: "Enhancing Adobe Photoshop",
        desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        priceAll: "$200 All Course",
        pricePer: "$25 per month",
        available: false
    },
    {
        id: 6,
        cover: "../images/back.webp",
        courTeacher: [
            {
                dcover: "./images/back.webp",
                name: "by Saroj Nepal",
                totalTime: "50 lectures (50 hrs)",
            },
        ],
        coursesName: "HTML, CSS, and Javascript ",
        desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        priceAll: "$50 All Course",
        pricePer: "$5 per month",
        available: false
    },

]

export const project = [
    {
        id: 1,
        icon: <CloudOutlined />,
        num: "89",
        title: "HAPPY CLIENTS",
    },
    {
        id: 2,
        icon: <FavoriteBorder />,
        num: "231",
        title: "PROJECTS COMPLEATED",
    },
    {
        id: 3,
        icon: <Public />,
        num: "108",
        title: "FILES DOWNLOADED",
    },
    {
        id: 4,
        icon: <PersonOutlined />,
        num: "1446",
        title: "LIENS OF CODE",
    },
]

export const faq = [
    {
        title: "How to Enroll This Online Courses?",
        desc: "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
        title: "Where It is hidden by default, until the collapse?",
        desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
        title: "How It is hidden by default, until the collapse?",
        desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
        title: "How to Enroll This Online Courses?",
        desc: "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
        title: "Where It is hidden by default, until the collapse?",
        desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
        title: "How It is hidden by default, until the collapse?",
        desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
]