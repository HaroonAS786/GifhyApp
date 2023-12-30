import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import SearchIcon from '../assets/svgs/Search';
import Spacer from './Spacer';

const SearchBar = ({ onSearch, searchText }) => {


    const handleSearch = (val) => {
        onSearch(val);
    };

    return (
        <View style={styles.container}>
            <SearchIcon />
            <Spacer width={6}/>
            <TextInput
                style={styles.input}
                maxLength={50}
                placeholder="Search..."
                value={searchText}
                onChangeText={handleSearch}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: "#F3F3F3",
        borderRadius: 8,
        height: 44,
        borderWidth: 1,
        borderColor: '#ccc',
        margin: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 8,
    },
    button: {
        padding: 10,
    },
});