// import React from 'react'
// import {styled} from '@mui/material'
// // import { createTheme, ThemeProvider } from '@mui/material/styles';

// // export const theme = createTheme({
// //   typography: {
// //      fontFamily: [
// //        '-apple-system'
// //      ]}
// //  });
// export const VisuallyHiddenInput = styled("input")({
//   border:0,
//   clip:"rect(0,0,0,0)",
//   height:1,
//   margin:-1,
//   overflow:"hidden",
//   padding:0,
//   position:"absolute",
//   whiteSpace:"nowrap",
//   width:1,
// });
// {/* <VisuallyHiddenInput/> */}
import React from 'react';
import { styled } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define your custom theme
export const theme = createTheme({
 typography: {
    fontFamily: [
      // 'Georgia'
      // '-apple-system',
      // 'BlinkMacSystemFont',
      // '"Segoe UI"',
      // 'Roboto',
      // '"Helvetica Neue"',
      // 'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
 },
});

// Define a styled component for visually hidden inputs
export const VisuallyHiddenInput = styled('input')({
 border: 0,
 clip: 'rect(0,0,0,0)',
 height: 1,
 margin: -1,
 overflow: 'hidden',
 padding: 0,
 position: 'absolute',
 whiteSpace: 'nowrap',
 width: 1,
});

// Optionally, you can also export the ThemeProvider if you want to use it directly in your components
export const CustomThemeProvider = ({ children }) => (
 <ThemeProvider theme={theme}>
    {children}
 </ThemeProvider>
);
