import { Suspense } from "react";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner/Banner";
import Search from "./components/Search";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import ErrorBoundary from "./utils/ErrorBoundary";
import Loader from "./components/Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        <Navbar />
        <ErrorBoundary>
          <Banner />
        </ErrorBoundary>
        <Search />
        <Main />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
