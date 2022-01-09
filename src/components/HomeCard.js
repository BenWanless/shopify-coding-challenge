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
import { Box } from "@mui/system";

export default function HomeCard({ PODData }) {
  return (
    <Card  sx={{ height: "30vh" }}>
      <Box sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          image={PODData.url}
          alt={PODData.title}
          sx={{ width: "50%" }}
        />
        <CardContent>
          <CardHeader title={PODData.title} subheader={PODData.date} />
          <Typography variant="h6" color="text.secondary">
            Explanation:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {PODData.explanation}
          </Typography>
        </CardContent>
      </Box>
      <CardActions disableSpacing>
        <IconButton aria-label="Like">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}
