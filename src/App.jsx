import './App.css'
import Button from './components/Button.jsx';
import Product from './components/Product.jsx';
import Tile from './components/Tile.jsx';
import './components/Button.css'
import handyBag from './assets/bag_1.png';
import stylishBag from './assets/bag_2.png';
import simpleBag from './assets/bag_3.png';
import trendyBag from './assets/bag_4.png';
import brand from './assets/brand.png';
import ourStory from './assets/our_story.png';

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
                  image={handyBag}
                  title="The handy Bag"
                  price="€400,-"
                  label="Best seller"
              />
              <Product
                  image={stylishBag}
                  title="The stylish Bag"
                  price="€250,-"
                  label="Best seller"
              />
              <Product
                  image={simpleBag}
                  title="The simple Bag"
                  price="€300,-"
                  label="New collection"
              />
              <Product
                  image={trendyBag}
                  title="The trendy Bag"
                  price="€150,-"
                  label="New collection"
              />
          </main>

          <footer>
              <Tile
                  type="text"
                  title="The brand"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
              <Tile
                  type="image"
                  src={brand}
                  title="our brand"
              />
              <Tile
                  type="image"
                  src={ourStory}
                  title="our story"
              />
              <Tile
                  type="text"
                  title="Our story"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
          </footer>
      </>
  )
}

export default App
