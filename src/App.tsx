import Footer from "./components/footer";
import Navbar from "./components/navbar";
import CustomPageSlider from "./components/page-slider";

/*
Created by Youtuber 9jacoder
Instagram : @9jacoder.tech
Telegram : @YT_9jacoder
*/

function App() {
  return (
    <main className="relative min-h-screen">
      {/* Navbar Component */}
      <Navbar />

      {/* Page Slider Component */}
      <CustomPageSlider />

      {/* Footer Component */}
      <Footer />

      {/* Floating Quote */}
      <img
        src="/assets/quote.png"
        className="absolute bottom-[200px] right-[350px] w-96 rotate-12"
        alt="Floating Quote"
      />
    </main>
  );
}

export default App;
