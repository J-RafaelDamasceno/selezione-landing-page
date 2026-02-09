import { useState, useRef, useEffect } from "react";
import { ChevronsUpDown } from "lucide-react";

export default function Select({ options, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-64" ref={dropdownRef}>
      {/* Input visual */}
      <div
        className="h-10 px-4 rounded-lg bg-black/10 text-black flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="">{selected ? selected : placeholder}</span>
        <ChevronsUpDown className="w-4 h-4 text-black" />
      </div>

      {/* Lista de opções */}
      {isOpen && (
        <ul className="absolute w-full mt-1 bg-black/30 border border-black/10 backdrop-blur-md rounded-lg max-h-40 overflow-auto z-50 p-2">
          {options.map((opt, idx) => (
            <li
              key={idx}
              className=" px-2 py-2 hover:bg-white/10 hover:backdrop-blur-md cursor-pointer text-white rounded-lg"
              onClick={() => {
                setSelected(opt);
                setIsOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
