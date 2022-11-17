import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>G20</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,G20"/>
        <meta name="description" content="Trending News about G20" /></Head><Template>
            <h1 style={{fontSize: "30"}}>G20</h1>
            <Image width={800} height={500} src="https://imagens.publico.pt/imagens.aspx/1751603?tp=UH&db=IMAGENS&type=JPG&share=1&o=BarraFacebook_Publico.png" alt="G20"/>
            <h3>Recent News</h3>
            <a href='https://www.publico.pt/2022/11/16/mundo/noticia/g20-termina-condenacao-guerra-russa-maioria-membros-2027921'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>G20 termina com “condenação” da guerra russa pela “maioria dos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQIXBR-s_MFoDUAUnUTIdXDo9ayfNbUBns3gPiG2Sd4LggMxHNkXn0Bza-BRAOL6C6gbfUyCn3V" alt="G20 termina com “condenação” da guerra russa pela “maioria dos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Declaração conjunta da cimeira confirma “diferentes avaliações da situação” na Ucrânia. Agenda do último dia da reunião de líderes mundiais na Indonésia&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jn.pt/mundo/-maioria-do-g20-condena-guerra-na-declaracao-da-cimeira-de-bali-15356634.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maioria do G20 condena guerra na declaração da cimeira de Bali</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQTFeKcwNt_vruq1_yLb62S5-Eye2QPJJc-qZtJOahe24DanbnSDdGz22EDorjMJOCsIX-7rya_" alt="Maioria do G20 condena guerra na declaração da cimeira de Bali" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A maioria dos membros do G20 &quot;condenou veementemente a guerra na Ucrânia&quot; e salientou as devastadoras consequências humanas e económicas globais do conflito&nbsp;...</p></div>
            </div>
        </a><a href='https://observador.pt/2022/11/16/zelensky-no-g20-ha-um-estado-terrorista-entre-vos-contra-o-qual-temos-de-nos-defender/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zelensky no G20. Há “um Estado terrorista entre vós, contra o qual ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRNdFDpacvM-MeWVUV6Uu3-4ebk5OweFGzQvUTpZyrxnQtuPZKOELxQD0eXW2uexZtDOlU6DcdY" alt="Zelensky no G20. Há “um Estado terrorista entre vós, contra o qual ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Presidente ucraniano, Volodymyr Zelensky, acusou esta quarta-feira a Rússia de ter querido enviar uma mensagem ao G20 com o ataque na Polónia,&nbsp;...</p></div>
            </div>
        </a><a href='https://veja.abril.com.br/mundo/g20-exige-retirada-russa-completa-e-incondicional-da-ucrania/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>G20 exige retirada russa &#39;completa e incondicional&#39; da Ucrânia</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSPnSUQLI_eEq2vvG96rrocRbjwepQTANIKf1Ma-R2Mcby8tIeoTu_JytWwGflf2xv_jh6D6KI1" alt="G20 exige retirada russa &#39;completa e incondicional&#39; da Ucrânia" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Líderes das maiores economias do mundo concordaram em condenar a guerra &#39;nos termos mais fortes&#39; e discutiram sanções sobre Moscou.</p></div>
            </div>
        </a><a href='https://pt.euronews.com/2022/11/16/maioria-dos-membros-do-g20-condena-guerra-da-russia-na-ucrania'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maioria dos membros do G20 condena guerra da Rússia na Ucrânia</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSc04Qj9wYgrASN1SPPNWQ3G286HU566Nwc-1oJJZUnN-dKEIjDofYXlVYD73xTy3kc0TGs1gMf" alt="Maioria dos membros do G20 condena guerra da Rússia na Ucrânia" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O primeiro-ministro britânico, Rishi Sunak, apontou o dedo a Vladimir Putin por causa da guerra na Ucrânia e criticou a ausência do presidente russo. &quot;Não há&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rfi.fr/pt/mundo/20221116-indon%C3%A9sia-maioria-dos-membros-do-g20-condena-guerra-na-ucr%C3%A2nia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indonésia: Maioria dos membros do G20 &quot;condena veementemente ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRirkvlGPVLeZ95nSUBapX9TI3WFbtqAmH-EPulBi36jpsB7cK_WN7PaIhL0yGM5khiaTqyQNK4" alt="Indonésia: Maioria dos membros do G20 &quot;condena veementemente ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Terminou esta quarta-feira, 16 de Dezembro, a cimeira das 20 maiores economias do mundo, na ilha indonésia de Bali. A maioria dos membros do G20 condenou de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}