import "./Style/VoteForm.css";
import SuccessWindow from "../Success/Success.js";
const { useState, useSWR } = React;

export default function VoteForm(props) {
    const [first, setfirst] = useState(false);
    const [name, setName] = useState("");
    const setVote = function (e) {
        if (window?.INIT?.ga) {
            gtag('event', 'click', {
                'send_to': INIT?.ga?.id,
                'event_label': e,
                'event_category': 'Bookings',
                'transport_type': 'beacon'
            })
        };
        setfirst(true);
        setName(e);
    }

    return (
        <>
            <main className="content">
                <h1>{ props.title }</h1>
                {
                    props?.voteItem?.map((item, key) => {
                        return (
                            <article className="vote" key={key} onClick={() => { setVote(item.name) }}>
                                <img className="vote__image" src={item.img} alt={item.name} />
                                <h3>{item.name}</h3>
                            </article>)
                    })
                }
                {
                    (first) ? <SuccessWindow name={name} /> : null
                }
            </main>
        </>
    )
}