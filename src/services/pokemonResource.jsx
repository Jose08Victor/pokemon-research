export async function getPokemons() {
    let capturedPokemons = [];
    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        const response = await fetch(url);
        const { id, name, types, moves, abilities } = await response.json();
        const type = await getType(types)

        capturedPokemons.push({ id, name, type, moves, abilities });
    }
    return capturedPokemons;
}

export async function getType(types) {
    let typesName = []
    types.map((e) => {
        typesName.push(e.type.name);
    })
    return typesName.join(', ');
}

export async function getMoves(moves) {
    let movesName = []
    let generation1Moves = await generation1()
    let onlyGeneration1Moves = []

    moves.map((e) => movesName.push(e.move.name))

    generation1Moves.map((e) => {
        if (movesName.includes(e.name)) onlyGeneration1Moves.push(e.name)
    })

    return onlyGeneration1Moves.join(', ');
}

let generation1 = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/generation/1");
    let generation = await response.json();
    return generation.moves
}

export async function getAbilities(abilities) {
    let abilityName = []
    let abilityNameWithDescription = []

    abilities.map((e) => abilityName.push(e.ability.name))

    for (let i = 1; i <= 191; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/ability/${i}`);
        const abilities = await response.json();

        if (abilityName.includes(abilities.name)) abilityNameWithDescription.push({
                                                                                    name: abilities.name,
                                                                                    description: abilities.effect_entries[1].short_effect
                                                                                });
    }

    return (abilityNameWithDescription);
}