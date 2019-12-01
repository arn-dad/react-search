import React from 'react';
import Search from './components/Search/Search';
import Posts from './components/Posts/Posts'
import AppContext from './context/app-context';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      posts: []
    }
  }

  setPosts = (data) => {
    this.setState({ posts: data })
  }

  render() {
    const { posts } = this.state;
    return (
      <AppContext.Provider value={{ results: posts, setPosts: this.setPosts }}>
        <div className="App">
          <div className="search">
            <Search />
          </div>
          <div className="posts">
            <Posts />
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
