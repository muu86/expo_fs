import React, { Component } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };

    this.loadWallpapers = this.loadWallpapers.bind(this);
  }

  loadWallpapers() {
    axios
      .get("")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log("request completed");
      });
  }

  componentDidMount() {
    this.loadWallpapers();
  }

  render() {
    return this.state.isLoading ? (
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color="grey" />
      </View>
    ) : (
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
        }}
      ></View>
    );
  }
}
