import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    count: 0
    
  };

  removeCharacter = (id)  => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    //const elementArray = this.state.friends.filter(friend => friend.id === id);
    //console.log(elementArray[0]);
    /*var updatedFriend = {
      "id": updatedId,
    "name": element.name,
    "image": element.image,
    "clicked": true
    }*/

    if(id >= 19) {
      document.write("GAME OVER.");
      return;
    }
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
    console.log(this.state.characters);
    let oldElement = this.state.characters.find(friend => friend.id === id);
    console.log(oldElement.id);
    var newId = id + 20;
    let newElement = {
      id: newId, 
      name: oldElement.name,
      image: oldElement.image,
      clicked: true,
      value: 1

    };
    const characters = this.state.characters;
    //console.log(newElement);
    characters.splice(oldElement.id, 1, newElement);
    console.log(characters);
    shuffle(characters);
    console.log(characters);

    this.setState({characters});
    //const friends = this.state.friends.filter(friend => friend.id !== id || friend.id === id);
   // this.setState({ friends });
    //console.log("Array without clicked element:" + friends[0]);
   // var element = elementArray[0];
   // var elementClickedState = element.clicked;
   // console.log(elementClickedState)
   // elementClickedState = true;
   // var updatedId = parseInt(element.id) + 50;
   // console.log("New ID: " + updatedId);
   // var updatedFriend = {
   //   "id": updatedId,
   // "name": element.name,
   // "image": element.image,
   // "clicked": true
   // }
  //  console.log(updatedFriend)
  //  console.log(this.state.friends);
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
/*function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}*/

    // Set this.state.friends equal to the new friends array
    //this.setState({ friends1 });
    //this.setState({ friends2 });

    //element.setState({clicked: true});
   // this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Teen Titans Card Game</Title>
        <Title>Score: {this.state.count}</Title>
        
        {this.state.characters.map(character => (
          <CharacterCard
            removeCharacter={this.removeCharacter}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

