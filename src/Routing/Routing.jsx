import { Redirect, Route, Switch } from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import VotesPage from "../Pages/VotesPage/VotesPage";
import CreateVotePage from "../Pages/CreateVotePage/CreateVotePage";
import CatVotePage from "../Pages/CatVotePage/CatVotePage";


export const Routing = () => {
    return (
        <Switch>
            <Route component={MainPage} path={"/"} exact={true} />
            <Route component={AboutPage} path={"/about"} exact={true} />
            <Route component={VotesPage} path={"/about/votes"} exact={true} />
            <Route component={CreateVotePage} path={"/about/create-vote"} exact={true} />
            <Route component={CatVotePage} path={"/about/votes/:id"} />
            <Redirect to={"/"} />
        </Switch>
    )
}
