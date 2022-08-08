import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchJobs } from "../server/api";
import Container from "./Container";
import Job from "./Job";

function Featured({ featured }) {
  return (
    <div className="bg-[#F0F5FF] py-6">
      <Container>
        <p className="text-[#0055FE] font-medium text-sm">FEATURED</p>
        {Array.isArray(featured) &&
          featured.map((job) => <Job key={job?.id} job={job} />)}
      </Container>
    </div>
  );
}

function NotFeatured({ notFeatured }) {
  return (
    <div className=" py-6">
      <Container>
        {Array.isArray(notFeatured) &&
          notFeatured.map((job) => <Job key={job?.id} job={job} />)}
      </Container>
    </div>
  );
}

function Jobs() {
  const { data } = useQuery(["jobs"], () => fetchJobs());
  const featured = data?.jobs?.filter((job) => job.isFeatured);
  const notFeatured = data?.jobs?.filter((job) => !job.isFeatured);

  return (
    <div>
      <Container>
        <div className="pt-[56px] pb-[calc(56px/2)]">
          <h2 className="font-bold text-3xl md:text-4xl">Older than a year</h2>
        </div>
      </Container>
      <Featured featured={featured} />
      <NotFeatured notFeatured={notFeatured} />
    </div>
  );
}

export default Jobs;
