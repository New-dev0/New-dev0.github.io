import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Maroon 5</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Maroon 5"/>
        <meta name="description" content="Trending News about Maroon 5" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Maroon 5</h1>
            <Image width={800} height={500} src="https://images.impresa.pt/expresso/2022-11-15-maroon5.jpg-9bceddf8/1.91x1?wm=true&outputFormat=jpeg" alt="Maroon 5"/>
            <h3>Recent News</h3>
            <a href='https://expresso.pt/blitz/2022-11-15-Os-Maroon-5-anunciam-concerto-em-Portugal-no-proximo-ano-saiba-os-precos-de-todos-os-bilhetes-07b783db'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Os Maroon 5 anunciam concerto em Portugal no próximo ano: saiba ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT1mhDD1joEGzB35BO7f2Ppxws7AVwGhemdL4FuZLxwDDvUWN7IXaygeEqwxysEd3W60pMrZZRa" alt="Os Maroon 5 anunciam concerto em Portugal no próximo ano: saiba ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A banda norte-americana regressa a Portugal para um concerto que se realizará no final da primavera, no Passeio Marítimo de Algés. Os bilhetes são postos à&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dn.pt/cultura/maroon-5-atuam-em-portugal-em-junho-do-proximo-ano-15353760.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maroon 5 atuam em Portugal em junho do próximo ano</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTsJz46mN19tiB3okrj8va1lk5QZf2AhibECrCZVoxTTwOCtVOH7VP0JwjjXmclT9XyyVJr2VTv" alt="Maroon 5 atuam em Portugal em junho do próximo ano" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A última vez que a banda atuou em Portugal foi em maio de 2016, no Rock in Rio Lisboa, onde já tinham atuado em 2012.</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/noticia/vida/2022/11/15/maroon-5-voltam-a-portugal-em-junho/308120/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maroon 5 voltam a Portugal em junho - Renascença</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRiVXoSaloIJ_JUyVZRTLNjoNuICkxShXlc8EprMEDXpfKWoQtTamdxCC8PqA5ktZNKRYa9oNwo" alt="Maroon 5 voltam a Portugal em junho - Renascença" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Espanha, República Checa, Dinamarca, Holanda, Alemanha e França são os países que se seguem na tour europeia do grupo que terá o último concerto no The O2 em&nbsp;...</p></div>
            </div>
        </a><a href='https://mag.sapo.pt/musica/artigos/maroon-5-regressam-a-portugal-em-2023'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maroon 5 regressam a Portugal em 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTYZuGUAmFWv2BXnZP4P8vmdwaVd3Y2EbBDEIiHXETE_Jy2Orxv66dvtV69hVnd2r0L6MKWMmiw" alt="Maroon 5 regressam a Portugal em 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Maroon 5 anunciaram esta terça-feira, dia 15 de novembro, a nova digressão no Reino Unido e Europa para 2023, com passagem garantida por Portugal no dia 13&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nit.pt/cultura/musica/para-tudo-os-maroon-5-anunciam-concerto-em-portugal-no-proximo-ano'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pára tudo: os Maroon 5 anunciam concerto em Portugal no próximo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTIe1W6RxVRdXRXuwCoIP4ZBVvZoAg12a9flPiPnkX8w0oRi3Gq7E5-vR1W8CFl5MRJcfdHUBU6" alt="Pára tudo: os Maroon 5 anunciam concerto em Portugal no próximo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A banda vai atuar no Passeio Marítimo de Algés. Os bilhetes vão ficar à venda na sexta-feira, 18 de novembro. 15/11/2022 às 09:37.</p></div>
            </div>
        </a><a href='https://radiocomercial.iol.pt/noticias/130199/maroon-5-atuam-em-portugal-em-2023'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maroon 5 atuam em Portugal em 2023 - Rádio Comercial</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSXkgZKxY2t5MGFlqBaT3kGbqYqQoaGUV1meahgUYx8MKrHbQkJI0PKMkCDQRaHxD6YflyWN4qJ" alt="Maroon 5 atuam em Portugal em 2023 - Rádio Comercial" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O circuito pela Europa continua depois em Espanha, República Checa, Dinamarca, Países Baixos, Alemanha e França. A digressão termina no famoso pavilhão O2, em&nbsp;...</p></div>
            </div>
        </a><a href='https://www.timeout.pt/lisboa/pt/noticias/maroon-5-vao-levar-o-novo-disco-e-os-exitos-ao-passeio-maritimo-de-alges-111522'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maroon 5 vão levar o novo disco (e os êxitos) ao Passeio Marítimo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRyzecvUEvfu7ipU5t_1yG5UUWfeR9Yk7sHFAhNaxPnKFvuX8qTGLmOp-gX2B9qFwV5e7NKENfD" alt="Maroon 5 vão levar o novo disco (e os êxitos) ao Passeio Marítimo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O concerto da banda de Adam Levine está marcado para 13 de Junho de 2023. Os bilhetes são postos à venda esta sexta-feira.</p></div>
            </div>
        </a>
        </Template></>;
}