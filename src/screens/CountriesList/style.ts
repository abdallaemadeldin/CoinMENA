import { StyleSheet, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useHeaderHeight } from '@react-navigation/elements';

export const style = () => {
    const { bottom } = useSafeAreaInsets();
    const headerHeight = useHeaderHeight();
    const { height, width } = useWindowDimensions();

    return StyleSheet.create({
        container: {
            width,
            height: height - headerHeight,
            backgroundColor: '#081e39',
        },
        indicator: {
            marginTop: '30%'
        },
        contentContainerStyle: {
            paddingBottom: bottom + 10
        },
        input: {
            flex: 1,
            color: '#000'
        },
        inputHolder: {
            width: '95%',
            height: 50,
            backgroundColor: '#fff',
            alignSelf: 'center',
            marginVertical: 10,
            borderWidth: 4,
            paddingHorizontal: 8,
            overflow: 'hidden'
        },
        empty: {
            color: '#fff',
            fontSize: 16,
            textAlign: 'center',
            marginTop: '30%'
        },
        sortBtn: {
            color: '#fff',
            fontWeight: 'bold'
        },
        overlay: {
            backgroundColor: '#0005',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        },
        pickerView: {
            width,
            height: 230 + bottom,
            backgroundColor: '#fff',
            position: 'absolute',
            bottom: 0,
            zIndex: 1,
            padding: 10,
        },
        header: {
            fontSize: 20,
            color: '#000',
            fontWeight: 'bold',
            flex: 1,
        },
        btn: {
            width: '95%',
            alignSelf: 'center',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f1f1f1',
            borderRadius: 4,
            marginVertical: 4
        },
        labelHolder: {
            flexDirection: 'row',
            marginBottom: 10,
            alignItems: 'center'
        },
        resetBtn: {
            color: 'red',
            fontWeight: 'bold',
        }
    });
}