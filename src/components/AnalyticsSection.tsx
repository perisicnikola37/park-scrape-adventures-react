import "@fortawesome/fontawesome-free/css/all.min.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import neom from "../assets/neom.jpg";

export default function AnalyticsSection() {
  return (
    <div
      id="analytics_section"
      className="relative text-white bg-black h-[60rem] w-full"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent h-[30%] w-full"></div>

      <LazyLoadImage src={neom} className="w-full h-full object-cover" />

      <svg
        className="circle-overlay"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
      >
        <circle cx="150" cy="150" r="140" fill="rgba(255, 223, 0, 0.055)" />

        <circle
          cx="150"
          cy="150"
          r="140"
          fill="none"
          stroke="white"
          strokeWidth="6"
          strokeDasharray="2, 10"
        />
      </svg>

      <div className="position-container">
        <div className="text-overlay">
          <h2 className="text-md font-bold mb-2">Sunset Ridge Lookout</h2>

          <div className="border-t-2 border-dashed border-white w-96 mx-auto mb-2"></div>

          <p className="text-sm">859m Altitude</p>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 text-left w-1/2 p-24">
        <div className="text-overlay">
          <p className="text-lg mb-4">
            With each visit, you contribute to the ongoing story of
            conservation, ensuring that the magic of our national park endures
            for generations to come.
          </p>

          <div className="flex space-x-8 mb-4">
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold">836</p>
              <p className="text-xs text-center">
                daily guided <br /> visits
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold">98%</p>
              <p className="text-xs text-center">
                visitor <br /> satisfactions
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold">70+</p>
              <p className="text-xs text-center">
                biodiversity <br /> species
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold">158k</p>
              <p className="text-xs text-center">
                community <br /> followers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}