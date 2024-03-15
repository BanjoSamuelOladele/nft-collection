import { Box, Button, Container, Flex, Text, Theme } from "@radix-ui/themes";
import { configureWallet } from "./connection"
import Header from "./functions/Header"
import useCollection from "./hooks/useCollection";
import AppTab from "./functions/AppTab";


configureWallet();

function App() {

  const collect = useCollection();

  console.log("Collection:::",collect)

  return (
    <Container>
       <Header />
       <AppTab 
        MyNfts={
          <Flex />
        }
        AllCollections={
          <Flex />
        }
       />
    </Container>
  )
}

export default App
