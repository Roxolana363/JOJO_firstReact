import React from 'react';
import './App.css';
//import Table from './Table';
import Form from './Form';
import Story from './Story';
import Aheader from './Aheader';
import Anav from './Anav';
import Footer from './Footer';
import Herous from './Herous';
import List from './List';


class App extends React.Component {
  /* state = {
      characters: [],
  }
  handleSubmit = (character) => {
    this.setState({characters:[...this.state.characters,character]})
  }
  removeCharacter = (index) => {
    const {characters} = this.state

    this.setState ({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }*/
render (){
//  const {characters} = this.state


  return (

    <div className = "container">
    < Aheader />
  <Anav />
<main>
<Story storyTitle ="История создания " />
</main>
<Herous />
<Form />
<List />
<Footer />
  </div>
  //мають бути в середині тега div
  //  <Table characterData = {characters} removeCharacter = {this.removeCharacter} />


  )
 }
}
export default App;
