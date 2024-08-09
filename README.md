# Craftpaper Backend

Welcome to the backend repository for the Craftpaper e-commerce website! This project handles data management for the Craft House frontend, including CRUD operations for items, favorites, and cart items.

## Live Link

The live site can be accessed [here](https://craft-house-ad549.web.app).

## Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (running locally or on a cloud service like MongoDB Atlas)

## Getting Started

### Clone the Repository

Clone the repository from GitHub and navigate to the project directory:

```bash
git clone https://github.com/Anawrulkabir/Craftpaper-server.git
cd Craftpaper-server
```

### Set Up Environment Variables

To configure the necessary environment variables, follow these steps:

1. **Create the `.env` file:**

   Inside the `Craftpaper-server` directory, create a file named `.env`.

   ```bash
   touch .env
   ```

2. **Add the following environment variables to the `.env` file:**

   ```bash
   DB_USER=your_database_user
   DB_PASS=your_database_password
   STRIPE_SECRET_KEY=your_stripe_secret_key
   TRANSPORTER_EMAIL=your_email_for_transporter
   TRANSPORTER_PASS=your_email_password_for_transporter
   ACCESS_TOKEN_SECRET=your_access_token_secret
   ```

   Replace the placeholders (`your_database_user`, `your_stripe_secret_key`, etc.) with your actual configuration values.

### Install Dependencies

Install the required dependencies:

```bash
npm install
```

### Run the Development Server

Start the backend server:

```bash
npm start
```

### API Endpoints

- **GET `/`**: Check if the server is running.
  - Response: `My craft server is working fine`

- **Items**
  - `POST /items`: Add a new item.
  - `GET /items`: Retrieve all items.
  - `GET /items/:id`: Retrieve an item by ID.
  - `PUT /update/:id`: Update an item by ID.
  - `DELETE /delete/:id`: Delete an item by ID.

- **Favorites**
  - `POST /favourite`: Add a new favorite item.
  - `GET /favourite`: Retrieve all favorite items.
  - `GET /favourite/:email`: Retrieve favorite items for a specific user by email.

- **Cart**
  - `POST /cart`: Add a new item to the cart.
  - `GET /cart`: Retrieve all cart items.
  - `GET /cart/:email`: Retrieve cart items for a specific user by email.

## Accessing the Application

The backend server will typically run on `http://localhost:3000`. Ensure that your frontend is correctly configured to communicate with this backend.

## Notes

- Make sure to replace `import.meta.env` with `process.env` if running in a Node.js environment, as `import.meta.env` is used in Vite (for front-end projects).

