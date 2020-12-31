import { useState } from "react";
import { ThemeProvider } from 'styled-components';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./containers/header/header";
import Body from "./containers/body/body";
import Footer from "./containers/footer/footer";
import Tasks from "./containers/tasks/tasks";
import messages, { defaultLanguage, I18nContext } from "./config/language";
import { blueTheme } from "./config/theme";

/* const defaultTheme = window.localStorage.getItem('theme'); */

const App = () => {
  const [language, setLanguage] = useState(defaultLanguage);
  const [theme, setTheme] = useState(blueTheme);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <I18nContext.Provider value={{ messages, language }}>
          <Header />
          <Switch>
            <Route path='/' exact component={Body} />
            <Route path='/posts'exact component={Tasks} />
            <Route render={() => <h1>Not found</h1>} />
          </Switch>
          <Footer setTheme={setTheme} setLanguage={setLanguage} />
        </I18nContext.Provider>
      </ThemeProvider>
    </BrowserRouter>

  );
}

export default App;
