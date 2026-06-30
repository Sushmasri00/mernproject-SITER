# PlacementPro

PlacementPro is a full-stack placement preparation platform with a React frontend and an Express backend.

## Features
- Course learning pages
- Mock tests and practice modules
- Progress tracking
- Authentication flow

## Prerequisites
- Node.js 18+
- npm 9+
- MongoDB running locally or a remote MongoDB URI

## Setup

### 1) Clone the repository
```bash
git clone https://github.com/Sushmasri00/SITER-PlacementPro.git
cd SITER-PlacementPro
```

### 2) Install dependencies
```bash
cd client && npm install
cd ../server && npm install
```

### 3) Configure environment variables
Create a `.env` file inside the `server` folder with:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/placementpro
```

### 4) Run the app
Open two terminals:

```bash
cd client
npm run dev
```

```bash
cd server
npm run dev
```

The frontend will run on http://localhost:5173 and the backend on http://localhost:5000.
