import image1 from "@/public/images/main/services_img/visual.jpg";
import image2 from "@/public/images/main/services_img/photographer.jpg";
import image3 from "@/public/images/main/services_img/collaboration.jpg";
import image4 from "@/public/images/main/services_img/presets.jpg";
import image5 from "@/public/images/main/services_img/photo_class.jpg";
import image6 from "@/public/images/main/services_img/plant.jpg";

import testPhoto from "@/public/images/main/services_img/photographer.jpg";

export const MY_SERVICES = [
  {
    id: 1,
    title: "Консультирую по концепции ведения блога и визуала.",
    href: "/visual",
    imageSrc: image1,
  },
  {
    id: 2,
    title: "Фотографирую.",
    href: "/photo_content",
    imageSrc: image2,
  },
  {
    id: 3,
    title: "/ PRESETS /",
    href: "#",
    imageSrc: image4,
  },
  {
    id: 4,
    title: "/   СОТРУДНИЧАЮ  /",
    href: "#",
    imageSrc: image3,
  },
  {
    id: 5,
    title: "Обучаю съемке.",
    href: "#",
    imageSrc: image5,
  },
  {
    id: 6,
    title: "Консультирую по растительному питанию.",
    href: "#",
    imageSrc: image6,
  },
];

export const NAV_LINKS = [
  {
    id: 1,
    title: "Главная",
    path: "/",
  },
  {
    id: 2,
    title: "Съемка",
    path: "/photo_content",
  },
  // {
  //   id: 2,
  //   title: "Визуал",
  //   path: "/visual",
  // },
  // {
  //   id: 3,
  //   title: "PRESETS",
  //   path: "/presets",
  // },
  // {
  //   id: 4,
  //   title: "СОТРУДНИЧАЮ",
  //   path: "/colaboration",
  // },
  // {
  //   id: 5,
  //   title: "Обучаю съемке.",
  //   path: "/photo_study",
  // },
  // {
  //   id: 6,
  //   title: "Консультирую по растительному питанию.",
  //   path: "/nutrition_consulting",
  // },
];

export const PHOTO_OPTIONS_LIST = [
  {
    id: 1,
    name: "/ Индивидуальная",
    img: testPhoto,
    link: "/photo_content/individual",
  },
  {
    id: 2,
    name: "Love / Family / Friends: S T O R Y",
    img: testPhoto,
    link: "/photo_content/story",
  },
  {
    id: 3,
    name: "Content for brands ",
    img: testPhoto,
    link: "/photo_content/brands",
  },
  {
    id: 4,
    name: "Контент  /  Визуал для личных блогов ",
    img: testPhoto,
    link: "/photo_content/blog_visual",
  },
];

export const PROCESS_LIST = [
  {
    id: 1,
    label: "1 / БРОНИРОВАНИЕ СЪЕМКИ.",
    description: [
      "После заполнения анкеты и внесение предоплаты, ваша заявка будет рассмотрена и принята в течение 24 часа. Внесение предоплаты фиксирует интерес клиента к услуге фотографа, а также обеспечивает резервирование времени и дату для проведения съемки.",
    ],
  },
  {
    id: 2,
    label: "2 / ЗНАКОМСТВО.",
    description: [
      "После рассмотрения вашей заявки, я с вами свяжусь, чтобы познакомиться и обсудить детали съемки ( Ваши желания и мои идеи /День, время, место встречи и т.д )",
    ],
  },
  {
    id: 3,
    label: "3 / СЪЕМКА.",
    description: [
      "От идеи до результата. Мы проведем съемку, где как минимум реализуем желаемые снимки.",
    ],
  },
  {
    id: 4,
    label: "4 / ИТОГ.",
    description: [
      "— Быстрая, но качественная отдача материала после съемки.",
      "— Помимо обработанного материала, также отдаю часть лучших исходного материала, для самостоятельной обработки снимков на свой вкус.",
    ],
  },
];
