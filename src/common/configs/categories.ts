import { artTopics } from "../data/art";
import { medicalTopics } from "../data/medicine";
import { chemistryTopics } from "../data/chemistry";
import { foodTopics } from "../data/food";
import { geographyTopics } from "../data/geography";
import { historyTopics } from "../data/history";

export const categories = [
  { name: "Art", icon: "./categories/art.png" },
  { name: "Chemistry", icon: "./categories/chemistry.png" },
  { name: "Economy", icon: "./categories/economy.png" },
  { name: "Food", icon: "./categories/food.png" },
  { name: "Geography", icon: "./categories/geography.png" },
  { name: "History", icon: "./categories/history.png" },
  { name: "Literature", icon: "./categories/literature.png" },
  { name: "Logic", icon: "./categories/logic.png" },
  { name: "Mathematic", icon: "./categories/mathematic.png" },
  { name: "Medicine", icon: "./categories/medicine.png" },
  {
    name: "Philosopny-and-Religion",
    icon: "./categories/philosophy-and-religion.png",
  },
  { name: "Policy", icon: "./categories/policy.png" },
  { name: "Space", icon: "./categories/space.png" },
  { name: "Sport", icon: "./categories/sport.png" },
  { name: "Technologies", icon: "./categories/technologies.png" },
  { name: "Travel", icon: "./categories/travel.png" },
  { name: "Zoology", icon: "./categories/zoology.png" },
];

export const pages: Record<
  string,
  {
    img: string;
    title: string;
    topics: { title: string; subtopics: string[] }[];
  }
> = {
  history: {
    img: "/images/history.png",
    title: "History",
    topics: historyTopics,
  },
  zoology: {
    img: "/images/zoology.png",
    title: "Zoology",
    topics: [],
  },
  literature: {
    img: "/images/literature.png",
    title: "Literature",
    topics: [],
  },
  mathematic: {
    img: "/images/mathematic.png",
    title: "Mathematic",
    topics: [],
  },
  chemistry: {
    img: "/images/chemistry.png",
    title: "Chemistry",
    topics: chemistryTopics,
  },
  technologies: {
    img: "/images/technologies.png",
    title: "Technologies",
    topics: [],
  },
  space: {
    img: "/images/space.png",
    title: "Space",
    topics: [],
  },
  food: {
    img: "/images/food.png",
    title: "Food",
    topics: foodTopics,
  },
  logic: {
    img: "/images/logic.png",
    title: "Logic",
    topics: [],
  },
  policy: {
    img: "/images/policy.png",
    title: "Policy",
    topics: [],
  },
  geography: {
    img: "/images/geography.png",
    title: "Geography",
    topics: geographyTopics,
  },
  art: {
    img: "/images/art.webp",
    title: "Art",
    topics: artTopics,
  },
  medicine: {
    img: "/images/medicine.png",
    title: "Medicine",
    topics: medicalTopics,
  },
  travel: {
    img: "/images/travel.png",
    title: "Travel",
    topics: [],
  },
  economy: {
    img: "/images/economy.png",
    title: "Economy",
    topics: [],
  },
  sport: {
    img: "/images/sport.png",
    title: "Sport",
    topics: [],
  },
  "philosopny-and-religion": {
    img: "/images/philosopny-and-religion.png",
    title: "Philosophy and Religion",
    topics: [],
  },
};
