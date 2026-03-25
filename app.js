/**
 * React Components for Portfolio
 * Using React 18 from CDN
 */

const { useState, useEffect, useCallback } = React;

// ===== PORTFOLIO DATA =====
const portfolioData = {
    services: [
        {
            id: 1,
            icon: 'fa-laptop-code',
            title: 'Web Development',
            description: 'HTML5, CSS3, JavaScript va React bilan responsive saytlar yarataman.'
        },
        {
            id: 2,
            icon: 'fa-palette',
            title: 'UI/UX Design',
            description: 'Foydalanuvchi-centric va zamonavoy interfeys dizayni.'
        },
        {
            id: 3,
            icon: 'fa-search',
            title: 'SEO Optimizatsiya',
            description: 'Saytingiz qidiruv tizimlarida yuqori o\'rinni olishi uchun optimallashtirish.'
        },
        {
            id: 4,
            icon: 'fa-mobile-alt',
            title: 'Responsive Design',
            description: 'Barcha cihazlar uchun mug\'im dizayn.'
        },
        {
            id: 5,
            icon: 'fa-cog',
            title: 'Texnik Qo\'llab-Quvvatlash',
            description: 'Saytingizni ishchi holatda saqlash va yangilashlarni qo\'llab-quvvatlayman.'
        },
        {
            id: 6,
            icon: 'fa-chart-line',
            title: 'Performance Tahlil',
            description: 'Saytning sur\'ati va ishlashini tahlil qilib yaxshilaman.'
        }
    ],

    skills: [
        { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap'], level: 95 },
        { category: 'UI/UX', items: ['Figma', 'Adobe XD', 'Responsive Design'], level: 90 },
        { category: 'Tools', items: ['Git', 'VS Code', 'DevTools', 'Webpack'], level: 85 },
        { category: 'Other', items: ['SEO', 'API Integration', 'Performance'], level: 80 }
    ],

    projects: [
        {
            id: 1,
            title: 'E-Commerce Website',
            category: 'web',
            description: 'Zargarlik mahsulotlarini sotuvchi online do'kon saytini dizayni.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            link: '#'
        },
        {
            id: 2,
            title: 'Restaurant Website',
            category: 'web',
            description: 'Restoran uchun zamonavoy va responsive sayt.',
            tech: ['HTML5', 'CSS3', 'Bootstrap'],
            link: '#'
        },
        {
            id: 3,
            title: 'Todo List App',
            category: 'mobile',
            description: 'Task management uchun mobile ilova.',
            tech: ['React', 'Firebase', 'Material UI'],
            link: '#'
        }
    ]
};

// ===== SERVICE CARD COMPONENT =====
function ServiceCard({ service }) {
    const [hovered, setHovered] = useState(false);

    return React.createElement('div', {
        className: 'service-card',
        style: {
            transform: hovered ? 'translateY(-10px)' : 'translateY(0)'
        },
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false)
    },
        React.createElement('div', { className: 'service-icon' },
            React.createElement('i', { className: `fas ${service.icon}` })
        ),
        React.createElement('h3', null, service.title),
        React.createElement('p', null, service.description)
    );
}

// ===== SKILL PROGRESS COMPONENT =====
function SkillProgress({ skill }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(skill.level);
        }, 300);

        return () => clearTimeout(timer);
    }, [skill.level]);

    return React.createElement('div', { style: { marginBottom: '30px' } },
        React.createElement('h4', null, skill.category),
        React.createElement('div', {
            style: {
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
                marginBottom: '10px'
            }
        },
            skill.items.map(item =>
                React.createElement('span', {
                    key: item,
                    style: {
                        background: 'rgba(111, 255, 233, 0.1)',
                        color: '#6fffe9',
                        padding: '5px 12px',
                        borderRadius: '5px',
                        fontSize: '12px'
                    }
                }, item)
            )
        ),
        React.createElement('div', {
            style: {
                background: 'rgba(255, 255, 255, 0.05)',
                height: '6px',
                borderRadius: '3px',
                overflow: 'hidden'
            }
        },
            React.createElement('div', {
                style: {
                    background: 'linear-gradient(90deg, #6fffe9, #4cc9f0)',
                    height: '100%',
                    width: `${progress}%`,
                    transition: 'width 1s ease-out'
                }
            })
        )
    );
}

// ===== PORTFOLIO STATS COMPONENT =====
function PortfolioStats() {
    const [stats, setStats] = useState([
        { number: 3, label: 'Yil Tajribasi', icon: '📅' },
        { number: 25, label: 'Tugallangan Loyihalar', icon: '💼' },
        { number: 15, label: 'Qoniqtirilgan Mijozlar', icon: '👥' },
        { number: 100, label: 'Sifat Kafolati %', icon: '⭐' }
    ]);

    return React.createElement('div', {
        style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            marginTop: '40px'
        }
    },
        stats.map(stat =>
            React.createElement('div', {
                key: stat.label,
                style: {
                    background: 'rgba(111, 255, 233, 0.1)',
                    padding: '30px',
                    borderRadius: '15px',
                    textAlign: 'center',
                    border: '1px solid rgba(111, 255, 233, 0.2)'
                }
            },
                React.createElement('div', { style: { fontSize: '32px', marginBottom: '10px' } }, stat.icon),
                React.createElement('div', {
                    style: {
                        fontSize: '32px',
                        fontWeight: '700',
                        color: '#6fffe9',
                        marginBottom: '10px'
                    }
                }, stat.number),
                React.createElement('div', {
                    style: {
                        color: '#afb3b7',
                        fontSize: '14px'
                    }
                }, stat.label)
            )
        )
    );
}

