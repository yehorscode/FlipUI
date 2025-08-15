import { useState, lazy, Suspense, memo, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
const AccordionPage = lazy(() => import("./pages/AccordionPage"));
const AlertPage = lazy(() => import("./pages/AlertPage"));
const AlertDialogPage = lazy(() => import("./pages/AlertDialogPage"));
const AspectRatioPage = lazy(() => import("./pages/AspectRatioPage"));
const AvatarPage = lazy(() => import("./pages/AvatarPage"));
const BadgePage = lazy(() => import("./pages/BadgePage"));
const BreadcrumbPage = lazy(() => import("./pages/BreadcrumbPage"));
const ButtonPage = lazy(() => import("./pages/ButtonPage"));
const CalendarPage = lazy(() => import("./pages/CalendarPage"));
const CardPage = lazy(() => import("./pages/CardPage"));
const CarouselPage = lazy(() => import("./pages/CarouselPage"));
const ChartPage = lazy(() => import("./pages/ChartPage"));
const CheckboxPage = lazy(() => import("./pages/CheckboxPage"));
const CollapsiblePage = lazy(() => import("./pages/CollapsiblePage"));
const ComboboxPage = lazy(() => import("./pages/ComboboxPage"));
const CommandPage = lazy(() => import("./pages/CommandPage"));
const ComponentsPage = lazy(() => import("./pages/ComponentsPage"));
const ContextMenuPage = lazy(() => import("./pages/ContextMenuPage"));
const DataTablePage = lazy(() => import("./pages/DataTablePage"));
const DatepickerPage = lazy(() => import("./pages/DatepickerPage"));
const DialogPage = lazy(() => import("./pages/DialogPage"));
const DrawerPage = lazy(() => import("./pages/DrawerPage"));
const DropdownmenuPage = lazy(() => import("./pages/DropdownmenuPage"));
const HoverCardPage = lazy(() => import("./pages/HoverCardPage"));
const InputPage = lazy(() => import("./pages/InputPage"));
const InputOTPPage = lazy(() => import("./pages/InputOTPPage"));
const InstallationPage = lazy(() => import("./pages/InstallationPage"));
const LabelPage = lazy(() => import("./pages/LabelPage"));
const LayoutPage = lazy(() => import("./pages/LayoutPage"));
const MenubarPage = lazy(() => import("./pages/MenubarPage"));
const NavigationMenuPage = lazy(() => import("./pages/NavigationMenuPage"));
const PaginationPage = lazy(() => import("./pages/PaginationPage"));
const PopoverPage = lazy(() => import("./pages/PopoverPage"));
const ProgressPage = lazy(() => import("./pages/ProgressPage"));
const RadioGroupPage = lazy(() => import("./pages/RadioGroupPage"));
const ResizablePage = lazy(() => import("./pages/ResizablePage"));
const ScrollAreaPage = lazy(() => import("./pages/ScrollAreaPage"));
const SelectPage = lazy(() => import("./pages/SelectPage"));
const SeparatorPage = lazy(() => import("./pages/SeparatorPage"));
const SheetPage = lazy(() => import("./pages/SheetPage"));
const SidebarPage = lazy(() => import("./pages/SidebarPage"));
const SkeletonPage = lazy(() => import("./pages/SkeletonPage"));
const SliderPage = lazy(() => import("./pages/SliderPage"));
const SonnerPage = lazy(() => import("./pages/SonnerPage"));
const SwitchPage = lazy(() => import("./pages/SwitchPage"));
const TablePage = lazy(() => import("./pages/TablePage"));
const TabsPage = lazy(() => import("./pages/TabsPage"));
const TextareaPage = lazy(() => import("./pages/TextareaPage"));
const TogglePage = lazy(() => import("./pages/TogglePage"));
const ToggleGroupPage = lazy(() => import("./pages/ToggleGroupPage"));
const TooltipPage = lazy(() => import("./pages/TooltipPage"));
const TypographyPage = lazy(() => import("./pages/TypographyPage"));
const UsagePage = lazy(() => import("./pages/UsagePage"));

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
      { id: "alert", label: "Alert" },
      { id: "alertdialog", label: "Alert Dialog" },
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
      { id: "combobox", label: "Combobox" },
      { id: "command", label: "Command" },
      { id: "contextmenu", label: "Context Menu" },
      { id: "datatable", label: "Data Table" },
      { id: "datepicker", label: "Datepicker" },
      { id: "dialog", label: "Dialog" },
      { id: "drawer", label: "Drawer" },
      { id: "dropdownmenu", label: "Dropdown Menu" },
      { id: "hovercard", label: "Hover Card" },
      { id: "input", label: "Input" },
      { id: "inputotp", label: "Input OTP" },
      { id: "label", label: "Label" },
      { id: "menubar", label: "Menubar" },
      { id: "navigationmenu", label: "Navigation Menu" },
      { id: "pagination", label: "Pagination" },
      { id: "popover", label: "Popover" },
      { id: "progress", label: "Progress" },
      { id: "radiogroup", label: "Radio Group" },
      { id: "resizable", label: "Resizable" },
      { id: "scrollarea", label: "Scroll Area" },
      { id: "select", label: "Select" },
      { id: "separator", label: "Separator" },
      { id: "sheet", label: "Sheet" },
      { id: "sidebar", label: "Sidebar" },
      { id: "skeleton", label: "Skeleton" },
      { id: "slider", label: "Slider" },
      { id: "sonner", label: "Sonner" },
      { id: "switch", label: "Switch" },
      { id: "table", label: "Table" },
      { id: "tabs", label: "Tabs" },
      { id: "textarea", label: "Textarea" },
      { id: "toggle", label: "Toggle" },
      { id: "togglegroup", label: "Toggle Group" },
      { id: "tooltip", label: "Tooltip" },
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
        case "accordion":
          return AccordionPage;
        case "alert":
          return AlertPage;
        case "alertdialog":
          return AlertDialogPage;
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
        case "card":
          return CardPage;
        case "carousel":
          return CarouselPage;
        case "chart":
          return ChartPage;
        case "checkbox":
          return CheckboxPage;
        case "collapsible":
          return CollapsiblePage;
        case "combobox":
          return ComboboxPage;
        case "command":
          return CommandPage;
        case "contextmenu":
          return ContextMenuPage;
        case "datatable":
          return DataTablePage;
        case "datepicker":
          return DatepickerPage;
        case "dialog":
          return DialogPage;
        case "drawer":
          return DrawerPage;
        case "dropdownmenu":
          return DropdownmenuPage;
        case "hovercard":
          return HoverCardPage;
        case "input":
          return InputPage;
        case "inputotp":
          return InputOTPPage;
        case "label":
          return LabelPage;
        case "menubar":
          return MenubarPage;
        case "navigationmenu":
          return NavigationMenuPage;
        case "pagination":
          return PaginationPage;
        case "popover":
          return PopoverPage;
        case "progress":
          return ProgressPage;
        case "radiogroup":
          return RadioGroupPage;
        case "resizable":
          return ResizablePage;
        case "scrollarea":
          return ScrollAreaPage;
        case "select":
          return SelectPage;
        case "separator":
          return SeparatorPage;
        case "sheet":
          return SheetPage;
        case "sidebar":
          return SidebarPage;
        case "skeleton":
          return SkeletonPage;
        case "slider":
          return SliderPage;
        case "sonner":
          return SonnerPage;
        case "switch":
          return SwitchPage;
        case "table":
          return TablePage;
        case "tabs":
          return TabsPage;
        case "textarea":
          return TextareaPage;
        case "toggle":
          return TogglePage;
        case "togglegroup":
          return ToggleGroupPage;
        case "tooltip":
          return TooltipPage;
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
        } bg-flip-black border-r flex-shrink-0 transition-all duration-300 flex flex-col h-screen`}
      >
        <div className="p-4 pb-2 flex-shrink-0">
          <button
            onClick={toggleCollapse}
            className={`${
              isCollapsed ? "min-w-full" : "min-w-10"
            } text-flip-orange hover:text-flip-black hover:bg-flip-orange p-1 transition-colors `}
          >
            {isCollapsed ? "→" : "←"}
          </button>
        </div>

        <ScrollArea className="flex-1 h-0 px-4">
          <div className="pb-4">
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
        </ScrollArea>
      </div>

      <div className="flex-1 overflow-auto max-w-4xl mx-auto">
        {renderPage()}
      </div>
    </div>
  );
});

export default Content;
