import { useNavigate } from "react-router-dom";

export default function TypographyPage() {
  const navigate = useNavigate();
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-5xl bg-black dark:bg-flip-orange dark:text-flip-black text-flip-orange w-min px-2 py-1">
        Typography
      </h1>
      <span>Fonts that are used</span>{" "}
      <div className="flex-col flex">
        <span className="font-haxrcorp text-9xl">haxrcorp</span>
        <span className="font-haxrcorp text-8xl">haxrcorp</span>
        <span className="font-haxrcorp text-7xl">haxrcorp</span>
        <span className="font-haxrcorp text-6xl">haxrcorp</span>
        <span className="font-haxrcorp text-5xl">haxrcorp</span>
        <span className="font-haxrcorp text-4xl">haxrcorp</span>
        <span className="font-haxrcorp text-3xl">haxrcorp</span>
        <span className="font-haxrcorp text-2xl">haxrcorp</span>
        <span className="font-haxrcorp text-xl">haxrcorp</span>
        <span className="font-haxrcorp text-lg">haxrcorp</span>
        <span className="font-haxrcorp">haxrcorp</span>
        <span className="font-haxrcorp text-sm">haxrcorp</span>
      </div>
      <div className="mt-5">
        <span>
          <span className="bg-black dark:bg-flip-orange dark:text-flip-black text-flip-orange w-min px-2 py-1">
            Haxrcorp
          </span>{" "}
          font is used for{" "}
          <span className="bg-black dark:bg-flip-orange dark:text-flip-black text-flip-orange w-min px-2 py-1">
            main text and content
          </span>
          . It should <b>not</b> be used for titles, headings bold elements. It
          can be used as an accent for important things, such as the selected
          page at sidebar (look to the sidebar on the left) or some selected
          important element. Althrought it <i>can</i> be used for titles if they
          are written like{" "}
          <span className="bg-black dark:bg-flip-orange dark:text-flip-black text-flip-orange w-min px-2 py-1">
            this (bg-black dark:bg-flip-orange dark:text-flip-black
            text-flip-orange w-min px-2 py-1")
          </span>
        </span>
      </div>
      <div className="flex-col flex mt-5">
        <span className="font-helvb08 text-9xl">helvb08</span>
        <span className="font-helvb08 text-8xl">helvb08</span>
        <span className="font-helvb08 text-7xl">helvb08</span>
        <span className="font-helvb08 text-6xl">helvb08</span>
        <span className="font-helvb08 text-5xl">helvb08</span>
        <span className="font-helvb08 text-4xl">helvb08</span>
        <span className="font-helvb08 text-3xl">helvb08</span>
        <span className="font-helvb08 text-2xl">helvb08</span>
        <span className="font-helvb08 text-xl">helvb08</span>
        <span className="font-helvb08 text-lg">helvb08</span>
        <span className="font-helvb08">helvb08</span>
        <span className="font-helvb08 text-sm">helvb08</span>
      </div>
      <div className="mt-5">
        <span>
          <span className="bg-black font-helvb08 dark:bg-flip-orange dark:text-flip-black text-flip-orange w-min px-2 py-1">
            Helvb08
          </span>{" "}
          font is used for{" "}
          <span className="bg-black dark:bg-flip-orange dark:text-flip-black text-flip-orange w-min px-2 py-1">
            titles and headings
          </span>
          . It should <b>not</b> be used for main text and content. Why? Because
          its simply too bold
        </span>
      </div>
      <div className="mt-5">
        <span>
          You can download both of these fonts at the{" "}
          <span
            className="text-flip-orange bg-flip-black dark:text-flip-black dark:bg-flip-orange p-1 cursor-pointer"
            onClick={() => navigate("/components/installation")}
          >
            Installation section (click)
          </span>{" "}
        </span>
      </div>
    </div>
  );
}
