import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      label: "What is an accordion?",
      contents:
        "An accordion is a musical instrument that is played by compressing and expanding the bellows while pressing buttons or keys to produce different notes. It is often associated with folk, polka, and traditional styles of music.",
    },
    {
      label: "What types of accordions are there?",
      contents:
        "There are many different types of accordions, including diatonic, chromatic, piano, and button accordions. Each type has its own unique characteristics and is suited for different styles of music.",
    },
    {
      label: "How do you play the accordion?",
      contents:
        "To play the accordion, you must hold the instrument between your hands and use your fingers to press the buttons or keys while simultaneously compressing and expanding the bellows. It takes practice and dedication to master the instrument and produce a wide range of sounds.",
    },
    {
      label: "What genres of music use the accordion?",
      contents:
        "The accordion has been used in many different genres of music, including folk, polka, jazz, rock, and classical. It is a versatile instrument that can add a distinctive flavor to any musical performance.",
    },
    {
      label: "What are some famous accordion players?",
      contents:
        "Many famous musicians have played the accordion throughout their careers, including Weird Al Yankovic, Lawrence Welk, and Clifton Chenier. Each player has their own unique style and has contributed to the instrument's popularity.",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
