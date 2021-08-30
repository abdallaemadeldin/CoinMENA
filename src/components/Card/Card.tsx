import React from 'react';
import { Text, useWindowDimensions, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { ICard } from './types';
import { style } from './style';

export default (item: ICard) => {
    const { container, label } = style();
    const { width } = useWindowDimensions();
    const data = [
        {
            name: "NewConfirmed",
            population: item.NewConfirmed,
            color: 'cyan',
            legendFontColor: "#7F7F7F",
            legendFontSize: 10,
        },
        {
            name: "NewDeaths",
            population: item.NewDeaths,
            color: 'blue',
            legendFontColor: "#7F7F7F",
            legendFontSize: 10
        },
        {
            name: "NewRecovered",
            population: item.NewRecovered,
            color: 'red',
            legendFontColor: "#7F7F7F",
            legendFontSize: 10
        },
        {
            name: "TotalConfirmed",
            population: item.TotalConfirmed,
            color: 'green',
            legendFontColor: "#7F7F7F",
            legendFontSize: 10
        },
        {
            name: "TotalDeaths",
            population: item.TotalDeaths,
            color: 'gray',
            legendFontColor: "#7F7F7F",
            legendFontSize: 10
        },
        {
            name: "TotalRecovered",
            population: item.TotalRecovered,
            color: 'black',
            legendFontColor: "#7F7F7F",
            legendFontSize: 10
        }
    ];
    const chartConfig = { color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})` };

    return (
        <View style={container} testID={"Card"}>
            {item?.Country && <Text style={label}>{item.Country}</Text>}

            <PieChart
                data={data}
                width={width - 40}
                height={180}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                absolute
                paddingLeft="0"
            />
        </View>
    );
};