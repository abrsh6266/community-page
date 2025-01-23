# Community Page Project

This is a Community Page project built with React, Vite, and TypeScript. The application allows users to create posts, add comments, and reply to comments in a nested structure. It is styled with SCSS and uses a UI library like Material-UI, toastifies and others.

## Features

1. **Post Management**: Create and display posts with titles and bodies.
2. **Nested Comments**: Add comments to posts and reply to existing comments recursively.
3. **Responsive Design**: User-friendly UI with responsive styling.
4. **Mock Data**: Uses mock data (`posts.json`) to simulate posts and comments.
5. **Type Safety**: Fully typed with TypeScript for maintainability.

## Project Setup

### Prerequisites

- Node.js (v16 or higher)
- npm

### Steps to Set Up the Project Locally

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Development Server**:

   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

## Dependencies

### Core

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

### Development Tools

- SCSS for modular styles

## Styling

- SCSS is used for modular and maintainable styles.
- Component-specific styles are located in the `src/styles/components/` directory.

### Example File:

`post.scss`:

```scss
.post {
  border: 1px solid #ddd;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: #fff;
}
```

## Core Features

### Post Creation

- A form to create new posts with a title and body.
- Basic validation for required fields.

### Search Posts

- search Posts by there title and body

### Commenting

- Recursive rendering of comments and replies.
- A form to add comments to posts or other comments.

## Architectural Considerations

- **Modular Components**: Components are small and focused.
- **TypeScript Interfaces**: Provides type safety for props and state.
- **Utility Functions**: Common logic (e.g., date formatting) is extracted into reusable utility functions.

## Development Tips

1. Use `npm run lint` or `yarn lint` to check code quality.
2. Write reusable components for better maintainability.
3. Keep SCSS modular and scoped to individual components.
