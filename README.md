
# IELTS Prep - React Application

A modern web app for comprehensive IELTS exam preparation, built with React, Vite, and TailwindCSS.

## Features

- **Hero Section**: Eye-catching introduction with a call-to-action to explore courses.
- **Key Features**: Highlights core offerings:
	- Speaking Practice (interactive exercises)
	- Mock Test (real exam simulation)
	- AI Band Score (automated scoring estimate)
	- Personalized Coaching (tailored guidance)
- **Student Testimonials**: Real feedback from successful students.
- **Course Page**: Detailed IELTS course with modules for Listening, Reading, Writing, and Speaking.
	- Each module contains lessons (video, text, quiz).
	- Quizzes provide instant feedback on answers.
- **Navigation**: Simple routing for Home and Course pages.
- **Responsive Design**: Optimized for desktop and mobile.

## Project Structure

```
src/
	App.jsx                # Main app layout (navbar, footer)
	main.jsx               # Entry point, sets up routing
	index.css              # Tailwind and custom styles
	assets/
		iletsCourse.json     # Course data (modules, lessons, quizzes)
	component/
		Hero.jsx             # Hero section
		Features.jsx         # Features overview
		Card.jsx             # Individual feature cards
		Testimonials.jsx     # Student testimonials
		Module.jsx           # Course module display
		Lesson.jsx           # Lesson display (video, text, quiz)
		Quiz.jsx             # Quiz component
	page/
		Course.jsx           # Course page, renders modules
	routes/
		Nav.jsx              # App routes (Home, Courses)
```

## Getting Started

1. **Install dependencies**  
	 ```powershell
	 npm install
	 ```

2. **Run the development server**  
	 ```powershell
	 npm run dev
	 ```

3. **Build for production**  
	 ```powershell
	 npm run build
	 ```

4. **Preview production build**  
	 ```powershell
	 npm run preview
	 ```

## Tech Stack

- **React** (SPA, components)
- **Vite** (fast dev/build)
- **TailwindCSS** (utility-first styling)
- **React Router** (routing)
- **ESLint** (code quality)

## Customization

- Update course content in `src/assets/iletsCourse.json`.
- Add new modules, lessons, or quizzes as needed.
- Modify styles in `src/index.css` or Tailwind config.

## License

MIT
