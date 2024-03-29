import LogIn from "./LogIn";
import FlashcardSetsList from "./FlashcardSetsList";
import {displayCorners} from '../Utils'


export default function Home(props) {

  const currentUser = props.currentUser;

  return(


  <div className="row">
  <div className={"col-md-6 bg-primary p-4 " + displayCorners("left")}>
  <p className="display-9 text-center my-4">Choose any of the shared sets and start learning</p>
  <FlashcardSetsList
  listMode="shared"
  />
  </div>
  <div className={"col-md-6 bg-secondary p-4 " + displayCorners("right")}>
  {currentUser ? (
    <div className="row h-100 flex-column">
    <p className="display-9 text-center my-4">Practise recently studied sets...</p>
      <div className="col-md-6 mw-100 bg-danger">Recently studied</div>
      <p className="display-9 text-center my-4">...or go to your flashcards dashboard</p>
      <div className="col-md-6 mw-100 bg-success">Your flashcards dashboard</div>
    </div>

    ) : (
    <div className="row h-100 flex-column">
    <p className="display-9 text-center my-4">Log in to practice your flashcard sets or to create new ones</p>
    <div className="col-md-6 align-self-center">
    <LogIn setUser={() => props.setUser()}
          currentUser={currentUser}
           source="home"
            />
    </div>
    <p className="display-9 text-center my-4">Or&nbsp;
    <button className="btn btn-primary btn-block my-3"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='/signup';
      }}
      >Sign up</button>
    &nbsp;if you haven't done it yet!</p>
    <div className="col-md-6 align-self-center">

    </div>
    </div>

    )
  }
</div>
</div>
  );
}
