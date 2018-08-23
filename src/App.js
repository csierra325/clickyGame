import React, { Component } from 'react';
import Nav from "./components/Nav/Nav"
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./character.json";
import Title from "./components/Title";
import Score from "./components/Score/Score";
import './App.css';

class App extends Component {
  state = {
    friends,
    score: 0,
    goal: 12,
    status: "",
    clickedFriends: []

  };
  
  shuffleScoreCard = id => {
    let clickedFriends = this.state.clickedFriends;

    if(clickedFriends.includes(id)){
      this.setState({ clickedFriends: [], score: 0, status:  "You lost. Click to play again!" });
      return;
    }else{
      clickedFriends.push(id)

      if(clickedFriends.length ===  12){
        this.setState({score: 12, status: "You Won! Click to play again!", clickedfriends: []});
        console.log('You Win');
        return;
      }


      this.setState({ friends, clickedFriends, score: clickedFriends.length, status: " " });

      for (let i = friends.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [friends[i], friends[j]] = [friends[j], friends[i]];
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
        {this.state.friends.map(friend => (
          <FriendCard
            shuffleScoreCard = {this.shuffleScoreCard}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
      </di>
     
     
    );
  }
}

export default App;
