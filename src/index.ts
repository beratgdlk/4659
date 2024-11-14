// FONKSİYONLAR -------------------------------------
const kardesPayi = (name?: string) => {
  name
    ? console.log(`Bir Tane ${name} için, bir de benim için`)
    : console.log(`Bir Tane senin için bir tane benim için`);
};
kardesPayi("Berat");
kardesPayi();
// -----------------------------------
function isLeapYear(year: number): boolean {
  return (year % 4 == 0 && year % 100 !== 0) || year % 400 === 0;
}
const year1 = isLeapYear(2024); /*TRUE*/
const year2 = isLeapYear(2021); /*FALSE */
const year3 = isLeapYear(2020); /*TRUE */
const year4 = isLeapYear(2019); /*FALSE */
console.log(year1, year2, year3, year4);
// -----------------------------------

// OBJELER -------------------------------------------------
interface Movie {
  title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldwide: number;
  };
}

const dune: Movie = {
  title: "Dune",
  originalTitle: "Dune Part One",
  director: "Denis Villeneuve",
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108327830,
    grossWorldwide: 400671789,
  },
};

const cats: Movie = {
  title: "Cats",
  director: "Tom Hooper",
  releaseYear: 2019,
  boxOffice: {
    budget: 95000000,
    grossUS: 27166770,
    grossWorldwide: 73833348,
  },
};
// --------------------------------
function getProfit(movie: Movie) {
  return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
}
const profit1 = getProfit(dune);
const profit2 = getProfit(cats);
console.log(`Profit 1:${profit1},| Profit 2:${profit2}`);
// --------------------------

// ARRAYLER -------------------------------------------------
const ages: string[] = [];

// -------
const gameBoard: string[][] = [
  ["Berat", "Güdelek"],
  ["XX", "YY", "ZZ"],
];
// -------

type Product = {
  name: string;
  price: number;
};
// -------

const getTotal = (array: Product[]): number => {
  return array.reduce((totalPrice, product) => totalPrice + product.price, 0);
};
const products: Product[] = [
  { name: "Ürün 1", price: 120 },
  { name: "Ürün 2", price: 200 },
  { name: "Ürün 3", price: 20 },
];

const total = getTotal(products);
console.log("Ürünlerin Toplam Fiyatı:" + total);

// UNİONLAR -----------------------------------------
let highScore: number | boolean;
highScore = 16;
highScore = true;
// -----
let stuff: number[] | string[];
stuff = ["Berat", "Emre", "Aslı"];
stuff = [1, 2, 3, 4, 5];
// ------
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";
type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};

type RGB = {
  r: number;
  g: number;
  b: number;
};
type HSL = {
  h: number;
  s: number;
  l: number;
};

let colors: (RGB | HSL)[] = [];
const greet = (name: string | string[]) => {
  if (Array.isArray(name)) {
    name.forEach((isim) => {
      console.log(`Merhaba ${isim}`);
    });
  } else {
    console.log(`Merhaba ${name}`);
  }
};
greet("Berat");
greet(["Berat", "Aslı", "Emre"]);
