import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Carlos Queiroz</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Carlos Queiroz"/>
        <meta name="description" content="Trending News about Carlos Queiroz" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Carlos Queiroz</h1>
            <Image width={800} height={500} src="https://images.rr.sapo.pt/399220435751cdce8211_socialshare.JPG" alt="Carlos Queiroz"/>
            <h3>Recent News</h3>
            <a href='https://rr.sapo.pt/bola-branca/noticia/futebol-nacional/2022/11/29/carlos-queiroz-lamenta-ameacas-e-pressoes-aos-jogadores-do-irao-durante-o-mundial-2022/310057/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Carlos Queiroz lamenta ameaças e pressões aos jogadores do Irão ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRXzbzhH_aw_BRPYzPTMpHtJb-Oyh33bOE2gexz9kn7UKpVejWspPIx7HK0Uhx8JvoN8eDKSXyu" alt="Carlos Queiroz lamenta ameaças e pressões aos jogadores do Irão ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Não foi bonito&quot;, lamenta o treinador português, que fica pela fase de grupos, depois da derrota do Irão frente aos EUA.</p></div>
            </div>
        </a><a href='https://desporto.sapo.pt/futebol/mundial/artigos/carlos-queiroz-a-nossa-missao-e-proporcionar-um-sorriso-durante-90-minutos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Carlos Queiroz: &quot;A nossa missão é proporcionar um sorriso durante ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTfJ-KaMjHZhiTD_hLR1jfxPehEX2BXUOy1R-Vc-tz2QoHK46qraN606ACvYLueWTkQL3GiktyL" alt="Carlos Queiroz: &quot;A nossa missão é proporcionar um sorriso durante ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A situação social no Irão tem levado os jornalistas presentes no Qatar a abordarem frequentemente o tema dos direitos humanos nas conferências de imprensa&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/selecoes/ira/noticia/2022/11/29/tecnico-do-ira-portugues-carlos-queiroz-lamenta-o-sonho-acabou.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Técnico do Irã, português Carlos Queiroz lamenta: &quot;O sonho acabou&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRjWCcAK9YyuSD160Jw3kvgwoqBOCzW-e9y3hWyH90wN-vxC3qZWOXfH8i-0Y2X0Z_2s6vAYy9L" alt="Técnico do Irã, português Carlos Queiroz lamenta: &quot;O sonho acabou&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Treinador, que já tinha deixado claro o objetivo de classificação para as oitavas, analisa: &quot;Nossa defesa não foi tão bem&quot;</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/internacional/mundial-2022/noticias/queiroz-este-mundo-e-este-momento-estao-tao-cheio-de-idiotices-e-patetices-15401660.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Queiroz: &quot;Este mundo e este momento estão tão cheios de idiotices ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSyy3ZDyn9VpvE3f4JF-x4LZnLskbJ7aoafbQPSGJWKTw1LKAr8dwO85kwqOi72aBfstygZ24Xn" alt="Queiroz: &quot;Este mundo e este momento estão tão cheios de idiotices ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Declarações de Carlos Queiroz, selecionador do Irão, após a derrota com os Estados Unidos (1-0) na terceira jornada do Grupo B do Mundial do Catar.</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/futebol/carlos-queiroz-lamenta-queda-do-ira-deuses-do-futebol-premiam-quem-aproveita-oportunidades,e2f894d8a6ac952ff7717b068e5460832i02d21z.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Carlos Queiroz lamenta queda do Irã: &#39;Deuses do futebol premiam ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTynvuNhQ19hj1NnSqU6MDLeXHJvnKeqRJw1NDAKHi2X-0nedlVjl6jw9MaRroLYjMKdOeSR-GN" alt="Carlos Queiroz lamenta queda do Irã: &#39;Deuses do futebol premiam ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quase 25 anos depois de vencer os americanos em Lyon, durante o Mundial da França, o Irã não ...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-29/irao-este-mundo-esta-cheio-de-idiotices-e-patetices/966588'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Este mundo está cheio de idiotices e patetices»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTG0GxmhkaTPrq3aphXo6I8E05HnZYMg2_AbuHWKqfm9c5NmcwrJQ7oFNfavS--H8ZtHGnWhlOA" alt="«Este mundo está cheio de idiotices e patetices»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Carlos Queiroz e o Irão disseram, esta terça-feira, adeus ao Mundial do Catar, após desaire, por 0-1, frente aos Estados Unidos. No final do jogo,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.futebol365.pt/artigo/290177-carlos-queiroz-o-sonho-acabou-jogamos-melhor-mas-nao-marcamos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Carlos Queiroz: «O sonho acabou. Jogámos melhor, mas não ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRACARXtbKktcBbfyqcFXzQgSES0wxmDYHFGs-Il50O2syUNHzy6A-rpUG2IGa63Z6ptSjhJVLu" alt="Carlos Queiroz: «O sonho acabou. Jogámos melhor, mas não ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Declarações de Carlos Queiroz, selecionador do Irão, no final da partida frente aos Estados Unidos, da terceira jornada do Grupo B, do Mundial do Qatar.</p></div>
            </div>
        </a>
        </Template></>;
}