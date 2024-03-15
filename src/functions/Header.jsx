import { Flex } from "@radix-ui/themes";




const Header = () => {
    return(
        <div className="flex justify-between items-center">
            <div>Echelon NFT Collection</div>
            <Flex gap={"4"} align={"center"}>
                <w3m-button />
            </Flex>
        </div>
    )
}

export default Header;