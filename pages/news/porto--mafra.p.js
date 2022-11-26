import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Porto  Mafra</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Porto  Mafra"/>
        <meta name="description" content="Trending News about Porto  Mafra" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Porto  Mafra</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=344e91db-3d7c-46ef-b3d3-2ab3c966503a&w=800&h=420&watermark=true&t=20221125194800" alt="Porto  Mafra"/>
            <h3>Recent News</h3>
            <a href='https://www.ojogo.pt/futebol/1a-liga/porto/noticias/fc-porto-e-mafra-defrontam-se-na-taca-da-liga-confira-os-onzes-e-os-suplentes-15388980.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FC Porto e Mafra defrontam-se na Taça da Liga: confira os onzes e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR1ou0lKmBtkERkJftxShGyTeCvNnQH1BhGArONXI93rIm9AZhMwoa4VpxkuHi6CN3zRREE6dhO" alt="FC Porto e Mafra defrontam-se na Taça da Liga: confira os onzes e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Suplentes do FC Porto: Samuel Portugal; David Carmo, Manafá, Namaso, João Mário, Wendel Silva, Gonçalo Borges, Bernardo Folha, Marcus Abraham. Onze do Mafra:&nbsp;...</p></div>
            </div>
        </a><a href='https://desporto.sapo.pt/futebol/taca-da-liga/artigos/fc-porto-empata-frente-ao-mafra-depois-de-ter-estado-a-perder-por-dois'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FC Porto empata frente ao Mafra depois de ter estado a perder por ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR-RxJmLjmSg5opnYaH3QnCMqE540yfl6fixrRsoM0lpX72tAlzokPE0lzjQvhV7XudaVkurdlX" alt="FC Porto empata frente ao Mafra depois de ter estado a perder por ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FC Porto recebeu e empatou frente ao Mafra, na primeira jornada do grupo A da Taça da Liga. Os dragões estiveram a perder por dois golos, mas conseguiram&nbsp;...</p></div>
            </div>
        </a><a href='https://observador.pt/liveblogs/fc-porto-mafra-andre-franco-e-toni-martinez-no-onze-claudio-ramos-e-o-dono-da-baliza/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FC Porto acaba a jogar contra 10 mas não vai além de um empate ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRoLoEnwGbuVKMBmo0ZaKOTJJ3Yl7k_qBWTlsJgb3BW5ri6cbAb3zoXDzURmFLhHAHD4pneGoKP" alt="FC Porto acaba a jogar contra 10 mas não vai além de um empate ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com o Mundial a decorrer no Qatar, FC Porto recebeu Mafra no Dragão e não foi além de um empate na estreia na Taça da Liga. Ença Fati, Gui Ferreira,&nbsp;...</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/taca-da-liga/fc-porto/taca-da-liga-fc-porto-mafra-2-2-destaques'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taça da Liga: FC Porto-Mafra, 2-2 (destaques)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQYEzb1KI18cjuYVIOfp1-fklgf1J7H7e_QUGtso4tC3Ca0GlXra0173SpqBHVEyqrQbrJOiw3F" alt="Taça da Liga: FC Porto-Mafra, 2-2 (destaques)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Acompanhou de forma evidente a reação a equipa à desvantagem de dois golos após o intervalo, mostrou mais crer e atitude na luta pela bola e pelos lances e&nbsp;...</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/bola-branca/noticia/porto/2022/11/25/taca-da-liga-fc-porto-salva-um-ponto-frente-ao-mafra/309596/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taça da Liga. FC Porto salva um ponto frente ao Mafra - Renascença</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Taça da Liga. FC Porto salva um ponto frente ao Mafra - Renascença" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Frente a um onze portista com muitas alterações, fruto dos seis jogadores que estão no Mundial, o Mafra inaugurou o marcador aos 16 minutos. Lucas Silva ganhou&nbsp;...</p></div>
            </div>
        </a><a href='https://www.record.pt/futebol/futebol-nacional/allianz-cup/detalhe/a-cronica-do-fc-porto-mafra-2-2-se-nao-e-maldicao-pelo-menos-parece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A crónica do FC Porto-Mafra, 2-2: Se não é maldição pelo menos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSX8Y-DFJwStPT-xYLMgeyhoftPplNPOPwYzU1e74iacq3hNKt4P__JnRP0PcmHk_nMkSRhAix9" alt="A crónica do FC Porto-Mafra, 2-2: Se não é maldição pelo menos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Taça da Liga e o FC Porto, o FC Porto e a Taça da Liga... Uma relação que já conta com episódios suficientes para um filme carregado de drama e, até ver,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/desporto/2121025/fc-porto-mafra-siga-em-direto-as-incidencias-da-partida'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mafra assustou no Dragão, mas FC Porto reagiu e salvou empate</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcREon4zTCVrtKvSgBsTm7u2WSOFc0-aw8-ze6VmIP4KjaLI66gWVJrHElIibJBETt71HxPmuSwJ" alt="Mafra assustou no Dragão, mas FC Porto reagiu e salvou empate" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mafrenses &#39;vingaram&#39; derrota na Taça de Portugal e conseguiram estar a vencer por 2-0 no Dragão. FC Porto reagiu no segundo tempo e alcançou o empate.</p></div>
            </div>
        </a>
        </Template></>;
}