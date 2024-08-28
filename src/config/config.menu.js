export const mainMenu = [
  {
    id: 0,
    title: "Главная",
    path: "/",
    submenu: [],
    color: `var(--text-color)`,
  },
  {
    id: 1,
    title: "О НАС",
    path: "/about",
    submenu: [],
    color: `var(--text-color)`,
  },
  {
    id: 2,
    title: "Услуги Доставки",
    path: "/delivery",
    submenu: [
      {
        id: 0,
        title: "Авиа",
        path: "/delivery/plane",
      },
      {
        id: 1,
        title: "Авто",
        path: "/delivery/auto",
      },
      {
        id: 2,
        title: "Ж/д",
        path: "/delivery/train",
      },
      {
        id: 3,
        title: "Море",
        path: "/delivery/see",
      },
    ],
    color: `var(--text-color)`,
  },
  {
    id: 3,
    title: "Фулфилмент",
    path: "/fullfilment",
    submenu: [],
    color: `var(--text-color)`,
  },
  {
    id: 4,
    title: "Заказать пошив",
    path: "/ordertailoring",
    submenu: [],
    color: `var(--text-color-blue)`,
  },
  // {
  //   id: 5,
  //   title: "ОПЛАТА В КИТАЙ",
  //   path: "/payment-to-china",
  //   submenu: [],
  //   color: `var(--text-color)`,
  // },
  {
    id: 6,
    title: "Выкуп ТОВАРА",
    path: "/repurchase-of-goods",
    submenu: [],
    color: `var(--text-color)`,
  },
];
export const listUrls = [
    {
        id: 0,
        title: 'Главная',
        path: '/',
    },
    {
        id: 1,
        title: 'О НАС',
        path: '/about',
    },
    {
        id: 2,
        title: 'Услуги Доставки',
        path: '/delivery',
    },
    {
        id: 3,
        title: 'что то ...',
        path: '/test'
    },
    {
        id: 4,
        title: 'что то ещё интересное...',
        path: '/test'
    },
    {
        id: 5,
        title: '',
        path: '/fullfilment',
    },
    {
        id: 6,
        title: 'Заказать пошив',
        path: '/ordertailoring',
    },
    {
        id: 7,
        title: 'ОПЛАТА В КИТАЙ',
        path: '/payment-to-china',
    },
    {
        id: 8,
        title: 'Выкуп ТОВАРА',
        path: '/repurchase-of-goods',
    },
]

