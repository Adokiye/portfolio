const pages = [
  {
    url: "/",
    title: "Paul Iruene",
    description: "VP Engineering",
    thumbnail: "",
  },
];
export const getPageByPath = (path) =>
  pages.find(({ url }) => url === path) || pages[0];
