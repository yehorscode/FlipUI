import { Outlet } from "react-router-dom";
import { Link } from "@/components/ui/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export default function Layout() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="">
      <nav className="bg-flip-orange p-4 text-flip-black font-helvb08 flex items-center justify-between dark:bg-flip-black">
        <ul className="flex gap-4">
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/components">Components</Link>
          </li>
          <li>
            <Link to="/colors">Colors</Link>
          </li>
        </ul>
        <Button
          className="ml-auto border-2 border-background"
          onClick={handleThemeChange}
        >
          Toggle Theme
        </Button>
      </nav>
      <div className="px-4">
        <Outlet />
      </div>
    </div>
  );
}
