import { IconButton, Typography } from "@material-tailwind/react";
import { useState } from "react";

export const Like = () => {
  const [like, setLike] = useState(false);

  return (
    <>
      <IconButton onClick={() => setLike(!like)}>
        <Typography>اعجاب</Typography>
      </IconButton>
    </>
  );
};
