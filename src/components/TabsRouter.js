import { AppBar } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Link, matchPath, useLocation } from "react-router-dom";

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

const MyTabs = () => {
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch([
    "/",
    "/refs",
    "/collection/:name",
    "/collection",
  ]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs
      value={currentTab}
      variant="fullWidth"
      indicatorColor="secondary"
      aria-label="Navigation tabs"
      textColor="inherit"
    >
      <Tab label="Care Guide" value="/" to="/" component={Link} />
      <Tab label="References" value="/refs" to="/refs" component={Link} />
      <Tab
        value="/collection/:name"
        to="/collection"
        style={{ display: "none" }}
      />
      <Tab
        label="My Collections"
        value="/collection"
        to="/collection"
        component={Link}
      />
    </Tabs>
  );
};

export default function TabsRouter() {
  return (
    <Box sx={{ width: "100%", bgcolor: "primary", color: "#fff" }}>
      <AppBar>
        <MyTabs />
      </AppBar>
    </Box>
  );
}
