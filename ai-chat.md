```markdown
# AI Chat Export — Website Development (Fatima Mammadova)

**Course:** Principles of Information Systems  
**Institution:** ADA University  
**Date:** December 2025  
**Duration:** Single-day development session  

_This chat documents my one-day collaboration with AI while developing my personal website project. The goal was to create a colorful, animated, responsive portfolio website that satisfies all assignment requirements._

---

## Session Log

**Fatima:**  
Hi! I’m an IT student at ADA University building my portfolio website for the Principles of Information Systems project. It needs several pages (Home, About, Projects, Contact), animations, and a responsive design. Can you help me plan the structure?

**AI:**  
Absolutely! Here’s the folder structure you should create for your website:

```

site1101/
│
├── index.html
├── about.html
├── projects.html
├── contact.html
├── styles.css
├── script.js
└── assets/

````

Use the `assets` folder for all your images and icons. Let’s start with your main page: `index.html`.

---

### 🏠 Step 1: Homepage

**Fatima:**  
I want my homepage to have my name, a short intro, and a profile picture with a glowing border.

**AI:**  
Got it! Here’s your homepage code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fatima Mammadova | IT Student</title>
  <link rel="stylesheet" href="styles.css">
  <script defer src="script.js"></script>
</head>
<body>
  <header>
    <nav class="navbar">
      <h1 class="logo">Fatima Mammadova</h1>
      <ul class="nav-links">
        <li><a href="index.html" class="active">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section class="hero">
    <img src="assets/profile.png" alt="Fatima Mammadova" class="profile-pic">
    <h2>Hi, I'm <span>Fatima Mammadova</span></h2>
    <p>An IT student at ADA University passionate about technology, coding, and creativity.</p>
    <div class="hero-buttons">
      <a href="about.html" class="btn">About Me</a>
      <a href="projects.html" class="btn">Explore My Work</a>
    </div>
  </section>

  <footer>
    <p>© 2025 Fatima Mammadova | IT Student at ADA University</p>
  </footer>
</body>
</html>
````

---

**Fatima:**
That looks perfect. Now let’s style it — I want gradient backgrounds, soft animations, and a glowing profile image.

**AI:**
Here’s your CSS:

```css
/* styles.css */
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #a6c0fe, #f68084);
  animation: gradientShift 10s ease infinite;
  background-size: 400% 400%;
  color: white;
  text-align: center;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(8px);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 30px;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-weight: 600;
}

.hero {
  padding: 100px 20px;
  animation: fadeIn 2s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.profile-pic {
  width: 160px;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.7);
  animation: float 5s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.btn {
  background-color: white;
  color: #f68084;
  border-radius: 25px;
  padding: 10px 25px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;
}

.btn:hover {
  background: #f68084;
  color: white;
}

footer {
  background: rgba(255,255,255,0.1);
  padding: 15px;
  position: fixed;
  bottom: 0;
  width: 100%;
}

@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
  }
  .hero {
    padding: 60px 15px;
  }
  .profile-pic {
    width: 120px;
  }
}
```

---

### 📘 Step 2: About Page

**Fatima:**
Let’s create my About page — I want it simple and professional.

**AI:**
Here’s your `about.html`:

```html
<section class="about">
  <h2>About Me</h2>
  <p>Hello! I’m Fatima Mammadova, an IT student at ADA University. I enjoy learning about web technologies, programming, and design.</p>

  <h3>Education</h3>
  <p>Bachelor’s in Information Technologies, ADA University</p>

  <h3>Skills</h3>
  <ul>
    <li>HTML, CSS, JavaScript</li>
    <li>Responsive Design</li>
    <li>Team Collaboration</li>
  </ul>
</section>
```

---

### 💻 Step 3: Projects Page

**Fatima:**
Now I need a projects page with my project images and details.

**AI:**
Here’s your `projects.html`:

```html
<section class="projects">
  <h2>My Projects</h2>

  <div class="project">
    <h3>Project 1: Hour of Code</h3>
    <img src="assets/project1.png" alt="Hour of Code">
    <p>This project focused on teaching coding concepts to younger students during the Hour of Code week.</p>
  </div>

  <div class="project">
    <h3>Project 2: Logic Operator Visualizer</h3>
    <img src="assets/logic-gates.png" alt="Logic Operator Project">
    <p>An interactive JavaScript project that visualized logical operations for better understanding of programming fundamentals.</p>
  </div>
</section>
```

---

### 📞 Step 4: Contact Page

**Fatima:**
Can we make a contact page with my email and social links?

**AI:**
Here’s your `contact.html`:

```html
<section class="contact">
  <h2>Contact Me</h2>
  <p>Email: fatima.mammadova@ada.edu.az</p>
  <p>LinkedIn: <a href="#">linkedin.com/in/fatimamammadova</a></p>
</section>
```

---

### 🌈 Step 5: Script Animations

**Fatima:**
How do I make small animations, like text appearing smoothly?

**AI:**
Add this to `script.js`:

```js
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  hero.style.opacity = "0";
  setTimeout(() => {
    hero.style.transition = "opacity 2s";
    hero.style.opacity = "1";
  }, 500);
});
```

---

### 🧠 Step 6: Git & GitHub Commits

**Fatima:**
Now I need to upload everything to GitHub and make proper commits.

**AI:**
Here’s how:

```
git status
git add .
git commit -m "Add complete responsive website files"
git push origin main
```

Make sure your repository shows multiple commits for different steps (adding files, updating CSS, etc.), which it does on GitHub.

---

### 🌐 Step 7: Publishing the Site

**Fatima:**
How can I get a public link for my website?

**AI:**
Go to **Settings → Pages → Branch: main → root → Save**.
Your site will be live at:
🔗 **[https://fatima110169.github.io/site1101](https://fatima110169.github.io/site1101)**

---

## Reflection

**Fatima:**
Working with AI helped me understand how to structure, style, and publish a complete website.
I learned how to use Git commands (`status`, `add`, `commit`, `push`), fix image path errors, and make a website responsive.

**AI:**
You did an excellent job! The result is a colorful, animated, responsive website that demonstrates creativity, structure, and technical understanding — perfectly aligned with your project requirements.

---

*End of AI Chat Export — Principles of Information Systems Project*

```
```
