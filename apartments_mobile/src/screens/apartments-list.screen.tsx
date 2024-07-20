import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { useQuery } from 'react-query';
import useNavigation from '../hooks/useNavigation';
import { ApartmentsStack } from '../navigation/apartments/apartments.stack';
import { IApartmentListDetials } from '_models/apartments-list.model';
import { getApartments } from '../network/services/apartments.service';
import { formatNumber } from '../network/services/numbers.service';

const ApartmentsListScreen = () => {
	const navigation = useNavigation();

	const { data: apartments, refetch, isFetching } = useQuery(
		['get-apartments'],
		() => getApartments()
	);

	function goToApartment(id: string) {
		navigation.navigate(ApartmentsStack.menuList?.ApartmentDetails.id, {apartmentId: id});
	}

  const renderApartment = ({ item: apartment }: { item: IApartmentListDetials}) => (
    <TouchableOpacity style={styles.card} onPress={() => {goToApartment(apartment._id)}}>
      <View style={styles.imageContainer}>
      	<Image source={require("../assets/Screenshot_11.png")} style={styles.image}/>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{apartment.name}</Text>
          <Text style={styles.neighbourhood}>{apartment.neighbourhood}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailBox}>
            <Text style={styles.detailText}>{apartment.bedrooms} Bedrooms</Text>
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.detailText}>{apartment.bathrooms} Bathrooms</Text>
          </View>
        </View>
		<View style={styles.bottomContainer}>
			<View>
				<Text style={styles.name}>{formatNumber(apartment.totalPrice)} EGP</Text>
			</View>
			<View style={styles.deliveryContainer}>
				<Text>Delivery in</Text>
				<Text>{apartment.delivery}</Text>
			</View>
		</View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {apartments && <FlatList
        data={apartments.data}
        renderItem={renderApartment}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.list}
        refreshing={isFetching}
        onRefresh={refetch}
      />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
	justifyContent: 'center',
	width: '100%'
  },
  list: {
    width: '70%',
	alignSelf: 'center'
  },
  card: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    overflow: 'hidden',
    marginBottom: 16,
	width: "100%"
  },
  imageContainer: {
    height: 200,
    width: '100%',
	minWidth: 200,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover'
  },
  infoContainer: {
    backgroundColor: 'white',
    height: 160,
    padding: 16,
	gap: 8
  },
  textContainer: {
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
  },
  neighbourhood: {
    fontSize: 12,
    color: '#6e6e6e',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
	gap: 8
  },
  detailBox: {
    borderRadius: 4,
    backgroundColor: '#f0f0f0',
    width: 'auto',
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
	padding: 4
  },
  detailText: {
    fontSize: 12,
    color: '#666666',
  },
  deliveryContainer: {
	display: "flex",
	flexDirection: "column"
  },
  bottomContainer: {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: "space-between",
	alignItems: "center"
  }
});

export default ApartmentsListScreen;

