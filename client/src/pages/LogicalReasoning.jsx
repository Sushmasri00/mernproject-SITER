import DashboardLayout from "../layouts/DashboardLayout";

const logicalTopics = [
  {
    title: "Series & Sequences",
    subtitle: "Number and letter patterns",
    questions: [
      "Find the next term: 3, 7, 15, 31, ?",
      "Identify the missing number in the sequence.",
      "Complete the alphabetic series with the correct letter.",
    ],
  },
  {
    title: "Syllogism",
    subtitle: "Deductive reasoning practice",
    questions: [
      "Which conclusion follows from the given statements?",
      "Evaluate the relationship between the two sets.",
      "Choose the correct logical inference.",
    ],
  },
  {
    title: "Seating Arrangement",
    subtitle: "Conditional reasoning and order",
    questions: [
      "Arrange people around a table based on clues.",
      "Find who sits opposite the correct person.",
      "Use the clues to decide the correct order.",
    ],
  },
];

function LogicalReasoning() {
  return (
    <DashboardLayout>
      <div className="hero-section" style={{ marginBottom: 24 }}>
        <div className="hero-copy">
          <span className="badge">Logical Reasoning</span>
          <h1>Train your analytical thinking with structured practice.</h1>
          <p>Strengthen your reasoning skills for written tests and interviews.</p>
          <div className="hero-actions">
            <a href="#practice" className="btn btn-primary">Attempt Practice Set</a>
            <a href="#practice" className="btn btn-secondary">Review Concepts</a>
          </div>
        </div>
        <div className="hero-card">
          <h3>Weekly Goal</h3>
          <p className="hero-metric">5</p>
          <p>Sets left to complete</p>
        </div>
      </div>

      <div id="practice" className="section-header">
        <div>
          <h2 className="section-title">Logical reasoning practice topics</h2>
          <p className="section-subtitle">Practice sets for common reasoning patterns used in placement tests.</p>
        </div>
      </div>

      <div className="grid-3">
        {logicalTopics.map((topic) => (
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

export default LogicalReasoning;
