import React, {Component}from "react";

class Interval extends Component{
    //Création et initialisation du state
    state= {
        secondsPassed: 0
    };
    //Methode  de cycle de vie
    componentDidMount(){
        this.interval = setInterval(()=>this.updateSecondsPassed(),1000)//Mise à jour chaque seconde
    }
    // On arrête le comptege au démontage du composant
    componentWillUnmount() {
        clearInterval(this.interval); // Nettoie l'intervalle lors du démontage du composant
      }
    //  Fonction qui met a jour les secondes écoulées en ajoutant 1 à la valeur actuelle du state
      updateSecondsPassed = () => {
        this.setState((prevState) => ({
          secondsPassed: prevState.secondsPassed + 1
        }));
      };
    
      render() {
        return (
          <div>
            <h3>Composant monté depuis {this.state.secondsPassed} secondes</h3>
          </div>
        );
      }
    }
    
    export default Interval;

