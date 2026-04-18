import { CounterContext,CounterProvider } from "./contexts/CounterContext"
import Counter from "./components/Counter"

const App = () =>
{
    return(
        <CounterProvider>
            <Counter/>
        </CounterProvider>
    )
}
export default App;