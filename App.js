import { useState } from 'react';
import { 
StyleSheet, Text, View, 
Button, TextInput, ScrollView,
FlatList, Modal, Image } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [textGoal, setTextGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  }

  const goalInputHandler = (enteredText) => {
    setTextGoal(enteredText);
  }
  const addGoalHandler = () => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, {text: textGoal, id: Math.random().toString()}
    ]);
    endAddGoalHandler();
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <Modal visible={modalIsVisible} animationType="slide">
          <View style={styles.inputContainer}>
            <Image
              style={styles.imageStyles}
              source={require('./assets/images/goal.png')}
            />
            <GoalInput
              placeholder='Your course goal'
              goalInputHandler={goalInputHandler}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.buttonStyles}>
                <Button 
                  color='#b180f0'
                  title='ADD GOAL'
                  onPress={addGoalHandler}
                />
              </View>
              <View style={styles.buttonStyles}>
                <Button
                  color='#f31282'
                  title='Cancel'
                  onPress={endAddGoalHandler}
                />
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.goalsContainer}>
          <FlatList 
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.id} 
                  text={itemData.item.text}
                  deleteGoal={deleteGoalHandler}
                />
              )
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  imageStyles: {
    width: 100,
    height: 100,
    margin: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 8
  },
  buttonStyles: {
    width: '30%',
    marginHorizontal: 8
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    padding: 5
  },
  goalsContainer: {
    flex: 4,
  },
});
