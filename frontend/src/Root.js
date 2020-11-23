import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import LandingPage from "./components/LandingPage/LandingPage";
import SignupFormPage from "./components/SignUpFormPage/SignUpFormPage";
import LoginFormPage from "./components/LoginFormPage/LoginFormPage";
import Navigation from "./components/Navigation";
import UploadSongPage from "./components/UploadSongPage/UploadSongPage";
import EditSongPage from "./components/EditSongPage/EditSongPage";

import * as sessionActions from "./store/session";

const RootContainer = styled.div`
    background-color: #323f4b;
    height: 100vh;
`;

function Root() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);

    return (
        <RootContainer>
            {isLoaded && (
                <Switch>
                    <Route exact path="/">
                        <Navigation isLoaded={isLoaded} />
                        <LandingPage />
                    </Route>
                    <Route path="/login">
                        <Navigation isLoaded={isLoaded} />
                        <LoginFormPage />
                    </Route>
                    <Route path="/signup">
                        <Navigation isLoaded={isLoaded} />
                        <SignupFormPage />
                    </Route>
                    <Route path="/songs/new">
                        <UploadSongPage />
                    </Route>
                    <Route path="/songs/:songId/edit">
                        <EditSongPage />
                    </Route>
                </Switch>
            )}
        </RootContainer>
    );
}

export default Root;
