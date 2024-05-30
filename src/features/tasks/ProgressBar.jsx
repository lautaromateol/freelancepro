/* eslint-disable react/prop-types */
export default function ProgressBar({ progress, color = 'bg-tremor-brand', height = 'h-3', width = 'w-full' }) {
  return (
    <div className={`${width} bg-gray-200 rounded-md overflow-hidden ${height}`}>
      <div
        className={`h-full transition-width duration-300 ease-in-out ${color}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

