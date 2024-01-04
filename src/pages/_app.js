import "@/styles/globals.css";
// import { ProductProvider } from "@/context/productcontext";
import { ProductProvider } from "@/context/ProductContext";

export default function App({ Component, pageProps }) {
  return (
    <ProductProvider>
      <Component {...pageProps} />
    </ProductProvider>
  );
}
