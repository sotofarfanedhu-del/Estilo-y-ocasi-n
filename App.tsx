import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Collection from "./components/Collection";
import Story from "./components/Story";
import HowItWorks from "./components/HowItWorks";
import Join from "./components/Join";
import Footer from "./components/Footer";

const NOISE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`;

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Collection />
        <Story />
        <HowItWorks />
        <Join />
      </main>
      <Footer />

      {/* Film grain */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[90] opacity-[0.05] mix-blend-multiply"
        style={{ backgroundImage: NOISE }}
      />
    </div>
  );
}
