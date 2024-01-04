import { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { getMoves, getAbilities } from '../../services/pokemonResource';
import { DefaultButton } from '../default-button';
import pokeball from '/pokeball.png'
import styled from 'styled-components';
import { Loading } from '../loading';

const PokemonDetails = () => {
    const [post, setPost] = useState({
        name: [],
        types: [],
        moves: [],
        abilities: []
    })

    const { state } = useLocation()
    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {
            const { name, type, moves, abilities } = state
            const move = await getMoves(moves)
            const ability = await getAbilities(abilities)

            setPost({
                name: name,
                types: type,
                moves: move,
                abilities: ability
            })
        }
        fetchData()
    }, [])

    return (
        <Div>
            { post.name.length === 0 && <Loading/> }

            { post.name.length !== 0 &&
                <>
                    <Pokemon>
                        <Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`} alt={post.name} />

                        <h1>{post.name}</h1>
                    </Pokemon>

                    <Details>
                        <Types><Span>Type(s):</Span> {post.types}.</Types>

                        <H3>Move(s) :</H3>
                        <p>{post.moves}.</p>

                        <H3>Ability(ies) :</H3>
                        {
                            post.abilities.map((e, index) => {
                                return (
                                    <Ability key={index}>
                                        <p><Span>Name: </Span>{e.name}</p>

                                        <p><Span>Description: </Span>{e.description}</p>
                                    </Ability>
                                )
                            })
                        }
                    </Details>
                    
                    <Link to={'/pokemon-research'}>
                        <DefaultButton label='Return' />
                    </Link>
                </>
            }
        </Div>
    )
}

const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    p {
        padding: 0 20px;
        font-size: 18px;
    }

    button {
        width: 500px;
        margin: 50px 0;
    }

    @media (max-width: 600px){
        button{
            width: 300px;
            margin: 40px 0;
        }

        h1{
            font-size: 25px;
        }

        p {
            font-size: 14.5px;
        }
    }
`

const Pokemon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: hsla(0, 1%, 57%, 0.4);
    padding: 20px;
    border-radius: 10px;

    @media (max-width: 600px){
        gap: 15px;
        padding: 15px;
    }
`

const Img = styled.img`
    width: 170px;

    @media (max-width: 600px){
        width: 120px;
    }
`

const Details = styled.div`
    max-width: 60%;

    @media (max-width: 768px){
        max-width: 100%;
    }
`

const Types = styled.p`
    text-align: center;
    margin-top: 20px;
`

const Span = styled.span`
    font-weight: 900;
    font-size: 21px;

    @media (max-width: 600px){
        font-size: 17px;
    }
`

const H3 = styled.h3`
    margin: 25px 0 10px;
    font-size: 26px;
    font-weight: 900;
    background: url(${pokeball}) no-repeat left;
    background-size: 27px;
    padding-left: 26px;

    @media (max-width: 600px){
        font-size: 20px;
    }
`

const Ability = styled.div`
    margin-bottom: 14px;

    p {
        margin-bottom: 5px;
    }
`
export { PokemonDetails }