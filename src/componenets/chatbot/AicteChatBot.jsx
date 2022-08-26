import React, { useEffect, useState } from "react";
import ChatBot from "react-simple-chatbot";
import alternativesTxt from "../../assets/chatBotDataSet/alternatives.txt";
import answersTxt from "../../assets/chatBotDataSet/answers.txt";
import questionsTxt from "../../assets/chatBotDataSet/questions.txt";
import { BsArrowRepeat } from "react-icons/bs";
// import { SiChatbot } from "react-icons/si";

const ChatBotResult = ({ steps, triggerNextStep }) => {
  function compare(triggerArray, replyArray, text) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] === text) {
          let items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    return item;
  }
  const chatBotResponse = async (querry) => {
    querry = querry
      .toLowerCase()
      .replace(/[^\w\s\d]/gi, "")
      .replace(/ a /g, " ")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "");

    let alternativesRes = await fetch(alternativesTxt);
    let alternatives = await alternativesRes.text();
    alternatives = alternatives.split("\n").map((e) => e.trim());

    let answersRes = await fetch(answersTxt);
    let answers = await answersRes.text();
    answers = answers.split("\n").map((e) => e.trim());
    answers = answers.map((e) => e.split(","));

    let questionsRes = await fetch(questionsTxt);
    let questions = await questionsRes.text();
    questions = questions.split("\n").map((e) => e.trim());
    questions = questions.map((e) => e.split(","));

    let result = "";
    if (compare(questions, answers, querry)) {
      result = compare(questions, answers, querry);
    } else {
      result = alternatives[Math.floor(Math.random() * alternatives.length)];
    }
    return result;
  };
  const [response, setResponse] = useState("hii");

  useEffect(() => {
    let querry = steps["2"].value;
    chatBotResponse(querry).then((res) => setResponse(res));
  }, []);
  const handleNextTrigger = () => {
    triggerNextStep();
  };

  return (
    <div>
      <div id="bot">
        {response} <BsArrowRepeat onClick={handleNextTrigger} />
      </div>
    </div>
  );
};

const AicteChatBot = () => {
  // const [open, setOpen] = useState(false);
  // const handleBotOpen = () => {
  //   setOpen(true);
  // };
  // const chatBotRef = useRef(null);

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     console.log(document.getElementById("chat-bot"));
  //     if (
  //       document.getElementById("chat-bot") &&
  //       !document.getElementById("chat-bot").contains(event.target)
  //     ) {
  //       alert("You clicked outside of me!");
  //     }
  //   }
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [chatBotRef]);

  return (
    <ChatBot
      // ref={chatBotRef}
      id="chat-bot"
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
          user: true,
          trigger: "3",
        },
        {
          id: "3",
          component: <ChatBotResult />,
          waitAction: true,
          trigger: "2",
        },
      ]}
    />
  );
};

export default AicteChatBot;
