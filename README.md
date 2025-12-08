# Pratik's macOS-Inspired Portfolio

A modern, interactive portfolio website inspired by macOS design with draggable windows, animations, and a polished user experience. Built with React, Vite, and GSAP for smooth animations.

## 🎨 Features

- **macOS-Style Interface** - A desktop-like experience with draggable windows, window controls, and a dock
- **Interactive Components**
  - 🗂️ **Finder** - Browse projects and files with a sidebar navigation
  - 📖 **Articles** - Read developer blog posts and articles
  - 🎨 **Gallery** - Browse and preview images with a beautiful gallery layout
  - 📄 **Resume** - View and download your resume as a PDF
  - 📞 **Contact** - Connect via social media links
  - 💻 **Terminal** - Display technical skills and tech stack
- **Smooth Animations** - GSAP-powered hover effects and window transitions
- **Responsive Design** - Tailwind CSS for mobile-friendly layouts
- **Window Management** - Open, close, minimize, and maximize windows
- **Text Hover Effects** - Dynamic font weight changes on text hover

## 🚀 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Animations**: GSAP 3 + GSAP React
- **State Management**: Zustand
- **PDF Viewer**: react-pdf
- **Icons**: Lucide React
- **UI Components**: react-tooltip
- **Utilities**: clsx, dayjs, immer

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Dock.jsx        # macOS-style dock with app icons
│   ├── Navbar.jsx      # Top navigation bar
│   ├── Welcome.jsx     # Hero section with text animations
│   ├── Home.jsx        # Project grid
│   └── ...
├── windows/            # Window components
│   ├── Finder.jsx      # File explorer window
│   ├── Safari.jsx      # Blog articles window
│   ├── Photos.jsx      # Gallery window
│   ├── Terminal.jsx    # Skills window
│   ├── Resume.jsx      # PDF resume viewer
│   ├── Contact.jsx     # Contact information window
│   ├── Image.jsx       # Image preview window
│   └── ...
├── hoc/                # Higher-Order Components
│   └── WindowWrapper.jsx # Wraps components with window functionality
├── store/              # State management (Zustand)
│   ├── window.js       # Window state (open/close, z-index, position)
│   └── location.js     # File location state
├── constants/          # Configuration and data
│   └── index.js        # App constants, dock apps, navigation
├── App.jsx            # Root component
├── main.jsx           # Entry point
└── index.css          # Global styles

public/
├── files/             # Downloadable files (resume.pdf)
├── icons/             # Icon assets
└── images/            # Image assets
```

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/prateekraiger/pratik-mac.git
   cd pratik-mac
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **Build for production**
   ```bash
   pnpm build
   ```

## 🎮 Usage

### Opening Windows

- Click on dock icons or navbar links to open different windows
- Windows are draggable by their header
- Use window controls (red/yellow/green buttons) to close, minimize, or maximize

### Gallery

- Click on "Gallery" to view your image collection
- Click on any image to open it in a preview window
- Use the sidebar to filter by categories

### Finder

- Browse projects and files
- Click on folders to navigate
- Double-click images to preview them
- Click on links to open in new tab

### Resume

- View your resume as a PDF
- Download button available in the window header

### Customization

**Update Portfolio Content:**

- Edit `src/constants/index.js` to update projects, blog posts, and links
- Replace images in `public/images/` and `public/icons/`
- Update resume PDF in `public/files/resume.pdf`

**Modify Colors and Styles:**

- Edit `src/index.css` for component styles
- Tailwind CSS can be customized via the config

**Change Window Content:**

- Edit individual window files in `src/windows/`
- Components are wrapped with `WindowWrapper` HOC for window functionality

## 🎯 Key Components

### WindowWrapper HOC

Higher-order component that adds window functionality to any component:

- Dragging via GSAP Draggable
- Window animations (scale, opacity, y-translate)
- Z-index management for focus
- Minimize/maximize functionality

### Welcome Component

Hero section with interactive text animation:

- Font weight changes based on mouse proximity
- Separate animations for title and subtitle

### Dock Component

macOS-style dock with:

- App icons
- Scale animation on hover
- Tooltips with app names
- Disable state for unavailable apps

## 📱 Responsive Design

- **Desktop**: Full macOS-style experience with draggable windows
- **Tablet**: Optimized layout with adjusted spacing
- **Mobile**: Shows a message to use desktop for best experience

## 🔧 Available Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Run linter
pnpm lint

# Preview production build
pnpm preview
```

## 🌟 Highlights

- **Dynamic Window Management** - Windows with proper z-index stacking and focus management
- **PDF Support** - Integrated PDF viewer for resume display
- **Image Previews** - Click any image to open in a dedicated preview window
- **Smooth Animations** - All transitions and interactions use GSAP for performance
- **State Persistence** - Zustand for reliable state management
- **Modern Tooling** - Vite for fast development and optimized builds

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Pratik Raiger - [GitHub](https://github.com/prateekraiger)

---

**Enjoy exploring the portfolio! Feel free to customize it for your own use.** 🚀
