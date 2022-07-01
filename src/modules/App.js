import "./App.css";
import VoteForm from "../components/VoteForm/VoteForm";

export default function App() {
    if (window?.INIT?.ga) {
        const gaScriptSrc = `https://www.googletagmanager.com/gtag/js?id=${window.INIT.ga.id}`;
        const gaScript = document.createElement("script");
        gaScript.async = true;
        gaScript.src = gaScriptSrc;

        const gaScriptInline = document.createElement("script");
        gaScriptInline.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
        
            gtag('config', '${window.INIT.ga.id}');
        `;

        document.head.appendChild(gaScript)
        document.head.appendChild(gaScriptInline)
    }

    return (
        <>
            <VoteForm voteItem={["Dog", "House", "Test"]} />
        </>
    )
}