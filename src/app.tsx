import React from 'react';
import { useState } from 'react';

interface ShopListFormData {
    nameOfItem: string;
    amount: string;
    amountUnits: string;
}

// let shoppingList: ShopListFormData[] = [];

function GenerateList() {
    // console.log("I have re-rendered")
    // function createListItem(listItem: ShopListFormData, index: number) {
    //     function removeItem() {
    //         const copyArray = shoppingList
    //         const indexPos = copyArray.indexOf(listItem)
    //         // console.log(indexPos)
            
    //         const updatedList = copyArray.splice(indexPos, 1);
    //         console.log("updated list: ", updatedList)

    //         // const newList = [...shoppingList, updatedList];
    //         // console.log("shopping list:", shoppingList);

    //         setShoppingList(copyArray);
    //         console.log("new list: ",copyArray);
    //     }
    //     return (
    //     <div>
    //         <li key={index}> {listItem.nameOfItem} {listItem.amount} {listItem.amountUnits} <button onClick={removeItem}>x</button> </li>
    //     </div>
    //     );
    // };
    // return (
    // <div>
    //     {shoppingList.map(createListItem)}
    // </div>
    // )
};

function App() {
    
    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState("0");
    const [quantityUnits, setQuantityUnits] = useState("kilograms");
    //make shopping list with usestate
    const emptyBasket: ShopListFormData[] = []
    const [shoppingList, setShoppingList] = useState(emptyBasket) 
    

    function handleSubmit() {
        const newItemInfo = { nameOfItem: itemName, amount: quantity, amountUnits: quantityUnits };
        const newShoppingList = [...shoppingList, newItemInfo];

        setShoppingList(newShoppingList);
        setItemName("")
        setQuantity("0")
        setQuantityUnits("kilograms")
    }
    
    function removeItem(itemToRemove: ShopListFormData) {
        const copyArray = shoppingList
        const indexPos = copyArray.indexOf(itemToRemove)
        // console.log(indexPos)
        
        const updatedList = copyArray.splice(indexPos, 1);
        console.log("updated list: ", updatedList)

        // const newList = [...shoppingList, updatedList];
        // console.log("shopping list:", shoppingList);

        setShoppingList(copyArray);
        console.log("new list: ",copyArray);
    }

    function createListItem(listItem: ShopListFormData, index: number) {
        console.log("I am re-rendering the list item")
        console.log(listItem)
        return (
        <div>
            <li key={index}> {listItem.nameOfItem} {listItem.amount} {listItem.amountUnits} <button onClick={() => removeItem(listItem)}>x</button> </li>
        </div>
        );
    };
    // return (
    // <div>
    //     {shoppingList.map(createListItem)}
    // </div>
    // )
    

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