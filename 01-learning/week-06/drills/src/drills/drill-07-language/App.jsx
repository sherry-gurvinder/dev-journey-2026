import LanguageSwitcher from "./components/LanguageSwitcher";
import { LanguageProvider } from "./contexts/LanguageContext";

const App = () =>
{   
    return(
    <LanguageProvider>
        <LanguageSwitcher/>
    </LanguageProvider>
    )
}
export default App;