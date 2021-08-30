import { useNavigation } from "@react-navigation/native"
import { useQuery } from "react-query";

export const useHome = () => {
    const { navigate } = useNavigation();
    const fetchCountries = () => fetch('https://api.covid19api.com/summary').then(res => res.json())
    const { data, isLoading } = useQuery('Summary', () => fetchCountries());

    const sort = (a: { TotalConfirmed: number }, b: { TotalConfirmed: number }) => {
        if (a.TotalConfirmed > b.TotalConfirmed) return -1;
        if (a.TotalConfirmed < b.TotalConfirmed) return 1;
        return 0;
    }

    return { list: [{ label: "Global", data: [data?.Global], seeMore: false }, { label: "Countries", data: data?.Countries.sort(sort).slice(0, 5), seeMore: true }], isLoading, navigate };
}