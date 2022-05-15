import { Redirect, Route, Switch } from "react-router-dom"
import Main from "../Pages/MainPage/Main"
import About from "../Pages/AboutPage/About"
import Votes from "../Pages/VotesPage/Votes"
import CreateVote from "../Pages/CreateVotePage/CreateVote"
import CatVote from "../Pages/CatVotePage/CatVote"


export const Routing = () => {
    return (
        <Switch>
            <Route component={Main} path={"/"} exact={true} />
            <Route component={About} path={"/about"} exact={true} />
            <Route component={Votes} path={"/about/votes"} exact={true} />
            <Route component={CreateVote} path={"/about/create-vote"} exact={true} />
            <Route component={CatVote} path={"/about/votes/:id"} />
            <Redirect to={"/"} />
        </Switch>
    )
}
