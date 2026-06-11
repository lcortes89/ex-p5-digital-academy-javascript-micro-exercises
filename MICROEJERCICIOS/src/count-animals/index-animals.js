export function countAnimals(animals){
    if (!Array.isArray(animals) || !animals.every(item => typeof item === 'boolean')){
        throw new Error('Invalid input: list must contain only boolean values');
}

const sheep = animals.filter(animal => animal === true).length;
const wolves = animals.filter(animal => animal === false).length;

if (wolves === 0){
    return `There are ${sheep} sheep in total`;
}
if (sheep === 0){
    return 'UPS!!! A pack of hungry wolves';
}
if (sheep > wolves){
    return `${sheep} sheep escaped!!!`;
}
return 'UPS!!! Wolves ate all the sheep';
}