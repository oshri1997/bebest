import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",

    "& .MuiFormControl-root": {
      height: "80px",
      width: "260px",
      color: "#fff",
    },
    "& .MuiFormHelperText-root": {
      fontSize: "1.1rem",
      color: "#fff",
    },
    "& .MuiFilledInput-underline:before": {
      borderBottom: " 2px solid rgba(231,231,222,0.6)",
    },
    "& .MuiFilledInput-input": {
      color: "rgba(231,231,222,1)",
      fontSize: "16px",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottom: " 2px solid rgb(15,48,87)",
    },
    "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: " 2px solid rgba(231,231,222,1)",
    },
    "& .MuiButton-containedPrimary": {
      backgroundColor: "#9E1109",
    },
    "& .MuiInputLabel-filled": {
      fontSize: "13px",
      color: "rgba(231,231,222,1)",
    },
    "& .MuiTypography-root": {
      fontSize: "14px",
      "@media screen and (min-width:1600px)": {
        fontSize: "2rem",
      },
    },
  },
  boxFormContainer: {
    width: "30rem",
    height: "35rem",
    background: "rgba(15,48,87,0.4)",
    backdropFilter: "blur(5px)",
    border: "1px solid #fff",
    borderRadius: "20px",
  },
}));

export default useStyles;
