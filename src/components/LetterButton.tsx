import styles from './LetterButton.module.css'

type LetterButtonProps = {
    letter: string;
    isCenter: boolean;
}

export function LetterButton({ letter, isCenter }: LetterButtonProps) {
    const className = isCenter ? `${styles.letter} ${styles.center}` : styles.letter;
    const label = isCenter ? `${letter}, centre letter` : undefined;

    return (
        <button className={className} aria-label={label}>
            {letter}
        </button>
    )
}