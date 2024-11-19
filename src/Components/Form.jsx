import "../CSS/Form.css";
import { motion } from "framer-motion";

const Form = ({
  userName,
  setUserName,
  userSecondName,
  setUserSecondName,
  setAgreeOrNot,
  userClass,
  setUserClass,
  message,
}) => {
  const handleAgreeChange = (e) => {
    setAgreeOrNot(e.target.nextSibling.innerText); // Set the text value based on the selected radio button
  };

  return (
    <div className="main-form-container">
      <motion.div
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="form-container"
      >
        <p>
          <strong>თემა:</strong> თქვენი აზრით, არის თუ არა 2020-2024 წლები
          საუკეთესო პერიოდი ადამიანების ცხოვრებაში? იგულისხმება ადამიანური
          კავშირები, ურთიერთობები და კომუნიკაცია.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="form-container"
      >
        <label htmlFor="userName">
          თქვენი სახელი (ქართულად):
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            name="userName"
            placeholder="თქვენი პასუხი"
          />
        </label>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="form-container"
      >
        <label htmlFor="userSecondName">
          თქვენი გვარი (ქართულად):
          <input
            value={userSecondName}
            onChange={(e) => setUserSecondName(e.target.value)}
            type="text"
            name="userSecondName"
            placeholder="თქვენი პასუხი"
          />
        </label>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="form-container"
      >
        <label htmlFor="userClass">
          თქვენი კლასი (ქართულად):
          <input
            value={userClass}
            onChange={(e) => setUserClass(e.target.value)}
            type="text"
            name="userClass"
            placeholder="მაგ: 11ბ"
          />
        </label>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="form-container"
      >
        ეთანხმებით თუ არა მოცემულ თემას?
        <label className="checkboxes" htmlFor="AgreeOrDisagree">
          <div className="checkbox-container">
            <input
              type="radio"
              name="AgreeOrDisagree"
              value="კი, ვეთანხმები"
              id="agree"
              onChange={handleAgreeChange}
            />
            <label htmlFor="agree">კი, ვეთანხმები</label>
          </div>
          <div className="checkbox-container checkbox-container2">
            <input
              type="radio"
              name="AgreeOrDisagree"
              value="არა, არ ვეთანხმები"
              id="disagree"
              onChange={handleAgreeChange}
            />
            <label htmlFor="disagree">არა, არ ვეთანხმები</label>
          </div>
        </label>
      </motion.div>

    </div>
  );
};

export default Form;
