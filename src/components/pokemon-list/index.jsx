import { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getPokemons } from '../../services/pokemonResource';
import { Link } from 'react-router-dom';
import { ButtonDefault } from '../button';
import React, { useContext } from "react"
import { ThemeContext } from '../../contexts/theme-context';


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

    const {theme} = useContext(ThemeContext)

    return (
        <>
            <Ul>
                {
                    lists.pokemons.map((pokemon, index) => {
                        if (lists.type !== undefined && pokemon.type.includes(lists.type)) return pokemonCard()

                        if ((lists.type === undefined || lists.type === "") && index < count) return pokemonCard()

                        function pokemonCard() {
                            return <Li key={index}>
                                <Link to={`/${pokemon.id}`} state={pokemon}>
                                    <Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`} alt={`${pokemon.name} gif.`} />

                                    <p>{pokemon.name}</p>
                                </Link>
                            </Li>;
                        }
                    })
                }
            </Ul>

            <Div>
                <ButtonDefault label='Load more' onclick={() => { setCount((c) => c + 10) }} />

                <p>or</p>

                <form onSubmit={(e) => {
                                        e.preventDefault();

                                        setLists({ ...lists, type: typeOption.value });
                               }}>
                                
                    <Label htmlFor="typeOption">Select pokemon's types:</Label>
                    <Select id='typeOption' theme={theme}>

                        <option value="">All types</option>
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

                    <Button theme={theme} type="submit">submit</Button>
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
    margin: 50px 0;
    text-align: center;

p {
    font-size: 20px;
    margin-top: 20px;
    cursor: default;  
}
`

const Label = styled.label`
    display:block;
    font-size: 20px;
    margin: 20px auto 5px;
    font-weight: 900;
    width: 252px;
`

const Select = styled.select`
    width: 260px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${props => props.theme.color};
    color: ${props => props.theme.backgroundColor};
    font-size: 16px;
    text-align: center;
    margin: 0 10px;
    outline : 0;

    &:hover {
        background-color: transparent;
        color: ${props => props.theme.color};
        border: solid 2px;
        border-color:${props => props.theme.color};
    }

    option{
        background-color: ${props => props.theme.backgroundColor};
    }
`

const Button = styled.button`
    width: 70px;
    height: 35px;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${props => props.theme.color};
    color: ${props => props.theme.backgroundColor};
    font-size: 16px;
    text-align: center;

    &:hover {
        background-color: transparent;
        color: ${props => props.theme.color};
        border: solid 2px;
        border-color:${props => props.theme.color};
    }
`
export { PokemonsList }