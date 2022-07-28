import productImageMobile from "./assets/image-product-mobile.jpg";
import productImageDesktop from "./assets/image-product-desktop.jpg";
import cartIcon from "./assets/icon-cart.svg";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="flex flex-col sm:flex-row max-w-xl shadow-sm bg-fem-white rounded-md overflow-hidden">
        <div className="w-full">
          <picture className="object-cover">
            <source media="(min-width: 640px)" srcSet={productImageDesktop} />
            {/* <source media="(min-width: 240px)" srcSet={productImageMobile} /> */}
            <img
              className="object-cover h-full w-full"
              src={productImageMobile}
              alt="Product image"
            />
          </picture>
        </div>
        <div className="w-full flex flex-col">
          <div className="p-4 h-full flex flex-col justify-evenly">
            <span className="uppercase tracking-[0.2em] text-fem-dark-grayish-blue text-sm">
              Perfume
            </span>
            <h1 className="text-4xl font-serif py-2">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="text-fem-dark-grayish-blue text-sm">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>

            <div className="flex items-center py-4 space-x-4 flex-wrap">
              <span className="text-3xl font-serif text-fem-dark-cyan">
                $149.99
              </span>
              <span className="line-through text-fem-dark-grayish-blue">
                $169.99
              </span>
            </div>
            <button
              onClick={() => console.log("Fun challenge 🍸")}
              className="w-full inline-flex items-center space-x-2 justify-center bg-fem-dark-cyan p-4 rounded-lg text-fem-white hover:bg-[rgb(26,64,49)]"
            >
              <img src={cartIcon} alt="Cart icon" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
