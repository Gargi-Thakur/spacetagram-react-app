import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import HomePage from './pages/HomePage';

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <div className="App">
        <HomePage />
      </div>
    </AppProvider>
  );
}

export default App;
