import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './LoginForm';

class FirebaseAuth extends Component {
    state = { loggedIn: null };

    componentWillMount() {
       firebase.initializeApp({
        apiKey: "AIzaSyAj0xZgmdWIK9Xdmz3wruKPAhBp0kpYnBI",
        authDomain: "miabot-8a289.firebaseapp.com",
        databaseURL: "https://miabot-8a289.firebaseio.com",
        projectId: "miabot-8a289",
        storageBucket: "miabot-8a289.appspot.com",
        messagingSenderId: "967826691281"
       }); 

       firebase.auth().onAuthStateChanged((user) => {
           if (user) {
               this.setState({ loggedIn: true });
           } else {
               this.setState({ loggedIn: false });
           }
           });
    }

    renderContent() {
            switch (this.state.loggedIn) {
                case true:
                    return (
                        <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                        </Button>
                    );

                case false:
                    return <LoginForm />;

                default:
                    return <LoginForm />;
            }
        }
    
    render() {
        return (
            <View style={styles.container}>
                {this.renderContent()}
            </View>
        );
    }  
}

const styles = {
    container: {
        flex: 1
    }
};

export default FirebaseAuth;
