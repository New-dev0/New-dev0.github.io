import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rolls-Royce</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rolls-Royce"/>
        <meta name="description" content="Trending News about Rolls-Royce" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rolls-Royce</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=9a34e844-951f-4894-88ae-30dd8e470b29&w=800&h=420&watermark=true&t=20221125222000" alt="Rolls-Royce"/>
            <h3>Recent News</h3>
            <a href='https://www.ojogo.pt/internacional/mundial-2022/noticias/afinal-jogadores-da-arabia-saudita-nao-levam-rolls-royce-para-casa-15389423.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Afinal, jogadores da Árabia Saudita não levam Rolls Royce para casa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSgMxs_Ghcea_cch7A3j7hqkfat0IYeLu3QmZOWtxUzYNu1UR9rRklQBH3OkOTHXYSTvbFdaVu9" alt="Afinal, jogadores da Árabia Saudita não levam Rolls Royce para casa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ao contrário do que foi noticiado, a vitória sobre a Argentina não valeu um carro de luxo aos jogadores da Arábia Saudita.</p></div>
            </div>
        </a><a href='https://quatrorodas.abril.com.br/noticias/jogadores-da-arabia-saudita-ganharao-rolls-royce-apos-vencer-a-argentina/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogadores da Arábia Saudita ganharão Rolls-Royce após vencer a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ6hHBCyU2ld4BUTqF-7fybhbV0wICFvMcGNdEfQZT6AT0zR3SCHQNeWu3b0-8HzbddAeBgeUD9" alt="Jogadores da Arábia Saudita ganharão Rolls-Royce após vencer a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zebra logo na estreia na Copa do Mundo do Catar teve gostinho de título mundial para o país árabe.</p></div>
            </div>
        </a><a href='https://www.record.pt/internacional/competicoes-de-selecoes/mundial/mundial-2022/arabia-saudita/detalhe/principe-abre-cordoes-a-bolsa-sauditas-vao-receber-todos-um-rolls-royce'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Príncipe abre cordões à bolsa: Sauditas vão receber todos um Rolls ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRfaRllEdnsHYCr_D2OBUKs9-t5Ir07CHeof3Bw9aKfzLjMnUCMVoJbcxYpUA7lutxzQxk2FGT7" alt="Príncipe abre cordões à bolsa: Sauditas vão receber todos um Rolls ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jogadores premiados com carro luxuoso pelo histórico triunfo sobre a Argentina na estreia no Mundial.</p></div>
            </div>
        </a><a href='https://revistapegn.globo.com/ideias-de-negocios/noticia/2022/11/sauditas-vao-ganhar-rolls-royces-por-vitoria-sobre-argentina-veja-quanto-custa-um-carro-da-marca.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sauditas vão ganhar Rolls-Royces por vitória sobre Argentina; veja ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQdltsChduoyXGaW8nxw3HIz6JmejBWSzaTWTwTaEPJj1QJrkBkrn16PfBjdUHgx0xfINlL2rXu" alt="Sauditas vão ganhar Rolls-Royces por vitória sobre Argentina; veja ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Presente é oferecido pelo príncipe saudita Mohammed bin Salman Al Saud aos atletas, que venceram na terça-feira (22/11)</p></div>
            </div>
        </a><a href='https://revistamonet.globo.com/esportes/noticia/2022/11/cada-jogador-da-arabia-saudita-vai-ganhar-um-rolls-royce-por-vitoria-contra-a-argentina-na-copa-diz-jornal.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cada jogador da Arábia Saudita vai ganhar um Rolls Royce por ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRU9NpuEcz8Fv04lXSo1PoZcqOSj4yh-SF-pcn0kD0iZmWzC-J0j9Kj1JS7Jw-03ZgtFpywrZe3" alt="Cada jogador da Arábia Saudita vai ganhar um Rolls Royce por ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jogadores receberão seus automóveis - cujo valor gira em torno de R$ 7,2 milhões - assim que retornarem do Catar.</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/futebol/copa-2022/jogadores-da-arabia-saudita-irao-ganhar-carro-de-luxo-milionario-apos-vitoria-sobre-argentina,2a36476c6961665b01fd201fadf4d49aq9xd525e.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogadores da Arábia Saudita irão ganhar carro de luxo milionário ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTFN_ziYoDlnXrLwU-w0ZBwmu_flvkFalJzHKs7_bdkewtOckMLkt-3eH7Jzz-aDUTQwibWGZT1" alt="Jogadores da Arábia Saudita irão ganhar carro de luxo milionário ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cada atleta da equipe vai receber um Rolls Royce Phantom de presente do príncipe saudita Mohammed bin Salman al Saud.</p></div>
            </div>
        </a>
        </Template></>;
}