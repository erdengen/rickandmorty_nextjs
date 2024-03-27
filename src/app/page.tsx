"use client";

import MyComponent from "@/components/MyComponent";
import { useRef, useState } from "react";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface Person {
  id: number;
  name: string;
  url?: string;
  imgSrc?: string;
}
export default function Home() {
  const [query, setQuery] = useState("");
  const [selected, setSelected]: any = useState([]);
  const [menuOpen, setMenuOpen] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);

  const tags = [
    "Tutorial",
    "HowTo",
    "DIY",
    "Review",
    "Tech",
    "Gaming",
    "Travel",
    "Fitness",
    "Cooking",
    "Vlog",
    "Review2",
    "Tech2",
    "Gaming2",
    "Travel2",
    "Fitness2",
    "Cooking2",
    "Vlog2",
  ];

  const filteredTags = tags.filter(
    (item) =>
      item?.toLocaleLowerCase()?.includes(query.toLocaleLowerCase()?.trim()) &&
      !selected.includes(item)
  );

  const isDisable =
    !query?.trim() ||
    selected.filter(
      (item: string) =>
        item?.toLocaleLowerCase()?.trim() === query?.toLocaleLowerCase()?.trim()
    )?.length;

  return (
    <div className="bg-[#eef1f8] flex-grow grid place-items-center  container mx-auto">
      <div className="relative  min-h-96 max-h-96 text-sm bg-green-400 w-3/4">
        {selected?.length ? (
          <div className="bg-white  relative text-xs flex flex-wrap gap-px p-2 mb-0">
            {selected.map((tag: string) => {
              return (
                <div
                  key={tag}
                  className="rounded-full w-fit py-1.5 px-3 border border-gray-400 bg-gray-50 text-gray-500
                  flex items-center gap-2"
                >
                  {tag}
                  <div
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() =>
                      setSelected(selected.filter((i: string) => i !== tag))
                    }
                  >
                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
              );
            })}
            <div className="w-full text-right">
              <span
                className="text-gray-400 cursor-pointer"
                onClick={() => {
                  setSelected([]);
                  inputRef.current?.focus();
                }}
              >
                Clear all
              </span>
            </div>
          </div>
        ) : null}
        <div className="card flex items-center justify-between p-3  gap-2.5 bg-white">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value.trimStart())}
            placeholder="Search or Create tags"
            className="bg-transparent text-sm flex-1 caret-rose-600 border border-gray-500 rounded px-4 py-2"
            onFocus={() => setMenuOpen(true)}
            onBlur={() => setMenuOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isDisable) {
                setSelected((prev) => [...prev, query]);
                setQuery("");
                setMenuOpen(true);
              }
            }}
          />
          <button
            className="text-sm disabled:text-gray-300 text-rose-500 disabled:cursor-not-allowed"
            disabled={isDisable}
            onClick={() => {
              if (isDisable) {
                return;
              }
              setSelected((prev: any) => [...prev, query]);
              setQuery("");
              inputRef.current?.focus();
              setMenuOpen(true);
            }}
          >
            + Add
          </button>
        </div>

        {/* Menu's */}
        {menuOpen ? (
          <div className="card absolute w-full h-80 mt-px mb-5 p-1 flex overflow-y-auto scrollbar-thin scrollbar-track-slate-50 scrollbar-thumb-slate-200 bg-white">
            <ul className="w-full">
              {filteredTags?.length ? (
                filteredTags.map((tag, i) => (
                  <li
                    key={i}
                    className="p-2 cursor-pointer hover:bg-rose-50 hover:text-rose-500 rounded-md w-full"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                      setMenuOpen(true);
                      setSelected((prev) => [...prev, tag]);
                      setQuery("");
                    }}
                  >
                    {i} {tag}
                  </li>
                ))
              ) : (
                <li className="p-2 text-gray-500">No options available</li>
              )}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
