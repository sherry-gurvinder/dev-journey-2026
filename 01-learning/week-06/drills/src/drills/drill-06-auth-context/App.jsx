import { AuthProvider } from "./contexts/AuthContext";
import Login from "./components/Login";

function App() {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
}

export default App;