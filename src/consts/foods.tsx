const foods: IFoodType[] = [
  {
    id: '1',
    name: 'Meat Pizza',
    ingredients: 'Mixed Pizza',
    price: '8.30',
    image: require('../assets/meatPizza.png'),
  },
  {
    id: '2',
    name: 'Cheese Pizza',
    ingredients: 'Cheese Pizza',
    price: '7.10',
    image: require('../assets/cheesePizza.png'),
  },
  {
    id: '3',
    name: 'Chicken Burger',
    ingredients: 'Fried Chicken',
    price: '5.10',
    image: require('../assets/chickenBurger.png'),
  },
  {
    id: '4',
    name: 'Sushi Makizushi',
    ingredients: 'Salmon Meat',
    price: '9.55',
    image: require('../assets/sushiMakizushi.png'),
  },
];

export interface IFoodType {
  id: string,
  name: string,
  ingredients: string,
  price: string,
  image: any,
}

export default foods;
