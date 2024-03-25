"use client";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import styles from "./page.module.css";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import { Menu } from "@mui/icons-material";

export default function Home() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Test1", "Test2", "Test3"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Theodor"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <SwipeableDrawer
        open={open}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </SwipeableDrawer>
      <AppBar sx={{ backgroundColor: "white" }} position="sticky">
        <Toolbar sx={{ color: "white" }}>
          <Button onClick={toggleDrawer(true)}>
            <Menu />
          </Button>
        </Toolbar>
      </AppBar>
      <Typography variant="h1" align="center">
        Ola Munthe Vassbotn
      </Typography>
      <Typography
        variant="h3"
        align="center"
        color={grey[500]}
        className={styles.subtitle}
      >
        Student at NTNU
      </Typography>
      <Box sx={{ flexGrow: 1 }} padding={2} maxWidth={400} mx={"auto"}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Card>
              <CardContent>
                <Typography variant="body1">thingo</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="body1">thingo</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="body1">thingo</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={8}>
            <Card>
              <CardContent>
                <Typography variant="body1">thingo</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
