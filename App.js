import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import Question from './components/Questions';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#FAF3EB'
    },

    title: {
        fontSize: 27,
        fontWeight: 'bold',
        color: '#633B52',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10
    },

    subtitle: {
        fontSize: 15.5,
        color: '#8D687B',
        textAlign: 'center',
        marginBottom: 20,
        fontStyle: 'italic'
    },

    submitButton: {
        backgroundColor: '#8D5874',
        padding: 16,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 40,
        elevation: 4
    },

    submitText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold'
    }

});

const AllQuestions = () => {
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');

    const checkAnswers = () => {
        let score = 0;

        if (answer1 == 'Rowan Whitethorn') {
            score = score + 1;
        }

        if (answer2 == 'Xaden Riorson') {
            score = score + 1;
        }

        if (answer3 == 'Manon Blackbeak') {
            score = score + 1;
        }

        if (answer4 == 'Cyrus of Nara') {
            score = score + 1;
        }

        Alert.alert(
            'Quiz Result',
            'You have ' + score + ' correct answers!'
        );
    };

    return (
        <ScrollView style={styles.container}>

            <Text style={styles.title}>
                ✨ Book Character Quiz ✨
            </Text>

            <Text style={styles.subtitle}>
                Guess the names of your favourite book characters!
            </Text>

            <Question
                number={1}
                picture={{
                    uri: 'https://i.pinimg.com/736x/78/4f/0a/784f0a6b8344d900cade2ea8dd6227c8.jpg'
                }}
                hintPicture={{
                    uri: 'https://i.pinimg.com/1200x/98/40/4d/98404dc00b70feeb7c7c03dbc871c12d.jpg'
                }}
                answer={answer1}
                setAnswer={setAnswer1}
                option1="Dorian Havilliard"
                option2="Lorcan Salvatore"
                option3="Rowan Whitethorn"
            />

            <Question
                number={2}
                picture={{
                    uri: 'https://i.pinimg.com/736x/b0/e9/3d/b0e93da391fd244501928c92a482c4cf.jpg'
                }}
                hintPicture={{
                    uri: 'https://i.pinimg.com/736x/6f/8e/fc/6f8efc9fdcbcfdb68f5ef414a7527da5.jpg'
                }}
                answer={answer2}
                setAnswer={setAnswer2}
                option1="Xaden Riorson"
                option2="Liam Mairi"
                option3="Dain Aetos"
            />

            <Question
                number={3}
                picture={{
                    uri: 'https://i.pinimg.com/736x/2b/df/a3/2bdfa36a8401907d32a315a3ea1acdc0.jpg'
                }}
                hintPicture={{
                    uri: 'https://i.pinimg.com/736x/60/c9/03/60c903afe2ef11b4503747b227ce90b7.jpg'
                }}
                answer={answer3}
                setAnswer={setAnswer3}
                option1="Elide Lochan"
                option2="Manon Blackbeak"
                option3="Yrene Westfall"
            />

            <Question
                number={4}
                picture={{
                    uri: 'https://i.pinimg.com/736x/f9/82/43/f98243d568ab846c1c57655771abc228.jpg'
                }}
                hintPicture={{
                    uri: 'https://i.pinimg.com/736x/24/0f/6d/240f6dc800e4bc7b34fa3c85efd6dad1.jpg'
                }}
                answer={answer4}
                setAnswer={setAnswer4}
                option1="Prince Kamran"
                option2="Cyrus of Nara"
                option3="King Zaal"
            />

            <TouchableOpacity
                style={styles.submitButton}
                onPress={checkAnswers}
            >
                <Text style={styles.submitText}>
                    ✨ Submit Answers ✨
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default AllQuestions;