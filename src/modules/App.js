import "./App.css";
import VoteForm from "../components/VoteForm/VoteForm";

export default function App() {
    return (
        <>
            <VoteForm voteItem={["Dog", "House", "Test"]} />
        </>
    )
}