import './App.css'
import Button from './components/Button.jsx';
import './components/Button.css'
// import bagOne from 'assets/bag_1.png';
import Product from "./components/Product.jsx";

function App() {
    function logClick(title) {
        console.log(title);
    }

  return (
      <>
      <h1>Handbags & Purses</h1>
          <nav>
              <Button
                  title="to the collection"
                  onClick={logClick}
                  disabled={false}
              />
              <Button
                  title="shop all bags"
                  onClick={logClick}
                  disabled={false}
              />
              <Button
                  title="pre-orders"
                  onClick={logClick}
                  disabled={true}
              />
          </nav>
          <main>
              <Product
                  // image={bagOne}
                  title="The handy Bag"
                  price="€400,-"
                  label="Best seller"
              />
              <Product
                  // image={bagOne}
                  title="The stylish Bag"
                  price="€250,-"
                  label="Best seller"
              />
              <Product
                  // image={bagOne}
                  title="The simple Bag"
                  price="€300,-"
                  label="New collection"
              />
              <Product
                  // image={bagOne}
                  title="The trendy Bag"
                  price="€150,-"
                  label="New collection"
              />

          </main>
      </>
  )
}

export default App
