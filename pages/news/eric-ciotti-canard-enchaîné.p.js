import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Eric Ciotti Canard enchaîné</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Eric Ciotti Canard enchaîné"/>
        <meta name="description" content="Trending News about Eric Ciotti Canard enchaîné" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Eric Ciotti Canard enchaîné</h1>
            <Image width={800} height={500} src="https://www.francetvinfo.fr/pictures/RuP3t_77AZfod4BA2czx-JpWNjU/1500x843/2022/11/16/phpdjdFAf.jpg" alt="Eric Ciotti Canard enchaîné"/>
            <h3>Recent News</h3>
            <a href='https://www.francetvinfo.fr/politique/les-republicains/politique-le-canard-enchaine-affirme-que-l-ex-femme-d-eric-ciotti-a-cumule-divers-emplois-a-l-assemblee-a-nice-et-au-departement_5480514.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Politique : &quot;Le Canard enchaîné&quot; affirme que l&#39;ex-femme d&#39;Eric Ciotti ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQZsnDuWN6vPhoCxYp0pcG10sRbiO7vxC7hMBAjUhlUgT0bBXz-fol_VmDjG5ZrFPu3d10Exo0A" alt="Politique : &quot;Le Canard enchaîné&quot; affirme que l&#39;ex-femme d&#39;Eric Ciotti ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le député LR, candidat à la présidence de son parti, s&#39;est dit &quot;bassement attaqué&quot;.</p></div>
            </div>
        </a><a href='https://france3-regions.francetvinfo.fr/provence-alpes-cote-d-azur/alpes-maritimes/nice/alpes-maritimes-eric-ciotti-pris-dans-la-tourmente-apres-les-revelations-du-canard-enchaine-2655976.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EXCLU. Eric Ciotti dans la tourmente après l&#39;article du Canard ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRnoVcmUiQjVyDH2L7knKMiKVRYip5JDo6CxMc6RowFykQ__zBzb56r_Hg4lOUppgE6qyPcPk22" alt="EXCLU. Eric Ciotti dans la tourmente après l&#39;article du Canard ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Regards glaciaux. La scène remonte au 13 octobre dernier, lors du salon des maires des Alpes-Maritimes. Un épisode qui résume bien la fronde opposant les deux&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bfmtv.com/politique/les-republicains/le-canard-enchaine-affirme-que-l-ex-femme-d-eric-ciotti-a-cumule-plusieurs-emplois-politiques_AN-202211160298.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Le Canard enchaîné&quot; affirme que l&#39;ex-femme d&#39;Éric Ciotti a cumulé ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTbEMGCfb1iSeQa5RUK5WfBP_sqDMHOoNNbG0K7sFyLr4SnvdVi--wt05DtJP7m5RI3gaUastSI" alt="&quot;Le Canard enchaîné&quot; affirme que l&#39;ex-femme d&#39;Éric Ciotti a cumulé ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Canard enchaîné affirme que Caroline Magne a occupé plusieurs emplois politiques en même temps, dont certains auprès du député. L&#39;élu des Alpes-Maritimes&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lemonde.fr/politique/article/2022/11/16/eric-ciotti-refute-tout-cumul-douteux-d-emplois-de-son-ex-femme_6150123_823448.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eric Ciotti réfute tout cumul douteux d&#39;emplois de son ex-femme</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcREAYK_KIKEwiL97mLHmlEz2cOZxvIA1BzB11Xg6HGzwPqiA8fCGqqqIZd72dYtWFd3yR2feyEW" alt="Eric Ciotti réfute tout cumul douteux d&#39;emplois de son ex-femme" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le « Canard enchaîné » affirme mercredi que l&#39;ex-épouse du député LR a cumulé plusieurs contrats auprès de son époux à l&#39;Assemblée nationale,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.huffingtonpost.fr/politique/article/l-ex-epouse-d-eric-ciotti-visee-par-le-canard-enchaine-pour-cumul-d-emplois-le-depute-se-dit-bassement-attaque_210310.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son ex-épouse visée par une enquête du &quot;Canard Enchaîné&quot; pour ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRV195Og0de8FBgSHH-XbgaqkZ6U2g1ca4rSshRnKzhlwlrV5QLDD1h8GVU5ZrSpc0_AukGFe8D" alt="Son ex-épouse visée par une enquête du &quot;Canard Enchaîné&quot; pour ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Selon « Le Canard Enchaîné », Caroline Magne a occupé jusqu&#39;à trois emplois en même temps », dont un comme collaboratrice parlementaire du député entre 2007&nbsp;...</p></div>
            </div>
        </a><a href='https://www.20minutes.fr/politique/4010267-20221116-eric-ciotti-candidat-presidence-lr-dement-tout-cumul-emplois-douteux-ex-femme'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eric Ciotti, candidat à la présidence de LR, dément tout cumul d ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ3FZvF-CRIm_Gg4MDAE5jhj_8f-1XIkLsXqA8ngsSjYcGhPZvxoC0DtESW5j3yGYIcUmk5FmJ_" alt="Eric Ciotti, candidat à la présidence de LR, dément tout cumul d ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Le Canard enchaîné » détaille les fonctions que son ex-épouse a occupées concomitamment comme collaborateur parlementaire à l&#39;Assemblée, à ses côtés, à la&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}