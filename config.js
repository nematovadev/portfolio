/**
 * PORTFOLIO PROJECT CONFIGURATION
 * Professional Portfolio Website
 * Created: March 2026
 * Version: 1.0.0
 */

const CONFIG = {
    // Project Information
    project: {
        name: "Feruza's Professional Portfolio",
        version: "1.0.0",
        author: "Feruza",
        lastUpdated: "2026-03-25",
        description: "Professional portfolio website built with HTML5, CSS3, JavaScript, and React"
    },

    // Site Configuration
    site: {
        title: "Feruza | Professional Portfolio",
        name: "Feruza",
        email: "nematova.f1510@gmail.com",
        phone: "+998 772901103",
        location: "Andijon, Uzbekistan",
        timezone: "UTC+5",
        language: "uz-UZ"
    },

    // Social Media Links
    social: {
        telegram: "https://t.me/Nemat0va_f",
        instagram: "https://instagram.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
    },

    // Colors Theme
    colors: {
        primary: "#6fffe9",      // Cyan - Main accent
        secondary: "#4cc9f0",    // Light blue
        dark: "#0b132b",         // Dark blue background
        darkLight: "#1c2541",    // Light dark background
        white: "#ffffff",        // White text
        gray: "#afb3b7",         // Gray text
        success: "#0caf0c",      // Green
        error: "#ff6b6b"         // Red
    },

    // Pages Configuration
    pages: {
        home: {
            title: "Home | Portfolio",
            description: "Professional web developer and UI designer",
            url: "index.html",
            active: true
        },
        about: {
            title: "About | Portfolio",
            description: "Learn more about me",
            url: "about.html",
            active: true
        },
        skills: {
            title: "Skills | Portfolio",
            description: "My technical skills and expertise",
            url: "skills.html",
            active: true
        },
        work: {
            title: "Work | Portfolio",
            description: "View my portfolio projects",
            url: "work.html",
            active: true
        },
        contact: {
            title: "Contact | Portfolio",
            description: "Get in touch with me",
            url: "contact.html",
            active: true
        },
        login: {
            title: "Login | Portfolio",
            description: "Login to account",
            url: "login.html",
            active: true
        },
        signup: {
            title: "Sign Up | Portfolio",
            description: "Create new account",
            url: "signup.html",
            active: true
        }
    },

    // Services Offered
    services: [
        {
            id: 1,
            name: "Web Development",
            icon: "fa-laptop-code",
            description: "Building responsive and high-performance websites"
        },
        {
            id: 2,
            name: "UI/UX Design",
            icon: "fa-palette",
            description: "Modern and clean user interface designs"
        },
        {
            id: 3,
            name: "SEO Optimization",
            icon: "fa-search",
            description: "Making your website visible to the world"
        },
        {
            id: 4,
            name: "Responsive Design",
            icon: "fa-mobile-alt",
            description: "Perfect design for all devices"
        },
        {
            id: 5,
            name: "Technical Support",
            icon: "fa-cog",
            description: "24/7 website maintenance and support"
        },
        {
            id: 6,
            name: "Performance Analysis",
            icon: "fa-chart-line",
            description: "Optimization of speed and performance"
        }
    ],

    // Skills
    skills: {
        languages: ["HTML5", "CSS3", "JavaScript", "Uzbek"],
        frameworks: ["React", "Bootstrap"],
        tools: ["VS Code", "Git", "GitHub", "DevTools"],
        design: ["Figma", "UI/UX Design", "Responsive Design"],
        other: ["SEO", "API Integration", "Performance Optimization"]
    },

    // Statistics
    stats: {
        yearsExperience: 3,
        projectsCompleted: 25,
        happyClients: 15,
        qualityRate: 100
    },

    // Responsive Breakpoints
    breakpoints: {
        mobile: 320,
        tablet: 768,
        desktop: 1024,
        wide: 1440,
        ultraWide: 1920
    },

    // Technologies Used
    technologies: {
        frontend: ["HTML5", "CSS3", "JavaScript ES6+", "React 18"],
        icons: "Font Awesome 6.0",
        hosting: "GitHub Pages / Netlify / Vercel",
        tools: ["VS Code", "Git", "npm"]
    },

    // SEO Configuration
    seo: {
        keywords: [
            "portfolio",
            "web developer",
            "UI designer",
            "freelancer",
            "responsive design",
            "web development"
        ],
        ogImage: "/og-image.png",
        twitterHandle: "@yourtwitterhandle",
        canonical: "https://your-domain.com"
    },

    // Performance Settings
    performance: {
        imageOptimization: true,
        lazyLoading: true,
        minifyCss: true,
        minifyJs: true,
        caching: true
    },

    // Analytics (Optional)
    analytics: {
        enabled: false,
        googleAnalyticsId: "UA-0000000-0",
        hotjarId: null
    },

    // Feature Flags
    features: {
        darkMode: true,
        mobileMenu: true,
        formValidation: true,
        animations: true,
        smoothScroll: true,
        lazyLoad: true
    },

    // Navigation Links
    navigation: [
        { label: "Home", url: "index.html", icon: "fa-home" },
        { label: "About", url: "about.html", icon: "fa-user" },
        { label: "Skills", url: "skills.html", icon: "fa-code" },
        { label: "Work", url: "work.html", icon: "fa-briefcase" },
        { label: "Contact", url: "contact.html", icon: "fa-envelope" }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

// Log configuration on load
console.log('%c📊 Portfolio Configuration Loaded', 'color: #6fffe9; font-size: 14px; font-weight: bold;');
console.log(`%c✅ Version: ${CONFIG.project.version}`, 'color: #4cc9f0; font-size: 12px;');
console.log(`%c📱 Mobile Friendly: Yes`, 'color: #6fffe9; font-size: 12px;');
console.log(`%c⚡ Performance: Optimized`, 'color: #4cc9f0; font-size: 12px;');
