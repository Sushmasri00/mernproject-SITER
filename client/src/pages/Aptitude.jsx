import DashboardLayout from "../layouts/DashboardLayout";

const aptitudeTopics = [
  {
    title: "Quantitative",
    subtitle: "Percentage, profit & loss, time-speed-distance",
    questions: [
      "If an item is sold at 20% profit and the selling price is $240, find the cost price.",
      "A train 150 m long crosses a platform in 20 seconds. Find its speed.",
      "A can do a job in 12 days and B in 18 days. How long together?",
    ],
  },
  {
    title: "Reasoning",
    subtitle: "Series, syllogism, seating arrangement",
    questions: [
      "Find the next term in the series: 2, 6, 12, 20, ?",
      "Which of these statements must be true from the given syllogism?",
      "Arrange people A, B, C, D based on given seating conditions.",
    ],
  },
  {
    title: "Verbal Ability",
    subtitle: "Grammar, reading comprehension, sentence completion",
    questions: [
      "Choose the correct form: 'She _____ to the library every day.'",
      "Find the synonym of 'resolve' in the sentence.",
      "Complete the sentence with the right preposition.",
    ],
  },
];

function Aptitude() {
  return (
    <DashboardLayout>
      <div className="hero-section" style={{ marginBottom: 24 }}>
        <div className="hero-copy">
          <span className="badge">Aptitude</span>
          <h1>Master quantitative aptitude and verbal ability.</h1>
          <p>Build confidence through topic-wise practice and timed mini quizzes.</p>
          <div className="hero-actions">
            <a href="#practice" className="btn btn-primary">Start Quiz</a>
            <a href="#practice" className="btn btn-secondary">View Practice Sets</a>
          </div>
        </div>
        <div className="hero-card">
          <h3>Current Accuracy</h3>
          <p className="hero-metric">86%</p>
          <p>Steady improvement this week</p>
        </div>
      </div>

      <div id="practice" className="section-header">
        <div>
          <h2 className="section-title">Topic-wise aptitude practice</h2>
          <p className="section-subtitle">Solve a short set of questions for each aptitude topic.</p>
        </div>
      </div>

      <div className="grid-3">
        {aptitudeTopics.map((topic) => (
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

export default Aptitude;
