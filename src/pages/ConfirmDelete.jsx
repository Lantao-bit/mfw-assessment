import { useParams, Link } from 'wouter';
import { useAtom } from 'jotai';
import flashcardAtom from '../atom/FlashcardAtom';
import { useLocation } from 'wouter';

export default function ConfirmDelete() {

    const { id } = useParams();
    const [flashcards, setFlashcards] = useAtom(flashcardAtom);
    const [, navigate] = useLocation();

    const card = flashcards.find(card => card.id === parseInt(id));

    // create a new array and remove a card using "filter" (not used)
    const deleteCard = () => {
        const modifiedFlashcards = flashcards.filter(card => card.id !== parseInt(id));
        setFlashcards(modifiedFlashcards)
        navigate('/');
    }

    // create a new array and remove a card using "toSpliced"  
    const deleteCardWithNewMethod = () => {
        const index = flashcards.find(card => card.id === parseInt(id));
        const modifiedFlashcards = flashcards.toSpliced(index, 1);
        setFlashcards(modifiedFlashcards);
        navigate('/');
    }

    return <>

        <h1>Are you sure to delete this card?</h1>

        <div class="col-md-5">
            <div className="card form-control h-100">

                <div className="mt-3 mb-3">
                    <h6 className="text-muted mb-2">Front</h6>
                    <p className="card-text">{card.front}</p>
                </div>

                <div className="mt-3 mb-3">
                    <h6 className="text-muted mb-2">Back</h6>
                    <p className="card-text">{card.back}</p>
                </div>
            </div>
        </div>

        <button className="btn btn-danger m-2" onClick={deleteCardWithNewMethod}>Yes</button>
        <Link className="btn btn-primary m-2" href="/">No</Link>
    </>
}

