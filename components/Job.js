import Link from "next/link";
import React from "react";

function Tag({ jobIsFeatured, name }) {
  const className = jobIsFeatured
    ? " text-[#0055FE] rounded-md  border-2 border-[#0055FE]"
    : "";
  return (
    <div className={"px-2 py-1 text-center mx-1 text-sm" + className}>
      {name}
    </div>
  );
}

function Tags({ job }) {
  return (
    <div className="hidden md:flex  items-center">
      {Array.isArray(job?.tags) &&
        job.tags
          .slice(0, 3)
          .map((tag, idx) => (
            <Tag key={idx} name={tag?.name} jobIsFeatured={job?.isFeatured} />
          ))}
    </div>
  );
}

function Job({ job }) {
  return (
    <Link href="#">
      <div className="pr-3 flex items-center justify-between">
        <div className="flex items-center justify-between w-full max-w-[600px] lg:max-w-[700px]">
          <div className="py-4 cursor-pointer max-w-[350px]">
            <h3 className="font-bold text-xl">{job?.title}</h3>
            <p className="text-[#797A7D]">{job?.company?.name}</p>
          </div>
          <Tags job={job} />
        </div>

        {/* Flags Here */}
        <div className="hidden md:block text-end">
          {job.locationNames ? (
            <p>{job?.locationNames}</p>
          ) : job?.remotes.length > 0 ? (
            <span>
              {job?.remotes.map((location) => location?.name).join(", ")}
            </span>
          ) : (
            <span>
              {job?.cities.map((location) => location?.name).join(", ")}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default Job;
