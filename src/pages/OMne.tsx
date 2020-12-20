import React, { FC } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const OMne: FC = () => {
  return (
    <Grid container wrap="wrap" spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h2" gutterBottom>
          O mně
        </Typography>
      </Grid>
        <Grid item xs={12}>            
          <img src={process.env.PUBLIC_URL + "/OMne.png"} alt="O mně" />
        </Grid>
        <Grid item xs={12}>
            <Typography variant="body1" gutterBottom align="justify">
                <em>&quot;Mám rád lidi, kteří někdy umějí vyjet mimo ze svých denních kolejí.&quot;</em>&nbsp;—&nbsp;F. R. Čech<br /><br />
                Ano, mám rád lidi, jsem nadšený fotograf a koleje jsou můj denní chléb. Filozofie mého nadšení
                spočívá v tom, že stejně jako fotograf v ateliéru aranžuje své modely, tak já aranžuji hrdiny
                svých fotek v prostředí, ve kterém se pohybují. Baví mne přesvědčit je, aby &quot;vyjeli ze
                svých kolejí&quot; a přijali za svou kompozici, kterou jsem jim ušil na míru.<br />
                Budu rád, pokud se vám moje záběry budou líbit a těším se, že možná právě vy se mnou příště
                vyjedete mimo své koleje.<br />
                Fotky, vznikající pomocí výtečné techniky NIKON a SIGMA - ART, se zrodily v hlavě Blížence
                skvělého ročníku 65.
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="body1" gutterBottom align="right">
                Milan
            </Typography>
        </Grid>
    </Grid>
  );
};

export default OMne;
