// import { useParams } from "wouter";
import { useAtom } from "jotai";
import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import flashcardAtom from "../atom/FlashcardAtom"


export default function PlayCards() {
    const [showBack, setShowBack] = useState(false);
    const [flashcards, setFlashcards] = useAtom(flashcardAtom);
    const [answer, setAnswer] = useState("");
    const [points, setPoints] = useState("");
    const [, navigate] = useLocation();

    const [card, setCard] = useState(() => {
        return flashcards[Math.floor(Math.random() * flashcards.length)];
    });

     const checkAnswer = () => {
        setShowBack(true);  
        // Todo: use AI to judge how good the answer is  
        if (answer == card.back){ setPoints("100")}
       
    }

    const nextCard = () => {
        setCard(flashcards[Math.floor(Math.random() * flashcards.length)]);
        setShowBack(false);
        setAnswer("");
        setPoints("")
    }

    const goBack = () => {
        navigate('/');
    }

    return <>
        <h1>Play Card</h1>
        <div className="col-md-5">
            <div className="card form-control h-100">

                <div className="mt-3 mb-3">
                    <h6 className="text-muted mb-2">Front</h6>
                    <p className="card-text">{card.front}</p>
                </div>

                <div className="mt-3 mb-3" style={{
                    visibility: showBack ? "visible" : "hidden"
                }}>
                    <h6 className="text-muted mb-2">Back</h6>
                    <p className="card-text">{card.back}</p>
                </div>

                <div className="mt-3 mb-3">
                    <label>Your answer:</label>
                    <input type="text"
                        className="form-control"
                        value={answer}
                        onChange={e => setAnswer(e.target.value)}
                    />
                </div>

                <div className="mt-3 mb-3">
                    <h6 className="text-muted mb-2">Points</h6>
                    <p className="card-text">{points}</p>
                </div>

            </div>
        </div>
        <div className="d-flex gap-2">
            <button className="mt-3 mr-3 btn btn-primary"
                onClick={goBack}
            >Go Back</button>

            <button className="mt-3 mr-3 btn btn-primary"
                  onClick={checkAnswer}
            >Check Answer</button>

            <button className="mt-3 mr-3 btn btn-primary"
                onClick={nextCard}
            >Next Card</button>
        </div>

    </>
}