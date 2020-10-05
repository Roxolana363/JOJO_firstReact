import React from 'react';

function Character (props){
  return(

  <img className="Hjojo" alt={props.picture.alt} src={props.picture.src} />

)
};

class Herous extends React.Component {
  render(){
  let Characters = [
     {alt:"Джорно", src:"/front/React/01/app_1/src/jorno.jpg"},
     {alt:"Aбакіо", src:"/front/React/01/app_1/src/abachio.jpg"},
     {alt:"Міста", src:"/front/React/01/app_1/src/mista.jpg"},
     {alt:"Бруно", src:"/front/React/01/app_1/src/bruno.jpg"},
     {alt:"Фуго", src:"/front/React/01/app_1/src/fugo.jpg"},


   ]

    return(
        <ul className="">
      {Characters.map((item, index) =>(
< Character key={item.alt}  picture={item}/>
   ) )}
   </ul>

    )
  }

}


export default Herous;
