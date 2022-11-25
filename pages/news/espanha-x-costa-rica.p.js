import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Espanha x Costa Rica</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Espanha x Costa Rica"/>
        <meta name="description" content="Trending News about Espanha x Costa Rica" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Espanha x Costa Rica</h1>
            <Image width={800} height={500} src="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1123%2Fr1095674_1296x729_16%2D9.jpg" alt="Espanha x Costa Rica"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com.br/futebol/copa-do-mundo/artigo/_/id/11268100/espanha-envolve-costa-rica-tiki-taka-goleia-7-a-0-estreia-copa-do-mundo-do-qatar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Joia de 18 anos marca, Espanha envolve Costa Rica com tiki-taka e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQhIe26K9aOzvScclaIveagYtmTJkVihhxMLbtCfH_AsRJZjAhOsWin3DVoNOwYCiZGxQ96X0QP" alt="Joia de 18 anos marca, Espanha envolve Costa Rica com tiki-taka e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A vitória de goleada leva a Espanha ao topo do grupo E no Qatar por conta do saldo de gols.</p></div>
            </div>
        </a><a href='https://eco.sapo.pt/2022/11/24/espanha-x-costa-rica-foi-o-jogo-mais-visto-no-quarto-dia-do-mundial/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Espanha x Costa Rica foi o mais visto no 4.º dia do Mundial</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT2KXJF63KBUnPojqH1M9Kq6sNd9WaEq6ywUEQR5suFKe56lZtygO0dZs8PfjRhXRAWue5MlqGT" alt="Espanha x Costa Rica foi o mais visto no 4.º dia do Mundial" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Acompanhe as audiências de todos os jogos do mundial no Qatar, numa análise da agência de meios Carat para o ECO/+M, e confira os resultados desportivos.</p></div>
            </div>
        </a><a href='https://www.ganhador.com/2022/japao-x-costa-rica-na-copa-do-mundo-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Apostas em Japão x Costa Rica na Copa 2022 | Ganhador.com</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSp_vPee-5SyOKAzotf9dHWDvf-t42THOgbgBQTf0yitiV9L8YYRTHbbIQuf8hxz_Eb3DZ640hF" alt="Apostas em Japão x Costa Rica na Copa 2022 | Ganhador.com" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Prognósticos de especialistas em futebol e as melhores apostas em Japão x Costa Rica, no jogo da 2ª rodada do Grupo E da Copa do Mundo 2022.</p></div>
            </div>
        </a><a href='https://plantaodoslagos.com.br/categoria/esportes/espanha-goleia-costa-rica-por-7-x-0-em-estreia-perfeita-na-copa-do-mundo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Espanha goleia Costa Rica por 7 x 0 em estreia perfeita na Copa do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcScWz82rstYXmj3SPxbnrzHEy5ihldoh_joGd6R10KRmAgZlDrc3_KrqhlBlehumFySJifNqXui" alt="Espanha goleia Costa Rica por 7 x 0 em estreia perfeita na Copa do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dani Olmo iniciou a goleada aos 11 minutos, quando trocou passes com Gavi e bateu o goleiro costarriquenho Keylor Navas. Dez minutos depois, Marco Asensio&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/selecoes/espanha/noticia/2022/11/24/espanha-mira-classificacao-antecipada-contra-alemanha-nao-podemos-baixar-a-guarda.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Espanha mira classificação antecipada contra Alemanha: &quot;Não ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR1PBwRpJywZLRf0hKbtsqeSLno_Y0-s6VoYuhB-nln65wbnYn7SVmYH5he4eBMasQD5gjeUXlr" alt="Espanha mira classificação antecipada contra Alemanha: &quot;Não ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Espanha chega com moral para enfrentar a Alemanha no próximo domingo, pela segunda rodada do grupo E da Copa do Mundo do Catar - que pode garantir&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sambafoot.com/br/noticias/asensio-diz-que-gol-em-estreia-da-espanha-na-copa-era-sonho-de-crianca'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Asensio diz que gol em estreia da Espanha na Copa era sonho de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSYfaWGCMYCH9V8jX6eWm6ajih5tpk-bfdVwHXQ7fmkw8XHq0BhRDZbEGcTO49uRWzzZzAMDVSI" alt="Asensio diz que gol em estreia da Espanha na Copa era sonho de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O meia-atacante Marco Asensio foi um dos goleadores do chocolate espanhol por 7 a 0, na estreia da Copa do Mundo e revelou um desejo que nutria desde seus&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sites-de-apostas.net/prognosticos-noticias/palpite-espanha-x-alemanha-copa-do-mundo-do-catar-2022-prognostico-27-11-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Palpite: Espanha x Alemanha – Copa do Mundo do Catar 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTi0iE7k5r76WjcLg4r48Pbo52gM2btpkXLdrcfU-iZlNwPjZ1xrpvRFulRHV8o1IPH7qrrXb2f" alt="Palpite: Espanha x Alemanha – Copa do Mundo do Catar 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Palpite Espanha x Alemanha pela Copa do Mundo do Catar prognósticos e palpites! Análise completa do jogo. Melhores apostas para você.</p></div>
            </div>
        </a>
        </Template></>;
}