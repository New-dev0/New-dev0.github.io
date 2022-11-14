import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pokemon</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pokemon"/>
        <meta name="description" content="Trending News about Pokemon" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pokemon</h1>
            <Image width={800} height={500} src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/Pokemon-Masters-8-Pikachu-and-Charizard.jpg" alt="Pokemon"/>
            <h3>Recent News</h3>
            <a href='https://screenrant.com/strongest-pokemon-masters-8-tournament-ranked/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The 8 Strongest Pokémon In The Masters 8 Tournament, Ranked</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTwRJ2OZHWYWIfSyOfBG1uLrKaLkt-2NI8i_2aLDZRdVXBqn8lo_O_lJ7bYJGImthcJYIDcgBD9" alt="The 8 Strongest Pokémon In The Masters 8 Tournament, Ranked" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Pokémon Masters Eight tournament has finally come to a close, so who were the top performers in a battle between the eight greatest trainers?</p></div>
            </div>
        </a>
        </Template></>;
}