import { CartProvider } from "./contexts/cart";
import Navigation from "./pages/router";

function App() {
  return (
    <CartProvider>
      <Navigation />
    </CartProvider>
  );
}

export default App;
