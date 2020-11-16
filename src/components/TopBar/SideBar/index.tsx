import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import clsx from "clsx";
import { AttachMoney, CreditCard } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const SideBar = (props: any) => {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const routes = [
    {
      name: "Perdida esperada",
      icon: <AttachMoney />,
      to: "/holis",
    },
    {
      name: "Riesgo crediticio",
      icon: <CreditCard />,
      to: "/jeje",
    },
    {
      name: "Riesgos",
      icon: <CreditCard />,
      to: "/riesgos",
    }
  ];

  const list = () => (
    <div className={clsx(classes.list)} role="presentation">
      <List>
        {routes.map((e, index) => (
          <ListItem button key={index} onClick={() => props.history.push(e.to)}>
            <ListItemIcon>{e.icon}</ListItemIcon>
            <ListItemText primary={e.name} />
          </ListItem>
        ))}
      </List>
    </div>
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
