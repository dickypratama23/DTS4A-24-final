import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Divider} from "@mui/material";

const CardNews = ({item}) => {
    return (
        <Card elevation={0}>
            <CardContent>
                <Typography gutterBottom variant="body" sx={{textAlign: "justify"}}>
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{textAlign: "justify"}}>
                    {item.content} <a href={item.readMoreUrl} target="_blank">readmore</a>
                </Typography>
                <Divider sx={{mt: 1, mb: 1}}/>
                <Typography gutterBottom variant="body2" color="text.secondary" sx={{textAlign: "justify"}}>
                    {item.author} - {item.date}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardNews