import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";

function GoalItem({text, deleteGoal, id}) {

    return (
        <View style={styles.containerGoalsStyles}>
            <Pressable 
                onPress={deleteGoal.bind(this, id)}
                android_ripple={{color: '#ddd'}}
                style={({pressed}) => pressed && styles.pressedOpacity}
            >
                <Text style={styles.textGoalsStyles}>
                    - {text}
                </Text>
            </Pressable>
        </View>
      
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    containerGoalsStyles: {
        margin: 8,
        backgroundColor: '#5e0acc',
        borderRadius: 6,
      },
      pressedOpacity: {
        opacity: 0.5
      },
      textGoalsStyles: {
        color: 'white',
        fontSize: 18,
        fontStyle: 'italic',
        padding: 8,
      },
});