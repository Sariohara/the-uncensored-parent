import React from "react";
import { Routes as ReactRoutes, Route, Navigate } from "react-router-dom";

import viewRoutes from "./views/routes";

const Routes = () => {
    return (
        <ReactRoutes>
            {viewRoutes.map((route, i) => (
                <Route key={i} path={route.path} element={route.renderer()} />
            ))}
        </ReactRoutes>
    );
};

export default Routes;
