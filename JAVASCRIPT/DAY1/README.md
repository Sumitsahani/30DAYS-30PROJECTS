

# Product Store

Welcome to the Product Store! This web application showcases how to fetch and display product data dynamically using HTML, CSS, and JavaScript. It uses a fake API to populate product cards with images, titles, descriptions, and prices.

## Features

- **Dynamic Product Cards:** Displays products fetched from a fake API.
- **Responsive Layout:** Adapts to various screen sizes with a CSS Grid layout.
- **Hover Effect:** Enhances user interaction with a zoom effect on product cards.
- **Error Handling:** Shows a user-friendly message if there is an issue with fetching data.

## Technologies Used

- **HTML:** Provides the basic structure of the web page.
- **CSS:** Styles the layout and appearance of the product cards.
- **JavaScript:** Fetches product data from the [Fake Store API](https://fakestoreapi.com/products) and updates the HTML dynamically.

## Getting Started

To view and run this project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/product-store.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd product-store
   ```

## Usage

1. Open the `index.html` file in your web browser.
2. The page will display "Loading products..." while the data is being fetched.
3. Once the data is loaded, product cards will appear with images, titles, descriptions, and prices.

## Live Demo

You can view the live demo of the application hosted on Netlify:

[Product Store - Live Demo](https://delightful-flan-e03cb8.netlify.app/)

## Code Overview

- **`index.html`**: The HTML file that contains the structure of the page and the container for the product cards.
- **CSS within `<style>` tag**: Defines the styles for the page, including layout, card appearance, and hover effects.
- **JavaScript within `<script>` tag**: Manages fetching data from the API and dynamically populates the product cards.

### JavaScript Details

The JavaScript function `fetchProducts` performs the following:

1. Fetches product data from the Fake Store API.
2. Parses the JSON response.
3. Dynamically creates and inserts product cards into the DOM.
4. Handles any errors that occur during the fetch process.

## Troubleshooting

- **API Fetch Errors:** If you see an "Error loading products" message, ensure your internet connection is stable and that the API endpoint is accessible.
- **Styling Issues:** Ensure you are using a modern browser that supports CSS Grid and other used styling features.

## Contributing

If you want to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push to your fork.
4. Open a pull request with a description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- **Fake Store API**: For providing the sample product data used in this project.
