import React from "react";
import { View } from "react-native";
import RepositoryList from "./RepositoryList.jsx";
import AppBar from "./AppBar.jsx";
import { Routes, Route, Redirect } from "react-router-native";
import LogInPage from "../pages/LogIn.jsx";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/signin' element={<LogInPage />} />
        
        {/* <Route path='/signin' >
          <Text>Working on it</Text>
        </Route> */}
        {/* <Redirect to='/' /> */}
      </Routes>
    </View>
  )
};

export default Main;

//"react-router-native": "^5.2.0"