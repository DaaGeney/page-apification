import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { CustomCard } from "./styles";

type MediaCardProps = {
  onDeleteElement: any;
  onEditElement: any;
  paragraph: string;
  title: string;
};

const MediaCard = ({
  onDeleteElement,
  onEditElement,
  paragraph,
  title,
}: MediaCardProps) => {
  return (
    <CustomCard>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {paragraph}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton size="small" color="primary" onClick={onDeleteElement}>
          <DeleteIcon />
        </IconButton>
        <IconButton size="small" color="primary" onClick={onEditElement}>
          <EditIcon />
        </IconButton>
      </CardActions>
    </CustomCard>
  );
};

export default MediaCard;
