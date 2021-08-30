import React, { memo } from 'react';
import { FlatList, Text, View, ActivityIndicator } from 'react-native';
import Card from 'src/components/Card/Card';
import { ICard } from 'src/components/Card/types';
import { useHome } from 'src/hooks';
import { style } from './style';

const Home = () => {
    const { container, header, indicator, contentContainerStyle, label, labelHolder, seeMoreBtn } = style();
    const { list, isLoading, navigate } = useHome();

    const renderItem = ({ item }: any) => {
        return (
            <>
                <View style={labelHolder}>
                    <Text style={label}>{item.label}</Text>
                    {item.seeMore && <Text style={seeMoreBtn} onPress={() => navigate("CountriesList")}>See more</Text>}
                </View>
                {item.data.map((country: ICard, index: number) => {
                    return <Card key={index} {...country} />
                })}
            </>
        );
    }

    return (
        <View style={container}>
            <Text style={header}>Home</Text>
            {isLoading ? <ActivityIndicator color="#fff" style={indicator} /> : <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={(_, i) => i.toString()}
                contentContainerStyle={contentContainerStyle}
            />}
        </View>
    );
}

export default memo(Home);