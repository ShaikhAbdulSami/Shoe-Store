import React from 'react'
import { useParams } from "react-router-dom";
import { Grid, Typography, Paper, makeStyles } from "@material-ui/core";
import shoes from "./Item.json"

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: 2,
        textAlign: 'center',
        color: "secondary",
    }
})

export const ShoesDetails = () => {
    const classes = useStyles();
    const { shoe } = useParams();
    const shoeData = shoes[shoe];
    if (!shoeData.name) {
        return <h2>Product Not Found</h2>
    }
    const { name, img, desc } = shoeData;
    return (
        <div>
            <h2 style={{ "textAlign": "center" }}>About {name}</h2>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <img src={img[0]} alt={name} width={250} height={250} style={{ "margin": "10px" }} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <img src={img[1]} alt={name} width={250} height={250} style={{ "margin": "10px" }} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <img src={img[2]} alt={name} width={250} height={250} style={{ "margin": "10px" }} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <img src={img[3]} alt={name} width={250} height={250} style={{ "margin": "10px" }} />
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={4}>

                <Grid item xs="auto" sm="auto" md="auto">
                    <Typography>{desc}</Typography>
                </Grid>
            </Grid>
        </div>
    )
}
