import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Richie Campbell</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Richie Campbell"/>
        <meta name="description" content="Trending News about Richie Campbell" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Richie Campbell</h1>
            <Image width={800} height={500} src="https://famashow.pt/wp-content/uploads/2022/11/242006698_350056920178874_993614768841552334_n-1-e1669720370175.jpg" alt="Richie Campbell"/>
            <h3>Recent News</h3>
            <a href='https://famashow.pt/nas-redes/as-primeiras-imagens-de-barbara-bandeira-e-de-richie-campbell-juntos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>As primeiras imagens de Bárbara Bandeira e de Richie Campbell ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSYGF-q1NYR9nahAnbAcQiR-WztoVNOq3Di_x8exX5N4iD1A59_Mh7eImVBKo2eiHiuwe2K6U7E" alt="As primeiras imagens de Bárbara Bandeira e de Richie Campbell ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os dois cantores estiveram na Altice Arena, em Lisboa, onde assistiram ao concerto da artista espanhola Rosalía. Os dois, que foram assistir ao espetáculo&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hiper.fm/romance-assumido-barbara-bandeira-e-richie-campbell-aparecem-juntos-em-publico/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Romance assumido? Bárbara Bandeira e Richie Campbell ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQmK1bGoE9_fNZ0eJRDUDm1nQc4ZRPZaK_GWAW5-uMbVg89iAVBjeDaxU1nBwZ3ev-6Utchc2Hq" alt="Romance assumido? Bárbara Bandeira e Richie Campbell ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As especulações adensaram-se no último fim de semana, quando os artistas surgiram juntos na Altice Arena, em Lisboa, para assistirem ao concerto da cantora&nbsp;...</p></div>
            </div>
        </a><a href='https://www.novagente.pt/barbara-bandeira-primeiras-imagens-juntos-cantora-apanhada-com-richie-campbell'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bárbara Bandeira - As primeiras imagens juntos: Cantora ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS4irmPCgdh7sAAkisaC4R8WAyzjHrsz1dSEs-2Y22FJCg2yaybcOfzOrEYz5wSoN-ggRzOp0zg" alt="Bárbara Bandeira - As primeiras imagens juntos: Cantora ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bárbara Bandeira e Richie Campbell surgem juntos num evento público, confirmando, assim, os rumores de que são um casal. Veja as imagens do momento em&nbsp;...</p></div>
            </div>
        </a><a href='https://www.atelevisao.com/famosos/barbara-bandeira-e-richie-campbell-intensificam-rumores-de-relacao-ao-serem-apanhados-juntos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bárbara Bandeira e Richie Campbell intensificam rumores de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTdQNSVoRHlLGtpLxyjsI6vSEkUAgMuJ3PCM1C1Kz-ITAMHgy5FJpKAMmOrUL4GurrmIM2Z--VNPA" alt="Bárbara Bandeira e Richie Campbell intensificam rumores de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Após se ter separado de Kasha, Bárbara Bandeira parece que voltou a acreditar no amor e, segundos os últimos rumores, a cantora está numa relação com o&nbsp;...</p></div>
            </div>
        </a><a href='https://www.impala.pt/famosos/nacionais/barbara-bandeira-as-primeiras-imagens-juntos-cantora-apanhada-com-richie-campbell/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bárbara Bandeira &#39;apanhada&#39; com Richie Campbell. Eis as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcST9IX46xqTjUZ-0NoYne6m3hPVjbEx5Mvfnuflyi5pxZkmp8HfBxpDrTbRoz-BQuZQo7dqwmVG" alt="Bárbara Bandeira &#39;apanhada&#39; com Richie Campbell. Eis as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bárbara Bandeira e Richie Campbell surgem juntos num evento público, confirmando, assim, os rumores de que são um casal. Veja as imagens do momento em causa&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}