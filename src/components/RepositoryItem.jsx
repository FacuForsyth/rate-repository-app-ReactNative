import React from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 20, 
    /* paddingBottom: 5, 
    paddingTop: 5 */
    paddingVertical: 5 //es lo mismo que hacer lo de arriba
  },
  strong: { 
    fontWeight: 'bold', 
    marginBottom: 5 
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    /* backgroundColor: Platform.OS === 'android' ? 'green' : theme.colors.primary, */
    backgroundColor: Platform.select({
      android: 'green',
      ios: theme.colors.primary,
      default: 'red'  //por ejemplo para web
    }),
    alignSelf: 'flex-start', //el fondo solo se utiliza al espacio del elemento
    marginBottom: 4,
    marginTop: 4,
    borderRadius: 4,
    overflow: 'hidden'
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4
  }
});

const RepositoryItemHeader = (props) => (
  <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
    </View>
    <View style={{ flex: 1 }}>
      <StyledText fontWeight='bold'>{props.fullName}</StyledText>
      <StyledText color='secondary'>{props.description}</StyledText>
      <StyledText style={styles.language}>{props.language}</StyledText>
    </View>
  </View>
);

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemHeader {...props} />
    <RepositoryStats {...props} />
  </View>
);

export default RepositoryItem;