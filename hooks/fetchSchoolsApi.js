import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import React, { useState } from 'react';




export const UseGetAllSchools = () => {

  const [page, setPage] = useState(1)
  const getSchoolsUrl = `https://data.cityofnewyork.us/resource/s3k6-pzi2.json?$offset=${(page - 1) * 10}`
  const getAllSchools = async (_key, page) => {
    const response = await axios.get(getSchoolsUrl);
    return response.data;
  }
  const { isLoading, data, error } = useQuery(['allSchools', page], getAllSchools,
  );
  return { data, isLoading, fetchNextPage: () => setPage(page + 1), fetchPrevPage: () => setPage(page - 1) }
}

