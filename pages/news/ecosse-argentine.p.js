import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ecosse Argentine</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ecosse Argentine"/>
        <meta name="description" content="Trending News about Ecosse Argentine" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ecosse Argentine</h1>
            <Image width={800} height={500} src="https://medias.lequipe.fr/img-video-cover/1500000001713369/640/0" alt="Ecosse Argentine"/>
            <h3>Recent News</h3>
            <a href='https://www.lequipe.fr/Rugby/Actualites/Tests-le-resume-d-ecosse-argentine-en-video/1365747'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tests : le résumé d&#39;Écosse-Argentine en vidéo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTEcJWFC_Hb9Mb_hjtt5Bf4JdHYbkWbPdsKWurJdYYTqEsa4Ly2W-CCSdVtYwMNT3C7vWAh-aYZ" alt="Tests : le résumé d&#39;Écosse-Argentine en vidéo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Retrouvez les temps forts du test-match opposant l&#39;Écosse à l&#39;Argentine (52-29), samedi à Murrayfield. 19 novembre 2022 à 12h53. ma liste. commenter.</p></div>
            </div>
        </a><a href='https://actu.fr/sports/rugby/pro/video-ecosse-argentine-marcos-kremer-ne-se-maitrise-pas-et-ecope-d-un-carton-rouge_55322261.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDEO. Écosse-Argentine : Marcos Kremer ne se maîtrise pas et ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSz52c0KrJxI_JSBROeNwyHTi7iX5xKV5Qbon4KU2zEycRZHiE1iS3l2hQQxPZJc-oTOD1tot_w" alt="VIDEO. Écosse-Argentine : Marcos Kremer ne se maîtrise pas et ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>RUGBY. Le troisième ligne de l&#39;Argentine, Marcos Kremer, a reçu un carton rouge face à l&#39;Écosse pour un geste dangereux dans un ruck avec un déblayage&nbsp;...</p></div>
            </div>
        </a><a href='https://www.quinzemondial.com/actualites-international/ecosse-argentine--marcos-kremer-voit-rouge-apres-son-geste-dangereux-sur-jamie-ritchie-video-772745'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Écosse-Argentine : Marcos Kremer voit rouge après son geste ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSXGbdm5YPkBmC9aiyreNuoobrs7jwEvI2z3z53FtTNA0UsAUTF_-vfzqg3M-Aqkda2IgtdMiuB" alt="Écosse-Argentine : Marcos Kremer voit rouge après son geste ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un geste idiot de la part de l&#39;Argentin. Zapping Quinze Mondial « Je reviens de loin&quot;, Mathieu Bastareaud se délecte après son retour en force.</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/sport/rugby/direct-ecosse-argentine-suivez-le-test-match-de-rugby-a-murrayfield-en-live-6e470dee-6752-11ed-8d02-f374de6baa45'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rugby. L&#39;Écosse surclasse l&#39;Argentine, rapidement réduite à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRJYUARF7SvsQ5DFLKZoTAMb9XylmZTHKKpet7Xwf4FOufoaaPa0_IUwX2mEq9Rz5Vz8sqE-6fv" alt="Rugby. L&#39;Écosse surclasse l&#39;Argentine, rapidement réduite à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce samedi 19 novembre, l&#39;Écosse s&#39;est largement imposée face à l&#39;Argentine, à Murrayfield (52-29). Le XV du Chardon, très inspiré, a inscrit la bagatelle de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/sports/rugby/rugby-12-essais-et-des-cartons-a-gogo-le-resume-video-de-la-victoire-de-l-ecosse-contre-l-argentine-20221119'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rugby : 12 essais et des cartons à gogo, le résumé vidéo de la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQqHKIeZrjMyZJQ6_bdA88qGXzNjmT_YojtooGKu14xZoHaPFth3K2rcK_EoU-yEQpQ7F-EQU_d" alt="Rugby : 12 essais et des cartons à gogo, le résumé vidéo de la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans un match fou, l&#39;Écosse s&#39;est imposée 52 à 29 contre l&#39;Argentine.</p></div>
            </div>
        </a><a href='https://www.boursorama.com/actualite-economique/actualites/l-ecosse-domine-l-argentine-355db32769b1ed2b809c93dbd8619073'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>L&#39;Écosse domine l&#39;Argentine</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRYKeKYOSIAOcFGulufM5wr55_jcBcxJ5ctZ0mLhM4XSbDXHnAZW7SRqb8SotO70PX7qsb4bl8k" alt="L&#39;Écosse domine l&#39;Argentine" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>par Romain Strozza (iDalgo) Handicapé par un carton rouge dès la 22e minute, l&#39;Argentine n&#39;a rien pu faire face à la puissance écossaise et subit sa&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}