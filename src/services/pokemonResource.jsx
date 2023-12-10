export async function getFirstGenerationPokemons() {
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
    let firstGenerationMoves = await firstGeneration()
    let onlyFirstGenerationMoves = []

    moves.map((e) => movesName.push(e.move.name))

    firstGenerationMoves.map((e) => {
        if (movesName.includes(e.name)) onlyFirstGenerationMoves.push(e.name)
    })

    return onlyFirstGenerationMoves.join(', ');
}

let firstGeneration = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/generation/1");
    let generation = await response.json();
    return generation.moves
}

export async function getAbilities(abilities) {
    let abilityWihNameAndDescription = []

    for (let i = 0; i <= abilities.length - 1; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/ability/${abilities[i].ability.name}`);
        const ability = await response.json();
        abilityWihNameAndDescription.push({
                                            name: ability.name,
                                            description: ability.effect_entries[1].short_effect
                                        });
    }

    return (abilityWihNameAndDescription);
}