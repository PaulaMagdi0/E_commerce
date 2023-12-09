import React, { useContext } from 'react';
import './ProductCard/style.css';
import {ShoppingContext} from '../context/ShoppingContext';


export default function ProductList() {
    const {products} = useContext(ShoppingContext);

    return (
        <div className='row my-4'>
            {
                products.map( product => <ProductListItem key={product.id} product={product} /> )
            }
        </div>
    )
}
