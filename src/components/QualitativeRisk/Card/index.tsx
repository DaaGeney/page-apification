import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Public } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { CustomCard } from "./styles";
import Map from "./../Map";

type MediaCardProps = {
  body: any;
};

const MediaCard = ({ body }: MediaCardProps) => {
  const [openMap, setOpenMap] = React.useState(false);

  const onOpenMap = () => setOpenMap(true)

  const onCloseMap = () => setOpenMap(false)

  return (
    <>
      <CustomCard>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {body.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton size="small" color="primary" onClick={onOpenMap}>
            <Public />
          </IconButton>
        </CardActions>
      </CustomCard>
      <Map open={openMap} onClose={onCloseMap} id={body.name}/>
    </>
  );
};

export default MediaCard;
