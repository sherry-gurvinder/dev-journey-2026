
import Counter from "./components/Counter"
import { CounterContext,CounterProvider } from "./contexts/CounterContext"
const App = () =>
{
    return(
        <CounterProvider>
            <Counter></Counter>
        </CounterProvider>
    )    

}
export default App;