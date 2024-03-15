import { configureWallet } from "./connection"
import Header from "./functions/Header"


configureWallet();

function App() {

  return (
    <Header />
  )
}

export default App
