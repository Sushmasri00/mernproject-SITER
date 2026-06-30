import DashboardLayout from "../layouts/DashboardLayout";

const dsaTopics = [
  {
    title: "Arrays",
    subtitle: "Sliding window, prefix sums, two pointers",
    questions: [
      "Find the first missing positive integer.",
      "Return the longest subarray with sum = 0.",
      "Rotate an array to the right by k steps without extra space.",
    ],
  },
  {
    title: "Strings",
    subtitle: "Anagrams, substring search, string rotation",
    questions: [
      "Check whether a string is a rotation of another.",
      "Find the longest substring without repeating characters.",
      "Find the minimum window substring containing all chars of another string.",
    ],
  },
  {
    title: "Trees",
    subtitle: "Traversal, balance checks, lowest common ancestor",
    questions: [
      "Compute the height of a binary tree.",
      "Check whether a binary tree is height-balanced.",
      "Find the lowest common ancestor of two nodes.",
    ],
  },
  {
    title: "Graphs",
    subtitle: "BFS, DFS, shortest paths, cycle detection",
    questions: [
      "Perform BFS and DFS on a graph.",
      "Detect a cycle in an undirected graph.",
      "Find the shortest path in an unweighted graph.",
    ],
  },
  {
    title: "Dynamic Programming",
    subtitle: "Memoization, knapsack, subsequences",
    questions: [
      "Compute Fibonacci numbers with memoization.",
      "Find the maximum sum increasing subsequence.",
      "Solve the coin change minimum coins problem.",
    ],
  },
];

function DSA() {
  return (
    <DashboardLayout>
      <div className="hero-section" style={{ marginBottom: 24 }}>
        <div className="hero-copy">
          <span className="badge">DSA Practice</span>
          <h1>Sharpen your problem-solving for placement rounds.</h1>
          <p>Practice structured, topic-wise questions for arrays, strings, trees, graphs, and dynamic programming.</p>
          <div className="hero-actions">
            <a href="#practice" className="btn btn-primary">Start Daily Challenge</a>
            <a href="#practice" className="btn btn-secondary">View Topic Guide</a>
          </div>
        </div>
        <div className="hero-card">
          <h3>Today&apos;s Focus</h3>
          <p className="hero-metric">120</p>
          <p>Questions solved this month</p>
          <ul>
            <li><span>Arrays</span><strong>24</strong></li>
            <li><span>Graphs</span><strong>18</strong></li>
            <li><span>DP</span><strong>16</strong></li>
          </ul>
        </div>
      </div>

      <div className="grid-3">
        <div className="course-card">
          <h3>Start with Arrays</h3>
          <p className="section-subtitle">Fundamental problems that appear in every placement round.</p>
        </div>
        <div className="course-card">
          <h3>Strengthen Recursion</h3>
          <p className="section-subtitle">Build recursive thinking for trees, graphs, and dynamic programming.</p>
        </div>
        <div className="course-card">
          <h3>Level up to DP</h3>
          <p className="section-subtitle">Solve optimization problems with memoization and tabulation.</p>
        </div>
      </div>

      <div id="practice" className="section-header" style={{ marginTop: 24 }}>
        <div>
          <h2 className="section-title">Topic-wise practice questions</h2>
          <p className="section-subtitle">Pick a DSA topic and solve problems that match real placement patterns.</p>
        </div>
      </div>

      <div className="grid-3">
        {dsaTopics.map((topic) => (
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

export default DSA;
