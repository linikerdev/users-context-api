import React, { useContext } from 'react';
import './App.css';
import { store } from './contexts';


const App = (props) => {
  const { product } = useContext(store);

  const openAction = () => product.dispatch({
    type: 'LIST_PRODUCTS', payload: {
      name: 'Fanta', price: 4.5, location: "Refrigerated"
    }
  })

  return (
    <h1>
      <ul>
        <li>{product.list && product.list.map((it, i) => (
          <div key={i}>{it.name} - {it.price}</div>
        ))}</li>
      </ul>
      <button onClick={openAction}>ADD</button>
    </h1>
  );
}

export default App;
