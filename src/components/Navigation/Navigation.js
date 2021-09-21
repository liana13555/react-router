import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink exact to="/" className={styles.link} activeClassName={styles.activeLink}>
      Главная
    </NavLink>
    <NavLink to="/authors" className={styles.link} activeClassName={styles.activeLink}>
      Авторы
    </NavLink>
    <NavLink to="/books" className={styles.link} activeClassName={styles.activeLink}>
      Книги
    </NavLink>
  </nav>
);

export default Navigation;

// <Link to="/">Главная</Link>
// <Link to="/authors">Авторы</Link>
// <Link to="/books">Книги</Link>
// У Link есть только className   Link - не показывает активное состояние

//  У NavLink есть дополнит.пропсы: className и activeClassName

// exact - проп буль,
