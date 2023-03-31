import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import colors from '../config/colors';
import defaultStyles from '../config/Styles'

function AppText({ children, style,...otherProps }) {
    return (
        <Text style={[defaultStyles.text, style]} {...otherProps}>
            {children}
        </Text>
    );
}



export default AppText;