import React from 'react';
import { useState } from 'react';

interface ShopListFormData {
    nameOfItem: string;
    amount: string;
    amountUnits: string;
}

let shoppingList: ShopListFormData[] = [];


function GenerateList() {
    function createListItem(ListItem: ShopListFormData) {
        function removeItem() {
            const indexPos = shoppingList.indexOf(ListItem)
            console.log(indexPos)
            shoppingList.splice(indexPos, 1)
        }
        return (<div>
            <p> {ListItem.nameOfItem} {ListItem.amount} {ListItem.amountUnits} <button onClick={removeItem}>x</button> </p>
        </div>)
    }
    return <div>{shoppingList.map(createListItem)}</div>
}


function App() {

    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState("0");
    const [quantityUnits, setQuantityUnits] = useState("kilograms");
    //make shopping list with usestate
    const [shoppingList, setShoppingList] = useState()

    function handleSubmit() {
        shoppingList.push({ nameOfItem: itemName, amount: quantity, amountUnits: quantityUnits });
        setItemName("")
        setQuantity("0")
        setQuantityUnits("kilograms")
        console.log(shoppingList)
    }


    return (
        <div>
            <label>
                Item:
                    <input type="text" id="name" value={itemName} onChange={(e) => setItemName(e.target.value)} />
            </label>
            <br /><br />
            <label>
                Quantity:
                    <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </label>
            <select name="quantity-units" id="units" value={quantityUnits} onChange={(e) => setQuantityUnits(e.target.value)}>
                <option value="kilograms">Kilograms</option>
                <option value="grams">Grams</option>
                <option value="litres">Litres</option>
                <option value="number">Number</option>
            </select>
            <br />
            <p>Click the submit button to add to shopping list.</p>
            <button onClick={handleSubmit}>submit</button>
            <hr />
            <GenerateList />
        </div>
    )
};



export default App;