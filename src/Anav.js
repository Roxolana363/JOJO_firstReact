import React from 'react';
// import Link from './Link';

function Link(props){
    return (
      <li className="nav-item">
             <a className="nav-link" href={props.info.url}>{props.info.label}</a>
      </li>
    )
};

class Anav extends React.Component{
  render(){
    let Links = [
      {id:"2", label:"1 сезон", url:"https://jut.su/jojo-bizarre-adventure/season-1/episode-1.html" },
      {id:"22", label:"Рыцари звёздной пыли (2 сезон)", url:"https://jut.su/jojo-bizarre-adventure/season-2/episode-1.html" },
      {id:"222", label:"Рыцари звёздной пыли 2 (3 сезон)", url:"https://jut.su/jojo-bizarre-adventure/season-3/episode-1.html" },
      {id:"2222", label:"Несокрушимый алмаз (4 сезон)", url:"https://jut.su/jojo-bizarre-adventure/season-4/episode-1.html" },
      {id:"22222", label:"Золотой ветер (5 сезон)", url:"https://jut.su/jojo-bizarre-adventure/season-5/episode-1.html" },
    ]
    return(
  <nav className = "Anav">
    <ul className="nav nav-tabs nav-justified ">
    {Links.map((item, index) => (
  <Link key={item.id} info={item} />
))  }
    </ul>
  </nav>
    )
  }
}

 export default Anav;
