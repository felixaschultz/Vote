import "./Style/VoteForm.css";
export default function VoteForm(props) {
    const setVote = function (e) {
        console.log(e);
    }

    return (
        <>
            {
                props.voteItem.map((item) => {
                    return (<article className="vote" key={item} onClick={ ()=>setVote(item) }>{ item }</article>)
                })
            }
        </>
    )
}