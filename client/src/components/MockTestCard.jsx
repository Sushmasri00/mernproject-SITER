function MockTestCard({
  title,
  company,
  duration,
  difficulty,
  onView,
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-3">Category: {company}</p>
      <p>Duration: {duration} minutes</p>
      <p>Status: {difficulty}</p>
      <button
        type="button"
        className="mt-5 bg-green-600 text-white rounded-lg px-5 py-2"
        onClick={onView}
      >
        Start Test
      </button>
    </div>
  );
}

export default MockTestCard;