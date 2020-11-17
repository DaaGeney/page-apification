import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpectedLostItem from "../ExpectedLostItem";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { CustomCard } from "./styles";

type MediaCardProps = {
  body: any;
  onChangeValue: any;
};

const MediaCard = ({ body, onChangeValue }: MediaCardProps) => {
  const [openDialog, setOpenDialog] = useState(false);

  const onOpenDialog = () => setOpenDialog(true);

  const onClose = () => setOpenDialog(false);

  return (
    <>
      <CustomCard>
        <CardActionArea>
          <CardContent onClick={onOpenDialog}>
            <Typography gutterBottom variant="h5" component="h2">
              {body.nombre}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Click para ver resultados
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton size="small" color="primary" onClick={onChangeValue}>
            <EditIcon />
          </IconButton>
        </CardActions>
      </CustomCard>
      <ExpectedLostItem body={body} open={openDialog} onClose={onClose} />
    </>
  );
};

export default MediaCard;
