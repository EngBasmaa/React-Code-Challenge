import { useState } from "react";
import image from "../assets/imgs/5-yarder-skip.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useTheme } from "../context/ThemeContext";

export function SkipCard({ skip, onConfirm, isConfirmed }) {
  const [isOpen, setIsOpen] = useState(false);
  const { dark, toggleTheme } = useTheme();



  if (!skip) return null;

  const {
    size,
    hire_period_days,
    price_before_vat,
    vat,
    postcode,
    allowed_on_road,
    allows_heavy_waste,
  } = skip;

  const totalPrice = price_before_vat + vat;

  const handleConfirm = () => {
    onConfirm(skip);
    setIsOpen(false);
  };

  return (
    <>
<div
  className={`relative group w-full max-w-md overflow-hidden rounded-2xl shadow-lg transition duration-300 hover:scale-[1.02] border ${
    dark ? "bg-zinc-900 border-zinc-700 text-white" : "bg-white border-gray-300 text-black"
  } hover:border-blue-500`}
>
        {/* Tag: Size */}
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
          {size} Yards
        </div>

        {/* Tag: Not allowed on road */}
        {!allowed_on_road && (
  <div className={`absolute bottom-1 left-4 px-3 py-1 rounded-md text-sm font-semibold z-10 flex items-center gap-1
    ${dark ? "bg-zinc-800 text-yellow-300" : "bg-black text-yellow-500"}`}>            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M5.73 17h12.54c.66 0 1.09-.66.82-1.26L13.82 4.26a1 1 0 00-1.64 0L4.91 15.74a.98.98 0 00.82 1.26z" />
            </svg>
            Not Allowed On The Road
          </div>
        )}

        {/* Image */}
        <img
          src={image}
          alt={`${size}-yarder`}
          className="w-full h-64 object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-between p-6">
          <div>
            <h2 className="text-3xl font-extrabold mb-1">{size} Yard Skip</h2>
            <p className="text-lg text-gray-300 mt-7 ml-2 font-normal">
              {hire_period_days} day hire period
            </p>
          </div>

          <div className="mb-4 flex justify-between items-center">
            <p className="text-3xl font-extrabold text-white drop-shadow-md">£{totalPrice}</p>
            <button
              className={`font-semibold border-2 px-4 py-2 rounded-md transition ${
                isConfirmed
                  ? "bg-blue-800 border-blue-700 text-white cursor-default"
                  : "bg-primary text-blue-400 hover:text-white hover:bg-blue-800 hover:border-blue-700"
              }`}
              onClick={() => {
                if (!isConfirmed) setIsOpen(true);
              }}
              disabled={isConfirmed}
            >
              {isConfirmed ? "Selected" : "Select This Skip"}
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
          <DialogTitle
  className={`border-l-4 font-bold text-2xl pl-4 ${
    dark ? "text-gray-500 border-gray-500" : "text-gray-600 border-gray-400"
  }`}
>              Confirm Your Selection
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-wrap items-start my-8">
            <div className="space-y-4 text-lg text-gray-700 w-full md:w-1/2">
              <p><strong>Size:</strong> <span className="text-blue-700 font-semibold">{size} Yard</span></p>
              <p><strong>Hire Period:</strong> <span className="text-blue-700 font-semibold">{hire_period_days} days</span></p>
              <p><strong>Total Price:</strong> <span className="text-blue-700 font-semibold">£{totalPrice}</span></p>
              <p><strong>Postcode:</strong> <span className="text-blue-700 font-semibold">{postcode}</span></p>
              <p><strong>Allowed on Road:</strong> <span className="text-blue-700 font-semibold">{allowed_on_road ? "Yes" : "No"}</span></p>
              <p><strong>Heavy Waste:</strong> <span className="text-blue-700 font-semibold">{allows_heavy_waste ? "Allowed" : "Not Allowed"}</span></p>
            </div>

            <div className="w-full md:w-1/2">
              <img
                src={image}
                alt={`${size}-yarder`}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="border-gray-500 border-2 text-blue-600 hover:bg-blue-900 hover:text-white text-lg"
            >
              Cancel
            </Button>
            <Button
              variant="outline"
              onClick={handleConfirm}
              className="border-gray-500 border-2 text-blue-600 hover:bg-blue-900 hover:text-white text-lg"
            >
              Confirm Selection
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
