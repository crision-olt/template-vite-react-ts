import type { Config } from "@svgr/core";
import { transformWithEsbuild } from "vite";

type Options = Config & Parameters<typeof transformWithEsbuild>[2];

const config: Options = {
  // Default behavior when importing `.svg` files, possible options are: 'url' and `component`
  typescript: true,
  icon: "1em",
  prettier: true,
  color: true,
  // Boolean flag to enable/disable SVGO
  svgo: true,

  // SVGO configuration object
  svgoConfig: {},

  // Props to be forwarded on SVG tag, possible options: "start", "end" or false
  expandProps: "end",

  // Setting this to true will forward ref to the root SVG tag
  ref: false,

  // Setting this to true will wrap the exported component in React.memo
  memo: true,

  // Replace an attribute value by an other.
  // The main usage of this option is to change an icon color to "currentColor" in order to inherit from text color.
  // replaceAttrValues: { old: 'new' },
  //replaceAttrValues: null,

  // Add props to the root SVG tag
  // svgProps: { name: 'value' },
  //svgProps: {},
  // Add title tag via title property
  // <SvgIcon title="Accessible icon name" /> => <svg><title>Accessible icon name</title><...></svg>
  // <SvgIcon title="Accessible icon name" titleId="iconName" /> => <svg aria-labelledby="iconName><title id="iconName">Accessible icon name</title><...></svg>
  titleProp: true,
};
export default config;
