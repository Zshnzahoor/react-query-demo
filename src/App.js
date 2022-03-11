import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import { HomePage } from "./components/Home.page";
import { RQheroespage } from "./components/RQheroes.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { RQhero } from "./components/RQhero.page";
import { ParallelQueriespage } from "./components/ParallelQueries.page";
import { DynamicParallelpage } from "./components/DynamicParallel.page";
import { DependentQueriespage } from "./components/DependentQueries.page";
import { PaginatedQueriesPage } from "./components/PaginatedQueries.page";
import { InfiniteQueriesPage } from "./components/InfiniteQueries.page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-parallel">RQ Parallel Data</Link>
              </li>
              <li>
                <Link to="/rq-dynamic-parallel">RQ Dynamic Data</Link>
              </li>
              <li>
                <Link to="/rq-dependent">RQ Dependent Heroes</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            {/* <Routes> */}
            <Route path="/rq-super-hero/:id">
              <RQhero />
            </Route>
            <Route path="/super-heroes">
              <SuperHeroesPage />
            </Route>
            <Route path="/rq-super-heroes">
              <RQheroespage />
            </Route>
            <Route path="/rq-parallel">
              <ParallelQueriespage />
            </Route>
            <Route path="/rq-dynamic-parallel">
              <DynamicParallelpage heroIds={[1, 3]} />
            </Route>
            <Route path="/rq-dependent">
              <DependentQueriespage email="zshn@example.com" />
            </Route>
            <Route path="/rq-paginated">
              <PaginatedQueriesPage />
            </Route>
            <Route path="/rq-infinite">
              <InfiniteQueriesPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
            {/* </Routes> */}
          </Switch>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
