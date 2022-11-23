import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pablo milanes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pablo milanes"/>
        <meta name="description" content="Trending News about Pablo milanes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pablo milanes</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/Ltla7NRnyXJRDeCEgEb_Eb22Zv0=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/4/V/AlHiwmRumFteFLraCC8A/pablochicomilton.jpg" alt="Pablo milanes"/>
            <h3>Recent News</h3>
            <a href='https://gauchazh.clicrbs.com.br/cultura-e-lazer/noticia/2022/11/morre-pablo-milanes-cantor-cubano-e-compositor-de-yolanda-aos-79-anos-clas7p416000201g7u4fywswp.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morre Pablo Milanés, cantor cubano e compositor de &#39;Yolanda&#39;, aos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Morre Pablo Milanés, cantor cubano e compositor de &#39;Yolanda&#39;, aos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O cantor e compositor cubano Pablo Milanés morreu na manhã desta terça-feira, 22, aos 79 anos. Ele estava internado em um hospital em Madri, na Espanha,&nbsp;...</p></div>
            </div>
        </a><a href='https://g1.globo.com/pop-arte/musica/blog/mauro-ferreira/post/2022/11/22/pablo-milanes-deixa-lacos-fortes-com-a-mpb-pela-afinidades-ideologicas-e-musicais-com-chico-buarque-e-milton-nascimento.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pablo Milanés deixa laços fortes com a MPB pelas afinidades ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSlV8v2wufqcoHp7JOzQHrwH6zfqYZyu2sm-2TiwQrhAt2xm6Q_vaQJOmoG72t7tlVS8LLJ4PDz" alt="Pablo Milanés deixa laços fortes com a MPB pelas afinidades ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Morto hoje aos 79 anos, o artista cubano tem obra que inclui álbum gravado no Brasil em 1983 e músicas incluídas em discos de cantores como Fagner, Simone,&nbsp;...</p></div>
            </div>
        </a><a href='https://agenciabrasil.ebc.com.br/internacional/noticia/2022-11/morre-aos-79-anos-o-musico-cubano-pablo-milanes'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morre aos 79 anos o músico cubano Pablo Milanés</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSBgod1sB4vqO7boSN5TXUhGZwV4siOvYMbaGTK0_mH9im-Gxn5uQkfWlPD3pd0uYwUxAkWwYUp6Q" alt="Morre aos 79 anos o músico cubano Pablo Milanés" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Autor de clássicos como Yolanda, Milanés lançou mais de 40 álbuns durante a carreira e ganhou, entre outros, o Prêmio Nacional de Música de Cuba.</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/ilustrada/2022/11/cantor-e-compositor-cubano-pablo-milanes-morre-aos-79-anos.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morre Pablo Milanés, autor de &#39;Yolanda&#39; e uma das maiores vozes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQpfTeonlbsCBVrUsOxV0dUCinZYEB17x6lcYdMdg5jE1J7xBIzAeU0byOIJdclk5H6Ks5in1P6" alt="Morre Pablo Milanés, autor de &#39;Yolanda&#39; e uma das maiores vozes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Músico e compositor de 79 anos, que integrou o movimento Nova Trova, estava internado em Madri.</p></div>
            </div>
        </a><a href='https://noticias.uol.com.br/ultimas-noticias/rfi/2022/11/22/morre-pablo-milanes-um-dos-grandes-nomes-do-cancioneiro-cubano-e-internacional.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morre Pablo Milanés, um dos grandes nomes do cancioneiro ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Morre Pablo Milanés, um dos grandes nomes do cancioneiro ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pablo Milanés encantou gerações de cubanos com seu timbre claro e hipnotizante. Ele foi além e conquistou o mundo cantando a revolução,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/internacional/morre-o-cantor-e-compositor-pablo-milanes-aos-79-anos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morre o cantor e compositor cubano Pablo Milanés aos 79 anos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ7G_k5QW9VqAoDIf3La2_YTlMK-C7vGD0dduQ2F2GeMz-ZyGRN_ec1n4at08qA0qfZIclhntBY" alt="Morre o cantor e compositor cubano Pablo Milanés aos 79 anos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A conta oficial de Milanés no Facebook postou uma mensagem anunciando sua morte: “Com muita dor e tristeza, lamentamos informar que o professor Pablo Milanés&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}