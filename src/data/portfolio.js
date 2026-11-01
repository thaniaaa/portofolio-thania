import profilePhoto from '../assets/thania.jpeg'
import epaperPlans from '../assets/e-paper (1).png'
import epaperHome from '../assets/e-paper (2).png'
import epaperPayment from '../assets/e-paper (4).png'
import wissemarHome from '../assets/Picture1.png'
import wissemarCategories from '../assets/Picture2.jpg'
import wissemarAdminForm from '../assets/Picture3.jpg'
import wissemarAdminList from '../assets/Picture4.jpg'
import wissemarPopularHotels from '../assets/Picture6.jpg'
import wissemarHotels from '../assets/Picture7.jpg'
import wissemarDestination from '../assets/Picture8.jpg'
import cetakiaHome from '../assets/Screenshot 2026-11-01 155720.png'
import cetakiaSubmissions from '../assets/Screenshot 2026-11-01 155817.png'
import cetakiaReadyOrders from '../assets/Screenshot 2026-11-01 155835.png'
import cetakiaNewSubmission from '../assets/Screenshot 2026-11-01 155858.png'
import cetakiaSubmissionDetails from '../assets/Screenshot 2026-11-01 155922.png'
import cetakiaDocumentHistory from '../assets/Screenshot 2026-11-01 155930.png'
import cetakiaConfirmReceipt from '../assets/Screenshot 2026-11-01 160206.png'
import buildingDamageResult from '../assets/image (4).png'
import buildingDamageHome from '../assets/image (6).png'
import tasklyTasks from '../assets/Screenshot 2026-11-02 002906.png'
import tasklyArchive from '../assets/Screenshot 2026-11-02 002930.png'
import tasklyDashboard from '../assets/Screenshot 2026-11-02 002946.png'
import tasklyNewTask from '../assets/Screenshot 2026-11-02 003000.png'
import sentimentJournalPage from '../assets/Screenshot 2026-11-02 004959.png'

