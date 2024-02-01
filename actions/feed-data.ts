import axios from "axios";

import { db } from "@/lib/db";

interface Beer {
    name: string;
    image_url: string;
    description: string;
    tagline: string;
}

export const feedData = async () => {
    try {
        const apiUrl = `https://api.punkapi.com/v2/beers?page=1&per_page=24`;
        const { data } = await axios.get<Beer[]>(apiUrl);

        if (data && data.length > 0) {
            const filteredData: Beer[] = data.map(item => ({
                name: item.name,
                image_url: item.image_url,
                description: item.description,
                tagline: item.tagline
            }));
            if (filteredData && filteredData.length > 0) {
                const res = await db.product.createMany({
                    data: filteredData
                })
                return res;
            }
        }
    } catch (error) {
        console.error("DATA_API_ERROR:", error);
        return null;
    }
}