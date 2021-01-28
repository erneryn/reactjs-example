

import React from 'react';
import axiosMock from 'axios'
import {
  render,
  waitForElement,
  getByTestId,
  fireEvent,
  cleanup
} from '@testing-library/react';
import App from './App';
import Home  from './components/HomeComp';
import CardComp from './components/CardComp'
import Loading from './components/LoadingComp'
import EventComp from './components/EventComp'
import DetailComp from './components/DetailComp'
import NavbarComp from './components/NavbarCom'
import FavoritesComp from './components/FavoritesComp';
import store from '../src/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

jest.mock('axios')

beforeEach(() => {
  cleanup()
});

axiosMock.get.mockResolvedValueOnce({
  data: {
    teams: [{
      idTeam: '12615',
      strTeam: "new team",
    }],
    events: [{
      idEvent: '1234',
      strEvent: "Strade"
    }]
  }
})

test('render uci world tour in navbar', () => {
  const { getByText, debug } = render(
    <Provider store={store}>
    <Router>
    <NavbarComp/>
    </Router>
  </Provider>
  );
  const uciWT = getByText(/uci world tour/i)
  const fav = getByText(/my favorites/i)
  const home = getByText(/home/i)
  expect(uciWT).toBeInTheDocument();
  expect(fav).toBeInTheDocument();
  expect(home).toBeInTheDocument();
});

test('show side bar', async () => {
  const { getByText, getByTestId, debug } = render(
    <Provider store={store}>
    <Router>
      <Home/>
    </Router>
  </Provider>
  )
  const title = await waitForElement(()=>getByText(/Upcoming Event/i))
  expect(title).toBeInTheDocument()
})

test('render team name in card ', async () => {
  const team = 
    {
      idTeam: '12615',
      strTeam: "AG2R La Mondiale",
    }
  
  const { getByTestId, debug } = render(
    <Provider store={store}>
      <Router>
          <CardComp team={team}/>
      </Router>
    </Provider>)
  const element = await waitForElement(() => getByTestId('card-test'))
  expect(element).toHaveTextContent('AG2R La Mondiale')
})

// test('render detail page ', async () => {
//   const team = 
//     {
//       idTeam: '12615',
//       strTeam: "AG2R La Mondiale",
//       strCountry: "France"
//     }
  
//   const { getByTestId, debug } = render(
//     <Provider store={store}>
//       <Router>
//         <Switch>

//           <CardComp team={team}/>
//           <Route path={`/detail/{12615}`}>
//           </Route>
//         </Switch>
//           <DetailComp/>
//       </Router>
//     </Provider>)
//     debug()
//   const detailBtn = getByTestId('detail-button')
//   fireEvent.click(detailBtn)
 
//   expect(element).toHaveTextContent('AG2R La Mondiale')
// })



test('go to favourite page when favorited team is empty ', async () => {
  const { getByText, getByTestId, debug } = render(
    <Provider store={store}>
      <Router>
        <NavbarComp/>
        <FavoritesComp/>
      </Router>
    </Provider>
  )
  const toFavorites = getByTestId('toFavorites')
  fireEvent.click(toFavorites);
  const text = getByText(/no teams added to favorites/i)
  expect(text).toBeInTheDocument()
})

test('go to favorite page when selected atleast one team  ', async () => {
  
  const { getByText, getByTestId, debug } = render(
    <Provider store={store}>
    <Router>
    <NavbarComp/>
     <Home>

     </Home>
    <FavoritesComp/>
    </Router>
  </Provider>
  )
  const addLike = getByTestId('like-button')
  fireEvent.click(addLike)
  const toFavorites = getByTestId('toFavorites')
  fireEvent.click(toFavorites);
  const country = getByTestId('countryName')
  expect(country).toHaveTextContent('Country')
})

test('remove team from favorites page', async ()=>{
  const { getByTestId ,getByText, debug } = render(
    <Provider store={store}>
    <Router>
    <FavoritesComp/>
    </Router>
  </Provider>
  )
  const removeBtn = getByTestId('remove-test')
  fireEvent.click(removeBtn)
  const text = getByText(/no teams added to favorites/i)
  expect(text).toBeInTheDocument()

})