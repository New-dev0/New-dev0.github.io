import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Francisco Laranjo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Francisco Laranjo"/>
        <meta name="description" content="Trending News about Francisco Laranjo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Francisco Laranjo</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A1200%3A673%3Anowe%3A0%3A0%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2022%2F11%2F16152107%2Ffrancisco-laranjo.jpeg" alt="Francisco Laranjo"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/2022/11/16/morreu-o-artista-plastico-francisco-laranjo-aos-67-anos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu o artista plástico Francisco Laranjo aos 67 anos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQrizDyYxi5McFegbRXxP_-e5DOA29ZxKV2BQyHh94pB8jHhvrCcP36hxAsuvzZW6tDpk5LbVeu" alt="Morreu o artista plástico Francisco Laranjo aos 67 anos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Artista e antigo professor catedrático da Faculdade de Belas-Artes da Universidade do Porto morreu de vítima de cancro. Desde 1979 expunha individual e&nbsp;...</p></div>
            </div>
        </a><a href='https://www.publico.pt/2022/11/16/culturaipsilon/noticia/morreu-francisco-laranjo-pintor-exdirector-faculdade-belas-artes-porto-2027973'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu Francisco Laranjo, pintor e ex-director da Faculdade de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTTu9g78i8bhGEI3ufdf1YGdVzIy04MiHxxqHOfGYd969TbDcBGk9y6k_QWwqSIVsTzJ-W8UGnm" alt="Morreu Francisco Laranjo, pintor e ex-director da Faculdade de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A sua carreira artística iniciou-se em 1978. Tinha 67 anos.</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/noticia/vida/2022/11/16/morreu-o-artista-plastico-francisco-laranjo/308290/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu o artista plástico Francisco Laranjo - Renascença</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRVsiRMYTFAfmOYKe65UOtQIZx80KQWCgV_ztlEr0v3gcts94S3Cnhx7V80ypII4ujKgZT2JBhH" alt="Morreu o artista plástico Francisco Laranjo - Renascença" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O artista plástico Francisco Laranjo faleceu esta quarta-feira, no Porto, vítima de um tumor cerebral. A sua obra é marcada pela pintura, mas destacou-se&nbsp;...</p></div>
            </div>
        </a><a href='https://www.porto.pt/pt/noticia/artista-plastico-francisco-laranjo-faleceu-aos-67-anos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Artista plástico Francisco Laranjo faleceu aos 67 anos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTCJJQ7qMIKkhJakM7cg6AOjN3zfe3GHhbXa8RpCGf2WzNIF1KaBPpIUcDnIf0kfjw8urxbeFXm" alt="Artista plástico Francisco Laranjo faleceu aos 67 anos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Recebeu, em 2009, a Medalha de Mérito, Grau Ouro, da Câmara do Porto.</p></div>
            </div>
        </a><a href='https://www.jn.pt/artes/morreu-o-artista-plastico-e-professor-francisco-laranjo-15357154.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu Francisco Laranjo, um artista &quot;lúcido e emocional&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT-iYDGcX5S22psFU_0LLc-lXre7hYpmtlX3xX7tpkw1UVu5SVl2JcVL43S3czam6eVv10s1_1O" alt="Morreu Francisco Laranjo, um artista &quot;lúcido e emocional&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O artista plástico Francisco Laranjo faleceu esta quarta-feira, aos 67 anos, no Porto, vítima de doença oncológica. O seu percurso artístico e profissional&nbsp;...</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/pais/2114635/marcelo-lamenta-morte-de-francisco-laranjo-um-curioso-nato'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marcelo lamenta morte de Francisco Laranjo, um &quot;curioso nato&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQQOeibLv6t0m2WwaWKx91SQpbGifrB8ACbpcAV9IUOrdHzPQbVE6GcnXIQxoBO_jINAucdyR7S" alt="Marcelo lamenta morte de Francisco Laranjo, um &quot;curioso nato&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Presidente da República diz que o artista se destacou internacionalmente &quot;pela sua obra em múltiplas vertentes&quot;.</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/cultura/morreu-o-professor-francisco-laranjo_v1447516'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu o professor Francisco Laranjo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQFsTfLq1qhKqihXBPvIoK-S4fqwnOKMIISaZ06B1KUMmTa0ykifZahUMO9DRfKgyQCJjcEnu_d" alt="Morreu o professor Francisco Laranjo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O artista plástico formado na Escola de Belas Artes do Porto em finais dos anos 70 destacou-se na pintura, mas também noutras áreas. Tinha 67 anos.</p></div>
            </div>
        </a>
        </Template></>;
}