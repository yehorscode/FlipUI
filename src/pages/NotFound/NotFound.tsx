import { Button } from "@/components/ui/button";
export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center border-5 p-5">
        <h1 className="font-helvb08 bg-flip-red p-5 text-8xl text-black">
          404
        </h1>
        <span>Our dolphin did not find your page... </span>
        <Button
          className="mt-2"
          variant="outline"
          onClick={() => (window.location.href = "/")}
        >
          Try returning back to home page
        </Button>
      </div>
    </div>
  );
}
