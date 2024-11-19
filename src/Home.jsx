import { useState } from "react";
import Form from "./Components/Form";
import "./CSS/Home.css";
import { motion } from "framer-motion";
import axios from "axios";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [userSecondName, setUserSecondName] = useState("");
  const [agreeOrNot, setAgreeOrNot] = useState(null);
  const [userClass, setUserClass] = useState("");
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false); // State for checkbox
  const [message, setMessage] = useState("");

  const handleSendUserData = () => {
    if (
      !userName ||
      !userSecondName ||
      !agreeOrNot ||
      !userClass ||
      !isPrivacyAccepted
    ) {
      console.log("Please Fill All Fields and accept the privacy terms");
      return;
    }

    if (isPrivacyAccepted == false) {
      console.log("You have to accept privacy");
      return;
    }

    axios
      .post("https://civicproject.onrender.com/SendUserData", {
        userName,
        userSecondName,
        agreeOrNot,
        userClass,
        isPrivacyAccepted,
      })
      .then((response) => {
        console.log(response.data);
        setMessage("გმადლობთ ფორმის შევსებისათვის თქვენი პასუხი შენახულია");
        setTimeout(() => {
          window.location.reload();
          setMessage("")
        }, 1500);
      })
      .catch((err) => {
        console.log("Something went wring while sending data to server", err);
        setMessage("მოხდა რაღაც შეცდომა გთხოვთ ცადეთ თავიდან 1 წუთში")
      });
  };

  const handleCheckboxChange = (e) => {
    setIsPrivacyAccepted(e.target.checked); // Update state based on checkbox
  };

  return (
    <main>
      <motion.h1
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: "center" }}
      >
        N14 საჯარო სკოლის, სამოქალაქო პროექტის გამოკითხვა
      </motion.h1>
      <Form
        userName={userName}
        setUserName={setUserName}
        userSecondName={userSecondName}
        setUserSecondName={setUserSecondName}
        agreeOrNot={agreeOrNot}
        setAgreeOrNot={setAgreeOrNot}
        userClass={userClass}
        setUserClass={setUserClass}
        message={message}
      />

      <motion.div
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        className="privacy-accept"
      >
        <input
          type="checkbox"
          checked={isPrivacyAccepted}
          onChange={handleCheckboxChange} // Handle state update
        />
        <p>
          მე წავიკითხე წესები და ვაცხადებ, რომ ჩემს მიერ წარმოდგენილი ინფორმაცია
          არის ნამდვილი
        </p>
      </motion.div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          gap: "10px",
        }}
      >
        <motion.button
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          onClick={handleSendUserData}
          className="sent-btn"
        >
          გაგზავნა
        </motion.button>
        {message && <p>{message}</p>}
      </div>
    </main>
  );
};

export default Home;
