import { StyleSheet, useWindowDimensions } from "react-native";

export const style = () => {
    const { width } = useWindowDimensions();
    return StyleSheet.create({
        container: {
            width: width - 20,
            borderWidth: 1,
            minHeight: 100,
            margin: 10,
            borderRadius: 4,
            borderColor: '#fff',
            padding: 10
        },
        label: {
            fontSize: 20,
            color: '#fff',
            fontWeight: 'bold',
            marginBottom: 10,
        }
    })
};