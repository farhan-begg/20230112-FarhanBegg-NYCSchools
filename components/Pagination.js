import React from 'react'
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Card, Text } from 'react-native-paper';


const Pagination = ({ onNext, onPrev }) => (
  <SafeAreaView>
    <Card style={{ height: 200, width: "100%", position: "relative", bottom: 50 }}>
      <View style={{ display: "flex", flexDirection: 'row', width: "80%", justifyContent: "space-between", marginTop: 15 }}>
        <TouchableOpacity onPress={onPrev} style={{ display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", width: 200 }}>
          <Text>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onNext}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </Card>
  </SafeAreaView>
);


export default Pagination