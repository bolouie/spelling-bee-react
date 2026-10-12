type HeaderProps = {
    date: string;
}

export function Header({ date }: HeaderProps) {
    return (
        <header>
            <h1>Spelling Bee</h1>
            <time dateTime={date}>Monday, October 12, 2026</time>
            <ul className="button-group">
                <li><button>Rules</button></li>
                <li><button>Hints</button></li>
                <li><button>Stats</button></li>
            </ul>
        </header>
    )
}