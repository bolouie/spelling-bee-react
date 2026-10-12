export type Puzzle = {
    date: string;
    centerLetter: string;
    outerLetters: string[];
    validLetters: string[];
    pangrams: string[];
    answers: string[];
};

export type GameState = {
    foundWords: string[];
    currentInput: string;
    message: string;
};