import "./Style/VoteForm.css";
import SuccessWindow from "../Success/Success.js";
const { useState, useSWR } = React;

export default function VoteForm(props) {
    const [first, setfirst] = useState(false);
    const setVote = function (e) {
        if (window?.INIT?.ga) {
            gtag('event', 'click', {
                'send_to': INIT?.ga?.id,
                'event_label': e.name,
                'event_category': 'Bookings',
                'transport_type': 'beacon'
            })
        };
        setfirst(true);

    }

    return (
        <>
            <main className="content">
                <h1>{ props.title }</h1>
                {
                    props?.voteItem?.map((item) => {
                        return (
                            <article className="vote" key={item.name} onClick={() => { setVote(item) }}>
                                <img className="vote__image" src={item.img} alt={item.name} />
                                <h3>{item.name}</h3>
                            </article>)
                    })
                }
                {
                    (first) ? <SuccessWindow /> : null
                }
            </main>
        </>
    )
}