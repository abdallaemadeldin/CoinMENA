import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export const useCountries = () => {
    const { setOptions } = useNavigation();
    const fetchCountries = () => fetch('https://api.covid19api.com/summary').then(res => res.json())
    const { data, isLoading } = useQuery('Summary', () => fetchCountries());
    const [list, setList] = useState([]);
    const [visible, setVisible] = useState(false);
    const countries = data.Countries;

    useEffect(() => {
        if (!isLoading) setList(countries);
    }, [isLoading]);

    const search = (key: string) => {
        if (!key) setList(countries);
        else setList(countries.filter((country: any) => country.Country.toLowerCase().includes(key.toLowerCase())));
    }

    const sortByActive = (a: { TotalConfirmed: number }, b: { TotalConfirmed: number }) => {
        if (a.TotalConfirmed > b.TotalConfirmed) return -1;
        if (a.TotalConfirmed < b.TotalConfirmed) return 1;
        return 0;
    }
    const sortByDeaths = (a: { TotalDeaths: number }, b: { TotalDeaths: number }) => {
        if (a.TotalDeaths > b.TotalDeaths) return -1;
        if (a.TotalDeaths < b.TotalDeaths) return 1;
        return 0;
    }
    const sortByRecoverd = (a: { TotalRecovered: number }, b: { TotalRecovered: number }) => {
        if (a.TotalRecovered > b.TotalRecovered) return -1;
        if (a.TotalRecovered < b.TotalRecovered) return 1;
        return 0;
    }

    const sort = (type: any) => {
        if (type === 'active') setList(st => st.sort(sortByActive))
        else if (type === 'deaths') setList(st => st.sort(sortByDeaths))
        else if (type === 'recovered') setList(st => st.sort(sortByRecoverd))
        else setList([...list]);

        setVisible(false);
    }

    return { list, isLoading, visible, setVisible, search, setOptions, sort };
}