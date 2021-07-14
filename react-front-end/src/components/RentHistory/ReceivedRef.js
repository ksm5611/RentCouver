import { useState } from "react";
import { Drawer } from "@material-ui/core";

export default function ReceivedRef({ reference }) {

  // for the drawer
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  if (!reference) {
    return <div>Loading..</div>;
  }

  return (
    <div>
      <button
        className="secondary-btn button action-button"
        onClick={toggleDrawer("left", true)}
      >
        REVIEW REFERENCE
      </button>

      <Drawer
        className="drawer"
        style={{ width: "640px" }}
        variant="temporary"
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {reference}

      </Drawer>
    </div>
  );
}
