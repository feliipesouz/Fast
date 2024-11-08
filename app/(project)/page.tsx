'use client'

import { useState } from "react";
import Nav from "./landing-page/components/nav";
import Hero from "./landing-page/components/hero";
import SubHero from "./landing-page/components/sub-hero";
import Footer from "./landing-page/components/footer";


export default function LandingPage() {

  const [selectedPlan, setSelectedPlan] = useState("lifetime");
  const [formData, setFormData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalTutorialOpen, setIsModalTutorialOpen] = useState(false)

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
  };

  const handleFormSubmit = (data: any) => {
    console.log(data)
    setFormData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const closeTutorialModal = () => {
    setIsModalTutorialOpen(false)
  }

  return (
    <>
      <header>
        <Nav setIsModalTutorialOpen={setIsModalTutorialOpen} isModalTutorialOpen={isModalTutorialOpen} onCloseModal={closeTutorialModal} />
      </header>
      <main>
        <Hero onSelectPlan={handlePlanSelect} selectedPlan={selectedPlan} />
        <SubHero onSubmitForm={handleFormSubmit} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} onCloseModal={closeModal} formData={formData} selectedPlan={selectedPlan} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}


