import Drawer from "@material-ui/core/Drawer";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import { CustomDiv} from "../styles"
import { AttachMoney, History, Money } from "@material-ui/icons";

const SideBar = (props: any) => {

  const routes = [
    {
      name: "Pérdida esperada",
      icon: <Money />,
      to: "/expectedLost",
    },
    {
      name: "Riesgo de crédito",
      icon: <AttachMoney />,
      to: "/qualitativeRisk",
    },
    {
      name: "Riesgos",
      icon: <FormatListBulletedIcon />,
      to: "/risks",
    },
    {
      name: "Mis registros",
      icon: <History />,
      to: "/register",
    },
  ];

  const list = () => (
    <CustomDiv role="presentation">
      <List>
        {routes.map((e, index) => (
          <ListItem button key={index} onClick={() => props.history.push(e.to)}>
            <ListItemIcon>{e.icon}</ListItemIcon>
            <ListItemText primary={e.name} />
          </ListItem>
        ))}
      </List>
    </CustomDiv>
  );
  return (
    <>
      <Drawer anchor={"left"} open={props.open} onClose={props.onClose}>
        {list()}
      </Drawer>
    </>
  );
};

export default SideBar;
