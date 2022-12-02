import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Vitoria</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Vitoria"/>
        <meta name="description" content="Trending News about Vitoria" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Vitoria</h1>
            <Image width={800} height={500} src="https://cdn-images.rtp.pt/icm/noticias/images/3b/3b3b88e3b44c6f1d40bffe8c0f89696f?w=860&q=90&rect=0,0,1233,676&auto=format" alt="Vitoria"/>
            <h3>Recent News</h3>
            <a href='https://www.rtp.pt/noticias/futebol-nacional/vitoria-e-bsad-empatam-e-apuram-boavista-para-quartos-de-final-da-taca-da-liga_d1450942'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vitória e BSAD empatam e apuram Boavista para quartos de final ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRnRGpA_b1wjyuasy-ZXO5p7hbPVCF1VlfOImX73DPLD0rSVLu6Z7dmquQvexJ_LGMGgTRZ7ljy" alt="Vitória e BSAD empatam e apuram Boavista para quartos de final ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Vitória de Guimarães e a BSAD ficaram esta noite matematicamente afastados da Taça da Liga de futebol, após terem empatado 2-2, resultado que garantiu ao&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jn.pt/desporto/vitoria-de-guimaraes-empata-com-bsad-e-falha-quartos-da-taca-da-liga-15413365.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vitória de Guimarães empata com BSAD e falha &quot;quartos&quot; da Taça ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQBWKC6bho_ykf3zs4DOQF_nQjILiZBJVGcSnNT1uQ0QDpWYAPiT3xpdIQsHNFjRLLbamuh-lZ2" alt="Vitória de Guimarães empata com BSAD e falha &quot;quartos&quot; da Taça ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ao não ir além do empate (2-2), em casa, frente ao BSAD, o Vitória de Guimarães ficou sem hipóteses de ainda alcançar o apuramento para os quartos de final&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/futebol/taca-liga/noticias/vitoria-de-guimaraes-e-b-sad-empatam-na-taca-da-liga-15413516.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vitória de Guimarães e B SAD empatam na Taça da Liga</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR23S27c9xjodshfIpFXi3UOrHGaTK3OxRKFxQB9XkRzgzCu3N7mZ9OZHNUgXBUxtjqOpVOsUEc" alt="Vitória de Guimarães e B SAD empatam na Taça da Liga" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Vitória de Guimarães e a B SAD ficaram esta quinta-feira matematicamente afastados da Taça da Liga, após terem empatado 2-2, resultado que garantiu ao&nbsp;...</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/desporto/2125043/jota-silva-voa-e-da-vantagem-ao-vitoria-sc-sobre-o-bsad'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jota Silva voa e dá vantagem ao Vitória SC sobre o BSAD</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSNNoiAsit5X3jSkRUY7VPRWOCoxwP05GBlOc8KK9lCttkAA1YtFapFDF0padLN6bjg9sS0b6Rh" alt="Jota Silva voa e dá vantagem ao Vitória SC sobre o BSAD" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Vitória SC conseguiu regressar à vantagem frente ao BSAD, nesta quinta-feira, com golo Jota Silva. O avançado apareceu na grande área para,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-12-01/taca-da-liga-v-guimaraes-e-b-sad-empatam-e-colocam-boavista-nos-quartos/966886'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>V. Guimarães e B SAD empatam e colocam Boavista nos &#39;quartos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSw6FeOQ6xTqWp4Fv6sO0tgatD4J63apngVDDOlc4E5teS1Ut7MyXCtXq5-qNxokYdJoLcyHrFq" alt="V. Guimarães e B SAD empatam e colocam Boavista nos &#39;quartos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O encontro estava vivo e os conquistadores voltaram a colocar-se na frente do marcador com Jota Silva a marcar de cabeça. Porém, voltaram a pecar defensivamente&nbsp;...</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/taca-da-liga/vitoria-guimaraes/taca-da-liga-empate-entre-v-guimaraes-e-bsad-apura-boavista'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taça da Liga: empate entre V. Guimarães e B SAD apura Boavista</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRuZLvr0EWQ6AgtyRtC5Z69y7eDf1VKorqBmcR7oRRh6pQeVeREvwOnDQw3hNwJLYiO3oL5nTz8" alt="Taça da Liga: empate entre V. Guimarães e B SAD apura Boavista" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na segunda parte o Vitória criou ocasiões para chegar ao triunfo e teve, inclusive, um golo anulado a Jota Silva por fora de jogo. Este empate deixa os&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}