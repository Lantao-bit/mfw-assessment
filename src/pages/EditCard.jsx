import { useParams } from "wouter";
import { useAtom } from "jotai";
import { useState } from 'react';
import { useLocation } from 'wouter';
import flashcardAtom from "../atom/FlashcardAtom"

export default function EditCard() {

    const { id } = useParams();
    const [flashcards, setFlashcards] = useAtom(flashcardAtom);

    // retrive the flashcard according to parameter ID 
    const card = flashcards.find(function (card) {
        return card.id === parseInt(id)
    })

    // 2-way binding 1: state --> page
    const [front, setFront] = useState(card.front);
    const [back, setBack] = useState(card.back);
    const [, navigate] = useLocation();

    const updateFlashcard = () => {
        const newCard = {
            id, front, back
        };
        // determin the index of the updated flashcard 
        const index = flashcards.findIndex(card => card.id === parseInt(id));

        // 'with' method creates a new array with one element replaced 
        // 1st parameter: the index of the element to replace
        // 2nd parameter: the new element  
        const modified = flashcards.with(index, newCard);

        setFlashcards(modified);    // must use new array for array change in state  
        navigate('/');
    }

    return <>
        <h1>Edit Card</h1>
        <div class="col-md-5">
            <div className="card form-control h-100">

                <div className="mt-3 mb-3">
                    <label>Front:</label>
                    <input type="text"
                        className="form-control"
                        value={front}
                        onChange={e => setFront(e.target.value)} // 2-way binding 2: Page -> State
                    />
                </div>
                <div className="mt-3 mb-3">
                    <label>Back:</label>
                    <input type="text"
                        className="form-control"
                        value={back}
                        onChange={e => setBack(e.target.value)}   // 2-way binding 2: Page -> State
                    />
                </div>

            </div>
        </div>
        <button className="mt-3 btn btn-primary"
            onClick={updateFlashcard}
        >Update</button>

    </>
}