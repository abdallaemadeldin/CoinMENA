import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react";

export const useSplash = () => {
    const { reset } = useNavigation();

    useEffect(() => {
        setTimeout(() => { reset({ index: 0, routes: [{ name: "Home" }] }) }, 2000)
    }, []);
}