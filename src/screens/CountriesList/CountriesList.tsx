import React, { memo } from 'react';
import { FlatList, Text, TextInput, View, ActivityIndicator, Modal, TouchableOpacity } from 'react-native';
import Card from 'src/components/Card/Card';
import { useCountries } from 'src/hooks';
import { style } from './style';

const CountriesList = () => {
    const { container, indicator, contentContainerStyle, input, inputHolder, empty, sortBtn, overlay, pickerView, header, btn, labelHolder, resetBtn } = style();
    const { list, isLoading, visible, setVisible, search, setOptions, sort } = useCountries();

    setOptions({
        headerRight: () => (<Text style={sortBtn} onPress={() => setVisible(true)}>Sort</Text>)
    });

    const renderItem = ({ item }: any) => <Card {...item} />
    const renderEmpty = () => <Text style={empty}>No results found.</Text>

    return (
        <View style={container}>
            <View style={inputHolder}>
                <TextInput
                    placeholder="Search..."
                    style={input}
                    onChangeText={search}
                />
            </View>
            {isLoading ? <ActivityIndicator color="#fff" style={indicator} /> : <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={(_, i) => i.toString()}
                contentContainerStyle={contentContainerStyle}
                ListEmptyComponent={renderEmpty}
            />}

            <Modal visible={visible} transparent animationType="slide" onDismiss={() => setVisible(false)}>
                <TouchableOpacity style={overlay} onPress={() => setVisible(false)} activeOpacity={1} />
                <View style={pickerView}>
                    <View style={labelHolder}>
                        <Text style={header}>Sort By</Text>
                        <Text style={resetBtn} onPress={() => sort('reset')}>Reset</Text>
                    </View>
                    <TouchableOpacity style={btn} onPress={() => sort('recovered')}>
                        <Text>Recovered</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btn} onPress={() => sort('deaths')}>
                        <Text>Deaths</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btn} onPress={() => sort('active')}>
                        <Text>Active</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}

export default memo(CountriesList);