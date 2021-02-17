import React from 'react';
import { useState } from 'react';

interface ShopListFormData {
    itemName: string;
    quantity: string;
    quantityUnits: string;
}

function App() {
    let shoppingList:ShopListFormData[];

    const [quantityUnits, setQuantityUnits] = useState("kilograms");
    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState("0")


    function handleSubmit() {
        alert("You have " + itemName +  quantity + quantityUnits)
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
            {/* {document.querySelector("shopping-list").value} */}
            {console.log(quantityUnits)}
            {console.log(nameItem)}
        </div>
    )
};


export default App;