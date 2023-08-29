import React, { useEffect, useState } from 'react';
import GenresBTN from './GenresBTN/GenresBTN';
import './Header.css';
import { fetchGenres } from '../../store/slices/genresSlice';
import { useDispatch, useSelector } from 'react-redux';
import Search from './Search/Search';
import { fetchSearch, searchText } from '../../store/slices/searchSlice';

const Header = () => {
  const [openPopup, setOpenPopup] = useState(false)

  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state.genresData);

  const { text } = useSelector((state) => state.searchData)

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  useEffect(() => {
    if(text.length > 3) {
      dispatch(fetchSearch(text))
      setOpenPopup(true)
    }else {
      setOpenPopup(false)
    }
  }, [text])

  return (
    <header className="header">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <nav className="nav">
        {genres.map((genre) => {
          return <GenresBTN key={genre.id} genre={genre} />;
        })}
      </nav>
      <div className="search">
        <input placeholder="Search" value={text} onChange={(e) => dispatch(searchText(e.target.value))}/>
        <div>
          {
            openPopup ? <Search /> : ''
          }
        </div>
        {/* <button>Search</button> */}
      </div>
    </header>
  );
};

export default Header;