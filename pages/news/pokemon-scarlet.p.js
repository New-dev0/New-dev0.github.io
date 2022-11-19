import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pokemon Scarlet</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pokemon Scarlet"/>
        <meta name="description" content="Trending News about Pokemon Scarlet" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pokemon Scarlet</h1>
            <Image width={800} height={500} src="https://assets.reedpopcdn.com/Pokemon-Scarlet-and-Violet-s.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/Pokemon-Scarlet-and-Violet-s.jpg" alt="Pokemon Scarlet"/>
            <h3>Recent News</h3>
            <a href='https://www.eurogamer.pt/jogadores-de-pokemon-scarlet-e-violet-evitam-baixo-framerate-reiniciando-o-jogo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogadores de Pokémon Scarlet e Violet evitam baixo framerate ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQm2hWlFXji3YpOIMQA8LnnIFon-H6ASaFvIwA43BYn4uw8ZQeCmy4bDTiy-H4WKCrf3iu2_aKt" alt="Jogadores de Pokémon Scarlet e Violet evitam baixo framerate ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um dos maiores problemas é a baixa taxa de fotogramas. De maneira a que o jogo possa correr a 30fps, os jogadores viram-se obrigados a reiniciar Scarlet e&nbsp;...</p></div>
            </div>
        </a><a href='https://pt.ign.com/pokemon-scarlet-e-violet/119408/news/pokemon-scarlet-violet-12-dicas-para-principiantes'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pokémon Scarlet &amp; Violet - 12 dicas para principiantes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ6EBJP4kB-o5zs5RYuSQiUH0aKJ-vdNnmHY2OhfG6V7tzA0flFkNMPr3Hxx-nTeOsmd_Ryc8gs" alt="Pokémon Scarlet &amp; Violet - 12 dicas para principiantes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pokémon Scarlet &amp; Violet contam com um mundo aberto - com muitos desafios à mistura. Confere aqui algumas dicas para te ajudar na tua aventura por Paldea.</p></div>
            </div>
        </a><a href='https://tek.sapo.pt/multimedia/artigos/pokemon-scarlet-and-violet-e-a-mais-recente-aventura-da-serie-que-chega-hoje-a-switch'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pokémon Scarlet and Violet é a mais recente aventura da série que ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQuoEr96reBb7BWqh1n4BtL_z3I_IQKfW2VfX3tQiQo3RkUnFJdeuaGiL7IMT7KpcIjpzpX6Ngy" alt="Pokémon Scarlet and Violet é a mais recente aventura da série que ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O novo jogo mantém a estrutura básica de gameplay dos anteriores jogos da série, sendo, portanto, bastante familiar aos jogadores que acompanham os títulos&nbsp;...</p></div>
            </div>
        </a><a href='https://criticalhits.com.br/games/pokemon-scarlet-e-violet-ordem-recomendada-dos-ginasios-e-fraquezas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pokémon Scarlet e Violet – Todos os Ginásios (Fraquezas e Ordem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSm73IUdVM0oEQ70pMbTT3CJm5vGXhfsNcjXmHtLyO70MkaOPpMCW-j_d8aAJj95V0nF2dLckP_" alt="Pokémon Scarlet e Violet – Todos os Ginásios (Fraquezas e Ordem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nesse guia de Pokémon Scarlet e Violet nós vamos mostrar qual é a ordem recomendada para enfrentar os Ginásios e quais são suas Fraquezas. Embora os.</p></div>
            </div>
        </a><a href='https://pt.ign.com/pokemon-scarlet-e-violet/119395/news/pokemon-violet-e-scarlet-revela-1000o-pokemon'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pokémon Violet e Scarlet revela 1000º Pokémon</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQYvjazzmltyvRQTQc_eZm8lAgi3p7rCwGGaWO_68dXgQVmrdivTwKMfTiej_LKRlg8qnJ4FCrR" alt="Pokémon Violet e Scarlet revela 1000º Pokémon" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um dos momentos mais esperados pelos fãs de Pokémon chegou: a entrada número 1000 na Pokédex. Pokémon Scarlet e Pokémon Violet introduzem uma nova geração&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tecmundo.com.br/voxel/254581-pokemon-scarlet-violet-reiniciar-ajudar-desempenho.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pokémon Scarlet e Violet: reiniciar pode ajudar com desempenho</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQyIk107NGWXqt5o5eIK17K28jo4GYcYFNOYT9052a6JgoBvDQhKIPIPU0IaKc4_LshB0tSLwdB" alt="Pokémon Scarlet e Violet: reiniciar pode ajudar com desempenho" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hemos hecho más pruebas y podemos reconfirmar lo dicho en este tweet. Los problemas de rendimiento más graves se solucionan tan fácil como reiniciando el juego.</p></div>
            </div>
        </a><a href='https://br.ign.com/pokemon-scarlet/103997/news/o-pokemon-de-numero-1000-finalmente-foi-revelado-em-scarlet-e-violet'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O Pokémon de número 1000 finalmente foi revelado em Scarlet e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQkWg5yhYbe9IEAd2cEwnDAt4K_Dj5FQzR6fNJkC-6LLiRUHyhbp0aLZnsaXEM-8oTLdzQgqudr" alt="O Pokémon de número 1000 finalmente foi revelado em Scarlet e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois de décadas, a Game Freak conseguiu. A partir de Pokémon Scarlet e Violet, agora existem mais de 1000 monstrinhos!</p></div>
            </div>
        </a>
        </Template></>;
}