import { pageMeta } from "../data/site";

export const getPageMeta = (pathname: string) => pageMeta[pathname] ?? pageMeta["/"];

export const initialsFor = (name: string) =>
  name
    .split(" ")
    .filter((part) => !["H.E.", "Eng.", "Dr.", "PhD"].includes(part))
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
