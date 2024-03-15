import axios from "axios";
import { useEffect, useState } from "react";
import { tokenIDss } from "./tokenId";


const useCollection = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            // const tokenIDs = tokenIDss;

            const promises = tokenIDss(30).map((x) =>
                fetch("https://violet-wrong-mouse-159.mypinata.cloud/ipfs/QmS5tuypbF49Yq3ja8Sc5HdpuBFRwDZfJR6R6jwyAMANB7"+`/${x}`)
            );

            const tokensMetadataResponse = await Promise.all(promises);

            const tokensMetadataJson = [];

            for (let i = 0; i < tokensMetadataResponse.length; i++) {
                const json = await tokensMetadataResponse[i].json();
                tokensMetadataJson.push(json);
            }

            setData(tokensMetadataJson);
        })();
    }, []);
    
    return data;
}


export default useCollection;