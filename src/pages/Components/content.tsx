import { useState, lazy, Suspense, memo, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CarouselPage from "./pages/CarouselPage";
import ChartPage from "./pages/ChartPage";
import CheckboxPage from "./pages/CheckboxPage";
import CollapsiblePage from "./pages/CollapsiblePage";

const InstallationPage = lazy(() => import("./pages/InstallationPage"));
const UsagePage = lazy(() => import("./pages/UsagePage"));
const TypographyPage = lazy(() => import("./pages/TypographyPage"));
const LayoutPage = lazy(() => import("./pages/LayoutPage"));
const ButtonPage = lazy(() => import("./pages/ButtonPage"));
const CardPage = lazy(() => import("./pages/CardPage"));
const InputPage = lazy(() => import("./pages/InputPage"));
const ComponentsPage = lazy(() => import("./pages/ComponentsPage"));
const TabsPage = lazy(() => import("./pages/TabsPage"));
const AccordionPage = lazy(() => import("./pages/AccordionPage"));
const AlertDialogPage = lazy(() => import("./pages/AlertDialogPage"));
const AlertPage = lazy(() => import("./pages/AlertPage"));
const AspectRatioPage = lazy(() => import("./pages/AspectRatioPage"));
const AvatarPage = lazy(() => import("./pages/AvatarPage"));
const BadgePage = lazy(() => import("./pages/BadgePage"));
const BreadcrumbPage = lazy(() => import("./pages/BreadcrumbPage"));
const CalendarPage = lazy(() => import("./pages/CalendarPage"));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="text-flip-orange animate-pulse">Loading...</div>
  </div>
);

const SECTIONS = [
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
      { id: "aspectratio", label: "Aspect Ratio" },
      { id: "avatar", label: "Avatar" },
      { id: "badge", label: "Badge" },
      { id: "breadcrumb", label: "Breadcrumb" },
      { id: "button", label: "Button" },
      { id: "calendar", label: "Calendar" },
      { id: "card", label: "Card" },
      { id: "carousel", label: "Carousel" },
      { id: "chart", label: "Chart" },
      { id: "checkbox", label: "Checkbox" },
      { id: "collapsible", label: "Collapsible" },
      { id: "input", label: "Input" },
      { id: "tabs", label: "Tabs" },
    ],
  },
];

const Content = memo(() => {
  const { page } = useParams<{ page: string }>();
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const activePage = page || "components";

  const handleNavigate = useCallback(
    (itemId: string) => {
      navigate(`/components/${itemId}`);
    },
    [navigate],
  );

  const toggleCollapse = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  const renderPage = () => {
    const PageComponent = (() => {
      switch (activePage) {
        case "components":
          return ComponentsPage;
        case "installation":
          return InstallationPage;
        case "usage":
          return UsagePage;
        case "typography":
          return TypographyPage;
        case "layout":
          return LayoutPage;
        case "card":
          return CardPage;
        case "input":
          return InputPage;
        case "tabs":
          return TabsPage;
        case "accordion":
          return AccordionPage;
        case "alertdialog":
          return AlertDialogPage;
        case "alert":
          return AlertPage;
        case "aspectratio":
          return AspectRatioPage;
        case "avatar":
          return AvatarPage;
        case "badge":
          return BadgePage;
        case "breadcrumb":
          return BreadcrumbPage;
        case "button":
          return ButtonPage;
        case "calendar":
          return CalendarPage;
        case "carousel":
          return CarouselPage;
        case "chart":
          return ChartPage;
        case "checkbox":
          return CheckboxPage;
        case "collapsible":
          return CollapsiblePage;
        default:
          return null;
      }
    })();

    if (!PageComponent) {
      return (
        <div className="p-8">
          <h1 className="text-5xl text-red-500 px-2 py-1">
            Error: Page not found
          </h1>
          <span>The requested page does not exist.</span>
        </div>
      );
    }

    return (
      <Suspense fallback={<LoadingSpinner />}>
        <PageComponent />
      </Suspense>
    );
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
            onClick={toggleCollapse}
            className={`${
              isCollapsed ? "min-w-full" : "min-w-10"
            } text-flip-orange hover:text-flip-black hover:bg-flip-orange p-1 transition-colors `}
          >
            {isCollapsed ? "→" : "←"}
          </button>
        </div>

        {!isCollapsed && (
          <>
            {SECTIONS.map((section, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-flip-orange mb-2 text-sm uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavigate(item.id)}
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
            {SECTIONS.flatMap((section) => section.items).map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
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
});

export default Content;
