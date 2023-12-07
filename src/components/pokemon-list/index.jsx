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
                    <Select id='typeOption'>
                        <Option value="">All types</Option>
                        <Option value="normal">Normal</Option>
                        <Option value="fighting">Fighting</Option>
                        <Option value="flying">Flying</Option>
                        <Option value="poison">Poison</Option>
                        <Option value="ground">Ground</Option>
                        <Option value="rock">Rock</Option>
                        <Option value="bug">Bug</Option>
                        <Option value="ghost">Ghost</Option>
                        <Option value="fire">Fire</Option>
                        <Option value="water">Water</Option>
                        <Option value="grass">Grass</Option>
                        <Option value="electric">Electric</Option>
                        <Option value="psychic">Psychic</Option>
                        <Option value="ice">Ice</Option>
                        <Option value="dragon">Dragon</Option>
                    </Select>

                    <Button type="submit">submit</Button>
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
    background-color: #222;
    color: #fff;
    font-size: 16px;
    text-align: center;
    margin: 0 10px;

    &:hover {
        background-color: transparent;
        color: #222;
        border: #222 solid 2px;
        /* color: #fff;
        border: #fff solid 2px; */
    }
`

const Option = styled.option`
    // color: #222;  
        background-color: #fff;
        //  color: #fff;  
        // background-color: #222;
`

const Button = styled.button`
    width: 70px;
    height: 35px;
    border-radius: 10px;
    cursor: pointer;
    background-color: #222;
    color: #fff;
    font-size: 16px;
    text-align: center;

    &:hover {
        background-color: transparent;
        color: #222;
        border: #222 solid 2px;
        /* color: #fff;
        border: #fff solid 2px; */
    }
`
export { PokemonsList }