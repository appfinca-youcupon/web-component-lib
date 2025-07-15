# YouCupon Shared Components

A React component library for creating and managing coupon UI components with email template generation capabilities.

## Features

- **Reusable React Components** - Multiple coupon layouts (standard, small, email-optimized)
- **Storybook Documentation** - Interactive component playground and documentation
- **Email Templates** - Generate responsive HTML email templates with Bootstrap Email
- **Customizable Styling** - Flexible theming with colors, sizes, and backgrounds
- **AWS SES Integration** - Built-in email sending capabilities

## Prerequisites

- **Node.js** (v16 or higher recommended)
- **Yarn** 4.2.2 (this project uses Yarn Berry)
- **Ruby** (for Bootstrap Email - email template generation)

## Installation

This project uses Yarn 4 (Berry). To install dependencies:

```bash
# If you don't have Yarn 4 initialized
yarn init -2

# Install dependencies
yarn
```

## 🏃‍♂️ Development

### Start Development Server

```bash
yarn dev
# Runs on http://localhost:5173
```

### Component Development with Storybook

```bash
yarn storybook
# Opens Storybook on http://localhost:6006
```

### Build for Production

```bash
yarn build
# Output: /dist directory
```

### Preview Production Build

```bash
yarn preview
```

## 📧 Email Templates

### Setup

1. Install Bootstrap Email gem:

   ```bash
   gem install bootstrap-email
   ```

2. Build email templates:

   ```bash
   yarn email-build
   # Output: /email-build directory
   ```

3. Test email sending (requires AWS credentials):
   ```bash
   yarn email-test
   # Builds templates and sends test email
   ```

## Project Structure

```
coupon-components/
├── src/
│   ├── coupon/          # React coupon components
│   ├── stories/         # Storybook stories
│   └── render/          # Email rendering utilities
├── email/
│   ├── src/             # Email template sources
│   └── build/           # Compiled email templates
├── dist/                # Vite build output
├── dist-render/         # Email render build output
└── components/          # Git submodule directory
```

## Available Scripts

| Command                | Description                                |
| ---------------------- | ------------------------------------------ |
| `yarn dev`             | Start Vite development server              |
| `yarn build`           | Build for production                       |
| `yarn preview`         | Preview production build                   |
| `yarn storybook`       | Start Storybook development server         |
| `yarn build-storybook` | Build static Storybook                     |
| `yarn lint`            | Run ESLint                                 |
| `yarn email-build`     | Generate email templates                   |
| `yarn email-send`      | Send test email (requires AWS credentials) |
| `yarn email-test`      | Build and send test email                  |
| `yarn copy-submodule`  | Copy components to submodule directory     |

## Branch Structure

- **`master`** - Main development branch with full build tools
- **`components`** - Submodule branch containing only component files for importing into other projects

## Using as a Submodule

To use these components in another project:

```bash
git submodule add -b components https://github.com/youcupon/coupon-components.git path/to/components
```
