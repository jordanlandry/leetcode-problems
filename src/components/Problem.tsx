import { useState } from "react";
import { useParams } from "react-router";
import data from "../data/data";
import Code from "./Code";
import GoBack from "./GoBack";

export default function Problem() {
  const [showCode, setShowCode] = useState(true);
  const [completedTests, setCompletedTests] = useState(0);
  const [hasTestRan, setHasTestRan] = useState(false);
  const [timeToComplete, setTimeToComplete] = useState(0);

  const { number } = useParams();
  const question = data.filter((q) => q.id.toString() === number);

  const handleToggleCode = () => {
    setShowCode((prev: boolean) => !prev);
  };

  const runTests = () => {
    setHasTestRan(false);
    setCompletedTests(0);
    let correctCount = 0;

    let t1 = performance.now();
    question[0].testCases.forEach((test: any) => {
      const { input, output } = test;

      if (JSON.stringify(question[0].code(input)) === JSON.stringify(output))
        correctCount++;
    });

    let t2 = performance.now();

    setCompletedTests(correctCount);
    setHasTestRan(true);
    setTimeToComplete(t2 - t1);
  };

  return (
    <div className="page">
      <GoBack />
      <div className="text-medium">
        <div className="section">
          <h2>{question[0].name}</h2>
          <p>{question[0].desc}</p>
          <span className="clickable" onClick={handleToggleCode}>
            {showCode ? "Hide" : "Show"} Code
          </span>
        </div>
        {showCode ? <Code text={question[0].code.toString()} /> : null}

        <div className="section">
          {hasTestRan ? (
            <div className="text-medium">
              {completedTests === question[0].testCases.length ? (
                <div>
                  <div className="text-success text-bigger">Success</div>
                  <p>
                    <span className="text-thin text-light">
                      Completed{" "}
                      <span className="text-dark text-bigger">
                        {completedTests} / {question[0].testCases.length}{" "}
                      </span>
                      tests in{" "}
                      <span className="text-dark text-bigger">
                        {Math.round(timeToComplete)}ms
                      </span>
                    </span>
                  </p>
                </div>
              ) : null}
            </div>
          ) : null}
          <button className="button text-medium" onClick={runTests}>
            Run Tests
          </button>
        </div>

        <div className="section">
          <h3 className="text-bigger">Explanation:</h3>
          <p>{question[0].solution}</p>
        </div>
      </div>
    </div>
  );
}