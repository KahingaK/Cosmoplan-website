import React from "react";
import { products } from "../data";
import ProjectSlider from "./ProjectSlider";

function Projects() {
  const { title, subtitle } = products;

  return (
    <section className="section text-center">
      <div className="container mx-auto">
        <div>
          <h2 className="title">{title}</h2>
          <p className="max-w-[639px] mx-auto mb-[50px] lg:mb-[70px]">{subtitle}</p>
        </div>
        <ProjectSlider />
      </div>
    </section>
  );
}

export default Projects;
