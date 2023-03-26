// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { useState } from 'react';
function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fapple-laptop&psig=AOvVaw3rfjZnGRA1IkTb8gvxHmD-&ust=1679855845660000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCOjuzc9_0CFQAAAAAdAAAAABAG',
      name: 'White Shoes',
      Category: 'Shoes',
      seller: 'AMZ Seller Mumbai',
      Price: 1999
    },
    {
      url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fapple-laptop&psig=AOvVaw3rfjZnGRA1IkTb8gvxHmD-&ust=1679855845660000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCOjuzc9_0CFQAAAAAdAAAAABAG',
      name: 'Black Watch',
      Category: 'Watches',
      seller: 'AMZ Seller Mumbai',
      Price: 1200
    },
    {
      url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fapple-laptop&psig=AOvVaw3rfjZnGRA1IkTb8gvxHmD-&ust=1679855845660000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCOjuzc9_0CFQAAAAAdAAAAABAG',
      name: 'Apple Laptop 8GB RAM',
      Category: 'Laptop',
      seller: 'AMZ Seller Mumbai',
      Price: 120000
    },
    {
      url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fapple-laptop&psig=AOvVaw3rfjZnGRA1IkTb8gvxHmD-&ust=1679855845660000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCOjuzc9_0CFQAAAAAdAAAAABAG',
      name: 'Sequrity Camera',
      Category: 'CCTV',
      seller: 'AMZ Seller Mumbai',
      Price: 1499
    },
    {
      url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fapple-laptop&psig=AOvVaw3rfjZnGRA1IkTb8gvxHmD-&ust=1679855845660000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCOjuzc9_0CFQAAAAAdAAAAABAG',
      name: 'T-shirt white',
      Category: 'Men',
      seller: 'AMZ Seller Mumbai',
      Price: 499
    },
    {
      url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fapple-laptop&psig=AOvVaw3rfjZnGRA1IkTb8gvxHmD-&ust=1679855845660000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCOjuzc9_0CFQAAAAAdAAAAABAG',
      name: 'Lewis Jeans',
      Category: 'Men',
      seller: 'AMZ Seller Mumbai',
      Price: 1249
    }
  ])
  return (
    <div>
      <Header></Header>
      <ProductList product={product} ></ProductList>
    </div>
  );
}

export default App;
