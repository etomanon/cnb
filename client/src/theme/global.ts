import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
	html,
	body {
		height: 100%;
		margin: 0;
		padding: 0;
		text-rendering: optimizeLegibility;
		font-family: Arial, Helvetica, sans-serif;
		-webkit-font-smoothing: antialiased;
    overflow-x: hidden;
	}
  body {
    font-size: 1.6rem;
  }

	#root {
		height: 100%;
		display:flex; 
  	flex-direction:column; 
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		line-height: 1;
	}

	ul {
		margin-top: 0;
		margin-bottom: 0;
	}

	button, input, ::placeholder {
		font-family: Arial, Helvetica, sans-serif;
	}

	/* .MuiSnackbarContent-message {
		font-family: Arial, Helvetica, sans-serif;
		font-size: 1.6rem;
		line-height: 1.2;
	} */
`;
