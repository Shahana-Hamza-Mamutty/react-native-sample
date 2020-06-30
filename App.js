import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoals, setEnteredGoals] = useState([]);
  const [showModal, setShowModal] = useState([]);

  const addGoalHandler = goal => {
    setEnteredGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: goal }
    ]);
    console.log("=====================", enteredGoals);
    setShowModal(false);
  };

  const removeGoalHandler = goalId => {
    setEnteredGoals(currentGoals =>
      currentGoals.filter(goal => goal.key !== goalId)
    );
  };

  return (
    <View style={styles.screen}>
      <Button title="ADD" onPress={() => setShowModal(true)} />
      <GoalInput goalHandler={addGoalHandler} visibleModal={showModal} />
      <FlatList
        data={enteredGoals}
        renderItem={itemData => (
          <GoalItem
            goalId={itemData.item.key}
            title={itemData.item.value}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  textInput: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  listContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#ccc",
    marginVertical: 10
  }
});
