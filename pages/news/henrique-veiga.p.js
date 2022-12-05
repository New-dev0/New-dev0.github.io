import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Henrique Veiga</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Henrique Veiga"/>
        <meta name="description" content="Trending News about Henrique Veiga" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Henrique Veiga</h1>
            <Image width={800} height={500} src="https://cdn.cmjornal.pt/images/2022-12/img_1200x677$2022_12_03_19_21_38_1220662.jpg" alt="Henrique Veiga"/>
            <h3>Recent News</h3>
            <a href='https://www.cm-tv.pt/atualidade/detalhe/20221204-0735-ex-modelo-henrique-veiga-espancado-ate-a-morte-em-ajuste-de-contas'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-modelo Henrique Veiga espancado até à morte em ajuste de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSyGFyr_lFxAK7gLB4vQUZFG6nEw-013K3TJuPKXjoNpUZ92gIS_UD5LOnTHU6hqDwBm_hh__Ol" alt="Ex-modelo Henrique Veiga espancado até à morte em ajuste de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Henrique Veiga terá sido assassinado num cenário de extrema violência. O corpo do comerciante e antigo modelo de 42 anos, foi encontrado,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jn.pt/justica/homem-encontrado-morto-com-sinais-de-violencia-em-loja-no-porto-15421518.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Homem encontrado morto com violência no Porto era comerciante e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRrjYBKPu_LuOyfrT7hj63XpyZ2YMHUerwQjV05vORxSBEupNKIEYr63DxrghrJ1UPA7YeZL9NT" alt="Homem encontrado morto com violência no Porto era comerciante e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um homem foi encontrado morto no interior de uma loja no centro do Porto. O cadáver apresentava sinais de grande violência pelo que o caso transitou para a&nbsp;...</p></div>
            </div>
        </a><a href='https://magg.sapo.pt/atualidade/atualidade-nacional/artigos/conhecido-barman-morto-com-violencia-no-porto'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Conhecido barman morto com violência no Porto. Ajuste de contas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSQmG2dZahbnMtcGEwSGQkTEpfpS2V2tswWbmeMgYPwWoP-K_nynivunMGUQ-G9B40VivHFNuC-" alt="Conhecido barman morto com violência no Porto. Ajuste de contas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um barman de 43 anos cujo percurso passou pelo Bistro 100 Maneiras, de Ljubomir Stanisic, foi encontrado morto no centro do Porto.</p></div>
            </div>
        </a><a href='https://www.novagente.pt/henrique-winkel-veiga-encontrado-morto-com-violencia-conhecido-barman-trabalhou-com-ljubomir'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Henrique Winkel Veiga - Encontrado morto com violência ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQPb8m_b-vrgCMVLVE5ApVVGTfVKPG_1h1qWEmmu5udoGR5s1CNgosOIrXcLrfYuqA83bWOhDLJ" alt="Henrique Winkel Veiga - Encontrado morto com violência ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Henrique Winkel Veiga, 43 anos, era barman e empresário e trabalhou com Ljubomir Stanisic. Foi encontrado morto no interior de uma loja no centro do Porto.</p></div>
            </div>
        </a><a href='https://www.flash.pt/celebridades/nacional/detalhe/barman-encontrado-morto-com-sinais-de-grande-violencia-no-porto-ja-tinha-trabalhado-com-ljubomir-stanisic'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Barman famoso encontrado morto com sinais de grande violência ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRArynN5KiK79DmN4DHQvjkVMd-epklduCXddIAgjTwcxkDhKjvgxYDMps1txpY3nekJzAgRnxo" alt="Barman famoso encontrado morto com sinais de grande violência ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Henrique Winkel Veiga, 43 anos de idade, era barman e empresário, com uma loja de roupa em segunda mão na zona de Cedofeita, no Porto, onde também vivia.</p></div>
            </div>
        </a><a href='https://portocanal.sapo.pt/noticia/316221'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Identificado o homem morto com extrema violência no centro do Porto</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQYEEXHm2dn47m6syxaV-Kmz03PYWRVMGnsxOvEyC6tXBLFLjhX23PGchZDPrxhcDLvaJWzSEpU" alt="Identificado o homem morto com extrema violência no centro do Porto" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>De acordo com o Jornal de Notícias, a vítima é um empresário e ex-modelo bastante conhecido na zona de Cedofeita, Henrique Winkel Veiga. O alerta terá sido dado&nbsp;...</p></div>
            </div>
        </a><a href='https://www.maria.pt/noticias-e-tv/barman-morto-violencia-no-porto-trabalhou-ljubomir-stanisic/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Barman morto com violência no Porto trabalhou com Ljubomir Stanisic</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTjKEtjRKXFA9BEXXFvHh6iVxhr25QLatxxHWUUagGLwiqlUfFRYyhW-i0SDKIhleMbjWZl7l0k" alt="Barman morto com violência no Porto trabalhou com Ljubomir Stanisic" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Henrique Winkel Veiga foi encontrado morto no interior de uma loja no centro do Porto. O barman e ex-modelo já trabalhou com Ljubomir Stanisic.</p></div>
            </div>
        </a>
        </Template></>;
}