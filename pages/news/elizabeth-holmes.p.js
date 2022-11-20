import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Elizabeth Holmes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Elizabeth Holmes"/>
        <meta name="description" content="Trending News about Elizabeth Holmes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Elizabeth Holmes</h1>
            <Image width={800} height={500} src="https://www.bloomberglinea.com/resizer/3tJCGNVCsMD9hztsqeZhkLxa9fE=/1024x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/bloomberglinea/BUA6OI3IZVDN7AGP7YV7RT7UM4.jpg" alt="Elizabeth Holmes"/>
            <h3>Recent News</h3>
            <a href='https://www.bloomberglinea.com.br/2022/11/19/elizabeth-holmes-fundadora-da-theranos-e-condenada-a-mais-de-11-anos-de-prisao/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elizabeth Holmes, fundadora da Theranos, é condenada a mais de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR-xsqMGL37HxNgb-8rkR25y_uNSzz-iRlD7n8QcHpnsB-CVjtxtpL8wLzEeYyZgJPDwZIyy2ys" alt="Elizabeth Holmes, fundadora da Theranos, é condenada a mais de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Empreendedora cuja história inspirou série e filme foi considerada culpada por ter enganado investidores e consumidores com sua empresa de exames de sangue.</p></div>
            </div>
        </a><a href='https://www.correiodopovo.com.br/jornalcomtecnologia/elizabeth-holmes-%C3%A9-condenada-a-11-anos-de-pris%C3%A3o-por-fraude-com-theranos-1.925302'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elizabeth Holmes é condenada a 11 anos de prisão por fraude com ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSCmzzYlc5geIhugFeRiTV1CBDUByAXcalIQdTQxVMNp2pK_AReKG6pU3M9MllU28kXCk-1swut" alt="Elizabeth Holmes é condenada a 11 anos de prisão por fraude com ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A empresária americana Elizabeth Holmes foi condenada nesta sexta-feira (18) a pouco mais de 11 anos por fraudar investidores com a Theranos, sua empresa de&nbsp;...</p></div>
            </div>
        </a><a href='https://glamurama.uol.com.br/notas/condenada-nesta-sexta-a-11-anos-de-prisao-elizabeth-holmes-esta-sendo-considerada-sortuda-entenda/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Condenada nesta sexta a 11 anos de prisão, Elizabeth Holmes está ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSHbOS022iVIykdPHvJcviQ8xZ-3bpRG6nxCSBQ-SKaEUFpRHX0ZlCsg3X_a1XAnhy39F4EAXbu" alt="Condenada nesta sexta a 11 anos de prisão, Elizabeth Holmes está ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em julgamento desde janeiro, depois de vários adiamentos para sentar no banco dos réus, Elizabeth Holmes foi finalmente condenada nessa sexta-feira a viver&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hojeemdia.com.br/geral/elizabeth-holmes-fundadora-da-empresa-theranos-e-condenada-a-11-anos-de-pris-o-por-fraude-1.933418'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elizabeth Holmes, fundadora da empresa Theranos, é condenada a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSTMrLp_zPSGBmgZqvaimnnGBkdfYC_5EZaSqdA46G7EGvsRW27Uh82Cmrym5ENelNPXByd2M1z" alt="Elizabeth Holmes, fundadora da empresa Theranos, é condenada a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A empresária Elizabeth Holmes, 38 anos, foi condenada a 11 anos de prisão por fraude com a empresa Theranos, no qual ela é fundadora, nesta sexta-feira (18)&nbsp;...</p></div>
            </div>
        </a><a href='https://epocanegocios.globo.com/empresas/noticia/2022/11/empresaria-que-chegou-a-ser-considerada-nova-steve-jobs-e-condenada-a-11-anos-de-prisao.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Empresária que chegou a ser considerada &#39;nova Steve Jobs&#39; é ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQVWG9sgChlIGtdGa89-fn4JztbyoUEqjHoeYVwm3rGURkOGVSpI3ZDYD_WvqV7P5rHvDisAbl7JQ" alt="Empresária que chegou a ser considerada &#39;nova Steve Jobs&#39; é ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elizabeth Holmes, uma polêmica empresária do Vale do Silício, foi condenada nesta sexta-feira (18/11) a 11 anos de prisão por um juiz da Califórnia,&nbsp;...</p></div>
            </div>
        </a><a href='https://24.sapo.pt/atualidade/artigos/elizabeth-holmes-e-condenada-a-11-anos-de-prisao-por-fraude-com-theranos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lembra-se de Elizabeth Holmes? Foi condenada a 11 anos de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTT53xNXk_G55uA441j6azKhIdyK3bYqRahPAatgWcEH347QGmW9DHzlqe76uEWQ2KgIMLPd0ra" alt="Lembra-se de Elizabeth Holmes? Foi condenada a 11 anos de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A empresária americana Elizabeth Holmes foi condenada nesta sexta-feira cerca de 11 anos de prisão por defraudar investidores com a Theranos, a sua empresa&nbsp;...</p></div>
            </div>
        </a><a href='https://www.moneyreport.com.br/justica/ex-estrela-do-vale-do-silicio-e-condenada-a-11-anos-de-prisao-por-fraude/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-estrela do Vale do Silício é condenada a 11 anos de prisão por ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-agGfQIJVTTJhXt-XE0lTl3okOQJEd5RIaSwMWFIz6nFrBaMs6rpox59YUsvYocIuxmnBjr4t" alt="Ex-estrela do Vale do Silício é condenada a 11 anos de prisão por ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fundadora da Theranos, Elizabeth Holmes enganou até Rupert Murdoch com a promessa de uma tecnologia inexistente para exames de sangue Em 2003, aos 19 anos,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}