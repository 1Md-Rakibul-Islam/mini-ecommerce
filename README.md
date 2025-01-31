# Mini E-Commerce Web Application

This is a mini e-commerce web application built with Next.js. It includes product listing, product details, and cart functionalities. The app is fully responsive and integrates mock API data for products.
## Live Demo (https://mini-ecommerce-zeta.vercel.app)

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/1Md-Rakibul-Islam/mini-ecommerce.git
   cd mini-ecommerce

2. Clone the repository:
   ```Live on Vercel (http://www.digital.com/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Features

0. **Landing Page**:
    - Displays a list of products fetched from a mock API.
    - Each product card shows:
      - Product image
      - Product name
      - Price
      - "Add to Cart" button
1. **Products Page**:
    - Clicking a product navigates to a dynamic route (`/products`).
    - Displays a list of products fetched from a mock API.
    - Each product card shows:
      - Product image
      - Product name
      - Price
      - "Add to Cart" button

2. **Product Details Page**:
    - Clicking a product navigates to a dynamic route (`/products/[id]`).
    - Displays:
      - Product image
      - Product name
      - Description
      - Price
      - "Add to Cart" button
      - Related products based on the product category

3. **Cart Functionality**:
    - A cart page (`/cart`) that:
      - Lists all products added to the cart.
      - Displays the total price of the cart.
      - Allows users to remove items from the cart.

4. **API Integration**:
    - Mock API integration (e.g., Faker.js or JSON Placeholder) to fetch product data.
    - API routes implemented in Next.js for:
      - Fetching products
      - Adding/removing items in the cart

5. **Performance**:
    - Server-Side Rendering (SSR) for the landing page.
    - Static Site Generation (SSG) for product details.

6. **Responsive Design**:
    - Fully responsive, working on both desktop and mobile devices.

7. **Code Quality**:
    - TypeScript used for type safety.
    - Clean coding practices followed.
    - Comments included where necessary.
