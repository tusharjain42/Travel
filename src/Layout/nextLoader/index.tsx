"use client";
import NextTopLoader from "nextjs-toploader";

const NextLoader = () => {
  return (
    <NextTopLoader
      color="#FABF00"
      initialPosition={0.08}
      crawlSpeed={200}
      height={7}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
      shadow="0 0 10px #2299DD,0 0 5px #2299DD"
    />
  );
};

export default NextLoader;