import React, { Component } from 'react';
import { Row,Carousel,Pagination, Card, Col, Button} from 'antd';
import PropTypes from 'prop-types';
import './pokego.css'

const { Meta } = Card;



class Pokemongo extends Component{
    state = {
        Pokemongo1: [],
        isLoading: true,
        page: 0,
      }
      async componentDidMount() {
       this.showTotal(1);
      

      
    }
    showTotal = async (total, e1) => {
        this.setState({isLoading:true, page: total}) 
        console.log(total)
        const url1= `https://pokeapi.co/api/v2/pokemon/?offset=${total * 50}&limit=50`;
        const response= await fetch(url1);
        const data= await response.json();
        
        // console.log(data) 
        const type=[]
        data.results.map(async (pokemon) => {
        const url2= `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;
        const response_url2= await fetch(url2);
        const pokedata= await response_url2.json();
        type.push({species: pokedata.species, 
                sprites:pokedata.sprites,
                moves:pokedata.moves,
                types:pokedata.types, 
                weight:pokedata.weight, 
                name: pokemon.name, 
                abilities:pokedata.abilities[0].ability })
        this.setState({Pokemongo1: type, isLoading:false})
      });
        // return `Total ${total} items`;
        
      }
    
      
    render(){
        const { Pokemongo1, page } = this.state;
        console.log(Pokemongo1[0]);
        if (this.state.isLoading){
            return(
                <div>is loading ......</div>
            );
        }
        if (this.state.data=null){
            return(
                <div>Could not load the pokemon</div>
            );
        }
        return (
            <div className="pok" >
                
            <Row type='flex' justify='center'>

           
           {Pokemongo1.map(pokemon => {
                return (
               <Card className="textAlign"
                style={{
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.85)',
                marginBottom: 16,
                fontWeight: 500,
                width:300,
                }} 
                    hoverable
                    title={pokemon.name.toUpperCase()}
                    cover={<img alt={pokemon.name} src={`http://play.pokemonshowdown.com/sprites/xyani/${pokemon.name}.gif`} />}>
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
                    {/* <br /><br /> */}
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
            <Row className="pagination">
            <div>
                
                {/* <Pagination onChange={e => this.showTotal(e)} size="small" total={50} showQuickJumper /> */}
                <Pagination  showQuickJumper  total={806} onChange={(e, e1) => this.showTotal(e, e1)} current={page} />
                
            </div>
           
            </Row>
            </div>
            
            )
        // );
    }
};
export default Pokemongo;