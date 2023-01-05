import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import useRepositories from "../hooks/useRepositories";
//import repositories from "../data/repositories";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return (
    <FlatList 
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => (
        <RepositoryItem {...repo} />
      )}
    />
  )
};

export default RepositoryList;