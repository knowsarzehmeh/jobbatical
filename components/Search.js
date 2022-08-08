import React from "react";

function Search() {
  return (
    <div className="w-full py-3">
      <div className="text-center font-bold py-5">
        <h2 className="text-3xl md:text-5xl leading-[56px]">
          Work with <span className="text-white">GraphQL</span>
        </h2>
        <h2 className="text-3xl md:text-5xl leading-[56px]">
          in a modern startup.
        </h2>
      </div>

      <form className=" py-2">
        <div className="shadow flex mx-auto max-w-[calc(420px_+_(120_*_((100vw_-_320px)/_1280)))]">
          <input
            className="p-2 lg:p-4 grow-[7] leading-8 rounded-tl-md rounded-bl-md focus-visible:outline-none"
            type="text"
            placeholder="Location"
          />
          <button className="p-2 lg:p-4  grow-[3] text-white bg-black rounded-tr-md rounded-br-md">
            Search
          </button>
        </div>
      </form>
      <div className="text-center py-3">
        <p className="font-normal">
          We are supported by{" "}
          <span className="underline font-medium">Atlasmic's live chat</span>{" "}
          platform
        </p>
      </div>
    </div>
  );
}

export default Search;
