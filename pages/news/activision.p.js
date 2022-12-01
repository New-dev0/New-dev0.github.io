import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Activision</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Activision"/>
        <meta name="description" content="Trending News about Activision" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Activision</h1>
            <Image width={800} height={500} src="https://www.arkade.com.br/wp-content/uploads/2022/11/microsoft_activision_blizzard_xbox.jpg" alt="Activision"/>
            <h3>Recent News</h3>
            <a href='https://www.arkade.com.br/a-servia-e-a-terceira-nacao-a-dar-o-seu-ok-para-a-compra-da-activision-pela-microsoft/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A Sérvia é a terceira nação a dar o seu &quot;ok&quot; para a compra da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQG_aLnYVookoMIHB2hENqsS89X0swHjgxvrUhB_WK4BM1gdUAfdoAooX1a96tGpCDCCnn8thpJaw" alt="A Sérvia é a terceira nação a dar o seu &quot;ok&quot; para a compra da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brasil e Arábia Saudita já haviam sinalizado de forma positiva, e agora é a Sérvia que dá o seu sinal verde para a compra da Activision Blizzard pela&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tecmundo.com.br/voxel/255123-microsoft-oferecer-concessoes-agilizar-aquisicao-activision.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Microsoft pode oferecer concessões para agilizar aquisição da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTRfyvgxEYYNxkdf1p1WWBkAYNDmSvrrSyDzC3Liu0ChfnmMVN1KYuSlbyu3iH2xs0h935MRSwu" alt="Microsoft pode oferecer concessões para agilizar aquisição da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Para garantir a compra da Activision-Blizzard, a dona do Xbox deve manter Call of Duty por pelo menos 10 anos no PlayStation.</p></div>
            </div>
        </a><a href='https://observatoriodegames.uol.com.br/mercado/fusao-da-microsoft-com-a-activision-foi-autorizada-incondicionalmente-na-servia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aquisição da Activision Blizzard foi aprovada pelo antitruste sérvio</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ5B_tTSQQYWAiaW3P6hvduoIYlMmxi10Otajw6LvpQ-otogW1Rh7koZ0Op5w9FAAPX08JU6WfN" alt="Aquisição da Activision Blizzard foi aprovada pelo antitruste sérvio" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A proposta de aquisição da Activision Blizzard pela Microsoft foi aprovada incondicionalmente na Sérvia. De acordo com a Reuters, a Sérvia juntou-se à&nbsp;...</p></div>
            </div>
        </a><a href='https://tecmasters.com.br/microsoft-concessoes-oferta-activision-blizzard/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Microsoft pode oferecer concessões pela Activision Blizzard ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRvVWnJjx07xyaGj1Bn-hN7bs2U_y0qH-yG6lWUY2a_WMVH87_bWhGyWVWU-lZkntWXa8VwZGSx" alt="Microsoft pode oferecer concessões pela Activision Blizzard ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Microsoft pode oferecer soluções à agência regulatora da União Europeia para conseguir concluir o processo de aquisição da Activision Blizzard.</p></div>
            </div>
        </a><a href='https://adrenaline.com.br/noticias/v/80616/compra-da-activision-pela-microsoft-e-aprovada-incondicionalmente-pela-servia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Compra da Activision pela Microsoft é “aprovada ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQpjhzaeMJTFkERS-9WdxAferhRDZyfgNrLecycjgP4MZCRo1I93NRRMqDLwpZJ0pqGxiTxbhQ1" alt="Compra da Activision pela Microsoft é “aprovada ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Arábia Saudita e o Brasil já haviam aprovado a conclusão da fusão entre as empresas.</p></div>
            </div>
        </a><a href='https://www.eurogamer.pt/servia-aprova-sem-problemas-a-compra-da-activision'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sérvia aprova sem problemas a compra da Activision</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSiqLvqN50SdLPXzTReQT0adOwGTiI0QlIsxUar71VCGONjnaADWGKkjVOoKQuj_DeTUPXXiIVykw" alt="Sérvia aprova sem problemas a compra da Activision" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois do Brasil e Arábia Saudita, é a vez da Sérvia aprovar a compra da Activision Blizzard, sem …</p></div>
            </div>
        </a><a href='https://www.centralxbox.com.br/2022/11/30/ftc-fara-reuniao-para-decidir-aprovacao-da-aquisicao-da-activision-blizzard/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FTC fará reunião para decidir aprovação da aquisição da Activision ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRmZVWlFDPtToe_sLbWUjONCgfzpMrHWCEiQ76_aAz80zNpf0f-HETGTcQaXfCUa_7fHVL_B-pq" alt="FTC fará reunião para decidir aprovação da aquisição da Activision ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Central Xbox possui parceiros, que ajudam a manter nosso canal em funcionamento. Se você comprar algum produto ou serviço de algum link dentro do nosso&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}