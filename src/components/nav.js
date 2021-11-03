import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav (){
     
    return (
      <div className="Nav">
                
              <Link className="Nav__link" to="/create">Create</Link>
                <Link className="Nav__link" to="/read">Read</Link>
               
              
                
      </div>
    );
  }
