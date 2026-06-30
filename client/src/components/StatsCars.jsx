function StatsCard({ title, value, icon, color }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500">{title}</p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

        </div>

        <div
          className={`h-16 w-16 rounded-full flex items-center justify-center text-white text-2xl ${color}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}

export default StatsCard;