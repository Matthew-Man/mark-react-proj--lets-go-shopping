import React from 'react';
import { useState } from 'react';

interface ShopListFormData {
    nameOfItem: string;
    amount: string;
    amountUnits: string;
}


function App() {
    
    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState("0");
    const [quantityUnits, setQuantityUnits] = useState("kilograms");

    //make shopping list with usestate -> create emptyBasket to set a datatype to our shopping list
    const emptyBasket: ShopListFormData[] = []
    const [shoppingList, setShoppingList] = useState(emptyBasket) 
    

    //action when we press submit button
    function handleSubmit() {
        const newItemInfo = { nameOfItem: itemName, amount: quantity, amountUnits: quantityUnits };
        const newShoppingList = [...shoppingList, newItemInfo];

        setShoppingList(newShoppingList);
        setItemName("")
        setQuantity("0")
        setQuantityUnits("kilograms")
    }
    

    function removeItem(itemToRemove: ShopListFormData) {
        const copyArray = shoppingList //create shallow copy of shopping list that we want to edit
        const indexPos = copyArray.indexOf(itemToRemove) //find index location of what to remove

        copyArray.splice(indexPos, 1); //remove item from copy
        setShoppingList(copyArray); //overwrite state with the the edited shopping list
        console.log("new list: ",copyArray);
    }


    function createListItem(listItem: ShopListFormData) {
        console.log("I am re-rendering the list item")
        console.log(listItem)
        return (
        <div>
            <li> {listItem.nameOfItem} {listItem.amount} {listItem.amountUnits} <button onClick={() => removeItem(listItem)}>x</button> </li>
        </div>
        );
    };
 
    

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
            <div>
                {console.log(shoppingList)}
                {shoppingList.map(createListItem)}
            </div>
        </div>
    )
};



export default App;