import DashboardLayout from "../layouts/DashboardLayout";

const programmingTopics = [
  {
    title: "Core Concepts",
    subtitle: "Variables, loops, functions, OOP",
    questions: [
      "Explain the difference between pass-by-value and pass-by-reference.",
      "Write a function to reverse a string.",
      "Describe the use of classes and objects in a programming language.",
    ],
  },
  {
    title: "Data Structures",
    subtitle: "Arrays, stacks, queues, hash maps",
    questions: [
      "Implement push and pop for a stack.",
      "Choose the best structure for fast lookups.",
      "What is the time complexity of inserting into a hash map?",
    ],
  },
  {
    title: "Coding Patterns",
    subtitle: "Recursion, greedy, divide and conquer",
    questions: [
      "Use recursion to solve factorial calculation.",
      "Describe when the greedy approach is appropriate.",
      "Explain divide and conquer with merge sort.",
    ],
  },
];

function Programming() {
  return (
    <DashboardLayout>
      <div className="hero-section" style={{ marginBottom: 24 }}>
        <div className="hero-copy">
          <span className="badge">Programming</span>
          <h1>Practice coding with curated programs and company patterns.</h1>
          <p>From basics to advanced problem solving, this section helps you prepare for coding rounds.</p>
          <div className="hero-actions">
            <a href="#practice" className="btn btn-primary">Start Coding Drill</a>
            <a href="#practice" className="btn btn-secondary">Open Cheat Sheet</a>
          </div>
        </div>
        <div className="hero-card">
          <h3>Focus Area</h3>
          <p className="hero-metric">Java</p>
          <p>Most practiced language this month</p>
        </div>
      </div>

      <div id="practice" className="section-header">
        <div>
          <h2 className="section-title">Programming practice topics</h2>
          <p className="section-subtitle">Build coding strength with conceptual questions and common patterns.</p>
        </div>
      </div>

      <div className="grid-3">
        {programmingTopics.map((topic) => (
          <div key={topic.title} className="course-card">
            <h3>{topic.title}</h3>
            <p className="section-subtitle">{topic.subtitle}</p>
            <ul style={{ marginTop: 16, paddingLeft: 18 }}>
              {topic.questions.map((question) => (
                <li key={question} style={{ marginBottom: 8 }}>{question}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

export default Programming;
