

import { ethers } from "ethers";
import { useEffect, useMemo, useState } from "react";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import abi from "../constants/abi.json";
import multicallAbi from "../constants/multiCallAbi.json";
import { rpcReadOnly } from "../constants/provider";

const useNFT = () => {


    const { address } = useWeb3ModalAccount();
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const itf = new ethers.Interface(abi);
            const calls = tokenIDss(30).map((x) => ({
                target: import.meta.env.VITE_contractAddress,
                callData: itf.encodeFunctionData("ownerOf", [x]),
            }));

            const multicall = new ethers.Contract(
                import.meta.env.VITE_multiCallContractAddress,
                multicallAbi,
                rpcReadOnly
            );

            const callResults = await multicall.tryAggregate.staticCall(
                false,
                calls
            );

            const validResponsesIndex = [];
            const validResponses = callResults.filter((x, i) => {
                if (x[0] === true) {
                    validResponsesIndex.push(i);
                    return true;
                }
                return false;
            });

            const decodedResponses = validResponses.map((x) =>
                itf.decodeFunctionResult("ownerOf", x[1])
            );

            const ownedTokenIds = [];

            decodedResponses.forEach((addr, index) => {
                if (
                    String(addr).toLowerCase() === String(address).toLowerCase()
                )
                    ownedTokenIds.push(validResponsesIndex[index]);
            });

            setData(ownedTokenIds);
        })();
    }, [address, tokenIDs]);

    return data;
};

export default useNFT;
