import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { ProductProvider } from "./context/product-context";
import LoadingPage from "./pages/LoadingPage";
import * as ROUTES from "./constants/routes";

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Product = lazy(() => import("./pages/Product"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <ProductProvider>
      <Router>
        <Suspense fallback={<LoadingPage />}>
          <Switch>
            <Route path={ROUTES.HOME} exact component={Home} />
            <Route path={ROUTES.ABOUT} component={About} />
            <Route path={ROUTES.BLOG} component={Blog} />
            <Route path={ROUTES.PRODUCTS} exact component={Products} />

            <Route path="/producten/:id" component={Product} />
            <Route path="/home" exact component={Home} />
            <Route path="/loading" component={LoadingPage} />

            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </ProductProvider>
  );
};

export default App;
