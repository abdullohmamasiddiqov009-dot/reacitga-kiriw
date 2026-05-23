import Header from "./components/Header";
import Footer from "./components/Footer";
import Center from "./components/Center"; // To'g'ri yo'l

function App() {
  return (
    <div>
      <Header />
      <Center /> {/* Pastda ham <Main /> emas, <Center /> bo'lishi shart */}
      <Footer />
    </div>
  );
}

export default App;
