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
    let generation = await gener()
    let gente = []
    let join = []
    moves.map((e) => {
        movesName.push(e.move.name)
    })

    generation.map((e) => {
        gente.push(e.name)
    })

    movesName.forEach((e) => {
        if (gente.includes(e)) {
            join.push(e)
        }
    })
    return join.join(', ');
}

let gener = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/generation/1");
    let generation = await response.json();
    return generation.moves
}

export async function getAbilities(abilities) {
    let abilityName = []
    let rapaz = []
    let hmm = []

    abilities.map((e) => {
        abilityName.push(e.ability.name)
    })

    for (let i = 1; i <= 191; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/ability/${i}`);
        const gfr = await response.json();
        rapaz.push({
            ability: gfr.name,
            description: gfr.effect_entries[1].short_effect
        })
    }

    rapaz.map((e) => {
        if (abilityName.includes(e.ability)) {
            hmm.push({
                name: e.ability,
                discription: e.description
            })
        }
    })

    return (hmm);
}
