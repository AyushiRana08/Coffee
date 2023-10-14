// we will be using this dummy data,
// don't worry, you can find this data in the git repo 
// you can find the git repo link in the description ;)

export const categories = [
  {
    id: 1,
    title: "Cappuccino",
  },
  {
    id: 2,
    title: "Latte",
  },
  {
    id: 3,
    title: "Espresso",
  },
  {
    id: 4,
    title: "Mocha",
  },
  {
    id: 5,
    title: "Americano",
  },
]

export const coffeeItems = [
  {
    id: 1,
    name: 'Black Coffee',
    price: '25.50',
    volume: '116 ml',
    stars: '4.6',
    image: require('../assets/coffee1.png'),
    desc: 'Black coffee is a beverage made from roasted coffee beans. The beans are ground and soaked in water, which releases their flavor, color, caffeine content, and nutrients.'
  },
  
  {
    id: 2,
    name: 'Cappuccino',
    price: '15.50',
    volume: '110 ml',
    stars: '4.3',
    image: require('../assets/coffee2.png'),
    desc: 'A cappuccino is a popular coffee drink that’s made by topping a shot of espresso with steamed milk and milk foam.'
  },
  
  {
    id: 3,
    name: 'Espresso',
    price: '30.00',
    volume: '100 ml',
    stars: '4.0',
    image: require('../assets/coffee3.png'),
    desc: 'Espresso is a concentrated type of coffee drink with Italian origins. Prepared from the same coffee beans as regular coffee, it’s its preparation that differentiates espresso from regular coffee. Espresso features bold and concentrated coffee flavors and a velvety texture that are achieved through brewing under high pressure.'  },
  
  {
    id: 4,
    name: 'Latte',
    price: '10.30',
    volume: '80 ml',
    stars: '3.5',
    image: require('../assets/coffee4.png'),
    desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.'  },
  
  {
    id: 5,
    name: 'Mocha',
    price: '23.10',
    volume: '120 ml',
    stars: '4.7',
    image: require('../assets/coffee5.png'),
    desc: 'Mocha refers to any mixture of coffee with chocolate flavoring, even as simple as some hot chocolate with shots of espresso blended together.'  },
  
]
export const itemsInCart =[
  {
    id: 2,
    name: "Latte",
    image: require('../assets/coffee2.png'),
    price: '15.50',
  },
  
  {
    id: 4,
    name: "Mocha",
    image: require('../assets/coffee4.png'),
    price: '10.30',
  },
  {
    id: 5,
    name: "Americano",
    image: require('../assets/coffee5.png'),
    price: '23.10',
  },
]