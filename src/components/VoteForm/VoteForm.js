import "./Style/VoteForm.css";
export default function VoteForm(props) {
    const setVote = function (e) {
        if (window?.INIT?.ga) {
            gtag('event', 'click', {
                'send_to': window?.INIT?.ga?.id,
                'event_label': e,
                'event_category': 'Bookings',
                'transport_type': 'beacon'
            })
        };
    }

    return (
        <>
            {
                props.voteItem.map((item) => {
                    return (
                        <article className="vote" key={item} onClick={() => setVote(item)}>
                            {item}
                        </article>)
                })
            }
        </>
    )
}