export const primaryProjects = [
  {
    id: 1,
    title: "ავტოინსტრუქტორი",
    subtitle: "Driving Instructor Platform",
    badge: "Flutter",
    icon: "fa-solid fa-car",
    color: "purple",
    description: "Flutter აპლიკაცია, რომელიც მძღოლებს პრაქტიკული გამოცდისთვის მომზადებაში ეხმარება. სისტემა ამარტივებს პრაქტიკული და თეორიული გაკვეთილების დაგეგმვის პროცესს, მომხმარებელს აძლევს საშუალებას მოიძიოს სასურველი ინსტრუქტორი ლოკაციის, ავტომობილისა და რეიტინგის მიხედვით.",
    features: [
      "ინსტრუქტორების კატალოგი და დეტალური პროფილები",
      "გაკვეთილების ონლაინ დაჯავშნის კალენდარი",
      "საგამოცდო ბილეთების ელექტრონული ტესტირება",
      "შეფასებებისა და რეიტინგების სისტემა"
    ],
    tags: ["Flutter", "Dart", "Mobile UI", "REST API"],
    links: []
  },
  {
    id: 2,
    title: "PetC",
    subtitle: "შინაური ცხოველების პლატფორმა",
    badge: "Flutter",
    icon: "fa-solid fa-paw",
    color: "blue",
    description: "შინაური ცხოველების თემაზე შექმნილი სოციალური აპლიკაცია და ციფრული ასისტენტი. აპლიკაცია მომხმარებელს ეხმარება თავისი ოთხფეხა მეგობრის ჯანმრთელობის, კვების, აცრებისა და ვეტერინართან ვიზიტების სრულყოფილ ორგანიზებაში.",
    features: [
      "შინაური ცხოველის ციფრული სამედიცინო პასპორტი",
      "ვაქცინაციებისა და პროცედურების შეხსენებები",
      "ვეტერინართან ვიზიტის ონლაინ დაჯავშნა",
      "ცხოველთა მოვლის საინფორმაციო ბაზა"
    ],
    tags: ["Flutter", "UI/UX", "Firebase", "Cloud DB"],
    links: [
      {
        label: "petc.ge",
        url: "https://petc.ge/",
        icon: "fa-solid fa-arrow-up-right-from-square"
      }
    ]
  },
  {
    id: 3,
    title: "Sales Tax Calculator",
    subtitle: "გადასახადის კალკულატორი",
    badge: "Kotlin, Android",
    icon: "fa-solid fa-calculator",
    color: "indigo",
    description: "Android აპლიკაცია გადასახადის გამოსათვლელად. მომხმარებლებს ეხმარება სხვადასხვა პროდუქტზე ან მომსახურებაზე გაყიდვების გადასახადის, დღგ-ს (VAT) და საბოლოო ფასის სწრაფ და ზუსტ გაანგარიშებაში.",
    features: [
      "საბაზისო ფასისა და გადასახადის განაკვეთის შეყვანა",
      "გადასახადის თანხისა და ჯამის მყისიერი დათვლა",
      "მრავალვალუტიანი მხარდაჭერა",
      "გაანგარიშების ისტორიის ლოკალური შენახვა"
    ],
    tags: ["Kotlin", "Android", "Calculations", "Local Storage"],
    links: []
  }
];

