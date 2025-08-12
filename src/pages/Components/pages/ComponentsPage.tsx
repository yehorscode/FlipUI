import { useNavigate } from "react-router-dom";


export default function ComponentsPage() {
    const navigate = useNavigate();
    return (
        <div className="p-8 flex flex-col">
                    <h1 className="text-5xl bg-black dark:bg-flip-orange dark:text-flip-black text-flip-orange w-min px-2 py-1">
                      Components
                    </h1>
                    <span>
                      Make your app look like a flipper using components that I styled!
                    </span>{" "}
                    <br />
                    <span className="bg-accent text-flip-black p-1">
                      Note!: This page is in no way affiliated with Flipper Devices or
                      any flipper zero accessories.
                    </span>{" "}
                    <br />
                    <span className="bg-accent text-flip-black p-1">
                      Note 2: This page is in no way affiliated with ShadCn/ui team nor
                      its contributors and isnt affiliated with Tailwind
                    </span>
                    <h2 className="text-4xl bg-black dark:bg-flip-orange dark:text-flip-black text-flip-orange w-fit mt-10 px-2 py-1">
                      First steps
                    </h2>
                    <span>To start with FlipUI you can go throught the <span className="text-flip-orange bg-flip-black dark:text-flip-black dark:bg-flip-orange p-1 cursor-pointer" onClick={() => navigate("/components/installation")}>Installation</span> and the <span className="text-flip-orange bg-flip-black dark:text-flip-black dark:bg-flip-orange p-1 cursor-pointer" onClick={() => navigate("/components/usage")}>Usage</span> pages of documentation. That should be more then enough to get you started with FlipUI</span>
        </div>
    )
}