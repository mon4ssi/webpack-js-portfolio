import { useState, useEffect } from 'react'

const API = process.env.API

export const useRandomUser = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [person, setPerson] = useState()

    const fetchRandomUser = async (id) => {
        try {
            const url = id ? `${API}${id}` : API
            const response = await fetch(url)
            const data = await response.json()

            setPerson(data.results[0])
            setIsLoaded(true)
        } catch (error) {
            console.log('Fetch Error', error);
            setIsLoaded(false)
        }
    }

    useEffect(() => {
        fetchRandomUser()
    }, [setPerson])

    return { person, isLoaded }
}
