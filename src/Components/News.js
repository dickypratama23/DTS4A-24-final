import {Link} from 'react-router-dom'
import {
    Box,
    Grid,
    CardActionArea
} from "@mui/material";

import CardNews from "./CardNews";

const News = ({news, category}) => {
    return (
        <Box sx={{flexGrow: 1, mt: 3}}>
            <Grid container spacing={2}>
                {
                    news.length > 0 && news[0].map((item, i) => {
                        return (
                            <Grid key={i} item xs={3}>
                                <CardActionArea component={Link} to={`${i}?category=${category}`}>
                                    <CardNews item={item}/>
                                </CardActionArea>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    );
}

export default News