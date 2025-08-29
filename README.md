# Yatri store

## Overview

This project is a full-featured e-commerce web application built with Next.js, Redux, and integrated with Fakestore API for product data. It includes authentication, cart management, checkout flow, and a responsive UI with advanced UX features.

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn
- Git

### Installation & Setup

1. Clone the repository: `git clone git@github.com:Khatriaashish/yatri-frontend-task-ecommerce.git`
2. Set up your environment variables

- Create a `.env.local` file in the root directory.
- Add necessary environment variables as suggested in .env.example

3. Install dependencies: `yarn` or `npm i`
4. Run the development server:

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

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## What’s Included

### Home Page

- Fetches products from [Fakestore API](https://fakestoreapi.com).
- Maintains product state using **Redux**.
- Uses **Redux Async Thunk** for asynchronous API calls.
- Displays **paginated product data** with 6 products per page.
- Each product includes an **Add to Cart** button.
- Shows a **loading skeleton** UI while fetching data.
- Has an **error state UI** for handling fetch failures.

### Product Detail Page

- Displays detailed information about a product:
- Product image
- Name
- Description
- Quantity selector
- Add to cart button
- Shows a **loading skeleton** UI while fetching data.
- Has an **error state UI** for handling fetch failures.

### Cart Page

- **Protected route** implemented using Next.js middleware.
- Cart state persisted with **redux-persist**.
- Users can customize product quantities.
- Ability to delete individual products or clear the entire cart.
- Handles error states gracefully with UI feedback.

### Checkout Page

- **Protected route** implemented using Next.js middleware.
- Displays a cart summary.
- Autofills user information from authentication data.
- Robust form validation for checkout details.
- Checkout simulation with appropriate user feedback.

### Login Page

- Integrated **Google** and **GitHub** OAuth authentication.
- Simplified login experience with social sign-in options.

### Sidebar Navigation

- Responsive sidebar with navigation links to:
- Home
- Cart
- Checkout
- Profile
- Highlights the active page dynamically.
- Collapses into a hamburger menu on smaller screens for mobile usability.
- Includes a **search bar** for filtering products by name.

---

## Additional Features

- **Pagination** on the product list (6 products per page) - client side pagination.
- Search bar intiating controlled search including debounce
- Fully **responsive design** optimized for:
- Mobile devices
- Tablets
- Desktop screens
- Toast notifications for success and error actions throughout the app.
- Global Error Boundary

---
