import { DiJavascript1 } from "react-icons/di";
import {
	FaFigma,
	FaReact
} from "react-icons/fa";
import { RiVuejsLine } from "react-icons/ri";
import {
	SiFirebase,
	SiFramer,
	SiJest,
	SiNextdotjs,
	SiReactquery,
	SiRedux,
	SiStyledcomponents,
	SiSupabase,
	SiTailwindcss,
	SiTypescript
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import Gsap from "../vectors/gsap";

export const SkillsData = [
    // Core Tech (The "must-haves")
    { name: "Javascript", icon: <DiJavascript1 /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React Js", icon: <FaReact /> },
    { name: "Next Js", icon: <SiNextdotjs /> },
    { name: "Vue Js", icon: <RiVuejsLine /> },
    { name: "React Native", icon: <TbBrandReactNative /> },

    // Logic & Data
    { name: "Redux", icon: <SiRedux /> },
    { name: "React Query", icon: <SiReactquery /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Supabase", icon: <SiSupabase /> },

    // Visuals & Motion
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Styled Components", icon: <SiStyledcomponents /> },
    { name: "Framer Motion", icon: <SiFramer /> },
    { name: "GSAP", icon: <Gsap /> },

    // Design & Engineering Quality
    { name: "Jest", icon: <SiJest /> },
    { name: "Figma", icon: <FaFigma /> },
];
