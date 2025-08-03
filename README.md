# Personal Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS. Features a clean card-based design with smooth scrolling navigation and dark mode support.

## 🚀 Features

- **Modern Design**: Clean, card-based layout with beautiful animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Scrolling**: Smooth navigation between sections
- **Interactive Elements**: Hover effects and micro-interactions
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Filterable project gallery with technology tags
- **Skills Display**: Visual skill progress bars and technology icons
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **Framer Motion** - Animation library (ready for future use)
- **Google Fonts** - Inter font family

## 📋 Sections

1. **Home** - Hero section with introduction and call-to-action
2. **About** - Personal story, experience, and education
3. **Skills** - Technical skills with progress indicators
4. **Projects** - Portfolio of work with filtering
5. **Contact** - Contact form and information

## 🎨 Design Features

- **Card-based Layout**: Clean, modern cards for content organization
- **Gradient Accents**: Beautiful gradient text and button effects
- **Hover Animations**: Subtle animations on interactive elements
- **Sticky Navigation**: Navigation bar that adapts to scroll position
- **Mobile-First**: Responsive design optimized for mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation bar
│   ├── Home.js         # Hero section
│   ├── About.js        # About section
│   ├── Skills.js       # Skills section
│   ├── Projects.js     # Projects section
│   └── Contact.js      # Contact section
├── App.js              # Main app component
├── index.js            # React entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎯 Customization

### Personal Information
Update the following files to customize your portfolio:

- **Personal Details**: Edit `src/components/Home.js` for name, title, and description
- **About Section**: Modify `src/components/About.js` for your story and experience
- **Skills**: Update `src/components/Skills.js` with your technical skills
- **Projects**: Add your projects in `src/components/Projects.js`
- **Contact**: Update contact information in `src/components/Contact.js`

### Styling
- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Change fonts in the Google Fonts link in `public/index.html`
- **Animations**: Customize animations in `src/index.css`

### Images
- Replace placeholder images with your own photos
- Update project images in the Projects component
- Add your profile picture in the Home component

## 🌟 Key Features Explained

### Dark Mode
The website includes a dark mode toggle that:
- Automatically detects user's system preference
- Persists across page refreshes
- Smoothly transitions between themes

### Smooth Scrolling
Navigation uses smooth scrolling to:
- Provide better user experience
- Create professional feel
- Work with keyboard navigation

### Responsive Design
The layout adapts to different screen sizes:
- Mobile-first approach
- Flexible grid systems
- Optimized typography scaling

### Interactive Elements
- Hover effects on cards and buttons
- Loading states for form submission
- Animated progress bars for skills

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) for the icon library
- [Unsplash](https://unsplash.com/) for placeholder images
- [Google Fonts](https://fonts.google.com/) for the Inter font family

---

**Happy coding! 🎉** 