

# 🌍 BestBuddies 

BestBuddies is a modern travel-buddy platform that helps users discover destinations, create travel plans, and connect with like-minded travelers in real time.  
This repository contains of the BestBuddies application, built with performance, scalability, and user experience in mind.

---

## 🚀 Live Demo
👉 *(Add live frontend URL here if deployed)*

---

## 🧩 Features

- ✈️ Create and explore travel plans
- 🤝 Find and connect with travel buddies
- 🔔 Real-time notifications
- 💬 One-to-one chat system
- 🖼️ Image-based destination discovery
- ⭐ Reviews & ratings
- 🔐 Secure authentication & authorization
- 📱 Fully responsive (mobile-first design)

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 15**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Shadcn/UI**
- **Lucide Icons**

### State & Data
- **React Query**
- **Axios**

### Real-Time
- **Socket.IO (Client)**

### Utilities
- **date-fns**
- **Zod (validation)**

---

## 📁 Project Structure

```

bestBuddies-frontend/
├── app/                # Next.js App Router
├── components/         # Reusable UI components
├── services/           # API service functions
├── hooks/              # Custom React hooks
├── lib/                # Utility functions & configs
├── styles/             # Global styles
├── public/             # Static assets
└── types/              # TypeScript types & interfaces

````

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_SOCKET_URL=http://localhost:5000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key
````

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/bestBuddies-frontend.git
cd bestBuddies-frontend
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Run the Development Server

```bash
npm run dev
```

App will be available at:

```
http://localhost:3000
```

---

## 🧪 Build for Production

```bash
npm run build
npm run start
```

---

## 🔐 Authentication Flow

* JWT / NextAuth based authentication
* Protected routes using middleware
* Role-based UI rendering

---

## 🔄 API Integration

The frontend communicates with the BestBuddies backend via REST APIs and Socket.IO.

**Services are located in:**

```
/services/*
```

Example:

```ts
getAllTravelPlans()
createTravelPlan()
joinTripRequest()
```

---

## 🎨 UI & UX Highlights

* Clean and minimal design
* Smooth transitions and animations
* Skeleton loaders & spinners
* Error & empty-state handling
* Accessible components

---

## 📌 Future Improvements

* 🗺️ Map-based travel discovery
* 🔍 Advanced search & filters
* 🌐 Multi-language support
* 📊 User analytics dashboard
*

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Open a Pull Request

---

## 👤 Author

**Imran Ahmed**
Full Stack Developer

* GitHub: [Imranahmed935](https://github.com/Imranahmed935)










