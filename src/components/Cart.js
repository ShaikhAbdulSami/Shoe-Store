import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        margin: 10,
    },
    paper: {
        textAlign: 'center',

    }
});

export const Cart = () => {
    const classes = useStyles();
    const { data, total, removeFromCart, addQuantity, subtractQuantity } = useContext(GlobalContext);

    useEffect(() => {
        localStorage.setItem('cartData', JSON.stringify(data));
        localStorage.setItem('totalAmount', JSON.stringify(total));
        // localStorage.removeItem('totalAmount');
        // localStorage.removeItem('totalAmount');
    }, [data, total]);
    return (
        <div>
            <h1 style={{ "textAlign": "center" }}>Your Cart</h1>
            <ul style={{ "marginTop": "10px" }}>
                <Grid container spacing={4}>
                    {data.length ? (data.map((shoe) => {
                        return (
                            <Grid item xs={12} sm={6} md={4}>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            className={classes.media}
                                            image={shoe.img[0]}
                                            title={shoe.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {shoe.name}
                                            </Typography>

                                            {/* <Typography variant="body2" color="textSecondary" component="p">
                                                {shoe.desc}
                                            </Typography> */}

                                            <Typography variant="h5">
                                                Price: ${shoe.changedPrice}
                                            </Typography>
                                            <div style={{ "display": "flex", "textAlign": "center", "justifyContent": "center" }}>
                                                <Button  onClick={() => subtractQuantity(shoe.id)}>
                                                    -
                                                </Button>
                                                <Typography variant="h5">
                                                    Quantity: {shoe.quantity}
                                                </Typography>
                                                <Button  onClick={() => addQuantity(shoe.id)}>
                                                    +
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button  onClick={() => removeFromCart(shoe.id)}>
                                            Remove From Cart
                                        </Button>
                                    </CardActions>
                                </Card >
                            </Grid>
                        )
                    })) : <p style={{ "textAlign": "center" }}>There are no products in cart</p>}
                </Grid>
            </ul>

            <h1 style={{ "textAlign": "center" }}><b>Total Amount:</b> {total ? total : 0}$</h1>
        </div>
    )
}