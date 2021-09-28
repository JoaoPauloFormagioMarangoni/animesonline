import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AnimesProvider } from './contexts/animes';
import { AuthProvider } from './contexts/auth';
import Donation from './pages/Donation';
import Home from './pages/Home';
import News from './pages/News';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { PrivateRoute } from './routes/PrivateRoute';
import { GlobalStyle } from './styles/global';

export default function App() {
  return (
    <AuthProvider>
      <AnimesProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/donation" component={Donation} />
            <PrivateRoute path="/news" component={News} />
          </Switch>
        </BrowserRouter>
        <GlobalStyle />
      </AnimesProvider>
    </AuthProvider>
  );
}
