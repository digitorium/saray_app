import { useState } from "react";
import Switch from '@mui/material/Switch';
import useDarkSide from "../hooks/useDarkSide";

export default function Switcher() {
	const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "light" ? true : false
	);

	const toggleDarkMode = (event) => {
		setTheme(colorTheme);
		setDarkSide(event.target.checked);
	};
	
	return (
        <Switch 
          checked={darkSide}
          onChange={toggleDarkMode}
        />
	);
}
