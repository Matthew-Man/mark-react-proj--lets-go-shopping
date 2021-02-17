import React from 'react';

function App() {
    return (
        <div>
            <form action="" method="get" name="Add item to shopping list">
                <p>Item:</p>
                <input type="text"/>
                <p>Quantity:</p>
                <input type="number"/>
                <select name="quantity-units" id="units">
                    <option value="kilograms">Kilograms</option>
                    <option value="grams">Grams</option>
                    <option value="litres">Litres</option>
                    <option value="number">Number</option>
                </select>
                <br/>
                <p>Click the submit button to add to shopping list.</p>
                <input type="submit" value="Submit" onClick={(e) => console.log(e)}/>
            </form>
        </div>
    )
};


export default App;