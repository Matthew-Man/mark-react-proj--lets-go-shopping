import React from 'react';
import { useState } from 'react';

interface ShopListFormData {
    nameOfItem: string;
    amount: string;
    amountUnits: string;
}

let shoppingList: ShopListFormData[] = [];


function App() {

    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState("0");
    const [quantityUnits, setQuantityUnits] = useState("kilograms");


    function handleSubmit() {
        shoppingList.push({nameOfItem: itemName, amount: quantity, amountUnits: quantityUnits});
    }
    
    
    return (
        <div>
            <form id="shopping-list" onSubmit={handleSubmit}>
                <label>
                    Item: 
                    <input type="text" id="name" onChange={(e) => setItemName(e.target.value)}/>
                </label>
                <br /><br />
                <label>
                    Quantity: 
                    <input type="number" id="quantity" onChange={(e) => setQuantity(e.target.value)}/>
                </label>
                <select name="quantity-units" id="units" onChange={(e) => setQuantityUnits(e.target.value)}>
                    <option value="kilograms">Kilograms</option>
                    <option value="grams">Grams</option>
                    <option value="litres">Litres</option>
                    <option value="number">Number</option>
                </select>
                <br/>
                <p>Click the submit button to add to shopping list.</p>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
};



export default App;