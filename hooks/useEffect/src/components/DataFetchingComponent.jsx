import React, { useState, useEffect } from 'react'

export default function DataFetchingComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Surat?unitGroup=us&include=days&key=ND7HTCCR9MZ6MNK4J3CXEPPQE&contentType=json")

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            }finally{
                setLoading(false);
            }
        }
        fetchData();
    }, []);
    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: {error}</div>

    return (
        <div>
            Data: {JSON.stringify(data)}
        </div>
    );
}
