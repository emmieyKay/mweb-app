import React, { useState } from "react";
import ProviderItem from "./ProviderItem";

const ProvidersList = (props) => {
  const [providers, setItems] = useState(props.providers);
  const movePrev = () => {
    let selected = [...providers];
    const nextItem = selected.pop();
    selected.unshift(nextItem)
    setItems(selected)
  };

  const moveNext = () => {
    let selected = [...providers];
    const nextItem = selected.shift();
    selected.push(nextItem)
    setItems(selected)
  };

  return (
    <>
      <div className="w-full overflow-hidden relative">
        <div className="carousel my-12 mx-auto">

          <div className="relative overflow-hidden">
            <div className="flex justify-between absolute top left w-full h-full">
              <button
                onClick={movePrev}
                className="bg-blue-900/75 text-white w-10 h-full text-center z-10 p-0 m-0 transition-all ease-in-out duration-300"

              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60" height="24"
                  className="-ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="sr-only">Prev</span>
              </button>
              <button
                onClick={moveNext}
                className="bg-blue-900/75 text-white w-10 h-full text-center z-10 p-0 m-0 transition-all ease-in-out duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60" height="24"
                  className="-ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </button>
            </div>
            <div
              className="carousel-container relative flex gap-2 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
            >
              {providers.map((provider, index) => {
                return (
                  <ProviderItem details={provider} key={index} onSelect={()=> props.selectedProvider(provider)}/>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default ProvidersList