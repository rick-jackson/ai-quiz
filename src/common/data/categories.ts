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
    name: "Philosopny and Religion",
    icon: "./categories/philosophy-and-religion.png",
  },
  { name: "Policy", icon: "./categories/policy.png" },
  { name: "Space", icon: "./categories/space.png" },
  { name: "Sport", icon: "./categories/sport.png" },
  { name: "Technologies", icon: "./categories/technologies.png" },
  { name: "Travel", icon: "./categories/travel.png" },
  { name: "Zoology", icon: "./categories/zoology.png" },
];

export const pages = {
  history: {
    img: "/images/history.png",
    title: "History",
  },
  zoology: {
    img: "/images/zoology.png",
    title: "Zoology",
  },
  literature: {
    img: "/images/literature.png",
    title: "Literature",
  },
  medicine: {
    img: "/images/medicine.png",
    title: "Medicine",
  },
} as const;
