"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/aboutme1.png " width={500} height={500} />
        <div>
          <h2 className="text-4xl  font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Sou um desenvolvedor Front-end apaixonado por criar páginas
            interativas e responsivas. Eu tenho estudado bastante sobre
            JavaScript, HTML, CSS e Git. Aprendo rápido e estou sempre buscando
            expandir meus conhecimentos e conjunto de habilidades. Busco me
            aperfeiçoar para ter a minha primeira oportunidade de emprego como
            programador.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
