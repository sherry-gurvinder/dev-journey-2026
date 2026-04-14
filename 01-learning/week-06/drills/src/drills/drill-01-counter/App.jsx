import { CounterProvider } from "./contexts/CounterContext";
import Counter from "./components/Counter";

function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default App;