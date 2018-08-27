import React, { Component } from 'react';
import Nav from "./components/Nav/Nav"
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./character.json";
import Title from "./components/Title";
import Score from "./components/Score/Score";
import './App.css';

class App extends Component {
  state = {
    characters,
    score: 0,
    goal: 12,
    status: "",
    clickedCharacters: []

  };
  
  shuffleScoreCard = id => {
    let clickedCharacters = this.state.clickedCharacters;

    if(clickedCharacters.includes(id)){
      this.setState({ clickedCharacters: [], score: 0, status:  "You lost. Click to play again!" });
      return;
    }else{
      clickedCharacters.push(id)

      if(clickedCharacters.length ===  12){
        this.setState({score: 12, status: "You Won! Click to play again!", clickedCharacters: []});
        console.log('You Win');
        return;
      }

      this.setState({ characters, clickedCharacters, score: clickedCharacters.length, status: " " });
      for (let i = characters.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
      }
    }
  }

  render() {
    return (
      <di class = "App">
       <Nav />
     
         <Wrapper>
     
         <Title/>
         <Score 
       total ={this.state.score}
       goal = {12}
       status = {this.state.status}
       />
        {this.state.characters.map(character => (
          <CharacterCard
            shuffleScoreCard = {this.shuffleScoreCard}
            id={character.id}
            key={character.id}
            image={character.image}
          />
        ))}
      </Wrapper>
      </di>
     
     
    );
  }
}

export default App;
