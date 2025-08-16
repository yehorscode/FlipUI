import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
const colors = [
  { name: "flip-orange", displayName: "orange" },
  { name: "flip-yellow", displayName: "yellow" },
  { name: "flip-lgreen", displayName: "lgreen" },
  { name: "flip-blue", displayName: "blue" },
  { name: "flip-brown", displayName: "brown" },
  { name: "flip-red", displayName: "red" },
  { name: "flip-pink", displayName: "pink" },
];

export default function ColorsPage() {
  console.log("ColorsPage rendered");
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentColor(colors[colorIndex]);
  }, [colorIndex]);

  return (
    <div className="mt-5">
      <h1
        className="text-5xl w-min px-2 py-1 mb-8 transition-colors duration-300 text-white dark:text-black"
        style={{
          backgroundColor: `var(--color-${currentColor.name})`,
        }}
      >
        Colors!
      </h1>
      <div className="">
        <span>
          My theme uses an array of different colors. They are pretty well
          balanced i think. Main color the flip-orange was taken from the
          official{" "}
          <a href="https://flipperzero.one/design-guide" className="underline">
            Flipper Zero Design Guide Page
          </a>{" "}
        </span>

        <div className="flex mt-3">
          <div className="bg-green-500 w-20 align-middle flex items-center justify-center">
            <span className="text-5xl text-white " style={{ writingMode: "vertical-rl" }}>Crayola</span>
          </div>
          <div className="">
            {colors.map((color) => (
              <div
                key={color.name}
                className="flex items-center space-x-2 mb-2 mt-2"
              >
                <div
                  className="h-8 w-40 hover:w-60 transition-all"
                  style={{ backgroundColor: `var(--color-${color.name})` }}
                ></div>
                <span className="text-gray-800 dark:text-gray-100">
                  flip-{color.displayName}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Button variant={"outline"} onClick={handleThemeChange} className="mt-5">
          Switch to {theme === "light" ? "dark" : "light"} theme to see
          different variants
        </Button>
      </div>
    </div>
  );
}
