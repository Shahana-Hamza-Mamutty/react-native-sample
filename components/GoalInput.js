import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = value => {
    setEnteredGoal(value);
  };

  const goalInputHandlerWithClear = () => {
    console.log("=====", enteredGoal);
    props.goalHandler(enteredGoal);
    setEnteredGoal("");
  };
  return (
    <Modal visible={props.visibleModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={goalInputHandlerWithClear} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10
  },
  inputContainer: {
    flex: 1,
    padding: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default GoalInput;
