import React, { useEffect, useState, useTransition } from 'react'
import { CountryData } from '../api/PostApi';
import Loading from '../Components/Layout/UI/Loading';
import CountryCard from '../Components/Layout/CountryCard';
import { SearchFilter } from '../Components/Layout/UI/SearchFilter';

function Country() {
    const [isPending, setTransition] = useTransition();
    const [countries, setCountries] = useState([]);

    const [search, setSearch] = useState();
    const [filter, setFilter] = useState("all");


    useEffect(() => {
        setTransition(async () => {
            const res = await CountryData();
            setCountries(res.data)
        })
    }, [])
    if (isPending) return <Loading />

    const searchCountry = (country) => {
        if (search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return country;
    };

    const filterRegion = (country) => {
        if (filter === "all") return country;
        return country.region === filter;
    };


    const filterCountries = countries.filter(
        (country) => searchCountry(country) && filterRegion(country)
    );

    return (
        <section className="country-section">
            <SearchFilter
                search={search}
                setSearch={setSearch}
                filter={filter}
                setFilter={setFilter}
                countries={countries}
                setCountries={setCountries}
            />

            <ul className="grid grid-four-cols">
                {filterCountries.map((curCountries, index) => {
                    return <CountryCard key={index} country={curCountries} />
                })}
            </ul>
        </section>
    );
}

export default Country