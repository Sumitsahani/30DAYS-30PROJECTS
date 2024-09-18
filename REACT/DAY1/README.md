
# Product Store

This React application, built with Vite, fetches and displays product data from a fake API. It demonstrates dynamic content rendering with a responsive design and basic styling.

## Features

- **Dynamic Product Cards:** Fetches products from the [Fake Store API](https://fakestoreapi.com/products) and displays them in a card format.
- **Responsive Design:** Uses CSS Grid for a layout that adapts to different screen sizes.
- **Hover Effects:** Adds an interactive hover effect to the product cards.
- **Loading State:** Displays a loading message while fetching data.

## Technologies Used

- **React:** For building the user interface and managing state.
- **Vite:** Provides a fast development environment and build tool.
- **CSS (in JS):** Inline CSS for styling within the React component.
- **Fetch API:** Retrieves data from the Fake Store API.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/product-store-react.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd product-store-react
   ```

3. **Install dependencies using npm or yarn:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

   This will start the Vite development server and open the application in your default web browser at `http://localhost:3000`.

## Live Demo

You can view the live demo of the application hosted on Netlify:

[Product Store - Live Demo](https://golden-begonia-906dd3.netlify.app/)

## Usage

1. **Open the application in your browser.**
2. **Loading State:** A "Loading..." message will appear while the data is being fetched.
3. **Product Display:** Once the data is loaded, product cards with images, titles, descriptions, and prices will be shown.

## Code Overview

- **`App.jsx`**: The main React component that:
  - **State Management:** Uses `useState` to manage `data` and `loading` states.
  - **Data Fetching:** Uses `useEffect` to fetch data from the API when the component mounts.
  - **Inline Styles:** CSS is included directly in the component using template literals within the `style` tag.
  - **Conditional Rendering:** Displays either a loading message or product cards based on the `loading` state.

## Troubleshooting

- **Data Fetching Issues:** Ensure you have a stable internet connection. Check the browser console for errors related to fetching data.
- **Styling Issues:** Verify that your browser supports modern CSS features, as this project utilizes CSS Grid and other current styling techniques.

## Contributing

To contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes and push to your fork.
4. Open a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Fake Store API:** For providing the sample product data used in this project.