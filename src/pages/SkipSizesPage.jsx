import { useDispatch, useSelector } from "react-redux";
import { getSkips } from "../features/skips/skipSlice";
import { SkipCard } from "../components/SkipCard";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";

export function SkipSizesPage() {
  const dispatch = useDispatch();
  const { skips, status } = useSelector(state => state.skips);
  const { dark, toggleTheme } = useTheme();
  const [confirmedSkipId, setConfirmedSkipId] = useState(null);

  useEffect(
    () => {
      dispatch(getSkips());
    },
    [dispatch]
  );
  const handleConfirm = skip => {
    setConfirmedSkipId(skip.id);
  };
  return (
    <div
      className={`min-h-screen py-14 px-6 ${dark
        ? "bg-zinc-950 text-white"
        : "bg-gray-50 text-black"}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1
              className={`text-4xl mb-7 font-extrabold tracking-tight ${dark
                ? "text-white"
                : "text-gray-800"}`}
            >
              🛒 Choose Your Skip Size
            </h1>
            <h2
              className={`text-lg ml-8 mt-2 ${dark
                ? "text-gray-300"
                : "text-gray-600"}`}
            >
              Select the skip size that best suits your needs
            </h2>
          </div>
          <button
            onClick={toggleTheme}
            className={`px-5 py-2.5 text-sm font-medium rounded-lg shadow-sm border transition-colors 
              ${dark
                ? "bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700"
                : "bg-white border-gray-300 text-black hover:bg-gray-100"}`}
          >
            Toggle Theme
          </button>
        </div>

        {/* Content */}
        {status === "loading"
          ? <div
              className={`text-center text-lg mt-20 animate-pulse ${dark
                ? "text-gray-400"
                : "text-gray-600"}`}
            >
              Loading skips...
            </div>
          : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {skips.map(skip =>
                <SkipCard
                  key={skip.id}
                  skip={skip}
                  isConfirmed={confirmedSkipId === skip.id} // ✅ بيراقب الحالة
                  onConfirm={handleConfirm} // ✅ يمرر الحدث
                />
              )}
            </div>}
      </div>
    </div>
  );
}
