import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import { terser } from "rollup-plugin-terser";
import path from 'path';
import fs from 'fs';

export default {
    input: "./svgo/src/index.ts",
    output: {
        file: "./svgo/index.js",
        format: "esm"
    },
    plugins: [
        resolve({
            preferBuiltins: true 
        }),
        typescript(),
        commonjs(),
        json(),
        terser(),
        {
            resolveId: id => {
                const shimsPath = path.resolve(__dirname, "./svgo/shims");
                const shimNames = fs.readdirSync(shimsPath).map(file => file.split(".")[0]);
                if (shimNames.includes(id)) {
                    return path.join(shimsPath, id + ".ts");
                }
            }
        }
    ]
}
