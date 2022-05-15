import { Redirect, Route, Switch } from "react-router-dom";
import React from "react";
import CreateVotePage from "../Pages/CreateVotePage/CreateVotePage";

const LazyMainPage = React.lazy(() => import("../Pages/MainPage/MainPage"));
const LazyAboutPage = React.lazy(() => import("../Pages/AboutPage/AboutPage"));
const LazyVotesPage = React.lazy(() => import("../Pages/VotesPage/VotesPage"));
const LazyCatVotePage = React.lazy(() => import("../Pages/CatVotePage/CatVotePage"));


export const Routing = () => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route component={LazyMainPage} path={"/"} exact={true} />
                <Route component={LazyAboutPage} path={"/about"} exact={true} />
                <Route component={LazyVotesPage} path={"/about/votes"} exact={true} />
                <Route component={CreateVotePage} path={"/about/create-vote"} exact={true} />
                <Route component={LazyCatVotePage} path={"/about/votes/:id"} />
                <Redirect to={"/"} />
            </Switch>
        </React.Suspense>
    );
}
