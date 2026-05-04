export const projectsData = [
    {
        projectName: 'E-Commerce Platform (Microservices)',
        projectDescription:
            'A production-style e-commerce backend with 6 microservices — User, Product, Order, Payment, Inventory & Notification. Uses Feign Client for synchronous calls (stock checks, payment confirmations) and Apache Kafka for async flows (inventory updates, real-time SMS/email notifications via Twilio). Each service has its own MySQL database with HikariCP pooling, secured via JWT, payments via Razorpay with webhook support, containerized with Docker Compose, and traced with Zipkin.',
        imageUrl: 'https://i.ibb.co/wNcKWJxg/temp-ecommicroservice.png',
        videoUrl: 'https://github.com/skgautam1010/E-Commerce-Spring-Boot-Microservices',
        projectUrl: 'https://github.com/skgautam1010/E-Commerce-Spring-Boot-Microservices',
        techStack: ['Java', 'Spring Boot', 'Kafka', 'Docker', 'MySQL', 'JWT', 'Razorpay'],
    },
    {
        projectName: 'Real-Time Human Intrusion Detection',
        projectDescription:
            'A smart CCTV surveillance system that solves the problem of continuous recording and missed alerts. Uses YOLOv5 to detect humans in live video frames and OpenCV to start/stop recording only when a human is present — saving up to 60% storage. The moment an intrusion is detected, the owner is instantly notified via SMS (Twilio API) and Email (SMTP). Built with a Flask backend, the system also supports user-configurable monitoring time windows for targeted surveillance.',
        imageUrl: 'https://i.ibb.co/btLsdrq/Screenshot-from-2026-05-04-23-32-28.png',
        videoUrl: 'https://github.com/skgautam1010/Human-Detection-through-CCTV',
        projectUrl: 'https://github.com/skgautam1010/Human-Detection-through-CCTV',
        techStack: ['Python', 'Flask', 'YOLOv5', 'OpenCV', 'Twilio', 'Computer Vision'],
    },
    {
        projectName: 'Image Captioning Web Application',
        projectDescription:
            'A multimodal deep learning pipeline that bridges computer vision and NLP to auto-generate image descriptions. Uses a pre-trained Xception CNN to extract high-dimensional visual features, which are decoded into grammatically correct captions by an LSTM language model. Wrapped in a Flask web app where users upload any image and instantly receive an AI-generated caption — all in real time.',
        imageUrl: 'https://i.ibb.co/C5kjDhM8/image-caption-generator.png',
        videoUrl: 'https://github.com/skgautam1010/Image-Caption-Generator',
        projectUrl: 'https://github.com/skgautam1010/Image-Caption-Generator',
        techStack: ['Python', 'Keras', 'Flask', 'CNN', 'LSTM', 'NLP', 'TensorFlow'],
    },
    {
        projectName: 'Music Recommendation System',
        projectDescription:
            'Focused for music lovers who want to discover similar music. The user can search by song name and get recommendations based on their search.',
        imageUrl: 'https://i.ibb.co/qBNPkmK/proj4.png',
        videoUrl: 'https://github.com/skgautam1010/Music-Recommendation',
        projectUrl: 'https://github.com/skgautam1010/Music-Recommendation',
        techStack: ['Python', 'Flask', 'Machine Learning'],
    },
    {
        projectName: 'Name It!',
        projectDescription:
            'Do you find it difficult to name your projects or ventures? Fear not! Check out this cool name suggestion application which will help you find the best name for your next project, venture, or startup. Keep building!',
        imageUrl: 'https://i.ibb.co/LXZv5PRH/proj1.png',
        videoUrl: 'https://github.com/skgautam1010/NameIt',
        projectUrl: 'https://skgautam1010.github.io/NameIt/',
        techStack: ['ReactJs'],
    },
    {
        projectName: 'Typing Test',
        projectDescription:
            'Having a good typing speed will always help you as a developer! Here, I present you the typing speed test application, where you can check your typing speed (in wpm) and share the results with your friends too.',
        imageUrl: 'https://i.ibb.co/8LfQm6MY/proj2.png',
        videoUrl: 'https://github.com/skgautam1010/Typing-test',
        projectUrl: 'https://skgautam1010.github.io/Typing-test/',
        techStack: ['ReactJs'],
    },
    {
        projectName: 'Patient Management System',
        projectDescription:
            'It becomes quite difficult for doctors to keep the update of their patients. This application is the one stop solution — patients can upload their data and perform all CRUD operations. Doctors can view their patient details.',
        imageUrl: 'https://i.ibb.co/VjxGpK1/proj3.png',
        videoUrl: 'https://github.com/skgautam1010/Patient-Information',
        projectUrl: 'https://github.com/skgautam1010/Patient-Information',
        techStack: ['Python', 'Django', 'HTML', 'CSS', 'Javascript'],
    },
    {
        projectName: 'Custom T-Shirt Store',
        projectDescription:
            'A store with a collection of custom t-shirts featuring code — a great pick for engineers. Users can browse and purchase t-shirts directly from the application.',
        imageUrl: 'https://i.ibb.co/px6tmxN/proj5.png',
        videoUrl: 'https://github.com/skgautam1010/Tshirt-Store',
        projectUrl: 'https://github.com/skgautam1010/Tshirt-Store',
        techStack: ['Python', 'Django', 'Django REST API', 'React'],
    },
];