import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";
import {CharactersCollection} from './CharactersCollection';

// const numbersCollection = new NumbersCollection([10, 3, -5, 0])

// const sorter = new Sorter(numbersCollection)
// sorter.sort();

// console.log(sorter.collection)

const charactersCollection = new CharactersCollection('I am ahh');
const sorter = new Sorter(charactersCollection);

console.log(sorter.sort)