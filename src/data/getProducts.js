const products = [
  {
    id: "Manzanasnoviembre",
    name: "Manzanas deliciosas",
    description: "Manzanas frescas de estacion, especiales para la primavera.",
    category: "frutas",
    image: "https://th.bing.com/th?id=OSK.HEROAd4ETdyEPcufhWwT9p92ztSNEClqW3aTkoja5sr-mFc&w=472&h=280&c=13&rs=2&o=6&dpr=1.3&pid=SANGAM"
  },
  {
    id: "zapallitos",
    name: "Zapallitos verdes frescos",
    description: "Deliciosos y firmes zapallitos.",
    category: "verduras",
    image: "https://th.bing.com/th?id=OIP.Ddz6IrR17bPVTtzoiwGc7gHaFd&w=291&h=214&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
  },
  {
    id: "calabaza",
    name: "Calabaza pumpkin",
    description: "Estupendas calabazas ideales para Halloween.",
    category: "verduras",
    image: "https://th.bing.com/th?id=OIP.KtzgOLMLht2hgqNhi-KTzgHaE5&w=307&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
  },
  {
    id: "guiso",
    name: "Guiso casero",
    description: "El mejor y mas delicioso guiso casero.",
    category: "cesu",
    image: "https://th.bing.com/th?id=OIP.ru-Bel29k5Luk7LXeFqXagHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
  },
  {
    id: "Strogonoff",
    name: "Strogonoff al gusto",
    description: "El mas sabroso strogonoff que hayas probado nunca.",
    category: "cesu",
    image: "https://th.bing.com/th?id=OIP.nMugDKH3wQxeuuc9un_d7gHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
  },
  {
    id: "uvas",
    name: "Uvas",
    description: "Uvas a granel.",
    category: "frutas",
    image: "https://th.bing.com/th?id=OIP.YAjszP6cXFu5kEg--7Vo_QHaE7&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
  },
 
]
//obtener productos
const getProducts = new Promise((resolve, reject) => {
  //simulamos un retraso de red con setTimeout
  setTimeout(() => {
    resolve(products);
  }, 3000);
});

export default getProducts