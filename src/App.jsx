import { useState } from "react";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
import Interview from "./Component/Interview";
import Result from "./Component/Result";
import Dashboard from "./Component/Dashboard";
import JobRole from "./Component/JobRole";

import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);
const [selectedRole, setSelectedRole] = useState("");
const [experience, setExperience] = useState("");
const [resumeText, setResumeText] = useState("");
  const [isLogin, setIsLogin] = useState(() => {
    try {
      const stored = localStorage.getItem("loggedInUser");
      return Boolean(stored && stored !== "undefined" && stored !== "null");
    } catch {
      return false;
    }
  });
  const [isRegister, setIsRegister] = useState(false);
const [answers, setAnswers] = useState([]);
const [result, setResult] = useState(null);
  const [page, setPage] = useState("dashboard");

  return (

    <div>

      {
        !isLogin ?

          isRegister ?

            <Register
              setIsRegister={setIsRegister}
              setIsLogin={setIsLogin}
            />

            :

            <Login
              setIsRegister={setIsRegister}
              setIsLogin={setIsLogin}
            />

          :

          <>

            <Navbar />

            <div className="layout">

              <Sidebar
    setLogin={setIsLogin}
    setPage={setPage}
/>

              {
  page === "dashboard" &&
  <Dashboard
    setPage={setPage}
    setResumeText={setResumeText}
  />
}

              {
  page === "jobrole" &&
  <JobRole
    setPage={setPage}
    setQuestions={setQuestions}
    setSelectedRole={setSelectedRole}
    setExperience={setExperience}
    resumeText={resumeText}
/>
}

           {
  page === "interview" &&
  <Interview
      setPage={setPage}
      questions={questions}
      selectedRole={selectedRole}
      experience={experience}
      answers={answers}
      setAnswers={setAnswers}
      setResult={setResult}
/>
}
              {
                page === "result" && <Result
    setPage={setPage}
    result={result}
/>
}

            </div>

          </>

      }

    </div>

  );

}

export default App;