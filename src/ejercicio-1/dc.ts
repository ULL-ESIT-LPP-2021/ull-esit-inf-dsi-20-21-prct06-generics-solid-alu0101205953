import {Fighter, statistics} from './fighter';

/**
 * Class that represents a DC character
 */
 export class DC extends Fighter {
    /**
     * Creates a new DC character instance
     * @param name Name of a DC character
     * @param weight Weight of a DC character
     * @param height Height of a DC character
     * @param phrase Catching phrase of the character
     * @param stats Other statistics of a DC character such as HP, Attack, etc. defined on a type
     * @param universe Universe from which it comes
     */
    constructor(name: string, weight: number, height: number, stats: statistics, phrase: string, private readonly universe: string = "DC") {
        super(name, weight, height, stats, phrase);
    }

    /**
     * Obtains the universe from which the character comes
     * @returns Universe
     */
    getUniverse() {
        return this.universe;
    }
}