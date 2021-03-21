import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';
import AddItemInInventory from './containers/AddItem/AddItem';
import UpdateInventory from './containers/UpdateInventory/UpdateInventory';

function App() {
  return (
      <BrowserRouter>
          <Switch>
            <Route path="/addItemInInventory" exact component={AddItemInInventory}/>
            <Route path="/updateInventory/:id" exact component={UpdateInventory}/>
            <Route path="/" component={Home}/>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
