import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import InstallationPage from "./pages/InstallationPage";
import UsagePage from "./pages/UsagePage";
import TypographyPage from "./pages/TypographyPage";
import LayoutPage from "./pages/LayoutPage";
import ButtonPage from "./pages/ButtonPage";
import CardPage from "./pages/CardPage";
import InputPage from "./pages/InputPage";
import ComponentsPage from "./pages/ComponentsPage";
import TabsPage from "./pages/TabsPage";
import AccordionPage from "./pages/AccordionPage";
import AlertDialogPage from "./pages/AlertDialogPage";
import AlertPage from "./pages/AlertPage";

export default function Content() {
  const { page } = useParams<{ page: string }>();
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const activePage = page || "components";

  const sections = [
    {
      title: "Introduction",
      items: [
        { id: "components", label: "Components" },
        { id: "installation", label: "Installation" },
        { id: "usage", label: "Usage" },
      ],
    },
    {
      title: "Other",
      items: [
        { id: "typography", label: "Typography" },
        { id: "layout", label: "Layout" },
      ],
    },
    {
      title: "Components",
      items: [
        { id: "accordion", label: "Accordion" },
        { id: "alertdialog", label: "Alert Dialog" },
        { id: "alert", label: "Alert" },
        { id: "button", label: "Button" },
        { id: "card", label: "Card" },
        { id: "input", label: "Input" },
        { id: "tabs", label: "Tabs" },
      ],
    },
  ];

  const renderPage = () => {
    switch (activePage) {
      case "components":
        return <ComponentsPage />;
      case "installation":
        return <InstallationPage />;
      case "usage":
        return <UsagePage />;
      case "typography":
        return <TypographyPage />;
      case "layout":
        return <LayoutPage />;
      case "button":
        return <ButtonPage />;
      case "card":
        return <CardPage />;
      case "input":
        return <InputPage />;
      case "tabs":
        return <TabsPage />;
      case "accordion":
        return <AccordionPage />;
      case "alertdialog":
        return <AlertDialogPage />;
      case "alert":
        return <AlertPage />;
      default:
        return (
          <div className="p-8">
            <h1 className="text-5xl text-red-500 px-2 py-1">
              Error: Page not found
            </h1>
            <span>The requested page does not exist.</span>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen">
      <div
        className={`${
          isCollapsed ? "w-16 min-w-16" : "w-64 min-w-64"
        } bg-flip-black border-r p-4 overflow-y-auto flex-shrink-0 transition-all duration-300`}
      >
        <div className="mb-4 flex">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`${
              isCollapsed ? "min-w-full" : "min-w-10"
            } text-flip-orange hover:text-flip-black hover:bg-flip-orange p-1 transition-colors `}
          >
            {isCollapsed ? "→" : "←"}
          </button>
        </div>

        {!isCollapsed && (
          <>
            {sections.map((section, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-flip-orange mb-2 text-sm uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => navigate(`/components/${item.id}`)}
                        className={`w-full text-left text-sm transition-none p-1 ${
                          activePage === item.id
                            ? "text-flip-black bg-flip-orange font-helvb08"
                            : "text-flip-orange hover:text-flip-black hover:bg-flip-orange"
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        )}

        {isCollapsed && (
          <div className="space-y-2">
            {sections
              .flatMap((section) => section.items)
              .map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigate(`/components/${item.id}`)}
                  className={`w-full p-2 text-xs transition-none ${
                    activePage === item.id
                      ? "text-flip-black bg-flip-orange"
                      : "text-flip-orange hover:text-flip-black hover:bg-flip-orange"
                  }`}
                  title={item.label}
                >
                  {item.label.charAt(0).toUpperCase()}
                </button>
              ))}
          </div>
        )}
      </div>

      <div className="flex-1 overflow-auto max-w-4xl mx-auto">
        {renderPage()}
      </div>
    </div>
  );
}
