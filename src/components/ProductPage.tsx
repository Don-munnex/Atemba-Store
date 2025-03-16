import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import AppTemplate from "../components/apps/AppTemplate";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { apps, Games } from "./Apps";

interface ProductPageProps {}

const ProductPage: React.FC<ProductPageProps> = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const productData = location.state;
  
  // Fallback to finding product in both apps and Games arrays if state isn't available
  const findProductById = () => {
    if (!id) return null;
    
    // First check in apps array
    const appProduct = apps.find(app => app.id === parseInt(id));
    if (appProduct) return appProduct;
    
    // Then check in Games array
    const gameProduct = Games.find(game => game.id === parseInt(id));
    if (gameProduct) return gameProduct;
    
    // If not found in either array
    return null;
  };
  
  const product = productData || findProductById();

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col">
        <NavBar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-10">
            <h2 className="text-2xl mb-4">Product not found</h2>
            <Link to="/" className="text-blue-400 hover:underline">
              Return to home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <NavBar />
      <div className="flex-grow container mx-auto py-8">
        <Link to="/" className="text-blue-400 hover:underline mb-4 inline-block">
          <span className="bg-black px-3 py-1">← Back to all products</span>
        </Link>
        <AppTemplate
          id={product.id}
          label={product.label}
          company={product.company}
          image={product.url}
          description={product.description}
          systemRequirements={product.systemRequirements}
          screenshots={product.screenshots || []}
          additionalInfo={product.additionalInfo}
          link={product.link}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;