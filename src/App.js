import React, {Component} from "react";
import Interval from "./Intervalle";

class App extends Component{
//Création et initialisation de mon state Personne et du booléen Show
constructor(props){
super (props);
  this.state={
  personne:{
   fullName: 'Ndeye Fatou',
   bio: 'Une personne publique',
   imgSrc: 'img/fatou.jpg',
   profession: 'Journaliste'
  },
  shows: false
};
}

//Comportement du button Shows 
toggleShow=()=>{
  // this.setState, méthode qui permet de mettre à jour l'état de notre classe
  // shows:!, pour récupérer la valeur actuelle du booléen et ensuite l'inverser
  this.setState({shows:!this.state.shows});
}

//Affichage (render)
  render(){
    const {personne, shows}= this.state;
     return(
      <div>  
        {/* Création d'un bouton Show qui affiche le profil personne lorsque l'on clique dessus*/}
        <button onClick={this.toggleShow}>
          {shows ? 'Masquer profil' : 'Afficher profil'}
        </button>
        {shows && (
          <div>
          <img src={personne.imgSrc} alt="Personne" />
          <h1>{personne.fullName}</h1>
            <p>{personne.bio}</p>
            <p>Profession: {personne.profession}</p>
          </div>
        )}
        {/* Appel de notre composant Interval */}
        <Interval/>
      </div>
     );
  }
}
export default App;