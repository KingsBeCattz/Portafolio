import Default_B from "./black/default.svg";
import Developer_B from "./black/developer.svg";
import ExternalURL_B from "./black/external-url.svg";
import Github_B from "./black/github.svg";
import Home_B from "./black/home.svg";
import Moon_B from "./black/moon.svg";
import Sun_B from "./black/sun.svg";
import KingBeCats from "./png/KingBeCats.png";
import NPM from "./png/NPM.png";
import Default_W from "./white/default.svg";
import Developer_W from "./white/developer.svg";
import ExternalURL_W from "./white/external-url.svg";
import Github_W from "./white/github.svg";
import Home_W from "./white/home.svg";
import Moon_W from "./white/moon.svg";
import Sun_W from "./white/sun.svg";

export function load() {
	return {
		KingBeCats,
		NPM,
		Github: {
			white: Github_W,
			black: Github_B,
		},
		Home: {
			white: Home_W,
			black: Home_B,
		},
		Moon: {
			white: Moon_W,
			black: Moon_B,
		},
		Sun: {
			white: Sun_W,
			black: Sun_B,
		},
		ExternalURL: {
			white: ExternalURL_W,
			black: ExternalURL_B,
		},
		Developer: {
			white: Developer_W,
			black: Developer_B,
		},
		Default: {
			white: Default_W,
			black: Default_B,
		},
	};
}

export const assets = load();
