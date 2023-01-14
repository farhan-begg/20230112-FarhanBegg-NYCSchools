import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Card, Text } from 'react-native-paper';

const SchoolsSat = ({ route }) => {
  // get dbn to make request to api
  const satObject = route.params.dbn;
  const getStats = `https://data.cityofnewyork.us/resource/f9bf-2cp4.json?dbn=${satObject}`;
  const getAllStats = async () => {
    const response = await axios.get(getStats);
    return response.data[0];
  };
  const UseGetAllStats = () => {
    const { isLoading, data, error } = useQuery(['allStats'], getAllStats);
    return { data, isLoading, error };
  };
  const { data, isLoading, error } = UseGetAllStats();
  if (isLoading || !data) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message} </Text>;
  }
  // grab fields from data
  const {
    school_name,
    sat_math_avg_score,
    sat_writing_avg_score,
    num_of_sat_test_takers,
    sat_critical_reading_avg_score,
  } = data;
  return (
    <Card>
      <Card.Title title={school_name} subtitle="Sat Scores" />
      <Card.Content>
        <Text variant="bodyMedium">
          SAT Math Avg Score: {sat_math_avg_score}
        </Text>
        <Text variant="bodyMedium">
          SAT Writing Avg Score: {sat_writing_avg_score}
        </Text>
        <Text variant="bodyMedium">
          SAT Critical Reading Avg Score: {sat_critical_reading_avg_score}
        </Text>
        <Text variant="bodyMedium">
          Number of Test Takers: {num_of_sat_test_takers}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default SchoolsSat;
