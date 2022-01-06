import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
  CardActions,
  Button,
  styled,
  Collapse,
} from "@material-ui/core";
import { ThumbUp, Share, Favorite } from "@mui/icons-material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function NasaPhotoCard({ photoData }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const copyImageLink = (link) => {
    navigator.clipboard.writeText({ link });
  };

  return (
    <div>
      <Card>
        <CardHeader title={photoData.title} subheader={photoData.date} />
        <CardMedia
          component="img"
          image={photoData.url}
          alt={photoData.title}
          sx={{ width: "100%" }}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="Like">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-lable="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="h6" color="text.secondary">
              Explanation:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {photoData.explanation}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
