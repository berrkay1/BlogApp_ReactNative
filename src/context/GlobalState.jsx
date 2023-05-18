import React, { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    const [data, setData] = useState([]); //the state where we store the retrieved data
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(0); // for pagination
    const [refreshing, setRefreshing] = useState(false); // for pull reflesh



    const fetchApi = async () => {
        try {
            const res = await fetch(`https://www.lenasoftware.com/api/v1/en/maestro/1?page=${currentPage}&count=10`);
            const resData = await res.json()
            setData([...data, ...resData.result]);
            setLoading(false);
            setError(false);
            setRefreshing(false);
        } catch (error) {
            setError(true);
            setRefreshing(false);
        }
    }

    useEffect(() => {
        fetchApi()
    }, [currentPage])

    const loadMoreItem = () => {
        setCurrentPage(currentPage + 1)
    }

    const onRefresh = () => {
        setRefreshing(true);
        setCurrentPage(0);
        setData([]);
        fetchApi();
    }

    const value = {
        data,
        loading,
        error,
        loadMoreItem,
        currentPage,
        refreshing,
        onRefresh,
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

