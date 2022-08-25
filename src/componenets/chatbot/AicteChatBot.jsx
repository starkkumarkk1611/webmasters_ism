import React from "react";
import ChatBot from "react-simple-chatbot";

const AicteChatBot = () => {
  return (
    <ChatBot
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
      }}
      steps={[
        {
          id: "1",
          message:
            "Hello Namaste 🙏Greetings from AICTEI am AICTE DIGITAL ASSISTANT",
          trigger: "2",
        },
        {
          id: "2",
          message: "select any category!",
          trigger: "3",
        },
        {
          id: "3",
          options: [
            { value: 1, label: "ATAL", trigger: "4" },
            { value: 2, label: "SWYAM", trigger: "5" },
            { value: 3, label: "Approval Process", trigger: "6" },
          ],
        },
        {
          id: "4",
          message:
            "To plan and help in imparting quality technical education in the country and to support technical institutions in fostering research, innovation and entrepreneurship through training in various emerging areas.",
          trigger: "1",
        },
        {
          id: "5",
          message:
            "SWAYAM is one of the World's largest Online Free E-Learning Platform indigenously developed by AICTE under Ministry of Education, Government of India to achieve  three cardinal principles of Education Policy viz., Access, Equity and Quality by covering School/ Vocational, Under-Graduate, Post Graduate, Engineering and Other Professional Courses.",
          trigger: "1",
        },
        {
          id: "6",
          message:
            "As defined in the AICTE act 1987, Technical Education means programs, of Education, Research, and training in Engineering and Technology, Architecture, Town Planning, Management, Pharmacy, and Applied Arts and Crafts, and such other programs or areas as the Central Government may in consultation with the Council, by notification in the official gazette declare",
          end: true,
        },
      ]}
    />
  );
};

export default AicteChatBot;
