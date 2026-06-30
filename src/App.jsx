import ScrollToTop from "./components/ScrollToTop";
import AIChat from "./components/AIChat/AIChat";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import ProductsPage from "./pages/Products/ProductsPage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ComparePage from "./pages/Compare/ComparePage";
import RecommendationPage from "./pages/Recommendation/RecommendationPage";
import AssistantPage from "./pages/Assistant/AssistantPage";
import AdminProducts from "./pages/Admin/AdminProducts";
function App() {
  return (
   <>
  <ScrollToTop />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/products/:id" element={<ProductDetails />} />
    <Route path="/compare" element={<ComparePage />} />
    <Route path="/recommendation" element={<RecommendationPage />} />
    <Route path="/assistant" element={<AssistantPage />}/>
    <Route path="/admin/products"element={<AdminProducts />}/>
    
  </Routes>

  <AIChat />

</>
  );
}

export default App;