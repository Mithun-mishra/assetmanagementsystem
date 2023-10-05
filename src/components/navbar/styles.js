export const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        py: "20px",
        position: "relative",
        marginTop:"0",
        minWidth: "80%"
      },
      navContainer:{
        display: "flex",
         justifyContent: "space-between",
          padding: "0.8rem",
          whiteSpace: "nowrap"
      },
      responsiveStyles: {
        '@media (max-width: 600px)': {
          navContainer: {
            flexDirection: 'column',
            alignItems: 'center',
          },
        },
      },
    divider: {
        minHeight:"5rem",
        // backgroundColor:"blue",
        backgroundColor:'rgb(13, 110, 253)',
        // backgroundColor:"rgba(var(--bs-primary-rgb),var(--bs-bg-opacity))!important",
        minHeight: "4rem",
        minWidth: "100%"
      },
      head: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // fontFamily: "'Open Sans', sans-serif",
        fontSize: "2.5rem",
        // fontWeight:"bold"
    // color: "#2D2D2D",
    // "@media (max-width: 650px)": {
    //   fontSize: "28px",
    // },
},

navbtn:{
    backgroundcolor: "white",
     color: "white",
     fontSize:"0.8rem", 
     textTransform: "none",
    
},
innernav:{
    minWidth:"100%",
    color:"white",
    size:"2rem"
}
}