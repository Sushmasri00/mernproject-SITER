export const demoCourses = [
  {
    _id: "course-dsa",
    title: "DSA Mastery for Placements",
    category: "DSA",
    instructor: "Aarav Sharma",
    description: "Master arrays, trees, graphs, and dynamic programming with interview-focused practice.",
    duration: "6 weeks",
    difficulty: "Intermediate",
    rating: 4.9,
    totalStudents: 3200,
  },
  {
    _id: "course-js",
    title: "JavaScript for Placement Interviews",
    category: "Programming",
    instructor: "Meera Iyer",
    description: "Learn closures, promises, async-await, DOM events, and problem-solving patterns.",
    duration: "4 weeks",
    difficulty: "Intermediate",
    rating: 4.8,
    totalStudents: 2100,
  },
  {
    _id: "course-dbms",
    title: "DBMS Interview Prep",
    category: "Core Subjects",
    instructor: "Rohit Nair",
    description: "Cover SQL, normalization, transactions, indexing, and real interview questions.",
    duration: "3 weeks",
    difficulty: "Beginner",
    rating: 4.7,
    totalStudents: 1800,
  },
  {
    _id: "course-aptitude",
    title: "Aptitude & Logical Reasoning",
    category: "Aptitude",
    instructor: "Sneha Rao",
    description: "Practice speed maths, puzzles, syllogisms, and time-based reasoning sets.",
    duration: "5 weeks",
    difficulty: "Beginner",
    rating: 4.6,
    totalStudents: 1500,
  },
];

export const demoMockTests = [
  {
    _id: "mock-amazon",
    title: "Amazon SDE Mock Test",
    category: "DSA",
    description: "A timed practice test focusing on arrays, trees, and coding problem-solving.",
    duration: 90,
    totalMarks: 100,
    passingMarks: 35,
    questions: [
      {
        id: 1,
        prompt: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        answer: "O(log n)",
      },
      {
        id: 2,
        prompt: "Which data structure uses LIFO order?",
        options: ["Queue", "Heap", "Stack", "Graph"],
        answer: "Stack",
      },
      {
        id: 3,
        prompt: "What does SQL JOIN do?",
        options: ["Combines rows from tables", "Deletes rows", "Creates indexes", "Renames columns"],
        answer: "Combines rows from tables",
      },
    ],
  },
  {
    _id: "mock-tcs",
    title: "TCS NQT Practice Test",
    category: "Aptitude",
    description: "A speed-based aptitude quiz with logical reasoning and verbal questions.",
    duration: 60,
    totalMarks: 100,
    passingMarks: 35,
    questions: [
      {
        id: 1,
        prompt: "If 20% of 250 is X, what is X?",
        options: ["25", "40", "50", "75"],
        answer: "50",
      },
      {
        id: 2,
        prompt: "Find the next term: 2, 6, 12, 20, ?",
        options: ["28", "30", "32", "36"],
        answer: "30",
      },
    ],
  },
  {
    _id: "mock-infosys",
    title: "Infosys Coding Round",
    category: "Programming",
    description: "A short coding readiness quiz for placement rounds.",
    duration: 45,
    totalMarks: 100,
    passingMarks: 35,
    questions: [
      {
        id: 1,
        prompt: "Which keyword is used to declare a constant in JavaScript?",
        options: ["let", "var", "const", "static"],
        answer: "const",
      },
      {
        id: 2,
        prompt: "What does JSON stand for?",
        options: ["Java Script Object Notation", "Java Source Object Network", "Java Standard Object Name", "Json Script Object"],
        answer: "Java Script Object Notation",
      },
    ],
  },
];

export const getDemoCourses = () => demoCourses;
export const getDemoMockTests = () => demoMockTests;
export const getStoredEnrollments = () => JSON.parse(localStorage.getItem("placementpro_enrollments") || "[]");
export const saveStoredEnrollments = (items) => localStorage.setItem("placementpro_enrollments", JSON.stringify(items));
export const getStoredQuizAttempts = () => JSON.parse(localStorage.getItem("placementpro_quiz_attempts") || "[]");
export const saveStoredQuizAttempts = (items) => localStorage.setItem("placementpro_quiz_attempts", JSON.stringify(items));
export const getStoredCourseProgress = () => JSON.parse(localStorage.getItem("placementpro_course_progress") || "{}");
export const saveStoredCourseProgress = (items) => localStorage.setItem("placementpro_course_progress", JSON.stringify(items));
