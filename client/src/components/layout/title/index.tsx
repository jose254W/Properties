import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

import { autoquest } from "assets/assets"

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={autoquest} alt="HomeTrack" width="180px" />
        ) : (
          <img src={autoquest} alt="Logo" width="180px" />
        )}
      </Link>
    </Button>
  );
};
