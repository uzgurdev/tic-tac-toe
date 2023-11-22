import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import { Auth, Game, History, Main, NotFound } from "../pages";

const Routes = () => (
  <Router>
    <Switch>
      <Route index element={<Main />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/history" element={<History />} />
      <Route path="game/:gameId" element={<Game />} />
      <Route path="game/new" element={<Game />} />
      <Route path="*" element={<NotFound />} />
    </Switch>
  </Router>
);

export default Routes;
