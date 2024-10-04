import { Route, Routes } from "react-router";
import Hero from "./components/Hero";
import Footer from "./components/Footer";


function App (){
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/" element={<Footer />} />
      {/* <Route path="/cv" element={Cv} /> */}
    </Routes>
  );
}
export default App;