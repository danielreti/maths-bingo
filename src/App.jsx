import React from "react";
import "./App.css";

const numbers = [
    // 15 random 2-digit numbers
    23, 47, 58, 62, 79, 34, 88, 51, 96, 41, 27, 65, 53, 72, 86,
    // 10 random 3-digit numbers
    134, 287, 415, 523, 678, 392, 801, 746, 359, 912,
];

const randomise = () => {
    // Create a shallow copy to avoid modifying the original array
    const shuffledArray = [...numbers];

    // Fisher-Yates (Knuth) shuffle
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
        ];
    }

    // Get the first 9 elements
    return shuffledArray.slice(0, 9);
};

const App = () => {
    const randomArray = randomise();
    return (
        <div className="container">
            {randomArray.map((d, i) => {
                return (
                    <div className="box" key={i}>
                        {d
                            .toString()
                            .split("")
                            .map(
                                (e, j) =>
                                    +e *
                                    10 **
                                        (d.toString().split("").length - j - 1)
                            )
                            .join("+")}
                    </div>
                );
            })}
        </div>
    );
};

export default App;
