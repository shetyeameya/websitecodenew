import React, { Component } from 'react';
import { Row,Col,Button, Card} from 'antd';
import { Link } from 'react-router-dom';
import Pokemonlist from './PokemonList';
import './pokego.css'




class Pokemongo extends Component{
    state = {
        isLoading: true,
        Pokemon:[]
    }

    componentDidMount() {
        this.handlePokemons();
    } 

    handlePokemons = async () => {
        const details=[];
        Pokemonlist.map(async (Pokemonlist) => {
          const url= `https://pokeapi.co/api/v2/pokemon/${Pokemonlist.name}`;
          const response= await fetch(url);
          const pokedata= await response.json();
          
          if (pokedata !== null )
          {
            details.push({
                name: pokedata.species.name,
                moves:pokedata.moves,
                types:pokedata.types, 
                weight:pokedata.weight, 
                abilities:pokedata.abilities[0].ability  
              })
          }
          
          await this.setState({Pokemon: details, isLoading:false})
          
        });
       
        console.log(this.state.Pokemon);
    }
    
      
    render(){
        const { Pokemon} = this.state;
        if (this.state.isLoading){
            return(
                <div style={{
                    width:"100%",
                    height: "90vh"
                    }} >is loading ......</div>
            );
        }
        
        return (
            <div className="pok" >
            <div className="back" >
                <Row>
                    <Col  align="right" >
                    <Button type="primary">
                        <Link to="/workPlay">
                            BACK
                        </Link>
                    </Button>
                    </Col>
                </Row>
            </div>
                
            <Row type='flex' justify='center'>

           
           {Pokemon.map(pokemon => {
                return (
               <Card className="textAlign"
                style={{
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.85)',
                marginBottom: 16,
                fontWeight: 500,
                width:300,
                }} 
                    key ={pokemon.name}  
                    hoverable
                    title={pokemon.name.toUpperCase()}
                    cover={<img alt={pokemon.name} 
                    src= {pokemon.name !== "nidoran-m" ? 
                    `http://play.pokemonshowdown.com/sprites/xyani/${pokemon.name}.gif` : 
                    `http://play.pokemonshowdown.com/sprites/xyani/nidoranm.gif`}/>}>
                   
                    <p
                        style={{
                        fontSize: 14,
                        color: 'rgba(0, 0, 0, 0.85)',
                        marginBottom: 25,
                        fontWeight: 500,
                        }}  
                    >
                    {`Type: ${pokemon.types[0].type.name} ${pokemon.types[1] !== undefined ? pokemon.types[1].type.name : ''}`.toUpperCase()}
                    </p>
                     <Card className="cardtext"
                        type="inner"
                     >
                     ABILITY: {pokemon.abilities.name.toUpperCase()}
                     </Card>
                     <Card className="cardtext"
                        type="inner"
                    >
                    MOVES: {pokemon.moves[0].move.name.toUpperCase()} 
                    </Card>
                    
                    <Card className="cardtext"
                        type="inner"
                    >
                    MOVES: {`${pokemon.moves[1] !== undefined ? pokemon.moves[1].move.name : 'N/A'}`.toUpperCase()}
                    </Card>
                     <Card className="cardtext"
                        type="inner"
                    >
                    WEIGHT: {pokemon.weight}lbs
                    </Card>
                </Card>
                )
           })}
            </Row>
            <div className="back" >
                <Row>
                    <Col  align="right" >
                    <Button type="primary">
                        <Link to="/workPlay">
                            BACK
                        </Link>
                    </Button>
                    </Col>
                </Row>
            </div>
            
            </div>
            )
        // );
    }
};
export default Pokemongo;

 // src= {`http://play.pokemonshowdown.com/sprites/xyani/${pokemon.name}.gif`} />}>