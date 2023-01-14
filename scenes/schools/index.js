import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { UseGetAllSchools } from '../../hooks/fetchSchoolsApi';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Pagination from '../../components/Pagination';
import { styles } from '../../styles/index.js';

const Schools = () => {
  const { data, isLoading, fetchNextPage, fetchPrevPage, error } =
    UseGetAllSchools();
  const navigation = useNavigation();
  // pass down dbn to school sat component
  const handlePress = (dbn) => {
    navigation.navigate('SchoolsSat', { dbn });
  };

  const RenderItem = ({ item }) => (
    <View style={styles.schoolsContainer}>
      <View style={styles.schoolsInnerContainer}>
        <Text style={{ fontSize: 15, marginRight: 5 }}>School Name:</Text>
        <Text style={{ fontSize: 12 }}>{item.school_name}</Text>
      </View>
      <TouchableOpacity>
        <Button onPress={() => handlePress(item.dbn)} style={{ marginTop: 4 }}>
          See More
        </Button>
      </TouchableOpacity>
    </View>
  );
  if (isLoading || !data) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }
  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={(item) => item.dbn}
        data={data}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (isLoading ? <Text>Loading...</Text> : null)}
        renderItem={({ item }) => <RenderItem item={item} />}
      />
      <View>
        <Pagination onNext={fetchNextPage} onPrev={fetchPrevPage} />
      </View>
    </SafeAreaView>
  );
};

export default Schools;
