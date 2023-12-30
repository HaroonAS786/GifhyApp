import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getStyles } from './style'
import LayoutContainer from '../../../components/LayoutContainer'
import useGifs from '../../../hooks/useGifs'
import GifhyCard from './components/GifhyCard'
import SearchBar from '../../../components/SearchBar'
import { themeColors } from '../../../config/colors'
import Spacer from '../../../components/Spacer'
import { SCREEN_HEIGHT } from '../../../config/typography'

const GifhyListScreen = (props) => {

    const styles = getStyles();
    const { getGifs } = useGifs();
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState("cheeseburgers"); 
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const delay = (ms) => new Promise(res => setTimeout(res, ms));
        const fetchData = async () => {
            try {
                setLoading(true);
                const result = await getGifs(searchValue);
                setData(result);
            } catch (error) {
                console.log(error, 'error--');
            } finally {
                setLoading(false);
            }
        };
        const delayedSearch = async () => {
            await delay(500);
            fetchData();
        };
        delayedSearch();
    }, [searchValue]);

    return (
        <LayoutContainer noHeight>
            <View style={styles.container}>
                <Spacer height={SCREEN_HEIGHT * 0.04} />
                <SearchBar searchText={searchValue} onSearch={(val) => setSearchValue(val)} />
                {loading ? (
                    <ActivityIndicator size={35} color={themeColors.primary} />
                ) : (
                    <FlatList
                        disableScroll={false}
                        showsVerticalScrollIndicator={false}
                        data={data.data}
                        renderItem={({ item, index }) => (
                            <GifhyCard key={index} item={item} index={index} />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                )}
            </View>
        </LayoutContainer>
    );
};

export default GifhyListScreen;
