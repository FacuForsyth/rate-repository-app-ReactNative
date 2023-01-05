import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter } from 'react-router-native';
import Main from './src/components/Main';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient.js';

const apolloClient = createApolloClient();

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <StatusBar style='light' />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </ApolloProvider>
  );
};