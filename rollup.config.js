import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import image from "rollup-plugin-image";

const packageJson = require("./package.json");

const obj = {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      assetFileNames: "[name][extname]",
    },
    {
      file: packageJson.module,
      format: "esm",
      assetFileNames: "[name][extname]",
    },
  ],
  plugins: [
    peerDepsExternal({
      includeDependencies: true,
    }),
    resolve({
      browser: true,
    }),
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      minimize: true,
      inject: {
        insertAt: "top",
      },
    }),
    commonjs(),
    image(),
    typescript({ useTsconfigDeclarationDir: true }),
    copy({
      targets: [
        {
          src: "src/persianDatePickerReact/assets",
          dest: "react-persian-date-picker/persianDatePickerReact",
        },
      ],
    }),
  ],
};

export default obj;