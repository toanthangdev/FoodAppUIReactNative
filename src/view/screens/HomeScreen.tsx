import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import categories from '../../consts/categories';
import foods, {IFoodType} from '../../consts/foods';

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

type PropsCard = {
  food: IFoodType,
  navigation: () => void,
}

const HomeScreen = ({navigation}: any): JSX.Element => {
  const [textSearch, setTextSearch] = useState<string>();
  const [foodData, setFoodData] = useState<IFoodType[]>(foods);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

  const onSearch = (text: string) => {
    setTextSearch(text);
    const filterData = foods.filter(food => {
      return food.name
        .toLocaleLowerCase()
        .includes(text.trim().toLocaleLowerCase());
    });
    setFoodData(filterData);
  };

  const ListCategories = (): JSX.Element => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            onPress={() => setSelectedCategoryIndex(index)}
            key={index}
            activeOpacity={0.8}
            style={{
              backgroundColor:
                selectedCategoryIndex === index
                  ? COLORS.primary
                  : COLORS.secondary,
              ...styles.categoryBtn,
            }}>
            <View style={styles.categoryBtnImgCon}>
              <Image
                source={category.image}
                style={{height: 35, width: 35, resizeMode: 'cover'}}
              />
            </View>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 15,
                fontWeight: 'bold',
                color:
                  selectedCategoryIndex === index
                    ? COLORS.white
                    : COLORS.primary,
              }}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const Card = (props: PropsCard) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('Details', {food: props.food})}>
        <View style={styles.card}>
          <View style={{alignItems: 'center', top: -40}}>
            <Image
              style={{width: 120, height: 120}}
              source={props.food.image}
            />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              {props.food.name}
            </Text>
            <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
              {props.food.ingredients}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              ${props.food.price}
            </Text>
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                borderRadius: 30,
                backgroundColor: COLORS.primary,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="add" size={20} color={COLORS.white} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.header}>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 28}}>Hello,</Text>
            <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
              ThangLT
            </Text>
          </View>
          <Text style={{marginTop: 5, fontSize: 22, color: COLORS.grey}}>
            What do you want today
          </Text>
        </View>
        <Image
          source={require('../../assets/person.png')}
          style={{width: 50, height: 50, borderRadius: 25}}
        />
      </View>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={styles.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            value={textSearch}
            onChangeText={(text: string) => onSearch(text)}
            style={{flex: 1, fontSize: 18}}
            placeholder="Search for food"
          />
        </View>
        <TouchableOpacity style={styles.sortBtn}>
          <Icon name="tune" size={28} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={item => item.id}
        data={foodData}
        renderItem={({item}) => <Card food={item} navigation={navigation} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 10},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: COLORS.white,
  },
});

export default HomeScreen;
