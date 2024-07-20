import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useQuery } from 'react-query';
import { getApartment } from '../network/services/apartments.service';
import { formatNumber } from '../network/services/numbers.service';

const ApartmentScreen = ({ route }: any) => {
  const apartmentId = route.params.apartmentId;
  const { data: apartment, refetch, isFetching } = useQuery(
    ['get-apartment', apartmentId],
    () => getApartment(apartmentId)
  );

  return (
    apartment && (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
            <Image
                source={require('../assets/Screenshot_11.png')}
                style={styles.headerPicture}
            />
            <View style={styles.header}>
                <Image
                source={require('../assets/palmhills.webp')}
                style={styles.logo}
                />
                <View style={styles.headerTextContainer}>
                <View>
                    <Text style={styles.apartmentName}>{apartment.data.name}</Text>
                    <Text style={styles.neighbourhood}>{apartment.data.neighbourhood}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Price</Text>
                    <Text style={styles.price}>{formatNumber(apartment.data.totalPrice)} EGP</Text>
                </View>
                </View>
            </View>

            <View style={styles.grid}>
                <View>
                <Text style={styles.title}>Villa</Text>
                <View style={styles.divider}></View>
                <View style={styles.infoContainer}>
                    <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Bedrooms</Text>
                    <Text style={styles.infoValue}>{apartment.data.bedrooms}</Text>
                    </View>
                    <View style={styles.infoRowAlt}>
                    <Text style={styles.infoLabel}>Bathrooms</Text>
                    <Text style={styles.infoValue}>{apartment.data.bathrooms}</Text>
                    </View>
                    <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Delivery In</Text>
                    <Text style={styles.infoValue}>{apartment.data.delivery}</Text>
                    </View>
                    <View style={styles.infoRowAlt}>
                    <Text style={styles.infoLabel}>Compound</Text>
                    <Text style={styles.infoValue}>{apartment.data.compound}</Text>
                    </View>
                    <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Finishing</Text>
                    <Text style={styles.infoValue}>{apartment.data.finished ? 'Finished' : 'Not Finished'}</Text>
                    </View>
                </View>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Payment Plans</Text>
                <View style={styles.paymentPlans}>
                <View style={styles.paymentBox}>
                    <Text style={styles.paymentAmount}>{formatNumber(apartment.data.monthlyInstallments)}</Text>
                    <Text style={styles.paymentAmount}>Monthly</Text>
                </View>
                <View style={styles.paymentBox}>
                    <Text style={styles.paymentDescription}>{formatNumber(apartment.data.downPayment)} - Down Payment</Text>
                </View>
                <View style={styles.paymentBox}>
                    <Text style={styles.paymentYears}>{apartment.data.installmentsYears} Years</Text>
                </View>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>About Villa</Text>
                <Text style={styles.about}>{apartment.data.about}</Text>
            </View>
        </ScrollView>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 150,
    width: '100%',
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  headerPicture: {
    height: 150,
    width: '100%'
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  apartmentName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  neighbourhood: {
    fontSize: 12,
    color: 'black',
  },
  label: {
    fontSize: 16,
    color: 'black',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  divider: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    marginTop: 2,
    width: '95%'
  },
  infoContainer: {
    marginTop: 2,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
    backgroundColor: '#eee',
    height: 35,
    alignItems: 'center',
    width: '95%'
  },
  infoRowAlt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
    height: 35,
    alignItems: 'center',
    width: '95%'
  },
  infoLabel: {
    fontWeight: '600',
  },
  infoValue: {
    fontWeight: '600',
  },
  section: {
    flexDirection: 'column',
    width: '100%',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '600',
  },
  paymentPlans: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 10
  },
  paymentBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#666',
    gap: 5
  },
  paymentAmount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  paymentLabel: {
    fontSize: 12,
    color: 'black',
  },
  paymentDescription: {
    fontSize: 20,
  },
  paymentYears: {
    fontSize: 20,
    fontWeight: '600',
  },
  about: {
    fontSize: 20,
  },
});

export default ApartmentScreen;

