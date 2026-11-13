import React, {useState} from 'react';
import {View, Text, Image, Pressable, Modal, Button, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const styles = StyleSheet.create({
    questionContainer: {
        flexDirection: 'column',
        marginBottom: 20,
        padding: 18,
        borderWidth: 2,
        borderColor: '#D8B4C4',
        borderRadius: 20,
        backgroundColor: '#F8E8ED',
        elevation: 4
    },

    questionNumber: {
        alignSelf: 'flex-start',
        fontSize: 19.5,
        fontWeight: 'bold',
        color: '#8D5874',
        marginBottom: 10
    },

    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#633B52',
        marginBottom: 15
    },

    characterImage: {
        width: 200,
        height: 300,
        alignSelf: 'center',
        borderRadius: 15
    },

    hintInstruction: {
        fontSize: 13,
        color: '#8D687B',
        textAlign: 'center',
        fontStyle: 'italic',
        marginTop: 15
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    modalContainer: {
        backgroundColor: '#F8E8ED',
        padding: 20,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#D8B4C4',
        alignItems: 'center',
        width: '88%',
        elevation: 5
    },

    hintTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#633B52',
        marginBottom: 10
    },

    hintDescription: {
        fontSize: 15.5,
        color: '#8D687B',
        textAlign: 'center',
        marginBottom: 15
    },

    hintImage: {
        width: 250,
        height: 250,
        borderRadius: 15,
        marginBottom: 20
    },

    pickerContainer: {
        backgroundColor: '#FFF9FA',
        borderWidth: 1,
        borderColor: '#D8B4C4',
        borderRadius: 13,
        marginTop: 20
    },

    picker: {
        color: '#633B52',
        height: 50
    }
});

const Question = ({number, picture, hintPicture, answer, setAnswer, option1, option2, option3, option4}) => {

    const [showHint, setShowHint] = useState(false);

    return (
        <View style={styles.questionContainer}>

            <Text style={styles.questionNumber}>
                Question {number}
            </Text>

            <Text style={styles.questionText}>
                What is the name of this character?
            </Text>

            {/* Clickable Character Image */}
            <Pressable onPress={() => setShowHint(true)}>
                <Image
                    source={picture}
                    style={styles.characterImage}
                />
            </Pressable>

            <Text style={styles.hintInstruction}>
                ✨ Tap the picture for a hint! ✨
            </Text>

            {/* Hint Pop-up */}
            <Modal
                visible={showHint}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setShowHint(false)}
            >
                <View style={styles.modalOverlay}>

                    <View style={styles.modalContainer}>

                        <Text style={styles.hintTitle}>
                            ✨ Hint! ✨
                        </Text>

                        <Text style={styles.hintDescription}>
                            Here is a scene from the book:
                        </Text>

                        <Image
                            source={hintPicture}
                            style={styles.hintImage}
                        />

                        <Button
                            title="Close Hint"
                            color="#8D5874"
                            onPress={() => setShowHint(false)}
                        />
                    </View>
                </View>
            </Modal>

            {/* Answer Dropdown */}
            <View style={styles.pickerContainer}>

                <Picker
                    selectedValue={answer}
                    onValueChange={(value) => setAnswer(value)}
                    style={styles.picker}
                    dropdownIconColor="#633B52"
                    dropdownIconRippleColor="#F8E8ED"
                    mode="dropdown"
                >
                    <Picker.Item
                        label="Select an answer"
                        value=""
                        color="#8D687B"
                    />

                    <Picker.Item
                        label={option1}
                        value={option1}
                        color="#633B52"
                    />

                    <Picker.Item
                        label={option2}
                        value={option2}
                        color="#633B52"
                    />

                    <Picker.Item
                        label={option3}
                        value={option3}
                        color="#633B52"
                    />

                    {option4 && (
                        <Picker.Item
                            label={option4}
                            value={option4}
                            color="#633B52"
                        />
                    )}
                </Picker>
            </View>
        </View>
    );
};

export default Question;