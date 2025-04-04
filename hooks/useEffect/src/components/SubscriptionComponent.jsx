import React, { useState, useEffect } from "react";

export default function SubscriptionComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        let isCancelled = false;

        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/India?unitGroup=us&key=ND7HTCCR9MZ6MNK4J3CXEPPQE&contentType=json"
                );
                const result = await response.json();

                if (!isCancelled) {
                    setData(result);
                }
            } catch (error) {
                if (!isCancelled) {
                    console.error("Error fetching data:", error);
                }
            }
        };

        fetchData();

        return () => {
            isCancelled = true;
            console.log("Subscription Cancelled");
        };
    }, []);

    return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
}
