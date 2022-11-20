import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Aviao LATAM</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Aviao LATAM"/>
        <meta name="description" content="Trending News about Aviao LATAM" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Aviao LATAM</h1>
            <Image width={800} height={500} src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/11/aviaoLatam.jpg" alt="Aviao LATAM"/>
            <h3>Recent News</h3>
            <a href='https://www.cnnbrasil.com.br/internacional/peru-aviao-da-latam-colide-com-veiculo-na-pista-antes-de-decolar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Avião da Latam colide com veículo antes de decolar e deixa dois ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRS7yyZtq4fzC7UKSc7EAtCHh8EWbyHffiuThDfEU0Lyw7EQGP4dO0vK-ZAWfNdlDJrcnLsml1D" alt="Avião da Latam colide com veículo antes de decolar e deixa dois ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Latam Airlines disse nesta sexta-feira (18) que um de seus aviões de passageiros colidiu com um veículo na pista do Aeroporto Internacional Jorge Chávez,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.poder360.com.br/internacional/acidente-com-aviao-da-latam-deixa-2-mortos-em-aeroporto-no-peru/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Acidente com avião da Latam deixa 2 mortos em aeroporto no Peru</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSoDJ1g0j2h7RjT_H60YxpsU9dX-mzQ_xNhKCCGZ6dMgCXX_BARLaM9UHuKC7uqmYl-O2JoIkAy" alt="Acidente com avião da Latam deixa 2 mortos em aeroporto no Peru" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aeronave pegou fogo ao bater em caminhão na pista de pouso; voos estão suspensos no local até sábado (19.set). Leia no Poder360.</p></div>
            </div>
        </a><a href='https://www.panrotas.com.br/aviacao/empresas/2022/11/acidente-com-aviao-da-latam-no-peru-faz-empresa-cancelar-voos-no-brasil_193203.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Acidente com avião da Latam no Peru faz empresa cancelar voos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTcAVQPB4Q3tkYmsBTwMyfOQV7mXXq7O5axtxB0-NmWcP-Qq_G3Fk0sQVFrXzmEdBJ7dy5J2U5W" alt="Acidente com avião da Latam no Peru faz empresa cancelar voos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um Airbus 320Neo da Latam Airlines se envolveu em um acidente neste sábado, em Callao (próximo a Lima), no Peru, ao chocar-se com um caminhão no momento em&nbsp;...</p></div>
            </div>
        </a><a href='https://oantagonista.uol.com.br/mundo/dois-morrem-em-acidente-com-aviao-da-latam-e-caminhao-de-bombeiro-no-peru/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dois morrem em acidente com avião da Latam e caminhão de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRR4YJhSBmMvu9KU03-JLGesuuw9eZPs9hokfiE5fQywKC8gR_eqf1m9tjg5Xms73vVJNi2abnG" alt="Dois morrem em acidente com avião da Latam e caminhão de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dois bombeiros morreram após um Airbus A320neo da LATAM Chile se chocar contra um caminhão durante a decolagem no Aeroporto Internacional de Lima no Peru.</p></div>
            </div>
        </a><a href='https://www.correiobraziliense.com.br/mundo/2022/11/5052856-aviao-da-latam-bate-em-caminhao-e-pega-fogo-em-aeroporto-do-peru-veja.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Avião da Latam bate em caminhão e pega fogo em aeroporto do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSfqATu4LuZSbdfonryELOFrzTP3JaYQeB7zqqdTkohijQhezqbiVOV6_QtCLeG_9bl9sFTlyg0jA" alt="Avião da Latam bate em caminhão e pega fogo em aeroporto do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um avião da Latam que estava prestes a decolar bateu em um caminhão na pista do aeroporto de Callao, no Peru. O acidente ocorreu neste sexta-feira (18/11).</p></div>
            </div>
        </a><a href='https://radiojornal.ne10.uol.com.br/noticia/2022/11/15123967-video-aviao-da-latam-colide-com-caminhao-de-bombeiros-durante-decolagem.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VÍDEO: AVIÃO da Latam colide com CAMINHÃO DE BOMBEIROS ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT2OhvrtUdFtd5d776TvqiVZnRlwMjGmJKc0UYSaQiAcUZmyl4ToQHK95OgEbFVQOHaOkqQt3hj" alt="VÍDEO: AVIÃO da Latam colide com CAMINHÃO DE BOMBEIROS ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na última sexta-feira (18), um avião da empresa Latam colidiu com um veículo na pista do Aeroporto Internacional Jorge Cháves, no Peru.</p></div>
            </div>
        </a><a href='https://aeroin.net/aviao-da-latam-que-teve-o-nariz-destruido-apos-voar-por-tempestade-continua-no-paraguai/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Avião da Latam que teve o nariz destruído após voar por ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSqfBTcxfzJo8m8YuMx73fInFIwkjxwUkd2EA6m8-K_tBTn6SZQ0R_Lt4rOiozCzOs-F6zPTfap" alt="Avião da Latam que teve o nariz destruído após voar por ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Airbus A320-200 da LATAM, que há algumas semanas se envolveu em uma polêmica por ter atravessado uma área de temporais e granizo em um voo entre Santiago&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}