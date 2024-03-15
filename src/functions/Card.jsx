import { Box, Button, Flex, Text } from "@radix-ui/themes";


const Cards = (props) => {
    return(
        <Flex align="center" gap="8" wrap={"wrap"}>
            <Box key={props.dna} className="w-[20rem]">
            <div width="10px" display="flex">
                <img
                    src={props.image}
                    className="w-full object-contain"
                    alt={props.name}
                />
                <Text className="block text-2xl">
                    Name: {props.name}
                </Text>
                <Text className="block">
                    Description: {props.description}
                </Text>
                <Button className="px-8 py-2 text-xl mt-2">
                    Mint
                </Button>
            </div>
            </Box>
        </Flex>
    )
}

export default Cards;