import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { mainRoutes } from "routes";

import Layout from "components/Layout";
import Header from "components/Header";
import LeftBar from "components/LeftBar";
import CentralPane from "components/CentralPane";
import Footer from "components/Footer";

const Dialogs = lazy(() =>
    import(/* webpackChunkName: "Dialogs" */ "components/Dialogs")
);
const Profile = lazy(() =>
    import(/* webpackChunkName: "Profile" */ "components/Profile")
);

const App = () => {
    return (
        <Layout>
            <Header />
            <LeftBar />
            <CentralPane>
                <Suspense fallback="loading...">
                    <Switch>
                        <Route path={mainRoutes.Profile} component={Profile} />
                        <Route path={mainRoutes.Dialogs} component={Dialogs} />
                        <Redirect to="/" />
                    </Switch>
                </Suspense>
            </CentralPane>
            <Footer />
        </Layout>
    );
};

export default App;
