import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            Menu
            <ul>
              <li>
                <NavLink to="/" >Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/users">Users</NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="about" element={<h1> About Page</h1>} />
            <Route path="users" element={<h1>Users Page</h1>} />
            <Route path="home" element={<h1>Home Page</h1>} />
            <Route path="/*" element={ <Navigate to="/home" replace /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}
