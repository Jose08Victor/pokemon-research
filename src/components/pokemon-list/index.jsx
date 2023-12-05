import { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getPokemons } from '../../services/pokemonResource';
import { Link } from 'react-router-dom';
import { ButtonDefault } from '../button';

const PokemonsList = () => {
    const [lists, setLists] = useState({ pokemons: [] })
    const [count, setCount] = useState(10);

    useEffect(() => {
        async function fetchData() {
            const data = await getPokemons()
            setLists({ pokemons: data })
        }

        fetchData()
    }, [])

    return (
        <>
            <Ul>
                {
                    
                    
                    lists.pokemons.map((pokemon, index) => {
                        if(lists.type != undefined && pokemon.type.includes(lists.type)){
                            console.log(pokemon.type);
                            return (<Li key={index}>
                                <Link to={`/post/${pokemon.id}`}>
                                    <Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`} alt={`${pokemon.name} gif.`} />

                                    <p>{pokemon.name}</p>
                                    <p>{pokemon.type}</p>
                                </Link>
                            </Li>)
                        }
                        if (index < count && lists.type == undefined) {
                            return (<Li key={index}>
                                <Link to={`/post/${pokemon.id}`}>
                                    <Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`} alt={`${pokemon.name} gif.`} />

                                    <p>{pokemon.name}</p>
                                    <p>{pokemon.type}</p>
                                </Link>
                            </Li>)
                        }
                    })
                }
            </Ul>

            <Div>
                <ButtonDefault label='Load more' onclick={() => { setCount((c) => c + 10) }} />

                <form onSubmit={(e) => {
                    e.preventDefault();

                    setLists({...lists,  type: typeOption.value});
                }}>
                    <Select id='typeOption'>
                        <option value="undefined">select pokemon's types</option>
                        <option value="normal">Normal</option>
                        <option value="fighting">Fighting</option>
                        <option value="flying">Flying</option>
                        <option value="poison">Poison</option>
                        <option value="ground">Ground</option>
                        <option value="rock">Rock</option>
                        <option value="bug">Bug</option>
                        <option value="ghost">Ghost</option>
                        <option value="fire">Fire</option>
                        <option value="water">Water</option>
                        <option value="grass">Grass</option>
                        <option value="electric">Electric</option>
                        <option value="psychic">Psychic</option>
                        <option value="ice">Ice</option>
                        <option value="dragon">Dragon</option>
                    </Select>
                    
                    <button type="submit">submit</button>
                </form>
            </Div>
        </>
    )
}

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px; 
`

const Li = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 120px;
    height: 120px;
    border-radius: 10px;
    background-color: hsla(0, 1%, 57%, 0.4);
    cursor: pointer;
    justify-content: space-around;

 &:hover {
    background-color: hsla(0, 1%, 57%, 0.8);
 }

 a {
    text-align: center;
 }
`

const Img = styled.img`
    min-width: 50px;
    max-height: 80px;
`

const Div = styled.div`
width: 100%;
height: 50px;
display: flex;
align-itens: center;
justify-content: space-between;
margin: 50px 0;
font-size: 28px;
`

const Select = styled.select`
width: 48%;
border-radius: 10px;
    cursor: pointer;
    background-color: #222;
    color: #fff;
    font-size: 16px;
    padding-left: 25px;

    &:hover {
        background-color: transparent;
        color: #222;
        border: #222 solid 2px;
        /* color: #fff;
        border: #fff solid 2px; */
    }

    option{
        color: #fff;
       
   }
`
export { PokemonsList }