import "./App.css";
const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
const Link =  window.ReactRouterDOM.Link;
const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;

import Home from "../components/Home/Home";
import VoteForm from "../components/VoteForm/VoteForm";
import Nav from "../components/Nav/Nav";

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
            <Router>
                <header className="main-header">
                    <Link className="logo" to="/">ReactVoting</Link>
                    <Nav />
                </header>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/vote">
                        <VoteForm title="Stem på din favorit" voteItem={
                            [
                                { img: "https://new.felix-schultz.net/assets/IMG_0942.jpg", name: "Test1" },
                                { img: "https://new.felix-schultz.net/assets/IMG_0942.jpg", name: "Test2" },
                                { img: "https://new.felix-schultz.net/assets/IMG_0942.jpg", name: "Test3" },
                                { img: "https://new.felix-schultz.net/assets/IMG_0942.jpg", name: "Test4" }
                            ]}
                        />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Router>
        </>
    )
}