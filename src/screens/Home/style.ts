import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const style = () => {
    const { top, bottom } = useSafeAreaInsets();

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#081e39',
            paddingTop: top + 10,
        },
        header: {
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center'
        },
        indicator: {
            marginTop: '30%'
        },
        contentContainerStyle: {
            paddingBottom: bottom + 10
        },
        label: {
            fontSize: 20,
            color: '#fff',
            fontWeight: 'bold',
            flex: 1,
        },
        labelHolder: {
            margin: 15,
            flexDirection: 'row',
            alignItems: 'center'
        },
        seeMoreBtn: {
            color: '#fff',
            textDecorationLine: 'underline'
        }
    });
}