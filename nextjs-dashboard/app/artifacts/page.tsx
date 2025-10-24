import styles from "./artifacts.module.scss";

export default function Page() {
    return (<div className={styles.artifactsPage}>
        <h1>Artifacts</h1>
        <h2>Community</h2>
        <ul><li>DonutJS Organizer, 2018-2020</li>
            <li>Seattle GiveCamp participant, 2015</li></ul>
        <h2>Code</h2>
        <ul>
            <li><a href="https://chunkabook.com/">Chunk A Book</a>: a reading tracker for books you only read a chapter at a time</li>
            <li><a href="https://github.com/nextlevelbanana/itchCleanScreen">Itch Clean Screen: a simple Firefox extension for hiding some annoying UI on itch.io game pages</a></li>
            <li><a href="https://github.com/nextlevelbanana/vscode-pico8-theme">VS Code PICO-8 theme</a></li>
        </ul>
        <h2>Talks</h2>
        <ul>
            <li>2025: Alt Control 101, for Portland Indie Game Squad</li>
            <li>2019: Making a video game on the bus: a story of rapid iteration, for deliver:Agile</li>
            <li>2018: PICO-8 Tweetcarts, for DonutJS</li>
            <li>2017: Building Realistic Fake Languages, for GeekGirlCon</li>
        </ul>
    </div>)
}