import babel from "@rollup/plugin-babel";
import typescript from 'rollup-plugin-typescript2';
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "./src/index.ts", // 진입 경로
  output: {
    file: "./dist/bundle.js", // 출력 경로
    format: "es", // 출력 형식
    sourcemap: true, // 소스 맵을 켜놔서 디버깅을 쉽게 만들자
  },
  plugins: [
    // 바벨 트랜스파일러 설정
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript",
    ],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    peerDepsExternal(),
    resolve(),
    typescript({ useTsconfigDeclarationDir: true }),
  ],

};
