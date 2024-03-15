import { Box, Button, Container, Flex, Text, Theme } from "@radix-ui/themes";
import { configureWallet } from "./connection"
import Header from "./functions/Header"
import useCollection from "./hooks/useCollection";
import AppTab from "./functions/AppTab";
import Cards from "./functions/Card";
// import useNFT from "./hooks/useNFT";


configureWallet();

function App() {

  const collect = useCollection();

  // const useN = useNFT();

  // console.log(useN)

  console.log("Collection:::",collect)

  return (
    <Container>
      <Header />
      <main className="mt-6">
       <AppTab 
        MyNfts={
          // useN.map(x => (
          //   // <Cards 
          //   //     dna={x.dna}
          //   //     name={x.name}
          //   //     description={x.description}
          //   //     image={x.image}
          //   //   />
          //   <></>
          // ))
          <></>
        }
        AllCollections={
          collect.length === 0 ? (<h1>loading...</h1>) : (
            collect.map(x => (
              <Cards 
                dna={x.dna}
                name={x.name}
                description={x.description}
                image={x.image}
              />
          )))
        }
       />
      </main>
    </Container>
  )
}

export default App
