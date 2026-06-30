import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { week: "Mon", score: 25 },
  { week: "Tue", score: 40 },
  { week: "Wed", score: 55 },
  { week: "Thu", score: 65 },
  { week: "Fri", score: 72 },
  { week: "Sat", score: 84 },
  { week: "Sun", score: 91 },
];

function ProgressChart() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-2xl font-bold mb-5">
        Weekly Progress
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#2563eb"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProgressChart;