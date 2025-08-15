export default function UsagePage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-5xl bg-black dark:bg-flip-orange dark:text-flip-black text-flip-orange w-min px-2 py-1">
        Usage
      </h1>
      <span>
        How to use the components
      </span>{" "}
      <div className="mt-5">
        <h3 className="text-4xl">How to add components</h3>
        <p>To add components you need to add them by their respective name using this command</p>
        <p className="underline bg-flip-orange text-white dark:text-black hover:font-bold text-3xl">npx shadcn@latest add [name]</p>
        <p className="my-2">Instead of [name] enter desired component. Example</p>
        <p className="underline bg-flip-orange text-white dark:text-black hover:font-bold text-3xl">npx shadcn@latest add button</p>
        <p>Installs a button</p>
        <p>Or just do npx shadcn@latest add to install a lot</p>
      </div>
    </div>
  );
}
