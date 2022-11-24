import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lakers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lakers"/>
        <meta name="description" content="Trending News about Lakers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lakers</h1>
            <Image width={800} height={500} src="https://www.lakersbrasil.com/site/../data/posts/banner-principal_637dea62844b4_grande.jpg" alt="Lakers"/>
            <h3>Recent News</h3>
            <a href='https://www.lakersbrasil.com/site/noticias/2022/11/nba_com_expulsao_em_quadra_e_muita_luta,_lakers_acaba_derrotado_em_phoenix'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NBA: Com expulsão em quadra e muita luta, Lakers acaba ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTbMsNV1TtuKrY7o6BAXfJsDBx4aVxEYZZRdkSK-RLOg1sLbYrO7T6D95slBfLgxFH8NVBRuyvW" alt="NBA: Com expulsão em quadra e muita luta, Lakers acaba ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Lakers acabou sendo derrotado pelo Suns por 115-105 e teve sua sequência de vitórias interrompida nesta terça. Ainda sem contar com LeBron James, o Lakers&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lakersbrasil.com/site/noticias/2022/11/nba_patrick_beverley_explica_briga_no_jogo_entre_lakers_e_suns'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NBA: Patrick Beverley explica briga no jogo entre Lakers e Suns</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRspMi8U46CbG022VUeLMgOjXVT3Ym9QbFl5UdEPSlECdrVoakHQbkBjPIftL-Csi3V-dDh1yZr" alt="NBA: Patrick Beverley explica briga no jogo entre Lakers e Suns" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O clima esquentou na partida entre o Lakers e o Suns nesta terça, quando o armador Patrick Beverley correu e empurrou o pivô Deandre Ayton.</p></div>
            </div>
        </a><a href='https://www.theplayoffs.com.br/nba/lebron-james-deve-voltar-a-jogar-pelos-lakers-na-sexta-feira-contra-os-spurs/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LeBron James deve voltar a jogar pelos Lakers na sexta-feira contra ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRk4SQu3MB2x8zi1_bECadHPi6wzpLrBllQPPJeh36gN9cb3LEkxiUOeSyOU0nZFEXsWWEVJEX_" alt="LeBron James deve voltar a jogar pelos Lakers na sexta-feira contra ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois de ficar de fora dos últimos cinco jogos da equipe, LeBron vai voltar e espera ajudar o Lakers a se recuperar na temporada.</p></div>
            </div>
        </a><a href='https://br.bolavip.com/esportes/NBA-Recuperado-de-lesao-LeBron-James-volta-ao-Lakers-contra-o-Spurs-Astro-perdeu-cinco-partidas-em-novembro-20221123-0138.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NBA: Recuperado de lesão, LeBron James volta ao Lakers contra o ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ6hFTeZltS1KzDgaHNSFfKMlijycP9GbfUN4Yl455tY4dhmdKUGOPNJvxpj0hJsrcd63TGX4xU" alt="NBA: Recuperado de lesão, LeBron James volta ao Lakers contra o ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O camisa 6 reforça o Lakers no duelo contra o Spurs na próxima sexta-feira (25)</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/basquete/phoenix-suns-sem-chris-paul-vence-los-angeles-lakers-sem-lebron-james-na-nba,18777adff1dc048aa9d71cf7e873c42bm53yrcdr.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Phoenix Suns, sem Chris Paul, vence Los Angeles Lakers, sem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Phoenix Suns, sem Chris Paul, vence Los Angeles Lakers, sem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Time do Arizona derrota equipe californiana pela quinta vez na temporada, por 115 a 105, em casa.</p></div>
            </div>
        </a><a href='https://www.mg.superesportes.com.br/app/noticias/basquete/2022/11/23/noticia_basquete,3980669/suns-ofusca-anthony-davis-e-vence-o-lakers-na-nba-sixers-bate-o-nets.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Suns ofusca Anthony Davis e vence o Lakers na NBA; Sixers bate o ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTggsDL2R6rKx9D9KpOH9GEzeYe7KCJEWSe6CAWiSp_bpAhl6WBbBn4aYo7j9-6D6ebv9AnaHAn" alt="Suns ofusca Anthony Davis e vence o Lakers na NBA; Sixers bate o ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em casa, no Arizona, a equipe bateu o inconstante Los Angeles Lakers (sem LeBron James, com dores no joelho esquerdo) por 115 a 105, ofuscando grande atuação do&nbsp;...</p></div>
            </div>
        </a><a href='https://www.torcedores.com/noticias/2022/11/lebron-james-retornar-duelo-spurs'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NBA: LeBron James deve retornar no duelo contra os Spurs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT4T7tuwEj9y5YD1VI6lsmsL7juoSeDCf4HrdYgbgrWc0htJPHQ7THobAR800pKp0gOnX1Xa4eu" alt="NBA: LeBron James deve retornar no duelo contra os Spurs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O craque dos Lakers não entra em quadra há cinco jogos, mas segundo jornalista, deve voltar nesta sexta-feira (25) LeBron James está próximo de voltar a.</p></div>
            </div>
        </a>
        </Template></>;
}