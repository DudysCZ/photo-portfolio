import React, { FC }  from 'react';
// import { useState } from 'react';
// import { photosCollection } from '../utils/firebase';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// import firebase from 'firebase/app';

const Import: FC = () => {

    // !!!!!!!!!!! REMOVE of <React.StrictMode> from index.tsx is NECESSARY, for no import duplicities !!!!!!!!!!!!!!!
    // https://andreasheissenberger.medium.com/react-components-render-twice-any-way-to-fix-this-91cf23961625  

    // const [ok, setOk] = useState<boolean>(false);
    // const firestore = firebase.firestore(); 

    // const prefix = "sv";
    // const album = "fkBW954h4LV0VshLwr4Q";
    // const captions = [
    //     'DARINCE SLZELY NA SLUNCI OČI, TAK SI JE OTÍRALA. TO BYLA MOJE CHVÍLE',
    //     "LÁDIK MĚL TIK, TAK JSEM MU HO TAJNĚ ULOVIL",
    //     "TAKOVÉ VÝRAZY TVÁŘÍ BYCH ASI NENAARANŽOVAL. TÍM ALE ZÁBĚR NEZTRÁCÍ HODNOTU",
    //     'MAZAČKA SI ZAPÁLILA PŘESTO, ŽE ROK NEKOUŘILA. BYL JSEM POCTĚN',
    //     "MÍNUS 26 NA POSUNU. NO A KOHO TO ZAJÍMÁ...?!",
    //     "DALO VELKOU PRÁCI, ABY SE NESMÁLI MÉMU ARANŽMÁ. PŘESTO ZBYTKY SMÍCHU VIDÍM",
    //     "MOJI SPOLUBOJOVNÍCI MODRÉ ARMÁDY. BARDZO FAJNY KOLEKTIV",
    //     "NEBUDETE MI VĚŘIT, ALE TOHLE JSEM FAKT NEARANŽOVAL",
    //     "UŽÍVÁ PROSTENAL - ZÁBĚR JAK Z REKLAMY",
    //     "OD PRASKLÉ HYDRAULIKY BYL VÝKOP PLNÝ OLEJE. MUSEL JSEM PŘITVRDIT, ABY TAM VLEZLI",
    //     "OBRUČE KOL VAGÓNŮ SKÝTAJÍ OCHRANU A NĚKDY NECHTĚNÝ VÝLET",
    //     "PRÝ MĚ ZABIJE, KDYŽ TO VYSTAVÍM. NO A BYLO TO V PRAZE, VARŠAVĚ A GYORU",
    //     "PO PĚTI LETECH FOCENÍ JSEM DOSÁHL TOHO, ŽE MNĚ UŽ CHLAPI NEVNÍMAJÍ",
    //     "DALŠÍ DVOJČÁTKA DO SBÍRKY S MOTORÁČKEM OD FRÝDKU",
    //     "MAREK PŘI FOCENÍ VŽDY ZTVRDNE. MUSEL JSEM PROTO NENÁPADNĚ",
    //     '"KOLEGOVA" PŘILBA. DALŠÍ SNÍMEK, DALŠÍ DOUTNÍK...',
    //     "...A NÉ POSLEDNÍ. ALE KDYŽ TI CHLAPI NEMAJÍ CHYBU",
    //     "VYTÝČENÍ, VÝKOP A OPRAVA KABELU NENÍ JEDNODUCHÁ ZÁLEŽITOST",
    //     "DEPRESE. NENAŠEL JSEM VHODNĚJŠÍ PŘÍMĚR",
    //     "AMÍCI MĚLI VE VIETNAMU V PŘILBÁCH MARYLIN. NA POSUNU JSOU TROCHU DÁL"
    // ];

    // if (ok !== true)
    // {
    //     const writeBatch = firestore.batch();

    //     for (let i = 1; i < 14; i++) {
    //         const documentRef = photosCollection.doc();
    //         writeBatch.set(documentRef, {
    //             album: album,
    //             dateCreated: firebase.firestore.Timestamp.now(),
    //             extension: "jpg",
    //             filename: prefix + i,
    //             position: i,
    //             thumbnail: prefix + i + "m",
    //             caption: "..."   
    //         });
    //     }
    //     writeBatch.commit().then(() => {
    //         console.log('Successfully executed batch.');
    //       });
    //     setOk(true);
    // }


    return (
        <Grid container wrap="wrap" spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h2" gutterBottom>
                    OK
                </Typography>
            </Grid>
        </Grid>
    )
};

export default Import;