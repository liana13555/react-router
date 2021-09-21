import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import BooksView from './views/BooksView';
import BookDetailsView from './views/BookDetailsView';

import NotFoundView from './views/NotFoundView';

export default function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/authors">
          <AuthorsView />
        </Route>

        <Route path="/books" exact>
          <BooksView />
        </Route>

        <Route path="/books/:bookId">
          <BookDetailsView />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}

//  return (
//     <Container>
//       <AppBar />

// <Switch>
//   <Route path="/" exact>
//     <HomeView />
//   </Route>

//   <Route path="/authors">
//     <AuthorsView />
//   </Route>

//   <Route path="/books" exact>
//     <BooksView />
//   </Route>

//   <Route path="/books/:bookId">
//     <BookDetailsView />
//   </Route>

//   <Route>
//     <NotFoundView />
//   </Route>
// </Switch>
//     </Container>
//   );

// Браузер Router следит за состоянием адресной строки. При изменении адресной строки браузер Router производит ее парс.
// Компонент <Route> - он подписан на контекст Браузер Router,
// он сравнивает что ему кинет Браузер Router и значение path = "", а потом рендерит
