# Task Manager Frontend

A modern full-stack Task Manager frontend built with Next.js, TypeScript, React, and Tailwind CSS.

The frontend provides user authentication, protected routes, dashboard functionality, task management, form validation, and integration with a RESTful backend API.

## Features

* User registration
* User login
* User logout
* Authentication state handling
* Protected routes
* Dashboard
* Task creation
* Task listing
* Task updating
* Task deletion
* Task filtering
* Task sorting
* Pagination support
* Form validation
* Loading and error states
* REST API integration
* Responsive user interface

## Technologies

* Next.js
* React
* TypeScript
* Tailwind CSS
* React Hook Form
* Zod
* REST API
* Fetch API

## Application Architecture

The frontend communicates with the Express backend through REST API requests.

```text
User
  ↓
Next.js UI
  ↓
React Components
  ↓
API Utility
  ↓
REST API
  ↓
Express Backend
  ↓
MongoDB
```

The backend handles authentication, authorization, data validation, and database operations while the frontend is responsible for the user interface and client-side application flow.

## Authentication

Authentication is handled through the backend API using JWT-based authentication with HttpOnly cookies.

The frontend sends authenticated requests with credentials enabled so that the browser can include the authentication cookie.

```text
Login
  ↓
Frontend sends credentials
  ↓
Express API verifies user
  ↓
JWT created
  ↓
HttpOnly cookie set
  ↓
Frontend redirects to Dashboard
  ↓
Protected API requests
```

The frontend includes protected routes to prevent unauthenticated users from accessing protected application pages.

## Pages

### Home

Provides the main entry point to the application.

### Signup

Allows new users to create an account.

### Login

Allows existing users to authenticate.

### Dashboard

Displays authenticated user information and task-related information.

### Tasks

Provides the main task management interface.

Users can create, view, update, delete, filter, and sort tasks.

## Components

The application uses reusable React components to separate UI responsibilities.

Examples include:

* `ProtectedRoute`
* `DashboardContent`
* `TasksContent`
* `TaskForm`

This component-based structure makes the frontend easier to maintain and extend.

## API Integration

API requests are centralized through the frontend API utility.

The frontend communicates with endpoints such as:

```text
POST /api/auth/signup
POST /api/auth/login
POST /api/auth/logout
GET  /api/users/me
GET  /api/tasks
POST /api/tasks
GET  /api/tasks/:id
PATCH /api/tasks/:id
DELETE /api/tasks/:id
```

Authenticated requests include credentials so the browser can send the HttpOnly authentication cookie to the backend.

## Task Management

The Tasks interface allows authenticated users to:

* Create tasks
* View tasks
* Update tasks
* Delete tasks
* Filter tasks by completion status
* Sort tasks
* Work with paginated task results

The frontend communicates with the backend API to persist task data.

## Form Validation

Forms use client-side validation to provide immediate feedback to users.

Validation schemas are defined using Zod, while React Hook Form manages form state and submission.

This provides structured validation before requests are sent to the backend.

## Project Structure

```text
task-manager-frontend/
│
├── app/
│   ├── Login page
│   ├── Signup page
│   ├── Dashboard page
│   ├── Tasks page
│   └── Other application routes
│
├── components/
│   ├── auth/
│   ├── dashboard/
│   ├── tasks/
│   └── Other reusable components
│
├── hooks/
│   └── Custom React hooks
│
├── lib/
│   └── API and utility functions
│
├── public/
│   └── Static assets
│
├── types/
│   └── TypeScript types
│
├── .gitignore
├── package.json
├── package-lock.json
├── next.config.ts
└── README.md
```

## Environment Variables

Create a `.env.local` file in the frontend project:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

For production, update the value to the deployed backend API URL.

Do not commit `.env.local` to GitHub.

## Installation

Clone the repository:

```bash
git clone https://github.com/Eagle-2026/task-manager-frontend.git
```

Navigate into the project:

```bash
cd task-manager-frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file and configure the backend API URL.

Start the development server:

```bash
npm run dev
```

The frontend will run on the local development server provided by Next.js.

## Backend

This frontend communicates with the Task Manager REST API.

[Task Manager API](https://github.com/Eagle-2026/task-manager-api)

## Related Project

This project is part of a full-stack Task Manager application consisting of:

**Frontend**

Next.js + TypeScript + Tailwind CSS

**Backend**

Node.js + Express + MongoDB + Mongoose

```text
Frontend
   ↓
REST API
   ↓
Backend
   ↓
MongoDB
```

## Future Improvements

* Automated frontend testing
* Improved accessibility
* Additional task management features
* Enhanced dashboard analytics
* More advanced filtering and search
* Improved error and loading experiences
