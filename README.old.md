---
module: react-spa

level: 2

methods:
  - team
  - pair
  - solo

tags:
  - wip
---

# Let's go shopping

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

> This is part of Academy's [technical curriculum for **The Mark**](https://github.com/WeAreAcademy/curriculum-mark). All parts of that curriculum, including this project, are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

In this project, we will practice with event handlers and two-way input binding.

## Learning Outcomes

- Set up two-way input binding
- Practice with event listeners
- Practice breaking an app down into components and passing information between them

## Exercise 1: Minimum viable product

> 🎯 **Success criterion:** A MVP shopping list

Create a shopping list which meets the following requirements:
- Adding items to the list:
  - A text input field where the user can type the name of the item they require
  - A quantity field: an input for the quantity which is required
  - A dropdown to choose the type of quantity e.g. kilograms, litres or number.
  - An add button, to allow the user to add the specified item to their list.
- Showing the list:
  - A list of the items which the user has already added, including their name and quantity.

As you create this app, consider how you are going to breka it down into simpler components and the shape of the data. Plan it out in advance and consider in which components certain data needs to be available. Ensure that you rely on a single source of truth, avoid duplicating any information as this can introduce bugs if the two sources end up out of sync.

## Exercise 2: Expanding the functionality

> 🎯 **Success criterion:** An enhanced shopping list app

Improve the user experience by adding further capabilities to the app, such as:
- Allowing the user to delete items off of the list e.g. if they have changed their mind.
- Allowing the user to mark items as purchased (user case: make the list whilst at home and then mark items as purchased in the supermarket)
- Add number validation to the quantity field
- A count of the numbers left to buy
- A filtered list showing only the items left to buy and a success message when the user has bought all items

Please do experiment and add any other ideas which you may have.
The focus here is on functionality rather than appearance and so css should not be your focus.

## Exercise 3: Component tree

> 🎯 **Success criterion:** The component tree of your app

Ensure that you have split your app down into relevant React components. Draw the component tree of your app. 