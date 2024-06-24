# Xoom - Zoom Clone with Next.js

Xoom is a Zoom clone application built using Next.js. It uses clerk.com for user authentication and user management and GetStream.io for video calling functionality. This project aims to provide a scalable, secure, and intuitive video conferencing solution.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User authentication and management with Clerk.com
- Video calling with GetStream.io
- Real-time messaging and chat functionality
- Screen sharing and recording
- Multiple participants in video calls
- Responsive and user-friendly UI

## Tech Stack

- **Frontend**: Next.js, React
- **Authentication**: Clerk.com
- **Video Calling**: GetStream.io
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (>= 14.x)
- npm or yarn
- GetStream.io account
- Clerk.com account

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Clone the Repository

`git clone https://github.com/junaid7lone/next-zoom.git`

`cd xoom`

### Installation

Install the dependencies using npm or yarn.

`npm install`

_or_

`yarn install`

### Configuration

1. **Clerk Setup**:

   - Sign up for [Clerk.com](https://clerk.com) and create a new application.
   - Obtain your Clerk API keys and add them to a `.env.local` file:

     `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<Your Clerk Frontend API>`

     `CLERK_SECRET_KEY=<Your Clerk API Key>`

2. **GetStream Setup**:

   - Sign up for [GetStream.io](https://getstream.io) and create a new application.
   - Obtain your Stream API keys and add them to your `.env.local` file:

     `NEXT_PUBLIC_STREAM_API_KEY=<Your Stream API Key>`

     `STREAM_SECRET_KEY=<Your Stream API Secret>`

3. **Environment Variables**:

   - Add any other required environment variables to `.env.local`:

     `NEXT_PUBLIC_BASE_URL=<Your Site URL>`

### Running the Application

Start the development server:

`npm run dev`

_or_

`yarn dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. **Sign Up / Sign In**:

   - Use Clerk’s authentication interface to sign up or sign in to your account.

   `NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up`

   `NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in`

2. **Create / Join Meeting**:

   - Once authenticated, you can create a new meeting or join an existing one using the meeting ID.

3. **Video and Chat**:
   - During the meeting, you can use video calling and real-time chat features powered by GetStream.io.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new feature branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.txt) file for details.

## Contact

- **Author**: Your Name
- **Email**: your-email@example.com
- **GitHub**: [junaid7lone](https://github.com/junaid7lone)
- **Project Repository**: [Xoom on GitHub](https://github.com/junaid7lone/next-zoom)
