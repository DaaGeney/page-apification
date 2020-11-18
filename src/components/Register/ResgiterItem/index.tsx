import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import RegisterInfo from "../RegisterInfo";
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { CustomCard } from "./styles";

type MediaCardProps = {
  body: {
    _id: string;
    id: string;
    EAD: number;
    LGD: number;
    PD: number;
    impacto: number;
    name: string;
    otros: string;
    probabilidad: string;
    registro: string;
  };
};

const MediaCard = ({ body }: MediaCardProps) => {
  const [openDialog, setOpenDialog] = useState(false);

  const onOpenDialog = () => setOpenDialog(true);

  const onClose = () => setOpenDialog(false);

  return (
    <>
      <CustomCard>
        <CardActionArea>
          <CardContent onClick={onOpenDialog}>
            <Typography gutterBottom variant="h5" component="h2">
              {body.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Click para ver más información
            </Typography>
          </CardContent>
        </CardActionArea>
      </CustomCard>
      <RegisterInfo body={body} open={openDialog} onClose={onClose} />
    </>
  );
};

export default MediaCard;
