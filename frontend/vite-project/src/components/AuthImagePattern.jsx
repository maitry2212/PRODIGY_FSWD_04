const AuthImagePattern = ({ title, subtitle }) => {
  const colors = [
    "bg-blue-500",
    "bg-blue-600",
    "bg-blue-700",
    "bg-indigo-500",
    "bg-indigo-600",
    "bg-indigo-700",
    "bg-purple-500",
    "bg-purple-600",
    "bg-purple-700",
  ];

  return (
    <div className="hidden lg:flex items-center justify-center w-full h-full bg-base-200">
      <div className="flex flex-col items-center">
        {/* Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {colors.map((color, i) => (
            <div
              key={i}
              className={`w-16 h-16 ${color} rounded-lg opacity-80`}
            />
          ))}
        </div>

        {/* Text below grid */}
        <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-sm text-white/60 text-center max-w-xs">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
