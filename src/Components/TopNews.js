import React, {useEffect, useState} from 'react';
import {
    Box,
    Grid,
    Typography,
    Backdrop,
    CircularProgress,
    Divider
} from '@mui/material';
import Carousel from "react-material-ui-carousel";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import {useDispatch, useSelector} from "react-redux";
import {getTopNews} from "../Features/newsSlice";
import {showFormattedDate} from "../utils";

const Loading = () => {
    return (
        <Backdrop
            sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
            open={true}
        >
            <CircularProgress color="inherit"/>
        </Backdrop>
    )
}

const TopNews = ({category}) => {
    const [content, setContent] = useState([]);
    const {loading, topNews} = useSelector((state) => ({...state.app}))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTopNews({category}))
    }, [category]);

    function Item(props) {
        return (
            <>
                <img src={props.item.urlToImage} alt="" width={"100%"} height={"350"}/>
            </>
        )
    }

    return (
        <>
            {
                loading ? (<Loading/>) : (
                    <Box sx={{flexGrow: 1, mt: 3}}>
                        <Grid container spacing={5}>
                            <Grid item xs={4}>
                                <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "justify"}}>
                                    {content.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{textAlign: "justify"}}>
                                    {content.content}
                                </Typography>
                                <Divider sx={{mt: 1, mb: 1}}/>
                                <Typography gutterBottom variant="body2" color="text.secondary"
                                            sx={{textAlign: "justify"}}>
                                    {content.author} - {showFormattedDate(content.publishedAt)}
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Carousel
                                    navButtonsAlwaysVisible={true}
                                    NextIcon={<NavigateNextIcon/>}
                                    PrevIcon={<NavigateBeforeIcon/>}
                                    onChange={(e) => setContent(topNews[e])}
                                >
                                    {
                                        topNews.length > 0 ? topNews.map((news, i) => <Item key={i} item={news}/>) : undefined
                                    }
                                </Carousel>
                            </Grid>
                        </Grid>
                    </Box>
                )
            }
        </>
    );
}

export default TopNews