import { Container, Theme } from "@radix-ui/themes";
import { configureWallet } from "./connection"
import Header from "./functions/Header"


configureWallet();

function App() {

  return (
    <Container>
       <Header />
    </Container>
  )
}

export default App
