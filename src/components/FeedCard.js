import React, { useCallback, useEffect, useState } from "react";
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
import {
  Share,
  Favorite,
  SwapVerticalCircleTwoTone,
} from "@mui/icons-material";
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

export default function FeedCard({ photoData, handler }) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [favoriteColor, setFavoriteColor] = useState(false);
  const colorChange = (photoData) => {
    setFavoriteColor(!favoriteColor);
    handler(photoData);
    console.log(favoriteColor);
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
          <IconButton
            aria-label="Like"
            // onClick={() => }
            onClick={() => colorChange(photoData)}
            color={favoriteColor ? "error" : "primary"}
          >
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