// ===== TESTIMONIAL COMPONENT =====
function Testimonial({ author, text, role }) {
    return React.createElement('div', {
        style: {
            background: 'rgba(28, 37, 65, 0.8)',
            padding: '30px',
            borderRadius: '15px',
            borderLeft: '4px solid #6fffe9',
            marginBottom: '20px'
        }
    },
        React.createElement('p', {
            style: {
                color: '#afb3b7',
                lineHeight: '1.8',
                marginBottom: '15px'
            }
        }, `"${text}"`),
        React.createElement('div', {
            style: {
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
            }
        },
            React.createElement('div', {
                style: {
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6fffe9, #4cc9f0)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px'
                }
            }, author.charAt(0)),
            React.createElement('div', null,
                React.createElement('strong', null, author),
                React.createElement('div', { style: { color: '#6fffe9', fontSize: '12px' } }, role)
            )
        )
    );
}

// ===== CONTACT FORM COMPONENT =====
function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        // Validation
        if (formData.name && formData.email && formData.subject && formData.message) {
            console.log('Form submitted:', formData);
            setSubmitted(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setFormData({ name: '', email: '', subject: '', message: '' });
                setSubmitted(false);
            }, 3000);
        } else {
            alert('Barcha maydonlarni to\'ldiring');
        }
    }, [formData]);

    return React.createElement('form', { onSubmit: handleSubmit },
        React.createElement('input', {
            type: 'text',
            name: 'name',
            placeholder: 'Ismingiz',
            value: formData.name,
            onChange: handleChange,
            required: true,
            style: {
                width: '100%',
                padding: '12px 15px',
                marginBottom: '15px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                color: '#ffffff',
                fontFamily: 'Poppins, sans-serif'
            }
        }),
        React.createElement('input', {
            type: 'email',
            name: 'email',
            placeholder: 'Emailingiz',
            value: formData.email,
            onChange: handleChange,
            required: true,
            style: {
                width: '100%',
                padding: '12px 15px',
                marginBottom: '15px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                color: '#ffffff',
                fontFamily: 'Poppins, sans-serif'
            }
        }),
        React.createElement('input', {
            type: 'text',
            name: 'subject',
            placeholder: 'Mavzu',
            value: formData.subject,
            onChange: handleChange,
            required: true,
            style: {
                width: '100%',
                padding: '12px 15px',
                marginBottom: '15px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                color: '#ffffff',
                fontFamily: 'Poppins, sans-serif'
            }
        }),
        React.createElement('textarea', {
            name: 'message',
            placeholder: 'Xabaringiz...',
            value: formData.message,
            onChange: handleChange,
            required: true,
            rows: 5,
            style: {
                width: '100%',
                padding: '12px 15px',
                marginBottom: '15px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                color: '#ffffff',
                fontFamily: 'Poppins, sans-serif',
                resize: 'vertical'
            }
        }),
        React.createElement('button', {
            type: 'submit',
            style: {
                width: '100%',
                padding: '12px 30px',
                background: submitted ? '#0caf0c' : '#6fffe9',
                color: '#0b132b',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '16px'
            }
        }, submitted ? '✓ Xabar yuborildi!' : 'Yuborish')
    );
}

// ===== MAIN APP COMPONENT =====
function App() {
    useEffect(() => {
        console.log('✅ React porfolio app loaded');
        console.log('📊 Services:', portfolioData.services.length);
        console.log('💼 Projects:', portfolioData.projects.length);
    }, []);

    return React.createElement(React.Fragment, null,
        // Services section will be rendered in HTML
        // This is for dynamic components
        React.createElement('div', {
            id: 'react-services',
            style: { display: 'contents' }
        })
    );
}

// ===== INITIALIZE REACT =====
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const root = ReactDOM.createRoot(document.body);
        root.render(React.createElement(App));
    });
} else {
    const root = ReactDOM.createRoot(document.body);
    root.render(React.createElement(App));
}

// ===== UTILITY FUNCTIONS =====

/**
 * Fetch from API endpoint
 */
async function apiCall(endpoint, options = {}) {
    try {
        const response = await fetch(endpoint, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('API Call failed:', error);
        return null;
    }
}

/**
 * Format date to readable format
 */
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('uz-UZ', options);
}

/**
 * Smooth scroll to element
 */
function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Copy to clipboard
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied:', text);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Export functions for global use
window.PortfolioApp = {
    data: portfolioData,
    apiCall,
    formatDate,
    scrollToElement,
    copyToClipboard,
    ServiceCard,
    SkillProgress,
    PortfolioStats,
    Testimonial,
    ContactForm
};