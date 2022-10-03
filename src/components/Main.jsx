import React from 'react'
import { Route, Switch } from "react-router-dom";
import Index from "../pages/IndexPage";
// import Show from "../pages/Show";

export default function Main(props) {
  return (
    
      <main>
      <Switch>
        <Route exact path="/">
          <Index/>
        </Route>
        </Switch>
      </main>
  )
}