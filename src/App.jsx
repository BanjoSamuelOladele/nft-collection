import { Container, Theme } from "@radix-ui/themes";
import { configureWallet } from "./connection"
import Header from "./functions/Header"
import useCollection from "./hooks/useCollection";


configureWallet();

function App() {

  const collect = useCollection()

  console.log("Collection:::",collect)

  return (
    <Container>
       <Header />
    </Container>
  )
}

export default App
