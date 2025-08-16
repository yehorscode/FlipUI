export default function InstallationPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-5xl bg-black dark:bg-flip-orange dark:text-flip-black text-flip-orange w-min px-2 py-1">
        Installation
      </h1>
      <span>Apply the theme</span>{" "}
      <div className="mt-5">
        <h3 className="text-4xl">How to install</h3>
        <p className="bg-flip-red/70 text-white p-2">
          Note: to follow next steps you need to have Shadcn/ui installed. Don't
          have?{" "}
          <a
            href="https://ui.shadcn.com/docs/installation"
            className="underline bg-flip-orange text-white dark:text-black hover:font-bold"
          >
            Learn How
          </a>
        </p>
        <p>
          Because all that i modified really is the index.css file it is very
          easy to install. Most of the componennts <i>Should</i> style
          automatically
        </p>
        <p>
          Simply include the FlipUI CSS file in your project and you're good to
          go!
        </p>
        <p>Here is where to get it:</p>
        <a
          href="https://github.com/yehorscode/FlipUI/blob/main/src/index.css"
          className="underline bg-flip-orange text-white dark:text-black hover:font-bold text-xl"
        >
          https://github.com/yehorscode/FlipUI/blob/main/src/index.css on github
        </a>{" "}
        <br />
        <a
          href="https://raw.githubusercontent.com/yehorscode/FlipUI/refs/heads/main/src/index.css"
          className="underline bg-flip-orange/60 text-white dark:text-black"
        >
          https://raw.githubusercontent.com/yehorscode/FlipUI/refs/heads/main/src/index.css
          and raw version
        </a>
      </div>
      <div className="mt-5">
        <h3 className="text-4xl">Where to put</h3>
        <p>
          So now you downloaded it. You need to place the file here (REPLACE
          EXISTING ONE)
        </p>
        <span className="underline bg-flip-orange text-white dark:text-black hover:font-bold text-3xl">
          ./src/index.css
        </span>
      </div>
      <div className="mt-5">
        <h3 className="text-4xl">INSTALL FONTS</h3>
        <p>
          Please download these fonts for the theme to work. Download both and
          place them in a place where you want
        </p>
        <div className="mt-3 space-y-2">
          <div>
            <a
              href="/fonts/haxrcorp-4089.ttf"
              download
              className="underline bg-flip-orange text-white dark:text-black hover:font-bold text-xl block w-fit"
            >
              Download Haxrcorp 4089 Font
            </a>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Main display font used throughout FlipUI
            </span>
          </div>
          <div>
            <a
              href="/fonts/helvb08.ttf"
              download
              className="underline bg-flip-orange text-white dark:text-black hover:font-bold text-xl block w-fit"
            >
              Download Helvetica Bold Font
            </a>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Secondary font for emphasis
            </span>
          </div>
        </div>
        <p className="mt-3 text-sm bg-flip-red/70 text-white p-2">
          WARNING: MODIFY FONT PATHS INSIDE THE INDEX.CSS FILE USING CORRECT
          PATHS TO YOUR FONTS
        </p>
      </div>
    </div>
  );
}
