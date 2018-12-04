import React from 'react';
import { View } from 'react-native';
import { Card, Text, Input, Button, Label } from 'native-base';

const ForgotPassword = (props) => {
    const { viewStyle, cardStyle } = styles;
    return (
        <Card style={cardStyle}>
            <Label>To reset your password, please enter your email address below and click "Reset My Password". A password reset email will be sent to your registered email address.</Label>
            <Input />
            {props.children}
        </Card>

    );
};

const styles = {
    cardStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: 200,
        height: 200
    },
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0,

    }
};

export { ForgotPassword };
