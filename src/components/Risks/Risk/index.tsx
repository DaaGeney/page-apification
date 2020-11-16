import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import DeleteIcon from "@material-ui/icons/Delete";
import RiskDescription from "../RiskDescription";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { CustomCard } from "./styles";

type MediaCardProps = {
  body: any;
  onDeleteElement: any;
  onEditElement: any;
};

const MediaCard = ({
  body,
  onDeleteElement,
  onEditElement,
}: MediaCardProps) => {
  const [openDialog, setOpenDialog] = useState(false);

  const onOpenDialog = () => setOpenDialog(true);

  const onClose = () => setOpenDialog(false);

  console.log(body);

  return (
    <>
      <CustomCard>
        <CardActionArea>
          <CardContent onClick={onOpenDialog}>
            <Typography gutterBottom variant="h5" component="h2">
              {body.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {body.description}
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
      <RiskDescription body={body} open={openDialog} onClose={onClose} />
    </>
  );
};

export default MediaCard;
