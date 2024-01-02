import _debounce from 'lodash/debounce'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'

import CustomText from '../../../components/CustomText'
import SearchBar from '../../../components/SearchBar'
import Spacer from '../../../components/Spacer'
import { themeColors } from '../../../config/colors'
import { SCREEN_HEIGHT } from '../../../config/typography'
import useGifs from '../../../hooks/useGifs'
import GifhyCard from './components/GifhyCard'
import { getStyles } from './style'
import useLoading from '../../../hooks/useLoading'

const GifhyListScreen = (props) => {

    const styles = getStyles();
    const { getGifs } = useGifs();
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const { isLoading, startLoading, stopLoading } = useLoading()

    useEffect(() => {
        fetchData(searchValue);
    }, [searchValue]);

    const fetchData = async (value) => {
        try {
            const result = await getGifs(value);
            setData(result);
        } catch (error) {
            console.log(error, 'error--');
        } finally {
            stopLoading();
        }
    };

    const debouncedFetchData = _debounce(fetchData, 500);

    const handleSearch = (value) => {
        setSearchValue(value);
        startLoading();
        debouncedFetchData(value);
    }

    return (

        <View style={styles.container}>
            <Spacer height={SCREEN_HEIGHT * 0.09} />
            <SearchBar searchText={searchValue} onSearch={(val) => handleSearch(val)} />

            {data?.data?.length > 0 ? isLoading ? (
                <ActivityIndicator size={35} color={themeColors.primary} />
            ) : (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 220 }}
                    data={data.data}
                    renderItem={({ item, index }) => (
                        <GifhyCard
                            key={index}
                            item={item}
                            index={index}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            ) :
                <View style={styles.noGifCon}>
                    <CustomText color={themeColors.black} body semiBold>No GIF Yet</CustomText>
                </View>
            }
        </View>


    );
};

export default GifhyListScreen;
