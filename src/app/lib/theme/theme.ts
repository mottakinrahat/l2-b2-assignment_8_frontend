import { blue, pink} from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: pink[600],
    },
    secondary: {
      main: blue[500],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "8px 24px",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
  typography: {
    body1: {
      color: "#0B1134CC",
    },
  },
});
theme.shadows[1] = "0px 5px 22px lightgray";
