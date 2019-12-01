import React, { useState, useContext } from 'react';
import { Input } from 'semantic-ui-react'
import AppContext from '../../context/app-context';

const url = 'https://it-blog-posts.herokuapp.com/api/posts'

//  {"where":{"title": {"like":"web"}}}

const Search = () => {
  const [state, setState] = useState({ loading: false });
  const context = useContext(AppContext);

  const fetchData = (event) => {
    setState({ ...state, loading: true });
    const str = event.target.value;
    const filter = JSON.stringify({where:{ title: { like: str }}})
    fetch(`${url}?filter=${filter}`).then(
      response => response.json().then((data) => {
        setState({ ...state, loading: false });
        context.setPosts(data)
      })
    ).catch((error) => {
      console.log("#AR: fetchData -> error", error);
      setState({ ...state, loading: false });
    })
  }

  return (
    <div className="search-box">
       <Input onChange={fetchData} loading={state.loading} placeholder='Search...' />
    </div>
  );
};

export default Search;
