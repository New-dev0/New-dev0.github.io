import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>1 de dezembro</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,1 de dezembro"/>
        <meta name="description" content="Trending News about 1 de dezembro" /></Head><Template>
            <h1 style={{fontSize: "30"}}>1 de dezembro</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/_DFoY75vWFX8g3OaSro_oYnnh4s=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/Z/P/3DBiGATciJvvQc3jv7iw/podcasts-3000x1688-sem-logo-14.png" alt="1 de dezembro"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/podcast/resumao-diario/noticia/2022/12/01/resumao-diario-432-quinta-feira-1o-de-dezembro.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Resumão diário #432: Quinta-feira, 1º de dezembro</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSPpHAIHyDkojLS4hpPpyUKz2Shg90jgq_TC9pzL0wlWPYUtuV4zJ61gcYpO7NtFXKuHG0u--uh" alt="Resumão diário #432: Quinta-feira, 1º de dezembro" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Produzido pela equipe de podcasts do g1, o Resumão é apresentado pelo jornalista Márcio Rodrigues. Hoje na apresentação: Gustavo Petró. Podcast Resumão — Foto:&nbsp;...</p></div>
            </div>
        </a><a href='https://g1.globo.com/df/distrito-federal/videos-bom-dia-df/playlist/videos-bom-dia-df-de-quinta-feira-1-de-dezembro-de-2022.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VÍDEOS: Bom Dia DF de quinta-feira, 1º de dezembro de 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR_41IfMjs2ONHt7A2fZ7kI4DCPSCJJbEgnxiA0abytyJkTrkLHPJXzhEsngn-f_Ned8DwX7zA5" alt="VÍDEOS: Bom Dia DF de quinta-feira, 1º de dezembro de 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Senador Jean Paul Prates diz que empresa não pode só pagar dividendos a acionistas e explorar petróleo. Há 38 minutos Economia. Blog&nbsp;...</p></div>
            </div>
        </a><a href='https://g1.globo.com/al/alagoas/edicao/2022/12/01/videos-al1-de-quinta-feira-1-de-dezembro.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VÍDEOS: AL1 de quinta-feira, 1° de dezembro</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQfdkMWb37zHfU6ldGqMD-Nq2r1y_Ar3dtuI8510lck8_26Ca6z9siNj6ymL9FRsxJc8apnUNaM" alt="VÍDEOS: AL1 de quinta-feira, 1° de dezembro" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Senador Jean Paul Prates diz que empresa não pode só pagar dividendos a acionistas e explorar petróleo. Há 2 horas Economia. Blog da Julia Duailibi.</p></div>
            </div>
        </a><a href='https://g1.globo.com/mg/minas-gerais/videos-mg1/playlist/videos-mg1-de-quinta-feira-1-de-dezembro-de-2022.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VÍDEOS: MG1 de quinta-feira, 1º de dezembro de 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRhRSDs7KZcA_4uJ3sTw84qJgKyb335vAzmMiCmTz6HoSNlurZGWlznCnFS5t0iCWZZ9HTJ9FzS" alt="VÍDEOS: MG1 de quinta-feira, 1º de dezembro de 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MAIS DO G1 ... Trabalho de resgate no local é prejudicado pelas condições meteorológicas. Nº de desaparecidos foi revisado pelos bombeiros. Há 58 minutos Paraná.</p></div>
            </div>
        </a>
        </Template></>;
}