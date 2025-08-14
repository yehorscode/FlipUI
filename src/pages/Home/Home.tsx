import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-20">
      <div className="p-0">
        <h1 className="text-5xl bg-black dark:bg-flip-orange dark:text-flip-black text-flip-orange px-2 py-1">
          Tailwind theme that actually looks like Flipper UI
        </h1>
        <span>For the most part, mostly, if you squint</span>
        <div className="flex flex-col w-50 gap-1 mt-3">
          <Button
            className="p-6 text-2xl"
            onClick={() => {
              window.location.href = "/components";
            }}
          >
            See components
          </Button>
          <Button className="p-6 text-2xl">See colors</Button>
          <Button className="p-6 text-2xl" variant={"outline"}>
            Seek help
          </Button>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-3xl">
          Beautifully re-styled components from{" "}
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-flip-black hover:text-flip-orange dark:hover:bg-flip-orange dark:hover:text-flip-black"
          >
            <u>Shadcn/ui</u>
          </a>{" "}
          now in Flippah style
        </h1>
        <span>Made with love and tears</span>
      </div>
    </div>
  );
}
