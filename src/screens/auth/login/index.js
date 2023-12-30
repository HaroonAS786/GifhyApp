import { View, Text } from 'react-native'
import React from 'react'
import { getStyles } from './style'
import LayoutContainer from '../../../components/LayoutContainer'

const LoginScreen = (props) => {
    const styles = getStyles()

    return (
        <LayoutContainer>
            <Text>LoginScreen</Text>
        </LayoutContainer>
    )
}

export default LoginScreen