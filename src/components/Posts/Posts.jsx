import React, { useContext } from 'react';
import { Card } from 'semantic-ui-react'
import AppContext from '../../context/app-context';

const Posts = () => {
  const context = useContext(AppContext);

  return (
    <div className="posts-box">
     <Card.Group>
       {context.results.map((item) => {
         return (
          <Card key={item.id} fluid color='yellow' header={item.title}  description={item.description}  meta={item.author}/>
         )
       })}
     </Card.Group>  
    </div>
  );
};

export default Posts;