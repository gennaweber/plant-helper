import React from "react";
// import { useTranslation } from "react-i18next";

import FormContainer from "../components/Form/FormContainer";
import FamilyMembers from "../components/Form/FamilyMembers";
import Priorities from "../components/Form/Priorities";

const CreateProfile = ({
  form,
  setForm,
  languages,
  setCurrentLangCode,
  currentLangCode,
  textSize,
  setTextSize,
}) => {
  // const { t } = useTranslation();

  const nextStep = () => {
    setForm({ ...form, step: form.step + 1 });
  };

  const prevStep = () => {
    setForm({ ...form, step: form.step - 1 });
  };

  const resetStep = () => {
    setForm({ ...form, step: (form.step = 1) });
  };

  const handleChange = (input, value) => {
    setForm({ ...form, [input]: value });
  };

  const handleAgesChange = (e) => {
    const ages = form.ages;
    if (e.target.checked) {
      //add age to array
      ages.push(e.target.name);
      setForm({ ...form, ages });
    } else {
      //remove age from array
      const oldAges = form.ages;
      const ages = oldAges.filter((age) => age !== e.target.name);
      setForm({ ...form, ages });
    }

    if (ages.length > form.numberOfPeople) {
      setForm({ ...form, numberOfPeople: ages.length });
    }
  };

  const displaySection = (step) => {
    switch (step) {
      case 1:
        return (
          <FamilyMembers
            handleAgesChange={handleAgesChange}
            handleChange={handleChange}
            form={form}
            setForm={setForm}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <Priorities
            handleChange={handleChange}
            form={form}
            setForm={setForm}
            resetStep={resetStep}
          />
        );

      default:
        return (
          <FamilyMembers
            handleAgesChange={handleAgesChange}
            handleChange={handleChange}
            form={form}
            setForm={setForm}
            nextStep={nextStep}
          />
        );
    }
  };

  return (
    <>
      <FormContainer
        prevStep={prevStep}
        nextStep={nextStep}
        width="sm"
        step={form.step}
        languages={languages}
        setCurrentLangCode={setCurrentLangCode}
        currentLangCode={currentLangCode}
        textSize={textSize}
        setTextSize={setTextSize}
      >
        {displaySection(form.step)}
      </FormContainer>
    </>
  );
};

export default CreateProfile;
