import React from 'react';
import Lottie from 'lottie-react-native';

const ErrorAlert = () => {
    return (
        <Lottie source={require('../../../assets/error.json')} autoPlay loop />
    );
}

export default ErrorAlert