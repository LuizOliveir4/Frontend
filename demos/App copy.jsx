import Routing from "./Routing"
import { Link } from "react-router-dom"

function App() {
  return (
    <div className="portal">
        <Link to="/" className="logotype">
          <img src="/images/alpha-logotype.svg" alt="Alpha Portal Logotype" />
          alpha
        </Link>
      <aside>

      </aside>
      <header></header>
      <main>
        <Routing/>
      </main>
    </div>
  )
}

export default App
