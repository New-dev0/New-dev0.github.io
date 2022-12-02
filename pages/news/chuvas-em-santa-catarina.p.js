import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Chuvas em Santa Catarina</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Chuvas em Santa Catarina"/>
        <meta name="description" content="Trending News about Chuvas em Santa Catarina" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Chuvas em Santa Catarina</h1>
            <Image width={800} height={500} src="https://www.rbsdirect.com.br/filestore/2/0/1/4/6/2/4_fde26a339312c1f/4264102_577ff79bb23ff19.jpg?w=1200&h=630&a=c&version=1575255600" alt="Chuvas em Santa Catarina"/>
            <h3>Recent News</h3>
            <a href='https://gauchazh.clicrbs.com.br/geral/noticia/2022/12/com-chuvas-fortes-e-persistentes-santa-catarina-decreta-situacao-de-emergencia-clb5gjjwy0038014uhkw1figx.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Com chuvas fortes e persistentes, Santa Catarina decreta situação ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTI5vfkzkQaicy4jGxufGjw6D9m9Do2Pfhe9gtZytkyhqUpFPvFHhNsB0xAKALzDCkxWaj2YBWm" alt="Com chuvas fortes e persistentes, Santa Catarina decreta situação ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dezessete municípios estão em estado de calamidade pública; outros quatro já entraram com a documentação para fazer o mesmo.</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/cotidiano/2022/12/chuva-em-santa-catarina-causa-ao-menos-2-mortes-e-alaga-shopping.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chuva em Santa Catarina causa ao menos 2 mortes e alaga até ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ3YxJ6nYG2qTlsNqaBHdY2FvJlMW70bXOckZ41HKVlcB6AQIat9wXdZtCih7KwmD_OjeqGeF6h" alt="Chuva em Santa Catarina causa ao menos 2 mortes e alaga até ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O alerta vale para 107 municípios de todo o litoral catarinense, serra catarinense, metropolitana de Curitiba (PR) e nordeste do Rio Grande do Sul. No Paraná,&nbsp;...</p></div>
            </div>
        </a><a href='https://gauchazh.clicrbs.com.br/geral/noticia/2022/12/chefe-da-defesa-civil-de-sc-afirma-que-ao-menos-mil-pessoas-foram-realocadas-em-razao-das-chuvas-clb55sggq002o01705z396cl0.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chefe da Defesa Civil de SC afirma que ao menos mil pessoas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTgw-nhIercUmwbKDoKZJuI0wnzfQVTEcdK4VOfOz14xHng_gGUhUDctOK7_J6VzJQHQIAKSFXH" alt="Chefe da Defesa Civil de SC afirma que ao menos mil pessoas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo David Busarello, a situação no Estado catarinense é &quot;bem dramática e bem difícil&quot; e o número de deslocados deve subir.</p></div>
            </div>
        </a><a href='https://www.terra.com.br/noticias/governo-de-santa-catarina-decreta-situacao-de-emergencia-apos-fortes-chuvas-no-estado,cb25566f63e4dc2617e290f5bedfcdb6k9csk9ei.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Governo de Santa Catarina decreta situação de emergência após ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTxuPCjC8uWer4puhCxzlsk-PEHZDOjGIKYBJz8VsjDz0ISmGDAAuvGDEuuy7MCCY34IVb8kT7N" alt="Governo de Santa Catarina decreta situação de emergência após ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“O momento é delicado e exige a atenção e cuidado de todos, especialmente nas estradas e locais de riscos de deslizamentos e inundações. A orientação é para que&nbsp;...</p></div>
            </div>
        </a><a href='https://g1.globo.com/sc/santa-catarina/noticia/2022/12/01/animais-e-familias-isoladas-apos-chuvas-sao-resgatados-de-barco-em-sc-video.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Animais e famílias isoladas após chuvas são resgatados de barco ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcScEMqKMDlX_UH-SOthxWVDvozEuXdn7XVLACHzMBN52plohG7WP-TSvFXQr9pPSghEcu6R9P8X" alt="Animais e famílias isoladas após chuvas são resgatados de barco ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em Gravatal, no Sul catarinense, 37 famílias foram resgatadas na Comunidade da Seri, informou a Polícia Militar Ambiental. A prefeitura afirmou que, desde&nbsp;...</p></div>
            </div>
        </a><a href='https://ndmais.com.br/tempo/sc-decreta-situacao-de-emergencia-apos-destruicao-causada-pelas-chuvas-veja-detalhes/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SC decreta situação de emergência após destruição causada pelas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSG75SHGBY0duM5VRrmQRjZvJeySbPrh4HDUlQGIPoWznU3A-UahA5nA4NwVjqSCjG-HeMVG5YX" alt="SC decreta situação de emergência após destruição causada pelas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Santa Catarina decretou situação de emergência nesta quinta-feira (1º) devido aos estragos causados pelas fortes chuvas que atingem o Estado desde sábado&nbsp;...</p></div>
            </div>
        </a><a href='https://g1.globo.com/sc/santa-catarina/noticia/2022/12/01/chuva-deixa-mortos-causa-inundacoes-bloqueia-rodovias-e-suspende-aulas-em-sc-fotos.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chuva deixa mortos, bombeiro desaparecido, causa inundações ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRpB-KOdlVZAEJwGzbS2DAc2cSAmk97_SyPlhXlM3aAPjMBgsdU0dsOym2Tp2xLk2QF7tQK3fbk" alt="Chuva deixa mortos, bombeiro desaparecido, causa inundações ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A chuva forte e intermitente deixou ao menos duas pessoas mortas e um bombeiro militar desaparecido nesta quinta-feira (1º) em Santa Catarina.</p></div>
            </div>
        </a>
        </Template></>;
}