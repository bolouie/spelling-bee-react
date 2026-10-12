import { LetterButton } from './LetterButton';

type HiveProps = {
    centerLetter: string;
    outerLetters: string[];
}

export function Hive({ centerLetter, outerLetters }: HiveProps) {
    return (
        <div role="group" aria-label="Letters">

            <LetterButton letter={centerLetter} isCenter />
            {outerLetters.map((letter) => (
                <LetterButton key={letter} letter={letter} isCenter={false} />
            ))}
        </div>
    );
}