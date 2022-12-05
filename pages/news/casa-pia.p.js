import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Casa Pia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Casa Pia"/>
        <meta name="description" content="Trending News about Casa Pia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Casa Pia</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=3e6c8ab8-9fc8-4676-85f2-432416879db6&w=800&h=420&watermark=true&t=20221203190100" alt="Casa Pia"/>
            <h3>Recent News</h3>
            <a href='https://www.ojogo.pt/futebol/taca-liga/noticias/braga-vence-o-casa-pia-e-fica-mais-perto-dos-quartos-de-final-da-taca-da-liga-15422880.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Braga vence o Casa Pia e fica mais perto dos quartos de final da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSwFxVeWnJsXsMfvZFogXC8vdgID_BFk6_nHHiAXbtcp6sGOizTU6DQsXhHjqzWu-j8sdbJxGEr" alt="Braga vence o Casa Pia e fica mais perto dos quartos de final da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bracarenses venceram os gansos por 1-0. Vitinha marcou o único golo do encontro.</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-12-03/casa-pia-jogar-contra-dez-e-ilusorio/967154'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Jogar contra dez é ilusório»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRRVPEYRvFYZUt7Yc3WuLTJpwjzDOv5nube1KTJ-qY1M6FCry4prZttkF8sbVWgnBecpUDTTuPM" alt="«Jogar contra dez é ilusório»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Filipe Martins, treinador do Casa Pia, mostrou-se insatisfeito com a derrota e com alguns erros cometidos pela sua equipa que acabou derrotada pelo SC Braga&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tsf.pt/desporto/conheca-os-onzes-de-sc-braga-e-casa-pia-15422351.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vitinha coloca SC Braga a um passo dos quartos da Taça da Liga ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSEWKCtx6DRgZNzsmT9yURjSpQrG6Hr3pHFFrfQ0V3fMRAV0gGzwaHEEyhxu59veihLOuo8tTym" alt="Vitinha coloca SC Braga a um passo dos quartos da Taça da Liga ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O avançado bracarense aproveitou da melhor forma um erro da defesa adversária e, apesar de ter jogado com menos um durante quase toda a segunda parte, o SC&nbsp;...</p></div>
            </div>
        </a><a href='https://bragatv.pt/sc-braga-vence-casa-pia-e-esta-a-um-passo-dos-quartos-de-final-da-taca-da-liga/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SC Braga vence Casa Pia e está a um passo dos quartos de final da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTOTUOCo6JAuaVXy-8yTajOCv71C9UQwRz-vvzDaVgznngwOZH3yi-j9tuJ4flAKSCSWFj40lTi" alt="SC Braga vence Casa Pia e está a um passo dos quartos de final da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O SC Braga venceu no reduto do Casa Pia por 0-1, em jogo da segunda jornada do Grupo D da Taça da Liga.</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/taca-da-liga/sp-braga/taca-da-liga-banza-e-expulso-mas-sp-braga-vence-casa-pia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taça da Liga: Banza é expulso mas Sp. Braga vence Casa Pia</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTFM9pWON9m83g9OfpXuWQy8YsJqH_DkKCmJXNjnT8l6U0GGvsUxXXbv-VsZEFkYT7-thIFQjDr" alt="Taça da Liga: Banza é expulso mas Sp. Braga vence Casa Pia" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Sporting de Braga venceu o Casa Pia no Jamor, este sábado, por 1-0, em jogo da segunda jornada do Grupo D da Taça da Liga.</p></div>
            </div>
        </a><a href='https://www.diariodominho.pt/2022/12/03/sc-braga-venceu-casa-pia/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SC Braga venceu Casa Pia e ficou mais perto dos quartos-de-final ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQSsagbFAZ-WmIGwP85wGTOsM7TfSwnH7LFciJ0cBh06JsraKqPQjrH71kYb4YhjgzTGaIreLEH" alt="SC Braga venceu Casa Pia e ficou mais perto dos quartos-de-final ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Golo de Vitinha decidiu o jogo. Redação/Lusa. 3 Dez 2022. O Sporting de Braga venceu hoje na&nbsp;...</p></div>
            </div>
        </a><a href='https://infocul.pt/reportagem-casa-pia-perdeu-com-o-braga-0-1-para-a-taca-da-liga/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Reportagem: Casa Pia perdeu com o Braga (0-1) para a Taça da Liga</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSBo3AZ4UEG9pl1tLG4LBnemR0ZxV16BHqJZZZwUmscnj1robwWz5IH1Q8S5b6C49Czrxqwy1Js" alt="Reportagem: Casa Pia perdeu com o Braga (0-1) para a Taça da Liga" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ao longo da primeira parte foi possível ver a equipa da casa tentar sair a jogar, desde a sua área, com um futebol apoiado, onde o principal timoneiro foi o&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}