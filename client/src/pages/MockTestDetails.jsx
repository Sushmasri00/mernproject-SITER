import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import { getDemoMockTests, getStoredQuizAttempts, saveStoredQuizAttempts } from "../services/demoData";

function MockTestDetails() {
  const { mockTestId } = useParams();
  const [test, setTest] = useState(null);
  const [attempts, setAttempts] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const tests = getDemoMockTests();
    const selected = tests.find((item) => item._id === mockTestId) || tests[0];
    setTest(selected);
    setAttempts(getStoredQuizAttempts());
  }, [mockTestId]);

  const alreadyAttempted = useMemo(() => attempts.some((item) => item.testId === test?._id), [attempts, test]);

  const handleAnswerChange = (questionId, option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleSubmit = () => {
    if (!test) return;

    const correctCount = test.questions.reduce((count, question) => {
      return answers[question.id] === question.answer ? count + 1 : count;
    }, 0);

    const percentage = Math.round((correctCount / test.questions.length) * 100);
    const nextAttempt = {
      id: Date.now().toString(),
      testId: test._id,
      title: test.title,
      score: percentage,
      passed: percentage >= test.passingMarks,
    };

    const updatedAttempts = [...attempts, nextAttempt];
    setAttempts(updatedAttempts);
    saveStoredQuizAttempts(updatedAttempts);
    setScore(percentage);
    setSubmitted(true);
  };

  return (
    <DashboardLayout>
      <div className="section-header">
        <div>
          <h2 className="section-title">Mock Test Details</h2>
          <p className="section-subtitle">Practice a real placement-style quiz and save your attempt.</p>
        </div>
        <Link className="btn btn-secondary" to="/mock-tests">Back to Mock Tests</Link>
      </div>

      <div className="card">
        <div className="card-body">
          {test ? (
            <>
              <h3>{test.title}</h3>
              <p className="section-subtitle">{test.duration} minutes • {test.questions.length} questions • {test.passingMarks} passing marks</p>
              <div className="grid-2" style={{ marginTop: 20 }}>
                <div className="course-card">
                  <h3>Instructions</h3>
                  <p className="section-subtitle">The timer is simulated for this demo. Choose answers and submit to see your score instantly.</p>
                </div>
                <div className="course-card">
                  <h3>What You&apos;ll Practice</h3>
                  <p className="section-subtitle">{test.description}</p>
                </div>
              </div>

              <div className="course-card" style={{ marginTop: 20 }}>
                <h3>Questions</h3>
                {test.questions.map((question) => (
                  <div key={question.id} style={{ marginTop: 16 }}>
                    <p><strong>{question.prompt}</strong></p>
                    <div className="list-grid" style={{ marginTop: 8 }}>
                      {question.options.map((option) => (
                        <label key={option} className="course-card" style={{ padding: 10 }}>
                          <input
                            type="radio"
                            name={`q-${question.id}`}
                            checked={answers[question.id] === option}
                            onChange={() => handleAnswerChange(question.id, option)}
                          />
                          <span style={{ marginLeft: 8 }}>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="form-actions" style={{ marginTop: 20 }}>
                <span className={`badge ${alreadyAttempted ? "success" : ""}`}>{alreadyAttempted ? "Attempt saved" : "Ready to start"}</span>
                <button className="btn btn-primary" onClick={handleSubmit}>Submit Test</button>
              </div>

              {submitted && (
                <div className="card" style={{ marginTop: 20 }}>
                  <div className="card-body">
                    <h3>Result</h3>
                    <p className="section-subtitle">You scored {score}% on this quiz. {score >= test.passingMarks ? "You passed!" : "Try again to improve your score."}</p>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="empty-state">Quiz not found.</div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default MockTestDetails;