export const portfolio = {
  profile: {
    name: 'Thania Aprilah',
    initials: 'Thania',
    role: 'Web Developer & Data Scientist',
    eyebrow: ' ',
    introduction:
      'I create responsive web applications and leverage data science to turn complex insights into seamless user experiences.',
    bio: [
     'I am an Informatics Engineering student at Dian Nuswantoro University passionate about bridging software engineering and data intelligence. Whether I am developing a full-stack platform like Wissemar or training fine-tuned NLP models for sentiment analysis, I am driven by the challenge of creating meaningful digital solutions. I thrive in transforming complex data into actionable insights and wrapping them in seamless, user-friendly web applications.'
    ],
    photo: profilePhoto,
    photoAlt: 'Portrait of Thania Aprilah',
    cvWebUrl: '/documents/web-developer-cv.pdf',
    cvDataUrl: '/documents/data-science-cv.pdf',
  },
  education: [
    {
      id: 'education-placeholder',
      institution: 'Universitas Dian Nuswantoro',
      qualification: 'Informatic Engineering',
      period: '2022-2026',
    },
  ],
  skillGroups: [
    {
      id: 'frontend',
      label: 'Web development',
      tone: 'blue',
      items: ['React', 'JavaScript', 'Laravel'],
    },
    {
      id: 'tools',
      label: 'Data Science',
      tone: 'yellow',
      items: ['Python', 'Streamlit', 'Scikit-learn'],
    },
    {
      id: 'soft-skills',
      label: 'Tools & Database',
      tone: 'pink',
      items: ['GitHub', 'MySql', 'Figma'],
    },
  ],
  experiences: [
    
    {
      id: 'diskominfo-internship',
      role: 'Front-End Developer Intern',
      organization: 'Cipta Grafika',
      period: 'Jul 2026 — okt 2026',
      tone: 'blue',
      highlights: [
        'Improved Cetakia customer-oriented interface to enhance usability and user experience',
        'Fixed front-end bugs, performed functional testing, and integrated features based on API contracts',
      ],
    },
    {
      id: 'suara-merdeka-internship',
      role: 'Fullstack Developer Intern',
      organization: 'Suara Merdeka',
      period: 'Dec 2025 — Feb 2026',
      tone: 'coral',
      highlights: [
      'Developed an end-to-end e-paper subscription platform to support digital news distribution',
      'Integrated Midtrans payment gateway and implemented role-based access control for premium content'
      ],
    },
    {
      id: 'career-guidance-assistant',
      role: 'Career Guidance Assistant',
      organization: 'Informatic Engineering Department Udinus',
      period: 'Sep 2024 — Jan 2025',
      tone: 'lilac',
      highlights: [
        'Mentored 30 undergraduate students in developing full-stack web applications using Laravel',
        'Conducted regular code reviews and technical troubleshooting sessions for certification capstone projects',
      ],
    },
    {
      id: 'jasmavi-project-manager',
      role: 'Project Manager',
      organization: 'PPKO DPM FIK (JASMAVI)',
      period: 'Jun 2024 — Sep 2024',
      tone: 'yellow',
      highlights: [
        'Led the end-to-end development and deployment of a village administration portal.',
        'Digitized paper-based request workflows to improve public service accessibility in Jatimulyo Village',
      ],
    },
  ],
  projects: [
    {
      id: 'taskly-task-manager',
      category: 'web',
      title: 'Taskly – Personal Productivity Workspace',
      description:
        'A personal task manager for organizing activities, tracking progress, and keeping deadlines in view.',
      longDescription:
        'Taskly is a personal productivity web application built with HTML, CSS, and JavaScript. It helps users create and organize tasks, filter them by status and priority, monitor progress on a dashboard, view upcoming deadlines on a calendar, and manage archived tasks through a clear, structured interface.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: tasklyTasks,
      imageAlt: 'Taskly task manager showing a list of tasks and filters',
      screenshots: [
        { src: tasklyTasks, alt: 'Taskly task list with status and priority controls', label: 'Task list', width: 1913, height: 870 },
        { src: tasklyDashboard, alt: 'Taskly dashboard with progress summary, calendar, and deadlines', label: 'Dashboard', width: 1913, height: 862 },
        { src: tasklyNewTask, alt: 'Form for creating a new task in Taskly', label: 'New task', width: 1890, height: 850 },
        { src: tasklyArchive, alt: 'Taskly archived tasks page', label: 'Task archive', width: 1907, height: 847 },
      ],
      visualTone: 'yellow',
      actionLabel: 'Live Demo',
      demoUrl: 'https://task-manager-drab-pi.vercel.app/',
      repositoryUrl: 'https://github.com/thaniaaa/task-manager.git',
    },
    {
      id: 'cetakia-erp',
      category: 'web',
      title: 'Cetakia – Integrated Printing Business ERP Platform',
      description:
        'An integrated ERP platform that connects sales, production, inventory, purchasing, delivery, and finance for printing businesses.',
      longDescription:
        'Cetakia centralizes printing business workflows in one platform, from customer management and sales orders to production tracking, purchasing, inventory, delivery, invoicing, and reporting. Its connected modules help teams keep records consistent, coordinate work across departments, and monitor daily operations.',
      technologies: ['React', 'CSS', 'Tailwind', 'Javascript'],
      stackLabel: 'Core Modules',
      image: cetakiaHome,
      imageAlt: 'Cetakia printing business ERP home page',
      screenshots: [
        { src: cetakiaHome, alt: 'Cetakia home page showing the printing ERP platform', label: 'Platform overview', width: 1907, height: 861 },
        { src: cetakiaSubmissions, alt: 'Cetakia invoice submissions directory', label: 'Invoice submissions', width: 1912, height: 872 },
        { src: cetakiaReadyOrders, alt: 'Sales orders ready for invoice submission', label: 'Ready sales orders', width: 1916, height: 817 },
        { src: cetakiaNewSubmission, alt: 'Form for creating a new invoice submission', label: 'New submission', width: 1917, height: 867 },
        { src: cetakiaSubmissionDetails, alt: 'Invoice submission details and status', label: 'Submission details', width: 1908, height: 861 },
        { src: cetakiaDocumentHistory, alt: 'Invoice submission document history', label: 'Document history', width: 1900, height: 851 },
        { src: cetakiaConfirmReceipt, alt: 'Form to confirm receipt of an invoice submission', label: 'Receipt confirmation', width: 1900, height: 856 },
      ],
      visualTone: 'blue',
      actionLabel: 'View Details',
      demoUrl: null,
      repositoryUrl: null,
    },
    {
      id: 'epaper-subscription',
      category: 'web',
      title: 'E-Paper Subscription Platform',
      description:
        'A digital newspaper platform with subscription-based access to premium editions and integrated Midtrans payments.',
      longDescription:
        'Developed during my internship at Suara Merdeka, this web-based platform lets readers subscribe to access premium e-paper editions and articles. I built subscription management, integrated Midtrans for online payments, and implemented role-based access control to manage digital content access.',
      technologies: ['Laravel', 'MySQL', 'Midtrans'],
      image: epaperHome,
      imageAlt: 'E-Paper home page for Suara Merdeka readers',
      screenshots: [
        { src: epaperHome, alt: 'E-Paper home page', label: 'Home page' },
        { src: epaperPlans, alt: 'Subscription plans for E-Paper access', label: 'Subscription plans' },
        { src: epaperPayment, alt: 'Midtrans payment window for a subscription', label: 'Midtrans payment' },
      ],
      visualTone: 'coral',
      actionLabel: 'View Details',
      demoUrl: null,
      repositoryUrl: '',
    },
    {
      id: 'wissemar-tourism',
      category: 'web',
      title: 'Wissemar Tourism Platform',
      description:
        'An interactive web platform designed to improve public access to destination details in Semarang.',
      longDescription:
        'An interactive tourism platform that makes destination information in Semarang easier to discover and understand. Its responsive interface presents essential location details in a clear format for visitors across desktop and mobile devices.',
      technologies: ['Node.js', 'Bootstrap', 'JavaScript'],
      image: wissemarHome,
      imageAlt: 'Wissemar home page featuring Semarang tourism',
      screenshots: [
        { src: wissemarHome, alt: 'Wissemar home page with Kota Lama featured', label: 'Home page', width: 704, height: 352 },
        { src: wissemarCategories, alt: 'Wissemar tourism category cards', label: 'Tourism categories', width: 422, height: 241 },
        { src: wissemarAdminForm, alt: 'Wissemar admin form for editing a destination', label: 'Destination editor', width: 421, height: 237 },
        { src: wissemarAdminList, alt: 'Wissemar admin destination list', label: 'Admin dashboard', width: 432, height: 242 },
        { src: wissemarPopularHotels, alt: 'Popular hotels and Semarang facts on Wissemar', label: 'Popular hotels', width: 381, height: 160 },
        { src: wissemarHotels, alt: 'List of hotels in Semarang on Wissemar', label: 'Hotel listings', width: 291, height: 185 },
        { src: wissemarDestination, alt: 'Wissemar destination detail page for a contemporary art gallery', label: 'Destination detail', width: 471, height: 227 },
      ],
      visualTone: 'blue',
      actionLabel: 'Live Demo',
      demoUrl: null,
      repositoryUrl: 'https://github.com/thaniaaa/wissemarang.git',
    },
    {
      id: 'aspect-sentiment-analysis',
      category: 'data',
      title: 'Aspect-Based Sentiment Analysis',
      description:
        'Fine-tuned IndoBERT model using Hugging Face to classify customer feedback with high accuracy.',
      longDescription:
        'A natural language processing project for identifying sentiment across specific aspects of Indonesian hotel reviews. The workflow uses a fine-tuned IndoBERT model through Hugging Face to prepare, classify, and evaluate responses. The research was published in the Journal of Applied Informatics and Computing (JAIC), Vol. 9, No. 6, December 2025.',
      technologies: ['Python', 'Hugging Face', 'IndoBERT'],
      image: sentimentJournalPage,
      imageAlt: 'First page of the published IndoBERT sentiment analysis article in JAIC',
      imageFit: 'contain',
      mediaLabel: 'Journal publication',
      mediaUrl: sentimentJournalPage,
      visualTone: 'purple',
      actionLabel: 'View Details',
      demoUrl: null,
      repositoryUrl: 'https://doi.org/10.30871/jaic.v9i6.11409',
    },
    {
      id: 'building-damage-detection',
      category: 'data',
      title: 'Building Damage Detection',
      description:
        'Computer vision application built with OpenCV and Scikit-learn to classify structural damage.',
      longDescription:
        'A computer vision application that processes structural imagery and classifies signs of building damage. OpenCV supports the image-processing pipeline, while Scikit-learn handles classification and Streamlit provides an accessible interactive interface.',
      technologies: ['Python', 'OpenCV', 'Scikit-learn', 'Streamlit'],
      image: buildingDamageResult,
      imageAlt: 'Building Damage Detection result for an uploaded wall image',
      screenshots: [
        { src: buildingDamageHome, alt: 'Building Damage Detection application home page', label: 'Application overview', width: 1920, height: 1080 },
        { src: buildingDamageResult, alt: 'Detection result identifying damage in an uploaded wall image', label: 'Detection result', width: 1920, height: 1080 },
      ],
      visualTone: 'cyan',
      actionLabel: 'Live Demo',
      demoUrl: 'https://deteksibangunan.streamlit.app/',
      repositoryUrl: 'https://github.com/thaniaaa/deteksi-bangunan.git',
    },
  ],
  contact: {
    location: 'Karawang, Indonesia',
    email: 'thaniaaprilah05@gmail.com',
    linkedinLabel: 'linkedin.com/in/thaniaaprilah',
    linkedinUrl: 'https://linkedin.com/in/thaniaaprilah',
    githubLabel: 'github.com/thaniaaaa',
    githubUrl: 'https://github.com/thaniaaa',
  },
}