export const moreProjects = [
  {
    id: 4,
    title: "FlirtKey",
    badge: "AI App",
    platform: "iOS • Android • Web",
    color: "blue",
    description: "მობილური და ვებ-აპლიკაცია, რომელიც AI-ის დახმარებით მომხმარებლებს მესიჯების შედგენაში ეხმარება.",
    tags: ["Python / Django", "Flutter"],
    links: [
      { label: "საიტი →", url: "https://flirtkey.nebulahub.ai/", primary: true },
      { label: "App Store", url: "https://apps.apple.com/ge/app/flirtkey/id6761752002" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=ai.nebulahub.flirtkey&pcampaignid=web_share" }
    ]
  },
  {
    id: 5,
    title: "Mind Oracle",
    badge: "AI Psychology",
    platform: "iOS • Android • Web",
    color: "indigo",
    description: "AI-ით აღჭურვილი მობილური და ვებ-აპლიკაცია ქვეცნობიერი აზრების ანალიზისა და რეკომენდაციებისთვის.",
    tags: ["Python / Django", "Flutter"],
    links: [
      { label: "საიტი →", url: "https://mindoracle.nebulahub.ai/", primary: true },
      { label: "App Store", url: "https://apps.apple.com/ge/app/mind-oracle/id6762270649" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=ai.nebulahub.mindoracle&pcampaignid=web_share" }
    ]
  },
  {
    id: 6,
    title: "ვეფხისტყაოსანი",
    badge: "Education",
    platform: "Web & Mobile",
    color: "purple",
    description: "შოთა რუსთაველის პოემისადმი მიძღვნილი ვებ-პლატფორმა და მობილური აპლიკაცია ადმინ პანელითა და ჩატბოტით.",
    tags: ["Flask / Python", "Firebase"],
    links: [
      { label: "საიტი →", url: "https://vepkhistyaosani.onrender.com/", primary: true },
      { label: "Download App", url: "https://drive.google.com/file/d/1-ZZ0HzJLyrsZJmhJ01o_LblqNhI-W-P3/view?usp=sharing" }
    ]
  },
  {
    id: 7,
    title: "Sandricksoni Bot",
    badge: "AI Chatbot",
    color: "purple",
    description: "AI-ით აღჭურვილი ჩატბოტი OpenAI API-ს ინტეგრაციით ბუნებრივი ინტერაქტიული საუბრისთვის.",
    tags: ["OpenAI API", "JavaScript"],
    links: [
      { label: "გაესაუბრე ბოტს →", url: "https://sandricksonichatbot.onrender.com/", primary: true }
    ]
  },
  {
    id: 8,
    title: "Video Calling Web",
    badge: "Django & AgoraRTC",
    color: "blue",
    description: "ვიდეო-ზარების სისტემა რეალურ დროში უნიკალური ოთახებითა და მინიმალური დაყოვნებით.",
    tags: ["Django", "WebRTC / Agora"],
    links: [
      { label: "საიტის ნახვა →", url: "https://video-call-site-4lfd.onrender.com/", primary: true }
    ]
  },
  {
    id: 9,
    title: "Social Network",
    badge: "Django",
    color: "indigo",
    description: "სრული სოციალური ქსელი: პოსტები, Follow სისტემა, მოწონებები და კომენტარები.",
    tags: ["Python", "Django"],
    links: [
      { label: "საიტის ნახვა →", url: "https://social-site-using-django-by-sandricksoni.onrender.com/", primary: true }
    ]
  }
];

export const experienceData = [
  {
    id: 1,
    role: "Fullstack & Mobile Developer",
    period: "2023 — დღემდე",
    description: "ვებ და მობილური აპლიკაციების შემუშავება Flutter, React, Python/Django და REST API-ების გამოყენებით.",
    achievements: [
      "პროექტები: ავტოინსტრუქტორი, PetC, FlirtKey, Mind Oracle",
      "AI სერვისებისა და OpenAI API-ს ინტეგრაცია აპლიკაციებში",
      "სრული არქიტექტურის გამართვა მონაცემთა ბაზებიდან UI-მდე"
    ]
  },
  {
    id: 2,
    role: "Embedded & IoT Developer",
    period: "2022 — დღემდე",
    description: "Arduino და მიკროკონტროლერებზე დაფუძნებული ჭკვიანი სისტემებისა და სენსორული ქსელების შექმნა.",
    achievements: [
      "სხვადასხვა სენსორებისა და აქტუატორების ინტეგრაცია (C/C++)",
      "IoT დისტანციური კონტროლის სისტემების გამართვა",
      "ხელოვნური ინტელექტის მოდელებისა და მიკროკონტროლერების კავშირი"
    ]
  },
  {
    id: 3,
    role: "AI Chatbots & Research",
    period: "2023 — 2024",
    description: "კონვერსაციული AI აგენტებისა და NLP სისტემების კვლევა და შექმნა.",
    achievements: [
      "Psychobot, Medea, Sandricksoni Bot შექმნა და გამოქვეყნება",
      "GeoLab-ისა და Civics Tech-ის ფარგლებში განხორციელებული პროექტები"
    ]
  }
];

export const blogData = [
  {
    id: 1,
    source: "GeoLab",
    title: "Explore Chiatura & Psychobot",
    description: "გაეცანით ჩემს პროექტებს 'EXPLORE CHIATURA' და 'Psychobot'.",
    url: "https://generation.geolab.edu.ge/?p=1209&fbclid=IwY2xjawIm7ZFleHRuA2FlbQIxMQABHcgQM8Rz04LZo2_FmRoogtmFHMg-k2pNpxGmutIkLPrmJRbXFpxW2cCgUw_aem_IBOo_iSDhUmV_ASuosZNzQ",
    color: "purple"
  },
  {
    id: 2,
    source: "Civics Tech",
    title: "CivLab - Civic Education App",
    description: "სამოქალაქო განათლების პლატფორმა მოსწავლეების მხარდასაჭერად.",
    url: "https://civicstech.ge/project/36/1462?fbclid=IwY2xjawIm7kFleHRuA2FlbQIxMQABHfdgEi24HghBFD5QjR86rn29Nk30gQ9rs2gDOfpUzpo8bfN9_HFftG7gdQ_aem_jJ8_7xbA25V-wQFvYsYozQ",
    color: "blue"
  }
];

export const socialLinks = [
  {
    id: "github",
    name: "GitHub",
    label: "github.com/SANDRICKSON",
    url: "https://github.com/SANDRICKSON",
    icon: "fa-brands fa-github",
    color: "indigo"
  },
  {
    id: "email",
    name: "ელფოსტა",
    label: "sandroqatamadze802@gmail.com",
    url: "mailto:sandroqatamadze802@gmail.com",
    icon: "fa-solid fa-envelope",
    color: "blue"
  }
];

