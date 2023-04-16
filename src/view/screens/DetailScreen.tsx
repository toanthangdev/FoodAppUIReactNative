import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SecondaryButton} from '../component/Button';

const DetailsScreen = ({route, navigation}: any) => {
  const {food} = route.params;
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white}}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-ios" size={28} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{justifyContent: 'center', alignItems: 'center', height: 280}}>
          <Image source={food.image} style={{height: 220, width: 220}} />
        </View>
        <View style={styles.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: COLORS.white}}>
              {food.name}
            </Text>
            <View style={styles.iconContainer}>
              <Icon name="favorite-border" color={COLORS.primary} size={25} />
            </View>
          </View>
          <Text style={styles.detailsText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            odit nam voluptatibus dolorem unde repellat temporibus natus,
            laboriosam eius accusamus eveniet, amet incidunt dignissimos iste
            minus similique sunt mollitia repellendus?Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Minima dolores repudiandae dolore
            impedit molestiae voluptate voluptatem consectetur vitae, omnis
            illum nihil fugiat iste quia ducimus earum facilis dicta molestias
            quasi?
          </Text>
          <View style={{marginTop: 40, marginBottom: 40}}>
            <SecondaryButton title="Add To Cart" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 20,
    color: COLORS.white,
  },
});

export default DetailsScreen;
