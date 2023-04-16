const categories: CategoryType[] = [
  {id: '1', name: 'Pizza', image: require('../assets/catergories/pizza.png')},
  {id: '2', name: 'Burger', image: require('../assets/catergories/burger.png')},
  {id: '3', name: 'Sushi', image: require('../assets/catergories/sushi.png')},
  {id: '4', name: 'Salad', image: require('../assets/catergories/salad.png')},
];

export type CategoryType = {
  id: string;
  name: string;
  image: any;
};

export default categories;
