# Snapgram

Snapgram is a modern social media platform that allows users to connect, share, and explore content. Built with cutting-edge technologies like **TypeScript**, **React**, and **Appwrite**, Snapgram offers a seamless and dynamic user experience.  

## Features  

### Core Features  
- **Authentication**:  
  - Secure **Sign-Up** and **Sign-In** functionality using Appwrite's authentication services.  

- **Post Management**:  
  - **Create**, **Read**, **Update**, and **Delete (CRUD)** posts directly from your account.  

- **Explore Page**:  
  - Discover new content with an **infinite scroll** feature powered by **React Query** for efficient data fetching and caching.  

- **Home Page**:  
  - Personalized feed displaying posts from users you follow.

### Additional Features  
- **Responsive Design**:  
  - Mobile-first layout with seamless transitions across devices.  
- **Error Handling**:  
  - Graceful handling of network or server issues with user-friendly notifications.  
- **Type Safety**:  
  - Codebase fully implemented with TypeScript for better developer experience and reliability.  

## Tech Stack  

| **Technology**   | **Purpose**                                   |
|-------------------|-----------------------------------------------|
| **TypeScript**    | Ensures type safety and maintainable code.   |
| **React**         | For building the dynamic user interface.     |
| **React Query**   | Data fetching and state management.          |
| **Appwrite**      | Backend services for authentication, database, and file storage. |

## Installation  

Follow these steps to set up Snapgram locally:  

### Prerequisites  
- Node.js (v16+ recommended)  
- Appwrite server (Self-hosted or Cloud)  

### Steps  
1. **Clone the Repository**  
   ```bash  
   git clone https://github.com/your-username/snapgram.git  
   cd snapgram  

2. **Install Dependencies**
  npm install  

3. **Set Up Environment Variables**
    Create a .env file in the project root and configure the following:
    REACT_APP_APPWRITE_PROJECT_ID=your-appwrite-project-id  
    REACT_APP_APPWRITE_ENDPOINT=https://your-appwrite-server.com/v1  

4. **Start the Development Server**
    npm start  

5. **Access the App**
    Open http://localhost:3000 in your browser.

6. **Project Structure**

  snapgram/  
├── src/  
│   ├── components/       # Reusable components  
│   ├── pages/            # Page components (Home, Explore, etc.)  
│   ├── hooks/            # Custom React hooks  
│   ├── services/         # API calls and Appwrite integrations  
│   ├── utils/            # Helper functions  
│   ├── App.tsx           # Root component  
│   └── index.tsx         # Entry point  
├── public/               # Static assets  
├── package.json          # Dependencies and scripts  
└── README.md             # Project documentation  

