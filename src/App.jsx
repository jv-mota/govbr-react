import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Header />      
      <Navbar />


      <h1 className="text-3xl font-bold text-center py-4 h-screen">Conteúdo Principal</h1> 
      <Footer />      
    </>
  )
}

export default App;
