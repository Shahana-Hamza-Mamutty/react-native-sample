import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.goalId)}>
      <View style={styles.listContainer}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#ccc",
    marginVertical: 10
  }
});

export default GoalItem;
