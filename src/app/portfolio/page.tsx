import db from "@/db/db.json";
import { categoryType } from "@/types/type";
import Link from "next/link";
import React from "react";
import PortfolioVideoGridContainer from "../(containers)/portfolioVideoGridContainer/portfolioVideoGridContainer";

const Portfolio: React.FC<categoryType> = ({ searchParams }) => {
  const { category } = searchParams; // Destructure 'category' from searchParams
  const { latestResume } = db;

  // Extract categories and ensure they are unique
  const getAllCategory = new Set(latestResume.map((item) => item.category));
  const allCategories: string[] = Array.from(getAllCategory); // Typing as an array of strings

  return (
    <>
      <div className="w-full flex items-center font-bold justify-center bg-primaryGreen text-primaryWhite">
        <Link
          href={`/portfolio?category=all`}
          className={`px-5 py-4 hover:bg-black ${
            category === "all" ? "bg-black" : ""
          }`}
        >
          همه
        </Link>

        {allCategories.map((categoryItem) => (
          <Link
            href={`/portfolio?category=${categoryItem}`}
            className={`px-5 py-4 hover:bg-black ${
              category === categoryItem ? "bg-black" : ""
            }`} // Add a class if the category matches
            key={categoryItem} // Use categoryItem as the key
          >
            {categoryItem}
          </Link>
        ))}
      </div>
      <PortfolioVideoGridContainer category={category} />
    </>
  );
};

export default Portfolio;