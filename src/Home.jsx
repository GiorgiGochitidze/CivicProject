import { useState } from "react";
import Form from "./Components/Form";
import "./CSS/Home.css";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [userSecondName, setUserSecondName] = useState("");
  const [agreeOrNot, setAgreeOrNot] = useState(null);
  const [userClass, setUserClass] = useState("");
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false); // State for checkbox

  const handleSendUserData = () => {
    if (!userName || !userSecondName || !agreeOrNot || !userClass || !isPrivacyAccepted) {
      console.log("Please Fill All Fields and accept the privacy terms");
      return;
    }

    console.log({ userName, userSecondName, agreeOrNot, userClass });
  };

  const handleCheckboxChange = (e) => {
    setIsPrivacyAccepted(e.target.checked); // Update state based on checkbox
  };

  return (
    <main>
      <h1 style={{ textAlign: "center" }}>
        N14 საჯარო სკოლის, სამოქალაქო პროექტის გამოკითხვა
      </h1>
      <Form
        userName={userName}
        setUserName={setUserName}
        userSecondName={userSecondName}
        setUserSecondName={setUserSecondName}
        agreeOrNot={agreeOrNot}
        setAgreeOrNot={setAgreeOrNot}
        userClass={userClass}
        setUserClass={setUserClass}
      />

      <div className="privacy-accept">
        <input
          type="checkbox"
          checked={isPrivacyAccepted}
          onChange={handleCheckboxChange} // Handle state update
        />
        <p>მე წავიკითხე წესები და ვაცხადებ, რომ ჩემს მიერ წარმოდგენილი ინფორმაცია არის ნამდვილი</p>
      </div>

      <button onClick={handleSendUserData} className="sent-btn">
        გაგზავნა
      </button>
    </main>
  );
};

export default Home;
