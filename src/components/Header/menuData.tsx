import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Who We Are",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Leadership",
        path: "/leadership",
        newTab: false,
      },
      {
        id: 43,
        title: "Vision",
        path: "/vision",
        newTab: false,
      },
      {
        id: 44,
        title: "Believe",
        path: "/believe",
        newTab: false,
      },
    ],
  },
  {
    id: 33,
    title: "Watch",
    path: "/watch",
    newTab: false,
  },
  {
    id: 3,
    title: "Give",
    path: "/give",
    newTab: false,
  },
  {
    id: 4,
    title: "Light House",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Articles",
        path: "/articles",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact",
        path: "/contact",
        newTab: false,
      },
      // {
      //   id: 43,
      //   title: "Blog Grid Page",
      //   path: "/blog",
      //   newTab: false,
      // },
      // {
      //   id: 44,
      //   title: "Blog Sidebar Page",
      //   path: "/blog-sidebar",
      //   newTab: false,
      // },
      // {
      //   id: 45,
      //   title: "Blog Details Page",
      //   path: "/blog-details",
      //   newTab: false,
      // },
      // {
      //   id: 46,
      //   title: "Sign In Page",
      //   path: "/signin",
      //   newTab: false,
      // },
      // {
      //   id: 47,
      //   title: "Sign Up Page",
      //   path: "/signup",
      //   newTab: false,
      // },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    ],
  },
];
export default menuData;
