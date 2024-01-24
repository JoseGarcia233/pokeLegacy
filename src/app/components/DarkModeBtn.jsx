'use client';
import React from "react";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./MoonIcon";
import {SunIcon} from "./SunIcon";
import {useTheme} from "next-themes";

export default function DarkModeBtn(value) {
    const { theme, setTheme } = useTheme()
  return (
    <Switch
      defaultSelected
      size="lg"
      color="white"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    >
     { value === 'dark' ? setTheme('dark')  : setTheme('light')}
      Dark mode
    </Switch>
  );
}
