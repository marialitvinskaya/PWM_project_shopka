import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import theme from "../createTheme";


const pages = ["Sell on Shopka", "Register"];

function AppBarButtons() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex", flexWrap: "nowrap" },
      }}
    >
      {pages.map((page) => (
        <Button
            color="secondary"
          key={page}
          sx={{
            my: 2,
              color: (theme) => theme.palette.grey[60],
            display: "block",
            textTransform: "none",
            whiteSpace: "nowrap",
          }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
}

export default AppBarButtons;

const pagesElectronics = ["Consumer Electronics"];

function ButtonElectronics() {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pagesElectronics.map((pagesElectronics) => (
        <Button
            color="primary"
          variant="text"
          key={pagesElectronics}
          sx={{
            my: 2,
            display: "block",
            textTransform: "none",
            whiteSpace: "nowrap",
          }}
        >
          {pagesElectronics}
        </Button>
      ))}
    </Box>
  );
}

export { ButtonElectronics };

    function AccountButtons() {
        return (
            <Stack direction="row" spacing={2} marginRight="16px">
                <Button
                    color="primary"
                    variant="outlined"
                    sx={{
                        width: 104,
                        height: 40,
                        textTransform: "none",
                        fontWeight: 700,
                    }}
                >
                    Sign in
                </Button>
                <Button
                    color="primary"
                    sx={{
                        width: 104,
                        height: 40,
                        boxShadow:
                            "0px 4px 8px 0px rgba(41, 121, 255, 0.2), 0px 2px 4px 0px rgba(27, 78, 163, 0.2)",
                        textTransform: "none",
                        fontWeight: 700,
                    }}
                    elevation={1}
                >
                    My cart
                </Button>
            </Stack>
        );

}

export { AccountButtons };
