{
    "name": "frontend",
    "version": "0.0.0",
    "lockfileVersion": 1,
    "requires": true,
    "dependencies": {
        "@angular-builders/jest": {
            "version": "10.0.1",
            "resolved": "https://registry.npmjs.org/@angular-builders/jest/-/jest-10.0.1.tgz",
            "integrity": "sha512-kRMdksXZLiWqBQtIF6RbF0q6AQkn2LbsSF3V9dbsX11kOlwn9teOEND4LnT5KHmBnnejSoVwP9DuIKQV+qKVBQ==",
            "dev": true,
            "requires": {
                "@angular-devkit/architect": ">=0.1000.0 < 0.1100.0",
                "@angular-devkit/core": "^10.0.0",
                "jest-preset-angular": "^8.2.1",
                "lodash": "^4.17.15"
            },
            "dependencies": {
                "@angular-devkit/architect": {
                    "version": "0.1002.0",
                    "resolved": "https://registry.npmjs.org/@angular-devkit/architect/-/architect-0.1002.0.tgz",
                    "integrity": "sha512-twM8V03ujBIGVpgV1PBlSDodUdxtUb7WakutfWafAvEHUsgwzfvQz2VtKWvjNZ9AiYjnCuwkQaclqVv0VHNo9w==",
                    "dev": true,
                    "requires": {
                        "@angular-devkit/core": "10.2.0",
                        "rxjs": "6.6.2"
                    }
                },
                "@angular-devkit/core": {
                    "version": "10.2.0",
                    "resolved": "https://registry.npmjs.org/@angular-devkit/core/-/core-10.2.0.tgz",
                    "integrity": "sha512-XAszFhSF3mZw1VjoOsYGbArr5NJLcStjOvcCGjBPl1UBM2AKpuCQXHxI9XJGYKL3B93Vp5G58d8qkHvamT53OA==",
                    "dev": true,
                    "requires": {
                        "ajv": "6.12.4",
                        "fast-json-stable-stringify": "2.1.0",
                        "magic-string": "0.25.7",
                        "rxjs": "6.6.2",
                        "source-map": "0.7.3"
                    }
                },
                "ajv": {
                    "version": "6.12.4",
                    "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.4.tgz",
                    "integrity": "sha512-eienB2c9qVQs2KWexhkrdMLVDoIQCz5KSeLxwg9Lzk4DOfBtIK9PQwwufcsn1jjGuf9WZmqPMbGxOzfcuphJCQ==",
                    "dev": true,
                    "requires": {
                        "fast-deep-equal": "^3.1.1",
                        "fast-json-stable-stringify": "^2.0.0",
                        "json-schema-traverse": "^0.4.1",
                        "uri-js": "^4.2.2"
                    }
                },
                "rxjs": {
                    "version": "6.6.2",
                    "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.6.2.tgz",
                    "integrity": "sha512-BHdBMVoWC2sL26w//BCu3YzKT4s2jip/WhwsGEDmeKYBhKDZeYezVUnHatYB7L85v5xs0BAQmg6BEYJEKxBabg==",
                    "dev": true,
                    "requires": {
                        "tslib": "^1.9.0"
                    }
                },
                "tslib": {
                    "version": "1.14.1",
                    "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
                    "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
                    "dev": true
                }
            }
        },
        "@angular-devkit/architect": {
            "version": "0.1100.2",
            "resolved": "https://registry.npmjs.org/@angular-devkit/architect/-/architect-0.1100.2.tgz",
            "integrity": "sha512-wSMMM8eBPol48OtvIyrIq2H9rOIiJmrPEtPbH0BSuPX0B8BckVImeTPzloqxSrpul4tY7Iwx0zwISDEgb59Vbw==",
            "dev": true,
            "requires": {
                "@angular-devkit/core": "11.0.2",
                "rxjs": "6.6.3"
            }
        },
        "@angular-devkit/build-angular": {
            "version": "0.1100.2",
            "resolved": "https://registry.npmjs.org/@angular-devkit/build-angular/-/build-angular-0.1100.2.tgz",
            "integrity": "sha512-5Qo3DDKggzUJKibNgeyE5mIMFYP0tVebNvMatpbnYnR/U0fUuuQdvNC68s380M5KoOuubfeXr0Js0VFk0mkaow==",
            "dev": true,
            "requires": {
                "@angular-devkit/architect": "0.1100.2",
                "@angular-devkit/build-optimizer": "0.1100.2",
                "@angular-devkit/build-webpack": "0.1100.2",
                "@angular-devkit/core": "11.0.2",
                "@babel/core": "7.12.3",
                "@babel/generator": "7.12.1",
                "@babel/plugin-transform-runtime": "7.12.1",
                "@babel/preset-env": "7.12.1",
                "@babel/runtime": "7.12.1",
                "@babel/template": "7.10.4",
                "@jsdevtools/coverage-istanbul-loader": "3.0.5",
                "@ngtools/webpack": "11.0.2",
                "ansi-colors": "4.1.1",
                "autoprefixer": "9.8.6",
                "babel-loader": "8.1.0",
                "browserslist": "^4.9.1",
                "cacache": "15.0.5",
                "caniuse-lite": "^1.0.30001032",
                "circular-dependency-plugin": "5.2.0",
                "copy-webpack-plugin": "6.2.1",
                "core-js": "3.6.5",
                "css-loader": "4.3.0",
                "cssnano": "4.1.10",
                "file-loader": "6.1.1",
                "find-cache-dir": "3.3.1",
                "glob": "7.1.6",
                "inquirer": "7.3.3",
                "jest-worker": "26.5.0",
                "karma-source-map-support": "1.4.0",
                "less": "3.12.2",
                "less-loader": "7.0.2",
                "license-webpack-plugin": "2.3.1",
                "loader-utils": "2.0.0",
                "mini-css-extract-plugin": "1.2.1",
                "minimatch": "3.0.4",
                "open": "7.3.0",
                "ora": "5.1.0",
                "parse5-html-rewriting-stream": "6.0.1",
                "pnp-webpack-plugin": "1.6.4",
                "postcss": "7.0.32",
                "postcss-import": "12.0.1",
                "postcss-loader": "4.0.4",
                "raw-loader": "4.0.2",
                "regenerator-runtime": "0.13.7",
                "resolve-url-loader": "3.1.2",
                "rimraf": "3.0.2",
                "rollup": "2.32.1",
                "rxjs": "6.6.3",
                "sass": "1.27.0",
                "sass-loader": "10.0.5",
                "semver": "7.3.2",
                "source-map": "0.7.3",
                "source-map-loader": "1.1.2",
                "source-map-support": "0.5.19",
                "speed-measure-webpack-plugin": "1.3.3",
                "style-loader": "2.0.0",
                "stylus": "0.54.8",
                "stylus-loader": "4.1.1",
                "terser": "5.3.7",
                "terser-webpack-plugin": "4.2.3",
                "text-table": "0.2.0",
                "tree-kill": "1.2.2",
                "webpack": "4.44.2",
                "webpack-dev-middleware": "3.7.2",
                "webpack-dev-server": "3.11.0",
                "webpack-merge": "5.2.0",
                "webpack-sources": "2.0.1",
                "webpack-subresource-integrity": "1.5.1",
                "worker-plugin": "5.0.0"
            }
        },
        "@angular-devkit/build-optimizer": {
            "version": "0.1100.2",
            "resolved": "https://registry.npmjs.org/@angular-devkit/build-optimizer/-/build-optimizer-0.1100.2.tgz",
            "integrity": "sha512-2ZdEeAs0a53g9LDkP5H2mCEPLyk7yd9P7eTepNYvIOz3xJ6W6dB2CqotPMfnHgd4o12cbzCOWrPBxbfo/VnMig==",
            "dev": true,
            "requires": {
                "loader-utils": "2.0.0",
                "source-map": "0.7.3",
                "tslib": "2.0.3",
                "typescript": "4.0.5",
                "webpack-sources": "2.0.1"
            }
        },
        "@angular-devkit/build-webpack": {
            "version": "0.1100.2",
            "resolved": "https://registry.npmjs.org/@angular-devkit/build-webpack/-/build-webpack-0.1100.2.tgz",
            "integrity": "sha512-XVMtWoxNa3wJLRjJ846Y02PzupdbUizdAtggRu2731RLMvI1KawWlsTURi12MNUnoVQYm9eldiIA/Y1UqeE8mQ==",
            "dev": true,
            "requires": {
                "@angular-devkit/architect": "0.1100.2",
                "@angular-devkit/core": "11.0.2",
                "rxjs": "6.6.3"
            }
        },
        "@angular-devkit/core": {
            "version": "11.0.2",
            "resolved": "https://registry.npmjs.org/@angular-devkit/core/-/core-11.0.2.tgz",
            "integrity": "sha512-vUmmUNmNM9oRcDmt0PunU/ayglo0apq4pGL9Z5jj6alf2WwEiTcGHjyuZSDIO9MOLi41519jp3mDx79qXvvyww==",
            "dev": true,
            "requires": {
                "ajv": "6.12.6",
                "fast-json-stable-stringify": "2.1.0",
                "magic-string": "0.25.7",
                "rxjs": "6.6.3",
                "source-map": "0.7.3"
            }
        },
        "@angular-devkit/schematics": {
            "version": "11.0.2",
            "resolved": "https://registry.npmjs.org/@angular-devkit/schematics/-/schematics-11.0.2.tgz",
            "integrity": "sha512-unNewc+Y9ofrdKxXNoSHKUL6wvV8Vgh2nJMTLI1VAw8nfqgWphI+s5XwbVzog65nhZ10xJeaUm9u5R8pxLDpQg==",
            "dev": true,
            "requires": {
                "@angular-devkit/core": "11.0.2",
                "ora": "5.1.0",
                "rxjs": "6.6.3"
            }
        },
        "@angular-eslint/builder": {
            "version": "0.8.0-beta.1",
            "resolved": "https://registry.npmjs.org/@angular-eslint/builder/-/builder-0.8.0-beta.1.tgz",
            "integrity": "sha512-7pQkjSTyt8TGTeOu7E+D/n7DIBDHNOkTLeiwUAOV4OXGG92oNkPJYfPLFjkd9cWEMDNcwzJbLVsaHyoFvXs4ug==",
            "dev": true
        },
        "@angular-eslint/eslint-plugin": {
            "version": "0.8.0-beta.1",
            "resolved": "https://registry.npmjs.org/@angular-eslint/eslint-plugin/-/eslint-plugin-0.8.0-beta.1.tgz",
            "integrity": "sha512-+vCkUpM81qjb0UwxlUUwGML0lLzmnhqf5HHsRzzfwhd0s5g3DPw8w4Z/CDNBagJmTzSUSnH1GF9uEdtyJCEprA==",
            "dev": true,
            "requires": {
                "@typescript-eslint/experimental-utils": "4.3.0"
            }
        },
        "@angular-eslint/eslint-plugin-template": {
            "version": "0.8.0-beta.1",
            "resolved": "https://registry.npmjs.org/@angular-eslint/eslint-plugin-template/-/eslint-plugin-template-0.8.0-beta.1.tgz",
            "integrity": "sha512-nyy93m+2WBe5Fpc2IKzWPH1bGqNZYd+BU6nYhNssiYXPRcDWBqIsIhEM74dRK/0AN37tUguJ2weZ6xF6fVN8hw==",
            "dev": true,
            "requires": {
                "@typescript-eslint/experimental-utils": "4.3.0"
            }
        },
        "@angular-eslint/schematics": {
            "version": "0.8.0-beta.1",
            "resolved": "https://registry.npmjs.org/@angular-eslint/schematics/-/schematics-0.8.0-beta.1.tgz",
            "integrity": "sha512-3vlqt42RekFrCywX5DaGncCdwjm0dNSPv1aSGNdUwr3HMfLOv1iQf2ouBmBxusWBA28MMDy+U+pC2AZftLgXsg==",
            "dev": true,
            "requires": {
                "@angular-eslint/eslint-plugin": "^0.8.0-beta.1",
                "@angular-eslint/eslint-plugin-template": "^0.8.0-beta.1",
                "strip-json-comments": "3.1.1",
                "tslint-to-eslint-config": "2.0.0-beta5"
            }
        },
        "@angular-eslint/template-parser": {
            "version": "0.8.0-beta.1",
            "resolved": "https://registry.npmjs.org/@angular-eslint/template-parser/-/template-parser-0.8.0-beta.1.tgz",
            "integrity": "sha512-fiLfwlWWwYz657SxcNfPKsl4HiItqj7mNZuMPlxsiKSyT/+pwTNzMttCafy2v0144SNmHEslZS1nQfc1Nq715g==",
            "dev": true,
            "requires": {
                "eslint-scope": "^5.1.0"
            },
            "dependencies": {
                "eslint-scope": {
                    "version": "5.1.1",
                    "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.1.1.tgz",
                    "integrity": "sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==",
                    "dev": true,
                    "requires": {
                        "esrecurse": "^4.3.0",
                        "estraverse": "^4.1.1"
                    }
                }
            }
        },
        "@angular/animations": {
            "version": "11.0.2",
            "resolved": "https://registry.npmjs.org/@angular/animations/-/animations-11.0.2.tgz",
            "integrity": "sha512-uF/RlBY1rznbuw+1lm8Q2HKDrBOQQ2Bi2cUPuef+ALn+lxGl501eHlE+PTtBjDEzJcJPfd4pE3Ww3+3Il+D+Tw==",
            "requires": {
                "tslib": "^2.0.0"
            }
        },
        "@angular/cli": {
            "version": "11.0.2",
            "resolved": "https://registry.npmjs.org/@angular/cli/-/cli-11.0.2.tgz",
            "integrity": "sha512-mebt4ikwXD3gsbHRxKCpn83yW3UVnhiVDEpSXljs1YxscZ1X1dXrxb2g6LdAJwVp9xY5ERqRQeZM7eChqLTrvg==",
            "dev": true,
            "requires": {
                "@angular-devkit/architect": "0.1100.2",
                "@angular-devkit/core": "11.0.2",
                "@angular-devkit/schematics": "11.0.2",
                "@schematics/angular": "11.0.2",
                "@schematics/update": "0.1100.2",
                "@yarnpkg/lockfile": "1.1.0",
                "ansi-colors": "4.1.1",
                "debug": "4.2.0",
                "ini": "1.3.5",
                "inquirer": "7.3.3",
                "npm-package-arg": "8.1.0",
                "npm-pick-manifest": "6.1.0",
                "open": "7.3.0",
                "pacote": "9.5.12",
                "resolve": "1.18.1",
                "rimraf": "3.0.2",
                "semver": "7.3.2",
                "symbol-observable": "2.0.3",
                "universal-analytics": "0.4.23",
                "uuid": "8.3.1"
            },
            "dependencies": {
                "debug": {
                    "version": "4.2.0",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-4.2.0.tgz",
                    "integrity": "sha512-IX2ncY78vDTjZMFUdmsvIRFY2Cf4FnD0wRs+nQwJU8Lu99/tPFdb0VybiiMTPe3I6rQmwsqQqRBvxU+bZ/I8sg==",
                    "dev": true,
                    "requires": {
                        "ms": "2.1.2"
                    }
                },
                "resolve": {
                    "version": "1.18.1",
                    "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.18.1.tgz",
                    "integrity": "sha512-lDfCPaMKfOJXjy0dPayzPdF1phampNWr3qFCjAu+rw/qbQmr5jWH5xN2hwh9QKfw9E5v4hwV7A+jrCmL8yjjqA==",
                    "dev": true,
                    "requires": {
                        "is-core-module": "^2.0.0",
                        "path-parse": "^1.0.6"
                    }
                },
                "uuid": {
                    "version": "8.3.1",
                    "resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.1.tgz",
                    "integrity": "sha512-FOmRr+FmWEIG8uhZv6C2bTgEVXsHk08kE7mPlrBbEe+c3r9pjceVPgupIfNIhc4yx55H69OXANrUaSuu9eInKg==",
                    "dev": true
                }
            }
        },
        "@angular/common": {
            "version": "11.0.2",
            "resolved": "https://registry.npmjs.org/@angular/common/-/common-11.0.2.tgz",
            "integrity": "sha512-DGJuSBDt+bF77AzJNrLzeaFGSdwQ3OjgP9UUv1eKvaxp9D+lDam8suIJMuBwTsJII/yrDndY75ENPNTEqhmB2A==",
            "requires": {
                "tslib": "^2.0.0"
            }
        },
        "@angular/compiler": {
            "version": "11.0.2",
            "resolved": "https://registry.npmjs.org/@angular/compiler/-/compiler-11.0.2.tgz",
            "integrity": "sha512-deDT5+Lcph4nNhh6sZd0mBS5OkJL3HPbX5upDMI28Wuayt18Pn0UNotWY77/KV6wwIAInmlx9N06PoH3pq3hqg==",
            "requires": {
                "tslib": "^2.0.0"
            }
        },
        "@angular/compiler-cli": {
            "version": "11.0.2",
            "resolved": "https://registry.npmjs.org/@angular/compiler-cli/-/compiler-cli-11.0.2.tgz",
            "integrity": "sha512-I39zNcf6q0NN4PKCbY6Lm4WP69ujLrAew56X5yvlECW9CJlidV0qi1S/DGgAWhXTDOt8XA/KP1hD1pgJtMHjJQ==",
            "dev": true,
            "requires": {
                "@babel/core": "^7.8.6",
                "@babel/types": "^7.8.6",
                "canonical-path": "1.0.0",
                "chokidar": "^3.0.0",
                "convert-source-map": "^1.5.1",
                "dependency-graph": "^0.7.2",
                "fs-extra": "4.0.2",
                "magic-string": "^0.25.0",
                "minimist": "^1.2.0",
                "reflect-metadata": "^0.1.2",
                "semver": "^6.3.0",
                "source-map": "^0.6.1",
                "sourcemap-codec": "^1.4.8",
                "tslib": "^2.0.0",
                "yargs": "^16.1.1"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "cliui": {
                    "version": "7.0.4",
                    "resolved": "https://registry.npmjs.org/cliui/-/cliui-7.0.4.tgz",
                    "integrity": "sha512-OcRE68cOsVMXp1Yvonl/fzkQOyjLSu/8bhPDfQt0e0/Eb283TKP20Fs2MqoPsr9SwA595rRCA+QMzYc9nBP+JQ==",
                    "dev": true,
                    "requires": {
                        "string-width": "^4.2.0",
                        "strip-ansi": "^6.0.0",
                        "wrap-ansi": "^7.0.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "semver": {
                    "version": "6.3.0",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                    "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
                    "dev": true
                },
                "source-map": {
                    "version": "0.6.1",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                    "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                    "dev": true
                },
                "wrap-ansi": {
                    "version": "7.0.0",
                    "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
                    "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.0.0",
                        "string-width": "^4.1.0",
                        "strip-ansi": "^6.0.0"
                    }
                },
                "y18n": {
                    "version": "5.0.5",
                    "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.5.tgz",
                    "integrity": "sha512-hsRUr4FFrvhhRH12wOdfs38Gy7k2FFzB9qgN9v3aLykRq0dRcdcpz5C9FxdS2NuhOrI/628b/KSTJ3rwHysYSg==",
                    "dev": true
                },
                "yargs": {
                    "version": "16.1.1",
                    "resolved": "https://registry.npmjs.org/yargs/-/yargs-16.1.1.tgz",
                    "integrity": "sha512-hAD1RcFP/wfgfxgMVswPE+z3tlPFtxG8/yWUrG2i17sTWGCGqWnxKcLTF4cUKDUK8fzokwsmO9H0TDkRbMHy8w==",
                    "dev": true,
                    "requires": {
                        "cliui": "^7.0.2",
                        "escalade": "^3.1.1",
                        "get-caller-file": "^2.0.5",
                        "require-directory": "^2.1.1",
                        "string-width": "^4.2.0",
                        "y18n": "^5.0.5",
                        "yargs-parser": "^20.2.2"
                    }
                },
                "yargs-parser": {
                    "version": "20.2.4",
                    "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.4.tgz",
                    "integrity": "sha512-WOkpgNhPTlE73h4VFAFsOnomJVaovO8VqLDzy5saChRBFQFBoMYirowyW+Q9HB4HFF4Z7VZTiG3iSzJJA29yRA==",
                    "dev": true
                }
            }
        },
        "@angular/core": {
            "version": "11.0.2",
            "resolved": "https://registry.npmjs.org/@angular/core/-/core-11.0.2.tgz",
            "integrity": "sha512-GyDebks5ZPHDyChDW3VvzJq00Ct0iuesNpb9z/GpKtOXqug3sGr4KgkFDUTbfizKPWyeoaLH9FQYP55215nCKQ==",
            "requires": {
                "tslib": "^2.0.0"
            }
        },
        "@angular/forms": {
            "version": "11.0.2",
            "resolved": "https://registry.npmjs.org/@angular/forms/-/forms-11.0.2.tgz",
            "integrity": "sha512-Rn17VPviTTwiDn8Yt/UzdkXjFX0LdvjkmTNZoakqOk8/QNnsCG5sUDJAV7BKHk+2nEfUGCopS4kpBiLKLoaBpQ==",
            "requires": {
                "tslib": "^2.0.0"
            }
        },
        "@angular/platform-browser": {
            "version": "11.0.2",
            "resolved": "https://registry.npmjs.org/@angular/platform-browser/-/platform-browser-11.0.2.tgz",
            "integrity": "sha512-RHPm5/h8g3lSBgdg9OvO7w06juEwwBurvQcugXlk7+AeqznwzBodTWGPIATKzMySXQFmpy3bAZ3IxS0NkRrbWA==",
            "requires": {
                "tslib": "^2.0.0"
            }
        },
        "@angular/platform-browser-dynamic": {
            "version": "11.0.2",
            "resolved": "https://registry.npmjs.org/@angular/platform-browser-dynamic/-/platform-browser-dynamic-11.0.2.tgz",
            "integrity": "sha512-iV7xz90FdmYFiXZRLkZtP9Lr+OXXh4bhkX7zN1L5H8SSUF4iOJGBdOts5Fiy5GZjYYILjF1pJoEIicfW/RSHjA==",
            "requires": {
                "tslib": "^2.0.0"
            }
        },
        "@angular/router": {
            "version": "11.0.2",
            "resolved": "https://registry.npmjs.org/@angular/router/-/router-11.0.2.tgz",
            "integrity": "sha512-EU0lQ+3vv1ozly+Z4SgaGj/6CWMIExjnSnA1F7SI2yWmMgMMSb5CsGJ2xzr0V8ex3XZzuU2VuKF74muC58qSyg==",
            "requires": {
                "tslib": "^2.0.0"
            }
        },
        "@babel/code-frame": {
            "version": "7.10.4",
            "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.10.4.tgz",
            "integrity": "sha512-vG6SvB6oYEhvgisZNFRmRCUkLz11c7rp+tbNTynGqc6mS1d5ATd/sGyV6W0KZZnXRKMTzZDRgQT3Ou9jhpAfUg==",
            "dev": true,
            "requires": {
                "@babel/highlight": "^7.10.4"
            }
        },
        "@babel/compat-data": {
            "version": "7.12.5",
            "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.12.5.tgz",
            "integrity": "sha512-DTsS7cxrsH3by8nqQSpFSyjSfSYl57D6Cf4q8dW3LK83tBKBDCkfcay1nYkXq1nIHXnpX8WMMb/O25HOy3h1zg==",
            "dev": true
        },
        "@babel/core": {
            "version": "7.12.3",
            "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.12.3.tgz",
            "integrity": "sha512-0qXcZYKZp3/6N2jKYVxZv0aNCsxTSVCiK72DTiTYZAu7sjg73W0/aynWjMbiGd87EQL4WyA8reiJVh92AVla9g==",
            "dev": true,
            "requires": {
                "@babel/code-frame": "^7.10.4",
                "@babel/generator": "^7.12.1",
                "@babel/helper-module-transforms": "^7.12.1",
                "@babel/helpers": "^7.12.1",
                "@babel/parser": "^7.12.3",
                "@babel/template": "^7.10.4",
                "@babel/traverse": "^7.12.1",
                "@babel/types": "^7.12.1",
                "convert-source-map": "^1.7.0",
                "debug": "^4.1.0",
                "gensync": "^1.0.0-beta.1",
                "json5": "^2.1.2",
                "lodash": "^4.17.19",
                "resolve": "^1.3.2",
                "semver": "^5.4.1",
                "source-map": "^0.5.0"
            },
            "dependencies": {
                "semver": {
                    "version": "5.7.1",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
                    "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
                    "dev": true
                },
                "source-map": {
                    "version": "0.5.7",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
                    "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
                    "dev": true
                }
            }
        },
        "@babel/generator": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.12.1.tgz",
            "integrity": "sha512-DB+6rafIdc9o72Yc3/Ph5h+6hUjeOp66pF0naQBgUFFuPqzQwIlPTm3xZR7YNvduIMtkDIj2t21LSQwnbCrXvg==",
            "dev": true,
            "requires": {
                "@babel/types": "^7.12.1",
                "jsesc": "^2.5.1",
                "source-map": "^0.5.0"
            },
            "dependencies": {
                "source-map": {
                    "version": "0.5.7",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
                    "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
                    "dev": true
                }
            }
        },
        "@babel/helper-annotate-as-pure": {
            "version": "7.10.4",
            "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.10.4.tgz",
            "integrity": "sha512-XQlqKQP4vXFB7BN8fEEerrmYvHp3fK/rBkRFz9jaJbzK0B1DSfej9Kc7ZzE8Z/OnId1jpJdNAZ3BFQjWG68rcA==",
            "dev": true,
            "requires": {
                "@babel/types": "^7.10.4"
            }
        },
        "@babel/helper-builder-binary-assignment-operator-visitor": {
            "version": "7.10.4",
            "resolved": "https://registry.npmjs.org/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.10.4.tgz",
            "integrity": "sha512-L0zGlFrGWZK4PbT8AszSfLTM5sDU1+Az/En9VrdT8/LmEiJt4zXt+Jve9DCAnQcbqDhCI+29y/L93mrDzddCcg==",
            "dev": true,
            "requires": {
                "@babel/helper-explode-assignable-expression": "^7.10.4",
                "@babel/types": "^7.10.4"
            }
        },
        "@babel/helper-compilation-targets": {
            "version": "7.12.5",
            "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.12.5.tgz",
            "integrity": "sha512-+qH6NrscMolUlzOYngSBMIOQpKUGPPsc61Bu5W10mg84LxZ7cmvnBHzARKbDoFxVvqqAbj6Tg6N7bSrWSPXMyw==",
            "dev": true,
            "requires": {
                "@babel/compat-data": "^7.12.5",
                "@babel/helper-validator-option": "^7.12.1",
                "browserslist": "^4.14.5",
                "semver": "^5.5.0"
            },
            "dependencies": {
                "semver": {
                    "version": "5.7.1",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
                    "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
                    "dev": true
                }
            }
        },
        "@babel/helper-create-class-features-plugin": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.12.1.tgz",
            "integrity": "sha512-hkL++rWeta/OVOBTRJc9a5Azh5mt5WgZUGAKMD8JM141YsE08K//bp1unBBieO6rUKkIPyUE0USQ30jAy3Sk1w==",
            "dev": true,
            "requires": {
                "@babel/helper-function-name": "^7.10.4",
                "@babel/helper-member-expression-to-functions": "^7.12.1",
                "@babel/helper-optimise-call-expression": "^7.10.4",
                "@babel/helper-replace-supers": "^7.12.1",
                "@babel/helper-split-export-declaration": "^7.10.4"
            }
        },
        "@babel/helper-create-regexp-features-plugin": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.12.1.tgz",
            "integrity": "sha512-rsZ4LGvFTZnzdNZR5HZdmJVuXK8834R5QkF3WvcnBhrlVtF0HSIUC6zbreL9MgjTywhKokn8RIYRiq99+DLAxA==",
            "dev": true,
            "requires": {
                "@babel/helper-annotate-as-pure": "^7.10.4",
                "@babel/helper-regex": "^7.10.4",
                "regexpu-core": "^4.7.1"
            }
        },
        "@babel/helper-define-map": {
            "version": "7.10.5",
            "resolved": "https://registry.npmjs.org/@babel/helper-define-map/-/helper-define-map-7.10.5.tgz",
            "integrity": "sha512-fMw4kgFB720aQFXSVaXr79pjjcW5puTCM16+rECJ/plGS+zByelE8l9nCpV1GibxTnFVmUuYG9U8wYfQHdzOEQ==",
            "dev": true,
            "requires": {
                "@babel/helper-function-name": "^7.10.4",
                "@babel/types": "^7.10.5",
                "lodash": "^4.17.19"
            }
        },
        "@babel/helper-explode-assignable-expression": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/helper-explode-assignable-expression/-/helper-explode-assignable-expression-7.12.1.tgz",
            "integrity": "sha512-dmUwH8XmlrUpVqgtZ737tK88v07l840z9j3OEhCLwKTkjlvKpfqXVIZ0wpK3aeOxspwGrf/5AP5qLx4rO3w5rA==",
            "dev": true,
            "requires": {
                "@babel/types": "^7.12.1"
            }
        },
        "@babel/helper-function-name": {
            "version": "7.10.4",
            "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.10.4.tgz",
            "integrity": "sha512-YdaSyz1n8gY44EmN7x44zBn9zQ1Ry2Y+3GTA+3vH6Mizke1Vw0aWDM66FOYEPw8//qKkmqOckrGgTYa+6sceqQ==",
            "dev": true,
            "requires": {
                "@babel/helper-get-function-arity": "^7.10.4",
                "@babel/template": "^7.10.4",
                "@babel/types": "^7.10.4"
            }
        },
        "@babel/helper-get-function-arity": {
            "version": "7.10.4",
            "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.10.4.tgz",
            "integrity": "sha512-EkN3YDB+SRDgiIUnNgcmiD361ti+AVbL3f3Henf6dqqUyr5dMsorno0lJWJuLhDhkI5sYEpgj6y9kB8AOU1I2A==",
            "dev": true,
            "requires": {
                "@babel/types": "^7.10.4"
            }
        },
        "@babel/helper-hoist-variables": {
            "version": "7.10.4",
            "resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.10.4.tgz",
            "integrity": "sha512-wljroF5PgCk2juF69kanHVs6vrLwIPNp6DLD+Lrl3hoQ3PpPPikaDRNFA+0t81NOoMt2DL6WW/mdU8k4k6ZzuA==",
            "dev": true,
            "requires": {
                "@babel/types": "^7.10.4"
            }
        },
        "@babel/helper-member-expression-to-functions": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.12.1.tgz",
            "integrity": "sha512-k0CIe3tXUKTRSoEx1LQEPFU9vRQfqHtl+kf8eNnDqb4AUJEy5pz6aIiog+YWtVm2jpggjS1laH68bPsR+KWWPQ==",
            "dev": true,
            "requires": {
                "@babel/types": "^7.12.1"
            }
        },
        "@babel/helper-module-imports": {
            "version": "7.12.5",
            "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.12.5.tgz",
            "integrity": "sha512-SR713Ogqg6++uexFRORf/+nPXMmWIn80TALu0uaFb+iQIUoR7bOC7zBWyzBs5b3tBBJXuyD0cRu1F15GyzjOWA==",
            "dev": true,
            "requires": {
                "@babel/types": "^7.12.5"
            }
        },
        "@babel/helper-module-transforms": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.12.1.tgz",
            "integrity": "sha512-QQzehgFAZ2bbISiCpmVGfiGux8YVFXQ0abBic2Envhej22DVXV9nCFaS5hIQbkyo1AdGb+gNME2TSh3hYJVV/w==",
            "dev": true,
            "requires": {
                "@babel/helper-module-imports": "^7.12.1",
                "@babel/helper-replace-supers": "^7.12.1",
                "@babel/helper-simple-access": "^7.12.1",
                "@babel/helper-split-export-declaration": "^7.11.0",
                "@babel/helper-validator-identifier": "^7.10.4",
                "@babel/template": "^7.10.4",
                "@babel/traverse": "^7.12.1",
                "@babel/types": "^7.12.1",
                "lodash": "^4.17.19"
            }
        },
        "@babel/helper-optimise-call-expression": {
            "version": "7.10.4",
            "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.10.4.tgz",
            "integrity": "sha512-n3UGKY4VXwXThEiKrgRAoVPBMqeoPgHVqiHZOanAJCG9nQUL2pLRQirUzl0ioKclHGpGqRgIOkgcIJaIWLpygg==",
            "dev": true,
            "requires": {
                "@babel/types": "^7.10.4"
            }
        },
        "@babel/helper-plugin-utils": {
            "version": "7.10.4",
            "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.10.4.tgz",
            "integrity": "sha512-O4KCvQA6lLiMU9l2eawBPMf1xPP8xPfB3iEQw150hOVTqj/rfXz0ThTb4HEzqQfs2Bmo5Ay8BzxfzVtBrr9dVg==",
            "dev": true
        },
        "@babel/helper-regex": {
            "version": "7.10.5",
            "resolved": "https://registry.npmjs.org/@babel/helper-regex/-/helper-regex-7.10.5.tgz",
            "integrity": "sha512-68kdUAzDrljqBrio7DYAEgCoJHxppJOERHOgOrDN7WjOzP0ZQ1LsSDRXcemzVZaLvjaJsJEESb6qt+znNuENDg==",
            "dev": true,
            "requires": {
                "lodash": "^4.17.19"
            }
        },
        "@babel/helper-remap-async-to-generator": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/helper-remap-async-to-generator/-/helper-remap-async-to-generator-7.12.1.tgz",
            "integrity": "sha512-9d0KQCRM8clMPcDwo8SevNs+/9a8yWVVmaE80FGJcEP8N1qToREmWEGnBn8BUlJhYRFz6fqxeRL1sl5Ogsed7A==",
            "dev": true,
            "requires": {
                "@babel/helper-annotate-as-pure": "^7.10.4",
                "@babel/helper-wrap-function": "^7.10.4",
                "@babel/types": "^7.12.1"
            }
        },
        "@babel/helper-replace-supers": {
            "version": "7.12.5",
            "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.12.5.tgz",
            "integrity": "sha512-5YILoed0ZyIpF4gKcpZitEnXEJ9UoDRki1Ey6xz46rxOzfNMAhVIJMoune1hmPVxh40LRv1+oafz7UsWX+vyWA==",
            "dev": true,
            "requires": {
                "@babel/helper-member-expression-to-functions": "^7.12.1",
                "@babel/helper-optimise-call-expression": "^7.10.4",
                "@babel/traverse": "^7.12.5",
                "@babel/types": "^7.12.5"
            }
        },
        "@babel/helper-simple-access": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.12.1.tgz",
            "integrity": "sha512-OxBp7pMrjVewSSC8fXDFrHrBcJATOOFssZwv16F3/6Xtc138GHybBfPbm9kfiqQHKhYQrlamWILwlDCeyMFEaA==",
            "dev": true,
            "requires": {
                "@babel/types": "^7.12.1"
            }
        },
        "@babel/helper-skip-transparent-expression-wrappers": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/helper-skip-transparent-expression-wrappers/-/helper-skip-transparent-expression-wrappers-7.12.1.tgz",
            "integrity": "sha512-Mf5AUuhG1/OCChOJ/HcADmvcHM42WJockombn8ATJG3OnyiSxBK/Mm5x78BQWvmtXZKHgbjdGL2kin/HOLlZGA==",
            "dev": true,
            "requires": {
                "@babel/types": "^7.12.1"
            }
        },
        "@babel/helper-split-export-declaration": {
            "version": "7.11.0",
            "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.11.0.tgz",
            "integrity": "sha512-74Vejvp6mHkGE+m+k5vHY93FX2cAtrw1zXrZXRlG4l410Nm9PxfEiVTn1PjDPV5SnmieiueY4AFg2xqhNFuuZg==",
            "dev": true,
            "requires": {
                "@babel/types": "^7.11.0"
            }
        },
        "@babel/helper-validator-identifier": {
            "version": "7.10.4",
            "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.10.4.tgz",
            "integrity": "sha512-3U9y+43hz7ZM+rzG24Qe2mufW5KhvFg/NhnNph+i9mgCtdTCtMJuI1TMkrIUiK7Ix4PYlRF9I5dhqaLYA/ADXw==",
            "dev": true
        },
        "@babel/helper-validator-option": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.12.1.tgz",
            "integrity": "sha512-YpJabsXlJVWP0USHjnC/AQDTLlZERbON577YUVO/wLpqyj6HAtVYnWaQaN0iUN+1/tWn3c+uKKXjRut5115Y2A==",
            "dev": true
        },
        "@babel/helper-wrap-function": {
            "version": "7.12.3",
            "resolved": "https://registry.npmjs.org/@babel/helper-wrap-function/-/helper-wrap-function-7.12.3.tgz",
            "integrity": "sha512-Cvb8IuJDln3rs6tzjW3Y8UeelAOdnpB8xtQ4sme2MSZ9wOxrbThporC0y/EtE16VAtoyEfLM404Xr1e0OOp+ow==",
            "dev": true,
            "requires": {
                "@babel/helper-function-name": "^7.10.4",
                "@babel/template": "^7.10.4",
                "@babel/traverse": "^7.10.4",
                "@babel/types": "^7.10.4"
            }
        },
        "@babel/helpers": {
            "version": "7.12.5",
            "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.12.5.tgz",
            "integrity": "sha512-lgKGMQlKqA8meJqKsW6rUnc4MdUk35Ln0ATDqdM1a/UpARODdI4j5Y5lVfUScnSNkJcdCRAaWkspykNoFg9sJA==",
            "dev": true,
            "requires": {
                "@babel/template": "^7.10.4",
                "@babel/traverse": "^7.12.5",
                "@babel/types": "^7.12.5"
            }
        },
        "@babel/highlight": {
            "version": "7.10.4",
            "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.10.4.tgz",
            "integrity": "sha512-i6rgnR/YgPEQzZZnbTHHuZdlE8qyoBNalD6F+q4vAFlcMEcqmkoG+mPqJYJCo63qPf74+Y1UZsl3l6f7/RIkmA==",
            "dev": true,
            "requires": {
                "@babel/helper-validator-identifier": "^7.10.4",
                "chalk": "^2.0.0",
                "js-tokens": "^4.0.0"
            }
        },
        "@babel/parser": {
            "version": "7.12.5",
            "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.12.5.tgz",
            "integrity": "sha512-FVM6RZQ0mn2KCf1VUED7KepYeUWoVShczewOCfm3nzoBybaih51h+sYVVGthW9M6lPByEPTQf+xm27PBdlpwmQ==",
            "dev": true
        },
        "@babel/plugin-proposal-async-generator-functions": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-async-generator-functions/-/plugin-proposal-async-generator-functions-7.12.1.tgz",
            "integrity": "sha512-d+/o30tJxFxrA1lhzJqiUcEJdI6jKlNregCv5bASeGf2Q4MXmnwH7viDo7nhx1/ohf09oaH8j1GVYG/e3Yqk6A==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4",
                "@babel/helper-remap-async-to-generator": "^7.12.1",
                "@babel/plugin-syntax-async-generators": "^7.8.0"
            }
        },
        "@babel/plugin-proposal-class-properties": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-class-properties/-/plugin-proposal-class-properties-7.12.1.tgz",
            "integrity": "sha512-cKp3dlQsFsEs5CWKnN7BnSHOd0EOW8EKpEjkoz1pO2E5KzIDNV9Ros1b0CnmbVgAGXJubOYVBOGCT1OmJwOI7w==",
            "dev": true,
            "requires": {
                "@babel/helper-create-class-features-plugin": "^7.12.1",
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-proposal-dynamic-import": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-dynamic-import/-/plugin-proposal-dynamic-import-7.12.1.tgz",
            "integrity": "sha512-a4rhUSZFuq5W8/OO8H7BL5zspjnc1FLd9hlOxIK/f7qG4a0qsqk8uvF/ywgBA8/OmjsapjpvaEOYItfGG1qIvQ==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4",
                "@babel/plugin-syntax-dynamic-import": "^7.8.0"
            }
        },
        "@babel/plugin-proposal-export-namespace-from": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-export-namespace-from/-/plugin-proposal-export-namespace-from-7.12.1.tgz",
            "integrity": "sha512-6CThGf0irEkzujYS5LQcjBx8j/4aQGiVv7J9+2f7pGfxqyKh3WnmVJYW3hdrQjyksErMGBPQrCnHfOtna+WLbw==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4",
                "@babel/plugin-syntax-export-namespace-from": "^7.8.3"
            }
        },
        "@babel/plugin-proposal-json-strings": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-json-strings/-/plugin-proposal-json-strings-7.12.1.tgz",
            "integrity": "sha512-GoLDUi6U9ZLzlSda2Df++VSqDJg3CG+dR0+iWsv6XRw1rEq+zwt4DirM9yrxW6XWaTpmai1cWJLMfM8qQJf+yw==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4",
                "@babel/plugin-syntax-json-strings": "^7.8.0"
            }
        },
        "@babel/plugin-proposal-logical-assignment-operators": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-logical-assignment-operators/-/plugin-proposal-logical-assignment-operators-7.12.1.tgz",
            "integrity": "sha512-k8ZmVv0JU+4gcUGeCDZOGd0lCIamU/sMtIiX3UWnUc5yzgq6YUGyEolNYD+MLYKfSzgECPcqetVcJP9Afe/aCA==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4",
                "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4"
            }
        },
        "@babel/plugin-proposal-nullish-coalescing-operator": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-nullish-coalescing-operator/-/plugin-proposal-nullish-coalescing-operator-7.12.1.tgz",
            "integrity": "sha512-nZY0ESiaQDI1y96+jk6VxMOaL4LPo/QDHBqL+SF3/vl6dHkTwHlOI8L4ZwuRBHgakRBw5zsVylel7QPbbGuYgg==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4",
                "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.0"
            }
        },
        "@babel/plugin-proposal-numeric-separator": {
            "version": "7.12.5",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-numeric-separator/-/plugin-proposal-numeric-separator-7.12.5.tgz",
            "integrity": "sha512-UiAnkKuOrCyjZ3sYNHlRlfuZJbBHknMQ9VMwVeX97Ofwx7RpD6gS2HfqTCh8KNUQgcOm8IKt103oR4KIjh7Q8g==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4",
                "@babel/plugin-syntax-numeric-separator": "^7.10.4"
            }
        },
        "@babel/plugin-proposal-object-rest-spread": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-object-rest-spread/-/plugin-proposal-object-rest-spread-7.12.1.tgz",
            "integrity": "sha512-s6SowJIjzlhx8o7lsFx5zmY4At6CTtDvgNQDdPzkBQucle58A6b/TTeEBYtyDgmcXjUTM+vE8YOGHZzzbc/ioA==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4",
                "@babel/plugin-syntax-object-rest-spread": "^7.8.0",
                "@babel/plugin-transform-parameters": "^7.12.1"
            }
        },
        "@babel/plugin-proposal-optional-catch-binding": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-catch-binding/-/plugin-proposal-optional-catch-binding-7.12.1.tgz",
            "integrity": "sha512-hFvIjgprh9mMw5v42sJWLI1lzU5L2sznP805zeT6rySVRA0Y18StRhDqhSxlap0oVgItRsB6WSROp4YnJTJz0g==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4",
                "@babel/plugin-syntax-optional-catch-binding": "^7.8.0"
            }
        },
        "@babel/plugin-proposal-optional-chaining": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-chaining/-/plugin-proposal-optional-chaining-7.12.1.tgz",
            "integrity": "sha512-c2uRpY6WzaVDzynVY9liyykS+kVU+WRZPMPYpkelXH8KBt1oXoI89kPbZKKG/jDT5UK92FTW2fZkZaJhdiBabw==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4",
                "@babel/helper-skip-transparent-expression-wrappers": "^7.12.1",
                "@babel/plugin-syntax-optional-chaining": "^7.8.0"
            }
        },
        "@babel/plugin-proposal-private-methods": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-private-methods/-/plugin-proposal-private-methods-7.12.1.tgz",
            "integrity": "sha512-mwZ1phvH7/NHK6Kf8LP7MYDogGV+DKB1mryFOEwx5EBNQrosvIczzZFTUmWaeujd5xT6G1ELYWUz3CutMhjE1w==",
            "dev": true,
            "requires": {
                "@babel/helper-create-class-features-plugin": "^7.12.1",
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-proposal-unicode-property-regex": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-unicode-property-regex/-/plugin-proposal-unicode-property-regex-7.12.1.tgz",
            "integrity": "sha512-MYq+l+PvHuw/rKUz1at/vb6nCnQ2gmJBNaM62z0OgH7B2W1D9pvkpYtlti9bGtizNIU1K3zm4bZF9F91efVY0w==",
            "dev": true,
            "requires": {
                "@babel/helper-create-regexp-features-plugin": "^7.12.1",
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-syntax-async-generators": {
            "version": "7.8.4",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.8.4.tgz",
            "integrity": "sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.8.0"
            }
        },
        "@babel/plugin-syntax-bigint": {
            "version": "7.8.3",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-bigint/-/plugin-syntax-bigint-7.8.3.tgz",
            "integrity": "sha512-wnTnFlG+YxQm3vDxpGE57Pj0srRU4sHE/mDkt1qv2YJJSeUAec2ma4WLUnUPeKjyrfntVwe/N6dCXpU+zL3Npg==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.8.0"
            }
        },
        "@babel/plugin-syntax-class-properties": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-properties/-/plugin-syntax-class-properties-7.12.1.tgz",
            "integrity": "sha512-U40A76x5gTwmESz+qiqssqmeEsKvcSyvtgktrm0uzcARAmM9I1jR221f6Oq+GmHrcD+LvZDag1UTOTe2fL3TeA==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-syntax-dynamic-import": {
            "version": "7.8.3",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-dynamic-import/-/plugin-syntax-dynamic-import-7.8.3.tgz",
            "integrity": "sha512-5gdGbFon+PszYzqs83S3E5mpi7/y/8M9eC90MRTZfduQOYW76ig6SOSPNe41IG5LoP3FGBn2N0RjVDSQiS94kQ==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.8.0"
            }
        },
        "@babel/plugin-syntax-export-namespace-from": {
            "version": "7.8.3",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-export-namespace-from/-/plugin-syntax-export-namespace-from-7.8.3.tgz",
            "integrity": "sha512-MXf5laXo6c1IbEbegDmzGPwGNTsHZmEy6QGznu5Sh2UCWvueywb2ee+CCE4zQiZstxU9BMoQO9i6zUFSY0Kj0Q==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.8.3"
            }
        },
        "@babel/plugin-syntax-import-meta": {
            "version": "7.10.4",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-import-meta/-/plugin-syntax-import-meta-7.10.4.tgz",
            "integrity": "sha512-Yqfm+XDx0+Prh3VSeEQCPU81yC+JWZ2pDPFSS4ZdpfZhp4MkFMaDC1UqseovEKwSUpnIL7+vK+Clp7bfh0iD7g==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-syntax-json-strings": {
            "version": "7.8.3",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.8.3.tgz",
            "integrity": "sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.8.0"
            }
        },
        "@babel/plugin-syntax-logical-assignment-operators": {
            "version": "7.10.4",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-logical-assignment-operators/-/plugin-syntax-logical-assignment-operators-7.10.4.tgz",
            "integrity": "sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-syntax-nullish-coalescing-operator": {
            "version": "7.8.3",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz",
            "integrity": "sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.8.0"
            }
        },
        "@babel/plugin-syntax-numeric-separator": {
            "version": "7.10.4",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-numeric-separator/-/plugin-syntax-numeric-separator-7.10.4.tgz",
            "integrity": "sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-syntax-object-rest-spread": {
            "version": "7.8.3",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.8.3.tgz",
            "integrity": "sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.8.0"
            }
        },
        "@babel/plugin-syntax-optional-catch-binding": {
            "version": "7.8.3",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.8.3.tgz",
            "integrity": "sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.8.0"
            }
        },
        "@babel/plugin-syntax-optional-chaining": {
            "version": "7.8.3",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-chaining/-/plugin-syntax-optional-chaining-7.8.3.tgz",
            "integrity": "sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.8.0"
            }
        },
        "@babel/plugin-syntax-top-level-await": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-top-level-await/-/plugin-syntax-top-level-await-7.12.1.tgz",
            "integrity": "sha512-i7ooMZFS+a/Om0crxZodrTzNEPJHZrlMVGMTEpFAj6rYY/bKCddB0Dk/YxfPuYXOopuhKk/e1jV6h+WUU9XN3A==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-transform-arrow-functions": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-arrow-functions/-/plugin-transform-arrow-functions-7.12.1.tgz",
            "integrity": "sha512-5QB50qyN44fzzz4/qxDPQMBCTHgxg3n0xRBLJUmBlLoU/sFvxVWGZF/ZUfMVDQuJUKXaBhbupxIzIfZ6Fwk/0A==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-transform-async-to-generator": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-async-to-generator/-/plugin-transform-async-to-generator-7.12.1.tgz",
            "integrity": "sha512-SDtqoEcarK1DFlRJ1hHRY5HvJUj5kX4qmtpMAm2QnhOlyuMC4TMdCRgW6WXpv93rZeYNeLP22y8Aq2dbcDRM1A==",
            "dev": true,
            "requires": {
                "@babel/helper-module-imports": "^7.12.1",
                "@babel/helper-plugin-utils": "^7.10.4",
                "@babel/helper-remap-async-to-generator": "^7.12.1"
            }
        },
        "@babel/plugin-transform-block-scoped-functions": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoped-functions/-/plugin-transform-block-scoped-functions-7.12.1.tgz",
            "integrity": "sha512-5OpxfuYnSgPalRpo8EWGPzIYf0lHBWORCkj5M0oLBwHdlux9Ri36QqGW3/LR13RSVOAoUUMzoPI/jpE4ABcHoA==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-transform-block-scoping": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoping/-/plugin-transform-block-scoping-7.12.1.tgz",
            "integrity": "sha512-zJyAC9sZdE60r1nVQHblcfCj29Dh2Y0DOvlMkcqSo0ckqjiCwNiUezUKw+RjOCwGfpLRwnAeQ2XlLpsnGkvv9w==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-transform-classes": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-classes/-/plugin-transform-classes-7.12.1.tgz",
            "integrity": "sha512-/74xkA7bVdzQTBeSUhLLJgYIcxw/dpEpCdRDiHgPJ3Mv6uC11UhjpOhl72CgqbBCmt1qtssCyB2xnJm1+PFjog==",
            "dev": true,
            "requires": {
                "@babel/helper-annotate-as-pure": "^7.10.4",
                "@babel/helper-define-map": "^7.10.4",
                "@babel/helper-function-name": "^7.10.4",
                "@babel/helper-optimise-call-expression": "^7.10.4",
                "@babel/helper-plugin-utils": "^7.10.4",
                "@babel/helper-replace-supers": "^7.12.1",
                "@babel/helper-split-export-declaration": "^7.10.4",
                "globals": "^11.1.0"
            }
        },
        "@babel/plugin-transform-computed-properties": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-computed-properties/-/plugin-transform-computed-properties-7.12.1.tgz",
            "integrity": "sha512-vVUOYpPWB7BkgUWPo4C44mUQHpTZXakEqFjbv8rQMg7TC6S6ZhGZ3otQcRH6u7+adSlE5i0sp63eMC/XGffrzg==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-transform-destructuring": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-destructuring/-/plugin-transform-destructuring-7.12.1.tgz",
            "integrity": "sha512-fRMYFKuzi/rSiYb2uRLiUENJOKq4Gnl+6qOv5f8z0TZXg3llUwUhsNNwrwaT/6dUhJTzNpBr+CUvEWBtfNY1cw==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-transform-dotall-regex": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-dotall-regex/-/plugin-transform-dotall-regex-7.12.1.tgz",
            "integrity": "sha512-B2pXeRKoLszfEW7J4Hg9LoFaWEbr/kzo3teWHmtFCszjRNa/b40f9mfeqZsIDLLt/FjwQ6pz/Gdlwy85xNckBA==",
            "dev": true,
            "requires": {
                "@babel/helper-create-regexp-features-plugin": "^7.12.1",
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-transform-duplicate-keys": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-duplicate-keys/-/plugin-transform-duplicate-keys-7.12.1.tgz",
            "integrity": "sha512-iRght0T0HztAb/CazveUpUQrZY+aGKKaWXMJ4uf9YJtqxSUe09j3wteztCUDRHs+SRAL7yMuFqUsLoAKKzgXjw==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-transform-exponentiation-operator": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-exponentiation-operator/-/plugin-transform-exponentiation-operator-7.12.1.tgz",
            "integrity": "sha512-7tqwy2bv48q+c1EHbXK0Zx3KXd2RVQp6OC7PbwFNt/dPTAV3Lu5sWtWuAj8owr5wqtWnqHfl2/mJlUmqkChKug==",
            "dev": true,
            "requires": {
                "@babel/helper-builder-binary-assignment-operator-visitor": "^7.10.4",
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-transform-for-of": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-for-of/-/plugin-transform-for-of-7.12.1.tgz",
            "integrity": "sha512-Zaeq10naAsuHo7heQvyV0ptj4dlZJwZgNAtBYBnu5nNKJoW62m0zKcIEyVECrUKErkUkg6ajMy4ZfnVZciSBhg==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-transform-function-name": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-function-name/-/plugin-transform-function-name-7.12.1.tgz",
            "integrity": "sha512-JF3UgJUILoFrFMEnOJLJkRHSk6LUSXLmEFsA23aR2O5CSLUxbeUX1IZ1YQ7Sn0aXb601Ncwjx73a+FVqgcljVw==",
            "dev": true,
            "requires": {
                "@babel/helper-function-name": "^7.10.4",
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-transform-literals": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-literals/-/plugin-transform-literals-7.12.1.tgz",
            "integrity": "sha512-+PxVGA+2Ag6uGgL0A5f+9rklOnnMccwEBzwYFL3EUaKuiyVnUipyXncFcfjSkbimLrODoqki1U9XxZzTvfN7IQ==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-transform-member-expression-literals": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-member-expression-literals/-/plugin-transform-member-expression-literals-7.12.1.tgz",
            "integrity": "sha512-1sxePl6z9ad0gFMB9KqmYofk34flq62aqMt9NqliS/7hPEpURUCMbyHXrMPlo282iY7nAvUB1aQd5mg79UD9Jg==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-transform-modules-amd": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-amd/-/plugin-transform-modules-amd-7.12.1.tgz",
            "integrity": "sha512-tDW8hMkzad5oDtzsB70HIQQRBiTKrhfgwC/KkJeGsaNFTdWhKNt/BiE8c5yj19XiGyrxpbkOfH87qkNg1YGlOQ==",
            "dev": true,
            "requires": {
                "@babel/helper-module-transforms": "^7.12.1",
                "@babel/helper-plugin-utils": "^7.10.4",
                "babel-plugin-dynamic-import-node": "^2.3.3"
            }
        },
        "@babel/plugin-transform-modules-commonjs": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-commonjs/-/plugin-transform-modules-commonjs-7.12.1.tgz",
            "integrity": "sha512-dY789wq6l0uLY8py9c1B48V8mVL5gZh/+PQ5ZPrylPYsnAvnEMjqsUXkuoDVPeVK+0VyGar+D08107LzDQ6pag==",
            "dev": true,
            "requires": {
                "@babel/helper-module-transforms": "^7.12.1",
                "@babel/helper-plugin-utils": "^7.10.4",
                "@babel/helper-simple-access": "^7.12.1",
                "babel-plugin-dynamic-import-node": "^2.3.3"
            }
        },
        "@babel/plugin-transform-modules-systemjs": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-systemjs/-/plugin-transform-modules-systemjs-7.12.1.tgz",
            "integrity": "sha512-Hn7cVvOavVh8yvW6fLwveFqSnd7rbQN3zJvoPNyNaQSvgfKmDBO9U1YL9+PCXGRlZD9tNdWTy5ACKqMuzyn32Q==",
            "dev": true,
            "requires": {
                "@babel/helper-hoist-variables": "^7.10.4",
                "@babel/helper-module-transforms": "^7.12.1",
                "@babel/helper-plugin-utils": "^7.10.4",
                "@babel/helper-validator-identifier": "^7.10.4",
                "babel-plugin-dynamic-import-node": "^2.3.3"
            }
        },
        "@babel/plugin-transform-modules-umd": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-umd/-/plugin-transform-modules-umd-7.12.1.tgz",
            "integrity": "sha512-aEIubCS0KHKM0zUos5fIoQm+AZUMt1ZvMpqz0/H5qAQ7vWylr9+PLYurT+Ic7ID/bKLd4q8hDovaG3Zch2uz5Q==",
            "dev": true,
            "requires": {
                "@babel/helper-module-transforms": "^7.12.1",
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-transform-named-capturing-groups-regex": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-named-capturing-groups-regex/-/plugin-transform-named-capturing-groups-regex-7.12.1.tgz",
            "integrity": "sha512-tB43uQ62RHcoDp9v2Nsf+dSM8sbNodbEicbQNA53zHz8pWUhsgHSJCGpt7daXxRydjb0KnfmB+ChXOv3oADp1Q==",
            "dev": true,
            "requires": {
                "@babel/helper-create-regexp-features-plugin": "^7.12.1"
            }
        },
        "@babel/plugin-transform-new-target": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-new-target/-/plugin-transform-new-target-7.12.1.tgz",
            "integrity": "sha512-+eW/VLcUL5L9IvJH7rT1sT0CzkdUTvPrXC2PXTn/7z7tXLBuKvezYbGdxD5WMRoyvyaujOq2fWoKl869heKjhw==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-transform-object-super": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-object-super/-/plugin-transform-object-super-7.12.1.tgz",
            "integrity": "sha512-AvypiGJH9hsquNUn+RXVcBdeE3KHPZexWRdimhuV59cSoOt5kFBmqlByorAeUlGG2CJWd0U+4ZtNKga/TB0cAw==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4",
                "@babel/helper-replace-supers": "^7.12.1"
            }
        },
        "@babel/plugin-transform-parameters": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-parameters/-/plugin-transform-parameters-7.12.1.tgz",
            "integrity": "sha512-xq9C5EQhdPK23ZeCdMxl8bbRnAgHFrw5EOC3KJUsSylZqdkCaFEXxGSBuTSObOpiiHHNyb82es8M1QYgfQGfNg==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-transform-property-literals": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-property-literals/-/plugin-transform-property-literals-7.12.1.tgz",
            "integrity": "sha512-6MTCR/mZ1MQS+AwZLplX4cEySjCpnIF26ToWo942nqn8hXSm7McaHQNeGx/pt7suI1TWOWMfa/NgBhiqSnX0cQ==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-transform-regenerator": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-regenerator/-/plugin-transform-regenerator-7.12.1.tgz",
            "integrity": "sha512-gYrHqs5itw6i4PflFX3OdBPMQdPbF4bj2REIUxlMRUFk0/ZOAIpDFuViuxPjUL7YC8UPnf+XG7/utJvqXdPKng==",
            "dev": true,
            "requires": {
                "regenerator-transform": "^0.14.2"
            }
        },
        "@babel/plugin-transform-reserved-words": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-reserved-words/-/plugin-transform-reserved-words-7.12.1.tgz",
            "integrity": "sha512-pOnUfhyPKvZpVyBHhSBoX8vfA09b7r00Pmm1sH+29ae2hMTKVmSp4Ztsr8KBKjLjx17H0eJqaRC3bR2iThM54A==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-transform-runtime": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-runtime/-/plugin-transform-runtime-7.12.1.tgz",
            "integrity": "sha512-Ac/H6G9FEIkS2tXsZjL4RAdS3L3WHxci0usAnz7laPWUmFiGtj7tIASChqKZMHTSQTQY6xDbOq+V1/vIq3QrWg==",
            "dev": true,
            "requires": {
                "@babel/helper-module-imports": "^7.12.1",
                "@babel/helper-plugin-utils": "^7.10.4",
                "resolve": "^1.8.1",
                "semver": "^5.5.1"
            },
            "dependencies": {
                "semver": {
                    "version": "5.7.1",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
                    "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
                    "dev": true
                }
            }
        },
        "@babel/plugin-transform-shorthand-properties": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-shorthand-properties/-/plugin-transform-shorthand-properties-7.12.1.tgz",
            "integrity": "sha512-GFZS3c/MhX1OusqB1MZ1ct2xRzX5ppQh2JU1h2Pnfk88HtFTM+TWQqJNfwkmxtPQtb/s1tk87oENfXJlx7rSDw==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-transform-spread": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-spread/-/plugin-transform-spread-7.12.1.tgz",
            "integrity": "sha512-vuLp8CP0BE18zVYjsEBZ5xoCecMK6LBMMxYzJnh01rxQRvhNhH1csMMmBfNo5tGpGO+NhdSNW2mzIvBu3K1fng==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4",
                "@babel/helper-skip-transparent-expression-wrappers": "^7.12.1"
            }
        },
        "@babel/plugin-transform-sticky-regex": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-sticky-regex/-/plugin-transform-sticky-regex-7.12.1.tgz",
            "integrity": "sha512-CiUgKQ3AGVk7kveIaPEET1jNDhZZEl1RPMWdTBE1799bdz++SwqDHStmxfCtDfBhQgCl38YRiSnrMuUMZIWSUQ==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4",
                "@babel/helper-regex": "^7.10.4"
            }
        },
        "@babel/plugin-transform-template-literals": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-template-literals/-/plugin-transform-template-literals-7.12.1.tgz",
            "integrity": "sha512-b4Zx3KHi+taXB1dVRBhVJtEPi9h1THCeKmae2qP0YdUHIFhVjtpqqNfxeVAa1xeHVhAy4SbHxEwx5cltAu5apw==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-transform-typeof-symbol": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typeof-symbol/-/plugin-transform-typeof-symbol-7.12.1.tgz",
            "integrity": "sha512-EPGgpGy+O5Kg5pJFNDKuxt9RdmTgj5sgrus2XVeMp/ZIbOESadgILUbm50SNpghOh3/6yrbsH+NB5+WJTmsA7Q==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-transform-unicode-escapes": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-escapes/-/plugin-transform-unicode-escapes-7.12.1.tgz",
            "integrity": "sha512-I8gNHJLIc7GdApm7wkVnStWssPNbSRMPtgHdmH3sRM1zopz09UWPS4x5V4n1yz/MIWTVnJ9sp6IkuXdWM4w+2Q==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-transform-unicode-regex": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-regex/-/plugin-transform-unicode-regex-7.12.1.tgz",
            "integrity": "sha512-SqH4ClNngh/zGwHZOOQMTD+e8FGWexILV+ePMyiDJttAWRh5dhDL8rcl5lSgU3Huiq6Zn6pWTMvdPAb21Dwdyg==",
            "dev": true,
            "requires": {
                "@babel/helper-create-regexp-features-plugin": "^7.12.1",
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/preset-env": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/preset-env/-/preset-env-7.12.1.tgz",
            "integrity": "sha512-H8kxXmtPaAGT7TyBvSSkoSTUK6RHh61So05SyEbpmr0MCZrsNYn7mGMzzeYoOUCdHzww61k8XBft2TaES+xPLg==",
            "dev": true,
            "requires": {
                "@babel/compat-data": "^7.12.1",
                "@babel/helper-compilation-targets": "^7.12.1",
                "@babel/helper-module-imports": "^7.12.1",
                "@babel/helper-plugin-utils": "^7.10.4",
                "@babel/helper-validator-option": "^7.12.1",
                "@babel/plugin-proposal-async-generator-functions": "^7.12.1",
                "@babel/plugin-proposal-class-properties": "^7.12.1",
                "@babel/plugin-proposal-dynamic-import": "^7.12.1",
                "@babel/plugin-proposal-export-namespace-from": "^7.12.1",
                "@babel/plugin-proposal-json-strings": "^7.12.1",
                "@babel/plugin-proposal-logical-assignment-operators": "^7.12.1",
                "@babel/plugin-proposal-nullish-coalescing-operator": "^7.12.1",
                "@babel/plugin-proposal-numeric-separator": "^7.12.1",
                "@babel/plugin-proposal-object-rest-spread": "^7.12.1",
                "@babel/plugin-proposal-optional-catch-binding": "^7.12.1",
                "@babel/plugin-proposal-optional-chaining": "^7.12.1",
                "@babel/plugin-proposal-private-methods": "^7.12.1",
                "@babel/plugin-proposal-unicode-property-regex": "^7.12.1",
                "@babel/plugin-syntax-async-generators": "^7.8.0",
                "@babel/plugin-syntax-class-properties": "^7.12.1",
                "@babel/plugin-syntax-dynamic-import": "^7.8.0",
                "@babel/plugin-syntax-export-namespace-from": "^7.8.3",
                "@babel/plugin-syntax-json-strings": "^7.8.0",
                "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4",
                "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.0",
                "@babel/plugin-syntax-numeric-separator": "^7.10.4",
                "@babel/plugin-syntax-object-rest-spread": "^7.8.0",
                "@babel/plugin-syntax-optional-catch-binding": "^7.8.0",
                "@babel/plugin-syntax-optional-chaining": "^7.8.0",
                "@babel/plugin-syntax-top-level-await": "^7.12.1",
                "@babel/plugin-transform-arrow-functions": "^7.12.1",
                "@babel/plugin-transform-async-to-generator": "^7.12.1",
                "@babel/plugin-transform-block-scoped-functions": "^7.12.1",
                "@babel/plugin-transform-block-scoping": "^7.12.1",
                "@babel/plugin-transform-classes": "^7.12.1",
                "@babel/plugin-transform-computed-properties": "^7.12.1",
                "@babel/plugin-transform-destructuring": "^7.12.1",
                "@babel/plugin-transform-dotall-regex": "^7.12.1",
                "@babel/plugin-transform-duplicate-keys": "^7.12.1",
                "@babel/plugin-transform-exponentiation-operator": "^7.12.1",
                "@babel/plugin-transform-for-of": "^7.12.1",
                "@babel/plugin-transform-function-name": "^7.12.1",
                "@babel/plugin-transform-literals": "^7.12.1",
                "@babel/plugin-transform-member-expression-literals": "^7.12.1",
                "@babel/plugin-transform-modules-amd": "^7.12.1",
                "@babel/plugin-transform-modules-commonjs": "^7.12.1",
                "@babel/plugin-transform-modules-systemjs": "^7.12.1",
                "@babel/plugin-transform-modules-umd": "^7.12.1",
                "@babel/plugin-transform-named-capturing-groups-regex": "^7.12.1",
                "@babel/plugin-transform-new-target": "^7.12.1",
                "@babel/plugin-transform-object-super": "^7.12.1",
                "@babel/plugin-transform-parameters": "^7.12.1",
                "@babel/plugin-transform-property-literals": "^7.12.1",
                "@babel/plugin-transform-regenerator": "^7.12.1",
                "@babel/plugin-transform-reserved-words": "^7.12.1",
                "@babel/plugin-transform-shorthand-properties": "^7.12.1",
                "@babel/plugin-transform-spread": "^7.12.1",
                "@babel/plugin-transform-sticky-regex": "^7.12.1",
                "@babel/plugin-transform-template-literals": "^7.12.1",
                "@babel/plugin-transform-typeof-symbol": "^7.12.1",
                "@babel/plugin-transform-unicode-escapes": "^7.12.1",
                "@babel/plugin-transform-unicode-regex": "^7.12.1",
                "@babel/preset-modules": "^0.1.3",
                "@babel/types": "^7.12.1",
                "core-js-compat": "^3.6.2",
                "semver": "^5.5.0"
            },
            "dependencies": {
                "semver": {
                    "version": "5.7.1",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
                    "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
                    "dev": true
                }
            }
        },
        "@babel/preset-modules": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/@babel/preset-modules/-/preset-modules-0.1.4.tgz",
            "integrity": "sha512-J36NhwnfdzpmH41M1DrnkkgAqhZaqr/NBdPfQ677mLzlaXo+oDiv1deyCDtgAhz8p328otdob0Du7+xgHGZbKg==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.0.0",
                "@babel/plugin-proposal-unicode-property-regex": "^7.4.4",
                "@babel/plugin-transform-dotall-regex": "^7.4.4",
                "@babel/types": "^7.4.4",
                "esutils": "^2.0.2"
            }
        },
        "@babel/runtime": {
            "version": "7.12.1",
            "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.12.1.tgz",
            "integrity": "sha512-J5AIf3vPj3UwXaAzb5j1xM4WAQDX3EMgemF8rjCP3SoW09LfRKAXQKt6CoVYl230P6iWdRcBbnLDDdnqWxZSCA==",
            "dev": true,
            "requires": {
                "regenerator-runtime": "^0.13.4"
            }
        },
        "@babel/template": {
            "version": "7.10.4",
            "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.10.4.tgz",
            "integrity": "sha512-ZCjD27cGJFUB6nmCB1Enki3r+L5kJveX9pq1SvAUKoICy6CZ9yD8xO086YXdYhvNjBdnekm4ZnaP5yC8Cs/1tA==",
            "dev": true,
            "requires": {
                "@babel/code-frame": "^7.10.4",
                "@babel/parser": "^7.10.4",
                "@babel/types": "^7.10.4"
            }
        },
        "@babel/traverse": {
            "version": "7.12.5",
            "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.12.5.tgz",
            "integrity": "sha512-xa15FbQnias7z9a62LwYAA5SZZPkHIXpd42C6uW68o8uTuua96FHZy1y61Va5P/i83FAAcMpW8+A/QayntzuqA==",
            "dev": true,
            "requires": {
                "@babel/code-frame": "^7.10.4",
                "@babel/generator": "^7.12.5",
                "@babel/helper-function-name": "^7.10.4",
                "@babel/helper-split-export-declaration": "^7.11.0",
                "@babel/parser": "^7.12.5",
                "@babel/types": "^7.12.5",
                "debug": "^4.1.0",
                "globals": "^11.1.0",
                "lodash": "^4.17.19"
            },
            "dependencies": {
                "@babel/generator": {
                    "version": "7.12.5",
                    "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.12.5.tgz",
                    "integrity": "sha512-m16TQQJ8hPt7E+OS/XVQg/7U184MLXtvuGbCdA7na61vha+ImkyyNM/9DDA0unYCVZn3ZOhng+qz48/KBOT96A==",
                    "dev": true,
                    "requires": {
                        "@babel/types": "^7.12.5",
                        "jsesc": "^2.5.1",
                        "source-map": "^0.5.0"
                    }
                },
                "source-map": {
                    "version": "0.5.7",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
                    "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
                    "dev": true
                }
            }
        },
        "@babel/types": {
            "version": "7.12.6",
            "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.12.6.tgz",
            "integrity": "sha512-hwyjw6GvjBLiyy3W0YQf0Z5Zf4NpYejUnKFcfcUhZCSffoBBp30w6wP2Wn6pk31jMYZvcOrB/1b7cGXvEoKogA==",
            "dev": true,
            "requires": {
                "@babel/helper-validator-identifier": "^7.10.4",
                "lodash": "^4.17.19",
                "to-fast-properties": "^2.0.0"
            }
        },
        "@bcoe/v8-coverage": {
            "version": "0.2.3",
            "resolved": "https://registry.npmjs.org/@bcoe/v8-coverage/-/v8-coverage-0.2.3.tgz",
            "integrity": "sha512-0hYQ8SB4Db5zvZB4axdMHGwEaQjkZzFjQiN9LVYvIFB2nSUHW9tYpxWriPrWDASIxiaXax83REcLxuSdnGPZtw==",
            "dev": true
        },
        "@briebug/jest-schematic": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/@briebug/jest-schematic/-/jest-schematic-3.1.0.tgz",
            "integrity": "sha512-ys/CggnFmspfmcf2SG0b4zYDjNzBs1/YhU0S5NA2YGmEE8onFNXw6aC5bVs63I0ZgHgvyvkhlOEr81XXvuzIiA==",
            "requires": {
                "@angular-devkit/core": "^10.0.6",
                "@angular-devkit/schematics": "^10.0.6",
                "@schematics/angular": "^10.0.6",
                "@schuchard/schematics-core": "^0.4.0",
                "rxjs": "6.5.5"
            },
            "dependencies": {
                "@angular-devkit/core": {
                    "version": "10.2.0",
                    "resolved": "https://registry.npmjs.org/@angular-devkit/core/-/core-10.2.0.tgz",
                    "integrity": "sha512-XAszFhSF3mZw1VjoOsYGbArr5NJLcStjOvcCGjBPl1UBM2AKpuCQXHxI9XJGYKL3B93Vp5G58d8qkHvamT53OA==",
                    "requires": {
                        "ajv": "6.12.4",
                        "fast-json-stable-stringify": "2.1.0",
                        "magic-string": "0.25.7",
                        "rxjs": "6.6.2",
                        "source-map": "0.7.3"
                    },
                    "dependencies": {
                        "rxjs": {
                            "version": "6.6.2",
                            "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.6.2.tgz",
                            "integrity": "sha512-BHdBMVoWC2sL26w//BCu3YzKT4s2jip/WhwsGEDmeKYBhKDZeYezVUnHatYB7L85v5xs0BAQmg6BEYJEKxBabg==",
                            "requires": {
                                "tslib": "^1.9.0"
                            }
                        }
                    }
                },
                "@angular-devkit/schematics": {
                    "version": "10.2.0",
                    "resolved": "https://registry.npmjs.org/@angular-devkit/schematics/-/schematics-10.2.0.tgz",
                    "integrity": "sha512-TQI5NnE6iM3ChF5gZQ9qb+lZgMWa7aLoF5ksOyT3zrmOuICiQYJhA6SsjV95q7J4M55qYymwBib8KTqU/xuQww==",
                    "requires": {
                        "@angular-devkit/core": "10.2.0",
                        "ora": "5.0.0",
                        "rxjs": "6.6.2"
                    },
                    "dependencies": {
                        "rxjs": {
                            "version": "6.6.2",
                            "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.6.2.tgz",
                            "integrity": "sha512-BHdBMVoWC2sL26w//BCu3YzKT4s2jip/WhwsGEDmeKYBhKDZeYezVUnHatYB7L85v5xs0BAQmg6BEYJEKxBabg==",
                            "requires": {
                                "tslib": "^1.9.0"
                            }
                        }
                    }
                },
                "@schematics/angular": {
                    "version": "10.2.0",
                    "resolved": "https://registry.npmjs.org/@schematics/angular/-/angular-10.2.0.tgz",
                    "integrity": "sha512-rJRTTTL8CMMFb3ebCvAVHKHxuNzRqy/HtbXhJ82l5Xo/jXcm74eV2Q0RBUrNo1yBKWFIR+FIwiXLJaGcC/R9Pw==",
                    "requires": {
                        "@angular-devkit/core": "10.2.0",
                        "@angular-devkit/schematics": "10.2.0",
                        "jsonc-parser": "2.3.0"
                    }
                },
                "ajv": {
                    "version": "6.12.4",
                    "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.4.tgz",
                    "integrity": "sha512-eienB2c9qVQs2KWexhkrdMLVDoIQCz5KSeLxwg9Lzk4DOfBtIK9PQwwufcsn1jjGuf9WZmqPMbGxOzfcuphJCQ==",
                    "requires": {
                        "fast-deep-equal": "^3.1.1",
                        "fast-json-stable-stringify": "^2.0.0",
                        "json-schema-traverse": "^0.4.1",
                        "uri-js": "^4.2.2"
                    }
                },
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
                },
                "jsonc-parser": {
                    "version": "2.3.0",
                    "resolved": "https://registry.npmjs.org/jsonc-parser/-/jsonc-parser-2.3.0.tgz",
                    "integrity": "sha512-b0EBt8SWFNnixVdvoR2ZtEGa9ZqLhbJnOjezn+WP+8kspFm+PFYDN8Z4Bc7pRlDjvuVcADSUkroIuTWWn/YiIA=="
                },
                "ora": {
                    "version": "5.0.0",
                    "resolved": "https://registry.npmjs.org/ora/-/ora-5.0.0.tgz",
                    "integrity": "sha512-s26qdWqke2kjN/wC4dy+IQPBIMWBJlSU/0JZhk30ZDBLelW25rv66yutUWARMigpGPzcXHb+Nac5pNhN/WsARw==",
                    "requires": {
                        "chalk": "^4.1.0",
                        "cli-cursor": "^3.1.0",
                        "cli-spinners": "^2.4.0",
                        "is-interactive": "^1.0.0",
                        "log-symbols": "^4.0.0",
                        "mute-stream": "0.0.8",
                        "strip-ansi": "^6.0.0",
                        "wcwidth": "^1.0.1"
                    }
                },
                "rxjs": {
                    "version": "6.5.5",
                    "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.5.5.tgz",
                    "integrity": "sha512-WfQI+1gohdf0Dai/Bbmk5L5ItH5tYqm3ki2c5GdWhKjalzjg93N3avFjVStyZZz+A2Em+ZxKH5bNghw9UeylGQ==",
                    "requires": {
                        "tslib": "^1.9.0"
                    }
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                },
                "tslib": {
                    "version": "1.14.1",
                    "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
                    "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
                }
            }
        },
        "@cnakazawa/watch": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/@cnakazawa/watch/-/watch-1.0.4.tgz",
            "integrity": "sha512-v9kIhKwjeZThiWrLmj0y17CWoyddASLj9O2yvbZkbvw/N3rWOYy9zkV66ursAoVr0mV15bL8g0c4QZUE6cdDoQ==",
            "dev": true,
            "requires": {
                "exec-sh": "^0.3.2",
                "minimist": "^1.2.0"
            }
        },
        "@eslint/eslintrc": {
            "version": "0.2.1",
            "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-0.2.1.tgz",
            "integrity": "sha512-XRUeBZ5zBWLYgSANMpThFddrZZkEbGHgUdt5UJjZfnlN9BGCiUBrf+nvbRupSjMvqzwnQN0qwCmOxITt1cfywA==",
            "dev": true,
            "requires": {
                "ajv": "^6.12.4",
                "debug": "^4.1.1",
                "espree": "^7.3.0",
                "globals": "^12.1.0",
                "ignore": "^4.0.6",
                "import-fresh": "^3.2.1",
                "js-yaml": "^3.13.1",
                "lodash": "^4.17.19",
                "minimatch": "^3.0.4",
                "strip-json-comments": "^3.1.1"
            },
            "dependencies": {
                "globals": {
                    "version": "12.4.0",
                    "resolved": "https://registry.npmjs.org/globals/-/globals-12.4.0.tgz",
                    "integrity": "sha512-BWICuzzDvDoH54NHKCseDanAhE3CeDorgDL5MT6LMXXj2WCnd9UC2szdk4AWLfjdgNBCXLUanXYcpBBKOSWGwg==",
                    "dev": true,
                    "requires": {
                        "type-fest": "^0.8.1"
                    }
                },
                "ignore": {
                    "version": "4.0.6",
                    "resolved": "https://registry.npmjs.org/ignore/-/ignore-4.0.6.tgz",
                    "integrity": "sha512-cyFDKrqc/YdcWFniJhzI42+AzS+gNwmUzOSFcRCQYwySuBBBy/KjuxWLZ/FHEH6Moq1NizMOBWyTcv8O4OZIMg==",
                    "dev": true
                },
                "import-fresh": {
                    "version": "3.2.2",
                    "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.2.2.tgz",
                    "integrity": "sha512-cTPNrlvJT6twpYy+YmKUKrTSjWFs3bjYjAhCwm+z4EOCubZxAuO+hHpRN64TqjEaYSHs7tJAE0w1CKMGmsG/lw==",
                    "dev": true,
                    "requires": {
                        "parent-module": "^1.0.0",
                        "resolve-from": "^4.0.0"
                    }
                },
                "resolve-from": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
                    "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
                    "dev": true
                },
                "type-fest": {
                    "version": "0.8.1",
                    "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
                    "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
                    "dev": true
                }
            }
        },
        "@istanbuljs/load-nyc-config": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/@istanbuljs/load-nyc-config/-/load-nyc-config-1.1.0.tgz",
            "integrity": "sha512-VjeHSlIzpv/NyD3N0YuHfXOPDIixcA1q2ZV98wsMqcYlPmv2n3Yb2lYP9XMElnaFVXg5A7YLTeLu6V84uQDjmQ==",
            "dev": true,
            "requires": {
                "camelcase": "^5.3.1",
                "find-up": "^4.1.0",
                "get-package-type": "^0.1.0",
                "js-yaml": "^3.13.1",
                "resolve-from": "^5.0.0"
            },
            "dependencies": {
                "camelcase": {
                    "version": "5.3.1",
                    "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
                    "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
                    "dev": true
                },
                "find-up": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
                    "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
                    "dev": true,
                    "requires": {
                        "locate-path": "^5.0.0",
                        "path-exists": "^4.0.0"
                    }
                },
                "locate-path": {
                    "version": "5.0.0",
                    "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
                    "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
                    "dev": true,
                    "requires": {
                        "p-locate": "^4.1.0"
                    }
                },
                "p-locate": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
                    "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
                    "dev": true,
                    "requires": {
                        "p-limit": "^2.2.0"
                    }
                },
                "path-exists": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
                    "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
                    "dev": true
                },
                "resolve-from": {
                    "version": "5.0.0",
                    "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
                    "integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==",
                    "dev": true
                }
            }
        },
        "@istanbuljs/schema": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/@istanbuljs/schema/-/schema-0.1.2.tgz",
            "integrity": "sha512-tsAQNx32a8CoFhjhijUIhI4kccIAgmGhy8LZMZgGfmXcpMbPRUqn5LWmgRttILi6yeGmBJd2xsPkFMs0PzgPCw==",
            "dev": true
        },
        "@jest/console": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/@jest/console/-/console-26.6.2.tgz",
            "integrity": "sha512-IY1R2i2aLsLr7Id3S6p2BA82GNWryt4oSvEXLAKc+L2zdi89dSkE8xC1C+0kpATG4JhBJREnQOH7/zmccM2B0g==",
            "dev": true,
            "requires": {
                "@jest/types": "^26.6.2",
                "@types/node": "*",
                "chalk": "^4.0.0",
                "jest-message-util": "^26.6.2",
                "jest-util": "^26.6.2",
                "slash": "^3.0.0"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "@jest/core": {
            "version": "26.6.3",
            "resolved": "https://registry.npmjs.org/@jest/core/-/core-26.6.3.tgz",
            "integrity": "sha512-xvV1kKbhfUqFVuZ8Cyo+JPpipAHHAV3kcDBftiduK8EICXmTFddryy3P7NfZt8Pv37rA9nEJBKCCkglCPt/Xjw==",
            "dev": true,
            "requires": {
                "@jest/console": "^26.6.2",
                "@jest/reporters": "^26.6.2",
                "@jest/test-result": "^26.6.2",
                "@jest/transform": "^26.6.2",
                "@jest/types": "^26.6.2",
                "@types/node": "*",
                "ansi-escapes": "^4.2.1",
                "chalk": "^4.0.0",
                "exit": "^0.1.2",
                "graceful-fs": "^4.2.4",
                "jest-changed-files": "^26.6.2",
                "jest-config": "^26.6.3",
                "jest-haste-map": "^26.6.2",
                "jest-message-util": "^26.6.2",
                "jest-regex-util": "^26.0.0",
                "jest-resolve": "^26.6.2",
                "jest-resolve-dependencies": "^26.6.3",
                "jest-runner": "^26.6.3",
                "jest-runtime": "^26.6.3",
                "jest-snapshot": "^26.6.2",
                "jest-util": "^26.6.2",
                "jest-validate": "^26.6.2",
                "jest-watcher": "^26.6.2",
                "micromatch": "^4.0.2",
                "p-each-series": "^2.1.0",
                "rimraf": "^3.0.0",
                "slash": "^3.0.0",
                "strip-ansi": "^6.0.0"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "@jest/environment": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/@jest/environment/-/environment-26.6.2.tgz",
            "integrity": "sha512-nFy+fHl28zUrRsCeMB61VDThV1pVTtlEokBRgqPrcT1JNq4yRNIyTHfyht6PqtUvY9IsuLGTrbG8kPXjSZIZwA==",
            "dev": true,
            "requires": {
                "@jest/fake-timers": "^26.6.2",
                "@jest/types": "^26.6.2",
                "@types/node": "*",
                "jest-mock": "^26.6.2"
            }
        },
        "@jest/fake-timers": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-26.6.2.tgz",
            "integrity": "sha512-14Uleatt7jdzefLPYM3KLcnUl1ZNikaKq34enpb5XG9i81JpppDb5muZvonvKyrl7ftEHkKS5L5/eB/kxJ+bvA==",
            "dev": true,
            "requires": {
                "@jest/types": "^26.6.2",
                "@sinonjs/fake-timers": "^6.0.1",
                "@types/node": "*",
                "jest-message-util": "^26.6.2",
                "jest-mock": "^26.6.2",
                "jest-util": "^26.6.2"
            }
        },
        "@jest/globals": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/@jest/globals/-/globals-26.6.2.tgz",
            "integrity": "sha512-85Ltnm7HlB/KesBUuALwQ68YTU72w9H2xW9FjZ1eL1U3lhtefjjl5c2MiUbpXt/i6LaPRvoOFJ22yCBSfQ0JIA==",
            "dev": true,
            "requires": {
                "@jest/environment": "^26.6.2",
                "@jest/types": "^26.6.2",
                "expect": "^26.6.2"
            }
        },
        "@jest/reporters": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/@jest/reporters/-/reporters-26.6.2.tgz",
            "integrity": "sha512-h2bW53APG4HvkOnVMo8q3QXa6pcaNt1HkwVsOPMBV6LD/q9oSpxNSYZQYkAnjdMjrJ86UuYeLo+aEZClV6opnw==",
            "dev": true,
            "requires": {
                "@bcoe/v8-coverage": "^0.2.3",
                "@jest/console": "^26.6.2",
                "@jest/test-result": "^26.6.2",
                "@jest/transform": "^26.6.2",
                "@jest/types": "^26.6.2",
                "chalk": "^4.0.0",
                "collect-v8-coverage": "^1.0.0",
                "exit": "^0.1.2",
                "glob": "^7.1.2",
                "graceful-fs": "^4.2.4",
                "istanbul-lib-coverage": "^3.0.0",
                "istanbul-lib-instrument": "^4.0.3",
                "istanbul-lib-report": "^3.0.0",
                "istanbul-lib-source-maps": "^4.0.0",
                "istanbul-reports": "^3.0.2",
                "jest-haste-map": "^26.6.2",
                "jest-resolve": "^26.6.2",
                "jest-util": "^26.6.2",
                "jest-worker": "^26.6.2",
                "node-notifier": "^8.0.0",
                "slash": "^3.0.0",
                "source-map": "^0.6.0",
                "string-length": "^4.0.1",
                "terminal-link": "^2.0.0",
                "v8-to-istanbul": "^7.0.0"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "jest-worker": {
                    "version": "26.6.2",
                    "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-26.6.2.tgz",
                    "integrity": "sha512-KWYVV1c4i+jbMpaBC+U++4Va0cp8OisU185o73T1vo99hqi7w8tSJfUXYswwqqrjzwxa6KpRK54WhPvwf5w6PQ==",
                    "dev": true,
                    "requires": {
                        "@types/node": "*",
                        "merge-stream": "^2.0.0",
                        "supports-color": "^7.0.0"
                    }
                },
                "source-map": {
                    "version": "0.6.1",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                    "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "@jest/source-map": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-26.6.2.tgz",
            "integrity": "sha512-YwYcCwAnNmOVsZ8mr3GfnzdXDAl4LaenZP5z+G0c8bzC9/dugL8zRmxZzdoTl4IaS3CryS1uWnROLPFmb6lVvA==",
            "dev": true,
            "requires": {
                "callsites": "^3.0.0",
                "graceful-fs": "^4.2.4",
                "source-map": "^0.6.0"
            },
            "dependencies": {
                "callsites": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
                    "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
                    "dev": true
                },
                "source-map": {
                    "version": "0.6.1",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                    "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                    "dev": true
                }
            }
        },
        "@jest/test-result": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-26.6.2.tgz",
            "integrity": "sha512-5O7H5c/7YlojphYNrK02LlDIV2GNPYisKwHm2QTKjNZeEzezCbwYs9swJySv2UfPMyZ0VdsmMv7jIlD/IKYQpQ==",
            "dev": true,
            "requires": {
                "@jest/console": "^26.6.2",
                "@jest/types": "^26.6.2",
                "@types/istanbul-lib-coverage": "^2.0.0",
                "collect-v8-coverage": "^1.0.0"
            }
        },
        "@jest/test-sequencer": {
            "version": "26.6.3",
            "resolved": "https://registry.npmjs.org/@jest/test-sequencer/-/test-sequencer-26.6.3.tgz",
            "integrity": "sha512-YHlVIjP5nfEyjlrSr8t/YdNfU/1XEt7c5b4OxcXCjyRhjzLYu/rO69/WHPuYcbCWkz8kAeZVZp2N2+IOLLEPGw==",
            "dev": true,
            "requires": {
                "@jest/test-result": "^26.6.2",
                "graceful-fs": "^4.2.4",
                "jest-haste-map": "^26.6.2",
                "jest-runner": "^26.6.3",
                "jest-runtime": "^26.6.3"
            }
        },
        "@jest/transform": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/@jest/transform/-/transform-26.6.2.tgz",
            "integrity": "sha512-E9JjhUgNzvuQ+vVAL21vlyfy12gP0GhazGgJC4h6qUt1jSdUXGWJ1wfu/X7Sd8etSgxV4ovT1pb9v5D6QW4XgA==",
            "dev": true,
            "requires": {
                "@babel/core": "^7.1.0",
                "@jest/types": "^26.6.2",
                "babel-plugin-istanbul": "^6.0.0",
                "chalk": "^4.0.0",
                "convert-source-map": "^1.4.0",
                "fast-json-stable-stringify": "^2.0.0",
                "graceful-fs": "^4.2.4",
                "jest-haste-map": "^26.6.2",
                "jest-regex-util": "^26.0.0",
                "jest-util": "^26.6.2",
                "micromatch": "^4.0.2",
                "pirates": "^4.0.1",
                "slash": "^3.0.0",
                "source-map": "^0.6.1",
                "write-file-atomic": "^3.0.0"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "source-map": {
                    "version": "0.6.1",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                    "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "@jest/types": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/@jest/types/-/types-26.6.2.tgz",
            "integrity": "sha512-fC6QCp7Sc5sX6g8Tvbmj4XUTbyrik0akgRy03yjXbQaBWWNWGE7SGtJk98m0N8nzegD/7SggrUlivxo5ax4KWQ==",
            "dev": true,
            "requires": {
                "@types/istanbul-lib-coverage": "^2.0.0",
                "@types/istanbul-reports": "^3.0.0",
                "@types/node": "*",
                "@types/yargs": "^15.0.0",
                "chalk": "^4.0.0"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "@jsdevtools/coverage-istanbul-loader": {
            "version": "3.0.5",
            "resolved": "https://registry.npmjs.org/@jsdevtools/coverage-istanbul-loader/-/coverage-istanbul-loader-3.0.5.tgz",
            "integrity": "sha512-EUCPEkaRPvmHjWAAZkWMT7JDzpw7FKB00WTISaiXsbNOd5hCHg77XLA8sLYLFDo1zepYLo2w7GstN8YBqRXZfA==",
            "dev": true,
            "requires": {
                "convert-source-map": "^1.7.0",
                "istanbul-lib-instrument": "^4.0.3",
                "loader-utils": "^2.0.0",
                "merge-source-map": "^1.1.0",
                "schema-utils": "^2.7.0"
            }
        },
        "@ngtools/webpack": {
            "version": "11.0.2",
            "resolved": "https://registry.npmjs.org/@ngtools/webpack/-/webpack-11.0.2.tgz",
            "integrity": "sha512-GbNP6HMBVoee2CkYW/pknprFCeiOLz4FGE06yr4m0700c1i6wuX7AzyHfBcLGAIP6nVblNOT3eh5M41b3cDf8g==",
            "dev": true,
            "requires": {
                "@angular-devkit/core": "11.0.2",
                "enhanced-resolve": "5.3.1",
                "webpack-sources": "2.0.1"
            }
        },
        "@nodelib/fs.scandir": {
            "version": "2.1.3",
            "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.3.tgz",
            "integrity": "sha512-eGmwYQn3gxo4r7jdQnkrrN6bY478C3P+a/y72IJukF8LjB6ZHeB3c+Ehacj3sYeSmUXGlnA67/PmbM9CVwL7Dw==",
            "dev": true,
            "requires": {
                "@nodelib/fs.stat": "2.0.3",
                "run-parallel": "^1.1.9"
            }
        },
        "@nodelib/fs.stat": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.3.tgz",
            "integrity": "sha512-bQBFruR2TAwoevBEd/NWMoAAtNGzTRgdrqnYCc7dhzfoNvqPzLyqlEQnzZ3kVnNrSp25iyxE00/3h2fqGAGArA==",
            "dev": true
        },
        "@nodelib/fs.walk": {
            "version": "1.2.4",
            "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.4.tgz",
            "integrity": "sha512-1V9XOY4rDW0rehzbrcqAmHnz8e7SKvX27gh8Gt2WgB0+pdzdiLV83p72kZPU+jvMbS1qU5mauP2iOvO8rhmurQ==",
            "dev": true,
            "requires": {
                "@nodelib/fs.scandir": "2.1.3",
                "fastq": "^1.6.0"
            }
        },
        "@npmcli/move-file": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/@npmcli/move-file/-/move-file-1.0.1.tgz",
            "integrity": "sha512-Uv6h1sT+0DrblvIrolFtbvM1FgWm+/sy4B3pvLp67Zys+thcukzS5ekn7HsZFGpWP4Q3fYJCljbWQE/XivMRLw==",
            "dev": true,
            "requires": {
                "mkdirp": "^1.0.4"
            },
            "dependencies": {
                "mkdirp": {
                    "version": "1.0.4",
                    "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
                    "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",
                    "dev": true
                }
            }
        },
        "@phenomnomnominal/tsquery": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/@phenomnomnominal/tsquery/-/tsquery-4.0.0.tgz",
            "integrity": "sha512-s2Yet/MCj9Jh6nR6GfldrUPT6Y+aM1jIAdiKcOKEzmeKALT0Tc7SFIkYP3KvzjzbkKK5W7BiJ3cWy2UOa4ITbw==",
            "requires": {
                "esquery": "^1.0.1"
            }
        },
        "@schematics/angular": {
            "version": "11.0.2",
            "resolved": "https://registry.npmjs.org/@schematics/angular/-/angular-11.0.2.tgz",
            "integrity": "sha512-tUIuCYJUzHYuiXGJ2KCuwxMocS56kPHaM8+neVYWwWbOxKzLZXv80gMm/pIWxrqUDCkIUi3yb4ienudFhgQLYg==",
            "dev": true,
            "requires": {
                "@angular-devkit/core": "11.0.2",
                "@angular-devkit/schematics": "11.0.2",
                "jsonc-parser": "2.3.1"
            }
        },
        "@schematics/update": {
            "version": "0.1100.2",
            "resolved": "https://registry.npmjs.org/@schematics/update/-/update-0.1100.2.tgz",
            "integrity": "sha512-pETCmQylIQ7RM+8uqDkI3KfOaX5H7nuzmMXby28zdLPMZniYti0gJxieiVFhvdz2Ot2Axj0hznfmraFgC9mQMw==",
            "dev": true,
            "requires": {
                "@angular-devkit/core": "11.0.2",
                "@angular-devkit/schematics": "11.0.2",
                "@yarnpkg/lockfile": "1.1.0",
                "ini": "1.3.5",
                "npm-package-arg": "^8.0.0",
                "pacote": "9.5.12",
                "semver": "7.3.2",
                "semver-intersect": "1.4.0"
            }
        },
        "@schuchard/schematics-core": {
            "version": "0.4.1",
            "resolved": "https://registry.npmjs.org/@schuchard/schematics-core/-/schematics-core-0.4.1.tgz",
            "integrity": "sha512-wZHlXjw4nDARMh76MXXv23uwY2zOvmAvK4vnmkyP5L0Q4IMh5vyE/4k1vB66nhRPkUnBEu5IYN385wQQJJwtlA==",
            "requires": {
                "@angular-devkit/core": "8.3.20",
                "@angular-devkit/schematics": "8.3.20",
                "@phenomnomnominal/tsquery": "4.0.0",
                "@schematics/angular": "8.3.20",
                "fuzzy": "0.1.3",
                "inquirer": "7.0.3",
                "inquirer-autocomplete-prompt": "1.0.1",
                "inquirer-fuzzy-path": "2.2.0",
                "lodash": "4.17.19",
                "rxjs": "6.4.0",
                "strip-json-comments": "3.0.1",
                "typescript": "~3.7.2"
            },
            "dependencies": {
                "@angular-devkit/core": {
                    "version": "8.3.20",
                    "resolved": "https://registry.npmjs.org/@angular-devkit/core/-/core-8.3.20.tgz",
                    "integrity": "sha512-UCfW/BJBJnioJU34QennQhA4o+rLoCXWiSrI2LM7yw8/MEM9I8KbqRETP1My3HjHkQnvP+Qh3noedpcu3Nnt8A==",
                    "requires": {
                        "ajv": "6.10.2",
                        "fast-json-stable-stringify": "2.0.0",
                        "magic-string": "0.25.3",
                        "rxjs": "6.4.0",
                        "source-map": "0.7.3"
                    }
                },
                "@angular-devkit/schematics": {
                    "version": "8.3.20",
                    "resolved": "https://registry.npmjs.org/@angular-devkit/schematics/-/schematics-8.3.20.tgz",
                    "integrity": "sha512-sDHZakh4e3A5WenR9zr1x6Va9GNRqQlRhqT3xcbkG88v2M0YqEt7dHB7YwnOhm7zSxiWQM8PdWEQHiQ4iu9NyQ==",
                    "requires": {
                        "@angular-devkit/core": "8.3.20",
                        "rxjs": "6.4.0"
                    }
                },
                "@schematics/angular": {
                    "version": "8.3.20",
                    "resolved": "https://registry.npmjs.org/@schematics/angular/-/angular-8.3.20.tgz",
                    "integrity": "sha512-Y20pSJhQ0KQd8Tk2kPQlmpRDNDaoIKMeOOGLT2FgCFrumxZXuIbBgN9fGDgW40iI2sq80bccOeo24RKkn3QpcA==",
                    "requires": {
                        "@angular-devkit/core": "8.3.20",
                        "@angular-devkit/schematics": "8.3.20"
                    }
                },
                "ajv": {
                    "version": "6.10.2",
                    "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.10.2.tgz",
                    "integrity": "sha512-TXtUUEYHuaTEbLZWIKUr5pmBuhDLy+8KYtPYdcV8qC+pOZL+NKqYwvWSRrVXHn+ZmRRAu8vJTAznH7Oag6RVRw==",
                    "requires": {
                        "fast-deep-equal": "^2.0.1",
                        "fast-json-stable-stringify": "^2.0.0",
                        "json-schema-traverse": "^0.4.1",
                        "uri-js": "^4.2.2"
                    }
                },
                "ansi-regex": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
                    "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg=="
                },
                "cli-width": {
                    "version": "2.2.1",
                    "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-2.2.1.tgz",
                    "integrity": "sha512-GRMWDxpOB6Dgk2E5Uo+3eEBvtOOlimMmpbFiKuLFnQzYDavtLFY3K5ona41jgN/WdRZtG7utuVSVTL4HbZHGkw=="
                },
                "fast-deep-equal": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-2.0.1.tgz",
                    "integrity": "sha1-ewUhjd+WZ79/Nwv3/bLLFf3Qqkk="
                },
                "fast-json-stable-stringify": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.0.0.tgz",
                    "integrity": "sha1-1RQsDK7msRifh9OnYREGT4bIu/I="
                },
                "inquirer": {
                    "version": "7.0.3",
                    "resolved": "https://registry.npmjs.org/inquirer/-/inquirer-7.0.3.tgz",
                    "integrity": "sha512-+OiOVeVydu4hnCGLCSX+wedovR/Yzskv9BFqUNNKq9uU2qg7LCcCo3R86S2E7WLo0y/x2pnEZfZe1CoYnORUAw==",
                    "requires": {
                        "ansi-escapes": "^4.2.1",
                        "chalk": "^2.4.2",
                        "cli-cursor": "^3.1.0",
                        "cli-width": "^2.0.0",
                        "external-editor": "^3.0.3",
                        "figures": "^3.0.0",
                        "lodash": "^4.17.15",
                        "mute-stream": "0.0.8",
                        "run-async": "^2.2.0",
                        "rxjs": "^6.5.3",
                        "string-width": "^4.1.0",
                        "strip-ansi": "^5.1.0",
                        "through": "^2.3.6"
                    },
                    "dependencies": {
                        "rxjs": {
                            "version": "6.6.3",
                            "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.6.3.tgz",
                            "integrity": "sha512-trsQc+xYYXZ3urjOiJOuCOa5N3jAZ3eiSpQB5hIT8zGlL2QfnHLJ2r7GMkBGuIausdJN1OneaI6gQlsqNHHmZQ==",
                            "requires": {
                                "tslib": "^1.9.0"
                            }
                        }
                    }
                },
                "lodash": {
                    "version": "4.17.19",
                    "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.19.tgz",
                    "integrity": "sha512-JNvd8XER9GQX0v2qJgsaN/mzFCNA5BRe/j8JN9d+tWyGLSodKQHKFicdwNYzWwI3wjRnaKPsGj1XkBjx/F96DQ=="
                },
                "magic-string": {
                    "version": "0.25.3",
                    "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.25.3.tgz",
                    "integrity": "sha512-6QK0OpF/phMz0Q2AxILkX2mFhi7m+WMwTRg0LQKq/WBB0cDP4rYH3Wp4/d3OTXlrPLVJT/RFqj8tFeAR4nk8AA==",
                    "requires": {
                        "sourcemap-codec": "^1.4.4"
                    }
                },
                "rxjs": {
                    "version": "6.4.0",
                    "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.4.0.tgz",
                    "integrity": "sha512-Z9Yfa11F6B9Sg/BK9MnqnQ+aQYicPLtilXBp2yUtDt2JRCE0h26d33EnfO3ZxoNxG0T92OUucP3Ct7cpfkdFfw==",
                    "requires": {
                        "tslib": "^1.9.0"
                    }
                },
                "strip-ansi": {
                    "version": "5.2.0",
                    "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
                    "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
                    "requires": {
                        "ansi-regex": "^4.1.0"
                    }
                },
                "strip-json-comments": {
                    "version": "3.0.1",
                    "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.0.1.tgz",
                    "integrity": "sha512-VTyMAUfdm047mwKl+u79WIdrZxtFtn+nBxHeb844XBQ9uMNTuTHdx2hc5RiAJYqwTj3wc/xe5HLSdJSkJ+WfZw=="
                },
                "tslib": {
                    "version": "1.14.1",
                    "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
                    "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
                },
                "typescript": {
                    "version": "3.7.5",
                    "resolved": "https://registry.npmjs.org/typescript/-/typescript-3.7.5.tgz",
                    "integrity": "sha512-/P5lkRXkWHNAbcJIiHPfRoKqyd7bsyCma1hZNUGfn20qm64T6ZBlrzprymeu918H+mB/0rIg2gGK/BXkhhYgBw=="
                }
            }
        },
        "@sindresorhus/is": {
            "version": "0.14.0",
            "resolved": "https://registry.npmjs.org/@sindresorhus/is/-/is-0.14.0.tgz",
            "integrity": "sha512-9NET910DNaIPngYnLLPeg+Ogzqsi9uM4mSboU5y6p8S5DzMTVEsJZrawi+BoDNUVBa2DhJqQYUFvMDfgU062LQ==",
            "dev": true
        },
        "@sinonjs/commons": {
            "version": "1.8.1",
            "resolved": "https://registry.npmjs.org/@sinonjs/commons/-/commons-1.8.1.tgz",
            "integrity": "sha512-892K+kWUUi3cl+LlqEWIDrhvLgdL79tECi8JZUyq6IviKy/DNhuzCRlbHUjxK89f4ypPMMaFnFuR9Ie6DoIMsw==",
            "dev": true,
            "requires": {
                "type-detect": "4.0.8"
            }
        },
        "@sinonjs/fake-timers": {
            "version": "6.0.1",
            "resolved": "https://registry.npmjs.org/@sinonjs/fake-timers/-/fake-timers-6.0.1.tgz",
            "integrity": "sha512-MZPUxrmFubI36XS1DI3qmI0YdN1gks62JtFZvxR67ljjSNCeK6U08Zx4msEWOXuofgqUt6zPHSi1H9fbjR/NRA==",
            "dev": true,
            "requires": {
                "@sinonjs/commons": "^1.7.0"
            }
        },
        "@szmarczak/http-timer": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/@szmarczak/http-timer/-/http-timer-1.1.2.tgz",
            "integrity": "sha512-XIB2XbzHTN6ieIjfIMV9hlVcfPU26s2vafYWQcZHWXHOxiaRZYEDKEwdl129Zyg50+foYV2jCgtrqSA6qNuNSA==",
            "dev": true,
            "requires": {
                "defer-to-connect": "^1.0.1"
            }
        },
        "@types/babel__core": {
            "version": "7.1.12",
            "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.1.12.tgz",
            "integrity": "sha512-wMTHiiTiBAAPebqaPiPDLFA4LYPKr6Ph0Xq/6rq1Ur3v66HXyG+clfR9CNETkD7MQS8ZHvpQOtA53DLws5WAEQ==",
            "dev": true,
            "requires": {
                "@babel/parser": "^7.1.0",
                "@babel/types": "^7.0.0",
                "@types/babel__generator": "*",
                "@types/babel__template": "*",
                "@types/babel__traverse": "*"
            }
        },
        "@types/babel__generator": {
            "version": "7.6.2",
            "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.6.2.tgz",
            "integrity": "sha512-MdSJnBjl+bdwkLskZ3NGFp9YcXGx5ggLpQQPqtgakVhsWK0hTtNYhjpZLlWQTviGTvF8at+Bvli3jV7faPdgeQ==",
            "dev": true,
            "requires": {
                "@babel/types": "^7.0.0"
            }
        },
        "@types/babel__template": {
            "version": "7.4.0",
            "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.0.tgz",
            "integrity": "sha512-NTPErx4/FiPCGScH7foPyr+/1Dkzkni+rHiYHHoTjvwou7AQzJkNeD60A9CXRy+ZEN2B1bggmkTMCDb+Mv5k+A==",
            "dev": true,
            "requires": {
                "@babel/parser": "^7.1.0",
                "@babel/types": "^7.0.0"
            }
        },
        "@types/babel__traverse": {
            "version": "7.0.15",
            "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.0.15.tgz",
            "integrity": "sha512-Pzh9O3sTK8V6I1olsXpCfj2k/ygO2q1X0vhhnDrEQyYLHZesWz+zMZMVcwXLCYf0U36EtmyYaFGPfXlTtDHe3A==",
            "dev": true,
            "requires": {
                "@babel/types": "^7.3.0"
            }
        },
        "@types/glob": {
            "version": "7.1.3",
            "resolved": "https://registry.npmjs.org/@types/glob/-/glob-7.1.3.tgz",
            "integrity": "sha512-SEYeGAIQIQX8NN6LDKprLjbrd5dARM5EXsd8GI/A5l0apYI1fGMWgPHSe4ZKL4eozlAyI+doUE9XbYS4xCkQ1w==",
            "dev": true,
            "requires": {
                "@types/minimatch": "*",
                "@types/node": "*"
            }
        },
        "@types/graceful-fs": {
            "version": "4.1.4",
            "resolved": "https://registry.npmjs.org/@types/graceful-fs/-/graceful-fs-4.1.4.tgz",
            "integrity": "sha512-mWA/4zFQhfvOA8zWkXobwJvBD7vzcxgrOQ0J5CH1votGqdq9m7+FwtGaqyCZqC3NyyBkc9z4m+iry4LlqcMWJg==",
            "dev": true,
            "requires": {
                "@types/node": "*"
            }
        },
        "@types/istanbul-lib-coverage": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/@types/istanbul-lib-coverage/-/istanbul-lib-coverage-2.0.3.tgz",
            "integrity": "sha512-sz7iLqvVUg1gIedBOvlkxPlc8/uVzyS5OwGz1cKjXzkl3FpL3al0crU8YGU1WoHkxn0Wxbw5tyi6hvzJKNzFsw==",
            "dev": true
        },
        "@types/istanbul-lib-report": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/@types/istanbul-lib-report/-/istanbul-lib-report-3.0.0.tgz",
            "integrity": "sha512-plGgXAPfVKFoYfa9NpYDAkseG+g6Jr294RqeqcqDixSbU34MZVJRi/P+7Y8GDpzkEwLaGZZOpKIEmeVZNtKsrg==",
            "dev": true,
            "requires": {
                "@types/istanbul-lib-coverage": "*"
            }
        },
        "@types/istanbul-reports": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-3.0.0.tgz",
            "integrity": "sha512-nwKNbvnwJ2/mndE9ItP/zc2TCzw6uuodnF4EHYWD+gCQDVBuRQL5UzbZD0/ezy1iKsFU2ZQiDqg4M9dN4+wZgA==",
            "dev": true,
            "requires": {
                "@types/istanbul-lib-report": "*"
            }
        },
        "@types/jasmine": {
            "version": "3.6.2",
            "resolved": "https://registry.npmjs.org/@types/jasmine/-/jasmine-3.6.2.tgz",
            "integrity": "sha512-AzfesNFLvOs6Q1mHzIsVJXSeUnqVh4ZHG8ngygKJfbkcSLwzrBVm/LKa+mR8KrOfnWtUL47112gde1MC0IXqpQ==",
            "dev": true
        },
        "@types/jest": {
            "version": "26.0.15",
            "resolved": "https://registry.npmjs.org/@types/jest/-/jest-26.0.15.tgz",
            "integrity": "sha512-s2VMReFXRg9XXxV+CW9e5Nz8fH2K1aEhwgjUqPPbQd7g95T0laAcvLv032EhFHIa5GHsZ8W7iJEQVaJq6k3Gog==",
            "dev": true,
            "requires": {
                "jest-diff": "^26.0.0",
                "pretty-format": "^26.0.0"
            }
        },
        "@types/jquery": {
            "version": "3.5.4",
            "resolved": "https://registry.npmjs.org/@types/jquery/-/jquery-3.5.4.tgz",
            "integrity": "sha512-//9CHhaUt/rurMJTxGI+I6DmsNHgYU6d8aSLFfO5dB7+10lwLnaWT0z5GY/yY82Q/M+B+0Qh3TixlJ8vmBeqIw==",
            "requires": {
                "@types/sizzle": "*"
            }
        },
        "@types/json-schema": {
            "version": "7.0.6",
            "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.6.tgz",
            "integrity": "sha512-3c+yGKvVP5Y9TYBEibGNR+kLtijnj7mYrXRg+WpFb2X9xm04g/DXYkfg4hmzJQosc9snFNUPkbYIhu+KAm6jJw==",
            "dev": true
        },
        "@types/json5": {
            "version": "0.0.29",
            "resolved": "https://registry.npmjs.org/@types/json5/-/json5-0.0.29.tgz",
            "integrity": "sha1-7ihweulOEdK4J7y+UnC86n8+ce4=",
            "dev": true
        },
        "@types/minimatch": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/@types/minimatch/-/minimatch-3.0.3.tgz",
            "integrity": "sha512-tHq6qdbT9U1IRSGf14CL0pUlULksvY9OZ+5eEgl1N7t+OA3tGvNpxJCzuKQlsNgCVwbAs670L1vcVQi8j9HjnA==",
            "dev": true
        },
        "@types/node": {
            "version": "12.19.5",
            "resolved": "https://registry.npmjs.org/@types/node/-/node-12.19.5.tgz",
            "integrity": "sha512-Wgdl27uw/jUYUFyajUGKSjDNGxmJrZi9sjeG6UJImgUtKbJoO9aldx+1XODN1EpNDX9DirvbvHHmTsNlb8GwMA==",
            "dev": true
        },
        "@types/normalize-package-data": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/@types/normalize-package-data/-/normalize-package-data-2.4.0.tgz",
            "integrity": "sha512-f5j5b/Gf71L+dbqxIpQ4Z2WlmI/mPJ0fOkGGmFgtb6sAu97EPczzbS3/tJKxmcYDj55OX6ssqwDAWOHIYDRDGA==",
            "dev": true
        },
        "@types/parse-json": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/@types/parse-json/-/parse-json-4.0.0.tgz",
            "integrity": "sha512-//oorEZjL6sbPcKUaCdIGlIUeH26mgzimjBB77G6XRgnDl/L5wOnpyBGRe/Mmf5CVW3PwEBE1NjiMZ/ssFh4wA==",
            "dev": true
        },
        "@types/prettier": {
            "version": "2.1.5",
            "resolved": "https://registry.npmjs.org/@types/prettier/-/prettier-2.1.5.tgz",
            "integrity": "sha512-UEyp8LwZ4Dg30kVU2Q3amHHyTn1jEdhCIE59ANed76GaT1Vp76DD3ZWSAxgCrw6wJ0TqeoBpqmfUHiUDPs//HQ==",
            "dev": true
        },
        "@types/q": {
            "version": "1.5.4",
            "resolved": "https://registry.npmjs.org/@types/q/-/q-1.5.4.tgz",
            "integrity": "sha512-1HcDas8SEj4z1Wc696tH56G8OlRaH/sqZOynNNB+HF0WOeXPaxTtbYzJY2oEfiUxjSKjhCKr+MvR7dCHcEelug==",
            "dev": true
        },
        "@types/selenium-webdriver": {
            "version": "3.0.17",
            "resolved": "https://registry.npmjs.org/@types/selenium-webdriver/-/selenium-webdriver-3.0.17.tgz",
            "integrity": "sha512-tGomyEuzSC1H28y2zlW6XPCaDaXFaD6soTdb4GNdmte2qfHtrKqhy0ZFs4r/1hpazCfEZqeTSRLvSasmEx89uw==",
            "dev": true
        },
        "@types/sizzle": {
            "version": "2.3.2",
            "resolved": "https://registry.npmjs.org/@types/sizzle/-/sizzle-2.3.2.tgz",
            "integrity": "sha512-7EJYyKTL7tFR8+gDbB6Wwz/arpGa0Mywk1TJbNzKzHtzbwVmY4HR9WqS5VV7dsBUKQmPNr192jHr/VpBluj/hg=="
        },
        "@types/source-list-map": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/@types/source-list-map/-/source-list-map-0.1.2.tgz",
            "integrity": "sha512-K5K+yml8LTo9bWJI/rECfIPrGgxdpeNbj+d53lwN4QjW1MCwlkhUms+gtdzigTeUyBr09+u8BwOIY3MXvHdcsA==",
            "dev": true
        },
        "@types/stack-utils": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/@types/stack-utils/-/stack-utils-2.0.0.tgz",
            "integrity": "sha512-RJJrrySY7A8havqpGObOB4W92QXKJo63/jFLLgpvOtsGUqbQZ9Sbgl35KMm1DjC6j7AvmmU2bIno+3IyEaemaw==",
            "dev": true
        },
        "@types/toastr": {
            "version": "2.1.38",
            "resolved": "https://registry.npmjs.org/@types/toastr/-/toastr-2.1.38.tgz",
            "integrity": "sha512-zKF+vbPVkkwBaMy0lm5NdI117mOoxWOQf2eXOuP/upQ5lHDSfNK/bVoo/x8/IN1hLzO81g+JvTpZQhqr0gKyYg==",
            "requires": {
                "@types/jquery": "*"
            }
        },
        "@types/webpack-sources": {
            "version": "0.1.8",
            "resolved": "https://registry.npmjs.org/@types/webpack-sources/-/webpack-sources-0.1.8.tgz",
            "integrity": "sha512-JHB2/xZlXOjzjBB6fMOpH1eQAfsrpqVVIbneE0Rok16WXwFaznaI5vfg75U5WgGJm7V9W1c4xeRQDjX/zwvghA==",
            "dev": true,
            "requires": {
                "@types/node": "*",
                "@types/source-list-map": "*",
                "source-map": "^0.6.1"
            },
            "dependencies": {
                "source-map": {
                    "version": "0.6.1",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                    "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                    "dev": true
                }
            }
        },
        "@types/yargs": {
            "version": "15.0.10",
            "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-15.0.10.tgz",
            "integrity": "sha512-z8PNtlhrj7eJNLmrAivM7rjBESG6JwC5xP3RVk12i/8HVP7Xnx/sEmERnRImyEuUaJfO942X0qMOYsoupaJbZQ==",
            "dev": true,
            "requires": {
                "@types/yargs-parser": "*"
            }
        },
        "@types/yargs-parser": {
            "version": "15.0.0",
            "resolved": "https://registry.npmjs.org/@types/yargs-parser/-/yargs-parser-15.0.0.tgz",
            "integrity": "sha512-FA/BWv8t8ZWJ+gEOnLLd8ygxH/2UFbAvgEonyfN6yWGLKc7zVjbpl2Y4CTjid9h2RfgPP6SEt6uHwEOply00yw==",
            "dev": true
        },
        "@typescript-eslint/eslint-plugin": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-4.3.0.tgz",
            "integrity": "sha512-RqEcaHuEKnn3oPFislZ6TNzsBLqpZjN93G69SS+laav/I8w/iGMuMq97P0D2/2/kW4SCebHggqhbcCfbDaaX+g==",
            "dev": true,
            "requires": {
                "@typescript-eslint/experimental-utils": "4.3.0",
                "@typescript-eslint/scope-manager": "4.3.0",
                "debug": "^4.1.1",
                "functional-red-black-tree": "^1.0.1",
                "regexpp": "^3.0.0",
                "semver": "^7.3.2",
                "tsutils": "^3.17.1"
            },
            "dependencies": {
                "tslib": {
                    "version": "1.14.1",
                    "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
                    "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
                    "dev": true
                },
                "tsutils": {
                    "version": "3.17.1",
                    "resolved": "https://registry.npmjs.org/tsutils/-/tsutils-3.17.1.tgz",
                    "integrity": "sha512-kzeQ5B8H3w60nFY2g8cJIuH7JDpsALXySGtwGJ0p2LSjLgay3NdIpqq5SoOBe46bKDW2iq25irHCr8wjomUS2g==",
                    "dev": true,
                    "requires": {
                        "tslib": "^1.8.1"
                    }
                }
            }
        },
        "@typescript-eslint/experimental-utils": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/@typescript-eslint/experimental-utils/-/experimental-utils-4.3.0.tgz",
            "integrity": "sha512-cmmIK8shn3mxmhpKfzMMywqiEheyfXLV/+yPDnOTvQX/ztngx7Lg/OD26J8gTZfkLKUmaEBxO2jYP3keV7h2OQ==",
            "dev": true,
            "requires": {
                "@types/json-schema": "^7.0.3",
                "@typescript-eslint/scope-manager": "4.3.0",
                "@typescript-eslint/types": "4.3.0",
                "@typescript-eslint/typescript-estree": "4.3.0",
                "eslint-scope": "^5.0.0",
                "eslint-utils": "^2.0.0"
            },
            "dependencies": {
                "eslint-scope": {
                    "version": "5.1.1",
                    "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.1.1.tgz",
                    "integrity": "sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==",
                    "dev": true,
                    "requires": {
                        "esrecurse": "^4.3.0",
                        "estraverse": "^4.1.1"
                    }
                }
            }
        },
        "@typescript-eslint/parser": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-4.3.0.tgz",
            "integrity": "sha512-JyfRnd72qRuUwItDZ00JNowsSlpQGeKfl9jxwO0FHK1qQ7FbYdoy5S7P+5wh1ISkT2QyAvr2pc9dAemDxzt75g==",
            "dev": true,
            "requires": {
                "@typescript-eslint/scope-manager": "4.3.0",
                "@typescript-eslint/types": "4.3.0",
                "@typescript-eslint/typescript-estree": "4.3.0",
                "debug": "^4.1.1"
            }
        },
        "@typescript-eslint/scope-manager": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-4.3.0.tgz",
            "integrity": "sha512-cTeyP5SCNE8QBRfc+Lgh4Xpzje46kNUhXYfc3pQWmJif92sjrFuHT9hH4rtOkDTo/si9Klw53yIr+djqGZS1ig==",
            "dev": true,
            "requires": {
                "@typescript-eslint/types": "4.3.0",
                "@typescript-eslint/visitor-keys": "4.3.0"
            }
        },
        "@typescript-eslint/types": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-4.3.0.tgz",
            "integrity": "sha512-Cx9TpRvlRjOppGsU6Y6KcJnUDOelja2NNCX6AZwtVHRzaJkdytJWMuYiqi8mS35MRNA3cJSwDzXePfmhU6TANw==",
            "dev": true
        },
        "@typescript-eslint/typescript-estree": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-4.3.0.tgz",
            "integrity": "sha512-ZAI7xjkl+oFdLV/COEz2tAbQbR3XfgqHEGy0rlUXzfGQic6EBCR4s2+WS3cmTPG69aaZckEucBoTxW9PhzHxxw==",
            "dev": true,
            "requires": {
                "@typescript-eslint/types": "4.3.0",
                "@typescript-eslint/visitor-keys": "4.3.0",
                "debug": "^4.1.1",
                "globby": "^11.0.1",
                "is-glob": "^4.0.1",
                "lodash": "^4.17.15",
                "semver": "^7.3.2",
                "tsutils": "^3.17.1"
            },
            "dependencies": {
                "tslib": {
                    "version": "1.14.1",
                    "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
                    "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
                    "dev": true
                },
                "tsutils": {
                    "version": "3.17.1",
                    "resolved": "https://registry.npmjs.org/tsutils/-/tsutils-3.17.1.tgz",
                    "integrity": "sha512-kzeQ5B8H3w60nFY2g8cJIuH7JDpsALXySGtwGJ0p2LSjLgay3NdIpqq5SoOBe46bKDW2iq25irHCr8wjomUS2g==",
                    "dev": true,
                    "requires": {
                        "tslib": "^1.8.1"
                    }
                }
            }
        },
        "@typescript-eslint/visitor-keys": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-4.3.0.tgz",
            "integrity": "sha512-xZxkuR7XLM6RhvLkgv9yYlTcBHnTULzfnw4i6+z2TGBLy9yljAypQaZl9c3zFvy7PNI7fYWyvKYtohyF8au3cw==",
            "dev": true,
            "requires": {
                "@typescript-eslint/types": "4.3.0",
                "eslint-visitor-keys": "^2.0.0"
            }
        },
        "@webassemblyjs/ast": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/ast/-/ast-1.9.0.tgz",
            "integrity": "sha512-C6wW5L+b7ogSDVqymbkkvuW9kruN//YisMED04xzeBBqjHa2FYnmvOlS6Xj68xWQRgWvI9cIglsjFowH/RJyEA==",
            "dev": true,
            "requires": {
                "@webassemblyjs/helper-module-context": "1.9.0",
                "@webassemblyjs/helper-wasm-bytecode": "1.9.0",
                "@webassemblyjs/wast-parser": "1.9.0"
            }
        },
        "@webassemblyjs/floating-point-hex-parser": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/floating-point-hex-parser/-/floating-point-hex-parser-1.9.0.tgz",
            "integrity": "sha512-TG5qcFsS8QB4g4MhrxK5TqfdNe7Ey/7YL/xN+36rRjl/BlGE/NcBvJcqsRgCP6Z92mRE+7N50pRIi8SmKUbcQA==",
            "dev": true
        },
        "@webassemblyjs/helper-api-error": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-api-error/-/helper-api-error-1.9.0.tgz",
            "integrity": "sha512-NcMLjoFMXpsASZFxJ5h2HZRcEhDkvnNFOAKneP5RbKRzaWJN36NC4jqQHKwStIhGXu5mUWlUUk7ygdtrO8lbmw==",
            "dev": true
        },
        "@webassemblyjs/helper-buffer": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-buffer/-/helper-buffer-1.9.0.tgz",
            "integrity": "sha512-qZol43oqhq6yBPx7YM3m9Bv7WMV9Eevj6kMi6InKOuZxhw+q9hOkvq5e/PpKSiLfyetpaBnogSbNCfBwyB00CA==",
            "dev": true
        },
        "@webassemblyjs/helper-code-frame": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-code-frame/-/helper-code-frame-1.9.0.tgz",
            "integrity": "sha512-ERCYdJBkD9Vu4vtjUYe8LZruWuNIToYq/ME22igL+2vj2dQ2OOujIZr3MEFvfEaqKoVqpsFKAGsRdBSBjrIvZA==",
            "dev": true,
            "requires": {
                "@webassemblyjs/wast-printer": "1.9.0"
            }
        },
        "@webassemblyjs/helper-fsm": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-fsm/-/helper-fsm-1.9.0.tgz",
            "integrity": "sha512-OPRowhGbshCb5PxJ8LocpdX9Kl0uB4XsAjl6jH/dWKlk/mzsANvhwbiULsaiqT5GZGT9qinTICdj6PLuM5gslw==",
            "dev": true
        },
        "@webassemblyjs/helper-module-context": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-module-context/-/helper-module-context-1.9.0.tgz",
            "integrity": "sha512-MJCW8iGC08tMk2enck1aPW+BE5Cw8/7ph/VGZxwyvGbJwjktKkDK7vy7gAmMDx88D7mhDTCNKAW5tED+gZ0W8g==",
            "dev": true,
            "requires": {
                "@webassemblyjs/ast": "1.9.0"
            }
        },
        "@webassemblyjs/helper-wasm-bytecode": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-bytecode/-/helper-wasm-bytecode-1.9.0.tgz",
            "integrity": "sha512-R7FStIzyNcd7xKxCZH5lE0Bqy+hGTwS3LJjuv1ZVxd9O7eHCedSdrId/hMOd20I+v8wDXEn+bjfKDLzTepoaUw==",
            "dev": true
        },
        "@webassemblyjs/helper-wasm-section": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-section/-/helper-wasm-section-1.9.0.tgz",
            "integrity": "sha512-XnMB8l3ek4tvrKUUku+IVaXNHz2YsJyOOmz+MMkZvh8h1uSJpSen6vYnw3IoQ7WwEuAhL8Efjms1ZWjqh2agvw==",
            "dev": true,
            "requires": {
                "@webassemblyjs/ast": "1.9.0",
                "@webassemblyjs/helper-buffer": "1.9.0",
                "@webassemblyjs/helper-wasm-bytecode": "1.9.0",
                "@webassemblyjs/wasm-gen": "1.9.0"
            }
        },
        "@webassemblyjs/ieee754": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/ieee754/-/ieee754-1.9.0.tgz",
            "integrity": "sha512-dcX8JuYU/gvymzIHc9DgxTzUUTLexWwt8uCTWP3otys596io0L5aW02Gb1RjYpx2+0Jus1h4ZFqjla7umFniTg==",
            "dev": true,
            "requires": {
                "@xtuc/ieee754": "^1.2.0"
            }
        },
        "@webassemblyjs/leb128": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/leb128/-/leb128-1.9.0.tgz",
            "integrity": "sha512-ENVzM5VwV1ojs9jam6vPys97B/S65YQtv/aanqnU7D8aSoHFX8GyhGg0CMfyKNIHBuAVjy3tlzd5QMMINa7wpw==",
            "dev": true,
            "requires": {
                "@xtuc/long": "4.2.2"
            }
        },
        "@webassemblyjs/utf8": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/utf8/-/utf8-1.9.0.tgz",
            "integrity": "sha512-GZbQlWtopBTP0u7cHrEx+73yZKrQoBMpwkGEIqlacljhXCkVM1kMQge/Mf+csMJAjEdSwhOyLAS0AoR3AG5P8w==",
            "dev": true
        },
        "@webassemblyjs/wasm-edit": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-edit/-/wasm-edit-1.9.0.tgz",
            "integrity": "sha512-FgHzBm80uwz5M8WKnMTn6j/sVbqilPdQXTWraSjBwFXSYGirpkSWE2R9Qvz9tNiTKQvoKILpCuTjBKzOIm0nxw==",
            "dev": true,
            "requires": {
                "@webassemblyjs/ast": "1.9.0",
                "@webassemblyjs/helper-buffer": "1.9.0",
                "@webassemblyjs/helper-wasm-bytecode": "1.9.0",
                "@webassemblyjs/helper-wasm-section": "1.9.0",
                "@webassemblyjs/wasm-gen": "1.9.0",
                "@webassemblyjs/wasm-opt": "1.9.0",
                "@webassemblyjs/wasm-parser": "1.9.0",
                "@webassemblyjs/wast-printer": "1.9.0"
            }
        },
        "@webassemblyjs/wasm-gen": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-gen/-/wasm-gen-1.9.0.tgz",
            "integrity": "sha512-cPE3o44YzOOHvlsb4+E9qSqjc9Qf9Na1OO/BHFy4OI91XDE14MjFN4lTMezzaIWdPqHnsTodGGNP+iRSYfGkjA==",
            "dev": true,
            "requires": {
                "@webassemblyjs/ast": "1.9.0",
                "@webassemblyjs/helper-wasm-bytecode": "1.9.0",
                "@webassemblyjs/ieee754": "1.9.0",
                "@webassemblyjs/leb128": "1.9.0",
                "@webassemblyjs/utf8": "1.9.0"
            }
        },
        "@webassemblyjs/wasm-opt": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-opt/-/wasm-opt-1.9.0.tgz",
            "integrity": "sha512-Qkjgm6Anhm+OMbIL0iokO7meajkzQD71ioelnfPEj6r4eOFuqm4YC3VBPqXjFyyNwowzbMD+hizmprP/Fwkl2A==",
            "dev": true,
            "requires": {
                "@webassemblyjs/ast": "1.9.0",
                "@webassemblyjs/helper-buffer": "1.9.0",
                "@webassemblyjs/wasm-gen": "1.9.0",
                "@webassemblyjs/wasm-parser": "1.9.0"
            }
        },
        "@webassemblyjs/wasm-parser": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-parser/-/wasm-parser-1.9.0.tgz",
            "integrity": "sha512-9+wkMowR2AmdSWQzsPEjFU7njh8HTO5MqO8vjwEHuM+AMHioNqSBONRdr0NQQ3dVQrzp0s8lTcYqzUdb7YgELA==",
            "dev": true,
            "requires": {
                "@webassemblyjs/ast": "1.9.0",
                "@webassemblyjs/helper-api-error": "1.9.0",
                "@webassemblyjs/helper-wasm-bytecode": "1.9.0",
                "@webassemblyjs/ieee754": "1.9.0",
                "@webassemblyjs/leb128": "1.9.0",
                "@webassemblyjs/utf8": "1.9.0"
            }
        },
        "@webassemblyjs/wast-parser": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/wast-parser/-/wast-parser-1.9.0.tgz",
            "integrity": "sha512-qsqSAP3QQ3LyZjNC/0jBJ/ToSxfYJ8kYyuiGvtn/8MK89VrNEfwj7BPQzJVHi0jGTRK2dGdJ5PRqhtjzoww+bw==",
            "dev": true,
            "requires": {
                "@webassemblyjs/ast": "1.9.0",
                "@webassemblyjs/floating-point-hex-parser": "1.9.0",
                "@webassemblyjs/helper-api-error": "1.9.0",
                "@webassemblyjs/helper-code-frame": "1.9.0",
                "@webassemblyjs/helper-fsm": "1.9.0",
                "@xtuc/long": "4.2.2"
            }
        },
        "@webassemblyjs/wast-printer": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/wast-printer/-/wast-printer-1.9.0.tgz",
            "integrity": "sha512-2J0nE95rHXHyQ24cWjMKJ1tqB/ds8z/cyeOZxJhcb+rW+SQASVjuznUSmdz5GpVJTzU8JkhYut0D3siFDD6wsA==",
            "dev": true,
            "requires": {
                "@webassemblyjs/ast": "1.9.0",
                "@webassemblyjs/wast-parser": "1.9.0",
                "@xtuc/long": "4.2.2"
            }
        },
        "@xtuc/ieee754": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/@xtuc/ieee754/-/ieee754-1.2.0.tgz",
            "integrity": "sha512-DX8nKgqcGwsc0eJSqYt5lwP4DH5FlHnmuWWBRy7X0NcaGR0ZtuyeESgMwTYVEtxmsNGY+qit4QYT/MIYTOTPeA==",
            "dev": true
        },
        "@xtuc/long": {
            "version": "4.2.2",
            "resolved": "https://registry.npmjs.org/@xtuc/long/-/long-4.2.2.tgz",
            "integrity": "sha512-NuHqBY1PB/D8xU6s/thBgOAiAP7HOYDQ32+BFZILJ8ivkUkAHQnWfn6WhL79Owj1qmUnoN/YPhktdIoucipkAQ==",
            "dev": true
        },
        "@yarnpkg/lockfile": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/@yarnpkg/lockfile/-/lockfile-1.1.0.tgz",
            "integrity": "sha512-GpSwvyXOcOOlV70vbnzjj4fW5xW/FdUF6nQEt1ENy7m4ZCczi1+/buVUPAqmGfqznsORNFzUMjctTIp8a9tuCQ==",
            "dev": true
        },
        "JSONStream": {
            "version": "1.3.5",
            "resolved": "https://registry.npmjs.org/JSONStream/-/JSONStream-1.3.5.tgz",
            "integrity": "sha512-E+iruNOY8VV9s4JEbe1aNEm6MiszPRr/UfcHMz0TQh1BXSxHK+ASV1R6W4HpjBhSeS+54PIsAMCBmwD06LLsqQ==",
            "dev": true,
            "requires": {
                "jsonparse": "^1.2.0",
                "through": ">=2.2.7 <3"
            }
        },
        "abab": {
            "version": "2.0.5",
            "resolved": "https://registry.npmjs.org/abab/-/abab-2.0.5.tgz",
            "integrity": "sha512-9IK9EadsbHo6jLWIpxpR6pL0sazTXV6+SQv25ZB+F7Bj9mJNaOc4nCRabwd5M/JwmUa8idz6Eci6eKfJryPs6Q==",
            "dev": true
        },
        "accepts": {
            "version": "1.3.7",
            "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",
            "integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",
            "dev": true,
            "requires": {
                "mime-types": "~2.1.24",
                "negotiator": "0.6.2"
            }
        },
        "acorn": {
            "version": "6.4.2",
            "resolved": "https://registry.npmjs.org/acorn/-/acorn-6.4.2.tgz",
            "integrity": "sha512-XtGIhXwF8YM8bJhGxG5kXgjkEuNGLTkoYqVE+KMR+aspr4KGYmKYg7yUe3KghyQ9yheNwLnjmzh/7+gfDBmHCQ==",
            "dev": true
        },
        "acorn-globals": {
            "version": "6.0.0",
            "resolved": "https://registry.npmjs.org/acorn-globals/-/acorn-globals-6.0.0.tgz",
            "integrity": "sha512-ZQl7LOWaF5ePqqcX4hLuv/bLXYQNfNWw2c0/yX/TsPRKamzHcTGQnlCjHT3TsmkOUVEPS3crCxiPfdzE/Trlhg==",
            "dev": true,
            "requires": {
                "acorn": "^7.1.1",
                "acorn-walk": "^7.1.1"
            },
            "dependencies": {
                "acorn": {
                    "version": "7.4.1",
                    "resolved": "https://registry.npmjs.org/acorn/-/acorn-7.4.1.tgz",
                    "integrity": "sha512-nQyp0o1/mNdbTO1PO6kHkwSrmgZ0MT/jCCpNiwbUjGoRN4dlBhqJtoQuCnEOKzgTVwg0ZWiCoQy6SxMebQVh8A==",
                    "dev": true
                }
            }
        },
        "acorn-jsx": {
            "version": "5.3.1",
            "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.1.tgz",
            "integrity": "sha512-K0Ptm/47OKfQRpNQ2J/oIN/3QYiK6FwW+eJbILhsdxh2WTLdl+30o8aGdTbm5JbffpFFAg/g+zi1E+jvJha5ng==",
            "dev": true
        },
        "acorn-walk": {
            "version": "7.2.0",
            "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-7.2.0.tgz",
            "integrity": "sha512-OPdCF6GsMIP+Az+aWfAAOEt2/+iVDKE7oy6lJ098aoe59oAmK76qV6Gw60SbZ8jHuG2wH058GF4pLFbYamYrVA==",
            "dev": true
        },
        "adjust-sourcemap-loader": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/adjust-sourcemap-loader/-/adjust-sourcemap-loader-3.0.0.tgz",
            "integrity": "sha512-YBrGyT2/uVQ/c6Rr+t6ZJXniY03YtHGMJQYal368burRGYKqhx9qGTWqcBU5s1CwYY9E/ri63RYyG1IacMZtqw==",
            "dev": true,
            "requires": {
                "loader-utils": "^2.0.0",
                "regex-parser": "^2.2.11"
            }
        },
        "adm-zip": {
            "version": "0.4.16",
            "resolved": "https://registry.npmjs.org/adm-zip/-/adm-zip-0.4.16.tgz",
            "integrity": "sha512-TFi4HBKSGfIKsK5YCkKaaFG2m4PEDyViZmEwof3MTIgzimHLto6muaHVpbrljdIvIrFZzEq/p4nafOeLcYegrg==",
            "dev": true
        },
        "agent-base": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-4.3.0.tgz",
            "integrity": "sha512-salcGninV0nPrwpGNn4VTXBb1SOuXQBiqbrNXoeizJsHrsL6ERFM2Ne3JUSBWRE6aeNJI2ROP/WEEIDUiDe3cg==",
            "dev": true,
            "requires": {
                "es6-promisify": "^5.0.0"
            }
        },
        "agentkeepalive": {
            "version": "3.5.2",
            "resolved": "https://registry.npmjs.org/agentkeepalive/-/agentkeepalive-3.5.2.tgz",
            "integrity": "sha512-e0L/HNe6qkQ7H19kTlRRqUibEAwDK5AFk6y3PtMsuut2VAH6+Q4xZml1tNDJD7kSAyqmbG/K08K5WEJYtUrSlQ==",
            "dev": true,
            "requires": {
                "humanize-ms": "^1.2.1"
            }
        },
        "aggregate-error": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/aggregate-error/-/aggregate-error-3.1.0.tgz",
            "integrity": "sha512-4I7Td01quW/RpocfNayFdFVk1qSuoh0E7JrbRJ16nH01HhKFQ88INq9Sd+nd72zqRySlr9BmDA8xlEJ6vJMrYA==",
            "dev": true,
            "requires": {
                "clean-stack": "^2.0.0",
                "indent-string": "^4.0.0"
            }
        },
        "ajv": {
            "version": "6.12.6",
            "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
            "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
            "dev": true,
            "requires": {
                "fast-deep-equal": "^3.1.1",
                "fast-json-stable-stringify": "^2.0.0",
                "json-schema-traverse": "^0.4.1",
                "uri-js": "^4.2.2"
            }
        },
        "ajv-errors": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/ajv-errors/-/ajv-errors-1.0.1.tgz",
            "integrity": "sha512-DCRfO/4nQ+89p/RK43i8Ezd41EqdGIU4ld7nGF8OQ14oc/we5rEntLCUa7+jrn3nn83BosfwZA0wb4pon2o8iQ==",
            "dev": true
        },
        "ajv-keywords": {
            "version": "3.5.2",
            "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-3.5.2.tgz",
            "integrity": "sha512-5p6WTN0DdTGVQk6VjcEju19IgaHudalcfabD7yhDGeA6bcQnmL+CpveLJq/3hvfwd1aof6L386Ougkx6RfyMIQ==",
            "dev": true
        },
        "alphanum-sort": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/alphanum-sort/-/alphanum-sort-1.0.2.tgz",
            "integrity": "sha1-l6ERlkmyEa0zaR2fn0hqjsn74KM=",
            "dev": true
        },
        "angular-in-memory-web-api": {
            "version": "0.11.0",
            "resolved": "https://registry.npmjs.org/angular-in-memory-web-api/-/angular-in-memory-web-api-0.11.0.tgz",
            "integrity": "sha512-QV1qYHm+Zd+wrvlcPLnAcqqGpOmCN1EUj4rRuYHpek8+QqFFdxBNuPZOJCKvU7I97z5QSKHsdc6PNKlpUQr3UA=="
        },
        "ansi-align": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/ansi-align/-/ansi-align-3.0.0.tgz",
            "integrity": "sha512-ZpClVKqXN3RGBmKibdfWzqCY4lnjEuoNzU5T0oEFpfd/z5qJHVarukridD4juLO2FXMiwUQxr9WqQtaYa8XRYw==",
            "dev": true,
            "requires": {
                "string-width": "^3.0.0"
            },
            "dependencies": {
                "ansi-regex": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
                    "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
                    "dev": true
                },
                "emoji-regex": {
                    "version": "7.0.3",
                    "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
                    "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA==",
                    "dev": true
                },
                "is-fullwidth-code-point": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
                    "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
                    "dev": true
                },
                "string-width": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
                    "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
                    "dev": true,
                    "requires": {
                        "emoji-regex": "^7.0.1",
                        "is-fullwidth-code-point": "^2.0.0",
                        "strip-ansi": "^5.1.0"
                    }
                },
                "strip-ansi": {
                    "version": "5.2.0",
                    "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
                    "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
                    "dev": true,
                    "requires": {
                        "ansi-regex": "^4.1.0"
                    }
                }
            }
        },
        "ansi-colors": {
            "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-4.1.1.tgz",
            "integrity": "sha512-JoX0apGbHaUJBNl6yF+p6JAFYZ666/hhCGKN5t9QFjbJQKUU/g8MNbFDbvfrgKXvI1QpZplPOnwIo99lX/AAmA==",
            "dev": true
        },
        "ansi-escapes": {
            "version": "4.3.1",
            "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-4.3.1.tgz",
            "integrity": "sha512-JWF7ocqNrp8u9oqpgV+wH5ftbt+cfvv+PTjOvKLT3AdYly/LmORARfEVT1iyjwN+4MqE5UmVKoAdIBqeoCHgLA==",
            "requires": {
                "type-fest": "^0.11.0"
            }
        },
        "ansi-html": {
            "version": "0.0.7",
            "resolved": "https://registry.npmjs.org/ansi-html/-/ansi-html-0.0.7.tgz",
            "integrity": "sha1-gTWEAhliqenm/QOflA0S9WynhZ4=",
            "dev": true
        },
        "ansi-regex": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
            "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg=="
        },
        "ansi-styles": {
            "version": "3.2.1",
            "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
            "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
            "requires": {
                "color-convert": "^1.9.0"
            }
        },
        "anymatch": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.1.tgz",
            "integrity": "sha512-mM8522psRCqzV+6LhomX5wgp25YVibjh8Wj23I5RPkPppSVSjyKD2A2mBJmWGa+KN7f2D6LNh9jkBCeyLktzjg==",
            "dev": true,
            "requires": {
                "normalize-path": "^3.0.0",
                "picomatch": "^2.0.4"
            }
        },
        "app-root-path": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/app-root-path/-/app-root-path-3.0.0.tgz",
            "integrity": "sha512-qMcx+Gy2UZynHjOHOIXPNvpf+9cjvk3cWrBBK7zg4gH9+clobJRb9NGzcT7mQTcV/6Gm/1WelUtqxVXnNlrwcw==",
            "dev": true
        },
        "aproba": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/aproba/-/aproba-1.2.0.tgz",
            "integrity": "sha512-Y9J6ZjXtoYh8RnXVCMOU/ttDmk1aBjunq9vO0ta5x85WDQiQfUF9sIPBITdbiiIVcBo03Hi3jMxigBtsddlXRw==",
            "dev": true
        },
        "arg": {
            "version": "4.1.3",
            "resolved": "https://registry.npmjs.org/arg/-/arg-4.1.3.tgz",
            "integrity": "sha512-58S9QDqG0Xx27YwPSt9fJxivjYl432YCwfDMfZ+71RAqUrZef7LrKQZ3LHLOwCS4FLNBplP533Zx895SeOCHvA==",
            "dev": true
        },
        "argparse": {
            "version": "1.0.10",
            "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
            "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
            "dev": true,
            "requires": {
                "sprintf-js": "~1.0.2"
            }
        },
        "aria-query": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/aria-query/-/aria-query-3.0.0.tgz",
            "integrity": "sha1-ZbP8wcoRVajJrmTW7uKX8V1RM8w=",
            "dev": true,
            "requires": {
                "ast-types-flow": "0.0.7",
                "commander": "^2.11.0"
            }
        },
        "arity-n": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/arity-n/-/arity-n-1.0.4.tgz",
            "integrity": "sha1-2edrEXM+CFacCEeuezmyhgswt0U=",
            "dev": true
        },
        "arr-diff": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
            "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
            "dev": true
        },
        "arr-flatten": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz",
            "integrity": "sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg==",
            "dev": true
        },
        "arr-union": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",
            "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ=",
            "dev": true
        },
        "array-flatten": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-2.1.2.tgz",
            "integrity": "sha512-hNfzcOV8W4NdualtqBFPyVO+54DSJuZGY9qT4pRroB6S9e3iiido2ISIC5h9R2sPJ8H3FHCIiEnsv1lPXO3KtQ==",
            "dev": true
        },
        "array-includes": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/array-includes/-/array-includes-3.1.1.tgz",
            "integrity": "sha512-c2VXaCHl7zPsvpkFsw4nxvFie4fh1ur9bpcgsVkIjqn0H/Xwdg+7fv3n2r/isyS8EBj5b06M9kHyZuIr4El6WQ==",
            "dev": true,
            "requires": {
                "define-properties": "^1.1.3",
                "es-abstract": "^1.17.0",
                "is-string": "^1.0.5"
            }
        },
        "array-union": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/array-union/-/array-union-2.1.0.tgz",
            "integrity": "sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==",
            "dev": true
        },
        "array-uniq": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/array-uniq/-/array-uniq-1.0.3.tgz",
            "integrity": "sha1-r2rId6Jcx/dOBYiUdThY39sk/bY=",
            "dev": true
        },
        "array-unique": {
            "version": "0.3.2",
            "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
            "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
            "dev": true
        },
        "array.prototype.flat": {
            "version": "1.2.4",
            "resolved": "https://registry.npmjs.org/array.prototype.flat/-/array.prototype.flat-1.2.4.tgz",
            "integrity": "sha512-4470Xi3GAPAjZqFcljX2xzckv1qeKPizoNkiS0+O4IoPR2ZNpcjE0pkhdihlDouK+x6QOast26B4Q/O9DJnwSg==",
            "dev": true,
            "requires": {
                "call-bind": "^1.0.0",
                "define-properties": "^1.1.3",
                "es-abstract": "^1.18.0-next.1"
            },
            "dependencies": {
                "es-abstract": {
                    "version": "1.18.0-next.1",
                    "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.18.0-next.1.tgz",
                    "integrity": "sha512-I4UGspA0wpZXWENrdA0uHbnhte683t3qT/1VFH9aX2dA5PPSf6QW5HHXf5HImaqPmjXaVeVk4RGWnaylmV7uAA==",
                    "dev": true,
                    "requires": {
                        "es-to-primitive": "^1.2.1",
                        "function-bind": "^1.1.1",
                        "has": "^1.0.3",
                        "has-symbols": "^1.0.1",
                        "is-callable": "^1.2.2",
                        "is-negative-zero": "^2.0.0",
                        "is-regex": "^1.1.1",
                        "object-inspect": "^1.8.0",
                        "object-keys": "^1.1.1",
                        "object.assign": "^4.1.1",
                        "string.prototype.trimend": "^1.0.1",
                        "string.prototype.trimstart": "^1.0.1"
                    }
                }
            }
        },
        "arrify": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/arrify/-/arrify-1.0.1.tgz",
            "integrity": "sha1-iYUI2iIm84DfkEcoRWhJwVAaSw0=",
            "dev": true
        },
        "asn1": {
            "version": "0.2.4",
            "resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.4.tgz",
            "integrity": "sha512-jxwzQpLQjSmWXgwaCZE9Nz+glAG01yF1QnWgbhGwHI5A6FRIEY6IVqtHhIepHqI7/kyEyQEagBC5mBEFlIYvdg==",
            "dev": true,
            "requires": {
                "safer-buffer": "~2.1.0"
            }
        },
        "asn1.js": {
            "version": "5.4.1",
            "resolved": "https://registry.npmjs.org/asn1.js/-/asn1.js-5.4.1.tgz",
            "integrity": "sha512-+I//4cYPccV8LdmBLiX8CYvf9Sp3vQsrqu2QNXRcrbiWvcx/UdlFiqUJJzxRQxgsZmvhXhn4cSKeSmoFjVdupA==",
            "dev": true,
            "requires": {
                "bn.js": "^4.0.0",
                "inherits": "^2.0.1",
                "minimalistic-assert": "^1.0.0",
                "safer-buffer": "^2.1.0"
            },
            "dependencies": {
                "bn.js": {
                    "version": "4.11.9",
                    "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
                    "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
                    "dev": true
                }
            }
        },
        "assert": {
            "version": "1.5.0",
            "resolved": "https://registry.npmjs.org/assert/-/assert-1.5.0.tgz",
            "integrity": "sha512-EDsgawzwoun2CZkCgtxJbv392v4nbk9XDD06zI+kQYoBM/3RBWLlEyJARDOmhAAosBjWACEkKL6S+lIZtcAubA==",
            "dev": true,
            "requires": {
                "object-assign": "^4.1.1",
                "util": "0.10.3"
            },
            "dependencies": {
                "inherits": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.1.tgz",
                    "integrity": "sha1-sX0I0ya0Qj5Wjv9xn5GwscvfafE=",
                    "dev": true
                },
                "util": {
                    "version": "0.10.3",
                    "resolved": "https://registry.npmjs.org/util/-/util-0.10.3.tgz",
                    "integrity": "sha1-evsa/lCAUkZInj23/g7TeTNqwPk=",
                    "dev": true,
                    "requires": {
                        "inherits": "2.0.1"
                    }
                }
            }
        },
        "assert-plus": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
            "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU=",
            "dev": true
        },
        "assign-symbols": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz",
            "integrity": "sha1-WWZ/QfrdTyDMvCu5a41Pf3jsA2c=",
            "dev": true
        },
        "ast-types-flow": {
            "version": "0.0.7",
            "resolved": "https://registry.npmjs.org/ast-types-flow/-/ast-types-flow-0.0.7.tgz",
            "integrity": "sha1-9wtzXGvKGlycItmCw+Oef+ujva0=",
            "dev": true
        },
        "astral-regex": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/astral-regex/-/astral-regex-1.0.0.tgz",
            "integrity": "sha512-+Ryf6g3BKoRc7jfp7ad8tM4TtMiaWvbF/1/sQcZPkkS7ag3D5nMBCe2UfOTONtAkaG0tO0ij3C5Lwmf1EiyjHg==",
            "dev": true
        },
        "async": {
            "version": "2.6.3",
            "resolved": "https://registry.npmjs.org/async/-/async-2.6.3.tgz",
            "integrity": "sha512-zflvls11DCy+dQWzTW2dzuilv8Z5X/pjfmZOWba6TNIVDm+2UDaJmXSOXlasHKfNBs8oo3M0aT50fDEWfKZjXg==",
            "dev": true,
            "requires": {
                "lodash": "^4.17.14"
            }
        },
        "async-each": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/async-each/-/async-each-1.0.3.tgz",
            "integrity": "sha512-z/WhQ5FPySLdvREByI2vZiTWwCnF0moMJ1hK9YQwDTHKh6I7/uSckMetoRGb5UBZPC1z0jlw+n/XCgjeH7y1AQ==",
            "dev": true
        },
        "async-limiter": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/async-limiter/-/async-limiter-1.0.1.tgz",
            "integrity": "sha512-csOlWGAcRFJaI6m+F2WKdnMKr4HhdhFVBk0H/QbJFMCr+uO2kwohwXQPxw/9OCxp05r5ghVBFSyioixx3gfkNQ==",
            "dev": true
        },
        "asynckit": {
            "version": "0.4.0",
            "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
            "integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k=",
            "dev": true
        },
        "atob": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",
            "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg==",
            "dev": true
        },
        "autoprefixer": {
            "version": "9.8.6",
            "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-9.8.6.tgz",
            "integrity": "sha512-XrvP4VVHdRBCdX1S3WXVD8+RyG9qeb1D5Sn1DeLiG2xfSpzellk5k54xbUERJ3M5DggQxes39UGOTP8CFrEGbg==",
            "dev": true,
            "requires": {
                "browserslist": "^4.12.0",
                "caniuse-lite": "^1.0.30001109",
                "colorette": "^1.2.1",
                "normalize-range": "^0.1.2",
                "num2fraction": "^1.2.2",
                "postcss": "^7.0.32",
                "postcss-value-parser": "^4.1.0"
            }
        },
        "aws-sign2": {
            "version": "0.7.0",
            "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
            "integrity": "sha1-tG6JCTSpWR8tL2+G1+ap8bP+dqg=",
            "dev": true
        },
        "aws4": {
            "version": "1.11.0",
            "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.11.0.tgz",
            "integrity": "sha512-xh1Rl34h6Fi1DC2WWKfxUTVqRsNnr6LsKz2+hfwDxQJWmrx8+c7ylaqBMcHfl1U1r2dsifOvKX3LQuLNZ+XSvA==",
            "dev": true
        },
        "axobject-query": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/axobject-query/-/axobject-query-2.0.2.tgz",
            "integrity": "sha512-MCeek8ZH7hKyO1rWUbKNQBbl4l2eY0ntk7OGi+q0RlafrCnfPxC06WZA+uebCfmYp4mNU9jRBP1AhGyf8+W3ww==",
            "dev": true,
            "requires": {
                "ast-types-flow": "0.0.7"
            }
        },
        "babel-jest": {
            "version": "26.6.3",
            "resolved": "https://registry.npmjs.org/babel-jest/-/babel-jest-26.6.3.tgz",
            "integrity": "sha512-pl4Q+GAVOHwvjrck6jKjvmGhnO3jHX/xuB9d27f+EJZ/6k+6nMuPjorrYp7s++bKKdANwzElBWnLWaObvTnaZA==",
            "dev": true,
            "requires": {
                "@jest/transform": "^26.6.2",
                "@jest/types": "^26.6.2",
                "@types/babel__core": "^7.1.7",
                "babel-plugin-istanbul": "^6.0.0",
                "babel-preset-jest": "^26.6.2",
                "chalk": "^4.0.0",
                "graceful-fs": "^4.2.4",
                "slash": "^3.0.0"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "babel-loader": {
            "version": "8.1.0",
            "resolved": "https://registry.npmjs.org/babel-loader/-/babel-loader-8.1.0.tgz",
            "integrity": "sha512-7q7nC1tYOrqvUrN3LQK4GwSk/TQorZSOlO9C+RZDZpODgyN4ZlCqE5q9cDsyWOliN+aU9B4JX01xK9eJXowJLw==",
            "dev": true,
            "requires": {
                "find-cache-dir": "^2.1.0",
                "loader-utils": "^1.4.0",
                "mkdirp": "^0.5.3",
                "pify": "^4.0.1",
                "schema-utils": "^2.6.5"
            },
            "dependencies": {
                "find-cache-dir": {
                    "version": "2.1.0",
                    "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-2.1.0.tgz",
                    "integrity": "sha512-Tq6PixE0w/VMFfCgbONnkiQIVol/JJL7nRMi20fqzA4NRs9AfeqMGeRdPi3wIhYkxjeBaWh2rxwapn5Tu3IqOQ==",
                    "dev": true,
                    "requires": {
                        "commondir": "^1.0.1",
                        "make-dir": "^2.0.0",
                        "pkg-dir": "^3.0.0"
                    }
                },
                "json5": {
                    "version": "1.0.1",
                    "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
                    "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
                    "dev": true,
                    "requires": {
                        "minimist": "^1.2.0"
                    }
                },
                "loader-utils": {
                    "version": "1.4.0",
                    "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-1.4.0.tgz",
                    "integrity": "sha512-qH0WSMBtn/oHuwjy/NucEgbx5dbxxnxup9s4PVXJUDHZBQY+s0NWA9rJf53RBnQZxfch7euUui7hpoAPvALZdA==",
                    "dev": true,
                    "requires": {
                        "big.js": "^5.2.2",
                        "emojis-list": "^3.0.0",
                        "json5": "^1.0.1"
                    }
                }
            }
        },
        "babel-plugin-dynamic-import-node": {
            "version": "2.3.3",
            "resolved": "https://registry.npmjs.org/babel-plugin-dynamic-import-node/-/babel-plugin-dynamic-import-node-2.3.3.tgz",
            "integrity": "sha512-jZVI+s9Zg3IqA/kdi0i6UDCybUI3aSBLnglhYbSSjKlV7yF1F/5LWv8MakQmvYpnbJDS6fcBL2KzHSxNCMtWSQ==",
            "dev": true,
            "requires": {
                "object.assign": "^4.1.0"
            }
        },
        "babel-plugin-istanbul": {
            "version": "6.0.0",
            "resolved": "https://registry.npmjs.org/babel-plugin-istanbul/-/babel-plugin-istanbul-6.0.0.tgz",
            "integrity": "sha512-AF55rZXpe7trmEylbaE1Gv54wn6rwU03aptvRoVIGP8YykoSxqdVLV1TfwflBCE/QtHmqtP8SWlTENqbK8GCSQ==",
            "dev": true,
            "requires": {
                "@babel/helper-plugin-utils": "^7.0.0",
                "@istanbuljs/load-nyc-config": "^1.0.0",
                "@istanbuljs/schema": "^0.1.2",
                "istanbul-lib-instrument": "^4.0.0",
                "test-exclude": "^6.0.0"
            }
        },
        "babel-plugin-jest-hoist": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/babel-plugin-jest-hoist/-/babel-plugin-jest-hoist-26.6.2.tgz",
            "integrity": "sha512-PO9t0697lNTmcEHH69mdtYiOIkkOlj9fySqfO3K1eCcdISevLAE0xY59VLLUj0SoiPiTX/JU2CYFpILydUa5Lw==",
            "dev": true,
            "requires": {
                "@babel/template": "^7.3.3",
                "@babel/types": "^7.3.3",
                "@types/babel__core": "^7.0.0",
                "@types/babel__traverse": "^7.0.6"
            }
        },
        "babel-preset-current-node-syntax": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/babel-preset-current-node-syntax/-/babel-preset-current-node-syntax-1.0.0.tgz",
            "integrity": "sha512-mGkvkpocWJes1CmMKtgGUwCeeq0pOhALyymozzDWYomHTbDLwueDYG6p4TK1YOeYHCzBzYPsWkgTto10JubI1Q==",
            "dev": true,
            "requires": {
                "@babel/plugin-syntax-async-generators": "^7.8.4",
                "@babel/plugin-syntax-bigint": "^7.8.3",
                "@babel/plugin-syntax-class-properties": "^7.8.3",
                "@babel/plugin-syntax-import-meta": "^7.8.3",
                "@babel/plugin-syntax-json-strings": "^7.8.3",
                "@babel/plugin-syntax-logical-assignment-operators": "^7.8.3",
                "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.3",
                "@babel/plugin-syntax-numeric-separator": "^7.8.3",
                "@babel/plugin-syntax-object-rest-spread": "^7.8.3",
                "@babel/plugin-syntax-optional-catch-binding": "^7.8.3",
                "@babel/plugin-syntax-optional-chaining": "^7.8.3",
                "@babel/plugin-syntax-top-level-await": "^7.8.3"
            }
        },
        "babel-preset-jest": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/babel-preset-jest/-/babel-preset-jest-26.6.2.tgz",
            "integrity": "sha512-YvdtlVm9t3k777c5NPQIv6cxFFFapys25HiUmuSgHwIZhfifweR5c5Sf5nwE3MAbfu327CYSvps8Yx6ANLyleQ==",
            "dev": true,
            "requires": {
                "babel-plugin-jest-hoist": "^26.6.2",
                "babel-preset-current-node-syntax": "^1.0.0"
            }
        },
        "balanced-match": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
            "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c=",
            "dev": true
        },
        "base": {
            "version": "0.11.2",
            "resolved": "https://registry.npmjs.org/base/-/base-0.11.2.tgz",
            "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",
            "dev": true,
            "requires": {
                "cache-base": "^1.0.1",
                "class-utils": "^0.3.5",
                "component-emitter": "^1.2.1",
                "define-property": "^1.0.0",
                "isobject": "^3.0.1",
                "mixin-deep": "^1.2.0",
                "pascalcase": "^0.1.1"
            },
            "dependencies": {
                "define-property": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
                    "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
                    "dev": true,
                    "requires": {
                        "is-descriptor": "^1.0.0"
                    }
                },
                "is-accessor-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
                    "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
                    "dev": true,
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-data-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
                    "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
                    "dev": true,
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-descriptor": {
                    "version": "1.0.2",
                    "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
                    "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
                    "dev": true,
                    "requires": {
                        "is-accessor-descriptor": "^1.0.0",
                        "is-data-descriptor": "^1.0.0",
                        "kind-of": "^6.0.2"
                    }
                }
            }
        },
        "base64-js": {
            "version": "1.5.1",
            "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
            "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
            "dev": true
        },
        "basic-auth": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/basic-auth/-/basic-auth-2.0.1.tgz",
            "integrity": "sha512-NF+epuEdnUYVlGuhaxbbq+dvJttwLnGY+YixlXlME5KpQ5W3CnXA5cVTneY3SPbPDRkcjMbifrwmFYcClgOZeg==",
            "dev": true,
            "requires": {
                "safe-buffer": "5.1.2"
            }
        },
        "batch": {
            "version": "0.6.1",
            "resolved": "https://registry.npmjs.org/batch/-/batch-0.6.1.tgz",
            "integrity": "sha1-3DQxT05nkxgJP8dgJyUl+UvyXBY=",
            "dev": true
        },
        "bcrypt-pbkdf": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
            "integrity": "sha1-pDAdOJtqQ/m2f/PKEaP2Y342Dp4=",
            "dev": true,
            "requires": {
                "tweetnacl": "^0.14.3"
            }
        },
        "big.js": {
            "version": "5.2.2",
            "resolved": "https://registry.npmjs.org/big.js/-/big.js-5.2.2.tgz",
            "integrity": "sha512-vyL2OymJxmarO8gxMr0mhChsO9QGwhynfuu4+MHTAW6czfq9humCB7rKpUjDd9YUiDPU4mzpyupFSvOClAwbmQ==",
            "dev": true
        },
        "binary-extensions": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.1.0.tgz",
            "integrity": "sha512-1Yj8h9Q+QDF5FzhMs/c9+6UntbD5MkRfRwac8DoEm9ZfUBZ7tZ55YcGVAzEe4bXsdQHEk+s9S5wsOKVdZrw0tQ==",
            "dev": true
        },
        "blocking-proxy": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/blocking-proxy/-/blocking-proxy-1.0.1.tgz",
            "integrity": "sha512-KE8NFMZr3mN2E0HcvCgRtX7DjhiIQrwle+nSVJVC/yqFb9+xznHl2ZcoBp2L9qzkI4t4cBFJ1efXF8Dwi132RA==",
            "dev": true,
            "requires": {
                "minimist": "^1.2.0"
            }
        },
        "bluebird": {
            "version": "3.7.2",
            "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-3.7.2.tgz",
            "integrity": "sha512-XpNj6GDQzdfW+r2Wnn7xiSAd7TM3jzkxGXBGTtWKuSXv1xUV+azxAm8jdWZN06QTQk+2N2XB9jRDkvbmQmcRtg==",
            "dev": true
        },
        "bn.js": {
            "version": "5.1.3",
            "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-5.1.3.tgz",
            "integrity": "sha512-GkTiFpjFtUzU9CbMeJ5iazkCzGL3jrhzerzZIuqLABjbwRaFt33I9tUdSNryIptM+RxDet6OKm2WnLXzW51KsQ==",
            "dev": true
        },
        "body-parser": {
            "version": "1.19.0",
            "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.19.0.tgz",
            "integrity": "sha512-dhEPs72UPbDnAQJ9ZKMNTP6ptJaionhP5cBb541nXPlW60Jepo9RV/a4fX4XWW9CuFNK22krhrj1+rgzifNCsw==",
            "dev": true,
            "requires": {
                "bytes": "3.1.0",
                "content-type": "~1.0.4",
                "debug": "2.6.9",
                "depd": "~1.1.2",
                "http-errors": "1.7.2",
                "iconv-lite": "0.4.24",
                "on-finished": "~2.3.0",
                "qs": "6.7.0",
                "raw-body": "2.4.0",
                "type-is": "~1.6.17"
            },
            "dependencies": {
                "bytes": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.0.tgz",
                    "integrity": "sha512-zauLjrfCG+xvoyaqLoV8bLVXXNGC4JqlxFCutSDWA6fJrTo2ZuvLYTqZ7aHBLZSMOopbzwv8f+wZcVzfVTI2Dg==",
                    "dev": true
                },
                "debug": {
                    "version": "2.6.9",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                    "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                    "dev": true,
                    "requires": {
                        "ms": "2.0.0"
                    }
                },
                "ms": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                    "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
                    "dev": true
                }
            }
        },
        "bonjour": {
            "version": "3.5.0",
            "resolved": "https://registry.npmjs.org/bonjour/-/bonjour-3.5.0.tgz",
            "integrity": "sha1-jokKGD2O6aI5OzhExpGkK897yfU=",
            "dev": true,
            "requires": {
                "array-flatten": "^2.1.0",
                "deep-equal": "^1.0.1",
                "dns-equal": "^1.0.0",
                "dns-txt": "^2.0.2",
                "multicast-dns": "^6.0.1",
                "multicast-dns-service-types": "^1.1.0"
            }
        },
        "boolbase": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
            "integrity": "sha1-aN/1++YMUes3cl6p4+0xDcwed24=",
            "dev": true
        },
        "bootstrap": {
            "version": "4.5.3",
            "resolved": "https://registry.npmjs.org/bootstrap/-/bootstrap-4.5.3.tgz",
            "integrity": "sha512-o9ppKQioXGqhw8Z7mah6KdTYpNQY//tipnkxppWhPbiSWdD+1raYsnhwEZjkTHYbGee4cVQ0Rx65EhOY/HNLcQ=="
        },
        "boxen": {
            "version": "4.2.0",
            "resolved": "https://registry.npmjs.org/boxen/-/boxen-4.2.0.tgz",
            "integrity": "sha512-eB4uT9RGzg2odpER62bBwSLvUeGC+WbRjjyyFhGsKnc8wp/m0+hQsMUvUe3H2V0D5vw0nBdO1hCJoZo5mKeuIQ==",
            "dev": true,
            "requires": {
                "ansi-align": "^3.0.0",
                "camelcase": "^5.3.1",
                "chalk": "^3.0.0",
                "cli-boxes": "^2.2.0",
                "string-width": "^4.1.0",
                "term-size": "^2.1.0",
                "type-fest": "^0.8.1",
                "widest-line": "^3.1.0"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "camelcase": {
                    "version": "5.3.1",
                    "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
                    "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
                    "dev": true
                },
                "chalk": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
                    "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                },
                "type-fest": {
                    "version": "0.8.1",
                    "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
                    "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
                    "dev": true
                }
            }
        },
        "brace-expansion": {
            "version": "1.1.11",
            "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
            "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
            "dev": true,
            "requires": {
                "balanced-match": "^1.0.0",
                "concat-map": "0.0.1"
            }
        },
        "braces": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
            "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
            "dev": true,
            "requires": {
                "fill-range": "^7.0.1"
            }
        },
        "brorand": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/brorand/-/brorand-1.1.0.tgz",
            "integrity": "sha1-EsJe/kCkXjwyPrhnWgoM5XsiNx8=",
            "dev": true
        },
        "browser-process-hrtime": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/browser-process-hrtime/-/browser-process-hrtime-1.0.0.tgz",
            "integrity": "sha512-9o5UecI3GhkpM6DrXr69PblIuWxPKk9Y0jHBRhdocZ2y7YECBFCsHm79Pr3OyR2AvjhDkabFJaDJMYRazHgsow==",
            "dev": true
        },
        "browserify-aes": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/browserify-aes/-/browserify-aes-1.2.0.tgz",
            "integrity": "sha512-+7CHXqGuspUn/Sl5aO7Ea0xWGAtETPXNSAjHo48JfLdPWcMng33Xe4znFvQweqc/uzk5zSOI3H52CYnjCfb5hA==",
            "dev": true,
            "requires": {
                "buffer-xor": "^1.0.3",
                "cipher-base": "^1.0.0",
                "create-hash": "^1.1.0",
                "evp_bytestokey": "^1.0.3",
                "inherits": "^2.0.1",
                "safe-buffer": "^5.0.1"
            }
        },
        "browserify-cipher": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/browserify-cipher/-/browserify-cipher-1.0.1.tgz",
            "integrity": "sha512-sPhkz0ARKbf4rRQt2hTpAHqn47X3llLkUGn+xEJzLjwY8LRs2p0v7ljvI5EyoRO/mexrNunNECisZs+gw2zz1w==",
            "dev": true,
            "requires": {
                "browserify-aes": "^1.0.4",
                "browserify-des": "^1.0.0",
                "evp_bytestokey": "^1.0.0"
            }
        },
        "browserify-des": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/browserify-des/-/browserify-des-1.0.2.tgz",
            "integrity": "sha512-BioO1xf3hFwz4kc6iBhI3ieDFompMhrMlnDFC4/0/vd5MokpuAc3R+LYbwTA9A5Yc9pq9UYPqffKpW2ObuwX5A==",
            "dev": true,
            "requires": {
                "cipher-base": "^1.0.1",
                "des.js": "^1.0.0",
                "inherits": "^2.0.1",
                "safe-buffer": "^5.1.2"
            }
        },
        "browserify-rsa": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/browserify-rsa/-/browserify-rsa-4.1.0.tgz",
            "integrity": "sha512-AdEER0Hkspgno2aR97SAf6vi0y0k8NuOpGnVH3O99rcA5Q6sh8QxcngtHuJ6uXwnfAXNM4Gn1Gb7/MV1+Ymbog==",
            "dev": true,
            "requires": {
                "bn.js": "^5.0.0",
                "randombytes": "^2.0.1"
            }
        },
        "browserify-sign": {
            "version": "4.2.1",
            "resolved": "https://registry.npmjs.org/browserify-sign/-/browserify-sign-4.2.1.tgz",
            "integrity": "sha512-/vrA5fguVAKKAVTNJjgSm1tRQDHUU6DbwO9IROu/0WAzC8PKhucDSh18J0RMvVeHAn5puMd+QHC2erPRNf8lmg==",
            "dev": true,
            "requires": {
                "bn.js": "^5.1.1",
                "browserify-rsa": "^4.0.1",
                "create-hash": "^1.2.0",
                "create-hmac": "^1.1.7",
                "elliptic": "^6.5.3",
                "inherits": "^2.0.4",
                "parse-asn1": "^5.1.5",
                "readable-stream": "^3.6.0",
                "safe-buffer": "^5.2.0"
            },
            "dependencies": {
                "readable-stream": {
                    "version": "3.6.0",
                    "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
                    "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
                    "dev": true,
                    "requires": {
                        "inherits": "^2.0.3",
                        "string_decoder": "^1.1.1",
                        "util-deprecate": "^1.0.1"
                    }
                },
                "safe-buffer": {
                    "version": "5.2.1",
                    "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
                    "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
                    "dev": true
                }
            }
        },
        "browserify-zlib": {
            "version": "0.2.0",
            "resolved": "https://registry.npmjs.org/browserify-zlib/-/browserify-zlib-0.2.0.tgz",
            "integrity": "sha512-Z942RysHXmJrhqk88FmKBVq/v5tqmSkDz7p54G/MGyjMnCFFnC79XWNbg+Vta8W6Wb2qtSZTSxIGkJrRpCFEiA==",
            "dev": true,
            "requires": {
                "pako": "~1.0.5"
            }
        },
        "browserslist": {
            "version": "4.14.7",
            "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.14.7.tgz",
            "integrity": "sha512-BSVRLCeG3Xt/j/1cCGj1019Wbty0H+Yvu2AOuZSuoaUWn3RatbL33Cxk+Q4jRMRAbOm0p7SLravLjpnT6s0vzQ==",
            "dev": true,
            "requires": {
                "caniuse-lite": "^1.0.30001157",
                "colorette": "^1.2.1",
                "electron-to-chromium": "^1.3.591",
                "escalade": "^3.1.1",
                "node-releases": "^1.1.66"
            }
        },
        "browserstack": {
            "version": "1.6.0",
            "resolved": "https://registry.npmjs.org/browserstack/-/browserstack-1.6.0.tgz",
            "integrity": "sha512-HJDJ0TSlmkwnt9RZ+v5gFpa1XZTBYTj0ywvLwJ3241J7vMw2jAsGNVhKHtmCOyg+VxeLZyaibO9UL71AsUeDIw==",
            "dev": true,
            "requires": {
                "https-proxy-agent": "^2.2.1"
            }
        },
        "bs-logger": {
            "version": "0.2.6",
            "resolved": "https://registry.npmjs.org/bs-logger/-/bs-logger-0.2.6.tgz",
            "integrity": "sha512-pd8DCoxmbgc7hyPKOvxtqNcjYoOsABPQdcCUjGp3d42VR2CX1ORhk2A87oqqu5R1kk+76nsxZupkmyd+MVtCog==",
            "dev": true,
            "requires": {
                "fast-json-stable-stringify": "2.x"
            }
        },
        "bser": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/bser/-/bser-2.1.1.tgz",
            "integrity": "sha512-gQxTNE/GAfIIrmHLUE3oJyp5FO6HRBfhjnw4/wMmA63ZGDJnWBmgY/lyQBpnDUkGmAhbSe39tx2d/iTOAfglwQ==",
            "dev": true,
            "requires": {
                "node-int64": "^0.4.0"
            }
        },
        "buffer": {
            "version": "4.9.2",
            "resolved": "https://registry.npmjs.org/buffer/-/buffer-4.9.2.tgz",
            "integrity": "sha512-xq+q3SRMOxGivLhBNaUdC64hDTQwejJ+H0T/NB1XMtTVEwNTrfFF3gAxiyW0Bu/xWEGhjVKgUcMhCrUy2+uCWg==",
            "dev": true,
            "requires": {
                "base64-js": "^1.0.2",
                "ieee754": "^1.1.4",
                "isarray": "^1.0.0"
            }
        },
        "buffer-from": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
            "integrity": "sha512-MQcXEUbCKtEo7bhqEs6560Hyd4XaovZlO/k9V3hjVUF/zwW7KBVdSK4gIt/bzwS9MbR5qob+F5jusZsb0YQK2A==",
            "dev": true
        },
        "buffer-indexof": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/buffer-indexof/-/buffer-indexof-1.1.1.tgz",
            "integrity": "sha512-4/rOEg86jivtPTeOUUT61jJO1Ya1TrR/OkqCSZDyq84WJh3LuuiphBYJN+fm5xufIk4XAFcEwte/8WzC8If/1g==",
            "dev": true
        },
        "buffer-xor": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/buffer-xor/-/buffer-xor-1.0.3.tgz",
            "integrity": "sha1-JuYe0UIvtw3ULm42cp7VHYVf6Nk=",
            "dev": true
        },
        "builtin-modules": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/builtin-modules/-/builtin-modules-1.1.1.tgz",
            "integrity": "sha1-Jw8HbFpywC9bZaR9+Uxf46J4iS8=",
            "dev": true
        },
        "builtin-status-codes": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/builtin-status-codes/-/builtin-status-codes-3.0.0.tgz",
            "integrity": "sha1-hZgoeOIbmOHGZCXgPQF0eI9Wnug=",
            "dev": true
        },
        "builtins": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/builtins/-/builtins-1.0.3.tgz",
            "integrity": "sha1-y5T662HIaWRR2zZTThQi+U8K7og=",
            "dev": true
        },
        "bytes": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.0.0.tgz",
            "integrity": "sha1-0ygVQE1olpn4Wk6k+odV3ROpYEg=",
            "dev": true
        },
        "cacache": {
            "version": "15.0.5",
            "resolved": "https://registry.npmjs.org/cacache/-/cacache-15.0.5.tgz",
            "integrity": "sha512-lloiL22n7sOjEEXdL8NAjTgv9a1u43xICE9/203qonkZUCj5X1UEWIdf2/Y0d6QcCtMzbKQyhrcDbdvlZTs/+A==",
            "dev": true,
            "requires": {
                "@npmcli/move-file": "^1.0.1",
                "chownr": "^2.0.0",
                "fs-minipass": "^2.0.0",
                "glob": "^7.1.4",
                "infer-owner": "^1.0.4",
                "lru-cache": "^6.0.0",
                "minipass": "^3.1.1",
                "minipass-collect": "^1.0.2",
                "minipass-flush": "^1.0.5",
                "minipass-pipeline": "^1.2.2",
                "mkdirp": "^1.0.3",
                "p-map": "^4.0.0",
                "promise-inflight": "^1.0.1",
                "rimraf": "^3.0.2",
                "ssri": "^8.0.0",
                "tar": "^6.0.2",
                "unique-filename": "^1.1.1"
            },
            "dependencies": {
                "mkdirp": {
                    "version": "1.0.4",
                    "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
                    "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",
                    "dev": true
                }
            }
        },
        "cache-base": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz",
            "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",
            "dev": true,
            "requires": {
                "collection-visit": "^1.0.0",
                "component-emitter": "^1.2.1",
                "get-value": "^2.0.6",
                "has-value": "^1.0.0",
                "isobject": "^3.0.1",
                "set-value": "^2.0.0",
                "to-object-path": "^0.3.0",
                "union-value": "^1.0.0",
                "unset-value": "^1.0.0"
            }
        },
        "cacheable-request": {
            "version": "6.1.0",
            "resolved": "https://registry.npmjs.org/cacheable-request/-/cacheable-request-6.1.0.tgz",
            "integrity": "sha512-Oj3cAGPCqOZX7Rz64Uny2GYAZNliQSqfbePrgAQ1wKAihYmCUnraBtJtKcGR4xz7wF+LoJC+ssFZvv5BgF9Igg==",
            "dev": true,
            "requires": {
                "clone-response": "^1.0.2",
                "get-stream": "^5.1.0",
                "http-cache-semantics": "^4.0.0",
                "keyv": "^3.0.0",
                "lowercase-keys": "^2.0.0",
                "normalize-url": "^4.1.0",
                "responselike": "^1.0.2"
            },
            "dependencies": {
                "get-stream": {
                    "version": "5.2.0",
                    "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-5.2.0.tgz",
                    "integrity": "sha512-nBF+F1rAZVCu/p7rjzgA+Yb4lfYXrpl7a6VmJrU8wF9I1CKvP/QwPNZHnOlwbTkY6dvtFIzFMSyQXbLoTQPRpA==",
                    "dev": true,
                    "requires": {
                        "pump": "^3.0.0"
                    }
                },
                "http-cache-semantics": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-4.1.0.tgz",
                    "integrity": "sha512-carPklcUh7ROWRK7Cv27RPtdhYhUsela/ue5/jKzjegVvXDqM2ILE9Q2BGn9JZJh1g87cp56su/FgQSzcWS8cQ==",
                    "dev": true
                },
                "lowercase-keys": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-2.0.0.tgz",
                    "integrity": "sha512-tqNXrS78oMOE73NMxK4EMLQsQowWf8jKooH9g7xPavRT706R6bkQJ6DY2Te7QukaZsulxa30wQ7bk0pm4XiHmA==",
                    "dev": true
                },
                "normalize-url": {
                    "version": "4.5.0",
                    "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-4.5.0.tgz",
                    "integrity": "sha512-2s47yzUxdexf1OhyRi4Em83iQk0aPvwTddtFz4hnSSw9dCEsLEGf6SwIO8ss/19S9iBb5sJaOuTvTGDeZI00BQ==",
                    "dev": true
                }
            }
        },
        "call-bind": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.0.tgz",
            "integrity": "sha512-AEXsYIyyDY3MCzbwdhzG3Jx1R0J2wetQyUynn6dYHAO+bg8l1k7jwZtRv4ryryFs7EP+NDlikJlVe59jr0cM2w==",
            "dev": true,
            "requires": {
                "function-bind": "^1.1.1",
                "get-intrinsic": "^1.0.0"
            }
        },
        "caller-callsite": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/caller-callsite/-/caller-callsite-2.0.0.tgz",
            "integrity": "sha1-hH4PzgoiN1CpoCfFSzNzGtMVQTQ=",
            "dev": true,
            "requires": {
                "callsites": "^2.0.0"
            }
        },
        "caller-path": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/caller-path/-/caller-path-2.0.0.tgz",
            "integrity": "sha1-Ro+DBE42mrIBD6xfBs7uFbsssfQ=",
            "dev": true,
            "requires": {
                "caller-callsite": "^2.0.0"
            }
        },
        "callsites": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/callsites/-/callsites-2.0.0.tgz",
            "integrity": "sha1-BuuE8A7qQT2oav/vrL/7Ngk7PFA=",
            "dev": true
        },
        "camelcase": {
            "version": "6.2.0",
            "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-6.2.0.tgz",
            "integrity": "sha512-c7wVvbw3f37nuobQNtgsgG9POC9qMbNuMQmTCqZv23b6MIz0fcYpBiOlv9gEN/hdLdnZTDQhg6e9Dq5M1vKvfg==",
            "dev": true
        },
        "caniuse-api": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/caniuse-api/-/caniuse-api-3.0.0.tgz",
            "integrity": "sha512-bsTwuIg/BZZK/vreVTYYbSWoe2F+71P7K5QGEX+pT250DZbfU1MQ5prOKpPR+LL6uWKK3KMwMCAS74QB3Um1uw==",
            "dev": true,
            "requires": {
                "browserslist": "^4.0.0",
                "caniuse-lite": "^1.0.0",
                "lodash.memoize": "^4.1.2",
                "lodash.uniq": "^4.5.0"
            }
        },
        "caniuse-lite": {
            "version": "1.0.30001159",
            "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001159.tgz",
            "integrity": "sha512-w9Ph56jOsS8RL20K9cLND3u/+5WASWdhC/PPrf+V3/HsM3uHOavWOR1Xzakbv4Puo/srmPHudkmCRWM7Aq+/UA==",
            "dev": true
        },
        "canonical-path": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/canonical-path/-/canonical-path-1.0.0.tgz",
            "integrity": "sha512-feylzsbDxi1gPZ1IjystzIQZagYYLvfKrSuygUCgf7z6x790VEzze5QEkdSV1U58RA7Hi0+v6fv4K54atOzATg==",
            "dev": true
        },
        "capture-exit": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/capture-exit/-/capture-exit-2.0.0.tgz",
            "integrity": "sha512-PiT/hQmTonHhl/HFGN+Lx3JJUznrVYJ3+AQsnthneZbvW7x+f08Tk7yLJTLEOUvBTbduLeeBkxEaYXUOUrRq6g==",
            "dev": true,
            "requires": {
                "rsvp": "^4.8.4"
            }
        },
        "caseless": {
            "version": "0.12.0",
            "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
            "integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw=",
            "dev": true
        },
        "chalk": {
            "version": "2.4.2",
            "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
            "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
            "requires": {
                "ansi-styles": "^3.2.1",
                "escape-string-regexp": "^1.0.5",
                "supports-color": "^5.3.0"
            }
        },
        "char-regex": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/char-regex/-/char-regex-1.0.2.tgz",
            "integrity": "sha512-kWWXztvZ5SBQV+eRgKFeh8q5sLuZY2+8WUIzlxWVTg+oGwY14qylx1KbKzHd8P6ZYkAg0xyIDU9JMHhyJMZ1jw==",
            "dev": true
        },
        "chardet": {
            "version": "0.7.0",
            "resolved": "https://registry.npmjs.org/chardet/-/chardet-0.7.0.tgz",
            "integrity": "sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA=="
        },
        "chart.js": {
            "version": "2.9.4",
            "resolved": "https://registry.npmjs.org/chart.js/-/chart.js-2.9.4.tgz",
            "integrity": "sha512-B07aAzxcrikjAPyV+01j7BmOpxtQETxTSlQ26BEYJ+3iUkbNKaOJ/nDbT6JjyqYxseM0ON12COHYdU2cTIjC7A==",
            "requires": {
                "chartjs-color": "^2.1.0",
                "moment": "^2.10.2"
            }
        },
        "chartjs-color": {
            "version": "2.4.1",
            "resolved": "https://registry.npmjs.org/chartjs-color/-/chartjs-color-2.4.1.tgz",
            "integrity": "sha512-haqOg1+Yebys/Ts/9bLo/BqUcONQOdr/hoEr2LLTRl6C5LXctUdHxsCYfvQVg5JIxITrfCNUDr4ntqmQk9+/0w==",
            "requires": {
                "chartjs-color-string": "^0.6.0",
                "color-convert": "^1.9.3"
            }
        },
        "chartjs-color-string": {
            "version": "0.6.0",
            "resolved": "https://registry.npmjs.org/chartjs-color-string/-/chartjs-color-string-0.6.0.tgz",
            "integrity": "sha512-TIB5OKn1hPJvO7JcteW4WY/63v6KwEdt6udfnDE9iCAZgy+V4SrbSxoIbTw/xkUIapjEI4ExGtD0+6D3KyFd7A==",
            "requires": {
                "color-name": "^1.0.0"
            }
        },
        "chokidar": {
            "version": "3.4.3",
            "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.4.3.tgz",
            "integrity": "sha512-DtM3g7juCXQxFVSNPNByEC2+NImtBuxQQvWlHunpJIS5Ocr0lG306cC7FCi7cEA0fzmybPUIl4txBIobk1gGOQ==",
            "dev": true,
            "requires": {
                "anymatch": "~3.1.1",
                "braces": "~3.0.2",
                "fsevents": "~2.1.2",
                "glob-parent": "~5.1.0",
                "is-binary-path": "~2.1.0",
                "is-glob": "~4.0.1",
                "normalize-path": "~3.0.0",
                "readdirp": "~3.5.0"
            }
        },
        "chownr": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/chownr/-/chownr-2.0.0.tgz",
            "integrity": "sha512-bIomtDF5KGpdogkLd9VspvFzk9KfpyyGlS8YFVZl7TGPBHL5snIOnxeshwVgPteQ9b4Eydl+pVbIyE1DcvCWgQ==",
            "dev": true
        },
        "chrome-trace-event": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/chrome-trace-event/-/chrome-trace-event-1.0.2.tgz",
            "integrity": "sha512-9e/zx1jw7B4CO+c/RXoCsfg/x1AfUBioy4owYH0bJprEYAx5hRFLRhWBqHAG57D0ZM4H7vxbP7bPe0VwhQRYDQ==",
            "dev": true,
            "requires": {
                "tslib": "^1.9.0"
            },
            "dependencies": {
                "tslib": {
                    "version": "1.14.1",
                    "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
                    "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
                    "dev": true
                }
            }
        },
        "ci-info": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-2.0.0.tgz",
            "integrity": "sha512-5tK7EtrZ0N+OLFMthtqOj4fI2Jeb88C4CAZPu25LDVUgXJ0A3Js4PMGqrn0JU1W0Mh1/Z8wZzYPxqUrXeBboCQ==",
            "dev": true
        },
        "cipher-base": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/cipher-base/-/cipher-base-1.0.4.tgz",
            "integrity": "sha512-Kkht5ye6ZGmwv40uUDZztayT2ThLQGfnj/T71N/XzeZeo3nf8foyW7zGTsPYkEya3m5f3cAypH+qe7YOrM1U2Q==",
            "dev": true,
            "requires": {
                "inherits": "^2.0.1",
                "safe-buffer": "^5.0.1"
            }
        },
        "circular-dependency-plugin": {
            "version": "5.2.0",
            "resolved": "https://registry.npmjs.org/circular-dependency-plugin/-/circular-dependency-plugin-5.2.0.tgz",
            "integrity": "sha512-7p4Kn/gffhQaavNfyDFg7LS5S/UT1JAjyGd4UqR2+jzoYF02eDkj0Ec3+48TsIa4zghjLY87nQHIh/ecK9qLdw==",
            "dev": true
        },
        "cjs-module-lexer": {
            "version": "0.6.0",
            "resolved": "https://registry.npmjs.org/cjs-module-lexer/-/cjs-module-lexer-0.6.0.tgz",
            "integrity": "sha512-uc2Vix1frTfnuzxxu1Hp4ktSvM3QaI4oXl4ZUqL1wjTu/BGki9TrCWoqLTg/drR1KwAEarXuRFCG2Svr1GxPFw==",
            "dev": true
        },
        "class-utils": {
            "version": "0.3.6",
            "resolved": "https://registry.npmjs.org/class-utils/-/class-utils-0.3.6.tgz",
            "integrity": "sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==",
            "dev": true,
            "requires": {
                "arr-union": "^3.1.0",
                "define-property": "^0.2.5",
                "isobject": "^3.0.0",
                "static-extend": "^0.1.1"
            },
            "dependencies": {
                "define-property": {
                    "version": "0.2.5",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
                    "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
                    "dev": true,
                    "requires": {
                        "is-descriptor": "^0.1.0"
                    }
                }
            }
        },
        "clean-stack": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/clean-stack/-/clean-stack-2.2.0.tgz",
            "integrity": "sha512-4diC9HaTE+KRAMWhDhrGOECgWZxoevMc5TlkObMqNSsVU62PYzXZ/SMTjzyGAFF1YusgxGcSWTEXBhp0CPwQ1A==",
            "dev": true
        },
        "cli-boxes": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/cli-boxes/-/cli-boxes-2.2.1.tgz",
            "integrity": "sha512-y4coMcylgSCdVinjiDBuR8PCC2bLjyGTwEmPb9NHR/QaNU6EUOXcTY/s6VjGMD6ENSEaeQYHCY0GNGS5jfMwPw==",
            "dev": true
        },
        "cli-cursor": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-3.1.0.tgz",
            "integrity": "sha512-I/zHAwsKf9FqGoXM4WWRACob9+SNukZTd94DWF57E4toouRulbCxcUh6RKUEOQlYTHJnzkPMySvPNaaSLNfLZw==",
            "requires": {
                "restore-cursor": "^3.1.0"
            }
        },
        "cli-spinners": {
            "version": "2.5.0",
            "resolved": "https://registry.npmjs.org/cli-spinners/-/cli-spinners-2.5.0.tgz",
            "integrity": "sha512-PC+AmIuK04E6aeSs/pUccSujsTzBhu4HzC2dL+CfJB/Jcc2qTRbEwZQDfIUpt2Xl8BodYBEq8w4fc0kU2I9DjQ=="
        },
        "cli-truncate": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/cli-truncate/-/cli-truncate-2.1.0.tgz",
            "integrity": "sha512-n8fOixwDD6b/ObinzTrp1ZKFzbgvKZvuz/TvejnLn1aQfC6r52XEx85FmuC+3HI+JM7coBRXUvNqEU2PHVrHpg==",
            "dev": true,
            "requires": {
                "slice-ansi": "^3.0.0",
                "string-width": "^4.2.0"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "astral-regex": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/astral-regex/-/astral-regex-2.0.0.tgz",
                    "integrity": "sha512-Z7tMw1ytTXt5jqMcOP+OQteU1VuNK9Y02uuJtKQ1Sv69jXQKKg5cibLwGJow8yzZP+eAc18EmLGPal0bp36rvQ==",
                    "dev": true
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "slice-ansi": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-3.0.0.tgz",
                    "integrity": "sha512-pSyv7bSTC7ig9Dcgbw9AuRNUb5k5V6oDudjZoMBSr13qpLBG7tB+zgCkARjq7xIUgdz5P1Qe8u+rSGdouOOIyQ==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.0.0",
                        "astral-regex": "^2.0.0",
                        "is-fullwidth-code-point": "^3.0.0"
                    }
                }
            }
        },
        "cli-width": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-3.0.0.tgz",
            "integrity": "sha512-FxqpkPPwu1HjuN93Omfm4h8uIanXofW0RxVEW3k5RKx+mJJYSthzNhp32Kzxxy3YAEZ/Dc/EWN1vZRY0+kOhbw==",
            "dev": true
        },
        "cliui": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/cliui/-/cliui-5.0.0.tgz",
            "integrity": "sha512-PYeGSEmmHM6zvoef2w8TPzlrnNpXIjTipYK780YswmIP9vjxmd6Y2a3CB2Ks6/AU8NHjZugXvo8w3oWM2qnwXA==",
            "dev": true,
            "requires": {
                "string-width": "^3.1.0",
                "strip-ansi": "^5.2.0",
                "wrap-ansi": "^5.1.0"
            },
            "dependencies": {
                "ansi-regex": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
                    "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
                    "dev": true
                },
                "emoji-regex": {
                    "version": "7.0.3",
                    "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
                    "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA==",
                    "dev": true
                },
                "is-fullwidth-code-point": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
                    "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
                    "dev": true
                },
                "string-width": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
                    "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
                    "dev": true,
                    "requires": {
                        "emoji-regex": "^7.0.1",
                        "is-fullwidth-code-point": "^2.0.0",
                        "strip-ansi": "^5.1.0"
                    }
                },
                "strip-ansi": {
                    "version": "5.2.0",
                    "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
                    "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
                    "dev": true,
                    "requires": {
                        "ansi-regex": "^4.1.0"
                    }
                }
            }
        },
        "clone": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/clone/-/clone-1.0.4.tgz",
            "integrity": "sha1-2jCcwmPfFZlMaIypAheco8fNfH4="
        },
        "clone-deep": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/clone-deep/-/clone-deep-4.0.1.tgz",
            "integrity": "sha512-neHB9xuzh/wk0dIHweyAXv2aPGZIVk3pLMe+/RNzINf17fe0OG96QroktYAUm7SM1PBnzTabaLboqqxDyMU+SQ==",
            "dev": true,
            "requires": {
                "is-plain-object": "^2.0.4",
                "kind-of": "^6.0.2",
                "shallow-clone": "^3.0.0"
            }
        },
        "clone-response": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/clone-response/-/clone-response-1.0.2.tgz",
            "integrity": "sha1-0dyXOSAxTfZ/vrlCI7TuNQI56Ws=",
            "dev": true,
            "requires": {
                "mimic-response": "^1.0.0"
            }
        },
        "co": {
            "version": "4.6.0",
            "resolved": "https://registry.npmjs.org/co/-/co-4.6.0.tgz",
            "integrity": "sha1-bqa989hTrlTMuOR7+gvz+QMfsYQ=",
            "dev": true
        },
        "coa": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/coa/-/coa-2.0.2.tgz",
            "integrity": "sha512-q5/jG+YQnSy4nRTV4F7lPepBJZ8qBNJJDBuJdoejDyLXgmL7IEo+Le2JDZudFTFt7mrCqIRaSjws4ygRCTCAXA==",
            "dev": true,
            "requires": {
                "@types/q": "^1.5.1",
                "chalk": "^2.4.1",
                "q": "^1.1.2"
            }
        },
        "codelyzer": {
            "version": "6.0.1",
            "resolved": "https://registry.npmjs.org/codelyzer/-/codelyzer-6.0.1.tgz",
            "integrity": "sha512-cOyGQgMdhnRYtW2xrJUNrNYDjEgwQ+BrE2y93Bwz3h4DJ6vJRLfupemU5N3pbYsUlBHJf0u1j1UGk+NLW4d97g==",
            "dev": true,
            "requires": {
                "@angular/compiler": "9.0.0",
                "@angular/core": "9.0.0",
                "app-root-path": "^3.0.0",
                "aria-query": "^3.0.0",
                "axobject-query": "2.0.2",
                "css-selector-tokenizer": "^0.7.1",
                "cssauron": "^1.4.0",
                "damerau-levenshtein": "^1.0.4",
                "rxjs": "^6.5.3",
                "semver-dsl": "^1.0.1",
                "source-map": "^0.5.7",
                "sprintf-js": "^1.1.2",
                "tslib": "^1.10.0",
                "zone.js": "~0.10.3"
            },
            "dependencies": {
                "@angular/compiler": {
                    "version": "9.0.0",
                    "resolved": "https://registry.npmjs.org/@angular/compiler/-/compiler-9.0.0.tgz",
                    "integrity": "sha512-ctjwuntPfZZT2mNj2NDIVu51t9cvbhl/16epc5xEwyzyDt76pX9UgwvY+MbXrf/C/FWwdtmNtfP698BKI+9leQ==",
                    "dev": true
                },
                "@angular/core": {
                    "version": "9.0.0",
                    "resolved": "https://registry.npmjs.org/@angular/core/-/core-9.0.0.tgz",
                    "integrity": "sha512-6Pxgsrf0qF9iFFqmIcWmjJGkkCaCm6V5QNnxMy2KloO3SDq6QuMVRbN9RtC8Urmo25LP+eZ6ZgYqFYpdD8Hd9w==",
                    "dev": true
                },
                "source-map": {
                    "version": "0.5.7",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
                    "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
                    "dev": true
                },
                "sprintf-js": {
                    "version": "1.1.2",
                    "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.1.2.tgz",
                    "integrity": "sha512-VE0SOVEHCk7Qc8ulkWw3ntAzXuqf7S2lvwQaDLRnUeIEaKNQJzV6BwmLKhOqT61aGhfUMrXeaBk+oDGCzvhcug==",
                    "dev": true
                },
                "tslib": {
                    "version": "1.14.1",
                    "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
                    "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
                    "dev": true
                }
            }
        },
        "coffeescript": {
            "version": "1.12.7",
            "resolved": "https://registry.npmjs.org/coffeescript/-/coffeescript-1.12.7.tgz",
            "integrity": "sha512-pLXHFxQMPklVoEekowk8b3erNynC+DVJzChxS/LCBBgR6/8AJkHivkm//zbowcfc7BTCAjryuhx6gPqPRfsFoA==",
            "dev": true
        },
        "collect-v8-coverage": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/collect-v8-coverage/-/collect-v8-coverage-1.0.1.tgz",
            "integrity": "sha512-iBPtljfCNcTKNAto0KEtDfZ3qzjJvqE3aTGZsbhjSBlorqpXJlaWWtPO35D+ZImoC3KWejX64o+yPGxhWSTzfg==",
            "dev": true
        },
        "collection-visit": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz",
            "integrity": "sha1-S8A3PBZLwykbTTaMgpzxqApZ3KA=",
            "dev": true,
            "requires": {
                "map-visit": "^1.0.0",
                "object-visit": "^1.0.0"
            }
        },
        "color": {
            "version": "3.1.3",
            "resolved": "https://registry.npmjs.org/color/-/color-3.1.3.tgz",
            "integrity": "sha512-xgXAcTHa2HeFCGLE9Xs/R82hujGtu9Jd9x4NW3T34+OMs7VoPsjwzRczKHvTAHeJwWFwX5j15+MgAppE8ztObQ==",
            "dev": true,
            "requires": {
                "color-convert": "^1.9.1",
                "color-string": "^1.5.4"
            }
        },
        "color-convert": {
            "version": "1.9.3",
            "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
            "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
            "requires": {
                "color-name": "1.1.3"
            }
        },
        "color-name": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
            "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU="
        },
        "color-string": {
            "version": "1.5.4",
            "resolved": "https://registry.npmjs.org/color-string/-/color-string-1.5.4.tgz",
            "integrity": "sha512-57yF5yt8Xa3czSEW1jfQDE79Idk0+AkN/4KWad6tbdxUmAs3MvjxlWSWD4deYytcRfoZ9nhKyFl1kj5tBvidbw==",
            "dev": true,
            "requires": {
                "color-name": "^1.0.0",
                "simple-swizzle": "^0.2.2"
            }
        },
        "colorette": {
            "version": "1.2.1",
            "resolved": "https://registry.npmjs.org/colorette/-/colorette-1.2.1.tgz",
            "integrity": "sha512-puCDz0CzydiSYOrnXpz/PKd69zRrribezjtE9yd4zvytoRc8+RY/KJPvtPFKZS3E3wP6neGyMe0vOTlHO5L3Pw==",
            "dev": true
        },
        "colors": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/colors/-/colors-1.4.0.tgz",
            "integrity": "sha512-a+UqTh4kgZg/SlGvfbzDHpgRu7AAQOmmqRHJnxhRZICKFUT91brVhNNt58CMWU9PsBbv3PDCZUHbVxuDiH2mtA==",
            "dev": true
        },
        "combined-stream": {
            "version": "1.0.8",
            "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
            "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
            "dev": true,
            "requires": {
                "delayed-stream": "~1.0.0"
            }
        },
        "commander": {
            "version": "2.20.3",
            "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
            "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==",
            "dev": true
        },
        "comment-parser": {
            "version": "0.7.6",
            "resolved": "https://registry.npmjs.org/comment-parser/-/comment-parser-0.7.6.tgz",
            "integrity": "sha512-GKNxVA7/iuTnAqGADlTWX4tkhzxZKXp5fLJqKTlQLHkE65XDUKutZ3BHaJC5IGcper2tT3QRD1xr4o3jNpgXXg==",
            "dev": true
        },
        "commondir": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/commondir/-/commondir-1.0.1.tgz",
            "integrity": "sha1-3dgA2gxmEnOTzKWVDqloo6rxJTs=",
            "dev": true
        },
        "compare-versions": {
            "version": "3.6.0",
            "resolved": "https://registry.npmjs.org/compare-versions/-/compare-versions-3.6.0.tgz",
            "integrity": "sha512-W6Af2Iw1z4CB7q4uU4hv646dW9GQuBM+YpC0UvUCWSD8w90SJjp+ujJuXaEMtAXBtSqGfMPuFOVn4/+FlaqfBA==",
            "dev": true
        },
        "component-emitter": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",
            "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg==",
            "dev": true
        },
        "compose-function": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/compose-function/-/compose-function-3.0.3.tgz",
            "integrity": "sha1-ntZ18TzFRQHTCVCkhv9qe6OrGF8=",
            "dev": true,
            "requires": {
                "arity-n": "^1.0.4"
            }
        },
        "compressible": {
            "version": "2.0.18",
            "resolved": "https://registry.npmjs.org/compressible/-/compressible-2.0.18.tgz",
            "integrity": "sha512-AF3r7P5dWxL8MxyITRMlORQNaOA2IkAFaTr4k7BUumjPtRpGDTZpl0Pb1XCO6JeDCBdp126Cgs9sMxqSjgYyRg==",
            "dev": true,
            "requires": {
                "mime-db": ">= 1.43.0 < 2"
            }
        },
        "compression": {
            "version": "1.7.4",
            "resolved": "https://registry.npmjs.org/compression/-/compression-1.7.4.tgz",
            "integrity": "sha512-jaSIDzP9pZVS4ZfQ+TzvtiWhdpFhE2RDHz8QJkpX9SIpLq88VueF5jJw6t+6CUQcAoA6t+x89MLrWAqpfDE8iQ==",
            "dev": true,
            "requires": {
                "accepts": "~1.3.5",
                "bytes": "3.0.0",
                "compressible": "~2.0.16",
                "debug": "2.6.9",
                "on-headers": "~1.0.2",
                "safe-buffer": "5.1.2",
                "vary": "~1.1.2"
            },
            "dependencies": {
                "debug": {
                    "version": "2.6.9",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                    "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                    "dev": true,
                    "requires": {
                        "ms": "2.0.0"
                    }
                },
                "ms": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                    "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
                    "dev": true
                }
            }
        },
        "concat-map": {
            "version": "0.0.1",
            "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
            "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",
            "dev": true
        },
        "concat-stream": {
            "version": "1.6.2",
            "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",
            "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",
            "dev": true,
            "requires": {
                "buffer-from": "^1.0.0",
                "inherits": "^2.0.3",
                "readable-stream": "^2.2.2",
                "typedarray": "^0.0.6"
            }
        },
        "configstore": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/configstore/-/configstore-5.0.1.tgz",
            "integrity": "sha512-aMKprgk5YhBNyH25hj8wGt2+D52Sw1DRRIzqBwLp2Ya9mFmY8KPvvtvmna8SxVR9JMZ4kzMD68N22vlaRpkeFA==",
            "dev": true,
            "requires": {
                "dot-prop": "^5.2.0",
                "graceful-fs": "^4.1.2",
                "make-dir": "^3.0.0",
                "unique-string": "^2.0.0",
                "write-file-atomic": "^3.0.0",
                "xdg-basedir": "^4.0.0"
            },
            "dependencies": {
                "make-dir": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
                    "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
                    "dev": true,
                    "requires": {
                        "semver": "^6.0.0"
                    }
                },
                "semver": {
                    "version": "6.3.0",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                    "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
                    "dev": true
                }
            }
        },
        "connect-history-api-fallback": {
            "version": "1.6.0",
            "resolved": "https://registry.npmjs.org/connect-history-api-fallback/-/connect-history-api-fallback-1.6.0.tgz",
            "integrity": "sha512-e54B99q/OUoH64zYYRf3HBP5z24G38h5D3qXu23JGRoigpX5Ss4r9ZnDk3g0Z8uQC2x2lPaJ+UlWBc1ZWBWdLg==",
            "dev": true
        },
        "connect-pause": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/connect-pause/-/connect-pause-0.1.1.tgz",
            "integrity": "sha1-smmyu4Ldsaw9tQmcD7WCq6mfs3o=",
            "dev": true
        },
        "console-browserify": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/console-browserify/-/console-browserify-1.2.0.tgz",
            "integrity": "sha512-ZMkYO/LkF17QvCPqM0gxw8yUzigAOZOSWSHg91FH6orS7vcEj5dVZTidN2fQ14yBSdg97RqhSNwLUXInd52OTA==",
            "dev": true
        },
        "constants-browserify": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/constants-browserify/-/constants-browserify-1.0.0.tgz",
            "integrity": "sha1-wguW2MYXdIqvHBYCF2DNJ/y4y3U=",
            "dev": true
        },
        "contains-path": {
            "version": "0.1.0",
            "resolved": "https://registry.npmjs.org/contains-path/-/contains-path-0.1.0.tgz",
            "integrity": "sha1-/ozxhP9mcLa67wGp1IYaXL7EEgo=",
            "dev": true
        },
        "content-disposition": {
            "version": "0.5.3",
            "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.3.tgz",
            "integrity": "sha512-ExO0774ikEObIAEV9kDo50o+79VCUdEB6n6lzKgGwupcVeRlhrj3qGAfwq8G6uBJjkqLrhT0qEYFcWng8z1z0g==",
            "dev": true,
            "requires": {
                "safe-buffer": "5.1.2"
            }
        },
        "content-type": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
            "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA==",
            "dev": true
        },
        "convert-source-map": {
            "version": "1.7.0",
            "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.7.0.tgz",
            "integrity": "sha512-4FJkXzKXEDB1snCFZlLP4gpC3JILicCpGbzG9f9G7tGqGCzETQ2hWPrcinA9oU4wtf2biUaEH5065UnMeR33oA==",
            "dev": true,
            "requires": {
                "safe-buffer": "~5.1.1"
            }
        },
        "cookie": {
            "version": "0.4.0",
            "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.0.tgz",
            "integrity": "sha512-+Hp8fLp57wnUSt0tY0tHEXh4voZRDnoIrZPqlo3DPiI4y9lwg/jqx+1Om94/W6ZaPDOUbnjOt/99w66zk+l1Xg==",
            "dev": true
        },
        "cookie-signature": {
            "version": "1.0.6",
            "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
            "integrity": "sha1-4wOogrNCzD7oylE6eZmXNNqzriw=",
            "dev": true
        },
        "copy-concurrently": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/copy-concurrently/-/copy-concurrently-1.0.5.tgz",
            "integrity": "sha512-f2domd9fsVDFtaFcbaRZuYXwtdmnzqbADSwhSWYxYB/Q8zsdUUFMXVRwXGDMWmbEzAn1kdRrtI1T/KTFOL4X2A==",
            "dev": true,
            "requires": {
                "aproba": "^1.1.1",
                "fs-write-stream-atomic": "^1.0.8",
                "iferr": "^0.1.5",
                "mkdirp": "^0.5.1",
                "rimraf": "^2.5.4",
                "run-queue": "^1.0.0"
            },
            "dependencies": {
                "rimraf": {
                    "version": "2.7.1",
                    "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
                    "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
                    "dev": true,
                    "requires": {
                        "glob": "^7.1.3"
                    }
                }
            }
        },
        "copy-descriptor": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/copy-descriptor/-/copy-descriptor-0.1.1.tgz",
            "integrity": "sha1-Z29us8OZl8LuGsOpJP1hJHSPV40=",
            "dev": true
        },
        "copy-webpack-plugin": {
            "version": "6.2.1",
            "resolved": "https://registry.npmjs.org/copy-webpack-plugin/-/copy-webpack-plugin-6.2.1.tgz",
            "integrity": "sha512-VH2ZTMIBsx4p++Lmpg77adZ0KUyM5gFR/9cuTrbneNnJlcQXUFvsNariPqq2dq2kV3F2skHiDGPQCyKWy1+U0Q==",
            "dev": true,
            "requires": {
                "cacache": "^15.0.5",
                "fast-glob": "^3.2.4",
                "find-cache-dir": "^3.3.1",
                "glob-parent": "^5.1.1",
                "globby": "^11.0.1",
                "loader-utils": "^2.0.0",
                "normalize-path": "^3.0.0",
                "p-limit": "^3.0.2",
                "schema-utils": "^3.0.0",
                "serialize-javascript": "^5.0.1",
                "webpack-sources": "^1.4.3"
            },
            "dependencies": {
                "p-limit": {
                    "version": "3.0.2",
                    "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.0.2.tgz",
                    "integrity": "sha512-iwqZSOoWIW+Ew4kAGUlN16J4M7OB3ysMLSZtnhmqx7njIHFPlxWBX8xo3lVTyFVq6mI/lL9qt2IsN1sHwaxJkg==",
                    "dev": true,
                    "requires": {
                        "p-try": "^2.0.0"
                    }
                },
                "schema-utils": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.0.0.tgz",
                    "integrity": "sha512-6D82/xSzO094ajanoOSbe4YvXWMfn2A//8Y1+MUqFAJul5Bs+yn36xbK9OtNDcRVSBJ9jjeoXftM6CfztsjOAA==",
                    "dev": true,
                    "requires": {
                        "@types/json-schema": "^7.0.6",
                        "ajv": "^6.12.5",
                        "ajv-keywords": "^3.5.2"
                    }
                },
                "source-map": {
                    "version": "0.6.1",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                    "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                    "dev": true
                },
                "webpack-sources": {
                    "version": "1.4.3",
                    "resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-1.4.3.tgz",
                    "integrity": "sha512-lgTS3Xhv1lCOKo7SA5TjKXMjpSM4sBjNV5+q2bqesbSPs5FjGmU6jjtBSkX9b4qW87vDIsCIlUPOEhbZrMdjeQ==",
                    "dev": true,
                    "requires": {
                        "source-list-map": "^2.0.0",
                        "source-map": "~0.6.1"
                    }
                }
            }
        },
        "core-js": {
            "version": "3.6.5",
            "resolved": "https://registry.npmjs.org/core-js/-/core-js-3.6.5.tgz",
            "integrity": "sha512-vZVEEwZoIsI+vPEuoF9Iqf5H7/M3eeQqWlQnYa8FSKKePuYTf5MWnxb5SDAzCa60b3JBRS5g9b+Dq7b1y/RCrA==",
            "dev": true
        },
        "core-js-compat": {
            "version": "3.7.0",
            "resolved": "https://registry.npmjs.org/core-js-compat/-/core-js-compat-3.7.0.tgz",
            "integrity": "sha512-V8yBI3+ZLDVomoWICO6kq/CD28Y4r1M7CWeO4AGpMdMfseu8bkSubBmUPySMGKRTS+su4XQ07zUkAsiu9FCWTg==",
            "dev": true,
            "requires": {
                "browserslist": "^4.14.6",
                "semver": "7.0.0"
            },
            "dependencies": {
                "semver": {
                    "version": "7.0.0",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-7.0.0.tgz",
                    "integrity": "sha512-+GB6zVA9LWh6zovYQLALHwv5rb2PHGlJi3lfiqIHxR0uuwCgefcOJc59v9fv1w8GbStwxuuqqAjI9NMAOOgq1A==",
                    "dev": true
                }
            }
        },
        "core-util-is": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
            "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac=",
            "dev": true
        },
        "cors": {
            "version": "2.8.5",
            "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.5.tgz",
            "integrity": "sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==",
            "dev": true,
            "requires": {
                "object-assign": "^4",
                "vary": "^1"
            }
        },
        "cosmiconfig": {
            "version": "5.2.1",
            "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-5.2.1.tgz",
            "integrity": "sha512-H65gsXo1SKjf8zmrJ67eJk8aIRKV5ff2D4uKZIBZShbhGSpEmsQOPW/SKMKYhSTrqR7ufy6RP69rPogdaPh/kA==",
            "dev": true,
            "requires": {
                "import-fresh": "^2.0.0",
                "is-directory": "^0.3.1",
                "js-yaml": "^3.13.1",
                "parse-json": "^4.0.0"
            }
        },
        "create-ecdh": {
            "version": "4.0.4",
            "resolved": "https://registry.npmjs.org/create-ecdh/-/create-ecdh-4.0.4.tgz",
            "integrity": "sha512-mf+TCx8wWc9VpuxfP2ht0iSISLZnt0JgWlrOKZiNqyUZWnjIaCIVNQArMHnCZKfEYRg6IM7A+NeJoN8gf/Ws0A==",
            "dev": true,
            "requires": {
                "bn.js": "^4.1.0",
                "elliptic": "^6.5.3"
            },
            "dependencies": {
                "bn.js": {
                    "version": "4.11.9",
                    "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
                    "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
                    "dev": true
                }
            }
        },
        "create-hash": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/create-hash/-/create-hash-1.2.0.tgz",
            "integrity": "sha512-z00bCGNHDG8mHAkP7CtT1qVu+bFQUPjYq/4Iv3C3kWjTFV10zIjfSoeqXo9Asws8gwSHDGj/hl2u4OGIjapeCg==",
            "dev": true,
            "requires": {
                "cipher-base": "^1.0.1",
                "inherits": "^2.0.1",
                "md5.js": "^1.3.4",
                "ripemd160": "^2.0.1",
                "sha.js": "^2.4.0"
            }
        },
        "create-hmac": {
            "version": "1.1.7",
            "resolved": "https://registry.npmjs.org/create-hmac/-/create-hmac-1.1.7.tgz",
            "integrity": "sha512-MJG9liiZ+ogc4TzUwuvbER1JRdgvUFSB5+VR/g5h82fGaIRWMWddtKBHi7/sVhfjQZ6SehlyhvQYrcYkaUIpLg==",
            "dev": true,
            "requires": {
                "cipher-base": "^1.0.3",
                "create-hash": "^1.1.0",
                "inherits": "^2.0.1",
                "ripemd160": "^2.0.0",
                "safe-buffer": "^5.0.1",
                "sha.js": "^2.4.8"
            }
        },
        "cross-spawn": {
            "version": "6.0.5",
            "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
            "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
            "dev": true,
            "requires": {
                "nice-try": "^1.0.4",
                "path-key": "^2.0.1",
                "semver": "^5.5.0",
                "shebang-command": "^1.2.0",
                "which": "^1.2.9"
            },
            "dependencies": {
                "semver": {
                    "version": "5.7.1",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
                    "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
                    "dev": true
                }
            }
        },
        "crypto-browserify": {
            "version": "3.12.0",
            "resolved": "https://registry.npmjs.org/crypto-browserify/-/crypto-browserify-3.12.0.tgz",
            "integrity": "sha512-fz4spIh+znjO2VjL+IdhEpRJ3YN6sMzITSBijk6FK2UvTqruSQW+/cCZTSNsMiZNvUeq0CqurF+dAbyiGOY6Wg==",
            "dev": true,
            "requires": {
                "browserify-cipher": "^1.0.0",
                "browserify-sign": "^4.0.0",
                "create-ecdh": "^4.0.0",
                "create-hash": "^1.1.0",
                "create-hmac": "^1.1.0",
                "diffie-hellman": "^5.0.0",
                "inherits": "^2.0.1",
                "pbkdf2": "^3.0.3",
                "public-encrypt": "^4.0.0",
                "randombytes": "^2.0.0",
                "randomfill": "^1.0.3"
            }
        },
        "crypto-random-string": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/crypto-random-string/-/crypto-random-string-2.0.0.tgz",
            "integrity": "sha512-v1plID3y9r/lPhviJ1wrXpLeyUIGAZ2SHNYTEapm7/8A9nLPoyvVp3RK/EPFqn5kEznyWgYZNsRtYYIWbuG8KA==",
            "dev": true
        },
        "cson-parser": {
            "version": "4.0.5",
            "resolved": "https://registry.npmjs.org/cson-parser/-/cson-parser-4.0.5.tgz",
            "integrity": "sha512-XgloWiJcHy3TeuonPJseMfZOuwDpfczIQ12xw+DS2D8TCFxbj61gVlu8Cfs6lOwucQlrJFCvBTiovBqYMwPfQw==",
            "dev": true,
            "requires": {
                "coffeescript": "^1.10.0"
            }
        },
        "css": {
            "version": "2.2.4",
            "resolved": "https://registry.npmjs.org/css/-/css-2.2.4.tgz",
            "integrity": "sha512-oUnjmWpy0niI3x/mPL8dVEI1l7MnG3+HHyRPHf+YFSbK+svOhXpmSOcDURUh2aOCgl2grzrOPt1nHLuCVFULLw==",
            "dev": true,
            "requires": {
                "inherits": "^2.0.3",
                "source-map": "^0.6.1",
                "source-map-resolve": "^0.5.2",
                "urix": "^0.1.0"
            },
            "dependencies": {
                "source-map": {
                    "version": "0.6.1",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                    "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                    "dev": true
                }
            }
        },
        "css-color-names": {
            "version": "0.0.4",
            "resolved": "https://registry.npmjs.org/css-color-names/-/css-color-names-0.0.4.tgz",
            "integrity": "sha1-gIrcLnnPhHOAabZGyyDsJ762KeA=",
            "dev": true
        },
        "css-declaration-sorter": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/css-declaration-sorter/-/css-declaration-sorter-4.0.1.tgz",
            "integrity": "sha512-BcxQSKTSEEQUftYpBVnsH4SF05NTuBokb19/sBt6asXGKZ/6VP7PLG1CBCkFDYOnhXhPh0jMhO6xZ71oYHXHBA==",
            "dev": true,
            "requires": {
                "postcss": "^7.0.1",
                "timsort": "^0.3.0"
            }
        },
        "css-loader": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/css-loader/-/css-loader-4.3.0.tgz",
            "integrity": "sha512-rdezjCjScIrsL8BSYszgT4s476IcNKt6yX69t0pHjJVnPUTDpn4WfIpDQTN3wCJvUvfsz/mFjuGOekf3PY3NUg==",
            "dev": true,
            "requires": {
                "camelcase": "^6.0.0",
                "cssesc": "^3.0.0",
                "icss-utils": "^4.1.1",
                "loader-utils": "^2.0.0",
                "postcss": "^7.0.32",
                "postcss-modules-extract-imports": "^2.0.0",
                "postcss-modules-local-by-default": "^3.0.3",
                "postcss-modules-scope": "^2.2.0",
                "postcss-modules-values": "^3.0.0",
                "postcss-value-parser": "^4.1.0",
                "schema-utils": "^2.7.1",
                "semver": "^7.3.2"
            }
        },
        "css-parse": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/css-parse/-/css-parse-2.0.0.tgz",
            "integrity": "sha1-pGjuZnwW2BzPBcWMONKpfHgNv9Q=",
            "dev": true,
            "requires": {
                "css": "^2.0.0"
            }
        },
        "css-select": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/css-select/-/css-select-2.1.0.tgz",
            "integrity": "sha512-Dqk7LQKpwLoH3VovzZnkzegqNSuAziQyNZUcrdDM401iY+R5NkGBXGmtO05/yaXQziALuPogeG0b7UAgjnTJTQ==",
            "dev": true,
            "requires": {
                "boolbase": "^1.0.0",
                "css-what": "^3.2.1",
                "domutils": "^1.7.0",
                "nth-check": "^1.0.2"
            }
        },
        "css-select-base-adapter": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/css-select-base-adapter/-/css-select-base-adapter-0.1.1.tgz",
            "integrity": "sha512-jQVeeRG70QI08vSTwf1jHxp74JoZsr2XSgETae8/xC8ovSnL2WF87GTLO86Sbwdt2lK4Umg4HnnwMO4YF3Ce7w==",
            "dev": true
        },
        "css-selector-tokenizer": {
            "version": "0.7.3",
            "resolved": "https://registry.npmjs.org/css-selector-tokenizer/-/css-selector-tokenizer-0.7.3.tgz",
            "integrity": "sha512-jWQv3oCEL5kMErj4wRnK/OPoBi0D+P1FR2cDCKYPaMeD2eW3/mttav8HT4hT1CKopiJI/psEULjkClhvJo4Lvg==",
            "dev": true,
            "requires": {
                "cssesc": "^3.0.0",
                "fastparse": "^1.1.2"
            }
        },
        "css-tree": {
            "version": "1.0.0-alpha.37",
            "resolved": "https://registry.npmjs.org/css-tree/-/css-tree-1.0.0-alpha.37.tgz",
            "integrity": "sha512-DMxWJg0rnz7UgxKT0Q1HU/L9BeJI0M6ksor0OgqOnF+aRCDWg/N2641HmVyU9KVIu0OVVWOb2IpC9A+BJRnejg==",
            "dev": true,
            "requires": {
                "mdn-data": "2.0.4",
                "source-map": "^0.6.1"
            },
            "dependencies": {
                "source-map": {
                    "version": "0.6.1",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                    "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                    "dev": true
                }
            }
        },
        "css-what": {
            "version": "3.4.2",
            "resolved": "https://registry.npmjs.org/css-what/-/css-what-3.4.2.tgz",
            "integrity": "sha512-ACUm3L0/jiZTqfzRM3Hi9Q8eZqd6IK37mMWPLz9PJxkLWllYeRf+EHUSHYEtFop2Eqytaq1FizFVh7XfBnXCDQ==",
            "dev": true
        },
        "cssauron": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/cssauron/-/cssauron-1.4.0.tgz",
            "integrity": "sha1-pmAt/34EqDBtwNuaVR6S6LVmKtg=",
            "dev": true,
            "requires": {
                "through": "X.X.X"
            }
        },
        "cssesc": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
            "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
            "dev": true
        },
        "cssnano": {
            "version": "4.1.10",
            "resolved": "https://registry.npmjs.org/cssnano/-/cssnano-4.1.10.tgz",
            "integrity": "sha512-5wny+F6H4/8RgNlaqab4ktc3e0/blKutmq8yNlBFXA//nSFFAqAngjNVRzUvCgYROULmZZUoosL/KSoZo5aUaQ==",
            "dev": true,
            "requires": {
                "cosmiconfig": "^5.0.0",
                "cssnano-preset-default": "^4.0.7",
                "is-resolvable": "^1.0.0",
                "postcss": "^7.0.0"
            }
        },
        "cssnano-preset-default": {
            "version": "4.0.7",
            "resolved": "https://registry.npmjs.org/cssnano-preset-default/-/cssnano-preset-default-4.0.7.tgz",
            "integrity": "sha512-x0YHHx2h6p0fCl1zY9L9roD7rnlltugGu7zXSKQx6k2rYw0Hi3IqxcoAGF7u9Q5w1nt7vK0ulxV8Lo+EvllGsA==",
            "dev": true,
            "requires": {
                "css-declaration-sorter": "^4.0.1",
                "cssnano-util-raw-cache": "^4.0.1",
                "postcss": "^7.0.0",
                "postcss-calc": "^7.0.1",
                "postcss-colormin": "^4.0.3",
                "postcss-convert-values": "^4.0.1",
                "postcss-discard-comments": "^4.0.2",
                "postcss-discard-duplicates": "^4.0.2",
                "postcss-discard-empty": "^4.0.1",
                "postcss-discard-overridden": "^4.0.1",
                "postcss-merge-longhand": "^4.0.11",
                "postcss-merge-rules": "^4.0.3",
                "postcss-minify-font-values": "^4.0.2",
                "postcss-minify-gradients": "^4.0.2",
                "postcss-minify-params": "^4.0.2",
                "postcss-minify-selectors": "^4.0.2",
                "postcss-normalize-charset": "^4.0.1",
                "postcss-normalize-display-values": "^4.0.2",
                "postcss-normalize-positions": "^4.0.2",
                "postcss-normalize-repeat-style": "^4.0.2",
                "postcss-normalize-string": "^4.0.2",
                "postcss-normalize-timing-functions": "^4.0.2",
                "postcss-normalize-unicode": "^4.0.1",
                "postcss-normalize-url": "^4.0.1",
                "postcss-normalize-whitespace": "^4.0.2",
                "postcss-ordered-values": "^4.1.2",
                "postcss-reduce-initial": "^4.0.3",
                "postcss-reduce-transforms": "^4.0.2",
                "postcss-svgo": "^4.0.2",
                "postcss-unique-selectors": "^4.0.1"
            }
        },
        "cssnano-util-get-arguments": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/cssnano-util-get-arguments/-/cssnano-util-get-arguments-4.0.0.tgz",
            "integrity": "sha1-7ToIKZ8h11dBsg87gfGU7UnMFQ8=",
            "dev": true
        },
        "cssnano-util-get-match": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/cssnano-util-get-match/-/cssnano-util-get-match-4.0.0.tgz",
            "integrity": "sha1-wOTKB/U4a7F+xeUiULT1lhNlFW0=",
            "dev": true
        },
        "cssnano-util-raw-cache": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/cssnano-util-raw-cache/-/cssnano-util-raw-cache-4.0.1.tgz",
            "integrity": "sha512-qLuYtWK2b2Dy55I8ZX3ky1Z16WYsx544Q0UWViebptpwn/xDBmog2TLg4f+DBMg1rJ6JDWtn96WHbOKDWt1WQA==",
            "dev": true,
            "requires": {
                "postcss": "^7.0.0"
            }
        },
        "cssnano-util-same-parent": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/cssnano-util-same-parent/-/cssnano-util-same-parent-4.0.1.tgz",
            "integrity": "sha512-WcKx5OY+KoSIAxBW6UBBRay1U6vkYheCdjyVNDm85zt5K9mHoGOfsOsqIszfAqrQQFIIKgjh2+FDgIj/zsl21Q==",
            "dev": true
        },
        "csso": {
            "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/csso/-/csso-4.1.1.tgz",
            "integrity": "sha512-Rvq+e1e0TFB8E8X+8MQjHSY6vtol45s5gxtLI/018UsAn2IBMmwNEZRM/h+HVnAJRHjasLIKKUO3uvoMM28LvA==",
            "dev": true,
            "requires": {
                "css-tree": "^1.0.0"
            },
            "dependencies": {
                "css-tree": {
                    "version": "1.1.1",
                    "resolved": "https://registry.npmjs.org/css-tree/-/css-tree-1.1.1.tgz",
                    "integrity": "sha512-NVN42M2fjszcUNpDbdkvutgQSlFYsr1z7kqeuCagHnNLBfYor6uP1WL1KrkmdYZ5Y1vTBCIOI/C/+8T98fJ71w==",
                    "dev": true,
                    "requires": {
                        "mdn-data": "2.0.14",
                        "source-map": "^0.6.1"
                    }
                },
                "mdn-data": {
                    "version": "2.0.14",
                    "resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.0.14.tgz",
                    "integrity": "sha512-dn6wd0uw5GsdswPFfsgMp5NSB0/aDe6fK94YJV/AJDYXL6HVLWBsxeq7js7Ad+mU2K9LAlwpk6kN2D5mwCPVow==",
                    "dev": true
                },
                "source-map": {
                    "version": "0.6.1",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                    "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                    "dev": true
                }
            }
        },
        "cssom": {
            "version": "0.4.4",
            "resolved": "https://registry.npmjs.org/cssom/-/cssom-0.4.4.tgz",
            "integrity": "sha512-p3pvU7r1MyyqbTk+WbNJIgJjG2VmTIaB10rI93LzVPrmDJKkzKYMtxxyAvQXR/NS6otuzveI7+7BBq3SjBS2mw==",
            "dev": true
        },
        "cssstyle": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/cssstyle/-/cssstyle-2.3.0.tgz",
            "integrity": "sha512-AZL67abkUzIuvcHqk7c09cezpGNcxUxU4Ioi/05xHk4DQeTkWmGYftIE6ctU6AEt+Gn4n1lDStOtj7FKycP71A==",
            "dev": true,
            "requires": {
                "cssom": "~0.3.6"
            },
            "dependencies": {
                "cssom": {
                    "version": "0.3.8",
                    "resolved": "https://registry.npmjs.org/cssom/-/cssom-0.3.8.tgz",
                    "integrity": "sha512-b0tGHbfegbhPJpxpiBPU2sCkigAqtM9O121le6bbOlgyV+NyGyCmVfJ6QW9eRjz8CpNfWEOYBIMIGRYkLwsIYg==",
                    "dev": true
                }
            }
        },
        "cyclist": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/cyclist/-/cyclist-1.0.1.tgz",
            "integrity": "sha1-WW6WmP0MgOEgOMK4LW6xs1tiJNk=",
            "dev": true
        },
        "d": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/d/-/d-1.0.1.tgz",
            "integrity": "sha512-m62ShEObQ39CfralilEQRjH6oAMtNCV1xJyEx5LpRYUVN+EviphDgUc/F3hnYbADmkiNs67Y+3ylmlG7Lnu+FA==",
            "dev": true,
            "requires": {
                "es5-ext": "^0.10.50",
                "type": "^1.0.1"
            }
        },
        "damerau-levenshtein": {
            "version": "1.0.6",
            "resolved": "https://registry.npmjs.org/damerau-levenshtein/-/damerau-levenshtein-1.0.6.tgz",
            "integrity": "sha512-JVrozIeElnj3QzfUIt8tB8YMluBJom4Vw9qTPpjGYQ9fYlB3D/rb6OordUxf3xeFB35LKWs0xqcO5U6ySvBtug==",
            "dev": true
        },
        "dashdash": {
            "version": "1.14.1",
            "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
            "integrity": "sha1-hTz6D3y+L+1d4gMmuN1YEDX24vA=",
            "dev": true,
            "requires": {
                "assert-plus": "^1.0.0"
            }
        },
        "data-urls": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/data-urls/-/data-urls-2.0.0.tgz",
            "integrity": "sha512-X5eWTSXO/BJmpdIKCRuKUgSCgAN0OwliVK3yPKbwIWU1Tdw5BRajxlzMidvh+gwko9AfQ9zIj52pzF91Q3YAvQ==",
            "dev": true,
            "requires": {
                "abab": "^2.0.3",
                "whatwg-mimetype": "^2.3.0",
                "whatwg-url": "^8.0.0"
            }
        },
        "debug": {
            "version": "4.3.1",
            "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
            "integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
            "dev": true,
            "requires": {
                "ms": "2.1.2"
            }
        },
        "decamelize": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
            "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA=",
            "dev": true
        },
        "decimal.js": {
            "version": "10.2.1",
            "resolved": "https://registry.npmjs.org/decimal.js/-/decimal.js-10.2.1.tgz",
            "integrity": "sha512-KaL7+6Fw6i5A2XSnsbhm/6B+NuEA7TZ4vqxnd5tXz9sbKtrN9Srj8ab4vKVdK8YAqZO9P1kg45Y6YLoduPf+kw==",
            "dev": true
        },
        "decode-uri-component": {
            "version": "0.2.0",
            "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
            "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU=",
            "dev": true
        },
        "decompress-response": {
            "version": "3.3.0",
            "resolved": "https://registry.npmjs.org/decompress-response/-/decompress-response-3.3.0.tgz",
            "integrity": "sha1-gKTdMjdIOEv6JICDYirt7Jgq3/M=",
            "dev": true,
            "requires": {
                "mimic-response": "^1.0.0"
            }
        },
        "dedent": {
            "version": "0.7.0",
            "resolved": "https://registry.npmjs.org/dedent/-/dedent-0.7.0.tgz",
            "integrity": "sha1-JJXduvbrh0q7Dhvp3yLS5aVEMmw=",
            "dev": true
        },
        "deep-equal": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/deep-equal/-/deep-equal-1.1.1.tgz",
            "integrity": "sha512-yd9c5AdiqVcR+JjcwUQb9DkhJc8ngNr0MahEBGvDiJw8puWab2yZlh+nkasOnZP+EGTAP6rRp2JzJhJZzvNF8g==",
            "dev": true,
            "requires": {
                "is-arguments": "^1.0.4",
                "is-date-object": "^1.0.1",
                "is-regex": "^1.0.4",
                "object-is": "^1.0.1",
                "object-keys": "^1.1.1",
                "regexp.prototype.flags": "^1.2.0"
            }
        },
        "deep-extend": {
            "version": "0.6.0",
            "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
            "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA==",
            "dev": true
        },
        "deep-is": {
            "version": "0.1.3",
            "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.3.tgz",
            "integrity": "sha1-s2nW+128E+7PUk+RsHD+7cNXzzQ=",
            "dev": true
        },
        "deepmerge": {
            "version": "4.2.2",
            "resolved": "https://registry.npmjs.org/deepmerge/-/deepmerge-4.2.2.tgz",
            "integrity": "sha512-FJ3UgI4gIl+PHZm53knsuSFpE+nESMr7M4v9QcgB7S63Kj/6WqMiFQJpBBYz1Pt+66bZpP3Q7Lye0Oo9MPKEdg==",
            "dev": true
        },
        "default-gateway": {
            "version": "4.2.0",
            "resolved": "https://registry.npmjs.org/default-gateway/-/default-gateway-4.2.0.tgz",
            "integrity": "sha512-h6sMrVB1VMWVrW13mSc6ia/DwYYw5MN6+exNu1OaJeFac5aSAvwM7lZ0NVfTABuSkQelr4h5oebg3KB1XPdjgA==",
            "dev": true,
            "requires": {
                "execa": "^1.0.0",
                "ip-regex": "^2.1.0"
            }
        },
        "defaults": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/defaults/-/defaults-1.0.3.tgz",
            "integrity": "sha1-xlYFHpgX2f8I7YgUd/P+QBnz730=",
            "requires": {
                "clone": "^1.0.2"
            }
        },
        "defer-to-connect": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/defer-to-connect/-/defer-to-connect-1.1.3.tgz",
            "integrity": "sha512-0ISdNousHvZT2EiFlZeZAHBUvSxmKswVCEf8hW7KWgG4a8MVEu/3Vb6uWYozkjylyCxe0JBIiRB1jV45S70WVQ==",
            "dev": true
        },
        "define-properties": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
            "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",
            "dev": true,
            "requires": {
                "object-keys": "^1.0.12"
            }
        },
        "define-property": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-2.0.2.tgz",
            "integrity": "sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==",
            "dev": true,
            "requires": {
                "is-descriptor": "^1.0.2",
                "isobject": "^3.0.1"
            },
            "dependencies": {
                "is-accessor-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
                    "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
                    "dev": true,
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-data-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
                    "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
                    "dev": true,
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-descriptor": {
                    "version": "1.0.2",
                    "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
                    "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
                    "dev": true,
                    "requires": {
                        "is-accessor-descriptor": "^1.0.0",
                        "is-data-descriptor": "^1.0.0",
                        "kind-of": "^6.0.2"
                    }
                }
            }
        },
        "del": {
            "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/del/-/del-4.1.1.tgz",
            "integrity": "sha512-QwGuEUouP2kVwQenAsOof5Fv8K9t3D8Ca8NxcXKrIpEHjTXK5J2nXLdP+ALI1cgv8wj7KuwBhTwBkOZSJKM5XQ==",
            "dev": true,
            "requires": {
                "@types/glob": "^7.1.1",
                "globby": "^6.1.0",
                "is-path-cwd": "^2.0.0",
                "is-path-in-cwd": "^2.0.0",
                "p-map": "^2.0.0",
                "pify": "^4.0.1",
                "rimraf": "^2.6.3"
            },
            "dependencies": {
                "array-union": {
                    "version": "1.0.2",
                    "resolved": "https://registry.npmjs.org/array-union/-/array-union-1.0.2.tgz",
                    "integrity": "sha1-mjRBDk9OPaI96jdb5b5w8kd47Dk=",
                    "dev": true,
                    "requires": {
                        "array-uniq": "^1.0.1"
                    }
                },
                "globby": {
                    "version": "6.1.0",
                    "resolved": "https://registry.npmjs.org/globby/-/globby-6.1.0.tgz",
                    "integrity": "sha1-9abXDoOV4hyFj7BInWTfAkJNUGw=",
                    "dev": true,
                    "requires": {
                        "array-union": "^1.0.1",
                        "glob": "^7.0.3",
                        "object-assign": "^4.0.1",
                        "pify": "^2.0.0",
                        "pinkie-promise": "^2.0.0"
                    },
                    "dependencies": {
                        "pify": {
                            "version": "2.3.0",
                            "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
                            "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
                            "dev": true
                        }
                    }
                },
                "p-map": {
                    "version": "2.1.0",
                    "resolved": "https://registry.npmjs.org/p-map/-/p-map-2.1.0.tgz",
                    "integrity": "sha512-y3b8Kpd8OAN444hxfBbFfj1FY/RjtTd8tzYwhUqNYXx0fXx2iX4maP4Qr6qhIKbQXI02wTLAda4fYUbDagTUFw==",
                    "dev": true
                },
                "rimraf": {
                    "version": "2.7.1",
                    "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
                    "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
                    "dev": true,
                    "requires": {
                        "glob": "^7.1.3"
                    }
                }
            }
        },
        "delayed-stream": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
            "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk=",
            "dev": true
        },
        "depd": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
            "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak=",
            "dev": true
        },
        "dependency-graph": {
            "version": "0.7.2",
            "resolved": "https://registry.npmjs.org/dependency-graph/-/dependency-graph-0.7.2.tgz",
            "integrity": "sha512-KqtH4/EZdtdfWX0p6MGP9jljvxSY6msy/pRUD4jgNwVpv3v1QmNLlsB3LDSSUg79BRVSn7jI1QPRtArGABovAQ==",
            "dev": true
        },
        "des.js": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/des.js/-/des.js-1.0.1.tgz",
            "integrity": "sha512-Q0I4pfFrv2VPd34/vfLrFOoRmlYj3OV50i7fskps1jZWK1kApMWWT9G6RRUeYedLcBDIhnSDaUvJMb3AhUlaEA==",
            "dev": true,
            "requires": {
                "inherits": "^2.0.1",
                "minimalistic-assert": "^1.0.0"
            }
        },
        "destroy": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
            "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA=",
            "dev": true
        },
        "detect-newline": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/detect-newline/-/detect-newline-3.1.0.tgz",
            "integrity": "sha512-TLz+x/vEXm/Y7P7wn1EJFNLxYpUD4TgMosxY6fAVJUnJMbupHBOncxyWUG9OpTaH9EBD7uFI5LfEgmMOc54DsA==",
            "dev": true
        },
        "detect-node": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/detect-node/-/detect-node-2.0.4.tgz",
            "integrity": "sha512-ZIzRpLJrOj7jjP2miAtgqIfmzbxa4ZOr5jJc601zklsfEx9oTzmmj2nVpIPRpNlRTIh8lc1kyViIY7BWSGNmKw==",
            "dev": true
        },
        "did-you-mean": {
            "version": "0.0.1",
            "resolved": "https://registry.npmjs.org/did-you-mean/-/did-you-mean-0.0.1.tgz",
            "integrity": "sha1-iFHOgkB5A8tiwSy2rU9naSHM3sM=",
            "dev": true,
            "requires": {
                "levenshtein": "*",
                "underscore": "*"
            }
        },
        "diff": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/diff/-/diff-4.0.2.tgz",
            "integrity": "sha512-58lmxKSA4BNyLz+HHMUzlOEpg09FV+ev6ZMe3vJihgdxzgcwZ8VoEEPmALCZG9LmqfVoNMMKpttIYTVG6uDY7A==",
            "dev": true
        },
        "diff-sequences": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/diff-sequences/-/diff-sequences-26.6.2.tgz",
            "integrity": "sha512-Mv/TDa3nZ9sbc5soK+OoA74BsS3mL37yixCvUAQkiuA4Wz6YtwP/K47n2rv2ovzHZvoiQeA5FTQOschKkEwB0Q==",
            "dev": true
        },
        "diffie-hellman": {
            "version": "5.0.3",
            "resolved": "https://registry.npmjs.org/diffie-hellman/-/diffie-hellman-5.0.3.tgz",
            "integrity": "sha512-kqag/Nl+f3GwyK25fhUMYj81BUOrZ9IuJsjIcDE5icNM9FJHAVm3VcUDxdLPoQtTuUylWm6ZIknYJwwaPxsUzg==",
            "dev": true,
            "requires": {
                "bn.js": "^4.1.0",
                "miller-rabin": "^4.0.0",
                "randombytes": "^2.0.0"
            },
            "dependencies": {
                "bn.js": {
                    "version": "4.11.9",
                    "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
                    "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
                    "dev": true
                }
            }
        },
        "dir-glob": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-3.0.1.tgz",
            "integrity": "sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==",
            "dev": true,
            "requires": {
                "path-type": "^4.0.0"
            }
        },
        "dns-equal": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/dns-equal/-/dns-equal-1.0.0.tgz",
            "integrity": "sha1-s55/HabrCnW6nBcySzR1PEfgZU0=",
            "dev": true
        },
        "dns-packet": {
            "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/dns-packet/-/dns-packet-1.3.1.tgz",
            "integrity": "sha512-0UxfQkMhYAUaZI+xrNZOz/as5KgDU0M/fQ9b6SpkyLbk3GEswDi6PADJVaYJradtRVsRIlF1zLyOodbcTCDzUg==",
            "dev": true,
            "requires": {
                "ip": "^1.1.0",
                "safe-buffer": "^5.0.1"
            }
        },
        "dns-txt": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/dns-txt/-/dns-txt-2.0.2.tgz",
            "integrity": "sha1-uR2Ab10nGI5Ks+fRB9iBocxGQrY=",
            "dev": true,
            "requires": {
                "buffer-indexof": "^1.0.0"
            }
        },
        "doctrine": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz",
            "integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
            "dev": true,
            "requires": {
                "esutils": "^2.0.2"
            }
        },
        "dom-serializer": {
            "version": "0.2.2",
            "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-0.2.2.tgz",
            "integrity": "sha512-2/xPb3ORsQ42nHYiSunXkDjPLBaEj/xTwUO4B7XCZQTRk7EBtTOPaygh10YAAh2OI1Qrp6NWfpAhzswj0ydt9g==",
            "dev": true,
            "requires": {
                "domelementtype": "^2.0.1",
                "entities": "^2.0.0"
            },
            "dependencies": {
                "domelementtype": {
                    "version": "2.0.2",
                    "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.0.2.tgz",
                    "integrity": "sha512-wFwTwCVebUrMgGeAwRL/NhZtHAUyT9n9yg4IMDwf10+6iCMxSkVq9MGCVEH+QZWo1nNidy8kNvwmv4zWHDTqvA==",
                    "dev": true
                }
            }
        },
        "domain-browser": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/domain-browser/-/domain-browser-1.2.0.tgz",
            "integrity": "sha512-jnjyiM6eRyZl2H+W8Q/zLMA481hzi0eszAaBUzIVnmYVDBbnLxVNnfu1HgEBvCbL+71FrxMl3E6lpKH7Ge3OXA==",
            "dev": true
        },
        "domelementtype": {
            "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-1.3.1.tgz",
            "integrity": "sha512-BSKB+TSpMpFI/HOxCNr1O8aMOTZ8hT3pM3GQ0w/mWRmkhEDSFJkkyzz4XQsBV44BChwGkrDfMyjVD0eA2aFV3w==",
            "dev": true
        },
        "domexception": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/domexception/-/domexception-2.0.1.tgz",
            "integrity": "sha512-yxJ2mFy/sibVQlu5qHjOkf9J3K6zgmCxgJ94u2EdvDOV09H+32LtRswEcUsmUWN72pVLOEnTSRaIVVzVQgS0dg==",
            "dev": true,
            "requires": {
                "webidl-conversions": "^5.0.0"
            },
            "dependencies": {
                "webidl-conversions": {
                    "version": "5.0.0",
                    "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-5.0.0.tgz",
                    "integrity": "sha512-VlZwKPCkYKxQgeSbH5EyngOmRp7Ww7I9rQLERETtf5ofd9pGeswWiOtogpEO850jziPRarreGxn5QIiTqpb2wA==",
                    "dev": true
                }
            }
        },
        "domutils": {
            "version": "1.7.0",
            "resolved": "https://registry.npmjs.org/domutils/-/domutils-1.7.0.tgz",
            "integrity": "sha512-Lgd2XcJ/NjEw+7tFvfKxOzCYKZsdct5lczQ2ZaQY8Djz7pfAD3Gbp8ySJWtreII/vDlMVmxwa6pHmdxIYgttDg==",
            "dev": true,
            "requires": {
                "dom-serializer": "0",
                "domelementtype": "1"
            }
        },
        "dot-prop": {
            "version": "5.3.0",
            "resolved": "https://registry.npmjs.org/dot-prop/-/dot-prop-5.3.0.tgz",
            "integrity": "sha512-QM8q3zDe58hqUqjraQOmzZ1LIH9SWQJTlEKCH4kJ2oQvLZk7RbQXvtDM2XEq3fwkV9CCvvH4LA0AV+ogFsBM2Q==",
            "dev": true,
            "requires": {
                "is-obj": "^2.0.0"
            }
        },
        "duplexer3": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/duplexer3/-/duplexer3-0.1.4.tgz",
            "integrity": "sha1-7gHdHKwO08vH/b6jfcCo8c4ALOI=",
            "dev": true
        },
        "duplexify": {
            "version": "3.7.1",
            "resolved": "https://registry.npmjs.org/duplexify/-/duplexify-3.7.1.tgz",
            "integrity": "sha512-07z8uv2wMyS51kKhD1KsdXJg5WQ6t93RneqRxUHnskXVtlYYkLqM0gqStQZ3pj073g687jPCHrqNfCzawLYh5g==",
            "dev": true,
            "requires": {
                "end-of-stream": "^1.0.0",
                "inherits": "^2.0.1",
                "readable-stream": "^2.0.0",
                "stream-shift": "^1.0.0"
            }
        },
        "ecc-jsbn": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
            "integrity": "sha1-OoOpBOVDUyh4dMVkt1SThoSamMk=",
            "dev": true,
            "requires": {
                "jsbn": "~0.1.0",
                "safer-buffer": "^2.1.0"
            }
        },
        "ee-first": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
            "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0=",
            "dev": true
        },
        "electron-to-chromium": {
            "version": "1.3.602",
            "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.3.602.tgz",
            "integrity": "sha512-+JbC10U8vpKAqAtrEqORdzaWewRgEj5DY+QQNyP/dxDTshPqqgpjrvt6smewKS/5F3vT5prYgg7/VTxb5FROjw==",
            "dev": true
        },
        "elliptic": {
            "version": "6.5.3",
            "resolved": "https://registry.npmjs.org/elliptic/-/elliptic-6.5.3.tgz",
            "integrity": "sha512-IMqzv5wNQf+E6aHeIqATs0tOLeOTwj1QKbRcS3jBbYkl5oLAserA8yJTT7/VyHUYG91PRmPyeQDObKLPpeS4dw==",
            "dev": true,
            "requires": {
                "bn.js": "^4.4.0",
                "brorand": "^1.0.1",
                "hash.js": "^1.0.0",
                "hmac-drbg": "^1.0.0",
                "inherits": "^2.0.1",
                "minimalistic-assert": "^1.0.0",
                "minimalistic-crypto-utils": "^1.0.0"
            },
            "dependencies": {
                "bn.js": {
                    "version": "4.11.9",
                    "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
                    "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
                    "dev": true
                }
            }
        },
        "emittery": {
            "version": "0.7.2",
            "resolved": "https://registry.npmjs.org/emittery/-/emittery-0.7.2.tgz",
            "integrity": "sha512-A8OG5SR/ij3SsJdWDJdkkSYUjQdCUx6APQXem0SaEePBSRg4eymGYwBkKo1Y6DU+af/Jn2dBQqDBvjnr9Vi8nQ==",
            "dev": true
        },
        "emoji-regex": {
            "version": "8.0.0",
            "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
            "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
        },
        "emojis-list": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/emojis-list/-/emojis-list-3.0.0.tgz",
            "integrity": "sha512-/kyM18EfinwXZbno9FyUGeFh87KC8HRQBQGildHZbEuRyWFOmv1U10o9BBp8XVZDVNNuQKyIGIu5ZYAAXJ0V2Q==",
            "dev": true
        },
        "encodeurl": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
            "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k=",
            "dev": true
        },
        "encoding": {
            "version": "0.1.13",
            "resolved": "https://registry.npmjs.org/encoding/-/encoding-0.1.13.tgz",
            "integrity": "sha512-ETBauow1T35Y/WZMkio9jiM0Z5xjHHmJ4XmjZOq1l/dXz3lr2sRn87nJy20RupqSh1F2m3HHPSp8ShIPQJrJ3A==",
            "dev": true,
            "requires": {
                "iconv-lite": "^0.6.2"
            },
            "dependencies": {
                "iconv-lite": {
                    "version": "0.6.2",
                    "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.2.tgz",
                    "integrity": "sha512-2y91h5OpQlolefMPmUlivelittSWy0rP+oYVpn6A7GwVHNE8AWzoYOBNmlwks3LobaJxgHCYZAnyNo2GgpNRNQ==",
                    "dev": true,
                    "requires": {
                        "safer-buffer": ">= 2.1.2 < 3.0.0"
                    }
                }
            }
        },
        "end-of-stream": {
            "version": "1.4.4",
            "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",
            "integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",
            "dev": true,
            "requires": {
                "once": "^1.4.0"
            }
        },
        "enhanced-resolve": {
            "version": "5.3.1",
            "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.3.1.tgz",
            "integrity": "sha512-G1XD3MRGrGfNcf6Hg0LVZG7GIKcYkbfHa5QMxt1HDUTdYoXH0JR1xXyg+MaKLF73E9A27uWNVxvFivNRYeUB6w==",
            "dev": true,
            "requires": {
                "graceful-fs": "^4.2.4",
                "tapable": "^2.0.0"
            }
        },
        "enquirer": {
            "version": "2.3.6",
            "resolved": "https://registry.npmjs.org/enquirer/-/enquirer-2.3.6.tgz",
            "integrity": "sha512-yjNnPr315/FjS4zIsUxYguYUPP2e1NK4d7E7ZOLiyYCcbFBiTMyID+2wvm2w6+pZ/odMA7cRkjhsPbltwBOrLg==",
            "dev": true,
            "requires": {
                "ansi-colors": "^4.1.1"
            }
        },
        "entities": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/entities/-/entities-2.1.0.tgz",
            "integrity": "sha512-hCx1oky9PFrJ611mf0ifBLBRW8lUUVRlFolb5gWRfIELabBlbp9xZvrqZLZAs+NxFnbfQoeGd8wDkygjg7U85w==",
            "dev": true
        },
        "err-code": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/err-code/-/err-code-1.1.2.tgz",
            "integrity": "sha1-BuARbTAo9q70gGhJ6w6mp0iuaWA=",
            "dev": true
        },
        "errno": {
            "version": "0.1.7",
            "resolved": "https://registry.npmjs.org/errno/-/errno-0.1.7.tgz",
            "integrity": "sha512-MfrRBDWzIWifgq6tJj60gkAwtLNb6sQPlcFrSOflcP1aFmmruKQ2wRnze/8V6kgyz7H3FF8Npzv78mZ7XLLflg==",
            "dev": true,
            "requires": {
                "prr": "~1.0.1"
            }
        },
        "error-ex": {
            "version": "1.3.2",
            "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
            "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
            "dev": true,
            "requires": {
                "is-arrayish": "^0.2.1"
            }
        },
        "errorhandler": {
            "version": "1.5.1",
            "resolved": "https://registry.npmjs.org/errorhandler/-/errorhandler-1.5.1.tgz",
            "integrity": "sha512-rcOwbfvP1WTViVoUjcfZicVzjhjTuhSMntHh6mW3IrEiyE6mJyXvsToJUJGlGlw/2xU9P5whlWNGlIDVeCiT4A==",
            "dev": true,
            "requires": {
                "accepts": "~1.3.7",
                "escape-html": "~1.0.3"
            }
        },
        "es-abstract": {
            "version": "1.17.7",
            "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.17.7.tgz",
            "integrity": "sha512-VBl/gnfcJ7OercKA9MVaegWsBHFjV492syMudcnQZvt/Dw8ezpcOHYZXa/J96O8vx+g4x65YKhxOwDUh63aS5g==",
            "dev": true,
            "requires": {
                "es-to-primitive": "^1.2.1",
                "function-bind": "^1.1.1",
                "has": "^1.0.3",
                "has-symbols": "^1.0.1",
                "is-callable": "^1.2.2",
                "is-regex": "^1.1.1",
                "object-inspect": "^1.8.0",
                "object-keys": "^1.1.1",
                "object.assign": "^4.1.1",
                "string.prototype.trimend": "^1.0.1",
                "string.prototype.trimstart": "^1.0.1"
            }
        },
        "es-to-primitive": {
            "version": "1.2.1",
            "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.2.1.tgz",
            "integrity": "sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==",
            "dev": true,
            "requires": {
                "is-callable": "^1.1.4",
                "is-date-object": "^1.0.1",
                "is-symbol": "^1.0.2"
            }
        },
        "es5-ext": {
            "version": "0.10.53",
            "resolved": "https://registry.npmjs.org/es5-ext/-/es5-ext-0.10.53.tgz",
            "integrity": "sha512-Xs2Stw6NiNHWypzRTY1MtaG/uJlwCk8kH81920ma8mvN8Xq1gsfhZvpkImLQArw8AHnv8MT2I45J3c0R8slE+Q==",
            "dev": true,
            "requires": {
                "es6-iterator": "~2.0.3",
                "es6-symbol": "~3.1.3",
                "next-tick": "~1.0.0"
            }
        },
        "es6-iterator": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/es6-iterator/-/es6-iterator-2.0.3.tgz",
            "integrity": "sha1-p96IkUGgWpSwhUQDstCg+/qY87c=",
            "dev": true,
            "requires": {
                "d": "1",
                "es5-ext": "^0.10.35",
                "es6-symbol": "^3.1.1"
            }
        },
        "es6-promise": {
            "version": "4.2.8",
            "resolved": "https://registry.npmjs.org/es6-promise/-/es6-promise-4.2.8.tgz",
            "integrity": "sha512-HJDGx5daxeIvxdBxvG2cb9g4tEvwIk3i8+nhX0yGrYmZUzbkdg8QbDevheDB8gd0//uPj4c1EQua8Q+MViT0/w==",
            "dev": true
        },
        "es6-promisify": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/es6-promisify/-/es6-promisify-5.0.0.tgz",
            "integrity": "sha1-UQnWLz5W6pZ8S2NQWu8IKRyKUgM=",
            "dev": true,
            "requires": {
                "es6-promise": "^4.0.3"
            }
        },
        "es6-symbol": {
            "version": "3.1.3",
            "resolved": "https://registry.npmjs.org/es6-symbol/-/es6-symbol-3.1.3.tgz",
            "integrity": "sha512-NJ6Yn3FuDinBaBRWl/q5X/s4koRHBrgKAu+yGI6JCBeiu3qrcbJhwT2GeR/EXVfylRk8dpQVJoLEFhK+Mu31NA==",
            "dev": true,
            "requires": {
                "d": "^1.0.1",
                "ext": "^1.1.2"
            }
        },
        "escalade": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz",
            "integrity": "sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw==",
            "dev": true
        },
        "escape-goat": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/escape-goat/-/escape-goat-2.1.1.tgz",
            "integrity": "sha512-8/uIhbG12Csjy2JEW7D9pHbreaVaS/OpN3ycnyvElTdwM5n6GY6W6e2IPemfvGZeUMqZ9A/3GqIZMgKnBhAw/Q==",
            "dev": true
        },
        "escape-html": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
            "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg=",
            "dev": true
        },
        "escape-string-regexp": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
            "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ="
        },
        "escodegen": {
            "version": "1.14.3",
            "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-1.14.3.tgz",
            "integrity": "sha512-qFcX0XJkdg+PB3xjZZG/wKSuT1PnQWx57+TVSjIMmILd2yC/6ByYElPwJnslDsuWuSAp4AwJGumarAAmJch5Kw==",
            "dev": true,
            "requires": {
                "esprima": "^4.0.1",
                "estraverse": "^4.2.0",
                "esutils": "^2.0.2",
                "optionator": "^0.8.1",
                "source-map": "~0.6.1"
            },
            "dependencies": {
                "levn": {
                    "version": "0.3.0",
                    "resolved": "https://registry.npmjs.org/levn/-/levn-0.3.0.tgz",
                    "integrity": "sha1-OwmSTt+fCDwEkP3UwLxEIeBHZO4=",
                    "dev": true,
                    "requires": {
                        "prelude-ls": "~1.1.2",
                        "type-check": "~0.3.2"
                    }
                },
                "optionator": {
                    "version": "0.8.3",
                    "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.8.3.tgz",
                    "integrity": "sha512-+IW9pACdk3XWmmTXG8m3upGUJst5XRGzxMRjXzAuJ1XnIFNvfhjjIuYkDvysnPQ7qzqVzLt78BCruntqRhWQbA==",
                    "dev": true,
                    "requires": {
                        "deep-is": "~0.1.3",
                        "fast-levenshtein": "~2.0.6",
                        "levn": "~0.3.0",
                        "prelude-ls": "~1.1.2",
                        "type-check": "~0.3.2",
                        "word-wrap": "~1.2.3"
                    }
                },
                "prelude-ls": {
                    "version": "1.1.2",
                    "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.1.2.tgz",
                    "integrity": "sha1-IZMqVJ9eUv/ZqCf1cOBL5iqX2lQ=",
                    "dev": true
                },
                "source-map": {
                    "version": "0.6.1",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                    "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                    "dev": true,
                    "optional": true
                },
                "type-check": {
                    "version": "0.3.2",
                    "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.3.2.tgz",
                    "integrity": "sha1-WITKtRLPHTVeP7eE8wgEsrUg23I=",
                    "dev": true,
                    "requires": {
                        "prelude-ls": "~1.1.2"
                    }
                }
            }
        },
        "eslint": {
            "version": "7.13.0",
            "resolved": "https://registry.npmjs.org/eslint/-/eslint-7.13.0.tgz",
            "integrity": "sha512-uCORMuOO8tUzJmsdRtrvcGq5qposf7Rw0LwkTJkoDbOycVQtQjmnhZSuLQnozLE4TmAzlMVV45eCHmQ1OpDKUQ==",
            "dev": true,
            "requires": {
                "@babel/code-frame": "^7.0.0",
                "@eslint/eslintrc": "^0.2.1",
                "ajv": "^6.10.0",
                "chalk": "^4.0.0",
                "cross-spawn": "^7.0.2",
                "debug": "^4.0.1",
                "doctrine": "^3.0.0",
                "enquirer": "^2.3.5",
                "eslint-scope": "^5.1.1",
                "eslint-utils": "^2.1.0",
                "eslint-visitor-keys": "^2.0.0",
                "espree": "^7.3.0",
                "esquery": "^1.2.0",
                "esutils": "^2.0.2",
                "file-entry-cache": "^5.0.1",
                "functional-red-black-tree": "^1.0.1",
                "glob-parent": "^5.0.0",
                "globals": "^12.1.0",
                "ignore": "^4.0.6",
                "import-fresh": "^3.0.0",
                "imurmurhash": "^0.1.4",
                "is-glob": "^4.0.0",
                "js-yaml": "^3.13.1",
                "json-stable-stringify-without-jsonify": "^1.0.1",
                "levn": "^0.4.1",
                "lodash": "^4.17.19",
                "minimatch": "^3.0.4",
                "natural-compare": "^1.4.0",
                "optionator": "^0.9.1",
                "progress": "^2.0.0",
                "regexpp": "^3.1.0",
                "semver": "^7.2.1",
                "strip-ansi": "^6.0.0",
                "strip-json-comments": "^3.1.0",
                "table": "^5.2.3",
                "text-table": "^0.2.0",
                "v8-compile-cache": "^2.0.3"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "cross-spawn": {
                    "version": "7.0.3",
                    "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz",
                    "integrity": "sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==",
                    "dev": true,
                    "requires": {
                        "path-key": "^3.1.0",
                        "shebang-command": "^2.0.0",
                        "which": "^2.0.1"
                    }
                },
                "eslint-scope": {
                    "version": "5.1.1",
                    "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.1.1.tgz",
                    "integrity": "sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==",
                    "dev": true,
                    "requires": {
                        "esrecurse": "^4.3.0",
                        "estraverse": "^4.1.1"
                    }
                },
                "globals": {
                    "version": "12.4.0",
                    "resolved": "https://registry.npmjs.org/globals/-/globals-12.4.0.tgz",
                    "integrity": "sha512-BWICuzzDvDoH54NHKCseDanAhE3CeDorgDL5MT6LMXXj2WCnd9UC2szdk4AWLfjdgNBCXLUanXYcpBBKOSWGwg==",
                    "dev": true,
                    "requires": {
                        "type-fest": "^0.8.1"
                    }
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "ignore": {
                    "version": "4.0.6",
                    "resolved": "https://registry.npmjs.org/ignore/-/ignore-4.0.6.tgz",
                    "integrity": "sha512-cyFDKrqc/YdcWFniJhzI42+AzS+gNwmUzOSFcRCQYwySuBBBy/KjuxWLZ/FHEH6Moq1NizMOBWyTcv8O4OZIMg==",
                    "dev": true
                },
                "import-fresh": {
                    "version": "3.2.2",
                    "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.2.2.tgz",
                    "integrity": "sha512-cTPNrlvJT6twpYy+YmKUKrTSjWFs3bjYjAhCwm+z4EOCubZxAuO+hHpRN64TqjEaYSHs7tJAE0w1CKMGmsG/lw==",
                    "dev": true,
                    "requires": {
                        "parent-module": "^1.0.0",
                        "resolve-from": "^4.0.0"
                    }
                },
                "path-key": {
                    "version": "3.1.1",
                    "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
                    "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
                    "dev": true
                },
                "resolve-from": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
                    "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
                    "dev": true
                },
                "shebang-command": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
                    "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
                    "dev": true,
                    "requires": {
                        "shebang-regex": "^3.0.0"
                    }
                },
                "shebang-regex": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
                    "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                },
                "type-fest": {
                    "version": "0.8.1",
                    "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
                    "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
                    "dev": true
                },
                "which": {
                    "version": "2.0.2",
                    "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
                    "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
                    "dev": true,
                    "requires": {
                        "isexe": "^2.0.0"
                    }
                }
            }
        },
        "eslint-config-prettier": {
            "version": "6.15.0",
            "resolved": "https://registry.npmjs.org/eslint-config-prettier/-/eslint-config-prettier-6.15.0.tgz",
            "integrity": "sha512-a1+kOYLR8wMGustcgAjdydMsQ2A/2ipRPwRKUmfYaSxc9ZPcrku080Ctl6zrZzZNs/U82MjSv+qKREkoq3bJaw==",
            "dev": true,
            "requires": {
                "get-stdin": "^6.0.0"
            }
        },
        "eslint-import-resolver-node": {
            "version": "0.3.4",
            "resolved": "https://registry.npmjs.org/eslint-import-resolver-node/-/eslint-import-resolver-node-0.3.4.tgz",
            "integrity": "sha512-ogtf+5AB/O+nM6DIeBUNr2fuT7ot9Qg/1harBfBtaP13ekEWFQEEMP94BCB7zaNW3gyY+8SHYF00rnqYwXKWOA==",
            "dev": true,
            "requires": {
                "debug": "^2.6.9",
                "resolve": "^1.13.1"
            },
            "dependencies": {
                "debug": {
                    "version": "2.6.9",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                    "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                    "dev": true,
                    "requires": {
                        "ms": "2.0.0"
                    }
                },
                "ms": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                    "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
                    "dev": true
                }
            }
        },
        "eslint-module-utils": {
            "version": "2.6.0",
            "resolved": "https://registry.npmjs.org/eslint-module-utils/-/eslint-module-utils-2.6.0.tgz",
            "integrity": "sha512-6j9xxegbqe8/kZY8cYpcp0xhbK0EgJlg3g9mib3/miLaExuuwc3n5UEfSnU6hWMbT0FAYVvDbL9RrRgpUeQIvA==",
            "dev": true,
            "requires": {
                "debug": "^2.6.9",
                "pkg-dir": "^2.0.0"
            },
            "dependencies": {
                "debug": {
                    "version": "2.6.9",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                    "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                    "dev": true,
                    "requires": {
                        "ms": "2.0.0"
                    }
                },
                "find-up": {
                    "version": "2.1.0",
                    "resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",
                    "integrity": "sha1-RdG35QbHF93UgndaK3eSCjwMV6c=",
                    "dev": true,
                    "requires": {
                        "locate-path": "^2.0.0"
                    }
                },
                "locate-path": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz",
                    "integrity": "sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=",
                    "dev": true,
                    "requires": {
                        "p-locate": "^2.0.0",
                        "path-exists": "^3.0.0"
                    }
                },
                "ms": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                    "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
                    "dev": true
                },
                "p-limit": {
                    "version": "1.3.0",
                    "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-1.3.0.tgz",
                    "integrity": "sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==",
                    "dev": true,
                    "requires": {
                        "p-try": "^1.0.0"
                    }
                },
                "p-locate": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz",
                    "integrity": "sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=",
                    "dev": true,
                    "requires": {
                        "p-limit": "^1.1.0"
                    }
                },
                "p-try": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz",
                    "integrity": "sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M=",
                    "dev": true
                },
                "pkg-dir": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-2.0.0.tgz",
                    "integrity": "sha1-9tXREJ4Z1j7fQo4L1X4Sd3YVM0s=",
                    "dev": true,
                    "requires": {
                        "find-up": "^2.1.0"
                    }
                }
            }
        },
        "eslint-plugin-import": {
            "version": "2.22.1",
            "resolved": "https://registry.npmjs.org/eslint-plugin-import/-/eslint-plugin-import-2.22.1.tgz",
            "integrity": "sha512-8K7JjINHOpH64ozkAhpT3sd+FswIZTfMZTjdx052pnWrgRCVfp8op9tbjpAk3DdUeI/Ba4C8OjdC0r90erHEOw==",
            "dev": true,
            "requires": {
                "array-includes": "^3.1.1",
                "array.prototype.flat": "^1.2.3",
                "contains-path": "^0.1.0",
                "debug": "^2.6.9",
                "doctrine": "1.5.0",
                "eslint-import-resolver-node": "^0.3.4",
                "eslint-module-utils": "^2.6.0",
                "has": "^1.0.3",
                "minimatch": "^3.0.4",
                "object.values": "^1.1.1",
                "read-pkg-up": "^2.0.0",
                "resolve": "^1.17.0",
                "tsconfig-paths": "^3.9.0"
            },
            "dependencies": {
                "debug": {
                    "version": "2.6.9",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                    "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                    "dev": true,
                    "requires": {
                        "ms": "2.0.0"
                    }
                },
                "doctrine": {
                    "version": "1.5.0",
                    "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-1.5.0.tgz",
                    "integrity": "sha1-N53Ocw9hZvds76TmcHoVmwLFpvo=",
                    "dev": true,
                    "requires": {
                        "esutils": "^2.0.2",
                        "isarray": "^1.0.0"
                    }
                },
                "ms": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                    "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
                    "dev": true
                }
            }
        },
        "eslint-plugin-jsdoc": {
            "version": "30.7.6",
            "resolved": "https://registry.npmjs.org/eslint-plugin-jsdoc/-/eslint-plugin-jsdoc-30.7.6.tgz",
            "integrity": "sha512-w18IOiS/9ahKgRfQOuHbce+EQYx3fwIkZhUZDEK+augNlhJkzgTSZkrBkzaflSbFNZ9/Tk4xzUABEaTbsBSzew==",
            "dev": true,
            "requires": {
                "comment-parser": "^0.7.6",
                "debug": "^4.2.0",
                "jsdoctypeparser": "^9.0.0",
                "lodash": "^4.17.20",
                "regextras": "^0.7.1",
                "semver": "^7.3.2",
                "spdx-expression-parse": "^3.0.1"
            }
        },
        "eslint-plugin-prefer-arrow": {
            "version": "1.2.2",
            "resolved": "https://registry.npmjs.org/eslint-plugin-prefer-arrow/-/eslint-plugin-prefer-arrow-1.2.2.tgz",
            "integrity": "sha512-C8YMhL+r8RMeMdYAw/rQtE6xNdMulj+zGWud/qIGnlmomiPRaLDGLMeskZ3alN6uMBojmooRimtdrXebLN4svQ==",
            "dev": true
        },
        "eslint-scope": {
            "version": "4.0.3",
            "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-4.0.3.tgz",
            "integrity": "sha512-p7VutNr1O/QrxysMo3E45FjYDTeXBy0iTltPFNSqKAIfjDSXC+4dj+qfyuD8bfAXrW/y6lW3O76VaYNPKfpKrg==",
            "dev": true,
            "requires": {
                "esrecurse": "^4.1.0",
                "estraverse": "^4.1.1"
            }
        },
        "eslint-utils": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/eslint-utils/-/eslint-utils-2.1.0.tgz",
            "integrity": "sha512-w94dQYoauyvlDc43XnGB8lU3Zt713vNChgt4EWwhXAP2XkBvndfxF0AgIqKOOasjPIPzj9JqgwkwbCYD0/V3Zg==",
            "dev": true,
            "requires": {
                "eslint-visitor-keys": "^1.1.0"
            },
            "dependencies": {
                "eslint-visitor-keys": {
                    "version": "1.3.0",
                    "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-1.3.0.tgz",
                    "integrity": "sha512-6J72N8UNa462wa/KFODt/PJ3IU60SDpC3QXC1Hjc1BXXpfL2C9R5+AU7jhe0F6GREqVMh4Juu+NY7xn+6dipUQ==",
                    "dev": true
                }
            }
        },
        "eslint-visitor-keys": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-2.0.0.tgz",
            "integrity": "sha512-QudtT6av5WXels9WjIM7qz1XD1cWGvX4gGXvp/zBn9nXG02D0utdU3Em2m/QjTnrsk6bBjmCygl3rmj118msQQ==",
            "dev": true
        },
        "espree": {
            "version": "7.3.0",
            "resolved": "https://registry.npmjs.org/espree/-/espree-7.3.0.tgz",
            "integrity": "sha512-dksIWsvKCixn1yrEXO8UosNSxaDoSYpq9reEjZSbHLpT5hpaCAKTLBwq0RHtLrIr+c0ByiYzWT8KTMRzoRCNlw==",
            "dev": true,
            "requires": {
                "acorn": "^7.4.0",
                "acorn-jsx": "^5.2.0",
                "eslint-visitor-keys": "^1.3.0"
            },
            "dependencies": {
                "acorn": {
                    "version": "7.4.1",
                    "resolved": "https://registry.npmjs.org/acorn/-/acorn-7.4.1.tgz",
                    "integrity": "sha512-nQyp0o1/mNdbTO1PO6kHkwSrmgZ0MT/jCCpNiwbUjGoRN4dlBhqJtoQuCnEOKzgTVwg0ZWiCoQy6SxMebQVh8A==",
                    "dev": true
                },
                "eslint-visitor-keys": {
                    "version": "1.3.0",
                    "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-1.3.0.tgz",
                    "integrity": "sha512-6J72N8UNa462wa/KFODt/PJ3IU60SDpC3QXC1Hjc1BXXpfL2C9R5+AU7jhe0F6GREqVMh4Juu+NY7xn+6dipUQ==",
                    "dev": true
                }
            }
        },
        "esprima": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
            "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
            "dev": true
        },
        "esquery": {
            "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.3.1.tgz",
            "integrity": "sha512-olpvt9QG0vniUBZspVRN6lwB7hOZoTRtT+jzR+tS4ffYx2mzbw+z0XCOk44aaLYKApNX5nMm+E+P6o25ip/DHQ==",
            "requires": {
                "estraverse": "^5.1.0"
            },
            "dependencies": {
                "estraverse": {
                    "version": "5.2.0",
                    "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.2.0.tgz",
                    "integrity": "sha512-BxbNGGNm0RyRYvUdHpIwv9IWzeM9XClbOxwoATuFdOE7ZE6wHL+HQ5T8hoPM+zHvmKzzsEqhgy0GrQ5X13afiQ=="
                }
            }
        },
        "esrecurse": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
            "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
            "dev": true,
            "requires": {
                "estraverse": "^5.2.0"
            },
            "dependencies": {
                "estraverse": {
                    "version": "5.2.0",
                    "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.2.0.tgz",
                    "integrity": "sha512-BxbNGGNm0RyRYvUdHpIwv9IWzeM9XClbOxwoATuFdOE7ZE6wHL+HQ5T8hoPM+zHvmKzzsEqhgy0GrQ5X13afiQ==",
                    "dev": true
                }
            }
        },
        "estraverse": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
            "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==",
            "dev": true
        },
        "esutils": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
            "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
            "dev": true
        },
        "etag": {
            "version": "1.8.1",
            "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
            "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc=",
            "dev": true
        },
        "eventemitter3": {
            "version": "4.0.7",
            "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-4.0.7.tgz",
            "integrity": "sha512-8guHBZCwKnFhYdHr2ysuRWErTwhoN2X8XELRlrRwpmfeY2jjuUN4taQMsULKUVo1K4DvZl+0pgfyoysHxvmvEw==",
            "dev": true
        },
        "events": {
            "version": "3.2.0",
            "resolved": "https://registry.npmjs.org/events/-/events-3.2.0.tgz",
            "integrity": "sha512-/46HWwbfCX2xTawVfkKLGxMifJYQBWMwY1mjywRtb4c9x8l5NP3KoJtnIOiL1hfdRkIuYhETxQlo62IF8tcnlg==",
            "dev": true
        },
        "eventsource": {
            "version": "1.0.7",
            "resolved": "https://registry.npmjs.org/eventsource/-/eventsource-1.0.7.tgz",
            "integrity": "sha512-4Ln17+vVT0k8aWq+t/bF5arcS3EpT9gYtW66EPacdj/mAFevznsnyoHLPy2BA8gbIQeIHoPsvwmfBftfcG//BQ==",
            "dev": true,
            "requires": {
                "original": "^1.0.0"
            }
        },
        "evp_bytestokey": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/evp_bytestokey/-/evp_bytestokey-1.0.3.tgz",
            "integrity": "sha512-/f2Go4TognH/KvCISP7OUsHn85hT9nUkxxA9BEWxFn+Oj9o8ZNLm/40hdlgSLyuOimsrTKLUMEorQexp/aPQeA==",
            "dev": true,
            "requires": {
                "md5.js": "^1.3.4",
                "safe-buffer": "^5.1.1"
            }
        },
        "exec-sh": {
            "version": "0.3.4",
            "resolved": "https://registry.npmjs.org/exec-sh/-/exec-sh-0.3.4.tgz",
            "integrity": "sha512-sEFIkc61v75sWeOe72qyrqg2Qg0OuLESziUDk/O/z2qgS15y2gWVFrI6f2Qn/qw/0/NCfCEsmNA4zOjkwEZT1A==",
            "dev": true
        },
        "execa": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/execa/-/execa-1.0.0.tgz",
            "integrity": "sha512-adbxcyWV46qiHyvSp50TKt05tB4tK3HcmF7/nxfAdhnox83seTDbwnaqKO4sXRy7roHAIFqJP/Rw/AuEbX61LA==",
            "dev": true,
            "requires": {
                "cross-spawn": "^6.0.0",
                "get-stream": "^4.0.0",
                "is-stream": "^1.1.0",
                "npm-run-path": "^2.0.0",
                "p-finally": "^1.0.0",
                "signal-exit": "^3.0.0",
                "strip-eof": "^1.0.0"
            }
        },
        "exit": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/exit/-/exit-0.1.2.tgz",
            "integrity": "sha1-BjJjj42HfMghB9MKD/8aF8uhzQw=",
            "dev": true
        },
        "expand-brackets": {
            "version": "2.1.4",
            "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
            "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
            "dev": true,
            "requires": {
                "debug": "^2.3.3",
                "define-property": "^0.2.5",
                "extend-shallow": "^2.0.1",
                "posix-character-classes": "^0.1.0",
                "regex-not": "^1.0.0",
                "snapdragon": "^0.8.1",
                "to-regex": "^3.0.1"
            },
            "dependencies": {
                "debug": {
                    "version": "2.6.9",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                    "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                    "dev": true,
                    "requires": {
                        "ms": "2.0.0"
                    }
                },
                "define-property": {
                    "version": "0.2.5",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
                    "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
                    "dev": true,
                    "requires": {
                        "is-descriptor": "^0.1.0"
                    }
                },
                "extend-shallow": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                    "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                    "dev": true,
                    "requires": {
                        "is-extendable": "^0.1.0"
                    }
                },
                "ms": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                    "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
                    "dev": true
                }
            }
        },
        "expect": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/expect/-/expect-26.6.2.tgz",
            "integrity": "sha512-9/hlOBkQl2l/PLHJx6JjoDF6xPKcJEsUlWKb23rKE7KzeDqUZKXKNMW27KIue5JMdBV9HgmoJPcc8HtO85t9IA==",
            "dev": true,
            "requires": {
                "@jest/types": "^26.6.2",
                "ansi-styles": "^4.0.0",
                "jest-get-type": "^26.3.0",
                "jest-matcher-utils": "^26.6.2",
                "jest-message-util": "^26.6.2",
                "jest-regex-util": "^26.0.0"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                }
            }
        },
        "express": {
            "version": "4.17.1",
            "resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
            "integrity": "sha512-mHJ9O79RqluphRrcw2X/GTh3k9tVv8YcoyY4Kkh4WDMUYKRZUq0h1o0w2rrrxBqM7VoeUVqgb27xlEMXTnYt4g==",
            "dev": true,
            "requires": {
                "accepts": "~1.3.7",
                "array-flatten": "1.1.1",
                "body-parser": "1.19.0",
                "content-disposition": "0.5.3",
                "content-type": "~1.0.4",
                "cookie": "0.4.0",
                "cookie-signature": "1.0.6",
                "debug": "2.6.9",
                "depd": "~1.1.2",
                "encodeurl": "~1.0.2",
                "escape-html": "~1.0.3",
                "etag": "~1.8.1",
                "finalhandler": "~1.1.2",
                "fresh": "0.5.2",
                "merge-descriptors": "1.0.1",
                "methods": "~1.1.2",
                "on-finished": "~2.3.0",
                "parseurl": "~1.3.3",
                "path-to-regexp": "0.1.7",
                "proxy-addr": "~2.0.5",
                "qs": "6.7.0",
                "range-parser": "~1.2.1",
                "safe-buffer": "5.1.2",
                "send": "0.17.1",
                "serve-static": "1.14.1",
                "setprototypeof": "1.1.1",
                "statuses": "~1.5.0",
                "type-is": "~1.6.18",
                "utils-merge": "1.0.1",
                "vary": "~1.1.2"
            },
            "dependencies": {
                "array-flatten": {
                    "version": "1.1.1",
                    "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
                    "integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI=",
                    "dev": true
                },
                "debug": {
                    "version": "2.6.9",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                    "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                    "dev": true,
                    "requires": {
                        "ms": "2.0.0"
                    }
                },
                "ms": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                    "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
                    "dev": true
                }
            }
        },
        "express-urlrewrite": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/express-urlrewrite/-/express-urlrewrite-1.3.0.tgz",
            "integrity": "sha512-xy3WZqA9EIfb51FkL1R0EqW91Z8lMi9ohp/WrNxKukvQulybqvh7+OsGiw9JOD51NrGsSuWi2hqOv7GW+DGz1w==",
            "dev": true,
            "requires": {
                "debug": "*",
                "path-to-regexp": "^1.0.3"
            },
            "dependencies": {
                "isarray": {
                    "version": "0.0.1",
                    "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz",
                    "integrity": "sha1-ihis/Kmo9Bd+Cav8YDiTmwXR7t8=",
                    "dev": true
                },
                "path-to-regexp": {
                    "version": "1.8.0",
                    "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-1.8.0.tgz",
                    "integrity": "sha512-n43JRhlUKUAlibEJhPeir1ncUID16QnEjNpwzNdO3Lm4ywrBpBZ5oLD0I6br9evr1Y9JTqwRtAh7JLoOzAQdVA==",
                    "dev": true,
                    "requires": {
                        "isarray": "0.0.1"
                    }
                }
            }
        },
        "ext": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/ext/-/ext-1.4.0.tgz",
            "integrity": "sha512-Key5NIsUxdqKg3vIsdw9dSuXpPCQ297y6wBjL30edxwPgt2E44WcWBZey/ZvUc6sERLTxKdyCu4gZFmUbk1Q7A==",
            "dev": true,
            "requires": {
                "type": "^2.0.0"
            },
            "dependencies": {
                "type": {
                    "version": "2.1.0",
                    "resolved": "https://registry.npmjs.org/type/-/type-2.1.0.tgz",
                    "integrity": "sha512-G9absDWvhAWCV2gmF1zKud3OyC61nZDwWvBL2DApaVFogI07CprggiQAOOjvp2NRjYWFzPyu7vwtDrQFq8jeSA==",
                    "dev": true
                }
            }
        },
        "extend": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
            "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
            "dev": true
        },
        "extend-shallow": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
            "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
            "dev": true,
            "requires": {
                "assign-symbols": "^1.0.0",
                "is-extendable": "^1.0.1"
            },
            "dependencies": {
                "is-extendable": {
                    "version": "1.0.1",
                    "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
                    "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
                    "dev": true,
                    "requires": {
                        "is-plain-object": "^2.0.4"
                    }
                }
            }
        },
        "external-editor": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/external-editor/-/external-editor-3.1.0.tgz",
            "integrity": "sha512-hMQ4CX1p1izmuLYyZqLMO/qGNw10wSv9QDCPfzXfyFrOaCSSoRfqE1Kf1s5an66J5JZC62NewG+mK49jOCtQew==",
            "requires": {
                "chardet": "^0.7.0",
                "iconv-lite": "^0.4.24",
                "tmp": "^0.0.33"
            }
        },
        "extglob": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
            "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
            "dev": true,
            "requires": {
                "array-unique": "^0.3.2",
                "define-property": "^1.0.0",
                "expand-brackets": "^2.1.4",
                "extend-shallow": "^2.0.1",
                "fragment-cache": "^0.2.1",
                "regex-not": "^1.0.0",
                "snapdragon": "^0.8.1",
                "to-regex": "^3.0.1"
            },
            "dependencies": {
                "define-property": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
                    "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
                    "dev": true,
                    "requires": {
                        "is-descriptor": "^1.0.0"
                    }
                },
                "extend-shallow": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                    "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                    "dev": true,
                    "requires": {
                        "is-extendable": "^0.1.0"
                    }
                },
                "is-accessor-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
                    "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
                    "dev": true,
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-data-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
                    "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
                    "dev": true,
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-descriptor": {
                    "version": "1.0.2",
                    "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
                    "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
                    "dev": true,
                    "requires": {
                        "is-accessor-descriptor": "^1.0.0",
                        "is-data-descriptor": "^1.0.0",
                        "kind-of": "^6.0.2"
                    }
                }
            }
        },
        "extsprintf": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
            "integrity": "sha1-lpGEQOMEGnpBT4xS48V06zw+HgU=",
            "dev": true
        },
        "fast-deep-equal": {
            "version": "3.1.3",
            "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
            "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q=="
        },
        "fast-glob": {
            "version": "3.2.4",
            "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.2.4.tgz",
            "integrity": "sha512-kr/Oo6PX51265qeuCYsyGypiO5uJFgBS0jksyG7FUeCyQzNwYnzrNIMR1NXfkZXsMYXYLRAHgISHBz8gQcxKHQ==",
            "dev": true,
            "requires": {
                "@nodelib/fs.stat": "^2.0.2",
                "@nodelib/fs.walk": "^1.2.3",
                "glob-parent": "^5.1.0",
                "merge2": "^1.3.0",
                "micromatch": "^4.0.2",
                "picomatch": "^2.2.1"
            }
        },
        "fast-json-stable-stringify": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
            "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw=="
        },
        "fast-levenshtein": {
            "version": "2.0.6",
            "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
            "integrity": "sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc=",
            "dev": true
        },
        "fastparse": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/fastparse/-/fastparse-1.1.2.tgz",
            "integrity": "sha512-483XLLxTVIwWK3QTrMGRqUfUpoOs/0hbQrl2oz4J0pAcm3A3bu84wxTFqGqkJzewCLdME38xJLJAxBABfQT8sQ==",
            "dev": true
        },
        "fastq": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.9.0.tgz",
            "integrity": "sha512-i7FVWL8HhVY+CTkwFxkN2mk3h+787ixS5S63eb78diVRc1MCssarHq3W5cj0av7YDSwmaV928RNag+U1etRQ7w==",
            "dev": true,
            "requires": {
                "reusify": "^1.0.4"
            }
        },
        "faye-websocket": {
            "version": "0.10.0",
            "resolved": "https://registry.npmjs.org/faye-websocket/-/faye-websocket-0.10.0.tgz",
            "integrity": "sha1-TkkvjQTftviQA1B/btvy1QHnxvQ=",
            "dev": true,
            "requires": {
                "websocket-driver": ">=0.5.1"
            }
        },
        "fb-watchman": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/fb-watchman/-/fb-watchman-2.0.1.tgz",
            "integrity": "sha512-DkPJKQeY6kKwmuMretBhr7G6Vodr7bFwDYTXIkfG1gjvNpaxBTQV3PbXg6bR1c1UP4jPOX0jHUbbHANL9vRjVg==",
            "dev": true,
            "requires": {
                "bser": "2.1.1"
            }
        },
        "figgy-pudding": {
            "version": "3.5.2",
            "resolved": "https://registry.npmjs.org/figgy-pudding/-/figgy-pudding-3.5.2.tgz",
            "integrity": "sha512-0btnI/H8f2pavGMN8w40mlSKOfTK2SVJmBfBeVIj3kNw0swwgzyRq0d5TJVOwodFmtvpPeWPN/MCcfuWF0Ezbw==",
            "dev": true
        },
        "figures": {
            "version": "3.2.0",
            "resolved": "https://registry.npmjs.org/figures/-/figures-3.2.0.tgz",
            "integrity": "sha512-yaduQFRKLXYOGgEn6AZau90j3ggSOyiqXU0F9JZfeXYhNa+Jk4X+s45A2zg5jns87GAFa34BBm2kXw4XpNcbdg==",
            "requires": {
                "escape-string-regexp": "^1.0.5"
            }
        },
        "file-entry-cache": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-5.0.1.tgz",
            "integrity": "sha512-bCg29ictuBaKUwwArK4ouCaqDgLZcysCFLmM/Yn/FDoqndh/9vNuQfXRDvTuXKLxfD/JtZQGKFT8MGcJBK644g==",
            "dev": true,
            "requires": {
                "flat-cache": "^2.0.1"
            }
        },
        "file-loader": {
            "version": "6.1.1",
            "resolved": "https://registry.npmjs.org/file-loader/-/file-loader-6.1.1.tgz",
            "integrity": "sha512-Klt8C4BjWSXYQAfhpYYkG4qHNTna4toMHEbWrI5IuVoxbU6uiDKeKAP99R8mmbJi3lvewn/jQBOgU4+NS3tDQw==",
            "dev": true,
            "requires": {
                "loader-utils": "^2.0.0",
                "schema-utils": "^3.0.0"
            },
            "dependencies": {
                "schema-utils": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.0.0.tgz",
                    "integrity": "sha512-6D82/xSzO094ajanoOSbe4YvXWMfn2A//8Y1+MUqFAJul5Bs+yn36xbK9OtNDcRVSBJ9jjeoXftM6CfztsjOAA==",
                    "dev": true,
                    "requires": {
                        "@types/json-schema": "^7.0.6",
                        "ajv": "^6.12.5",
                        "ajv-keywords": "^3.5.2"
                    }
                }
            }
        },
        "fill-range": {
            "version": "7.0.1",
            "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
            "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
            "dev": true,
            "requires": {
                "to-regex-range": "^5.0.1"
            }
        },
        "finalhandler": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
            "integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
            "dev": true,
            "requires": {
                "debug": "2.6.9",
                "encodeurl": "~1.0.2",
                "escape-html": "~1.0.3",
                "on-finished": "~2.3.0",
                "parseurl": "~1.3.3",
                "statuses": "~1.5.0",
                "unpipe": "~1.0.0"
            },
            "dependencies": {
                "debug": {
                    "version": "2.6.9",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                    "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                    "dev": true,
                    "requires": {
                        "ms": "2.0.0"
                    }
                },
                "ms": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                    "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
                    "dev": true
                }
            }
        },
        "find-cache-dir": {
            "version": "3.3.1",
            "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-3.3.1.tgz",
            "integrity": "sha512-t2GDMt3oGC/v+BMwzmllWDuJF/xcDtE5j/fCGbqDD7OLuJkj0cfh1YSA5VKPvwMeLFLNDBkwOKZ2X85jGLVftQ==",
            "dev": true,
            "requires": {
                "commondir": "^1.0.1",
                "make-dir": "^3.0.2",
                "pkg-dir": "^4.1.0"
            },
            "dependencies": {
                "find-up": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
                    "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
                    "dev": true,
                    "requires": {
                        "locate-path": "^5.0.0",
                        "path-exists": "^4.0.0"
                    }
                },
                "locate-path": {
                    "version": "5.0.0",
                    "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
                    "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
                    "dev": true,
                    "requires": {
                        "p-locate": "^4.1.0"
                    }
                },
                "make-dir": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
                    "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
                    "dev": true,
                    "requires": {
                        "semver": "^6.0.0"
                    }
                },
                "p-locate": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
                    "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
                    "dev": true,
                    "requires": {
                        "p-limit": "^2.2.0"
                    }
                },
                "path-exists": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
                    "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
                    "dev": true
                },
                "pkg-dir": {
                    "version": "4.2.0",
                    "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
                    "integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
                    "dev": true,
                    "requires": {
                        "find-up": "^4.0.0"
                    }
                },
                "semver": {
                    "version": "6.3.0",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                    "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
                    "dev": true
                }
            }
        },
        "find-up": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
            "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
            "dev": true,
            "requires": {
                "locate-path": "^3.0.0"
            }
        },
        "find-versions": {
            "version": "3.2.0",
            "resolved": "https://registry.npmjs.org/find-versions/-/find-versions-3.2.0.tgz",
            "integrity": "sha512-P8WRou2S+oe222TOCHitLy8zj+SIsVJh52VP4lvXkaFVnOFFdoWv1H1Jjvel1aI6NCFOAaeAVm8qrI0odiLcww==",
            "dev": true,
            "requires": {
                "semver-regex": "^2.0.0"
            }
        },
        "flat-cache": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-2.0.1.tgz",
            "integrity": "sha512-LoQe6yDuUMDzQAEH8sgmh4Md6oZnc/7PjtwjNFSzveXqSHt6ka9fPBuso7IGf9Rz4uqnSnWiFH2B/zj24a5ReA==",
            "dev": true,
            "requires": {
                "flatted": "^2.0.0",
                "rimraf": "2.6.3",
                "write": "1.0.3"
            },
            "dependencies": {
                "rimraf": {
                    "version": "2.6.3",
                    "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.6.3.tgz",
                    "integrity": "sha512-mwqeW5XsA2qAejG46gYdENaxXjx9onRNCfn7L0duuP4hCuTIi/QO7PDK07KJfp1d+izWPrzEJDcSqBa0OZQriA==",
                    "dev": true,
                    "requires": {
                        "glob": "^7.1.3"
                    }
                }
            }
        },
        "flatted": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/flatted/-/flatted-2.0.2.tgz",
            "integrity": "sha512-r5wGx7YeOwNWNlCA0wQ86zKyDLMQr+/RB8xy74M4hTphfmjlijTSSXGuH8rnvKZnfT9i+75zmd8jcKdMR4O6jA==",
            "dev": true
        },
        "flush-write-stream": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/flush-write-stream/-/flush-write-stream-1.1.1.tgz",
            "integrity": "sha512-3Z4XhFZ3992uIq0XOqb9AreonueSYphE6oYbpt5+3u06JWklbsPkNv3ZKkP9Bz/r+1MWCaMoSQ28P85+1Yc77w==",
            "dev": true,
            "requires": {
                "inherits": "^2.0.3",
                "readable-stream": "^2.3.6"
            }
        },
        "follow-redirects": {
            "version": "1.13.0",
            "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.13.0.tgz",
            "integrity": "sha512-aq6gF1BEKje4a9i9+5jimNFIpq4Q1WiwBToeRK5NvZBd/TRsmW8BsJfOEGkr76TbOyPVD3OVDN910EcUNtRYEA==",
            "dev": true
        },
        "for-in": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz",
            "integrity": "sha1-gQaNKVqBQuwKxybG4iAMMPttXoA=",
            "dev": true
        },
        "forever-agent": {
            "version": "0.6.1",
            "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
            "integrity": "sha1-+8cfDEGt6zf5bFd60e1C2P2sypE=",
            "dev": true
        },
        "form-data": {
            "version": "2.3.3",
            "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.3.tgz",
            "integrity": "sha512-1lLKB2Mu3aGP1Q/2eCOx0fNbRMe7XdwktwOruhfqqd0rIJWwN4Dh+E3hrPSlDCXnSR7UtZ1N38rVXm+6+MEhJQ==",
            "dev": true,
            "requires": {
                "asynckit": "^0.4.0",
                "combined-stream": "^1.0.6",
                "mime-types": "^2.1.12"
            }
        },
        "forwarded": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.1.2.tgz",
            "integrity": "sha1-mMI9qxF1ZXuMBXPozszZGw/xjIQ=",
            "dev": true
        },
        "fragment-cache": {
            "version": "0.2.1",
            "resolved": "https://registry.npmjs.org/fragment-cache/-/fragment-cache-0.2.1.tgz",
            "integrity": "sha1-QpD60n8T6Jvn8zeZxrxaCr//DRk=",
            "dev": true,
            "requires": {
                "map-cache": "^0.2.2"
            }
        },
        "fresh": {
            "version": "0.5.2",
            "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
            "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac=",
            "dev": true
        },
        "from2": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/from2/-/from2-2.3.0.tgz",
            "integrity": "sha1-i/tVAr3kpNNs/e6gB/zKIdfjgq8=",
            "dev": true,
            "requires": {
                "inherits": "^2.0.1",
                "readable-stream": "^2.0.0"
            }
        },
        "fs-extra": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-4.0.2.tgz",
            "integrity": "sha1-+RcExT0bRh+JNFKwwwfZmXZHq2s=",
            "dev": true,
            "requires": {
                "graceful-fs": "^4.1.2",
                "jsonfile": "^4.0.0",
                "universalify": "^0.1.0"
            }
        },
        "fs-minipass": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-2.1.0.tgz",
            "integrity": "sha512-V/JgOLFCS+R6Vcq0slCuaeWEdNC3ouDlJMNIsacH2VtALiu9mV4LPrHc5cDl8k5aw6J8jwgWWpiTo5RYhmIzvg==",
            "dev": true,
            "requires": {
                "minipass": "^3.0.0"
            }
        },
        "fs-write-stream-atomic": {
            "version": "1.0.10",
            "resolved": "https://registry.npmjs.org/fs-write-stream-atomic/-/fs-write-stream-atomic-1.0.10.tgz",
            "integrity": "sha1-tH31NJPvkR33VzHnCp3tAYnbQMk=",
            "dev": true,
            "requires": {
                "graceful-fs": "^4.1.2",
                "iferr": "^0.1.5",
                "imurmurhash": "^0.1.4",
                "readable-stream": "1 || 2"
            }
        },
        "fs.realpath": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
            "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8=",
            "dev": true
        },
        "fsevents": {
            "version": "2.1.3",
            "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.1.3.tgz",
            "integrity": "sha512-Auw9a4AxqWpa9GUfj370BMPzzyncfBABW8Mab7BGWBYDj4Isgq+cDKtx0i6u9jcX9pQDnswsaaOTgTmA5pEjuQ==",
            "dev": true,
            "optional": true
        },
        "function-bind": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
            "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==",
            "dev": true
        },
        "functional-red-black-tree": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/functional-red-black-tree/-/functional-red-black-tree-1.0.1.tgz",
            "integrity": "sha1-GwqzvVU7Kg1jmdKcDj6gslIHgyc=",
            "dev": true
        },
        "fuzzy": {
            "version": "0.1.3",
            "resolved": "https://registry.npmjs.org/fuzzy/-/fuzzy-0.1.3.tgz",
            "integrity": "sha1-THbsL/CsGjap3M+aAN+GIweNTtg="
        },
        "genfun": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/genfun/-/genfun-5.0.0.tgz",
            "integrity": "sha512-KGDOARWVga7+rnB3z9Sd2Letx515owfk0hSxHGuqjANb1M+x2bGZGqHLiozPsYMdM2OubeMni/Hpwmjq6qIUhA==",
            "dev": true
        },
        "gensync": {
            "version": "1.0.0-beta.2",
            "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
            "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
            "dev": true
        },
        "get-caller-file": {
            "version": "2.0.5",
            "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
            "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
            "dev": true
        },
        "get-intrinsic": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.0.1.tgz",
            "integrity": "sha512-ZnWP+AmS1VUaLgTRy47+zKtjTxz+0xMpx3I52i+aalBK1QP19ggLF3Db89KJX7kjfOfP2eoa01qc++GwPgufPg==",
            "dev": true,
            "requires": {
                "function-bind": "^1.1.1",
                "has": "^1.0.3",
                "has-symbols": "^1.0.1"
            }
        },
        "get-own-enumerable-property-symbols": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/get-own-enumerable-property-symbols/-/get-own-enumerable-property-symbols-3.0.2.tgz",
            "integrity": "sha512-I0UBV/XOz1XkIJHEUDMZAbzCThU/H8DxmSfmdGcKPnVhu2VfFqr34jr9777IyaTYvxjedWhqVIilEDsCdP5G6g==",
            "dev": true
        },
        "get-package-type": {
            "version": "0.1.0",
            "resolved": "https://registry.npmjs.org/get-package-type/-/get-package-type-0.1.0.tgz",
            "integrity": "sha512-pjzuKtY64GYfWizNAJ0fr9VqttZkNiK2iS430LtIHzjBEr6bX8Am2zm4sW4Ro5wjWW5cAlRL1qAMTcXbjNAO2Q==",
            "dev": true
        },
        "get-stdin": {
            "version": "6.0.0",
            "resolved": "https://registry.npmjs.org/get-stdin/-/get-stdin-6.0.0.tgz",
            "integrity": "sha512-jp4tHawyV7+fkkSKyvjuLZswblUtz+SQKzSWnBbii16BuZksJlU1wuBYXY75r+duh/llF1ur6oNwi+2ZzjKZ7g==",
            "dev": true
        },
        "get-stream": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-4.1.0.tgz",
            "integrity": "sha512-GMat4EJ5161kIy2HevLlr4luNjBgvmj413KaQA7jt4V8B4RDsfpHk7WQ9GVqfYyyx8OS/L66Kox+rJRNklLK7w==",
            "dev": true,
            "requires": {
                "pump": "^3.0.0"
            }
        },
        "get-value": {
            "version": "2.0.6",
            "resolved": "https://registry.npmjs.org/get-value/-/get-value-2.0.6.tgz",
            "integrity": "sha1-3BXKHGcjh8p2vTesCjlbogQqLCg=",
            "dev": true
        },
        "getpass": {
            "version": "0.1.7",
            "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
            "integrity": "sha1-Xv+OPmhNVprkyysSgmBOi6YhSfo=",
            "dev": true,
            "requires": {
                "assert-plus": "^1.0.0"
            }
        },
        "git-commit-msg-linter": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/git-commit-msg-linter/-/git-commit-msg-linter-3.0.0.tgz",
            "integrity": "sha512-0qaE7RMhXFHsub4PSpTS3+5QYGb5ck/XW6AQChCWjkMOQHfKjCCZ7VMxT8w0hqE2y+z6UbpcK5s/icgg5S+d1A==",
            "dev": true,
            "requires": {
                "chalk": "^2.4.2",
                "did-you-mean": "^0.0.1"
            }
        },
        "glob": {
            "version": "7.1.6",
            "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.6.tgz",
            "integrity": "sha512-LwaxwyZ72Lk7vZINtNNrywX0ZuLyStrdDtabefZKAY5ZGJhVtgdznluResxNmPitE0SAO+O26sWTHeKSI2wMBA==",
            "dev": true,
            "requires": {
                "fs.realpath": "^1.0.0",
                "inflight": "^1.0.4",
                "inherits": "2",
                "minimatch": "^3.0.4",
                "once": "^1.3.0",
                "path-is-absolute": "^1.0.0"
            }
        },
        "glob-parent": {
            "version": "5.1.1",
            "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.1.tgz",
            "integrity": "sha512-FnI+VGOpnlGHWZxthPGR+QhR78fuiK0sNLkHQv+bL9fQi57lNNdquIbna/WrfROrolq8GK5Ek6BiMwqL/voRYQ==",
            "dev": true,
            "requires": {
                "is-glob": "^4.0.1"
            }
        },
        "global-dirs": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/global-dirs/-/global-dirs-2.0.1.tgz",
            "integrity": "sha512-5HqUqdhkEovj2Of/ms3IeS/EekcO54ytHRLV4PEY2rhRwrHXLQjeVEES0Lhka0xwNDtGYn58wyC4s5+MHsOO6A==",
            "dev": true,
            "requires": {
                "ini": "^1.3.5"
            }
        },
        "globals": {
            "version": "11.12.0",
            "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
            "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==",
            "dev": true
        },
        "globby": {
            "version": "11.0.1",
            "resolved": "https://registry.npmjs.org/globby/-/globby-11.0.1.tgz",
            "integrity": "sha512-iH9RmgwCmUJHi2z5o2l3eTtGBtXek1OYlHrbcxOYugyHLmAsZrPj43OtHThd62Buh/Vv6VyCBD2bdyWcGNQqoQ==",
            "dev": true,
            "requires": {
                "array-union": "^2.1.0",
                "dir-glob": "^3.0.1",
                "fast-glob": "^3.1.1",
                "ignore": "^5.1.4",
                "merge2": "^1.3.0",
                "slash": "^3.0.0"
            }
        },
        "got": {
            "version": "9.6.0",
            "resolved": "https://registry.npmjs.org/got/-/got-9.6.0.tgz",
            "integrity": "sha512-R7eWptXuGYxwijs0eV+v3o6+XH1IqVK8dJOEecQfTmkncw9AV4dcw/Dhxi8MdlqPthxxpZyizMzyg8RTmEsG+Q==",
            "dev": true,
            "requires": {
                "@sindresorhus/is": "^0.14.0",
                "@szmarczak/http-timer": "^1.1.2",
                "cacheable-request": "^6.0.0",
                "decompress-response": "^3.3.0",
                "duplexer3": "^0.1.4",
                "get-stream": "^4.1.0",
                "lowercase-keys": "^1.0.1",
                "mimic-response": "^1.0.1",
                "p-cancelable": "^1.0.0",
                "to-readable-stream": "^1.0.0",
                "url-parse-lax": "^3.0.0"
            }
        },
        "graceful-fs": {
            "version": "4.2.4",
            "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.4.tgz",
            "integrity": "sha512-WjKPNJF79dtJAVniUlGGWHYGz2jWxT6VhN/4m1NdkbZ2nOsEF+cI1Edgql5zCRhs/VsQYRvrXctxktVXZUkixw==",
            "dev": true
        },
        "growly": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/growly/-/growly-1.3.0.tgz",
            "integrity": "sha1-8QdIy+dq+WS3yWyTxrzCivEgwIE=",
            "dev": true,
            "optional": true
        },
        "handle-thing": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/handle-thing/-/handle-thing-2.0.1.tgz",
            "integrity": "sha512-9Qn4yBxelxoh2Ow62nP+Ka/kMnOXRi8BXnRaUwezLNhqelnN49xKz4F/dPP8OYLxLxq6JDtZb2i9XznUQbNPTg==",
            "dev": true
        },
        "har-schema": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
            "integrity": "sha1-qUwiJOvKwEeCoNkDVSHyRzW37JI=",
            "dev": true
        },
        "har-validator": {
            "version": "5.1.5",
            "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.5.tgz",
            "integrity": "sha512-nmT2T0lljbxdQZfspsno9hgrG3Uir6Ks5afism62poxqBM6sDnMEuPmzTq8XN0OEwqKLLdh1jQI3qyE66Nzb3w==",
            "dev": true,
            "requires": {
                "ajv": "^6.12.3",
                "har-schema": "^2.0.0"
            }
        },
        "has": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
            "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
            "dev": true,
            "requires": {
                "function-bind": "^1.1.1"
            }
        },
        "has-ansi": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/has-ansi/-/has-ansi-2.0.0.tgz",
            "integrity": "sha1-NPUEnOHs3ysGSa8+8k5F7TVBbZE=",
            "dev": true,
            "requires": {
                "ansi-regex": "^2.0.0"
            },
            "dependencies": {
                "ansi-regex": {
                    "version": "2.1.1",
                    "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
                    "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
                    "dev": true
                }
            }
        },
        "has-flag": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
            "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0="
        },
        "has-symbols": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.1.tgz",
            "integrity": "sha512-PLcsoqu++dmEIZB+6totNFKq/7Do+Z0u4oT0zKOJNl3lYK6vGwwu2hjHs+68OEZbTjiUE9bgOABXbP/GvrS0Kg==",
            "dev": true
        },
        "has-value": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/has-value/-/has-value-1.0.0.tgz",
            "integrity": "sha1-GLKB2lhbHFxR3vJMkw7SmgvmsXc=",
            "dev": true,
            "requires": {
                "get-value": "^2.0.6",
                "has-values": "^1.0.0",
                "isobject": "^3.0.0"
            }
        },
        "has-values": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/has-values/-/has-values-1.0.0.tgz",
            "integrity": "sha1-lbC2P+whRmGab+V/51Yo1aOe/k8=",
            "dev": true,
            "requires": {
                "is-number": "^3.0.0",
                "kind-of": "^4.0.0"
            },
            "dependencies": {
                "is-number": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
                    "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
                    "dev": true,
                    "requires": {
                        "kind-of": "^3.0.2"
                    },
                    "dependencies": {
                        "kind-of": {
                            "version": "3.2.2",
                            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                            "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                            "dev": true,
                            "requires": {
                                "is-buffer": "^1.1.5"
                            }
                        }
                    }
                },
                "kind-of": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-4.0.0.tgz",
                    "integrity": "sha1-IIE989cSkosgc3hpGkUGb65y3Vc=",
                    "dev": true,
                    "requires": {
                        "is-buffer": "^1.1.5"
                    }
                }
            }
        },
        "has-yarn": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/has-yarn/-/has-yarn-2.1.0.tgz",
            "integrity": "sha512-UqBRqi4ju7T+TqGNdqAO0PaSVGsDGJUBQvk9eUWNGRY1CFGDzYhLWoM7JQEemnlvVcv/YEmc2wNW8BC24EnUsw==",
            "dev": true
        },
        "hash-base": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/hash-base/-/hash-base-3.1.0.tgz",
            "integrity": "sha512-1nmYp/rhMDiE7AYkDw+lLwlAzz0AntGIe51F3RfFfEqyQ3feY2eI/NcwC6umIQVOASPMsWJLJScWKSSvzL9IVA==",
            "dev": true,
            "requires": {
                "inherits": "^2.0.4",
                "readable-stream": "^3.6.0",
                "safe-buffer": "^5.2.0"
            },
            "dependencies": {
                "readable-stream": {
                    "version": "3.6.0",
                    "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
                    "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
                    "dev": true,
                    "requires": {
                        "inherits": "^2.0.3",
                        "string_decoder": "^1.1.1",
                        "util-deprecate": "^1.0.1"
                    }
                },
                "safe-buffer": {
                    "version": "5.2.1",
                    "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
                    "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
                    "dev": true
                }
            }
        },
        "hash.js": {
            "version": "1.1.7",
            "resolved": "https://registry.npmjs.org/hash.js/-/hash.js-1.1.7.tgz",
            "integrity": "sha512-taOaskGt4z4SOANNseOviYDvjEJinIkRgmp7LbKP2YTTmVxWBl87s/uzK9r+44BclBSp2X7K1hqeNfz9JbBeXA==",
            "dev": true,
            "requires": {
                "inherits": "^2.0.3",
                "minimalistic-assert": "^1.0.1"
            }
        },
        "hex-color-regex": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/hex-color-regex/-/hex-color-regex-1.1.0.tgz",
            "integrity": "sha512-l9sfDFsuqtOqKDsQdqrMRk0U85RZc0RtOR9yPI7mRVOa4FsR/BVnZ0shmQRM96Ji99kYZP/7hn1cedc1+ApsTQ==",
            "dev": true
        },
        "hmac-drbg": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/hmac-drbg/-/hmac-drbg-1.0.1.tgz",
            "integrity": "sha1-0nRXAQJabHdabFRXk+1QL8DGSaE=",
            "dev": true,
            "requires": {
                "hash.js": "^1.0.3",
                "minimalistic-assert": "^1.0.0",
                "minimalistic-crypto-utils": "^1.0.1"
            }
        },
        "hosted-git-info": {
            "version": "3.0.7",
            "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-3.0.7.tgz",
            "integrity": "sha512-fWqc0IcuXs+BmE9orLDyVykAG9GJtGLGuZAAqgcckPgv5xad4AcXGIv8galtQvlwutxSlaMcdw7BUtq2EIvqCQ==",
            "dev": true,
            "requires": {
                "lru-cache": "^6.0.0"
            }
        },
        "hpack.js": {
            "version": "2.1.6",
            "resolved": "https://registry.npmjs.org/hpack.js/-/hpack.js-2.1.6.tgz",
            "integrity": "sha1-h3dMCUnlE/QuhFdbPEVoH63ioLI=",
            "dev": true,
            "requires": {
                "inherits": "^2.0.1",
                "obuf": "^1.0.0",
                "readable-stream": "^2.0.1",
                "wbuf": "^1.1.0"
            }
        },
        "hsl-regex": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/hsl-regex/-/hsl-regex-1.0.0.tgz",
            "integrity": "sha1-1JMwx4ntgZ4nakwNJy3/owsY/m4=",
            "dev": true
        },
        "hsla-regex": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/hsla-regex/-/hsla-regex-1.0.0.tgz",
            "integrity": "sha1-wc56MWjIxmFAM6S194d/OyJfnDg=",
            "dev": true
        },
        "html-comment-regex": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/html-comment-regex/-/html-comment-regex-1.1.2.tgz",
            "integrity": "sha512-P+M65QY2JQ5Y0G9KKdlDpo0zK+/OHptU5AaBwUfAIDJZk1MYf32Frm84EcOytfJE0t5JvkAnKlmjsXDnWzCJmQ==",
            "dev": true
        },
        "html-encoding-sniffer": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/html-encoding-sniffer/-/html-encoding-sniffer-2.0.1.tgz",
            "integrity": "sha512-D5JbOMBIR/TVZkubHT+OyT2705QvogUW4IBn6nHd756OwieSF9aDYFj4dv6HHEVGYbHaLETa3WggZYWWMyy3ZQ==",
            "dev": true,
            "requires": {
                "whatwg-encoding": "^1.0.5"
            }
        },
        "html-entities": {
            "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/html-entities/-/html-entities-1.3.1.tgz",
            "integrity": "sha512-rhE/4Z3hIhzHAUKbW8jVcCyuT5oJCXXqhN/6mXXVCpzTmvJnoH2HL/bt3EZ6p55jbFJBeAe1ZNpL5BugLujxNA==",
            "dev": true
        },
        "html-escaper": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/html-escaper/-/html-escaper-2.0.2.tgz",
            "integrity": "sha512-H2iMtd0I4Mt5eYiapRdIDjp+XzelXQ0tFE4JS7YFwFevXXMmOp9myNrUvCg0D6ws8iqkRPBfKHgbwig1SmlLfg==",
            "dev": true
        },
        "http-cache-semantics": {
            "version": "3.8.1",
            "resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-3.8.1.tgz",
            "integrity": "sha512-5ai2iksyV8ZXmnZhHH4rWPoxxistEexSi5936zIQ1bnNTW5VnA85B6P/VpXiRM017IgRvb2kKo1a//y+0wSp3w==",
            "dev": true
        },
        "http-deceiver": {
            "version": "1.2.7",
            "resolved": "https://registry.npmjs.org/http-deceiver/-/http-deceiver-1.2.7.tgz",
            "integrity": "sha1-+nFolEq5pRnTN8sL7HKE3D5yPYc=",
            "dev": true
        },
        "http-errors": {
            "version": "1.7.2",
            "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.2.tgz",
            "integrity": "sha512-uUQBt3H/cSIVfch6i1EuPNy/YsRSOUBXTVfZ+yR7Zjez3qjBz6i9+i4zjNaoqcoFVI4lQJ5plg63TvGfRSDCRg==",
            "dev": true,
            "requires": {
                "depd": "~1.1.2",
                "inherits": "2.0.3",
                "setprototypeof": "1.1.1",
                "statuses": ">= 1.5.0 < 2",
                "toidentifier": "1.0.0"
            },
            "dependencies": {
                "inherits": {
                    "version": "2.0.3",
                    "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
                    "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4=",
                    "dev": true
                }
            }
        },
        "http-proxy": {
            "version": "1.18.1",
            "resolved": "https://registry.npmjs.org/http-proxy/-/http-proxy-1.18.1.tgz",
            "integrity": "sha512-7mz/721AbnJwIVbnaSv1Cz3Am0ZLT/UBwkC92VlxhXv/k/BBQfM2fXElQNC27BVGr0uwUpplYPQM9LnaBMR5NQ==",
            "dev": true,
            "requires": {
                "eventemitter3": "^4.0.0",
                "follow-redirects": "^1.0.0",
                "requires-port": "^1.0.0"
            }
        },
        "http-proxy-agent": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/http-proxy-agent/-/http-proxy-agent-2.1.0.tgz",
            "integrity": "sha512-qwHbBLV7WviBl0rQsOzH6o5lwyOIvwp/BdFnvVxXORldu5TmjFfjzBcWUWS5kWAZhmv+JtiDhSuQCp4sBfbIgg==",
            "dev": true,
            "requires": {
                "agent-base": "4",
                "debug": "3.1.0"
            },
            "dependencies": {
                "debug": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-3.1.0.tgz",
                    "integrity": "sha512-OX8XqP7/1a9cqkxYw2yXss15f26NKWBpDXQd0/uK/KPqdQhxbPa994hnzjcE2VqQpDslf55723cKPUOGSmMY3g==",
                    "dev": true,
                    "requires": {
                        "ms": "2.0.0"
                    }
                },
                "ms": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                    "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
                    "dev": true
                }
            }
        },
        "http-proxy-middleware": {
            "version": "0.19.1",
            "resolved": "https://registry.npmjs.org/http-proxy-middleware/-/http-proxy-middleware-0.19.1.tgz",
            "integrity": "sha512-yHYTgWMQO8VvwNS22eLLloAkvungsKdKTLO8AJlftYIKNfJr3GK3zK0ZCfzDDGUBttdGc8xFy1mCitvNKQtC3Q==",
            "dev": true,
            "requires": {
                "http-proxy": "^1.17.0",
                "is-glob": "^4.0.0",
                "lodash": "^4.17.11",
                "micromatch": "^3.1.10"
            },
            "dependencies": {
                "braces": {
                    "version": "2.3.2",
                    "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
                    "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
                    "dev": true,
                    "requires": {
                        "arr-flatten": "^1.1.0",
                        "array-unique": "^0.3.2",
                        "extend-shallow": "^2.0.1",
                        "fill-range": "^4.0.0",
                        "isobject": "^3.0.1",
                        "repeat-element": "^1.1.2",
                        "snapdragon": "^0.8.1",
                        "snapdragon-node": "^2.0.1",
                        "split-string": "^3.0.2",
                        "to-regex": "^3.0.1"
                    },
                    "dependencies": {
                        "extend-shallow": {
                            "version": "2.0.1",
                            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                            "dev": true,
                            "requires": {
                                "is-extendable": "^0.1.0"
                            }
                        }
                    }
                },
                "fill-range": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
                    "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
                    "dev": true,
                    "requires": {
                        "extend-shallow": "^2.0.1",
                        "is-number": "^3.0.0",
                        "repeat-string": "^1.6.1",
                        "to-regex-range": "^2.1.0"
                    },
                    "dependencies": {
                        "extend-shallow": {
                            "version": "2.0.1",
                            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                            "dev": true,
                            "requires": {
                                "is-extendable": "^0.1.0"
                            }
                        }
                    }
                },
                "is-number": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
                    "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
                    "dev": true,
                    "requires": {
                        "kind-of": "^3.0.2"
                    },
                    "dependencies": {
                        "kind-of": {
                            "version": "3.2.2",
                            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                            "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                            "dev": true,
                            "requires": {
                                "is-buffer": "^1.1.5"
                            }
                        }
                    }
                },
                "micromatch": {
                    "version": "3.1.10",
                    "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
                    "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
                    "dev": true,
                    "requires": {
                        "arr-diff": "^4.0.0",
                        "array-unique": "^0.3.2",
                        "braces": "^2.3.1",
                        "define-property": "^2.0.2",
                        "extend-shallow": "^3.0.2",
                        "extglob": "^2.0.4",
                        "fragment-cache": "^0.2.1",
                        "kind-of": "^6.0.2",
                        "nanomatch": "^1.2.9",
                        "object.pick": "^1.3.0",
                        "regex-not": "^1.0.0",
                        "snapdragon": "^0.8.1",
                        "to-regex": "^3.0.2"
                    }
                },
                "to-regex-range": {
                    "version": "2.1.1",
                    "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
                    "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
                    "dev": true,
                    "requires": {
                        "is-number": "^3.0.0",
                        "repeat-string": "^1.6.1"
                    }
                }
            }
        },
        "http-signature": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
            "integrity": "sha1-muzZJRFHcvPZW2WmCruPfBj7rOE=",
            "dev": true,
            "requires": {
                "assert-plus": "^1.0.0",
                "jsprim": "^1.2.2",
                "sshpk": "^1.7.0"
            }
        },
        "https-browserify": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/https-browserify/-/https-browserify-1.0.0.tgz",
            "integrity": "sha1-7AbBDgo0wPL68Zn3/X/Hj//QPHM=",
            "dev": true
        },
        "https-proxy-agent": {
            "version": "2.2.4",
            "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-2.2.4.tgz",
            "integrity": "sha512-OmvfoQ53WLjtA9HeYP9RNrWMJzzAz1JGaSFr1nijg0PVR1JaD/xbJq1mdEIIlxGpXp9eSe/O2LgU9DJmTPd0Eg==",
            "dev": true,
            "requires": {
                "agent-base": "^4.3.0",
                "debug": "^3.1.0"
            },
            "dependencies": {
                "debug": {
                    "version": "3.2.7",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
                    "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
                    "dev": true,
                    "requires": {
                        "ms": "^2.1.1"
                    }
                }
            }
        },
        "human-signals": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/human-signals/-/human-signals-1.1.1.tgz",
            "integrity": "sha512-SEQu7vl8KjNL2eoGBLF3+wAjpsNfA9XMlXAYj/3EdaNfAlxKthD1xjEQfGOUhllCGGJVNY34bRr6lPINhNjyZw==",
            "dev": true
        },
        "humanize-ms": {
            "version": "1.2.1",
            "resolved": "https://registry.npmjs.org/humanize-ms/-/humanize-ms-1.2.1.tgz",
            "integrity": "sha1-xG4xWaKT9riW2ikxbYtv6Lt5u+0=",
            "dev": true,
            "requires": {
                "ms": "^2.0.0"
            }
        },
        "husky": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/husky/-/husky-4.3.0.tgz",
            "integrity": "sha512-tTMeLCLqSBqnflBZnlVDhpaIMucSGaYyX6855jM4AguGeWCeSzNdb1mfyWduTZ3pe3SJVvVWGL0jO1iKZVPfTA==",
            "dev": true,
            "requires": {
                "chalk": "^4.0.0",
                "ci-info": "^2.0.0",
                "compare-versions": "^3.6.0",
                "cosmiconfig": "^7.0.0",
                "find-versions": "^3.2.0",
                "opencollective-postinstall": "^2.0.2",
                "pkg-dir": "^4.2.0",
                "please-upgrade-node": "^3.2.0",
                "slash": "^3.0.0",
                "which-pm-runs": "^1.0.0"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "cosmiconfig": {
                    "version": "7.0.0",
                    "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-7.0.0.tgz",
                    "integrity": "sha512-pondGvTuVYDk++upghXJabWzL6Kxu6f26ljFw64Swq9v6sQPUL3EUlVDV56diOjpCayKihL6hVe8exIACU4XcA==",
                    "dev": true,
                    "requires": {
                        "@types/parse-json": "^4.0.0",
                        "import-fresh": "^3.2.1",
                        "parse-json": "^5.0.0",
                        "path-type": "^4.0.0",
                        "yaml": "^1.10.0"
                    }
                },
                "find-up": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
                    "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
                    "dev": true,
                    "requires": {
                        "locate-path": "^5.0.0",
                        "path-exists": "^4.0.0"
                    }
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "import-fresh": {
                    "version": "3.2.2",
                    "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.2.2.tgz",
                    "integrity": "sha512-cTPNrlvJT6twpYy+YmKUKrTSjWFs3bjYjAhCwm+z4EOCubZxAuO+hHpRN64TqjEaYSHs7tJAE0w1CKMGmsG/lw==",
                    "dev": true,
                    "requires": {
                        "parent-module": "^1.0.0",
                        "resolve-from": "^4.0.0"
                    }
                },
                "locate-path": {
                    "version": "5.0.0",
                    "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
                    "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
                    "dev": true,
                    "requires": {
                        "p-locate": "^4.1.0"
                    }
                },
                "p-locate": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
                    "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
                    "dev": true,
                    "requires": {
                        "p-limit": "^2.2.0"
                    }
                },
                "parse-json": {
                    "version": "5.1.0",
                    "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-5.1.0.tgz",
                    "integrity": "sha512-+mi/lmVVNKFNVyLXV31ERiy2CY5E1/F6QtJFEzoChPRwwngMNXRDQ9GJ5WdE2Z2P4AujsOi0/+2qHID68KwfIQ==",
                    "dev": true,
                    "requires": {
                        "@babel/code-frame": "^7.0.0",
                        "error-ex": "^1.3.1",
                        "json-parse-even-better-errors": "^2.3.0",
                        "lines-and-columns": "^1.1.6"
                    }
                },
                "path-exists": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
                    "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
                    "dev": true
                },
                "pkg-dir": {
                    "version": "4.2.0",
                    "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
                    "integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
                    "dev": true,
                    "requires": {
                        "find-up": "^4.0.0"
                    }
                },
                "resolve-from": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
                    "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "iconv-lite": {
            "version": "0.4.24",
            "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
            "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
            "requires": {
                "safer-buffer": ">= 2.1.2 < 3"
            }
        },
        "icss-utils": {
            "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/icss-utils/-/icss-utils-4.1.1.tgz",
            "integrity": "sha512-4aFq7wvWyMHKgxsH8QQtGpvbASCf+eM3wPRLI6R+MgAnTCZ6STYsRvttLvRWK0Nfif5piF394St3HeJDaljGPA==",
            "dev": true,
            "requires": {
                "postcss": "^7.0.14"
            }
        },
        "ieee754": {
            "version": "1.2.1",
            "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",
            "integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==",
            "dev": true
        },
        "iferr": {
            "version": "0.1.5",
            "resolved": "https://registry.npmjs.org/iferr/-/iferr-0.1.5.tgz",
            "integrity": "sha1-xg7taebY/bazEEofy8ocGS3FtQE=",
            "dev": true
        },
        "ignore": {
            "version": "5.1.8",
            "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.1.8.tgz",
            "integrity": "sha512-BMpfD7PpiETpBl/A6S498BaIJ6Y/ABT93ETbby2fP00v4EbvPBXWEoaR1UBPKs3iR53pJY7EtZk5KACI57i1Uw==",
            "dev": true
        },
        "ignore-walk": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/ignore-walk/-/ignore-walk-3.0.3.tgz",
            "integrity": "sha512-m7o6xuOaT1aqheYHKf8W6J5pYH85ZI9w077erOzLje3JsB1gkafkAhHHY19dqjulgIZHFm32Cp5uNZgcQqdJKw==",
            "dev": true,
            "requires": {
                "minimatch": "^3.0.4"
            }
        },
        "image-size": {
            "version": "0.5.5",
            "resolved": "https://registry.npmjs.org/image-size/-/image-size-0.5.5.tgz",
            "integrity": "sha1-Cd/Uq50g4p6xw+gLiZA3jfnjy5w=",
            "dev": true,
            "optional": true
        },
        "immediate": {
            "version": "3.0.6",
            "resolved": "https://registry.npmjs.org/immediate/-/immediate-3.0.6.tgz",
            "integrity": "sha1-nbHb0Pr43m++D13V5Wu2BigN5ps=",
            "dev": true
        },
        "import-fresh": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-2.0.0.tgz",
            "integrity": "sha1-2BNVwVYS04bGH53dOSLUMEgipUY=",
            "dev": true,
            "requires": {
                "caller-path": "^2.0.0",
                "resolve-from": "^3.0.0"
            }
        },
        "import-lazy": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/import-lazy/-/import-lazy-2.1.0.tgz",
            "integrity": "sha1-BWmOPUXIjo1+nZLLBYTnfwlvPkM=",
            "dev": true
        },
        "import-local": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/import-local/-/import-local-2.0.0.tgz",
            "integrity": "sha512-b6s04m3O+s3CGSbqDIyP4R6aAwAeYlVq9+WUWep6iHa8ETRf9yei1U48C5MmfJmV9AiLYYBKPMq/W+/WRpQmCQ==",
            "dev": true,
            "requires": {
                "pkg-dir": "^3.0.0",
                "resolve-cwd": "^2.0.0"
            }
        },
        "imurmurhash": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
            "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o=",
            "dev": true
        },
        "indent-string": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-4.0.0.tgz",
            "integrity": "sha512-EdDDZu4A2OyIK7Lr/2zG+w5jmbuk1DVBnEwREQvBzspBJkCEbRa8GxU1lghYcaGJCnRWibjDXlq779X1/y5xwg==",
            "dev": true
        },
        "indexes-of": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/indexes-of/-/indexes-of-1.0.1.tgz",
            "integrity": "sha1-8w9xbI4r00bHtn0985FVZqfAVgc=",
            "dev": true
        },
        "infer-owner": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/infer-owner/-/infer-owner-1.0.4.tgz",
            "integrity": "sha512-IClj+Xz94+d7irH5qRyfJonOdfTzuDaifE6ZPWfx0N0+/ATZCbuTPq2prFl526urkQd90WyUKIh1DfBQ2hMz9A==",
            "dev": true
        },
        "inflight": {
            "version": "1.0.6",
            "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
            "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
            "dev": true,
            "requires": {
                "once": "^1.3.0",
                "wrappy": "1"
            }
        },
        "inherits": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
            "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
            "dev": true
        },
        "ini": {
            "version": "1.3.5",
            "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.5.tgz",
            "integrity": "sha512-RZY5huIKCMRWDUqZlEi72f/lmXKMvuszcMBduliQ3nnWbx9X/ZBQO7DijMEYS9EhHBb2qacRUMtC7svLwe0lcw==",
            "dev": true
        },
        "inquirer": {
            "version": "7.3.3",
            "resolved": "https://registry.npmjs.org/inquirer/-/inquirer-7.3.3.tgz",
            "integrity": "sha512-JG3eIAj5V9CwcGvuOmoo6LB9kbAYT8HXffUl6memuszlwDC/qvFAJw49XJ5NROSFNPxp3iQg1GqkFhaY/CR0IA==",
            "dev": true,
            "requires": {
                "ansi-escapes": "^4.2.1",
                "chalk": "^4.1.0",
                "cli-cursor": "^3.1.0",
                "cli-width": "^3.0.0",
                "external-editor": "^3.0.3",
                "figures": "^3.0.0",
                "lodash": "^4.17.19",
                "mute-stream": "0.0.8",
                "run-async": "^2.4.0",
                "rxjs": "^6.6.0",
                "string-width": "^4.1.0",
                "strip-ansi": "^6.0.0",
                "through": "^2.3.6"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "inquirer-autocomplete-prompt": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/inquirer-autocomplete-prompt/-/inquirer-autocomplete-prompt-1.0.1.tgz",
            "integrity": "sha512-Y4V6ifAu9LNrNjcEtYq8YUKhrgmmufUn5fsDQqeWgHY8rEO6ZAQkNUiZtBm2kw2uUQlC9HdgrRCHDhTPPguH5A==",
            "requires": {
                "ansi-escapes": "^3.0.0",
                "chalk": "^2.0.0",
                "figures": "^2.0.0",
                "run-async": "^2.3.0"
            },
            "dependencies": {
                "ansi-escapes": {
                    "version": "3.2.0",
                    "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-3.2.0.tgz",
                    "integrity": "sha512-cBhpre4ma+U0T1oM5fXg7Dy1Jw7zzwv7lt/GoCpr+hDQJoYnKVPLL4dCvSEFMmQurOQvSrwT7SL/DAlhBI97RQ=="
                },
                "figures": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/figures/-/figures-2.0.0.tgz",
                    "integrity": "sha1-OrGi0qYsi/tDGgyUy3l6L84nyWI=",
                    "requires": {
                        "escape-string-regexp": "^1.0.5"
                    }
                }
            }
        },
        "inquirer-fuzzy-path": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/inquirer-fuzzy-path/-/inquirer-fuzzy-path-2.2.0.tgz",
            "integrity": "sha512-0SeXQhrJFe/8DEBMQPMpZ51zEAtc+7hzDYD39Am5cjRJenvF43uanmssuiuMrbeZPIbp5yaK5yfBI9YNRVeCcg==",
            "requires": {
                "ansi-styles": "^3.2.1",
                "fuzzy": "^0.1.3",
                "inquirer": "^5.2.0",
                "inquirer-autocomplete-prompt": "^0.12.2",
                "strip-ansi": "^4.0.0"
            },
            "dependencies": {
                "ansi-escapes": {
                    "version": "3.2.0",
                    "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-3.2.0.tgz",
                    "integrity": "sha512-cBhpre4ma+U0T1oM5fXg7Dy1Jw7zzwv7lt/GoCpr+hDQJoYnKVPLL4dCvSEFMmQurOQvSrwT7SL/DAlhBI97RQ=="
                },
                "ansi-regex": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
                    "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg="
                },
                "chardet": {
                    "version": "0.4.2",
                    "resolved": "https://registry.npmjs.org/chardet/-/chardet-0.4.2.tgz",
                    "integrity": "sha1-tUc7M9yXxCTl2Y3IfVXU2KKci/I="
                },
                "cli-cursor": {
                    "version": "2.1.0",
                    "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-2.1.0.tgz",
                    "integrity": "sha1-s12sN2R5+sw+lHR9QdDQ9SOP/LU=",
                    "requires": {
                        "restore-cursor": "^2.0.0"
                    }
                },
                "cli-width": {
                    "version": "2.2.1",
                    "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-2.2.1.tgz",
                    "integrity": "sha512-GRMWDxpOB6Dgk2E5Uo+3eEBvtOOlimMmpbFiKuLFnQzYDavtLFY3K5ona41jgN/WdRZtG7utuVSVTL4HbZHGkw=="
                },
                "external-editor": {
                    "version": "2.2.0",
                    "resolved": "https://registry.npmjs.org/external-editor/-/external-editor-2.2.0.tgz",
                    "integrity": "sha512-bSn6gvGxKt+b7+6TKEv1ZycHleA7aHhRHyAqJyp5pbUFuYYNIzpZnQDk7AsYckyWdEnTeAnay0aCy2aV6iTk9A==",
                    "requires": {
                        "chardet": "^0.4.0",
                        "iconv-lite": "^0.4.17",
                        "tmp": "^0.0.33"
                    }
                },
                "figures": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/figures/-/figures-2.0.0.tgz",
                    "integrity": "sha1-OrGi0qYsi/tDGgyUy3l6L84nyWI=",
                    "requires": {
                        "escape-string-regexp": "^1.0.5"
                    }
                },
                "inquirer": {
                    "version": "5.2.0",
                    "resolved": "https://registry.npmjs.org/inquirer/-/inquirer-5.2.0.tgz",
                    "integrity": "sha512-E9BmnJbAKLPGonz0HeWHtbKf+EeSP93paWO3ZYoUpq/aowXvYGjjCSuashhXPpzbArIjBbji39THkxTz9ZeEUQ==",
                    "requires": {
                        "ansi-escapes": "^3.0.0",
                        "chalk": "^2.0.0",
                        "cli-cursor": "^2.1.0",
                        "cli-width": "^2.0.0",
                        "external-editor": "^2.1.0",
                        "figures": "^2.0.0",
                        "lodash": "^4.3.0",
                        "mute-stream": "0.0.7",
                        "run-async": "^2.2.0",
                        "rxjs": "^5.5.2",
                        "string-width": "^2.1.0",
                        "strip-ansi": "^4.0.0",
                        "through": "^2.3.6"
                    }
                },
                "inquirer-autocomplete-prompt": {
                    "version": "0.12.2",
                    "resolved": "https://registry.npmjs.org/inquirer-autocomplete-prompt/-/inquirer-autocomplete-prompt-0.12.2.tgz",
                    "integrity": "sha512-XbgPlnFdAboyUYWIrOkV8vh426BVZWzvbIKRkNY/aCvKhoCSWOO6ZQagAEOGA5ff2iOboNEaT1Wa/cM9ekj8jw==",
                    "requires": {
                        "ansi-escapes": "^3.0.0",
                        "chalk": "^2.0.0",
                        "figures": "^2.0.0",
                        "inquirer": "3.2.0",
                        "run-async": "^2.3.0"
                    },
                    "dependencies": {
                        "inquirer": {
                            "version": "3.2.0",
                            "resolved": "https://registry.npmjs.org/inquirer/-/inquirer-3.2.0.tgz",
                            "integrity": "sha512-4CyUYMP7lOBkiUU1rR24WGrfRX6SucwbY2Mqb1PdApU24wnTIk4TsnkQwV72dDdIKZ2ycLP+fWCV+tA7wwgoew==",
                            "requires": {
                                "ansi-escapes": "^2.0.0",
                                "chalk": "^2.0.0",
                                "cli-cursor": "^2.1.0",
                                "cli-width": "^2.0.0",
                                "external-editor": "^2.0.4",
                                "figures": "^2.0.0",
                                "lodash": "^4.3.0",
                                "mute-stream": "0.0.7",
                                "run-async": "^2.2.0",
                                "rx-lite": "^4.0.8",
                                "rx-lite-aggregates": "^4.0.8",
                                "string-width": "^2.1.0",
                                "strip-ansi": "^4.0.0",
                                "through": "^2.3.6"
                            },
                            "dependencies": {
                                "ansi-escapes": {
                                    "version": "2.0.0",
                                    "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-2.0.0.tgz",
                                    "integrity": "sha1-W65SvkJIeN2Xg+iRDj/Cki6DyBs="
                                }
                            }
                        }
                    }
                },
                "is-fullwidth-code-point": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
                    "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8="
                },
                "mimic-fn": {
                    "version": "1.2.0",
                    "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz",
                    "integrity": "sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ=="
                },
                "mute-stream": {
                    "version": "0.0.7",
                    "resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-0.0.7.tgz",
                    "integrity": "sha1-MHXOk7whuPq0PhvE2n6BFe0ee6s="
                },
                "onetime": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/onetime/-/onetime-2.0.1.tgz",
                    "integrity": "sha1-BnQoIw/WdEOyeUsiu6UotoZ5YtQ=",
                    "requires": {
                        "mimic-fn": "^1.0.0"
                    }
                },
                "restore-cursor": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-2.0.0.tgz",
                    "integrity": "sha1-n37ih/gv0ybU/RYpI9YhKe7g368=",
                    "requires": {
                        "onetime": "^2.0.0",
                        "signal-exit": "^3.0.2"
                    }
                },
                "rxjs": {
                    "version": "5.5.12",
                    "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-5.5.12.tgz",
                    "integrity": "sha512-xx2itnL5sBbqeeiVgNPVuQQ1nC8Jp2WfNJhXWHmElW9YmrpS9UVnNzhP3EH3HFqexO5Tlp8GhYY+WEcqcVMvGw==",
                    "requires": {
                        "symbol-observable": "1.0.1"
                    }
                },
                "string-width": {
                    "version": "2.1.1",
                    "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
                    "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
                    "requires": {
                        "is-fullwidth-code-point": "^2.0.0",
                        "strip-ansi": "^4.0.0"
                    }
                },
                "strip-ansi": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
                    "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
                    "requires": {
                        "ansi-regex": "^3.0.0"
                    }
                },
                "symbol-observable": {
                    "version": "1.0.1",
                    "resolved": "https://registry.npmjs.org/symbol-observable/-/symbol-observable-1.0.1.tgz",
                    "integrity": "sha1-g0D8RwLDEi310iKI+IKD9RPT/dQ="
                }
            }
        },
        "internal-ip": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/internal-ip/-/internal-ip-4.3.0.tgz",
            "integrity": "sha512-S1zBo1D6zcsyuC6PMmY5+55YMILQ9av8lotMx447Bq6SAgo/sDK6y6uUKmuYhW7eacnIhFfsPmCNYdDzsnnDCg==",
            "dev": true,
            "requires": {
                "default-gateway": "^4.2.0",
                "ipaddr.js": "^1.9.0"
            }
        },
        "ip": {
            "version": "1.1.5",
            "resolved": "https://registry.npmjs.org/ip/-/ip-1.1.5.tgz",
            "integrity": "sha1-vd7XARQpCCjAoDnnLvJfWq7ENUo=",
            "dev": true
        },
        "ip-regex": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/ip-regex/-/ip-regex-2.1.0.tgz",
            "integrity": "sha1-+ni/XS5pE8kRzp+BnuUUa7bYROk=",
            "dev": true
        },
        "ipaddr.js": {
            "version": "1.9.1",
            "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
            "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
            "dev": true
        },
        "is-absolute-url": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/is-absolute-url/-/is-absolute-url-2.1.0.tgz",
            "integrity": "sha1-UFMN+4T8yap9vnhS6Do3uTufKqY=",
            "dev": true
        },
        "is-accessor-descriptor": {
            "version": "0.1.6",
            "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
            "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
            "dev": true,
            "requires": {
                "kind-of": "^3.0.2"
            },
            "dependencies": {
                "kind-of": {
                    "version": "3.2.2",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                    "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                    "dev": true,
                    "requires": {
                        "is-buffer": "^1.1.5"
                    }
                }
            }
        },
        "is-arguments": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/is-arguments/-/is-arguments-1.0.4.tgz",
            "integrity": "sha512-xPh0Rmt8NE65sNzvyUmWgI1tz3mKq74lGA0mL8LYZcoIzKOzDh6HmrYm3d18k60nHerC8A9Km8kYu87zfSFnLA==",
            "dev": true
        },
        "is-arrayish": {
            "version": "0.2.1",
            "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
            "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0=",
            "dev": true
        },
        "is-binary-path": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
            "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
            "dev": true,
            "requires": {
                "binary-extensions": "^2.0.0"
            }
        },
        "is-buffer": {
            "version": "1.1.6",
            "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",
            "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w==",
            "dev": true
        },
        "is-callable": {
            "version": "1.2.2",
            "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.2.tgz",
            "integrity": "sha512-dnMqspv5nU3LoewK2N/y7KLtxtakvTuaCsU9FU50/QDmdbHNy/4/JuRtMHqRU22o3q+W89YQndQEeCVwK+3qrA==",
            "dev": true
        },
        "is-ci": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-2.0.0.tgz",
            "integrity": "sha512-YfJT7rkpQB0updsdHLGWrvhBJfcfzNNawYDNIyQXJz0IViGf75O8EBPKSdvw2rF+LGCsX4FZ8tcr3b19LcZq4w==",
            "dev": true,
            "requires": {
                "ci-info": "^2.0.0"
            }
        },
        "is-color-stop": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/is-color-stop/-/is-color-stop-1.1.0.tgz",
            "integrity": "sha1-z/9HGu5N1cnhWFmPvhKWe1za00U=",
            "dev": true,
            "requires": {
                "css-color-names": "^0.0.4",
                "hex-color-regex": "^1.1.0",
                "hsl-regex": "^1.0.0",
                "hsla-regex": "^1.0.0",
                "rgb-regex": "^1.0.1",
                "rgba-regex": "^1.0.0"
            }
        },
        "is-core-module": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.1.0.tgz",
            "integrity": "sha512-YcV7BgVMRFRua2FqQzKtTDMz8iCuLEyGKjr70q8Zm1yy2qKcurbFEd79PAdHV77oL3NrAaOVQIbMmiHQCHB7ZA==",
            "dev": true,
            "requires": {
                "has": "^1.0.3"
            }
        },
        "is-data-descriptor": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
            "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
            "dev": true,
            "requires": {
                "kind-of": "^3.0.2"
            },
            "dependencies": {
                "kind-of": {
                    "version": "3.2.2",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                    "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                    "dev": true,
                    "requires": {
                        "is-buffer": "^1.1.5"
                    }
                }
            }
        },
        "is-date-object": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.2.tgz",
            "integrity": "sha512-USlDT524woQ08aoZFzh3/Z6ch9Y/EWXEHQ/AaRN0SkKq4t2Jw2R2339tSXmwuVoY7LLlBCbOIlx2myP/L5zk0g==",
            "dev": true
        },
        "is-descriptor": {
            "version": "0.1.6",
            "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
            "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
            "dev": true,
            "requires": {
                "is-accessor-descriptor": "^0.1.6",
                "is-data-descriptor": "^0.1.4",
                "kind-of": "^5.0.0"
            },
            "dependencies": {
                "kind-of": {
                    "version": "5.1.0",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
                    "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
                    "dev": true
                }
            }
        },
        "is-directory": {
            "version": "0.3.1",
            "resolved": "https://registry.npmjs.org/is-directory/-/is-directory-0.3.1.tgz",
            "integrity": "sha1-YTObbyR1/Hcv2cnYP1yFddwVSuE=",
            "dev": true
        },
        "is-docker": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/is-docker/-/is-docker-2.1.1.tgz",
            "integrity": "sha512-ZOoqiXfEwtGknTiuDEy8pN2CfE3TxMHprvNer1mXiqwkOT77Rw3YVrUQ52EqAOU3QAWDQ+bQdx7HJzrv7LS2Hw==",
            "dev": true
        },
        "is-extendable": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
            "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
            "dev": true
        },
        "is-extglob": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
            "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",
            "dev": true
        },
        "is-fullwidth-code-point": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
            "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg=="
        },
        "is-generator-fn": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/is-generator-fn/-/is-generator-fn-2.1.0.tgz",
            "integrity": "sha512-cTIB4yPYL/Grw0EaSzASzg6bBy9gqCofvWN8okThAYIxKJZC+udlRAmGbM0XLeniEJSs8uEgHPGuHSe1XsOLSQ==",
            "dev": true
        },
        "is-glob": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
            "integrity": "sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==",
            "dev": true,
            "requires": {
                "is-extglob": "^2.1.1"
            }
        },
        "is-installed-globally": {
            "version": "0.3.2",
            "resolved": "https://registry.npmjs.org/is-installed-globally/-/is-installed-globally-0.3.2.tgz",
            "integrity": "sha512-wZ8x1js7Ia0kecP/CHM/3ABkAmujX7WPvQk6uu3Fly/Mk44pySulQpnHG46OMjHGXApINnV4QhY3SWnECO2z5g==",
            "dev": true,
            "requires": {
                "global-dirs": "^2.0.1",
                "is-path-inside": "^3.0.1"
            },
            "dependencies": {
                "is-path-inside": {
                    "version": "3.0.2",
                    "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.2.tgz",
                    "integrity": "sha512-/2UGPSgmtqwo1ktx8NDHjuPwZWmHhO+gj0f93EkhLB5RgW9RZevWYYlIkS6zePc6U2WpOdQYIwHe9YC4DWEBVg==",
                    "dev": true
                }
            }
        },
        "is-interactive": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-interactive/-/is-interactive-1.0.0.tgz",
            "integrity": "sha512-2HvIEKRoqS62guEC+qBjpvRubdX910WCMuJTZ+I9yvqKU2/12eSL549HMwtabb4oupdj2sMP50k+XJfB/8JE6w=="
        },
        "is-negative-zero": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.0.tgz",
            "integrity": "sha1-lVOxIbD6wohp2p7UWeIMdUN4hGE=",
            "dev": true
        },
        "is-npm": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/is-npm/-/is-npm-5.0.0.tgz",
            "integrity": "sha512-WW/rQLOazUq+ST/bCAVBp/2oMERWLsR7OrKyt052dNDk4DHcDE0/7QSXITlmi+VBcV13DfIbysG3tZJm5RfdBA==",
            "dev": true
        },
        "is-number": {
            "version": "7.0.0",
            "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
            "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
            "dev": true
        },
        "is-obj": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/is-obj/-/is-obj-2.0.0.tgz",
            "integrity": "sha512-drqDG3cbczxxEJRoOXcOjtdp1J/lyp1mNn0xaznRs8+muBhgQcrnbspox5X5fOw0HnMnbfDzvnEMEtqDEJEo8w==",
            "dev": true
        },
        "is-path-cwd": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/is-path-cwd/-/is-path-cwd-2.2.0.tgz",
            "integrity": "sha512-w942bTcih8fdJPJmQHFzkS76NEP8Kzzvmw92cXsazb8intwLqPibPPdXf4ANdKV3rYMuuQYGIWtvz9JilB3NFQ==",
            "dev": true
        },
        "is-path-in-cwd": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/is-path-in-cwd/-/is-path-in-cwd-2.1.0.tgz",
            "integrity": "sha512-rNocXHgipO+rvnP6dk3zI20RpOtrAM/kzbB258Uw5BWr3TpXi861yzjo16Dn4hUox07iw5AyeMLHWsujkjzvRQ==",
            "dev": true,
            "requires": {
                "is-path-inside": "^2.1.0"
            }
        },
        "is-path-inside": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-2.1.0.tgz",
            "integrity": "sha512-wiyhTzfDWsvwAW53OBWF5zuvaOGlZ6PwYxAbPVDhpm+gM09xKQGjBq/8uYN12aDvMxnAnq3dxTyoSoRNmg5YFg==",
            "dev": true,
            "requires": {
                "path-is-inside": "^1.0.2"
            }
        },
        "is-plain-object": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
            "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
            "dev": true,
            "requires": {
                "isobject": "^3.0.1"
            }
        },
        "is-potential-custom-element-name": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-potential-custom-element-name/-/is-potential-custom-element-name-1.0.0.tgz",
            "integrity": "sha1-DFLlS8yjkbssSUsh6GJtczbG45c=",
            "dev": true
        },
        "is-promise": {
            "version": "2.2.2",
            "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-2.2.2.tgz",
            "integrity": "sha512-+lP4/6lKUBfQjZ2pdxThZvLUAafmZb8OAxFb8XXtiQmS35INgr85hdOGoEs124ez1FCnZJt6jau/T+alh58QFQ==",
            "dev": true
        },
        "is-regex": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.1.1.tgz",
            "integrity": "sha512-1+QkEcxiLlB7VEyFtyBg94e08OAsvq7FUBgApTq/w2ymCLyKJgDPsybBENVtA7XCQEgEXxKPonG+mvYRxh/LIg==",
            "dev": true,
            "requires": {
                "has-symbols": "^1.0.1"
            }
        },
        "is-regexp": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-regexp/-/is-regexp-1.0.0.tgz",
            "integrity": "sha1-/S2INUXEa6xaYz57mgnof6LLUGk=",
            "dev": true
        },
        "is-resolvable": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/is-resolvable/-/is-resolvable-1.1.0.tgz",
            "integrity": "sha512-qgDYXFSR5WvEfuS5dMj6oTMEbrrSaM0CrFk2Yiq/gXnBvD9pMa2jGXxyhGLfvhZpuMZe18CJpFxAt3CRs42NMg==",
            "dev": true
        },
        "is-stream": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
            "integrity": "sha1-EtSj3U5o4Lec6428hBc66A2RykQ=",
            "dev": true
        },
        "is-string": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/is-string/-/is-string-1.0.5.tgz",
            "integrity": "sha512-buY6VNRjhQMiF1qWDouloZlQbRhDPCebwxSjxMjxgemYT46YMd2NR0/H+fBhEfWX4A/w9TBJ+ol+okqJKFE6vQ==",
            "dev": true
        },
        "is-svg": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/is-svg/-/is-svg-3.0.0.tgz",
            "integrity": "sha512-gi4iHK53LR2ujhLVVj+37Ykh9GLqYHX6JOVXbLAucaG/Cqw9xwdFOjDM2qeifLs1sF1npXXFvDu0r5HNgCMrzQ==",
            "dev": true,
            "requires": {
                "html-comment-regex": "^1.1.0"
            }
        },
        "is-symbol": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.3.tgz",
            "integrity": "sha512-OwijhaRSgqvhm/0ZdAcXNZt9lYdKFpcRDT5ULUuYXPoT794UNOdU+gpT6Rzo7b4V2HUl/op6GqY894AZwv9faQ==",
            "dev": true,
            "requires": {
                "has-symbols": "^1.0.1"
            }
        },
        "is-typedarray": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
            "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo=",
            "dev": true
        },
        "is-windows": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz",
            "integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA==",
            "dev": true
        },
        "is-wsl": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-2.2.0.tgz",
            "integrity": "sha512-fKzAra0rGJUUBwGBgNkHZuToZcn+TtXHpeCgmkMJMMYx1sQDYaCSyjJBSCa2nH1DGm7s3n1oBnohoVTBaN7Lww==",
            "dev": true,
            "requires": {
                "is-docker": "^2.0.0"
            }
        },
        "is-yarn-global": {
            "version": "0.3.0",
            "resolved": "https://registry.npmjs.org/is-yarn-global/-/is-yarn-global-0.3.0.tgz",
            "integrity": "sha512-VjSeb/lHmkoyd8ryPVIKvOCn4D1koMqY+vqyjjUfc3xyKtP4dYOxM44sZrnqQSzSds3xyOrUTLTC9LVCVgLngw==",
            "dev": true
        },
        "isarray": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
            "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
            "dev": true
        },
        "isexe": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
            "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA=",
            "dev": true
        },
        "isobject": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
            "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
            "dev": true
        },
        "isstream": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
            "integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo=",
            "dev": true
        },
        "istanbul-lib-coverage": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-3.0.0.tgz",
            "integrity": "sha512-UiUIqxMgRDET6eR+o5HbfRYP1l0hqkWOs7vNxC/mggutCMUIhWMm8gAHb8tHlyfD3/l6rlgNA5cKdDzEAf6hEg==",
            "dev": true
        },
        "istanbul-lib-instrument": {
            "version": "4.0.3",
            "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-4.0.3.tgz",
            "integrity": "sha512-BXgQl9kf4WTCPCCpmFGoJkz/+uhvm7h7PFKUYxh7qarQd3ER33vHG//qaE8eN25l07YqZPpHXU9I09l/RD5aGQ==",
            "dev": true,
            "requires": {
                "@babel/core": "^7.7.5",
                "@istanbuljs/schema": "^0.1.2",
                "istanbul-lib-coverage": "^3.0.0",
                "semver": "^6.3.0"
            },
            "dependencies": {
                "semver": {
                    "version": "6.3.0",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                    "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
                    "dev": true
                }
            }
        },
        "istanbul-lib-report": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/istanbul-lib-report/-/istanbul-lib-report-3.0.0.tgz",
            "integrity": "sha512-wcdi+uAKzfiGT2abPpKZ0hSU1rGQjUQnLvtY5MpQ7QCTahD3VODhcu4wcfY1YtkGaDD5yuydOLINXsfbus9ROw==",
            "dev": true,
            "requires": {
                "istanbul-lib-coverage": "^3.0.0",
                "make-dir": "^3.0.0",
                "supports-color": "^7.1.0"
            },
            "dependencies": {
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "make-dir": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
                    "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
                    "dev": true,
                    "requires": {
                        "semver": "^6.0.0"
                    }
                },
                "semver": {
                    "version": "6.3.0",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                    "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "istanbul-lib-source-maps": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-4.0.0.tgz",
            "integrity": "sha512-c16LpFRkR8vQXyHZ5nLpY35JZtzj1PQY1iZmesUbf1FZHbIupcWfjgOXBY9YHkLEQ6puz1u4Dgj6qmU/DisrZg==",
            "dev": true,
            "requires": {
                "debug": "^4.1.1",
                "istanbul-lib-coverage": "^3.0.0",
                "source-map": "^0.6.1"
            },
            "dependencies": {
                "source-map": {
                    "version": "0.6.1",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                    "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                    "dev": true
                }
            }
        },
        "istanbul-reports": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/istanbul-reports/-/istanbul-reports-3.0.2.tgz",
            "integrity": "sha512-9tZvz7AiR3PEDNGiV9vIouQ/EAcqMXFmkcA1CDFTwOB98OZVDL0PH9glHotf5Ugp6GCOTypfzGWI/OqjWNCRUw==",
            "dev": true,
            "requires": {
                "html-escaper": "^2.0.0",
                "istanbul-lib-report": "^3.0.0"
            }
        },
        "jasmine": {
            "version": "2.8.0",
            "resolved": "https://registry.npmjs.org/jasmine/-/jasmine-2.8.0.tgz",
            "integrity": "sha1-awicChFXax8W3xG4AUbZHU6Lij4=",
            "dev": true,
            "requires": {
                "exit": "^0.1.2",
                "glob": "^7.0.6",
                "jasmine-core": "~2.8.0"
            },
            "dependencies": {
                "jasmine-core": {
                    "version": "2.8.0",
                    "resolved": "https://registry.npmjs.org/jasmine-core/-/jasmine-core-2.8.0.tgz",
                    "integrity": "sha1-vMl5rh+f0FcB5F5S5l06XWPxok4=",
                    "dev": true
                }
            }
        },
        "jasmine-core": {
            "version": "3.6.0",
            "resolved": "https://registry.npmjs.org/jasmine-core/-/jasmine-core-3.6.0.tgz",
            "integrity": "sha512-8uQYa7zJN8hq9z+g8z1bqCfdC8eoDAeVnM5sfqs7KHv9/ifoJ500m018fpFc7RDaO6SWCLCXwo/wPSNcdYTgcw==",
            "dev": true
        },
        "jasmine-spec-reporter": {
            "version": "5.0.2",
            "resolved": "https://registry.npmjs.org/jasmine-spec-reporter/-/jasmine-spec-reporter-5.0.2.tgz",
            "integrity": "sha512-6gP1LbVgJ+d7PKksQBc2H0oDGNRQI3gKUsWlswKaQ2fif9X5gzhQcgM5+kiJGCQVurOG09jqNhk7payggyp5+g==",
            "dev": true,
            "requires": {
                "colors": "1.4.0"
            }
        },
        "jasminewd2": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/jasminewd2/-/jasminewd2-2.2.0.tgz",
            "integrity": "sha1-43zwsX8ZnM4jvqcbIDk5Uka07E4=",
            "dev": true
        },
        "jest": {
            "version": "26.6.3",
            "resolved": "https://registry.npmjs.org/jest/-/jest-26.6.3.tgz",
            "integrity": "sha512-lGS5PXGAzR4RF7V5+XObhqz2KZIDUA1yD0DG6pBVmy10eh0ZIXQImRuzocsI/N2XZ1GrLFwTS27In2i2jlpq1Q==",
            "dev": true,
            "requires": {
                "@jest/core": "^26.6.3",
                "import-local": "^3.0.2",
                "jest-cli": "^26.6.3"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "camelcase": {
                    "version": "5.3.1",
                    "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
                    "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
                    "dev": true
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "cliui": {
                    "version": "6.0.0",
                    "resolved": "https://registry.npmjs.org/cliui/-/cliui-6.0.0.tgz",
                    "integrity": "sha512-t6wbgtoCXvAzst7QgXxJYqPt0usEfbgQdftEPbLL/cvv6HPE5VgvqCuAIDR0NgU52ds6rFwqrgakNLrHEjCbrQ==",
                    "dev": true,
                    "requires": {
                        "string-width": "^4.2.0",
                        "strip-ansi": "^6.0.0",
                        "wrap-ansi": "^6.2.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "find-up": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
                    "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
                    "dev": true,
                    "requires": {
                        "locate-path": "^5.0.0",
                        "path-exists": "^4.0.0"
                    }
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "import-local": {
                    "version": "3.0.2",
                    "resolved": "https://registry.npmjs.org/import-local/-/import-local-3.0.2.tgz",
                    "integrity": "sha512-vjL3+w0oulAVZ0hBHnxa/Nm5TAurf9YLQJDhqRZyqb+VKGOB6LU8t9H1Nr5CIo16vh9XfJTOoHwU0B71S557gA==",
                    "dev": true,
                    "requires": {
                        "pkg-dir": "^4.2.0",
                        "resolve-cwd": "^3.0.0"
                    }
                },
                "jest-cli": {
                    "version": "26.6.3",
                    "resolved": "https://registry.npmjs.org/jest-cli/-/jest-cli-26.6.3.tgz",
                    "integrity": "sha512-GF9noBSa9t08pSyl3CY4frMrqp+aQXFGFkf5hEPbh/pIUFYWMK6ZLTfbmadxJVcJrdRoChlWQsA2VkJcDFK8hg==",
                    "dev": true,
                    "requires": {
                        "@jest/core": "^26.6.3",
                        "@jest/test-result": "^26.6.2",
                        "@jest/types": "^26.6.2",
                        "chalk": "^4.0.0",
                        "exit": "^0.1.2",
                        "graceful-fs": "^4.2.4",
                        "import-local": "^3.0.2",
                        "is-ci": "^2.0.0",
                        "jest-config": "^26.6.3",
                        "jest-util": "^26.6.2",
                        "jest-validate": "^26.6.2",
                        "prompts": "^2.0.1",
                        "yargs": "^15.4.1"
                    }
                },
                "locate-path": {
                    "version": "5.0.0",
                    "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
                    "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
                    "dev": true,
                    "requires": {
                        "p-locate": "^4.1.0"
                    }
                },
                "p-locate": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
                    "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
                    "dev": true,
                    "requires": {
                        "p-limit": "^2.2.0"
                    }
                },
                "path-exists": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
                    "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
                    "dev": true
                },
                "pkg-dir": {
                    "version": "4.2.0",
                    "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
                    "integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
                    "dev": true,
                    "requires": {
                        "find-up": "^4.0.0"
                    }
                },
                "resolve-cwd": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/resolve-cwd/-/resolve-cwd-3.0.0.tgz",
                    "integrity": "sha512-OrZaX2Mb+rJCpH/6CpSqt9xFVpN++x01XnN2ie9g6P5/3xelLAkXWVADpdz1IHD/KFfEXyE6V0U01OQ3UO2rEg==",
                    "dev": true,
                    "requires": {
                        "resolve-from": "^5.0.0"
                    }
                },
                "resolve-from": {
                    "version": "5.0.0",
                    "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
                    "integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                },
                "wrap-ansi": {
                    "version": "6.2.0",
                    "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-6.2.0.tgz",
                    "integrity": "sha512-r6lPcBGxZXlIcymEu7InxDMhdW0KDxpLgoFLcguasxCaJ/SOIZwINatK9KY/tf+ZrlywOKU0UDj3ATXUBfxJXA==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.0.0",
                        "string-width": "^4.1.0",
                        "strip-ansi": "^6.0.0"
                    }
                },
                "yargs": {
                    "version": "15.4.1",
                    "resolved": "https://registry.npmjs.org/yargs/-/yargs-15.4.1.tgz",
                    "integrity": "sha512-aePbxDmcYW++PaqBsJ+HYUFwCdv4LVvdnhBy78E57PIor8/OVvhMrADFFEDh8DHDFRv/O9i3lPhsENjO7QX0+A==",
                    "dev": true,
                    "requires": {
                        "cliui": "^6.0.0",
                        "decamelize": "^1.2.0",
                        "find-up": "^4.1.0",
                        "get-caller-file": "^2.0.1",
                        "require-directory": "^2.1.1",
                        "require-main-filename": "^2.0.0",
                        "set-blocking": "^2.0.0",
                        "string-width": "^4.2.0",
                        "which-module": "^2.0.0",
                        "y18n": "^4.0.0",
                        "yargs-parser": "^18.1.2"
                    }
                },
                "yargs-parser": {
                    "version": "18.1.3",
                    "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-18.1.3.tgz",
                    "integrity": "sha512-o50j0JeToy/4K6OZcaQmW6lyXXKhq7csREXcDwk2omFPJEwUNOVtJKvmDr9EI1fAJZUyZcRF7kxGBWmRXudrCQ==",
                    "dev": true,
                    "requires": {
                        "camelcase": "^5.0.0",
                        "decamelize": "^1.2.0"
                    }
                }
            }
        },
        "jest-changed-files": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-changed-files/-/jest-changed-files-26.6.2.tgz",
            "integrity": "sha512-fDS7szLcY9sCtIip8Fjry9oGf3I2ht/QT21bAHm5Dmf0mD4X3ReNUf17y+bO6fR8WgbIZTlbyG1ak/53cbRzKQ==",
            "dev": true,
            "requires": {
                "@jest/types": "^26.6.2",
                "execa": "^4.0.0",
                "throat": "^5.0.0"
            },
            "dependencies": {
                "cross-spawn": {
                    "version": "7.0.3",
                    "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz",
                    "integrity": "sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==",
                    "dev": true,
                    "requires": {
                        "path-key": "^3.1.0",
                        "shebang-command": "^2.0.0",
                        "which": "^2.0.1"
                    }
                },
                "execa": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/execa/-/execa-4.1.0.tgz",
                    "integrity": "sha512-j5W0//W7f8UxAn8hXVnwG8tLwdiUy4FJLcSupCg6maBYZDpyBvTApK7KyuI4bKj8KOh1r2YH+6ucuYtJv1bTZA==",
                    "dev": true,
                    "requires": {
                        "cross-spawn": "^7.0.0",
                        "get-stream": "^5.0.0",
                        "human-signals": "^1.1.1",
                        "is-stream": "^2.0.0",
                        "merge-stream": "^2.0.0",
                        "npm-run-path": "^4.0.0",
                        "onetime": "^5.1.0",
                        "signal-exit": "^3.0.2",
                        "strip-final-newline": "^2.0.0"
                    }
                },
                "get-stream": {
                    "version": "5.2.0",
                    "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-5.2.0.tgz",
                    "integrity": "sha512-nBF+F1rAZVCu/p7rjzgA+Yb4lfYXrpl7a6VmJrU8wF9I1CKvP/QwPNZHnOlwbTkY6dvtFIzFMSyQXbLoTQPRpA==",
                    "dev": true,
                    "requires": {
                        "pump": "^3.0.0"
                    }
                },
                "is-stream": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.0.tgz",
                    "integrity": "sha512-XCoy+WlUr7d1+Z8GgSuXmpuUFC9fOhRXglJMx+dwLKTkL44Cjd4W1Z5P+BQZpr+cR93aGP4S/s7Ftw6Nd/kiEw==",
                    "dev": true
                },
                "npm-run-path": {
                    "version": "4.0.1",
                    "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-4.0.1.tgz",
                    "integrity": "sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==",
                    "dev": true,
                    "requires": {
                        "path-key": "^3.0.0"
                    }
                },
                "path-key": {
                    "version": "3.1.1",
                    "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
                    "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
                    "dev": true
                },
                "shebang-command": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
                    "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
                    "dev": true,
                    "requires": {
                        "shebang-regex": "^3.0.0"
                    }
                },
                "shebang-regex": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
                    "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
                    "dev": true
                },
                "which": {
                    "version": "2.0.2",
                    "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
                    "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
                    "dev": true,
                    "requires": {
                        "isexe": "^2.0.0"
                    }
                }
            }
        },
        "jest-config": {
            "version": "26.6.3",
            "resolved": "https://registry.npmjs.org/jest-config/-/jest-config-26.6.3.tgz",
            "integrity": "sha512-t5qdIj/bCj2j7NFVHb2nFB4aUdfucDn3JRKgrZnplb8nieAirAzRSHP8uDEd+qV6ygzg9Pz4YG7UTJf94LPSyg==",
            "dev": true,
            "requires": {
                "@babel/core": "^7.1.0",
                "@jest/test-sequencer": "^26.6.3",
                "@jest/types": "^26.6.2",
                "babel-jest": "^26.6.3",
                "chalk": "^4.0.0",
                "deepmerge": "^4.2.2",
                "glob": "^7.1.1",
                "graceful-fs": "^4.2.4",
                "jest-environment-jsdom": "^26.6.2",
                "jest-environment-node": "^26.6.2",
                "jest-get-type": "^26.3.0",
                "jest-jasmine2": "^26.6.3",
                "jest-regex-util": "^26.0.0",
                "jest-resolve": "^26.6.2",
                "jest-util": "^26.6.2",
                "jest-validate": "^26.6.2",
                "micromatch": "^4.0.2",
                "pretty-format": "^26.6.2"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "jest-diff": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-diff/-/jest-diff-26.6.2.tgz",
            "integrity": "sha512-6m+9Z3Gv9wN0WFVasqjCL/06+EFCMTqDEUl/b87HYK2rAPTyfz4ZIuSlPhY51PIQRWx5TaxeF1qmXKe9gfN3sA==",
            "dev": true,
            "requires": {
                "chalk": "^4.0.0",
                "diff-sequences": "^26.6.2",
                "jest-get-type": "^26.3.0",
                "pretty-format": "^26.6.2"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "jest-docblock": {
            "version": "26.0.0",
            "resolved": "https://registry.npmjs.org/jest-docblock/-/jest-docblock-26.0.0.tgz",
            "integrity": "sha512-RDZ4Iz3QbtRWycd8bUEPxQsTlYazfYn/h5R65Fc6gOfwozFhoImx+affzky/FFBuqISPTqjXomoIGJVKBWoo0w==",
            "dev": true,
            "requires": {
                "detect-newline": "^3.0.0"
            }
        },
        "jest-each": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-each/-/jest-each-26.6.2.tgz",
            "integrity": "sha512-Mer/f0KaATbjl8MCJ+0GEpNdqmnVmDYqCTJYTvoo7rqmRiDllmp2AYN+06F93nXcY3ur9ShIjS+CO/uD+BbH4A==",
            "dev": true,
            "requires": {
                "@jest/types": "^26.6.2",
                "chalk": "^4.0.0",
                "jest-get-type": "^26.3.0",
                "jest-util": "^26.6.2",
                "pretty-format": "^26.6.2"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "jest-environment-jsdom": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-environment-jsdom/-/jest-environment-jsdom-26.6.2.tgz",
            "integrity": "sha512-jgPqCruTlt3Kwqg5/WVFyHIOJHsiAvhcp2qiR2QQstuG9yWox5+iHpU3ZrcBxW14T4fe5Z68jAfLRh7joCSP2Q==",
            "dev": true,
            "requires": {
                "@jest/environment": "^26.6.2",
                "@jest/fake-timers": "^26.6.2",
                "@jest/types": "^26.6.2",
                "@types/node": "*",
                "jest-mock": "^26.6.2",
                "jest-util": "^26.6.2",
                "jsdom": "^16.4.0"
            }
        },
        "jest-environment-node": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-environment-node/-/jest-environment-node-26.6.2.tgz",
            "integrity": "sha512-zhtMio3Exty18dy8ee8eJ9kjnRyZC1N4C1Nt/VShN1apyXc8rWGtJ9lI7vqiWcyyXS4BVSEn9lxAM2D+07/Tag==",
            "dev": true,
            "requires": {
                "@jest/environment": "^26.6.2",
                "@jest/fake-timers": "^26.6.2",
                "@jest/types": "^26.6.2",
                "@types/node": "*",
                "jest-mock": "^26.6.2",
                "jest-util": "^26.6.2"
            }
        },
        "jest-get-type": {
            "version": "26.3.0",
            "resolved": "https://registry.npmjs.org/jest-get-type/-/jest-get-type-26.3.0.tgz",
            "integrity": "sha512-TpfaviN1R2pQWkIihlfEanwOXK0zcxrKEE4MlU6Tn7keoXdN6/3gK/xl0yEh8DOunn5pOVGKf8hB4R9gVh04ig==",
            "dev": true
        },
        "jest-haste-map": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-26.6.2.tgz",
            "integrity": "sha512-easWIJXIw71B2RdR8kgqpjQrbMRWQBgiBwXYEhtGUTaX+doCjBheluShdDMeR8IMfJiTqH4+zfhtg29apJf/8w==",
            "dev": true,
            "requires": {
                "@jest/types": "^26.6.2",
                "@types/graceful-fs": "^4.1.2",
                "@types/node": "*",
                "anymatch": "^3.0.3",
                "fb-watchman": "^2.0.0",
                "fsevents": "^2.1.2",
                "graceful-fs": "^4.2.4",
                "jest-regex-util": "^26.0.0",
                "jest-serializer": "^26.6.2",
                "jest-util": "^26.6.2",
                "jest-worker": "^26.6.2",
                "micromatch": "^4.0.2",
                "sane": "^4.0.3",
                "walker": "^1.0.7"
            },
            "dependencies": {
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "jest-worker": {
                    "version": "26.6.2",
                    "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-26.6.2.tgz",
                    "integrity": "sha512-KWYVV1c4i+jbMpaBC+U++4Va0cp8OisU185o73T1vo99hqi7w8tSJfUXYswwqqrjzwxa6KpRK54WhPvwf5w6PQ==",
                    "dev": true,
                    "requires": {
                        "@types/node": "*",
                        "merge-stream": "^2.0.0",
                        "supports-color": "^7.0.0"
                    }
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "jest-jasmine2": {
            "version": "26.6.3",
            "resolved": "https://registry.npmjs.org/jest-jasmine2/-/jest-jasmine2-26.6.3.tgz",
            "integrity": "sha512-kPKUrQtc8aYwBV7CqBg5pu+tmYXlvFlSFYn18ev4gPFtrRzB15N2gW/Roew3187q2w2eHuu0MU9TJz6w0/nPEg==",
            "dev": true,
            "requires": {
                "@babel/traverse": "^7.1.0",
                "@jest/environment": "^26.6.2",
                "@jest/source-map": "^26.6.2",
                "@jest/test-result": "^26.6.2",
                "@jest/types": "^26.6.2",
                "@types/node": "*",
                "chalk": "^4.0.0",
                "co": "^4.6.0",
                "expect": "^26.6.2",
                "is-generator-fn": "^2.0.0",
                "jest-each": "^26.6.2",
                "jest-matcher-utils": "^26.6.2",
                "jest-message-util": "^26.6.2",
                "jest-runtime": "^26.6.3",
                "jest-snapshot": "^26.6.2",
                "jest-util": "^26.6.2",
                "pretty-format": "^26.6.2",
                "throat": "^5.0.0"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "jest-leak-detector": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-leak-detector/-/jest-leak-detector-26.6.2.tgz",
            "integrity": "sha512-i4xlXpsVSMeKvg2cEKdfhh0H39qlJlP5Ex1yQxwF9ubahboQYMgTtz5oML35AVA3B4Eu+YsmwaiKVev9KCvLxg==",
            "dev": true,
            "requires": {
                "jest-get-type": "^26.3.0",
                "pretty-format": "^26.6.2"
            }
        },
        "jest-matcher-utils": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-matcher-utils/-/jest-matcher-utils-26.6.2.tgz",
            "integrity": "sha512-llnc8vQgYcNqDrqRDXWwMr9i7rS5XFiCwvh6DTP7Jqa2mqpcCBBlpCbn+trkG0KNhPu/h8rzyBkriOtBstvWhw==",
            "dev": true,
            "requires": {
                "chalk": "^4.0.0",
                "jest-diff": "^26.6.2",
                "jest-get-type": "^26.3.0",
                "pretty-format": "^26.6.2"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "jest-message-util": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-26.6.2.tgz",
            "integrity": "sha512-rGiLePzQ3AzwUshu2+Rn+UMFk0pHN58sOG+IaJbk5Jxuqo3NYO1U2/MIR4S1sKgsoYSXSzdtSa0TgrmtUwEbmA==",
            "dev": true,
            "requires": {
                "@babel/code-frame": "^7.0.0",
                "@jest/types": "^26.6.2",
                "@types/stack-utils": "^2.0.0",
                "chalk": "^4.0.0",
                "graceful-fs": "^4.2.4",
                "micromatch": "^4.0.2",
                "pretty-format": "^26.6.2",
                "slash": "^3.0.0",
                "stack-utils": "^2.0.2"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "jest-mock": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-26.6.2.tgz",
            "integrity": "sha512-YyFjePHHp1LzpzYcmgqkJ0nm0gg/lJx2aZFzFy1S6eUqNjXsOqTK10zNRff2dNfssgokjkG65OlWNcIlgd3zew==",
            "dev": true,
            "requires": {
                "@jest/types": "^26.6.2",
                "@types/node": "*"
            }
        },
        "jest-pnp-resolver": {
            "version": "1.2.2",
            "resolved": "https://registry.npmjs.org/jest-pnp-resolver/-/jest-pnp-resolver-1.2.2.tgz",
            "integrity": "sha512-olV41bKSMm8BdnuMsewT4jqlZ8+3TCARAXjZGT9jcoSnrfUnRCqnMoF9XEeoWjbzObpqF9dRhHQj0Xb9QdF6/w==",
            "dev": true
        },
        "jest-preset-angular": {
            "version": "8.3.2",
            "resolved": "https://registry.npmjs.org/jest-preset-angular/-/jest-preset-angular-8.3.2.tgz",
            "integrity": "sha512-mdETK9E5tkCJPnPzB7NLXDB7CULbUEwcrA7eKU7WdR0u7ZIJqP0pvQxK5Cc70KBsOEaiwJK6LSGJm7aeqjSYYA==",
            "dev": true,
            "requires": {
                "pretty-format": "26.x",
                "ts-jest": "26.x"
            }
        },
        "jest-regex-util": {
            "version": "26.0.0",
            "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-26.0.0.tgz",
            "integrity": "sha512-Gv3ZIs/nA48/Zvjrl34bf+oD76JHiGDUxNOVgUjh3j890sblXryjY4rss71fPtD/njchl6PSE2hIhvyWa1eT0A==",
            "dev": true
        },
        "jest-resolve": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-resolve/-/jest-resolve-26.6.2.tgz",
            "integrity": "sha512-sOxsZOq25mT1wRsfHcbtkInS+Ek7Q8jCHUB0ZUTP0tc/c41QHriU/NunqMfCUWsL4H3MHpvQD4QR9kSYhS7UvQ==",
            "dev": true,
            "requires": {
                "@jest/types": "^26.6.2",
                "chalk": "^4.0.0",
                "graceful-fs": "^4.2.4",
                "jest-pnp-resolver": "^1.2.2",
                "jest-util": "^26.6.2",
                "read-pkg-up": "^7.0.1",
                "resolve": "^1.18.1",
                "slash": "^3.0.0"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "find-up": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
                    "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
                    "dev": true,
                    "requires": {
                        "locate-path": "^5.0.0",
                        "path-exists": "^4.0.0"
                    }
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "locate-path": {
                    "version": "5.0.0",
                    "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
                    "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
                    "dev": true,
                    "requires": {
                        "p-locate": "^4.1.0"
                    }
                },
                "p-locate": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
                    "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
                    "dev": true,
                    "requires": {
                        "p-limit": "^2.2.0"
                    }
                },
                "parse-json": {
                    "version": "5.1.0",
                    "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-5.1.0.tgz",
                    "integrity": "sha512-+mi/lmVVNKFNVyLXV31ERiy2CY5E1/F6QtJFEzoChPRwwngMNXRDQ9GJ5WdE2Z2P4AujsOi0/+2qHID68KwfIQ==",
                    "dev": true,
                    "requires": {
                        "@babel/code-frame": "^7.0.0",
                        "error-ex": "^1.3.1",
                        "json-parse-even-better-errors": "^2.3.0",
                        "lines-and-columns": "^1.1.6"
                    }
                },
                "path-exists": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
                    "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
                    "dev": true
                },
                "read-pkg": {
                    "version": "5.2.0",
                    "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-5.2.0.tgz",
                    "integrity": "sha512-Ug69mNOpfvKDAc2Q8DRpMjjzdtrnv9HcSMX+4VsZxD1aZ6ZzrIE7rlzXBtWTyhULSMKg076AW6WR5iZpD0JiOg==",
                    "dev": true,
                    "requires": {
                        "@types/normalize-package-data": "^2.4.0",
                        "normalize-package-data": "^2.5.0",
                        "parse-json": "^5.0.0",
                        "type-fest": "^0.6.0"
                    },
                    "dependencies": {
                        "type-fest": {
                            "version": "0.6.0",
                            "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.6.0.tgz",
                            "integrity": "sha512-q+MB8nYR1KDLrgr4G5yemftpMC7/QLqVndBmEEdqzmNj5dcFOO4Oo8qlwZE3ULT3+Zim1F8Kq4cBnikNhlCMlg==",
                            "dev": true
                        }
                    }
                },
                "read-pkg-up": {
                    "version": "7.0.1",
                    "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-7.0.1.tgz",
                    "integrity": "sha512-zK0TB7Xd6JpCLmlLmufqykGE+/TlOePD6qKClNW7hHDKFh/J7/7gCWGR7joEQEW1bKq3a3yUZSObOoWLFQ4ohg==",
                    "dev": true,
                    "requires": {
                        "find-up": "^4.1.0",
                        "read-pkg": "^5.2.0",
                        "type-fest": "^0.8.1"
                    }
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                },
                "type-fest": {
                    "version": "0.8.1",
                    "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
                    "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
                    "dev": true
                }
            }
        },
        "jest-resolve-dependencies": {
            "version": "26.6.3",
            "resolved": "https://registry.npmjs.org/jest-resolve-dependencies/-/jest-resolve-dependencies-26.6.3.tgz",
            "integrity": "sha512-pVwUjJkxbhe4RY8QEWzN3vns2kqyuldKpxlxJlzEYfKSvY6/bMvxoFrYYzUO1Gx28yKWN37qyV7rIoIp2h8fTg==",
            "dev": true,
            "requires": {
                "@jest/types": "^26.6.2",
                "jest-regex-util": "^26.0.0",
                "jest-snapshot": "^26.6.2"
            }
        },
        "jest-runner": {
            "version": "26.6.3",
            "resolved": "https://registry.npmjs.org/jest-runner/-/jest-runner-26.6.3.tgz",
            "integrity": "sha512-atgKpRHnaA2OvByG/HpGA4g6CSPS/1LK0jK3gATJAoptC1ojltpmVlYC3TYgdmGp+GLuhzpH30Gvs36szSL2JQ==",
            "dev": true,
            "requires": {
                "@jest/console": "^26.6.2",
                "@jest/environment": "^26.6.2",
                "@jest/test-result": "^26.6.2",
                "@jest/types": "^26.6.2",
                "@types/node": "*",
                "chalk": "^4.0.0",
                "emittery": "^0.7.1",
                "exit": "^0.1.2",
                "graceful-fs": "^4.2.4",
                "jest-config": "^26.6.3",
                "jest-docblock": "^26.0.0",
                "jest-haste-map": "^26.6.2",
                "jest-leak-detector": "^26.6.2",
                "jest-message-util": "^26.6.2",
                "jest-resolve": "^26.6.2",
                "jest-runtime": "^26.6.3",
                "jest-util": "^26.6.2",
                "jest-worker": "^26.6.2",
                "source-map-support": "^0.5.6",
                "throat": "^5.0.0"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "jest-worker": {
                    "version": "26.6.2",
                    "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-26.6.2.tgz",
                    "integrity": "sha512-KWYVV1c4i+jbMpaBC+U++4Va0cp8OisU185o73T1vo99hqi7w8tSJfUXYswwqqrjzwxa6KpRK54WhPvwf5w6PQ==",
                    "dev": true,
                    "requires": {
                        "@types/node": "*",
                        "merge-stream": "^2.0.0",
                        "supports-color": "^7.0.0"
                    }
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "jest-runtime": {
            "version": "26.6.3",
            "resolved": "https://registry.npmjs.org/jest-runtime/-/jest-runtime-26.6.3.tgz",
            "integrity": "sha512-lrzyR3N8sacTAMeonbqpnSka1dHNux2uk0qqDXVkMv2c/A3wYnvQ4EXuI013Y6+gSKSCxdaczvf4HF0mVXHRdw==",
            "dev": true,
            "requires": {
                "@jest/console": "^26.6.2",
                "@jest/environment": "^26.6.2",
                "@jest/fake-timers": "^26.6.2",
                "@jest/globals": "^26.6.2",
                "@jest/source-map": "^26.6.2",
                "@jest/test-result": "^26.6.2",
                "@jest/transform": "^26.6.2",
                "@jest/types": "^26.6.2",
                "@types/yargs": "^15.0.0",
                "chalk": "^4.0.0",
                "cjs-module-lexer": "^0.6.0",
                "collect-v8-coverage": "^1.0.0",
                "exit": "^0.1.2",
                "glob": "^7.1.3",
                "graceful-fs": "^4.2.4",
                "jest-config": "^26.6.3",
                "jest-haste-map": "^26.6.2",
                "jest-message-util": "^26.6.2",
                "jest-mock": "^26.6.2",
                "jest-regex-util": "^26.0.0",
                "jest-resolve": "^26.6.2",
                "jest-snapshot": "^26.6.2",
                "jest-util": "^26.6.2",
                "jest-validate": "^26.6.2",
                "slash": "^3.0.0",
                "strip-bom": "^4.0.0",
                "yargs": "^15.4.1"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "camelcase": {
                    "version": "5.3.1",
                    "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
                    "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
                    "dev": true
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "cliui": {
                    "version": "6.0.0",
                    "resolved": "https://registry.npmjs.org/cliui/-/cliui-6.0.0.tgz",
                    "integrity": "sha512-t6wbgtoCXvAzst7QgXxJYqPt0usEfbgQdftEPbLL/cvv6HPE5VgvqCuAIDR0NgU52ds6rFwqrgakNLrHEjCbrQ==",
                    "dev": true,
                    "requires": {
                        "string-width": "^4.2.0",
                        "strip-ansi": "^6.0.0",
                        "wrap-ansi": "^6.2.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "find-up": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
                    "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
                    "dev": true,
                    "requires": {
                        "locate-path": "^5.0.0",
                        "path-exists": "^4.0.0"
                    }
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "locate-path": {
                    "version": "5.0.0",
                    "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
                    "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
                    "dev": true,
                    "requires": {
                        "p-locate": "^4.1.0"
                    }
                },
                "p-locate": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
                    "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
                    "dev": true,
                    "requires": {
                        "p-limit": "^2.2.0"
                    }
                },
                "path-exists": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
                    "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
                    "dev": true
                },
                "strip-bom": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-4.0.0.tgz",
                    "integrity": "sha512-3xurFv5tEgii33Zi8Jtp55wEIILR9eh34FAW00PZf+JnSsTmV/ioewSgQl97JHvgjoRGwPShsWm+IdrxB35d0w==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                },
                "wrap-ansi": {
                    "version": "6.2.0",
                    "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-6.2.0.tgz",
                    "integrity": "sha512-r6lPcBGxZXlIcymEu7InxDMhdW0KDxpLgoFLcguasxCaJ/SOIZwINatK9KY/tf+ZrlywOKU0UDj3ATXUBfxJXA==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.0.0",
                        "string-width": "^4.1.0",
                        "strip-ansi": "^6.0.0"
                    }
                },
                "yargs": {
                    "version": "15.4.1",
                    "resolved": "https://registry.npmjs.org/yargs/-/yargs-15.4.1.tgz",
                    "integrity": "sha512-aePbxDmcYW++PaqBsJ+HYUFwCdv4LVvdnhBy78E57PIor8/OVvhMrADFFEDh8DHDFRv/O9i3lPhsENjO7QX0+A==",
                    "dev": true,
                    "requires": {
                        "cliui": "^6.0.0",
                        "decamelize": "^1.2.0",
                        "find-up": "^4.1.0",
                        "get-caller-file": "^2.0.1",
                        "require-directory": "^2.1.1",
                        "require-main-filename": "^2.0.0",
                        "set-blocking": "^2.0.0",
                        "string-width": "^4.2.0",
                        "which-module": "^2.0.0",
                        "y18n": "^4.0.0",
                        "yargs-parser": "^18.1.2"
                    }
                },
                "yargs-parser": {
                    "version": "18.1.3",
                    "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-18.1.3.tgz",
                    "integrity": "sha512-o50j0JeToy/4K6OZcaQmW6lyXXKhq7csREXcDwk2omFPJEwUNOVtJKvmDr9EI1fAJZUyZcRF7kxGBWmRXudrCQ==",
                    "dev": true,
                    "requires": {
                        "camelcase": "^5.0.0",
                        "decamelize": "^1.2.0"
                    }
                }
            }
        },
        "jest-serializer": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-serializer/-/jest-serializer-26.6.2.tgz",
            "integrity": "sha512-S5wqyz0DXnNJPd/xfIzZ5Xnp1HrJWBczg8mMfMpN78OJ5eDxXyf+Ygld9wX1DnUWbIbhM1YDY95NjR4CBXkb2g==",
            "dev": true,
            "requires": {
                "@types/node": "*",
                "graceful-fs": "^4.2.4"
            }
        },
        "jest-snapshot": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-snapshot/-/jest-snapshot-26.6.2.tgz",
            "integrity": "sha512-OLhxz05EzUtsAmOMzuupt1lHYXCNib0ECyuZ/PZOx9TrZcC8vL0x+DUG3TL+GLX3yHG45e6YGjIm0XwDc3q3og==",
            "dev": true,
            "requires": {
                "@babel/types": "^7.0.0",
                "@jest/types": "^26.6.2",
                "@types/babel__traverse": "^7.0.4",
                "@types/prettier": "^2.0.0",
                "chalk": "^4.0.0",
                "expect": "^26.6.2",
                "graceful-fs": "^4.2.4",
                "jest-diff": "^26.6.2",
                "jest-get-type": "^26.3.0",
                "jest-haste-map": "^26.6.2",
                "jest-matcher-utils": "^26.6.2",
                "jest-message-util": "^26.6.2",
                "jest-resolve": "^26.6.2",
                "natural-compare": "^1.4.0",
                "pretty-format": "^26.6.2",
                "semver": "^7.3.2"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "jest-util": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-26.6.2.tgz",
            "integrity": "sha512-MDW0fKfsn0OI7MS7Euz6h8HNDXVQ0gaM9uW6RjfDmd1DAFcaxX9OqIakHIqhbnmF08Cf2DLDG+ulq8YQQ0Lp0Q==",
            "dev": true,
            "requires": {
                "@jest/types": "^26.6.2",
                "@types/node": "*",
                "chalk": "^4.0.0",
                "graceful-fs": "^4.2.4",
                "is-ci": "^2.0.0",
                "micromatch": "^4.0.2"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "jest-validate": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-validate/-/jest-validate-26.6.2.tgz",
            "integrity": "sha512-NEYZ9Aeyj0i5rQqbq+tpIOom0YS1u2MVu6+euBsvpgIme+FOfRmoC4R5p0JiAUpaFvFy24xgrpMknarR/93XjQ==",
            "dev": true,
            "requires": {
                "@jest/types": "^26.6.2",
                "camelcase": "^6.0.0",
                "chalk": "^4.0.0",
                "jest-get-type": "^26.3.0",
                "leven": "^3.1.0",
                "pretty-format": "^26.6.2"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "jest-watcher": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-watcher/-/jest-watcher-26.6.2.tgz",
            "integrity": "sha512-WKJob0P/Em2csiVthsI68p6aGKTIcsfjH9Gsx1f0A3Italz43e3ho0geSAVsmj09RWOELP1AZ/DXyJgOgDKxXQ==",
            "dev": true,
            "requires": {
                "@jest/test-result": "^26.6.2",
                "@jest/types": "^26.6.2",
                "@types/node": "*",
                "ansi-escapes": "^4.2.1",
                "chalk": "^4.0.0",
                "jest-util": "^26.6.2",
                "string-length": "^4.0.1"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "jest-worker": {
            "version": "26.5.0",
            "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-26.5.0.tgz",
            "integrity": "sha512-kTw66Dn4ZX7WpjZ7T/SUDgRhapFRKWmisVAF0Rv4Fu8SLFD7eLbqpLvbxVqYhSgaWa7I+bW7pHnbyfNsH6stug==",
            "dev": true,
            "requires": {
                "@types/node": "*",
                "merge-stream": "^2.0.0",
                "supports-color": "^7.0.0"
            },
            "dependencies": {
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "jju": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/jju/-/jju-1.4.0.tgz",
            "integrity": "sha1-o6vicYryQaKykE+EpiWXDzia4yo=",
            "dev": true
        },
        "jquery": {
            "version": "3.5.1",
            "resolved": "https://registry.npmjs.org/jquery/-/jquery-3.5.1.tgz",
            "integrity": "sha512-XwIBPqcMn57FxfT+Go5pzySnm4KWkT1Tv7gjrpT1srtf8Weynl6R273VJ5GjkRb51IzMp5nbaPjJXMWeju2MKg=="
        },
        "js-tokens": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
            "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
            "dev": true
        },
        "js-yaml": {
            "version": "3.14.0",
            "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.0.tgz",
            "integrity": "sha512-/4IbIeHcD9VMHFqDR/gQ7EdZdLimOvW2DdcxFjdyyZ9NsbS+ccrXqVWDtab/lRl5AlUqmpBx8EhPaWR+OtY17A==",
            "dev": true,
            "requires": {
                "argparse": "^1.0.7",
                "esprima": "^4.0.0"
            }
        },
        "jsbn": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
            "integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM=",
            "dev": true
        },
        "jsdoctypeparser": {
            "version": "9.0.0",
            "resolved": "https://registry.npmjs.org/jsdoctypeparser/-/jsdoctypeparser-9.0.0.tgz",
            "integrity": "sha512-jrTA2jJIL6/DAEILBEh2/w9QxCuwmvNXIry39Ay/HVfhE3o2yVV0U44blYkqdHA/OKloJEqvJy0xU+GSdE2SIw==",
            "dev": true
        },
        "jsdom": {
            "version": "16.4.0",
            "resolved": "https://registry.npmjs.org/jsdom/-/jsdom-16.4.0.tgz",
            "integrity": "sha512-lYMm3wYdgPhrl7pDcRmvzPhhrGVBeVhPIqeHjzeiHN3DFmD1RBpbExbi8vU7BJdH8VAZYovR8DMt0PNNDM7k8w==",
            "dev": true,
            "requires": {
                "abab": "^2.0.3",
                "acorn": "^7.1.1",
                "acorn-globals": "^6.0.0",
                "cssom": "^0.4.4",
                "cssstyle": "^2.2.0",
                "data-urls": "^2.0.0",
                "decimal.js": "^10.2.0",
                "domexception": "^2.0.1",
                "escodegen": "^1.14.1",
                "html-encoding-sniffer": "^2.0.1",
                "is-potential-custom-element-name": "^1.0.0",
                "nwsapi": "^2.2.0",
                "parse5": "5.1.1",
                "request": "^2.88.2",
                "request-promise-native": "^1.0.8",
                "saxes": "^5.0.0",
                "symbol-tree": "^3.2.4",
                "tough-cookie": "^3.0.1",
                "w3c-hr-time": "^1.0.2",
                "w3c-xmlserializer": "^2.0.0",
                "webidl-conversions": "^6.1.0",
                "whatwg-encoding": "^1.0.5",
                "whatwg-mimetype": "^2.3.0",
                "whatwg-url": "^8.0.0",
                "ws": "^7.2.3",
                "xml-name-validator": "^3.0.0"
            },
            "dependencies": {
                "acorn": {
                    "version": "7.4.1",
                    "resolved": "https://registry.npmjs.org/acorn/-/acorn-7.4.1.tgz",
                    "integrity": "sha512-nQyp0o1/mNdbTO1PO6kHkwSrmgZ0MT/jCCpNiwbUjGoRN4dlBhqJtoQuCnEOKzgTVwg0ZWiCoQy6SxMebQVh8A==",
                    "dev": true
                },
                "parse5": {
                    "version": "5.1.1",
                    "resolved": "https://registry.npmjs.org/parse5/-/parse5-5.1.1.tgz",
                    "integrity": "sha512-ugq4DFI0Ptb+WWjAdOK16+u/nHfiIrcE+sh8kZMaM0WllQKLI9rOUq6c2b7cwPkXdzfQESqvoqK6ug7U/Yyzug==",
                    "dev": true
                },
                "tough-cookie": {
                    "version": "3.0.1",
                    "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-3.0.1.tgz",
                    "integrity": "sha512-yQyJ0u4pZsv9D4clxO69OEjLWYw+jbgspjTue4lTQZLfV0c5l1VmK2y1JK8E9ahdpltPOaAThPcp5nKPUgSnsg==",
                    "dev": true,
                    "requires": {
                        "ip-regex": "^2.1.0",
                        "psl": "^1.1.28",
                        "punycode": "^2.1.1"
                    }
                },
                "ws": {
                    "version": "7.4.0",
                    "resolved": "https://registry.npmjs.org/ws/-/ws-7.4.0.tgz",
                    "integrity": "sha512-kyFwXuV/5ymf+IXhS6f0+eAFvydbaBW3zjpT6hUdAh/hbVjTIB5EHBGi0bPoCLSK2wcuz3BrEkB9LrYv1Nm4NQ==",
                    "dev": true
                }
            }
        },
        "jsesc": {
            "version": "2.5.2",
            "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
            "integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA==",
            "dev": true
        },
        "json-buffer": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.0.tgz",
            "integrity": "sha1-Wx85evx11ne96Lz8Dkfh+aPZqJg=",
            "dev": true
        },
        "json-parse-better-errors": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
            "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw==",
            "dev": true
        },
        "json-parse-even-better-errors": {
            "version": "2.3.1",
            "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
            "integrity": "sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==",
            "dev": true
        },
        "json-parse-helpfulerror": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/json-parse-helpfulerror/-/json-parse-helpfulerror-1.0.3.tgz",
            "integrity": "sha1-E/FM4C7tTpgSl7ZOueO5MuLdE9w=",
            "dev": true,
            "requires": {
                "jju": "^1.1.0"
            }
        },
        "json-schema": {
            "version": "0.2.3",
            "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
            "integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM=",
            "dev": true
        },
        "json-schema-traverse": {
            "version": "0.4.1",
            "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
            "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg=="
        },
        "json-server": {
            "version": "0.16.3",
            "resolved": "https://registry.npmjs.org/json-server/-/json-server-0.16.3.tgz",
            "integrity": "sha512-tbsBONiefH7SR5EhSmK4EzwP3kCHuOduUq5hWAQjCwXTva4OBeKVcPrciHNWOK/+12ygtUnjuWcAxuHgqTuBLA==",
            "dev": true,
            "requires": {
                "body-parser": "^1.19.0",
                "chalk": "^4.1.0",
                "compression": "^1.7.4",
                "connect-pause": "^0.1.1",
                "cors": "^2.8.5",
                "errorhandler": "^1.5.1",
                "express": "^4.17.1",
                "express-urlrewrite": "^1.3.0",
                "json-parse-helpfulerror": "^1.0.3",
                "lodash": "^4.17.20",
                "lodash-id": "^0.14.0",
                "lowdb": "^1.0.0",
                "method-override": "^3.0.0",
                "morgan": "^1.10.0",
                "nanoid": "^3.1.16",
                "please-upgrade-node": "^3.2.0",
                "pluralize": "^8.0.0",
                "server-destroy": "^1.0.1",
                "update-notifier": "^5.0.1",
                "yargs": "^16.1.1"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "cliui": {
                    "version": "7.0.4",
                    "resolved": "https://registry.npmjs.org/cliui/-/cliui-7.0.4.tgz",
                    "integrity": "sha512-OcRE68cOsVMXp1Yvonl/fzkQOyjLSu/8bhPDfQt0e0/Eb283TKP20Fs2MqoPsr9SwA595rRCA+QMzYc9nBP+JQ==",
                    "dev": true,
                    "requires": {
                        "string-width": "^4.2.0",
                        "strip-ansi": "^6.0.0",
                        "wrap-ansi": "^7.0.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                },
                "wrap-ansi": {
                    "version": "7.0.0",
                    "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
                    "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.0.0",
                        "string-width": "^4.1.0",
                        "strip-ansi": "^6.0.0"
                    }
                },
                "y18n": {
                    "version": "5.0.5",
                    "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.5.tgz",
                    "integrity": "sha512-hsRUr4FFrvhhRH12wOdfs38Gy7k2FFzB9qgN9v3aLykRq0dRcdcpz5C9FxdS2NuhOrI/628b/KSTJ3rwHysYSg==",
                    "dev": true
                },
                "yargs": {
                    "version": "16.1.1",
                    "resolved": "https://registry.npmjs.org/yargs/-/yargs-16.1.1.tgz",
                    "integrity": "sha512-hAD1RcFP/wfgfxgMVswPE+z3tlPFtxG8/yWUrG2i17sTWGCGqWnxKcLTF4cUKDUK8fzokwsmO9H0TDkRbMHy8w==",
                    "dev": true,
                    "requires": {
                        "cliui": "^7.0.2",
                        "escalade": "^3.1.1",
                        "get-caller-file": "^2.0.5",
                        "require-directory": "^2.1.1",
                        "string-width": "^4.2.0",
                        "y18n": "^5.0.5",
                        "yargs-parser": "^20.2.2"
                    }
                },
                "yargs-parser": {
                    "version": "20.2.4",
                    "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.4.tgz",
                    "integrity": "sha512-WOkpgNhPTlE73h4VFAFsOnomJVaovO8VqLDzy5saChRBFQFBoMYirowyW+Q9HB4HFF4Z7VZTiG3iSzJJA29yRA==",
                    "dev": true
                }
            }
        },
        "json-stable-stringify-without-jsonify": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
            "integrity": "sha1-nbe1lJatPzz+8wp1FC0tkwrXJlE=",
            "dev": true
        },
        "json-stringify-safe": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
            "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus=",
            "dev": true
        },
        "json3": {
            "version": "3.3.3",
            "resolved": "https://registry.npmjs.org/json3/-/json3-3.3.3.tgz",
            "integrity": "sha512-c7/8mbUsKigAbLkD5B010BK4D9LZm7A1pNItkEwiUZRpIN66exu/e7YQWysGun+TRKaJp8MhemM+VkfWv42aCA==",
            "dev": true
        },
        "json5": {
            "version": "2.1.3",
            "resolved": "https://registry.npmjs.org/json5/-/json5-2.1.3.tgz",
            "integrity": "sha512-KXPvOm8K9IJKFM0bmdn8QXh7udDh1g/giieX0NLCaMnb4hEiVFqnop2ImTXCc5e0/oHz3LTqmHGtExn5hfMkOA==",
            "dev": true,
            "requires": {
                "minimist": "^1.2.5"
            }
        },
        "jsonc-parser": {
            "version": "2.3.1",
            "resolved": "https://registry.npmjs.org/jsonc-parser/-/jsonc-parser-2.3.1.tgz",
            "integrity": "sha512-H8jvkz1O50L3dMZCsLqiuB2tA7muqbSg1AtGEkN0leAqGjsUzDJir3Zwr02BhqdcITPg3ei3mZ+HjMocAknhhg==",
            "dev": true
        },
        "jsonfile": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",
            "integrity": "sha1-h3Gq4HmbZAdrdmQPygWPnBDjPss=",
            "dev": true,
            "requires": {
                "graceful-fs": "^4.1.6"
            }
        },
        "jsonparse": {
            "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/jsonparse/-/jsonparse-1.3.1.tgz",
            "integrity": "sha1-P02uSpH6wxX3EGL4UhzCOfE2YoA=",
            "dev": true
        },
        "jsprim": {
            "version": "1.4.1",
            "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
            "integrity": "sha1-MT5mvB5cwG5Di8G3SZwuXFastqI=",
            "dev": true,
            "requires": {
                "assert-plus": "1.0.0",
                "extsprintf": "1.3.0",
                "json-schema": "0.2.3",
                "verror": "1.10.0"
            }
        },
        "jszip": {
            "version": "3.5.0",
            "resolved": "https://registry.npmjs.org/jszip/-/jszip-3.5.0.tgz",
            "integrity": "sha512-WRtu7TPCmYePR1nazfrtuF216cIVon/3GWOvHS9QR5bIwSbnxtdpma6un3jyGGNhHsKCSzn5Ypk+EkDRvTGiFA==",
            "dev": true,
            "requires": {
                "lie": "~3.3.0",
                "pako": "~1.0.2",
                "readable-stream": "~2.3.6",
                "set-immediate-shim": "~1.0.1"
            }
        },
        "karma-coverage": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/karma-coverage/-/karma-coverage-2.0.3.tgz",
            "integrity": "sha512-atDvLQqvPcLxhED0cmXYdsPMCQuh6Asa9FMZW1bhNqlVEhJoB9qyZ2BY1gu7D/rr5GLGb5QzYO4siQskxaWP/g==",
            "dev": true,
            "requires": {
                "istanbul-lib-coverage": "^3.0.0",
                "istanbul-lib-instrument": "^4.0.1",
                "istanbul-lib-report": "^3.0.0",
                "istanbul-lib-source-maps": "^4.0.0",
                "istanbul-reports": "^3.0.0",
                "minimatch": "^3.0.4"
            }
        },
        "karma-source-map-support": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/karma-source-map-support/-/karma-source-map-support-1.4.0.tgz",
            "integrity": "sha512-RsBECncGO17KAoJCYXjv+ckIz+Ii9NCi+9enk+rq6XC81ezYkb4/RHE6CTXdA7IOJqoF3wcaLfVG0CPmE5ca6A==",
            "dev": true,
            "requires": {
                "source-map-support": "^0.5.5"
            }
        },
        "keyv": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/keyv/-/keyv-3.1.0.tgz",
            "integrity": "sha512-9ykJ/46SN/9KPM/sichzQ7OvXyGDYKGTaDlKMGCAlg2UK8KRy4jb0d8sFc+0Tt0YYnThq8X2RZgCg74RPxgcVA==",
            "dev": true,
            "requires": {
                "json-buffer": "3.0.0"
            }
        },
        "killable": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/killable/-/killable-1.0.1.tgz",
            "integrity": "sha512-LzqtLKlUwirEUyl/nicirVmNiPvYs7l5n8wOPP7fyJVpUPkvCnW/vuiXGpylGUlnPDnB7311rARzAt3Mhswpjg==",
            "dev": true
        },
        "kind-of": {
            "version": "6.0.3",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
            "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
            "dev": true
        },
        "kleur": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/kleur/-/kleur-3.0.3.tgz",
            "integrity": "sha512-eTIzlVOSUR+JxdDFepEYcBMtZ9Qqdef+rnzWdRZuMbOywu5tO2w2N7rqjoANZ5k9vywhL6Br1VRjUIgTQx4E8w==",
            "dev": true
        },
        "klona": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/klona/-/klona-2.0.4.tgz",
            "integrity": "sha512-ZRbnvdg/NxqzC7L9Uyqzf4psi1OM4Cuc+sJAkQPjO6XkQIJTNbfK2Rsmbw8fx1p2mkZdp2FZYo2+LwXYY/uwIA==",
            "dev": true
        },
        "latest-version": {
            "version": "5.1.0",
            "resolved": "https://registry.npmjs.org/latest-version/-/latest-version-5.1.0.tgz",
            "integrity": "sha512-weT+r0kTkRQdCdYCNtkMwWXQTMEswKrFBkm4ckQOMVhhqhIMI1UT2hMj+1iigIhgSZm5gTmrRXBNoGUgaTY1xA==",
            "dev": true,
            "requires": {
                "package-json": "^6.3.0"
            }
        },
        "less": {
            "version": "3.12.2",
            "resolved": "https://registry.npmjs.org/less/-/less-3.12.2.tgz",
            "integrity": "sha512-+1V2PCMFkL+OIj2/HrtrvZw0BC0sYLMICJfbQjuj/K8CEnlrFX6R5cKKgzzttsZDHyxQNL1jqMREjKN3ja/E3Q==",
            "dev": true,
            "requires": {
                "errno": "^0.1.1",
                "graceful-fs": "^4.1.2",
                "image-size": "~0.5.0",
                "make-dir": "^2.1.0",
                "mime": "^1.4.1",
                "native-request": "^1.0.5",
                "source-map": "~0.6.0",
                "tslib": "^1.10.0"
            },
            "dependencies": {
                "source-map": {
                    "version": "0.6.1",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                    "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                    "dev": true,
                    "optional": true
                },
                "tslib": {
                    "version": "1.14.1",
                    "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
                    "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
                    "dev": true
                }
            }
        },
        "less-loader": {
            "version": "7.0.2",
            "resolved": "https://registry.npmjs.org/less-loader/-/less-loader-7.0.2.tgz",
            "integrity": "sha512-7MKlgjnkCf63E3Lv6w2FvAEgLMx3d/tNBExITcanAq7ys5U8VPWT3F6xcRjYmdNfkoQ9udoVFb1r2azSiTnD6w==",
            "dev": true,
            "requires": {
                "klona": "^2.0.4",
                "loader-utils": "^2.0.0",
                "schema-utils": "^3.0.0"
            },
            "dependencies": {
                "schema-utils": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.0.0.tgz",
                    "integrity": "sha512-6D82/xSzO094ajanoOSbe4YvXWMfn2A//8Y1+MUqFAJul5Bs+yn36xbK9OtNDcRVSBJ9jjeoXftM6CfztsjOAA==",
                    "dev": true,
                    "requires": {
                        "@types/json-schema": "^7.0.6",
                        "ajv": "^6.12.5",
                        "ajv-keywords": "^3.5.2"
                    }
                }
            }
        },
        "leven": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/leven/-/leven-3.1.0.tgz",
            "integrity": "sha512-qsda+H8jTaUaN/x5vzW2rzc+8Rw4TAQ/4KjB46IwK5VH+IlVeeeje/EoZRpiXvIqjFgK84QffqPztGI3VBLG1A==",
            "dev": true
        },
        "levenshtein": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/levenshtein/-/levenshtein-1.0.5.tgz",
            "integrity": "sha1-ORFzepy1baNF0Aj1V4LG8TiXm6M=",
            "dev": true
        },
        "levn": {
            "version": "0.4.1",
            "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
            "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
            "dev": true,
            "requires": {
                "prelude-ls": "^1.2.1",
                "type-check": "~0.4.0"
            }
        },
        "license-webpack-plugin": {
            "version": "2.3.1",
            "resolved": "https://registry.npmjs.org/license-webpack-plugin/-/license-webpack-plugin-2.3.1.tgz",
            "integrity": "sha512-yhqTmlYIEpZWA122lf6E0G8+rkn0AzoQ1OpzUKKs/lXUqG1plmGnwmkuuPlfggzJR5y6DLOdot/Tv00CC51CeQ==",
            "dev": true,
            "requires": {
                "@types/webpack-sources": "^0.1.5",
                "webpack-sources": "^1.2.0"
            },
            "dependencies": {
                "source-map": {
                    "version": "0.6.1",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                    "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                    "dev": true
                },
                "webpack-sources": {
                    "version": "1.4.3",
                    "resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-1.4.3.tgz",
                    "integrity": "sha512-lgTS3Xhv1lCOKo7SA5TjKXMjpSM4sBjNV5+q2bqesbSPs5FjGmU6jjtBSkX9b4qW87vDIsCIlUPOEhbZrMdjeQ==",
                    "dev": true,
                    "requires": {
                        "source-list-map": "^2.0.0",
                        "source-map": "~0.6.1"
                    }
                }
            }
        },
        "lie": {
            "version": "3.3.0",
            "resolved": "https://registry.npmjs.org/lie/-/lie-3.3.0.tgz",
            "integrity": "sha512-UaiMJzeWRlEujzAuw5LokY1L5ecNQYZKfmyZ9L7wDHb/p5etKaxXhohBcrw0EYby+G/NA52vRSN4N39dxHAIwQ==",
            "dev": true,
            "requires": {
                "immediate": "~3.0.5"
            }
        },
        "lines-and-columns": {
            "version": "1.1.6",
            "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.1.6.tgz",
            "integrity": "sha1-HADHQ7QzzQpOgHWPe2SldEDZ/wA=",
            "dev": true
        },
        "lint-staged": {
            "version": "10.5.1",
            "resolved": "https://registry.npmjs.org/lint-staged/-/lint-staged-10.5.1.tgz",
            "integrity": "sha512-fTkTGFtwFIJJzn/PbUO3RXyEBHIhbfYBE7+rJyLcOXabViaO/h6OslgeK6zpeUtzkDrzkgyAYDTLAwx6JzDTHw==",
            "dev": true,
            "requires": {
                "chalk": "^4.1.0",
                "cli-truncate": "^2.1.0",
                "commander": "^6.2.0",
                "cosmiconfig": "^7.0.0",
                "debug": "^4.2.0",
                "dedent": "^0.7.0",
                "enquirer": "^2.3.6",
                "execa": "^4.1.0",
                "listr2": "^3.2.2",
                "log-symbols": "^4.0.0",
                "micromatch": "^4.0.2",
                "normalize-path": "^3.0.0",
                "please-upgrade-node": "^3.2.0",
                "string-argv": "0.3.1",
                "stringify-object": "^3.3.0"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "commander": {
                    "version": "6.2.0",
                    "resolved": "https://registry.npmjs.org/commander/-/commander-6.2.0.tgz",
                    "integrity": "sha512-zP4jEKbe8SHzKJYQmq8Y9gYjtO/POJLgIdKgV7B9qNmABVFVc+ctqSX6iXh4mCpJfRBOabiZ2YKPg8ciDw6C+Q==",
                    "dev": true
                },
                "cosmiconfig": {
                    "version": "7.0.0",
                    "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-7.0.0.tgz",
                    "integrity": "sha512-pondGvTuVYDk++upghXJabWzL6Kxu6f26ljFw64Swq9v6sQPUL3EUlVDV56diOjpCayKihL6hVe8exIACU4XcA==",
                    "dev": true,
                    "requires": {
                        "@types/parse-json": "^4.0.0",
                        "import-fresh": "^3.2.1",
                        "parse-json": "^5.0.0",
                        "path-type": "^4.0.0",
                        "yaml": "^1.10.0"
                    }
                },
                "cross-spawn": {
                    "version": "7.0.3",
                    "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz",
                    "integrity": "sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==",
                    "dev": true,
                    "requires": {
                        "path-key": "^3.1.0",
                        "shebang-command": "^2.0.0",
                        "which": "^2.0.1"
                    }
                },
                "execa": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/execa/-/execa-4.1.0.tgz",
                    "integrity": "sha512-j5W0//W7f8UxAn8hXVnwG8tLwdiUy4FJLcSupCg6maBYZDpyBvTApK7KyuI4bKj8KOh1r2YH+6ucuYtJv1bTZA==",
                    "dev": true,
                    "requires": {
                        "cross-spawn": "^7.0.0",
                        "get-stream": "^5.0.0",
                        "human-signals": "^1.1.1",
                        "is-stream": "^2.0.0",
                        "merge-stream": "^2.0.0",
                        "npm-run-path": "^4.0.0",
                        "onetime": "^5.1.0",
                        "signal-exit": "^3.0.2",
                        "strip-final-newline": "^2.0.0"
                    }
                },
                "get-stream": {
                    "version": "5.2.0",
                    "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-5.2.0.tgz",
                    "integrity": "sha512-nBF+F1rAZVCu/p7rjzgA+Yb4lfYXrpl7a6VmJrU8wF9I1CKvP/QwPNZHnOlwbTkY6dvtFIzFMSyQXbLoTQPRpA==",
                    "dev": true,
                    "requires": {
                        "pump": "^3.0.0"
                    }
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "import-fresh": {
                    "version": "3.2.2",
                    "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.2.2.tgz",
                    "integrity": "sha512-cTPNrlvJT6twpYy+YmKUKrTSjWFs3bjYjAhCwm+z4EOCubZxAuO+hHpRN64TqjEaYSHs7tJAE0w1CKMGmsG/lw==",
                    "dev": true,
                    "requires": {
                        "parent-module": "^1.0.0",
                        "resolve-from": "^4.0.0"
                    }
                },
                "is-stream": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.0.tgz",
                    "integrity": "sha512-XCoy+WlUr7d1+Z8GgSuXmpuUFC9fOhRXglJMx+dwLKTkL44Cjd4W1Z5P+BQZpr+cR93aGP4S/s7Ftw6Nd/kiEw==",
                    "dev": true
                },
                "npm-run-path": {
                    "version": "4.0.1",
                    "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-4.0.1.tgz",
                    "integrity": "sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==",
                    "dev": true,
                    "requires": {
                        "path-key": "^3.0.0"
                    }
                },
                "parse-json": {
                    "version": "5.1.0",
                    "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-5.1.0.tgz",
                    "integrity": "sha512-+mi/lmVVNKFNVyLXV31ERiy2CY5E1/F6QtJFEzoChPRwwngMNXRDQ9GJ5WdE2Z2P4AujsOi0/+2qHID68KwfIQ==",
                    "dev": true,
                    "requires": {
                        "@babel/code-frame": "^7.0.0",
                        "error-ex": "^1.3.1",
                        "json-parse-even-better-errors": "^2.3.0",
                        "lines-and-columns": "^1.1.6"
                    }
                },
                "path-key": {
                    "version": "3.1.1",
                    "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
                    "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
                    "dev": true
                },
                "resolve-from": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
                    "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
                    "dev": true
                },
                "shebang-command": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
                    "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
                    "dev": true,
                    "requires": {
                        "shebang-regex": "^3.0.0"
                    }
                },
                "shebang-regex": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
                    "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                },
                "which": {
                    "version": "2.0.2",
                    "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
                    "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
                    "dev": true,
                    "requires": {
                        "isexe": "^2.0.0"
                    }
                }
            }
        },
        "listr2": {
            "version": "3.2.2",
            "resolved": "https://registry.npmjs.org/listr2/-/listr2-3.2.2.tgz",
            "integrity": "sha512-AajqcZEUikF2ioph6PfH3dIuxJclhr3i3kHgTOP0xeXdWQohrvJAAmqVcV43/GI987HFY/vzT73jYXoa4esDHg==",
            "dev": true,
            "requires": {
                "chalk": "^4.1.0",
                "cli-truncate": "^2.1.0",
                "figures": "^3.2.0",
                "indent-string": "^4.0.0",
                "log-update": "^4.0.0",
                "p-map": "^4.0.0",
                "rxjs": "^6.6.3",
                "through": "^2.3.8"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "load-json-file": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-2.0.0.tgz",
            "integrity": "sha1-eUfkIUmvgNaWy/eXvKq8/h/inKg=",
            "dev": true,
            "requires": {
                "graceful-fs": "^4.1.2",
                "parse-json": "^2.2.0",
                "pify": "^2.0.0",
                "strip-bom": "^3.0.0"
            },
            "dependencies": {
                "parse-json": {
                    "version": "2.2.0",
                    "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz",
                    "integrity": "sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=",
                    "dev": true,
                    "requires": {
                        "error-ex": "^1.2.0"
                    }
                },
                "pify": {
                    "version": "2.3.0",
                    "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
                    "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
                    "dev": true
                }
            }
        },
        "loader-runner": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/loader-runner/-/loader-runner-2.4.0.tgz",
            "integrity": "sha512-Jsmr89RcXGIwivFY21FcRrisYZfvLMTWx5kOLc+JTxtpBOG6xML0vzbc6SEQG2FO9/4Fc3wW4LVcB5DmGflaRw==",
            "dev": true
        },
        "loader-utils": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-2.0.0.tgz",
            "integrity": "sha512-rP4F0h2RaWSvPEkD7BLDFQnvSf+nK+wr3ESUjNTyAGobqrijmW92zc+SO6d4p4B1wh7+B/Jg1mkQe5NYUEHtHQ==",
            "dev": true,
            "requires": {
                "big.js": "^5.2.2",
                "emojis-list": "^3.0.0",
                "json5": "^2.1.2"
            }
        },
        "locate-path": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
            "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
            "dev": true,
            "requires": {
                "p-locate": "^3.0.0",
                "path-exists": "^3.0.0"
            }
        },
        "lodash": {
            "version": "4.17.20",
            "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz",
            "integrity": "sha512-PlhdFcillOINfeV7Ni6oF1TAEayyZBoZ8bcshTHqOYJYlrqzRK5hagpagky5o4HfCzzd1TRkXPMFq6cKk9rGmA=="
        },
        "lodash-id": {
            "version": "0.14.0",
            "resolved": "https://registry.npmjs.org/lodash-id/-/lodash-id-0.14.0.tgz",
            "integrity": "sha1-uvSJNOVDobXWNG+MhGmLGoyAOJY=",
            "dev": true
        },
        "lodash.memoize": {
            "version": "4.1.2",
            "resolved": "https://registry.npmjs.org/lodash.memoize/-/lodash.memoize-4.1.2.tgz",
            "integrity": "sha1-vMbEmkKihA7Zl/Mj6tpezRguC/4=",
            "dev": true
        },
        "lodash.sortby": {
            "version": "4.7.0",
            "resolved": "https://registry.npmjs.org/lodash.sortby/-/lodash.sortby-4.7.0.tgz",
            "integrity": "sha1-7dFMgk4sycHgsKG0K7UhBRakJDg=",
            "dev": true
        },
        "lodash.uniq": {
            "version": "4.5.0",
            "resolved": "https://registry.npmjs.org/lodash.uniq/-/lodash.uniq-4.5.0.tgz",
            "integrity": "sha1-0CJTc662Uq3BvILklFM5qEJ1R3M=",
            "dev": true
        },
        "log-symbols": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-4.0.0.tgz",
            "integrity": "sha512-FN8JBzLx6CzeMrB0tg6pqlGU1wCrXW+ZXGH481kfsBqer0hToTIiHdjH4Mq8xJUbvATujKCvaREGWpGUionraA==",
            "requires": {
                "chalk": "^4.0.0"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "log-update": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/log-update/-/log-update-4.0.0.tgz",
            "integrity": "sha512-9fkkDevMefjg0mmzWFBW8YkFP91OrizzkW3diF7CpG+S2EYdy4+TVfGwz1zeF8x7hCx1ovSPTOE9Ngib74qqUg==",
            "dev": true,
            "requires": {
                "ansi-escapes": "^4.3.0",
                "cli-cursor": "^3.1.0",
                "slice-ansi": "^4.0.0",
                "wrap-ansi": "^6.2.0"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "astral-regex": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/astral-regex/-/astral-regex-2.0.0.tgz",
                    "integrity": "sha512-Z7tMw1ytTXt5jqMcOP+OQteU1VuNK9Y02uuJtKQ1Sv69jXQKKg5cibLwGJow8yzZP+eAc18EmLGPal0bp36rvQ==",
                    "dev": true
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "slice-ansi": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-4.0.0.tgz",
                    "integrity": "sha512-qMCMfhY040cVHT43K9BFygqYbUPFZKHOg7K73mtTWJRb8pyP3fzf4Ixd5SzdEJQ6MRUg/WBnOLxghZtKKurENQ==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.0.0",
                        "astral-regex": "^2.0.0",
                        "is-fullwidth-code-point": "^3.0.0"
                    }
                },
                "wrap-ansi": {
                    "version": "6.2.0",
                    "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-6.2.0.tgz",
                    "integrity": "sha512-r6lPcBGxZXlIcymEu7InxDMhdW0KDxpLgoFLcguasxCaJ/SOIZwINatK9KY/tf+ZrlywOKU0UDj3ATXUBfxJXA==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.0.0",
                        "string-width": "^4.1.0",
                        "strip-ansi": "^6.0.0"
                    }
                }
            }
        },
        "loglevel": {
            "version": "1.7.0",
            "resolved": "https://registry.npmjs.org/loglevel/-/loglevel-1.7.0.tgz",
            "integrity": "sha512-i2sY04nal5jDcagM3FMfG++T69GEEM8CYuOfeOIvmXzOIcwE9a/CJPR0MFM97pYMj/u10lzz7/zd7+qwhrBTqQ==",
            "dev": true
        },
        "lowdb": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/lowdb/-/lowdb-1.0.0.tgz",
            "integrity": "sha512-2+x8esE/Wb9SQ1F9IHaYWfsC9FIecLOPrK4g17FGEayjUWH172H6nwicRovGvSE2CPZouc2MCIqCI7h9d+GftQ==",
            "dev": true,
            "requires": {
                "graceful-fs": "^4.1.3",
                "is-promise": "^2.1.0",
                "lodash": "4",
                "pify": "^3.0.0",
                "steno": "^0.4.1"
            },
            "dependencies": {
                "pify": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
                    "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY=",
                    "dev": true
                }
            }
        },
        "lowercase-keys": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-1.0.1.tgz",
            "integrity": "sha512-G2Lj61tXDnVFFOi8VZds+SoQjtQC3dgokKdDG2mTm1tx4m50NUHBOZSBwQQHyy0V12A0JTG4icfZQH+xPyh8VA==",
            "dev": true
        },
        "lru-cache": {
            "version": "6.0.0",
            "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
            "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
            "dev": true,
            "requires": {
                "yallist": "^4.0.0"
            }
        },
        "magic-string": {
            "version": "0.25.7",
            "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.25.7.tgz",
            "integrity": "sha512-4CrMT5DOHTDk4HYDlzmwu4FVCcIYI8gauveasrdCu2IKIFOJ3f0v/8MDGJCDL9oD2ppz/Av1b0Nj345H9M+XIA==",
            "requires": {
                "sourcemap-codec": "^1.4.4"
            }
        },
        "make-dir": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
            "integrity": "sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==",
            "dev": true,
            "requires": {
                "pify": "^4.0.1",
                "semver": "^5.6.0"
            },
            "dependencies": {
                "semver": {
                    "version": "5.7.1",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
                    "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
                    "dev": true
                }
            }
        },
        "make-error": {
            "version": "1.3.6",
            "resolved": "https://registry.npmjs.org/make-error/-/make-error-1.3.6.tgz",
            "integrity": "sha512-s8UhlNe7vPKomQhC1qFelMokr/Sc3AgNbso3n74mVPA5LTZwkB9NlXf4XPamLxJE8h0gh73rM94xvwRT2CVInw==",
            "dev": true
        },
        "make-fetch-happen": {
            "version": "5.0.2",
            "resolved": "https://registry.npmjs.org/make-fetch-happen/-/make-fetch-happen-5.0.2.tgz",
            "integrity": "sha512-07JHC0r1ykIoruKO8ifMXu+xEU8qOXDFETylktdug6vJDACnP+HKevOu3PXyNPzFyTSlz8vrBYlBO1JZRe8Cag==",
            "dev": true,
            "requires": {
                "agentkeepalive": "^3.4.1",
                "cacache": "^12.0.0",
                "http-cache-semantics": "^3.8.1",
                "http-proxy-agent": "^2.1.0",
                "https-proxy-agent": "^2.2.3",
                "lru-cache": "^5.1.1",
                "mississippi": "^3.0.0",
                "node-fetch-npm": "^2.0.2",
                "promise-retry": "^1.1.1",
                "socks-proxy-agent": "^4.0.0",
                "ssri": "^6.0.0"
            },
            "dependencies": {
                "cacache": {
                    "version": "12.0.4",
                    "resolved": "https://registry.npmjs.org/cacache/-/cacache-12.0.4.tgz",
                    "integrity": "sha512-a0tMB40oefvuInr4Cwb3GerbL9xTj1D5yg0T5xrjGCGyfvbxseIXX7BAO/u/hIXdafzOI5JC3wDwHyf24buOAQ==",
                    "dev": true,
                    "requires": {
                        "bluebird": "^3.5.5",
                        "chownr": "^1.1.1",
                        "figgy-pudding": "^3.5.1",
                        "glob": "^7.1.4",
                        "graceful-fs": "^4.1.15",
                        "infer-owner": "^1.0.3",
                        "lru-cache": "^5.1.1",
                        "mississippi": "^3.0.0",
                        "mkdirp": "^0.5.1",
                        "move-concurrently": "^1.0.1",
                        "promise-inflight": "^1.0.1",
                        "rimraf": "^2.6.3",
                        "ssri": "^6.0.1",
                        "unique-filename": "^1.1.1",
                        "y18n": "^4.0.0"
                    }
                },
                "chownr": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/chownr/-/chownr-1.1.4.tgz",
                    "integrity": "sha512-jJ0bqzaylmJtVnNgzTeSOs8DPavpbYgEr/b0YL8/2GO3xJEhInFmhKMUnEJQjZumK7KXGFhUy89PrsJWlakBVg==",
                    "dev": true
                },
                "lru-cache": {
                    "version": "5.1.1",
                    "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
                    "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
                    "dev": true,
                    "requires": {
                        "yallist": "^3.0.2"
                    }
                },
                "rimraf": {
                    "version": "2.7.1",
                    "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
                    "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
                    "dev": true,
                    "requires": {
                        "glob": "^7.1.3"
                    }
                },
                "ssri": {
                    "version": "6.0.1",
                    "resolved": "https://registry.npmjs.org/ssri/-/ssri-6.0.1.tgz",
                    "integrity": "sha512-3Wge10hNcT1Kur4PDFwEieXSCMCJs/7WvSACcrMYrNp+b8kDL1/0wJch5Ni2WrtwEa2IO8OsVfeKIciKCDx/QA==",
                    "dev": true,
                    "requires": {
                        "figgy-pudding": "^3.5.1"
                    }
                },
                "yallist": {
                    "version": "3.1.1",
                    "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
                    "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
                    "dev": true
                }
            }
        },
        "makeerror": {
            "version": "1.0.11",
            "resolved": "https://registry.npmjs.org/makeerror/-/makeerror-1.0.11.tgz",
            "integrity": "sha1-4BpckQnyr3lmDk6LlYd5AYT1qWw=",
            "dev": true,
            "requires": {
                "tmpl": "1.0.x"
            }
        },
        "map-cache": {
            "version": "0.2.2",
            "resolved": "https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz",
            "integrity": "sha1-wyq9C9ZSXZsFFkW7TyasXcmKDb8=",
            "dev": true
        },
        "map-visit": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/map-visit/-/map-visit-1.0.0.tgz",
            "integrity": "sha1-7Nyo8TFE5mDxtb1B8S80edmN+48=",
            "dev": true,
            "requires": {
                "object-visit": "^1.0.0"
            }
        },
        "md5.js": {
            "version": "1.3.5",
            "resolved": "https://registry.npmjs.org/md5.js/-/md5.js-1.3.5.tgz",
            "integrity": "sha512-xitP+WxNPcTTOgnTJcrhM0xvdPepipPSf3I8EIpGKeFLjt3PlJLIDG3u8EX53ZIubkb+5U2+3rELYpEhHhzdkg==",
            "dev": true,
            "requires": {
                "hash-base": "^3.0.0",
                "inherits": "^2.0.1",
                "safe-buffer": "^5.1.2"
            }
        },
        "mdn-data": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.0.4.tgz",
            "integrity": "sha512-iV3XNKw06j5Q7mi6h+9vbx23Tv7JkjEVgKHW4pimwyDGWm0OIQntJJ+u1C6mg6mK1EaTv42XQ7w76yuzH7M2cA==",
            "dev": true
        },
        "media-typer": {
            "version": "0.3.0",
            "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
            "integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g=",
            "dev": true
        },
        "memory-fs": {
            "version": "0.4.1",
            "resolved": "https://registry.npmjs.org/memory-fs/-/memory-fs-0.4.1.tgz",
            "integrity": "sha1-OpoguEYlI+RHz7x+i7gO1me/xVI=",
            "dev": true,
            "requires": {
                "errno": "^0.1.3",
                "readable-stream": "^2.0.1"
            }
        },
        "merge-descriptors": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
            "integrity": "sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E=",
            "dev": true
        },
        "merge-source-map": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/merge-source-map/-/merge-source-map-1.1.0.tgz",
            "integrity": "sha512-Qkcp7P2ygktpMPh2mCQZaf3jhN6D3Z/qVZHSdWvQ+2Ef5HgRAPBO57A77+ENm0CPx2+1Ce/MYKi3ymqdfuqibw==",
            "dev": true,
            "requires": {
                "source-map": "^0.6.1"
            },
            "dependencies": {
                "source-map": {
                    "version": "0.6.1",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                    "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                    "dev": true
                }
            }
        },
        "merge-stream": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
            "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
            "dev": true
        },
        "merge2": {
            "version": "1.4.1",
            "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
            "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
            "dev": true
        },
        "method-override": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/method-override/-/method-override-3.0.0.tgz",
            "integrity": "sha512-IJ2NNN/mSl9w3kzWB92rcdHpz+HjkxhDJWNDBqSlas+zQdP8wBiJzITPg08M/k2uVvMow7Sk41atndNtt/PHSA==",
            "dev": true,
            "requires": {
                "debug": "3.1.0",
                "methods": "~1.1.2",
                "parseurl": "~1.3.2",
                "vary": "~1.1.2"
            },
            "dependencies": {
                "debug": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-3.1.0.tgz",
                    "integrity": "sha512-OX8XqP7/1a9cqkxYw2yXss15f26NKWBpDXQd0/uK/KPqdQhxbPa994hnzjcE2VqQpDslf55723cKPUOGSmMY3g==",
                    "dev": true,
                    "requires": {
                        "ms": "2.0.0"
                    }
                },
                "ms": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                    "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
                    "dev": true
                }
            }
        },
        "methods": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
            "integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4=",
            "dev": true
        },
        "micromatch": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.2.tgz",
            "integrity": "sha512-y7FpHSbMUMoyPbYUSzO6PaZ6FyRnQOpHuKwbo1G+Knck95XVU4QAiKdGEnj5wwoS7PlOgthX/09u5iFJ+aYf5Q==",
            "dev": true,
            "requires": {
                "braces": "^3.0.1",
                "picomatch": "^2.0.5"
            }
        },
        "miller-rabin": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/miller-rabin/-/miller-rabin-4.0.1.tgz",
            "integrity": "sha512-115fLhvZVqWwHPbClyntxEVfVDfl9DLLTuJvq3g2O/Oxi8AiNouAHvDSzHS0viUJc+V5vm3eq91Xwqn9dp4jRA==",
            "dev": true,
            "requires": {
                "bn.js": "^4.0.0",
                "brorand": "^1.0.1"
            },
            "dependencies": {
                "bn.js": {
                    "version": "4.11.9",
                    "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
                    "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
                    "dev": true
                }
            }
        },
        "mime": {
            "version": "1.6.0",
            "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
            "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
            "dev": true
        },
        "mime-db": {
            "version": "1.44.0",
            "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.44.0.tgz",
            "integrity": "sha512-/NOTfLrsPBVeH7YtFPgsVWveuL+4SjjYxaQ1xtM1KMFj7HdxlBlxeyNLzhyJVx7r4rZGJAZ/6lkKCitSc/Nmpg==",
            "dev": true
        },
        "mime-types": {
            "version": "2.1.27",
            "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.27.tgz",
            "integrity": "sha512-JIhqnCasI9yD+SsmkquHBxTSEuZdQX5BuQnS2Vc7puQQQ+8yiP5AY5uWhpdv4YL4VM5c6iliiYWPgJ/nJQLp7w==",
            "dev": true,
            "requires": {
                "mime-db": "1.44.0"
            }
        },
        "mimic-fn": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
            "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg=="
        },
        "mimic-response": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/mimic-response/-/mimic-response-1.0.1.tgz",
            "integrity": "sha512-j5EctnkH7amfV/q5Hgmoal1g2QHFJRraOtmx0JpIqkxhBhI/lJSl1nMpQ45hVarwNETOoWEimndZ4QK0RHxuxQ==",
            "dev": true
        },
        "mini-css-extract-plugin": {
            "version": "1.2.1",
            "resolved": "https://registry.npmjs.org/mini-css-extract-plugin/-/mini-css-extract-plugin-1.2.1.tgz",
            "integrity": "sha512-G3yw7/TQaPfkuiR73MDcyiqhyP8SnbmLhUbpC76H+wtQxA6wfKhMCQOCb6wnPK0dQbjORAeOILQqEesg4/wF7A==",
            "dev": true,
            "requires": {
                "loader-utils": "^2.0.0",
                "schema-utils": "^3.0.0",
                "webpack-sources": "^1.1.0"
            },
            "dependencies": {
                "schema-utils": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.0.0.tgz",
                    "integrity": "sha512-6D82/xSzO094ajanoOSbe4YvXWMfn2A//8Y1+MUqFAJul5Bs+yn36xbK9OtNDcRVSBJ9jjeoXftM6CfztsjOAA==",
                    "dev": true,
                    "requires": {
                        "@types/json-schema": "^7.0.6",
                        "ajv": "^6.12.5",
                        "ajv-keywords": "^3.5.2"
                    }
                },
                "source-map": {
                    "version": "0.6.1",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                    "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                    "dev": true
                },
                "webpack-sources": {
                    "version": "1.4.3",
                    "resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-1.4.3.tgz",
                    "integrity": "sha512-lgTS3Xhv1lCOKo7SA5TjKXMjpSM4sBjNV5+q2bqesbSPs5FjGmU6jjtBSkX9b4qW87vDIsCIlUPOEhbZrMdjeQ==",
                    "dev": true,
                    "requires": {
                        "source-list-map": "^2.0.0",
                        "source-map": "~0.6.1"
                    }
                }
            }
        },
        "minimalistic-assert": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/minimalistic-assert/-/minimalistic-assert-1.0.1.tgz",
            "integrity": "sha512-UtJcAD4yEaGtjPezWuO9wC4nwUnVH/8/Im3yEHQP4b67cXlD/Qr9hdITCU1xDbSEXg2XKNaP8jsReV7vQd00/A==",
            "dev": true
        },
        "minimalistic-crypto-utils": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/minimalistic-crypto-utils/-/minimalistic-crypto-utils-1.0.1.tgz",
            "integrity": "sha1-9sAMHAsIIkblxNmd+4x8CDsrWCo=",
            "dev": true
        },
        "minimatch": {
            "version": "3.0.4",
            "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
            "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
            "dev": true,
            "requires": {
                "brace-expansion": "^1.1.7"
            }
        },
        "minimist": {
            "version": "1.2.5",
            "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
            "integrity": "sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw==",
            "dev": true
        },
        "minipass": {
            "version": "3.1.3",
            "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.1.3.tgz",
            "integrity": "sha512-Mgd2GdMVzY+x3IJ+oHnVM+KG3lA5c8tnabyJKmHSaG2kAGpudxuOf8ToDkhumF7UzME7DecbQE9uOZhNm7PuJg==",
            "dev": true,
            "requires": {
                "yallist": "^4.0.0"
            }
        },
        "minipass-collect": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/minipass-collect/-/minipass-collect-1.0.2.tgz",
            "integrity": "sha512-6T6lH0H8OG9kITm/Jm6tdooIbogG9e0tLgpY6mphXSm/A9u8Nq1ryBG+Qspiub9LjWlBPsPS3tWQ/Botq4FdxA==",
            "dev": true,
            "requires": {
                "minipass": "^3.0.0"
            }
        },
        "minipass-flush": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/minipass-flush/-/minipass-flush-1.0.5.tgz",
            "integrity": "sha512-JmQSYYpPUqX5Jyn1mXaRwOda1uQ8HP5KAT/oDSLCzt1BYRhQU0/hDtsB1ufZfEEzMZ9aAVmsBw8+FWsIXlClWw==",
            "dev": true,
            "requires": {
                "minipass": "^3.0.0"
            }
        },
        "minipass-pipeline": {
            "version": "1.2.4",
            "resolved": "https://registry.npmjs.org/minipass-pipeline/-/minipass-pipeline-1.2.4.tgz",
            "integrity": "sha512-xuIq7cIOt09RPRJ19gdi4b+RiNvDFYe5JH+ggNvBqGqpQXcru3PcRmOZuHBKWK1Txf9+cQ+HMVN4d6z46LZP7A==",
            "dev": true,
            "requires": {
                "minipass": "^3.0.0"
            }
        },
        "minizlib": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/minizlib/-/minizlib-2.1.2.tgz",
            "integrity": "sha512-bAxsR8BVfj60DWXHE3u30oHzfl4G7khkSuPW+qvpd7jFRHm7dLxOjUk1EHACJ/hxLY8phGJ0YhYHZo7jil7Qdg==",
            "dev": true,
            "requires": {
                "minipass": "^3.0.0",
                "yallist": "^4.0.0"
            }
        },
        "mississippi": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/mississippi/-/mississippi-3.0.0.tgz",
            "integrity": "sha512-x471SsVjUtBRtcvd4BzKE9kFC+/2TeWgKCgw0bZcw1b9l2X3QX5vCWgF+KaZaYm87Ss//rHnWryupDrgLvmSkA==",
            "dev": true,
            "requires": {
                "concat-stream": "^1.5.0",
                "duplexify": "^3.4.2",
                "end-of-stream": "^1.1.0",
                "flush-write-stream": "^1.0.0",
                "from2": "^2.1.0",
                "parallel-transform": "^1.1.0",
                "pump": "^3.0.0",
                "pumpify": "^1.3.3",
                "stream-each": "^1.1.0",
                "through2": "^2.0.0"
            }
        },
        "mixin-deep": {
            "version": "1.3.2",
            "resolved": "https://registry.npmjs.org/mixin-deep/-/mixin-deep-1.3.2.tgz",
            "integrity": "sha512-WRoDn//mXBiJ1H40rqa3vH0toePwSsGb45iInWlTySa+Uu4k3tYUSxa2v1KqAiLtvlrSzaExqS1gtk96A9zvEA==",
            "dev": true,
            "requires": {
                "for-in": "^1.0.2",
                "is-extendable": "^1.0.1"
            },
            "dependencies": {
                "is-extendable": {
                    "version": "1.0.1",
                    "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
                    "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
                    "dev": true,
                    "requires": {
                        "is-plain-object": "^2.0.4"
                    }
                }
            }
        },
        "mkdirp": {
            "version": "0.5.5",
            "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
            "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
            "dev": true,
            "requires": {
                "minimist": "^1.2.5"
            }
        },
        "moment": {
            "version": "2.29.1",
            "resolved": "https://registry.npmjs.org/moment/-/moment-2.29.1.tgz",
            "integrity": "sha512-kHmoybcPV8Sqy59DwNDY3Jefr64lK/by/da0ViFcuA4DH0vQg5Q6Ze5VimxkfQNSC+Mls/Kx53s7TjP1RhFEDQ=="
        },
        "morgan": {
            "version": "1.10.0",
            "resolved": "https://registry.npmjs.org/morgan/-/morgan-1.10.0.tgz",
            "integrity": "sha512-AbegBVI4sh6El+1gNwvD5YIck7nSA36weD7xvIxG4in80j/UoK8AEGaWnnz8v1GxonMCltmlNs5ZKbGvl9b1XQ==",
            "dev": true,
            "requires": {
                "basic-auth": "~2.0.1",
                "debug": "2.6.9",
                "depd": "~2.0.0",
                "on-finished": "~2.3.0",
                "on-headers": "~1.0.2"
            },
            "dependencies": {
                "debug": {
                    "version": "2.6.9",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                    "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                    "dev": true,
                    "requires": {
                        "ms": "2.0.0"
                    }
                },
                "depd": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
                    "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
                    "dev": true
                },
                "ms": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                    "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
                    "dev": true
                }
            }
        },
        "move-concurrently": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/move-concurrently/-/move-concurrently-1.0.1.tgz",
            "integrity": "sha1-viwAX9oy4LKa8fBdfEszIUxwH5I=",
            "dev": true,
            "requires": {
                "aproba": "^1.1.1",
                "copy-concurrently": "^1.0.0",
                "fs-write-stream-atomic": "^1.0.8",
                "mkdirp": "^0.5.1",
                "rimraf": "^2.5.4",
                "run-queue": "^1.0.3"
            },
            "dependencies": {
                "rimraf": {
                    "version": "2.7.1",
                    "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
                    "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
                    "dev": true,
                    "requires": {
                        "glob": "^7.1.3"
                    }
                }
            }
        },
        "ms": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
            "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
            "dev": true
        },
        "multicast-dns": {
            "version": "6.2.3",
            "resolved": "https://registry.npmjs.org/multicast-dns/-/multicast-dns-6.2.3.tgz",
            "integrity": "sha512-ji6J5enbMyGRHIAkAOu3WdV8nggqviKCEKtXcOqfphZZtQrmHKycfynJ2V7eVPUA4NhJ6V7Wf4TmGbTwKE9B6g==",
            "dev": true,
            "requires": {
                "dns-packet": "^1.3.1",
                "thunky": "^1.0.2"
            }
        },
        "multicast-dns-service-types": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/multicast-dns-service-types/-/multicast-dns-service-types-1.1.0.tgz",
            "integrity": "sha1-iZ8R2WhuXgXLkbNdXw5jt3PPyQE=",
            "dev": true
        },
        "mute-stream": {
            "version": "0.0.8",
            "resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-0.0.8.tgz",
            "integrity": "sha512-nnbWWOkoWyUsTjKrhgD0dcz22mdkSnpYqbEjIm2nhwhuxlSkpywJmBo8h0ZqJdkp73mb90SssHkN4rsRaBAfAA=="
        },
        "nanoid": {
            "version": "3.1.17",
            "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.1.17.tgz",
            "integrity": "sha512-5mmlQz73ohlISpARejqTwgYzh92wwBccatETsLOI+VKkY6Lx/Dj3wvG7tCoKjX+eEaZWn0gB7Xkfl5JatHQTeA==",
            "dev": true
        },
        "nanomatch": {
            "version": "1.2.13",
            "resolved": "https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.13.tgz",
            "integrity": "sha512-fpoe2T0RbHwBTBUOftAfBPaDEi06ufaUai0mE6Yn1kacc3SnTErfb/h+X94VXzI64rKFHYImXSvdwGGCmwOqCA==",
            "dev": true,
            "requires": {
                "arr-diff": "^4.0.0",
                "array-unique": "^0.3.2",
                "define-property": "^2.0.2",
                "extend-shallow": "^3.0.2",
                "fragment-cache": "^0.2.1",
                "is-windows": "^1.0.2",
                "kind-of": "^6.0.2",
                "object.pick": "^1.3.0",
                "regex-not": "^1.0.0",
                "snapdragon": "^0.8.1",
                "to-regex": "^3.0.1"
            }
        },
        "native-request": {
            "version": "1.0.8",
            "resolved": "https://registry.npmjs.org/native-request/-/native-request-1.0.8.tgz",
            "integrity": "sha512-vU2JojJVelUGp6jRcLwToPoWGxSx23z/0iX+I77J3Ht17rf2INGjrhOoQnjVo60nQd8wVsgzKkPfRXBiVdD2ag==",
            "dev": true,
            "optional": true
        },
        "natural-compare": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
            "integrity": "sha1-Sr6/7tdUHywnrPspvbvRXI1bpPc=",
            "dev": true
        },
        "negotiator": {
            "version": "0.6.2",
            "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.2.tgz",
            "integrity": "sha512-hZXc7K2e+PgeI1eDBe/10Ard4ekbfrrqG8Ep+8Jmf4JID2bNg7NvCPOZN+kfF574pFQI7mum2AUqDidoKqcTOw==",
            "dev": true
        },
        "neo-async": {
            "version": "2.6.2",
            "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz",
            "integrity": "sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw==",
            "dev": true
        },
        "next-tick": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/next-tick/-/next-tick-1.0.0.tgz",
            "integrity": "sha1-yobR/ogoFpsBICCOPchCS524NCw=",
            "dev": true
        },
        "ngx-toastr": {
            "version": "13.1.0",
            "resolved": "https://registry.npmjs.org/ngx-toastr/-/ngx-toastr-13.1.0.tgz",
            "integrity": "sha512-TS4rIfg/oPmmjKadsXLSNIN/A9LktcYPZayGhqLpzcjMud7XLLubLqbrmnH34UakMrUq6QCXXYYiU0QTMW5Qhw==",
            "requires": {
                "tslib": "^2.0.0"
            }
        },
        "nice-try": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.5.tgz",
            "integrity": "sha512-1nh45deeb5olNY7eX82BkPO7SSxR5SSYJiPTrTdFUVYwAl8CKMA5N9PjTYkHiRjisVcxcQ1HXdLhx2qxxJzLNQ==",
            "dev": true
        },
        "node-fetch-npm": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/node-fetch-npm/-/node-fetch-npm-2.0.4.tgz",
            "integrity": "sha512-iOuIQDWDyjhv9qSDrj9aq/klt6F9z1p2otB3AV7v3zBDcL/x+OfGsvGQZZCcMZbUf4Ujw1xGNQkjvGnVT22cKg==",
            "dev": true,
            "requires": {
                "encoding": "^0.1.11",
                "json-parse-better-errors": "^1.0.0",
                "safe-buffer": "^5.1.1"
            }
        },
        "node-forge": {
            "version": "0.10.0",
            "resolved": "https://registry.npmjs.org/node-forge/-/node-forge-0.10.0.tgz",
            "integrity": "sha512-PPmu8eEeG9saEUvI97fm4OYxXVB6bFvyNTyiUOBichBpFG8A1Ljw3bY62+5oOjDEMHRnd0Y7HQ+x7uzxOzC6JA==",
            "dev": true
        },
        "node-int64": {
            "version": "0.4.0",
            "resolved": "https://registry.npmjs.org/node-int64/-/node-int64-0.4.0.tgz",
            "integrity": "sha1-h6kGXNs1XTGC2PlM4RGIuCXGijs=",
            "dev": true
        },
        "node-libs-browser": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/node-libs-browser/-/node-libs-browser-2.2.1.tgz",
            "integrity": "sha512-h/zcD8H9kaDZ9ALUWwlBUDo6TKF8a7qBSCSEGfjTVIYeqsioSKaAX+BN7NgiMGp6iSIXZ3PxgCu8KS3b71YK5Q==",
            "dev": true,
            "requires": {
                "assert": "^1.1.1",
                "browserify-zlib": "^0.2.0",
                "buffer": "^4.3.0",
                "console-browserify": "^1.1.0",
                "constants-browserify": "^1.0.0",
                "crypto-browserify": "^3.11.0",
                "domain-browser": "^1.1.1",
                "events": "^3.0.0",
                "https-browserify": "^1.0.0",
                "os-browserify": "^0.3.0",
                "path-browserify": "0.0.1",
                "process": "^0.11.10",
                "punycode": "^1.2.4",
                "querystring-es3": "^0.2.0",
                "readable-stream": "^2.3.3",
                "stream-browserify": "^2.0.1",
                "stream-http": "^2.7.2",
                "string_decoder": "^1.0.0",
                "timers-browserify": "^2.0.4",
                "tty-browserify": "0.0.0",
                "url": "^0.11.0",
                "util": "^0.11.0",
                "vm-browserify": "^1.0.1"
            },
            "dependencies": {
                "punycode": {
                    "version": "1.4.1",
                    "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.4.1.tgz",
                    "integrity": "sha1-wNWmOycYgArY4esPpSachN1BhF4=",
                    "dev": true
                }
            }
        },
        "node-modules-regexp": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/node-modules-regexp/-/node-modules-regexp-1.0.0.tgz",
            "integrity": "sha1-jZ2+KJZKSsVxLpExZCEHxx6Q7EA=",
            "dev": true
        },
        "node-notifier": {
            "version": "8.0.0",
            "resolved": "https://registry.npmjs.org/node-notifier/-/node-notifier-8.0.0.tgz",
            "integrity": "sha512-46z7DUmcjoYdaWyXouuFNNfUo6eFa94t23c53c+lG/9Cvauk4a98rAUp9672X5dxGdQmLpPzTxzu8f/OeEPaFA==",
            "dev": true,
            "optional": true,
            "requires": {
                "growly": "^1.3.0",
                "is-wsl": "^2.2.0",
                "semver": "^7.3.2",
                "shellwords": "^0.1.1",
                "uuid": "^8.3.0",
                "which": "^2.0.2"
            },
            "dependencies": {
                "uuid": {
                    "version": "8.3.1",
                    "resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.1.tgz",
                    "integrity": "sha512-FOmRr+FmWEIG8uhZv6C2bTgEVXsHk08kE7mPlrBbEe+c3r9pjceVPgupIfNIhc4yx55H69OXANrUaSuu9eInKg==",
                    "dev": true,
                    "optional": true
                },
                "which": {
                    "version": "2.0.2",
                    "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
                    "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
                    "dev": true,
                    "optional": true,
                    "requires": {
                        "isexe": "^2.0.0"
                    }
                }
            }
        },
        "node-releases": {
            "version": "1.1.67",
            "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-1.1.67.tgz",
            "integrity": "sha512-V5QF9noGFl3EymEwUYzO+3NTDpGfQB4ve6Qfnzf3UNydMhjQRVPR1DZTuvWiLzaFJYw2fmDwAfnRNEVb64hSIg==",
            "dev": true
        },
        "normalize-package-data": {
            "version": "2.5.0",
            "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
            "integrity": "sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==",
            "dev": true,
            "requires": {
                "hosted-git-info": "^2.1.4",
                "resolve": "^1.10.0",
                "semver": "2 || 3 || 4 || 5",
                "validate-npm-package-license": "^3.0.1"
            },
            "dependencies": {
                "hosted-git-info": {
                    "version": "2.8.8",
                    "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.8.tgz",
                    "integrity": "sha512-f/wzC2QaWBs7t9IYqB4T3sR1xviIViXJRJTWBlx2Gf3g0Xi5vI7Yy4koXQ1c9OYDGHN9sBy1DQ2AB8fqZBWhUg==",
                    "dev": true
                },
                "semver": {
                    "version": "5.7.1",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
                    "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
                    "dev": true
                }
            }
        },
        "normalize-path": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
            "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
            "dev": true
        },
        "normalize-range": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz",
            "integrity": "sha1-LRDAa9/TEuqXd2laTShDlFa3WUI=",
            "dev": true
        },
        "normalize-url": {
            "version": "3.3.0",
            "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-3.3.0.tgz",
            "integrity": "sha512-U+JJi7duF1o+u2pynbp2zXDW2/PADgC30f0GsHZtRh+HOcXHnw137TrNlyxxRvWW5fjKd3bcLHPxofWuCjaeZg==",
            "dev": true
        },
        "npm-bundled": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/npm-bundled/-/npm-bundled-1.1.1.tgz",
            "integrity": "sha512-gqkfgGePhTpAEgUsGEgcq1rqPXA+tv/aVBlgEzfXwA1yiUJF7xtEt3CtVwOjNYQOVknDk0F20w58Fnm3EtG0fA==",
            "dev": true,
            "requires": {
                "npm-normalize-package-bin": "^1.0.1"
            }
        },
        "npm-install-checks": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/npm-install-checks/-/npm-install-checks-4.0.0.tgz",
            "integrity": "sha512-09OmyDkNLYwqKPOnbI8exiOZU2GVVmQp7tgez2BPi5OZC8M82elDAps7sxC4l//uSUtotWqoEIDwjRvWH4qz8w==",
            "dev": true,
            "requires": {
                "semver": "^7.1.1"
            }
        },
        "npm-normalize-package-bin": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/npm-normalize-package-bin/-/npm-normalize-package-bin-1.0.1.tgz",
            "integrity": "sha512-EPfafl6JL5/rU+ot6P3gRSCpPDW5VmIzX959Ob1+ySFUuuYHWHekXpwdUZcKP5C+DS4GEtdJluwBjnsNDl+fSA==",
            "dev": true
        },
        "npm-package-arg": {
            "version": "8.1.0",
            "resolved": "https://registry.npmjs.org/npm-package-arg/-/npm-package-arg-8.1.0.tgz",
            "integrity": "sha512-/ep6QDxBkm9HvOhOg0heitSd7JHA1U7y1qhhlRlteYYAi9Pdb/ZV7FW5aHpkrpM8+P+4p/jjR8zCyKPBMBjSig==",
            "dev": true,
            "requires": {
                "hosted-git-info": "^3.0.6",
                "semver": "^7.0.0",
                "validate-npm-package-name": "^3.0.0"
            }
        },
        "npm-packlist": {
            "version": "1.4.8",
            "resolved": "https://registry.npmjs.org/npm-packlist/-/npm-packlist-1.4.8.tgz",
            "integrity": "sha512-5+AZgwru5IevF5ZdnFglB5wNlHG1AOOuw28WhUq8/8emhBmLv6jX5by4WJCh7lW0uSYZYS6DXqIsyZVIXRZU9A==",
            "dev": true,
            "requires": {
                "ignore-walk": "^3.0.1",
                "npm-bundled": "^1.0.1",
                "npm-normalize-package-bin": "^1.0.1"
            }
        },
        "npm-pick-manifest": {
            "version": "6.1.0",
            "resolved": "https://registry.npmjs.org/npm-pick-manifest/-/npm-pick-manifest-6.1.0.tgz",
            "integrity": "sha512-ygs4k6f54ZxJXrzT0x34NybRlLeZ4+6nECAIbr2i0foTnijtS1TJiyzpqtuUAJOps/hO0tNDr8fRV5g+BtRlTw==",
            "dev": true,
            "requires": {
                "npm-install-checks": "^4.0.0",
                "npm-package-arg": "^8.0.0",
                "semver": "^7.0.0"
            }
        },
        "npm-registry-fetch": {
            "version": "4.0.7",
            "resolved": "https://registry.npmjs.org/npm-registry-fetch/-/npm-registry-fetch-4.0.7.tgz",
            "integrity": "sha512-cny9v0+Mq6Tjz+e0erFAB+RYJ/AVGzkjnISiobqP8OWj9c9FLoZZu8/SPSKJWE17F1tk4018wfjV+ZbIbqC7fQ==",
            "dev": true,
            "requires": {
                "JSONStream": "^1.3.4",
                "bluebird": "^3.5.1",
                "figgy-pudding": "^3.4.1",
                "lru-cache": "^5.1.1",
                "make-fetch-happen": "^5.0.0",
                "npm-package-arg": "^6.1.0",
                "safe-buffer": "^5.2.0"
            },
            "dependencies": {
                "hosted-git-info": {
                    "version": "2.8.8",
                    "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.8.tgz",
                    "integrity": "sha512-f/wzC2QaWBs7t9IYqB4T3sR1xviIViXJRJTWBlx2Gf3g0Xi5vI7Yy4koXQ1c9OYDGHN9sBy1DQ2AB8fqZBWhUg==",
                    "dev": true
                },
                "lru-cache": {
                    "version": "5.1.1",
                    "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
                    "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
                    "dev": true,
                    "requires": {
                        "yallist": "^3.0.2"
                    }
                },
                "npm-package-arg": {
                    "version": "6.1.1",
                    "resolved": "https://registry.npmjs.org/npm-package-arg/-/npm-package-arg-6.1.1.tgz",
                    "integrity": "sha512-qBpssaL3IOZWi5vEKUKW0cO7kzLeT+EQO9W8RsLOZf76KF9E/K9+wH0C7t06HXPpaH8WH5xF1MExLuCwbTqRUg==",
                    "dev": true,
                    "requires": {
                        "hosted-git-info": "^2.7.1",
                        "osenv": "^0.1.5",
                        "semver": "^5.6.0",
                        "validate-npm-package-name": "^3.0.0"
                    }
                },
                "safe-buffer": {
                    "version": "5.2.1",
                    "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
                    "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
                    "dev": true
                },
                "semver": {
                    "version": "5.7.1",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
                    "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
                    "dev": true
                },
                "yallist": {
                    "version": "3.1.1",
                    "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
                    "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
                    "dev": true
                }
            }
        },
        "npm-run-path": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-2.0.2.tgz",
            "integrity": "sha1-NakjLfo11wZ7TLLd8jV7GHFTbF8=",
            "dev": true,
            "requires": {
                "path-key": "^2.0.0"
            }
        },
        "nth-check": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-1.0.2.tgz",
            "integrity": "sha512-WeBOdju8SnzPN5vTUJYxYUxLeXpCaVP5i5e0LF8fg7WORF2Wd7wFX/pk0tYZk7s8T+J7VLy0Da6J1+wCT0AtHg==",
            "dev": true,
            "requires": {
                "boolbase": "~1.0.0"
            }
        },
        "num2fraction": {
            "version": "1.2.2",
            "resolved": "https://registry.npmjs.org/num2fraction/-/num2fraction-1.2.2.tgz",
            "integrity": "sha1-b2gragJ6Tp3fpFZM0lidHU5mnt4=",
            "dev": true
        },
        "nwsapi": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/nwsapi/-/nwsapi-2.2.0.tgz",
            "integrity": "sha512-h2AatdwYH+JHiZpv7pt/gSX1XoRGb7L/qSIeuqA6GwYoF9w1vP1cw42TO0aI2pNyshRK5893hNSl+1//vHK7hQ==",
            "dev": true
        },
        "oauth-sign": {
            "version": "0.9.0",
            "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
            "integrity": "sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ==",
            "dev": true
        },
        "object-assign": {
            "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
            "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
            "dev": true
        },
        "object-copy": {
            "version": "0.1.0",
            "resolved": "https://registry.npmjs.org/object-copy/-/object-copy-0.1.0.tgz",
            "integrity": "sha1-fn2Fi3gb18mRpBupde04EnVOmYw=",
            "dev": true,
            "requires": {
                "copy-descriptor": "^0.1.0",
                "define-property": "^0.2.5",
                "kind-of": "^3.0.3"
            },
            "dependencies": {
                "define-property": {
                    "version": "0.2.5",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
                    "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
                    "dev": true,
                    "requires": {
                        "is-descriptor": "^0.1.0"
                    }
                },
                "kind-of": {
                    "version": "3.2.2",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                    "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                    "dev": true,
                    "requires": {
                        "is-buffer": "^1.1.5"
                    }
                }
            }
        },
        "object-inspect": {
            "version": "1.8.0",
            "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.8.0.tgz",
            "integrity": "sha512-jLdtEOB112fORuypAyl/50VRVIBIdVQOSUUGQHzJ4xBSbit81zRarz7GThkEFZy1RceYrWYcPcBFPQwHyAc1gA==",
            "dev": true
        },
        "object-is": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/object-is/-/object-is-1.1.3.tgz",
            "integrity": "sha512-teyqLvFWzLkq5B9ki8FVWA902UER2qkxmdA4nLf+wjOLAWgxzCWZNCxpDq9MvE8MmhWNr+I8w3BN49Vx36Y6Xg==",
            "dev": true,
            "requires": {
                "define-properties": "^1.1.3",
                "es-abstract": "^1.18.0-next.1"
            },
            "dependencies": {
                "es-abstract": {
                    "version": "1.18.0-next.1",
                    "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.18.0-next.1.tgz",
                    "integrity": "sha512-I4UGspA0wpZXWENrdA0uHbnhte683t3qT/1VFH9aX2dA5PPSf6QW5HHXf5HImaqPmjXaVeVk4RGWnaylmV7uAA==",
                    "dev": true,
                    "requires": {
                        "es-to-primitive": "^1.2.1",
                        "function-bind": "^1.1.1",
                        "has": "^1.0.3",
                        "has-symbols": "^1.0.1",
                        "is-callable": "^1.2.2",
                        "is-negative-zero": "^2.0.0",
                        "is-regex": "^1.1.1",
                        "object-inspect": "^1.8.0",
                        "object-keys": "^1.1.1",
                        "object.assign": "^4.1.1",
                        "string.prototype.trimend": "^1.0.1",
                        "string.prototype.trimstart": "^1.0.1"
                    }
                }
            }
        },
        "object-keys": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
            "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
            "dev": true
        },
        "object-visit": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/object-visit/-/object-visit-1.0.1.tgz",
            "integrity": "sha1-95xEk68MU3e1n+OdOV5BBC3QRbs=",
            "dev": true,
            "requires": {
                "isobject": "^3.0.0"
            }
        },
        "object.assign": {
            "version": "4.1.2",
            "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.2.tgz",
            "integrity": "sha512-ixT2L5THXsApyiUPYKmW+2EHpXXe5Ii3M+f4e+aJFAHao5amFRW6J0OO6c/LU8Be47utCx2GL89hxGB6XSmKuQ==",
            "dev": true,
            "requires": {
                "call-bind": "^1.0.0",
                "define-properties": "^1.1.3",
                "has-symbols": "^1.0.1",
                "object-keys": "^1.1.1"
            }
        },
        "object.getownpropertydescriptors": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/object.getownpropertydescriptors/-/object.getownpropertydescriptors-2.1.0.tgz",
            "integrity": "sha512-Z53Oah9A3TdLoblT7VKJaTDdXdT+lQO+cNpKVnya5JDe9uLvzu1YyY1yFDFrcxrlRgWrEFH0jJtD/IbuwjcEVg==",
            "dev": true,
            "requires": {
                "define-properties": "^1.1.3",
                "es-abstract": "^1.17.0-next.1"
            }
        },
        "object.pick": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/object.pick/-/object.pick-1.3.0.tgz",
            "integrity": "sha1-h6EKxMFpS9Lhy/U1kaZhQftd10c=",
            "dev": true,
            "requires": {
                "isobject": "^3.0.1"
            }
        },
        "object.values": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/object.values/-/object.values-1.1.1.tgz",
            "integrity": "sha512-WTa54g2K8iu0kmS/us18jEmdv1a4Wi//BZ/DTVYEcH0XhLM5NYdpDHja3gt57VrZLcNAO2WGA+KpWsDBaHt6eA==",
            "dev": true,
            "requires": {
                "define-properties": "^1.1.3",
                "es-abstract": "^1.17.0-next.1",
                "function-bind": "^1.1.1",
                "has": "^1.0.3"
            }
        },
        "obuf": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/obuf/-/obuf-1.1.2.tgz",
            "integrity": "sha512-PX1wu0AmAdPqOL1mWhqmlOd8kOIZQwGZw6rh7uby9fTc5lhaOWFLX3I6R1hrF9k3zUY40e6igsLGkDXK92LJNg==",
            "dev": true
        },
        "on-finished": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
            "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
            "dev": true,
            "requires": {
                "ee-first": "1.1.1"
            }
        },
        "on-headers": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.0.2.tgz",
            "integrity": "sha512-pZAE+FJLoyITytdqK0U5s+FIpjN0JP3OzFi/u8Rx+EV5/W+JTWGXG8xFzevE7AjBfDqHv/8vL8qQsIhHnqRkrA==",
            "dev": true
        },
        "once": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
            "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
            "dev": true,
            "requires": {
                "wrappy": "1"
            }
        },
        "onetime": {
            "version": "5.1.2",
            "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
            "integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
            "requires": {
                "mimic-fn": "^2.1.0"
            }
        },
        "open": {
            "version": "7.3.0",
            "resolved": "https://registry.npmjs.org/open/-/open-7.3.0.tgz",
            "integrity": "sha512-mgLwQIx2F/ye9SmbrUkurZCnkoXyXyu9EbHtJZrICjVAJfyMArdHp3KkixGdZx1ZHFPNIwl0DDM1dFFqXbTLZw==",
            "dev": true,
            "requires": {
                "is-docker": "^2.0.0",
                "is-wsl": "^2.1.1"
            }
        },
        "opencollective-postinstall": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/opencollective-postinstall/-/opencollective-postinstall-2.0.3.tgz",
            "integrity": "sha512-8AV/sCtuzUeTo8gQK5qDZzARrulB3egtLzFgteqB2tcT4Mw7B8Kt7JcDHmltjz6FOAHsvTevk70gZEbhM4ZS9Q==",
            "dev": true
        },
        "opn": {
            "version": "5.5.0",
            "resolved": "https://registry.npmjs.org/opn/-/opn-5.5.0.tgz",
            "integrity": "sha512-PqHpggC9bLV0VeWcdKhkpxY+3JTzetLSqTCWL/z/tFIbI6G8JCjondXklT1JinczLz2Xib62sSp0T/gKT4KksA==",
            "dev": true,
            "requires": {
                "is-wsl": "^1.1.0"
            },
            "dependencies": {
                "is-wsl": {
                    "version": "1.1.0",
                    "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-1.1.0.tgz",
                    "integrity": "sha1-HxbkqiKwTRM2tmGIpmrzxgDDpm0=",
                    "dev": true
                }
            }
        },
        "optionator": {
            "version": "0.9.1",
            "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.1.tgz",
            "integrity": "sha512-74RlY5FCnhq4jRxVUPKDaRwrVNXMqsGsiW6AJw4XK8hmtm10wC0ypZBLw5IIp85NZMr91+qd1RvvENwg7jjRFw==",
            "dev": true,
            "requires": {
                "deep-is": "^0.1.3",
                "fast-levenshtein": "^2.0.6",
                "levn": "^0.4.1",
                "prelude-ls": "^1.2.1",
                "type-check": "^0.4.0",
                "word-wrap": "^1.2.3"
            }
        },
        "ora": {
            "version": "5.1.0",
            "resolved": "https://registry.npmjs.org/ora/-/ora-5.1.0.tgz",
            "integrity": "sha512-9tXIMPvjZ7hPTbk8DFq1f7Kow/HU/pQYB60JbNq+QnGwcyhWVZaQ4hM9zQDEsPxw/muLpgiHSaumUZxCAmod/w==",
            "dev": true,
            "requires": {
                "chalk": "^4.1.0",
                "cli-cursor": "^3.1.0",
                "cli-spinners": "^2.4.0",
                "is-interactive": "^1.0.0",
                "log-symbols": "^4.0.0",
                "mute-stream": "0.0.8",
                "strip-ansi": "^6.0.0",
                "wcwidth": "^1.0.1"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "original": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/original/-/original-1.0.2.tgz",
            "integrity": "sha512-hyBVl6iqqUOJ8FqRe+l/gS8H+kKYjrEndd5Pm1MfBtsEKA038HkkdbAl/72EAXGyonD/PFsvmVG+EvcIpliMBg==",
            "dev": true,
            "requires": {
                "url-parse": "^1.4.3"
            }
        },
        "os-browserify": {
            "version": "0.3.0",
            "resolved": "https://registry.npmjs.org/os-browserify/-/os-browserify-0.3.0.tgz",
            "integrity": "sha1-hUNzx/XCMVkU/Jv8a9gjj92h7Cc=",
            "dev": true
        },
        "os-homedir": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/os-homedir/-/os-homedir-1.0.2.tgz",
            "integrity": "sha1-/7xJiDNuDoM94MFox+8VISGqf7M=",
            "dev": true
        },
        "os-tmpdir": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
            "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ="
        },
        "osenv": {
            "version": "0.1.5",
            "resolved": "https://registry.npmjs.org/osenv/-/osenv-0.1.5.tgz",
            "integrity": "sha512-0CWcCECdMVc2Rw3U5w9ZjqX6ga6ubk1xDVKxtBQPK7wis/0F2r9T6k4ydGYhecl7YUBxBVxhL5oisPsNxAPe2g==",
            "dev": true,
            "requires": {
                "os-homedir": "^1.0.0",
                "os-tmpdir": "^1.0.0"
            }
        },
        "p-cancelable": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/p-cancelable/-/p-cancelable-1.1.0.tgz",
            "integrity": "sha512-s73XxOZ4zpt1edZYZzvhqFa6uvQc1vwUa0K0BdtIZgQMAJj9IbebH+JkgKZc9h+B05PKHLOTl4ajG1BmNrVZlw==",
            "dev": true
        },
        "p-each-series": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/p-each-series/-/p-each-series-2.2.0.tgz",
            "integrity": "sha512-ycIL2+1V32th+8scbpTvyHNaHe02z0sjgh91XXjAk+ZeXoPN4Z46DVUnzdso0aX4KckKw0FNNFHdjZ2UsZvxiA==",
            "dev": true
        },
        "p-finally": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz",
            "integrity": "sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4=",
            "dev": true
        },
        "p-limit": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
            "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
            "dev": true,
            "requires": {
                "p-try": "^2.0.0"
            }
        },
        "p-locate": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
            "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
            "dev": true,
            "requires": {
                "p-limit": "^2.0.0"
            }
        },
        "p-map": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/p-map/-/p-map-4.0.0.tgz",
            "integrity": "sha512-/bjOqmgETBYB5BoEeGVea8dmvHb2m9GLy1E9W43yeyfP6QQCZGFNa+XRceJEuDB6zqr+gKpIAmlLebMpykw/MQ==",
            "dev": true,
            "requires": {
                "aggregate-error": "^3.0.0"
            }
        },
        "p-retry": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/p-retry/-/p-retry-3.0.1.tgz",
            "integrity": "sha512-XE6G4+YTTkT2a0UWb2kjZe8xNwf8bIbnqpc/IS/idOBVhyves0mK5OJgeocjx7q5pvX/6m23xuzVPYT1uGM73w==",
            "dev": true,
            "requires": {
                "retry": "^0.12.0"
            }
        },
        "p-try": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
            "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==",
            "dev": true
        },
        "package-json": {
            "version": "6.5.0",
            "resolved": "https://registry.npmjs.org/package-json/-/package-json-6.5.0.tgz",
            "integrity": "sha512-k3bdm2n25tkyxcjSKzB5x8kfVxlMdgsbPr0GkZcwHsLpba6cBjqCt1KlcChKEvxHIcTB1FVMuwoijZ26xex5MQ==",
            "dev": true,
            "requires": {
                "got": "^9.6.0",
                "registry-auth-token": "^4.0.0",
                "registry-url": "^5.0.0",
                "semver": "^6.2.0"
            },
            "dependencies": {
                "semver": {
                    "version": "6.3.0",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                    "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
                    "dev": true
                }
            }
        },
        "pacote": {
            "version": "9.5.12",
            "resolved": "https://registry.npmjs.org/pacote/-/pacote-9.5.12.tgz",
            "integrity": "sha512-BUIj/4kKbwWg4RtnBncXPJd15piFSVNpTzY0rysSr3VnMowTYgkGKcaHrbReepAkjTr8lH2CVWRi58Spg2CicQ==",
            "dev": true,
            "requires": {
                "bluebird": "^3.5.3",
                "cacache": "^12.0.2",
                "chownr": "^1.1.2",
                "figgy-pudding": "^3.5.1",
                "get-stream": "^4.1.0",
                "glob": "^7.1.3",
                "infer-owner": "^1.0.4",
                "lru-cache": "^5.1.1",
                "make-fetch-happen": "^5.0.0",
                "minimatch": "^3.0.4",
                "minipass": "^2.3.5",
                "mississippi": "^3.0.0",
                "mkdirp": "^0.5.1",
                "normalize-package-data": "^2.4.0",
                "npm-normalize-package-bin": "^1.0.0",
                "npm-package-arg": "^6.1.0",
                "npm-packlist": "^1.1.12",
                "npm-pick-manifest": "^3.0.0",
                "npm-registry-fetch": "^4.0.0",
                "osenv": "^0.1.5",
                "promise-inflight": "^1.0.1",
                "promise-retry": "^1.1.1",
                "protoduck": "^5.0.1",
                "rimraf": "^2.6.2",
                "safe-buffer": "^5.1.2",
                "semver": "^5.6.0",
                "ssri": "^6.0.1",
                "tar": "^4.4.10",
                "unique-filename": "^1.1.1",
                "which": "^1.3.1"
            },
            "dependencies": {
                "cacache": {
                    "version": "12.0.4",
                    "resolved": "https://registry.npmjs.org/cacache/-/cacache-12.0.4.tgz",
                    "integrity": "sha512-a0tMB40oefvuInr4Cwb3GerbL9xTj1D5yg0T5xrjGCGyfvbxseIXX7BAO/u/hIXdafzOI5JC3wDwHyf24buOAQ==",
                    "dev": true,
                    "requires": {
                        "bluebird": "^3.5.5",
                        "chownr": "^1.1.1",
                        "figgy-pudding": "^3.5.1",
                        "glob": "^7.1.4",
                        "graceful-fs": "^4.1.15",
                        "infer-owner": "^1.0.3",
                        "lru-cache": "^5.1.1",
                        "mississippi": "^3.0.0",
                        "mkdirp": "^0.5.1",
                        "move-concurrently": "^1.0.1",
                        "promise-inflight": "^1.0.1",
                        "rimraf": "^2.6.3",
                        "ssri": "^6.0.1",
                        "unique-filename": "^1.1.1",
                        "y18n": "^4.0.0"
                    }
                },
                "chownr": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/chownr/-/chownr-1.1.4.tgz",
                    "integrity": "sha512-jJ0bqzaylmJtVnNgzTeSOs8DPavpbYgEr/b0YL8/2GO3xJEhInFmhKMUnEJQjZumK7KXGFhUy89PrsJWlakBVg==",
                    "dev": true
                },
                "fs-minipass": {
                    "version": "1.2.7",
                    "resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-1.2.7.tgz",
                    "integrity": "sha512-GWSSJGFy4e9GUeCcbIkED+bgAoFyj7XF1mV8rma3QW4NIqX9Kyx79N/PF61H5udOV3aY1IaMLs6pGbH71nlCTA==",
                    "dev": true,
                    "requires": {
                        "minipass": "^2.6.0"
                    }
                },
                "hosted-git-info": {
                    "version": "2.8.8",
                    "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.8.tgz",
                    "integrity": "sha512-f/wzC2QaWBs7t9IYqB4T3sR1xviIViXJRJTWBlx2Gf3g0Xi5vI7Yy4koXQ1c9OYDGHN9sBy1DQ2AB8fqZBWhUg==",
                    "dev": true
                },
                "lru-cache": {
                    "version": "5.1.1",
                    "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
                    "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
                    "dev": true,
                    "requires": {
                        "yallist": "^3.0.2"
                    }
                },
                "minipass": {
                    "version": "2.9.0",
                    "resolved": "https://registry.npmjs.org/minipass/-/minipass-2.9.0.tgz",
                    "integrity": "sha512-wxfUjg9WebH+CUDX/CdbRlh5SmfZiy/hpkxaRI16Y9W56Pa75sWgd/rvFilSgrauD9NyFymP/+JFV3KwzIsJeg==",
                    "dev": true,
                    "requires": {
                        "safe-buffer": "^5.1.2",
                        "yallist": "^3.0.0"
                    }
                },
                "minizlib": {
                    "version": "1.3.3",
                    "resolved": "https://registry.npmjs.org/minizlib/-/minizlib-1.3.3.tgz",
                    "integrity": "sha512-6ZYMOEnmVsdCeTJVE0W9ZD+pVnE8h9Hma/iOwwRDsdQoePpoX56/8B6z3P9VNwppJuBKNRuFDRNRqRWexT9G9Q==",
                    "dev": true,
                    "requires": {
                        "minipass": "^2.9.0"
                    }
                },
                "npm-package-arg": {
                    "version": "6.1.1",
                    "resolved": "https://registry.npmjs.org/npm-package-arg/-/npm-package-arg-6.1.1.tgz",
                    "integrity": "sha512-qBpssaL3IOZWi5vEKUKW0cO7kzLeT+EQO9W8RsLOZf76KF9E/K9+wH0C7t06HXPpaH8WH5xF1MExLuCwbTqRUg==",
                    "dev": true,
                    "requires": {
                        "hosted-git-info": "^2.7.1",
                        "osenv": "^0.1.5",
                        "semver": "^5.6.0",
                        "validate-npm-package-name": "^3.0.0"
                    }
                },
                "npm-pick-manifest": {
                    "version": "3.0.2",
                    "resolved": "https://registry.npmjs.org/npm-pick-manifest/-/npm-pick-manifest-3.0.2.tgz",
                    "integrity": "sha512-wNprTNg+X5nf+tDi+hbjdHhM4bX+mKqv6XmPh7B5eG+QY9VARfQPfCEH013H5GqfNj6ee8Ij2fg8yk0mzps1Vw==",
                    "dev": true,
                    "requires": {
                        "figgy-pudding": "^3.5.1",
                        "npm-package-arg": "^6.0.0",
                        "semver": "^5.4.1"
                    }
                },
                "rimraf": {
                    "version": "2.7.1",
                    "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
                    "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
                    "dev": true,
                    "requires": {
                        "glob": "^7.1.3"
                    }
                },
                "semver": {
                    "version": "5.7.1",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
                    "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
                    "dev": true
                },
                "ssri": {
                    "version": "6.0.1",
                    "resolved": "https://registry.npmjs.org/ssri/-/ssri-6.0.1.tgz",
                    "integrity": "sha512-3Wge10hNcT1Kur4PDFwEieXSCMCJs/7WvSACcrMYrNp+b8kDL1/0wJch5Ni2WrtwEa2IO8OsVfeKIciKCDx/QA==",
                    "dev": true,
                    "requires": {
                        "figgy-pudding": "^3.5.1"
                    }
                },
                "tar": {
                    "version": "4.4.13",
                    "resolved": "https://registry.npmjs.org/tar/-/tar-4.4.13.tgz",
                    "integrity": "sha512-w2VwSrBoHa5BsSyH+KxEqeQBAllHhccyMFVHtGtdMpF4W7IRWfZjFiQceJPChOeTsSDVUpER2T8FA93pr0L+QA==",
                    "dev": true,
                    "requires": {
                        "chownr": "^1.1.1",
                        "fs-minipass": "^1.2.5",
                        "minipass": "^2.8.6",
                        "minizlib": "^1.2.1",
                        "mkdirp": "^0.5.0",
                        "safe-buffer": "^5.1.2",
                        "yallist": "^3.0.3"
                    }
                },
                "yallist": {
                    "version": "3.1.1",
                    "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
                    "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
                    "dev": true
                }
            }
        },
        "pako": {
            "version": "1.0.11",
            "resolved": "https://registry.npmjs.org/pako/-/pako-1.0.11.tgz",
            "integrity": "sha512-4hLB8Py4zZce5s4yd9XzopqwVv/yGNhV1Bl8NTmCq1763HeK2+EwVTv+leGeL13Dnh2wfbqowVPXCIO0z4taYw==",
            "dev": true
        },
        "parallel-transform": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/parallel-transform/-/parallel-transform-1.2.0.tgz",
            "integrity": "sha512-P2vSmIu38uIlvdcU7fDkyrxj33gTUy/ABO5ZUbGowxNCopBq/OoD42bP4UmMrJoPyk4Uqf0mu3mtWBhHCZD8yg==",
            "dev": true,
            "requires": {
                "cyclist": "^1.0.1",
                "inherits": "^2.0.3",
                "readable-stream": "^2.1.5"
            }
        },
        "parent-module": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
            "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
            "dev": true,
            "requires": {
                "callsites": "^3.0.0"
            },
            "dependencies": {
                "callsites": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
                    "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
                    "dev": true
                }
            }
        },
        "parse-asn1": {
            "version": "5.1.6",
            "resolved": "https://registry.npmjs.org/parse-asn1/-/parse-asn1-5.1.6.tgz",
            "integrity": "sha512-RnZRo1EPU6JBnra2vGHj0yhp6ebyjBZpmUCLHWiFhxlzvBCCpAuZ7elsBp1PVAbQN0/04VD/19rfzlBSwLstMw==",
            "dev": true,
            "requires": {
                "asn1.js": "^5.2.0",
                "browserify-aes": "^1.0.0",
                "evp_bytestokey": "^1.0.0",
                "pbkdf2": "^3.0.3",
                "safe-buffer": "^5.1.1"
            }
        },
        "parse-json": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-4.0.0.tgz",
            "integrity": "sha1-vjX1Qlvh9/bHRxhPmKeIy5lHfuA=",
            "dev": true,
            "requires": {
                "error-ex": "^1.3.1",
                "json-parse-better-errors": "^1.0.1"
            }
        },
        "parse5": {
            "version": "6.0.1",
            "resolved": "https://registry.npmjs.org/parse5/-/parse5-6.0.1.tgz",
            "integrity": "sha512-Ofn/CTFzRGTTxwpNEs9PP93gXShHcTq255nzRYSKe8AkVpZY7e1fpmTfOyoIvjP5HG7Z2ZM7VS9PPhQGW2pOpw==",
            "dev": true
        },
        "parse5-html-rewriting-stream": {
            "version": "6.0.1",
            "resolved": "https://registry.npmjs.org/parse5-html-rewriting-stream/-/parse5-html-rewriting-stream-6.0.1.tgz",
            "integrity": "sha512-vwLQzynJVEfUlURxgnf51yAJDQTtVpNyGD8tKi2Za7m+akukNHxCcUQMAa/mUGLhCeicFdpy7Tlvj8ZNKadprg==",
            "dev": true,
            "requires": {
                "parse5": "^6.0.1",
                "parse5-sax-parser": "^6.0.1"
            }
        },
        "parse5-sax-parser": {
            "version": "6.0.1",
            "resolved": "https://registry.npmjs.org/parse5-sax-parser/-/parse5-sax-parser-6.0.1.tgz",
            "integrity": "sha512-kXX+5S81lgESA0LsDuGjAlBybImAChYRMT+/uKCEXFBFOeEhS52qUCydGhU3qLRD8D9DVjaUo821WK7DM4iCeg==",
            "dev": true,
            "requires": {
                "parse5": "^6.0.1"
            }
        },
        "parseurl": {
            "version": "1.3.3",
            "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
            "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
            "dev": true
        },
        "pascalcase": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/pascalcase/-/pascalcase-0.1.1.tgz",
            "integrity": "sha1-s2PlXoAGym/iF4TS2yK9FdeRfxQ=",
            "dev": true
        },
        "path-browserify": {
            "version": "0.0.1",
            "resolved": "https://registry.npmjs.org/path-browserify/-/path-browserify-0.0.1.tgz",
            "integrity": "sha512-BapA40NHICOS+USX9SN4tyhq+A2RrN/Ws5F0Z5aMHDp98Fl86lX8Oti8B7uN93L4Ifv4fHOEA+pQw87gmMO/lQ==",
            "dev": true
        },
        "path-dirname": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/path-dirname/-/path-dirname-1.0.2.tgz",
            "integrity": "sha1-zDPSTVJeCZpTiMAzbG4yuRYGCeA=",
            "dev": true
        },
        "path-exists": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
            "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
            "dev": true
        },
        "path-is-absolute": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
            "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",
            "dev": true
        },
        "path-is-inside": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/path-is-inside/-/path-is-inside-1.0.2.tgz",
            "integrity": "sha1-NlQX3t5EQw0cEa9hAn+s8HS9/FM=",
            "dev": true
        },
        "path-key": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
            "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A=",
            "dev": true
        },
        "path-parse": {
            "version": "1.0.6",
            "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.6.tgz",
            "integrity": "sha512-GSmOT2EbHrINBf9SR7CDELwlJ8AENk3Qn7OikK4nFYAu3Ote2+JYNVvkpAEQm3/TLNEJFD/xZJjzyxg3KBWOzw==",
            "dev": true
        },
        "path-to-regexp": {
            "version": "0.1.7",
            "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
            "integrity": "sha1-32BBeABfUi8V60SQ5yR6G/qmf4w=",
            "dev": true
        },
        "path-type": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
            "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
            "dev": true
        },
        "pbkdf2": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/pbkdf2/-/pbkdf2-3.1.1.tgz",
            "integrity": "sha512-4Ejy1OPxi9f2tt1rRV7Go7zmfDQ+ZectEQz3VGUQhgq62HtIRPDyG/JtnwIxs6x3uNMwo2V7q1fMvKjb+Tnpqg==",
            "dev": true,
            "requires": {
                "create-hash": "^1.1.2",
                "create-hmac": "^1.1.4",
                "ripemd160": "^2.0.1",
                "safe-buffer": "^5.0.1",
                "sha.js": "^2.4.8"
            }
        },
        "performance-now": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
            "integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns=",
            "dev": true
        },
        "picomatch": {
            "version": "2.2.2",
            "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.2.2.tgz",
            "integrity": "sha512-q0M/9eZHzmr0AulXyPwNfZjtwZ/RBZlbN3K3CErVrk50T2ASYI7Bye0EvekFY3IP1Nt2DHu0re+V2ZHIpMkuWg==",
            "dev": true
        },
        "pify": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
            "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
            "dev": true
        },
        "pinkie": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz",
            "integrity": "sha1-clVrgM+g1IqXToDnckjoDtT3+HA=",
            "dev": true
        },
        "pinkie-promise": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.1.tgz",
            "integrity": "sha1-ITXW36ejWMBprJsXh3YogihFD/o=",
            "dev": true,
            "requires": {
                "pinkie": "^2.0.0"
            }
        },
        "pirates": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.1.tgz",
            "integrity": "sha512-WuNqLTbMI3tmfef2TKxlQmAiLHKtFhlsCZnPIpuv2Ow0RDVO8lfy1Opf4NUzlMXLjPl+Men7AuVdX6TA+s+uGA==",
            "dev": true,
            "requires": {
                "node-modules-regexp": "^1.0.0"
            }
        },
        "pkg-dir": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-3.0.0.tgz",
            "integrity": "sha512-/E57AYkoeQ25qkxMj5PBOVgF8Kiu/h7cYS30Z5+R7WaiCCBfLq58ZI/dSeaEKb9WVJV5n/03QwrN3IeWIFllvw==",
            "dev": true,
            "requires": {
                "find-up": "^3.0.0"
            }
        },
        "please-upgrade-node": {
            "version": "3.2.0",
            "resolved": "https://registry.npmjs.org/please-upgrade-node/-/please-upgrade-node-3.2.0.tgz",
            "integrity": "sha512-gQR3WpIgNIKwBMVLkpMUeR3e1/E1y42bqDQZfql+kDeXd8COYfM8PQA4X6y7a8u9Ua9FHmsrrmirW2vHs45hWg==",
            "dev": true,
            "requires": {
                "semver-compare": "^1.0.0"
            }
        },
        "pluralize": {
            "version": "8.0.0",
            "resolved": "https://registry.npmjs.org/pluralize/-/pluralize-8.0.0.tgz",
            "integrity": "sha512-Nc3IT5yHzflTfbjgqWcCPpo7DaKy4FnpB0l/zCAW0Tc7jxAiuqSxHasntB3D7887LSrA93kDJ9IXovxJYxyLCA==",
            "dev": true
        },
        "pnp-webpack-plugin": {
            "version": "1.6.4",
            "resolved": "https://registry.npmjs.org/pnp-webpack-plugin/-/pnp-webpack-plugin-1.6.4.tgz",
            "integrity": "sha512-7Wjy+9E3WwLOEL30D+m8TSTF7qJJUJLONBnwQp0518siuMxUQUbgZwssaFX+QKlZkjHZcw/IpZCt/H0srrntSg==",
            "dev": true,
            "requires": {
                "ts-pnp": "^1.1.6"
            }
        },
        "portfinder": {
            "version": "1.0.28",
            "resolved": "https://registry.npmjs.org/portfinder/-/portfinder-1.0.28.tgz",
            "integrity": "sha512-Se+2isanIcEqf2XMHjyUKskczxbPH7dQnlMjXX6+dybayyHvAf/TCgyMRlzf/B6QDhAEFOGes0pzRo3by4AbMA==",
            "dev": true,
            "requires": {
                "async": "^2.6.2",
                "debug": "^3.1.1",
                "mkdirp": "^0.5.5"
            },
            "dependencies": {
                "debug": {
                    "version": "3.2.7",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
                    "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
                    "dev": true,
                    "requires": {
                        "ms": "^2.1.1"
                    }
                }
            }
        },
        "posix-character-classes": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/posix-character-classes/-/posix-character-classes-0.1.1.tgz",
            "integrity": "sha1-AerA/jta9xoqbAL+q7jB/vfgDqs=",
            "dev": true
        },
        "postcss": {
            "version": "7.0.32",
            "resolved": "https://registry.npmjs.org/postcss/-/postcss-7.0.32.tgz",
            "integrity": "sha512-03eXong5NLnNCD05xscnGKGDZ98CyzoqPSMjOe6SuoQY7Z2hIj0Ld1g/O/UQRuOle2aRtiIRDg9tDcTGAkLfKw==",
            "dev": true,
            "requires": {
                "chalk": "^2.4.2",
                "source-map": "^0.6.1",
                "supports-color": "^6.1.0"
            },
            "dependencies": {
                "source-map": {
                    "version": "0.6.1",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                    "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                    "dev": true
                },
                "supports-color": {
                    "version": "6.1.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
                    "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^3.0.0"
                    }
                }
            }
        },
        "postcss-calc": {
            "version": "7.0.5",
            "resolved": "https://registry.npmjs.org/postcss-calc/-/postcss-calc-7.0.5.tgz",
            "integrity": "sha512-1tKHutbGtLtEZF6PT4JSihCHfIVldU72mZ8SdZHIYriIZ9fh9k9aWSppaT8rHsyI3dX+KSR+W+Ix9BMY3AODrg==",
            "dev": true,
            "requires": {
                "postcss": "^7.0.27",
                "postcss-selector-parser": "^6.0.2",
                "postcss-value-parser": "^4.0.2"
            }
        },
        "postcss-colormin": {
            "version": "4.0.3",
            "resolved": "https://registry.npmjs.org/postcss-colormin/-/postcss-colormin-4.0.3.tgz",
            "integrity": "sha512-WyQFAdDZpExQh32j0U0feWisZ0dmOtPl44qYmJKkq9xFWY3p+4qnRzCHeNrkeRhwPHz9bQ3mo0/yVkaply0MNw==",
            "dev": true,
            "requires": {
                "browserslist": "^4.0.0",
                "color": "^3.0.0",
                "has": "^1.0.0",
                "postcss": "^7.0.0",
                "postcss-value-parser": "^3.0.0"
            },
            "dependencies": {
                "postcss-value-parser": {
                    "version": "3.3.1",
                    "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
                    "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
                    "dev": true
                }
            }
        },
        "postcss-convert-values": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/postcss-convert-values/-/postcss-convert-values-4.0.1.tgz",
            "integrity": "sha512-Kisdo1y77KUC0Jmn0OXU/COOJbzM8cImvw1ZFsBgBgMgb1iL23Zs/LXRe3r+EZqM3vGYKdQ2YJVQ5VkJI+zEJQ==",
            "dev": true,
            "requires": {
                "postcss": "^7.0.0",
                "postcss-value-parser": "^3.0.0"
            },
            "dependencies": {
                "postcss-value-parser": {
                    "version": "3.3.1",
                    "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
                    "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
                    "dev": true
                }
            }
        },
        "postcss-discard-comments": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/postcss-discard-comments/-/postcss-discard-comments-4.0.2.tgz",
            "integrity": "sha512-RJutN259iuRf3IW7GZyLM5Sw4GLTOH8FmsXBnv8Ab/Tc2k4SR4qbV4DNbyyY4+Sjo362SyDmW2DQ7lBSChrpkg==",
            "dev": true,
            "requires": {
                "postcss": "^7.0.0"
            }
        },
        "postcss-discard-duplicates": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/postcss-discard-duplicates/-/postcss-discard-duplicates-4.0.2.tgz",
            "integrity": "sha512-ZNQfR1gPNAiXZhgENFfEglF93pciw0WxMkJeVmw8eF+JZBbMD7jp6C67GqJAXVZP2BWbOztKfbsdmMp/k8c6oQ==",
            "dev": true,
            "requires": {
                "postcss": "^7.0.0"
            }
        },
        "postcss-discard-empty": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/postcss-discard-empty/-/postcss-discard-empty-4.0.1.tgz",
            "integrity": "sha512-B9miTzbznhDjTfjvipfHoqbWKwd0Mj+/fL5s1QOz06wufguil+Xheo4XpOnc4NqKYBCNqqEzgPv2aPBIJLox0w==",
            "dev": true,
            "requires": {
                "postcss": "^7.0.0"
            }
        },
        "postcss-discard-overridden": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/postcss-discard-overridden/-/postcss-discard-overridden-4.0.1.tgz",
            "integrity": "sha512-IYY2bEDD7g1XM1IDEsUT4//iEYCxAmP5oDSFMVU/JVvT7gh+l4fmjciLqGgwjdWpQIdb0Che2VX00QObS5+cTg==",
            "dev": true,
            "requires": {
                "postcss": "^7.0.0"
            }
        },
        "postcss-import": {
            "version": "12.0.1",
            "resolved": "https://registry.npmjs.org/postcss-import/-/postcss-import-12.0.1.tgz",
            "integrity": "sha512-3Gti33dmCjyKBgimqGxL3vcV8w9+bsHwO5UrBawp796+jdardbcFl4RP5w/76BwNL7aGzpKstIfF9I+kdE8pTw==",
            "dev": true,
            "requires": {
                "postcss": "^7.0.1",
                "postcss-value-parser": "^3.2.3",
                "read-cache": "^1.0.0",
                "resolve": "^1.1.7"
            },
            "dependencies": {
                "postcss-value-parser": {
                    "version": "3.3.1",
                    "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
                    "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
                    "dev": true
                }
            }
        },
        "postcss-loader": {
            "version": "4.0.4",
            "resolved": "https://registry.npmjs.org/postcss-loader/-/postcss-loader-4.0.4.tgz",
            "integrity": "sha512-pntA9zIR14drQo84yGTjQJg1m7T0DkXR4vXYHBngiRZdJtEeCrojL6lOpqUanMzG375lIJbT4Yug85zC/AJWGw==",
            "dev": true,
            "requires": {
                "cosmiconfig": "^7.0.0",
                "klona": "^2.0.4",
                "loader-utils": "^2.0.0",
                "schema-utils": "^3.0.0",
                "semver": "^7.3.2"
            },
            "dependencies": {
                "cosmiconfig": {
                    "version": "7.0.0",
                    "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-7.0.0.tgz",
                    "integrity": "sha512-pondGvTuVYDk++upghXJabWzL6Kxu6f26ljFw64Swq9v6sQPUL3EUlVDV56diOjpCayKihL6hVe8exIACU4XcA==",
                    "dev": true,
                    "requires": {
                        "@types/parse-json": "^4.0.0",
                        "import-fresh": "^3.2.1",
                        "parse-json": "^5.0.0",
                        "path-type": "^4.0.0",
                        "yaml": "^1.10.0"
                    }
                },
                "import-fresh": {
                    "version": "3.2.2",
                    "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.2.2.tgz",
                    "integrity": "sha512-cTPNrlvJT6twpYy+YmKUKrTSjWFs3bjYjAhCwm+z4EOCubZxAuO+hHpRN64TqjEaYSHs7tJAE0w1CKMGmsG/lw==",
                    "dev": true,
                    "requires": {
                        "parent-module": "^1.0.0",
                        "resolve-from": "^4.0.0"
                    }
                },
                "parse-json": {
                    "version": "5.1.0",
                    "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-5.1.0.tgz",
                    "integrity": "sha512-+mi/lmVVNKFNVyLXV31ERiy2CY5E1/F6QtJFEzoChPRwwngMNXRDQ9GJ5WdE2Z2P4AujsOi0/+2qHID68KwfIQ==",
                    "dev": true,
                    "requires": {
                        "@babel/code-frame": "^7.0.0",
                        "error-ex": "^1.3.1",
                        "json-parse-even-better-errors": "^2.3.0",
                        "lines-and-columns": "^1.1.6"
                    }
                },
                "resolve-from": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
                    "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
                    "dev": true
                },
                "schema-utils": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.0.0.tgz",
                    "integrity": "sha512-6D82/xSzO094ajanoOSbe4YvXWMfn2A//8Y1+MUqFAJul5Bs+yn36xbK9OtNDcRVSBJ9jjeoXftM6CfztsjOAA==",
                    "dev": true,
                    "requires": {
                        "@types/json-schema": "^7.0.6",
                        "ajv": "^6.12.5",
                        "ajv-keywords": "^3.5.2"
                    }
                }
            }
        },
        "postcss-merge-longhand": {
            "version": "4.0.11",
            "resolved": "https://registry.npmjs.org/postcss-merge-longhand/-/postcss-merge-longhand-4.0.11.tgz",
            "integrity": "sha512-alx/zmoeXvJjp7L4mxEMjh8lxVlDFX1gqWHzaaQewwMZiVhLo42TEClKaeHbRf6J7j82ZOdTJ808RtN0ZOZwvw==",
            "dev": true,
            "requires": {
                "css-color-names": "0.0.4",
                "postcss": "^7.0.0",
                "postcss-value-parser": "^3.0.0",
                "stylehacks": "^4.0.0"
            },
            "dependencies": {
                "postcss-value-parser": {
                    "version": "3.3.1",
                    "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
                    "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
                    "dev": true
                }
            }
        },
        "postcss-merge-rules": {
            "version": "4.0.3",
            "resolved": "https://registry.npmjs.org/postcss-merge-rules/-/postcss-merge-rules-4.0.3.tgz",
            "integrity": "sha512-U7e3r1SbvYzO0Jr3UT/zKBVgYYyhAz0aitvGIYOYK5CPmkNih+WDSsS5tvPrJ8YMQYlEMvsZIiqmn7HdFUaeEQ==",
            "dev": true,
            "requires": {
                "browserslist": "^4.0.0",
                "caniuse-api": "^3.0.0",
                "cssnano-util-same-parent": "^4.0.0",
                "postcss": "^7.0.0",
                "postcss-selector-parser": "^3.0.0",
                "vendors": "^1.0.0"
            },
            "dependencies": {
                "postcss-selector-parser": {
                    "version": "3.1.2",
                    "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-3.1.2.tgz",
                    "integrity": "sha512-h7fJ/5uWuRVyOtkO45pnt1Ih40CEleeyCHzipqAZO2e5H20g25Y48uYnFUiShvY4rZWNJ/Bib/KVPmanaCtOhA==",
                    "dev": true,
                    "requires": {
                        "dot-prop": "^5.2.0",
                        "indexes-of": "^1.0.1",
                        "uniq": "^1.0.1"
                    }
                }
            }
        },
        "postcss-minify-font-values": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/postcss-minify-font-values/-/postcss-minify-font-values-4.0.2.tgz",
            "integrity": "sha512-j85oO6OnRU9zPf04+PZv1LYIYOprWm6IA6zkXkrJXyRveDEuQggG6tvoy8ir8ZwjLxLuGfNkCZEQG7zan+Hbtg==",
            "dev": true,
            "requires": {
                "postcss": "^7.0.0",
                "postcss-value-parser": "^3.0.0"
            },
            "dependencies": {
                "postcss-value-parser": {
                    "version": "3.3.1",
                    "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
                    "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
                    "dev": true
                }
            }
        },
        "postcss-minify-gradients": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/postcss-minify-gradients/-/postcss-minify-gradients-4.0.2.tgz",
            "integrity": "sha512-qKPfwlONdcf/AndP1U8SJ/uzIJtowHlMaSioKzebAXSG4iJthlWC9iSWznQcX4f66gIWX44RSA841HTHj3wK+Q==",
            "dev": true,
            "requires": {
                "cssnano-util-get-arguments": "^4.0.0",
                "is-color-stop": "^1.0.0",
                "postcss": "^7.0.0",
                "postcss-value-parser": "^3.0.0"
            },
            "dependencies": {
                "postcss-value-parser": {
                    "version": "3.3.1",
                    "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
                    "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
                    "dev": true
                }
            }
        },
        "postcss-minify-params": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/postcss-minify-params/-/postcss-minify-params-4.0.2.tgz",
            "integrity": "sha512-G7eWyzEx0xL4/wiBBJxJOz48zAKV2WG3iZOqVhPet/9geefm/Px5uo1fzlHu+DOjT+m0Mmiz3jkQzVHe6wxAWg==",
            "dev": true,
            "requires": {
                "alphanum-sort": "^1.0.0",
                "browserslist": "^4.0.0",
                "cssnano-util-get-arguments": "^4.0.0",
                "postcss": "^7.0.0",
                "postcss-value-parser": "^3.0.0",
                "uniqs": "^2.0.0"
            },
            "dependencies": {
                "postcss-value-parser": {
                    "version": "3.3.1",
                    "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
                    "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
                    "dev": true
                }
            }
        },
        "postcss-minify-selectors": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/postcss-minify-selectors/-/postcss-minify-selectors-4.0.2.tgz",
            "integrity": "sha512-D5S1iViljXBj9kflQo4YutWnJmwm8VvIsU1GeXJGiG9j8CIg9zs4voPMdQDUmIxetUOh60VilsNzCiAFTOqu3g==",
            "dev": true,
            "requires": {
                "alphanum-sort": "^1.0.0",
                "has": "^1.0.0",
                "postcss": "^7.0.0",
                "postcss-selector-parser": "^3.0.0"
            },
            "dependencies": {
                "postcss-selector-parser": {
                    "version": "3.1.2",
                    "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-3.1.2.tgz",
                    "integrity": "sha512-h7fJ/5uWuRVyOtkO45pnt1Ih40CEleeyCHzipqAZO2e5H20g25Y48uYnFUiShvY4rZWNJ/Bib/KVPmanaCtOhA==",
                    "dev": true,
                    "requires": {
                        "dot-prop": "^5.2.0",
                        "indexes-of": "^1.0.1",
                        "uniq": "^1.0.1"
                    }
                }
            }
        },
        "postcss-modules-extract-imports": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/postcss-modules-extract-imports/-/postcss-modules-extract-imports-2.0.0.tgz",
            "integrity": "sha512-LaYLDNS4SG8Q5WAWqIJgdHPJrDDr/Lv775rMBFUbgjTz6j34lUznACHcdRWroPvXANP2Vj7yNK57vp9eFqzLWQ==",
            "dev": true,
            "requires": {
                "postcss": "^7.0.5"
            }
        },
        "postcss-modules-local-by-default": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/postcss-modules-local-by-default/-/postcss-modules-local-by-default-3.0.3.tgz",
            "integrity": "sha512-e3xDq+LotiGesympRlKNgaJ0PCzoUIdpH0dj47iWAui/kyTgh3CiAr1qP54uodmJhl6p9rN6BoNcdEDVJx9RDw==",
            "dev": true,
            "requires": {
                "icss-utils": "^4.1.1",
                "postcss": "^7.0.32",
                "postcss-selector-parser": "^6.0.2",
                "postcss-value-parser": "^4.1.0"
            }
        },
        "postcss-modules-scope": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/postcss-modules-scope/-/postcss-modules-scope-2.2.0.tgz",
            "integrity": "sha512-YyEgsTMRpNd+HmyC7H/mh3y+MeFWevy7V1evVhJWewmMbjDHIbZbOXICC2y+m1xI1UVfIT1HMW/O04Hxyu9oXQ==",
            "dev": true,
            "requires": {
                "postcss": "^7.0.6",
                "postcss-selector-parser": "^6.0.0"
            }
        },
        "postcss-modules-values": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/postcss-modules-values/-/postcss-modules-values-3.0.0.tgz",
            "integrity": "sha512-1//E5jCBrZ9DmRX+zCtmQtRSV6PV42Ix7Bzj9GbwJceduuf7IqP8MgeTXuRDHOWj2m0VzZD5+roFWDuU8RQjcg==",
            "dev": true,
            "requires": {
                "icss-utils": "^4.0.0",
                "postcss": "^7.0.6"
            }
        },
        "postcss-normalize-charset": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/postcss-normalize-charset/-/postcss-normalize-charset-4.0.1.tgz",
            "integrity": "sha512-gMXCrrlWh6G27U0hF3vNvR3w8I1s2wOBILvA87iNXaPvSNo5uZAMYsZG7XjCUf1eVxuPfyL4TJ7++SGZLc9A3g==",
            "dev": true,
            "requires": {
                "postcss": "^7.0.0"
            }
        },
        "postcss-normalize-display-values": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/postcss-normalize-display-values/-/postcss-normalize-display-values-4.0.2.tgz",
            "integrity": "sha512-3F2jcsaMW7+VtRMAqf/3m4cPFhPD3EFRgNs18u+k3lTJJlVe7d0YPO+bnwqo2xg8YiRpDXJI2u8A0wqJxMsQuQ==",
            "dev": true,
            "requires": {
                "cssnano-util-get-match": "^4.0.0",
                "postcss": "^7.0.0",
                "postcss-value-parser": "^3.0.0"
            },
            "dependencies": {
                "postcss-value-parser": {
                    "version": "3.3.1",
                    "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
                    "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
                    "dev": true
                }
            }
        },
        "postcss-normalize-positions": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/postcss-normalize-positions/-/postcss-normalize-positions-4.0.2.tgz",
            "integrity": "sha512-Dlf3/9AxpxE+NF1fJxYDeggi5WwV35MXGFnnoccP/9qDtFrTArZ0D0R+iKcg5WsUd8nUYMIl8yXDCtcrT8JrdA==",
            "dev": true,
            "requires": {
                "cssnano-util-get-arguments": "^4.0.0",
                "has": "^1.0.0",
                "postcss": "^7.0.0",
                "postcss-value-parser": "^3.0.0"
            },
            "dependencies": {
                "postcss-value-parser": {
                    "version": "3.3.1",
                    "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
                    "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
                    "dev": true
                }
            }
        },
        "postcss-normalize-repeat-style": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/postcss-normalize-repeat-style/-/postcss-normalize-repeat-style-4.0.2.tgz",
            "integrity": "sha512-qvigdYYMpSuoFs3Is/f5nHdRLJN/ITA7huIoCyqqENJe9PvPmLhNLMu7QTjPdtnVf6OcYYO5SHonx4+fbJE1+Q==",
            "dev": true,
            "requires": {
                "cssnano-util-get-arguments": "^4.0.0",
                "cssnano-util-get-match": "^4.0.0",
                "postcss": "^7.0.0",
                "postcss-value-parser": "^3.0.0"
            },
            "dependencies": {
                "postcss-value-parser": {
                    "version": "3.3.1",
                    "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
                    "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
                    "dev": true
                }
            }
        },
        "postcss-normalize-string": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/postcss-normalize-string/-/postcss-normalize-string-4.0.2.tgz",
            "integrity": "sha512-RrERod97Dnwqq49WNz8qo66ps0swYZDSb6rM57kN2J+aoyEAJfZ6bMx0sx/F9TIEX0xthPGCmeyiam/jXif0eA==",
            "dev": true,
            "requires": {
                "has": "^1.0.0",
                "postcss": "^7.0.0",
                "postcss-value-parser": "^3.0.0"
            },
            "dependencies": {
                "postcss-value-parser": {
                    "version": "3.3.1",
                    "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
                    "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
                    "dev": true
                }
            }
        },
        "postcss-normalize-timing-functions": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/postcss-normalize-timing-functions/-/postcss-normalize-timing-functions-4.0.2.tgz",
            "integrity": "sha512-acwJY95edP762e++00Ehq9L4sZCEcOPyaHwoaFOhIwWCDfik6YvqsYNxckee65JHLKzuNSSmAdxwD2Cud1Z54A==",
            "dev": true,
            "requires": {
                "cssnano-util-get-match": "^4.0.0",
                "postcss": "^7.0.0",
                "postcss-value-parser": "^3.0.0"
            },
            "dependencies": {
                "postcss-value-parser": {
                    "version": "3.3.1",
                    "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
                    "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
                    "dev": true
                }
            }
        },
        "postcss-normalize-unicode": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/postcss-normalize-unicode/-/postcss-normalize-unicode-4.0.1.tgz",
            "integrity": "sha512-od18Uq2wCYn+vZ/qCOeutvHjB5jm57ToxRaMeNuf0nWVHaP9Hua56QyMF6fs/4FSUnVIw0CBPsU0K4LnBPwYwg==",
            "dev": true,
            "requires": {
                "browserslist": "^4.0.0",
                "postcss": "^7.0.0",
                "postcss-value-parser": "^3.0.0"
            },
            "dependencies": {
                "postcss-value-parser": {
                    "version": "3.3.1",
                    "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
                    "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
                    "dev": true
                }
            }
        },
        "postcss-normalize-url": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/postcss-normalize-url/-/postcss-normalize-url-4.0.1.tgz",
            "integrity": "sha512-p5oVaF4+IHwu7VpMan/SSpmpYxcJMtkGppYf0VbdH5B6hN8YNmVyJLuY9FmLQTzY3fag5ESUUHDqM+heid0UVA==",
            "dev": true,
            "requires": {
                "is-absolute-url": "^2.0.0",
                "normalize-url": "^3.0.0",
                "postcss": "^7.0.0",
                "postcss-value-parser": "^3.0.0"
            },
            "dependencies": {
                "postcss-value-parser": {
                    "version": "3.3.1",
                    "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
                    "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
                    "dev": true
                }
            }
        },
        "postcss-normalize-whitespace": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/postcss-normalize-whitespace/-/postcss-normalize-whitespace-4.0.2.tgz",
            "integrity": "sha512-tO8QIgrsI3p95r8fyqKV+ufKlSHh9hMJqACqbv2XknufqEDhDvbguXGBBqxw9nsQoXWf0qOqppziKJKHMD4GtA==",
            "dev": true,
            "requires": {
                "postcss": "^7.0.0",
                "postcss-value-parser": "^3.0.0"
            },
            "dependencies": {
                "postcss-value-parser": {
                    "version": "3.3.1",
                    "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
                    "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
                    "dev": true
                }
            }
        },
        "postcss-ordered-values": {
            "version": "4.1.2",
            "resolved": "https://registry.npmjs.org/postcss-ordered-values/-/postcss-ordered-values-4.1.2.tgz",
            "integrity": "sha512-2fCObh5UanxvSxeXrtLtlwVThBvHn6MQcu4ksNT2tsaV2Fg76R2CV98W7wNSlX+5/pFwEyaDwKLLoEV7uRybAw==",
            "dev": true,
            "requires": {
                "cssnano-util-get-arguments": "^4.0.0",
                "postcss": "^7.0.0",
                "postcss-value-parser": "^3.0.0"
            },
            "dependencies": {
                "postcss-value-parser": {
                    "version": "3.3.1",
                    "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
                    "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
                    "dev": true
                }
            }
        },
        "postcss-reduce-initial": {
            "version": "4.0.3",
            "resolved": "https://registry.npmjs.org/postcss-reduce-initial/-/postcss-reduce-initial-4.0.3.tgz",
            "integrity": "sha512-gKWmR5aUulSjbzOfD9AlJiHCGH6AEVLaM0AV+aSioxUDd16qXP1PCh8d1/BGVvpdWn8k/HiK7n6TjeoXN1F7DA==",
            "dev": true,
            "requires": {
                "browserslist": "^4.0.0",
                "caniuse-api": "^3.0.0",
                "has": "^1.0.0",
                "postcss": "^7.0.0"
            }
        },
        "postcss-reduce-transforms": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/postcss-reduce-transforms/-/postcss-reduce-transforms-4.0.2.tgz",
            "integrity": "sha512-EEVig1Q2QJ4ELpJXMZR8Vt5DQx8/mo+dGWSR7vWXqcob2gQLyQGsionYcGKATXvQzMPn6DSN1vTN7yFximdIAg==",
            "dev": true,
            "requires": {
                "cssnano-util-get-match": "^4.0.0",
                "has": "^1.0.0",
                "postcss": "^7.0.0",
                "postcss-value-parser": "^3.0.0"
            },
            "dependencies": {
                "postcss-value-parser": {
                    "version": "3.3.1",
                    "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
                    "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
                    "dev": true
                }
            }
        },
        "postcss-selector-parser": {
            "version": "6.0.4",
            "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.0.4.tgz",
            "integrity": "sha512-gjMeXBempyInaBqpp8gODmwZ52WaYsVOsfr4L4lDQ7n3ncD6mEyySiDtgzCT+NYC0mmeOLvtsF8iaEf0YT6dBw==",
            "dev": true,
            "requires": {
                "cssesc": "^3.0.0",
                "indexes-of": "^1.0.1",
                "uniq": "^1.0.1",
                "util-deprecate": "^1.0.2"
            }
        },
        "postcss-svgo": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/postcss-svgo/-/postcss-svgo-4.0.2.tgz",
            "integrity": "sha512-C6wyjo3VwFm0QgBy+Fu7gCYOkCmgmClghO+pjcxvrcBKtiKt0uCF+hvbMO1fyv5BMImRK90SMb+dwUnfbGd+jw==",
            "dev": true,
            "requires": {
                "is-svg": "^3.0.0",
                "postcss": "^7.0.0",
                "postcss-value-parser": "^3.0.0",
                "svgo": "^1.0.0"
            },
            "dependencies": {
                "postcss-value-parser": {
                    "version": "3.3.1",
                    "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
                    "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
                    "dev": true
                }
            }
        },
        "postcss-unique-selectors": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/postcss-unique-selectors/-/postcss-unique-selectors-4.0.1.tgz",
            "integrity": "sha512-+JanVaryLo9QwZjKrmJgkI4Fn8SBgRO6WXQBJi7KiAVPlmxikB5Jzc4EvXMT2H0/m0RjrVVm9rGNhZddm/8Spg==",
            "dev": true,
            "requires": {
                "alphanum-sort": "^1.0.0",
                "postcss": "^7.0.0",
                "uniqs": "^2.0.0"
            }
        },
        "postcss-value-parser": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.1.0.tgz",
            "integrity": "sha512-97DXOFbQJhk71ne5/Mt6cOu6yxsSfM0QGQyl0L25Gca4yGWEGJaig7l7gbCX623VqTBNGLRLaVUCnNkcedlRSQ==",
            "dev": true
        },
        "prelude-ls": {
            "version": "1.2.1",
            "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
            "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
            "dev": true
        },
        "prepend-http": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/prepend-http/-/prepend-http-2.0.0.tgz",
            "integrity": "sha1-6SQ0v6XqjBn0HN/UAddBo8gZ2Jc=",
            "dev": true
        },
        "pretty-format": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-26.6.2.tgz",
            "integrity": "sha512-7AeGuCYNGmycyQbCqd/3PWH4eOoX/OiCa0uphp57NVTeAGdJGaAliecxwBDHYQCIvrW7aDBZCYeNTP/WX69mkg==",
            "dev": true,
            "requires": {
                "@jest/types": "^26.6.2",
                "ansi-regex": "^5.0.0",
                "ansi-styles": "^4.0.0",
                "react-is": "^17.0.1"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                }
            }
        },
        "primeicons": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/primeicons/-/primeicons-4.1.0.tgz",
            "integrity": "sha512-uEv2pSPk1zQCfaB2VgnUfnUxxlGryYi+5rbdxmZBBt5v9S/pscIQYS5YDLxsQZ7D9jn5c76+Tx5wX/2J1nK6sA=="
        },
        "primeng": {
            "version": "11.0.0-rc.1",
            "resolved": "https://registry.npmjs.org/primeng/-/primeng-11.0.0-rc.1.tgz",
            "integrity": "sha512-nxcspAiTUCo/zpqwYK4v4CanRyemUVBy8qVqkrdhlBP6wbsxtgRqMlBoTdt+vmVRJrbnUz/Kw4auS5jIZWQ71g==",
            "requires": {
                "tslib": "^2.0.0"
            }
        },
        "process": {
            "version": "0.11.10",
            "resolved": "https://registry.npmjs.org/process/-/process-0.11.10.tgz",
            "integrity": "sha1-czIwDoQBYb2j5podHZGn1LwW8YI=",
            "dev": true
        },
        "process-nextick-args": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
            "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==",
            "dev": true
        },
        "progress": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/progress/-/progress-2.0.3.tgz",
            "integrity": "sha512-7PiHtLll5LdnKIMw100I+8xJXR5gW2QwWYkT6iJva0bXitZKa/XMrSbdmg3r2Xnaidz9Qumd0VPaMrZlF9V9sA==",
            "dev": true
        },
        "promise-inflight": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/promise-inflight/-/promise-inflight-1.0.1.tgz",
            "integrity": "sha1-mEcocL8igTL8vdhoEputEsPAKeM=",
            "dev": true
        },
        "promise-retry": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/promise-retry/-/promise-retry-1.1.1.tgz",
            "integrity": "sha1-ZznpaOMFHaIM5kl/srUPaRHfPW0=",
            "dev": true,
            "requires": {
                "err-code": "^1.0.0",
                "retry": "^0.10.0"
            },
            "dependencies": {
                "retry": {
                    "version": "0.10.1",
                    "resolved": "https://registry.npmjs.org/retry/-/retry-0.10.1.tgz",
                    "integrity": "sha1-52OI0heZLCUnUCQdPTlW/tmNj/Q=",
                    "dev": true
                }
            }
        },
        "prompts": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/prompts/-/prompts-2.4.0.tgz",
            "integrity": "sha512-awZAKrk3vN6CroQukBL+R9051a4R3zCZBlJm/HBfrSZ8iTpYix3VX1vU4mveiLpiwmOJT4wokTF9m6HUk4KqWQ==",
            "dev": true,
            "requires": {
                "kleur": "^3.0.3",
                "sisteransi": "^1.0.5"
            }
        },
        "protoduck": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/protoduck/-/protoduck-5.0.1.tgz",
            "integrity": "sha512-WxoCeDCoCBY55BMvj4cAEjdVUFGRWed9ZxPlqTKYyw1nDDTQ4pqmnIMAGfJlg7Dx35uB/M+PHJPTmGOvaCaPTg==",
            "dev": true,
            "requires": {
                "genfun": "^5.0.0"
            }
        },
        "protractor": {
            "version": "7.0.0",
            "resolved": "https://registry.npmjs.org/protractor/-/protractor-7.0.0.tgz",
            "integrity": "sha512-UqkFjivi4GcvUQYzqGYNe0mLzfn5jiLmO8w9nMhQoJRLhy2grJonpga2IWhI6yJO30LibWXJJtA4MOIZD2GgZw==",
            "dev": true,
            "requires": {
                "@types/q": "^0.0.32",
                "@types/selenium-webdriver": "^3.0.0",
                "blocking-proxy": "^1.0.0",
                "browserstack": "^1.5.1",
                "chalk": "^1.1.3",
                "glob": "^7.0.3",
                "jasmine": "2.8.0",
                "jasminewd2": "^2.1.0",
                "q": "1.4.1",
                "saucelabs": "^1.5.0",
                "selenium-webdriver": "3.6.0",
                "source-map-support": "~0.4.0",
                "webdriver-js-extender": "2.1.0",
                "webdriver-manager": "^12.1.7",
                "yargs": "^15.3.1"
            },
            "dependencies": {
                "@types/q": {
                    "version": "0.0.32",
                    "resolved": "https://registry.npmjs.org/@types/q/-/q-0.0.32.tgz",
                    "integrity": "sha1-vShOV8hPEyXacCur/IKlMoGQwMU=",
                    "dev": true
                },
                "ansi-regex": {
                    "version": "2.1.1",
                    "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
                    "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
                    "dev": true
                },
                "ansi-styles": {
                    "version": "2.2.1",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",
                    "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4=",
                    "dev": true
                },
                "array-union": {
                    "version": "1.0.2",
                    "resolved": "https://registry.npmjs.org/array-union/-/array-union-1.0.2.tgz",
                    "integrity": "sha1-mjRBDk9OPaI96jdb5b5w8kd47Dk=",
                    "dev": true,
                    "requires": {
                        "array-uniq": "^1.0.1"
                    }
                },
                "camelcase": {
                    "version": "5.3.1",
                    "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
                    "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
                    "dev": true
                },
                "chalk": {
                    "version": "1.1.3",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",
                    "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^2.2.1",
                        "escape-string-regexp": "^1.0.2",
                        "has-ansi": "^2.0.0",
                        "strip-ansi": "^3.0.0",
                        "supports-color": "^2.0.0"
                    }
                },
                "cliui": {
                    "version": "6.0.0",
                    "resolved": "https://registry.npmjs.org/cliui/-/cliui-6.0.0.tgz",
                    "integrity": "sha512-t6wbgtoCXvAzst7QgXxJYqPt0usEfbgQdftEPbLL/cvv6HPE5VgvqCuAIDR0NgU52ds6rFwqrgakNLrHEjCbrQ==",
                    "dev": true,
                    "requires": {
                        "string-width": "^4.2.0",
                        "strip-ansi": "^6.0.0",
                        "wrap-ansi": "^6.2.0"
                    },
                    "dependencies": {
                        "ansi-regex": {
                            "version": "5.0.0",
                            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
                            "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg==",
                            "dev": true
                        },
                        "strip-ansi": {
                            "version": "6.0.0",
                            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
                            "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
                            "dev": true,
                            "requires": {
                                "ansi-regex": "^5.0.0"
                            }
                        }
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "del": {
                    "version": "2.2.2",
                    "resolved": "https://registry.npmjs.org/del/-/del-2.2.2.tgz",
                    "integrity": "sha1-wSyYHQZ4RshLyvhiz/kw2Qf/0ag=",
                    "dev": true,
                    "requires": {
                        "globby": "^5.0.0",
                        "is-path-cwd": "^1.0.0",
                        "is-path-in-cwd": "^1.0.0",
                        "object-assign": "^4.0.1",
                        "pify": "^2.0.0",
                        "pinkie-promise": "^2.0.0",
                        "rimraf": "^2.2.8"
                    }
                },
                "find-up": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
                    "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
                    "dev": true,
                    "requires": {
                        "locate-path": "^5.0.0",
                        "path-exists": "^4.0.0"
                    }
                },
                "globby": {
                    "version": "5.0.0",
                    "resolved": "https://registry.npmjs.org/globby/-/globby-5.0.0.tgz",
                    "integrity": "sha1-69hGZ8oNuzMLmbz8aOrCvFQ3Dg0=",
                    "dev": true,
                    "requires": {
                        "array-union": "^1.0.1",
                        "arrify": "^1.0.0",
                        "glob": "^7.0.3",
                        "object-assign": "^4.0.1",
                        "pify": "^2.0.0",
                        "pinkie-promise": "^2.0.0"
                    }
                },
                "is-path-cwd": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-path-cwd/-/is-path-cwd-1.0.0.tgz",
                    "integrity": "sha1-0iXsIxMuie3Tj9p2dHLmLmXxEG0=",
                    "dev": true
                },
                "is-path-in-cwd": {
                    "version": "1.0.1",
                    "resolved": "https://registry.npmjs.org/is-path-in-cwd/-/is-path-in-cwd-1.0.1.tgz",
                    "integrity": "sha512-FjV1RTW48E7CWM7eE/J2NJvAEEVektecDBVBE5Hh3nM1Jd0kvhHtX68Pr3xsDf857xt3Y4AkwVULK1Vku62aaQ==",
                    "dev": true,
                    "requires": {
                        "is-path-inside": "^1.0.0"
                    }
                },
                "is-path-inside": {
                    "version": "1.0.1",
                    "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-1.0.1.tgz",
                    "integrity": "sha1-jvW33lBDej/cprToZe96pVy0gDY=",
                    "dev": true,
                    "requires": {
                        "path-is-inside": "^1.0.1"
                    }
                },
                "locate-path": {
                    "version": "5.0.0",
                    "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
                    "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
                    "dev": true,
                    "requires": {
                        "p-locate": "^4.1.0"
                    }
                },
                "p-locate": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
                    "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
                    "dev": true,
                    "requires": {
                        "p-limit": "^2.2.0"
                    }
                },
                "path-exists": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
                    "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
                    "dev": true
                },
                "pify": {
                    "version": "2.3.0",
                    "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
                    "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
                    "dev": true
                },
                "q": {
                    "version": "1.4.1",
                    "resolved": "https://registry.npmjs.org/q/-/q-1.4.1.tgz",
                    "integrity": "sha1-VXBbzZPF82c1MMLCy8DCs63cKG4=",
                    "dev": true
                },
                "rimraf": {
                    "version": "2.7.1",
                    "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
                    "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
                    "dev": true,
                    "requires": {
                        "glob": "^7.1.3"
                    }
                },
                "semver": {
                    "version": "5.7.1",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
                    "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
                    "dev": true
                },
                "source-map": {
                    "version": "0.5.7",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
                    "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
                    "dev": true
                },
                "source-map-support": {
                    "version": "0.4.18",
                    "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.4.18.tgz",
                    "integrity": "sha512-try0/JqxPLF9nOjvSta7tVondkP5dwgyLDjVoyMDlmjugT2lRZ1OfsrYTkCd2hkDnJTKRbO/Rl3orm8vlsUzbA==",
                    "dev": true,
                    "requires": {
                        "source-map": "^0.5.6"
                    }
                },
                "strip-ansi": {
                    "version": "3.0.1",
                    "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
                    "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
                    "dev": true,
                    "requires": {
                        "ansi-regex": "^2.0.0"
                    }
                },
                "supports-color": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",
                    "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc=",
                    "dev": true
                },
                "webdriver-manager": {
                    "version": "12.1.7",
                    "resolved": "https://registry.npmjs.org/webdriver-manager/-/webdriver-manager-12.1.7.tgz",
                    "integrity": "sha512-XINj6b8CYuUYC93SG3xPkxlyUc3IJbD6Vvo75CVGuG9uzsefDzWQrhz0Lq8vbPxtb4d63CZdYophF8k8Or/YiA==",
                    "dev": true,
                    "requires": {
                        "adm-zip": "^0.4.9",
                        "chalk": "^1.1.1",
                        "del": "^2.2.0",
                        "glob": "^7.0.3",
                        "ini": "^1.3.4",
                        "minimist": "^1.2.0",
                        "q": "^1.4.1",
                        "request": "^2.87.0",
                        "rimraf": "^2.5.2",
                        "semver": "^5.3.0",
                        "xml2js": "^0.4.17"
                    }
                },
                "wrap-ansi": {
                    "version": "6.2.0",
                    "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-6.2.0.tgz",
                    "integrity": "sha512-r6lPcBGxZXlIcymEu7InxDMhdW0KDxpLgoFLcguasxCaJ/SOIZwINatK9KY/tf+ZrlywOKU0UDj3ATXUBfxJXA==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.0.0",
                        "string-width": "^4.1.0",
                        "strip-ansi": "^6.0.0"
                    },
                    "dependencies": {
                        "ansi-regex": {
                            "version": "5.0.0",
                            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
                            "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg==",
                            "dev": true
                        },
                        "ansi-styles": {
                            "version": "4.3.0",
                            "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                            "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                            "dev": true,
                            "requires": {
                                "color-convert": "^2.0.1"
                            }
                        },
                        "strip-ansi": {
                            "version": "6.0.0",
                            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
                            "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
                            "dev": true,
                            "requires": {
                                "ansi-regex": "^5.0.0"
                            }
                        }
                    }
                },
                "yargs": {
                    "version": "15.4.1",
                    "resolved": "https://registry.npmjs.org/yargs/-/yargs-15.4.1.tgz",
                    "integrity": "sha512-aePbxDmcYW++PaqBsJ+HYUFwCdv4LVvdnhBy78E57PIor8/OVvhMrADFFEDh8DHDFRv/O9i3lPhsENjO7QX0+A==",
                    "dev": true,
                    "requires": {
                        "cliui": "^6.0.0",
                        "decamelize": "^1.2.0",
                        "find-up": "^4.1.0",
                        "get-caller-file": "^2.0.1",
                        "require-directory": "^2.1.1",
                        "require-main-filename": "^2.0.0",
                        "set-blocking": "^2.0.0",
                        "string-width": "^4.2.0",
                        "which-module": "^2.0.0",
                        "y18n": "^4.0.0",
                        "yargs-parser": "^18.1.2"
                    }
                },
                "yargs-parser": {
                    "version": "18.1.3",
                    "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-18.1.3.tgz",
                    "integrity": "sha512-o50j0JeToy/4K6OZcaQmW6lyXXKhq7csREXcDwk2omFPJEwUNOVtJKvmDr9EI1fAJZUyZcRF7kxGBWmRXudrCQ==",
                    "dev": true,
                    "requires": {
                        "camelcase": "^5.0.0",
                        "decamelize": "^1.2.0"
                    }
                }
            }
        },
        "proxy-addr": {
            "version": "2.0.6",
            "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.6.tgz",
            "integrity": "sha512-dh/frvCBVmSsDYzw6n926jv974gddhkFPfiN8hPOi30Wax25QZyZEGveluCgliBnqmuM+UJmBErbAUFIoDbjOw==",
            "dev": true,
            "requires": {
                "forwarded": "~0.1.2",
                "ipaddr.js": "1.9.1"
            }
        },
        "prr": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/prr/-/prr-1.0.1.tgz",
            "integrity": "sha1-0/wRS6BplaRexok/SEzrHXj19HY=",
            "dev": true
        },
        "psl": {
            "version": "1.8.0",
            "resolved": "https://registry.npmjs.org/psl/-/psl-1.8.0.tgz",
            "integrity": "sha512-RIdOzyoavK+hA18OGGWDqUTsCLhtA7IcZ/6NCs4fFJaHBDab+pDDmDIByWFRQJq2Cd7r1OoQxBGKOaztq+hjIQ==",
            "dev": true
        },
        "public-encrypt": {
            "version": "4.0.3",
            "resolved": "https://registry.npmjs.org/public-encrypt/-/public-encrypt-4.0.3.tgz",
            "integrity": "sha512-zVpa8oKZSz5bTMTFClc1fQOnyyEzpl5ozpi1B5YcvBrdohMjH2rfsBtyXcuNuwjsDIXmBYlF2N5FlJYhR29t8Q==",
            "dev": true,
            "requires": {
                "bn.js": "^4.1.0",
                "browserify-rsa": "^4.0.0",
                "create-hash": "^1.1.0",
                "parse-asn1": "^5.0.0",
                "randombytes": "^2.0.1",
                "safe-buffer": "^5.1.2"
            },
            "dependencies": {
                "bn.js": {
                    "version": "4.11.9",
                    "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
                    "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
                    "dev": true
                }
            }
        },
        "pump": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.0.tgz",
            "integrity": "sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==",
            "dev": true,
            "requires": {
                "end-of-stream": "^1.1.0",
                "once": "^1.3.1"
            }
        },
        "pumpify": {
            "version": "1.5.1",
            "resolved": "https://registry.npmjs.org/pumpify/-/pumpify-1.5.1.tgz",
            "integrity": "sha512-oClZI37HvuUJJxSKKrC17bZ9Cu0ZYhEAGPsPUy9KlMUmv9dKX2o77RUmq7f3XjIxbwyGwYzbzQ1L2Ks8sIradQ==",
            "dev": true,
            "requires": {
                "duplexify": "^3.6.0",
                "inherits": "^2.0.3",
                "pump": "^2.0.0"
            },
            "dependencies": {
                "pump": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/pump/-/pump-2.0.1.tgz",
                    "integrity": "sha512-ruPMNRkN3MHP1cWJc9OWr+T/xDP0jhXYCLfJcBuX54hhfIBnaQmAUMfDcG4DM5UMWByBbJY69QSphm3jtDKIkA==",
                    "dev": true,
                    "requires": {
                        "end-of-stream": "^1.1.0",
                        "once": "^1.3.1"
                    }
                }
            }
        },
        "punycode": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
            "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A=="
        },
        "pupa": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/pupa/-/pupa-2.1.1.tgz",
            "integrity": "sha512-l1jNAspIBSFqbT+y+5FosojNpVpF94nlI+wDUpqP9enwOTfHx9f0gh5nB96vl+6yTpsJsypeNrwfzPrKuHB41A==",
            "dev": true,
            "requires": {
                "escape-goat": "^2.0.0"
            }
        },
        "q": {
            "version": "1.5.1",
            "resolved": "https://registry.npmjs.org/q/-/q-1.5.1.tgz",
            "integrity": "sha1-fjL3W0E4EpHQRhHxvxQQmsAGUdc=",
            "dev": true
        },
        "qs": {
            "version": "6.7.0",
            "resolved": "https://registry.npmjs.org/qs/-/qs-6.7.0.tgz",
            "integrity": "sha512-VCdBRNFTX1fyE7Nb6FYoURo/SPe62QCaAyzJvUjwRaIsc+NePBEniHlvxFmmX56+HZphIGtV0XeCirBtpDrTyQ==",
            "dev": true
        },
        "querystring": {
            "version": "0.2.0",
            "resolved": "https://registry.npmjs.org/querystring/-/querystring-0.2.0.tgz",
            "integrity": "sha1-sgmEkgO7Jd+CDadW50cAWHhSFiA=",
            "dev": true
        },
        "querystring-es3": {
            "version": "0.2.1",
            "resolved": "https://registry.npmjs.org/querystring-es3/-/querystring-es3-0.2.1.tgz",
            "integrity": "sha1-nsYfeQSYdXB9aUFFlv2Qek1xHnM=",
            "dev": true
        },
        "querystringify": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/querystringify/-/querystringify-2.2.0.tgz",
            "integrity": "sha512-FIqgj2EUvTa7R50u0rGsyTftzjYmv/a3hO345bZNrqabNqjtgiDMgmo4mkUjd+nzU5oF3dClKqFIPUKybUyqoQ==",
            "dev": true
        },
        "randombytes": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
            "integrity": "sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==",
            "dev": true,
            "requires": {
                "safe-buffer": "^5.1.0"
            }
        },
        "randomfill": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/randomfill/-/randomfill-1.0.4.tgz",
            "integrity": "sha512-87lcbR8+MhcWcUiQ+9e+Rwx8MyR2P7qnt15ynUlbm3TU/fjbgz4GsvfSUDTemtCCtVCqb4ZcEFlyPNTh9bBTLw==",
            "dev": true,
            "requires": {
                "randombytes": "^2.0.5",
                "safe-buffer": "^5.1.0"
            }
        },
        "range-parser": {
            "version": "1.2.1",
            "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
            "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
            "dev": true
        },
        "raw-body": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.4.0.tgz",
            "integrity": "sha512-4Oz8DUIwdvoa5qMJelxipzi/iJIi40O5cGV1wNYp5hvZP8ZN0T+jiNkL0QepXs+EsQ9XJ8ipEDoiH70ySUJP3Q==",
            "dev": true,
            "requires": {
                "bytes": "3.1.0",
                "http-errors": "1.7.2",
                "iconv-lite": "0.4.24",
                "unpipe": "1.0.0"
            },
            "dependencies": {
                "bytes": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.0.tgz",
                    "integrity": "sha512-zauLjrfCG+xvoyaqLoV8bLVXXNGC4JqlxFCutSDWA6fJrTo2ZuvLYTqZ7aHBLZSMOopbzwv8f+wZcVzfVTI2Dg==",
                    "dev": true
                }
            }
        },
        "raw-loader": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/raw-loader/-/raw-loader-4.0.2.tgz",
            "integrity": "sha512-ZnScIV3ag9A4wPX/ZayxL/jZH+euYb6FcUinPcgiQW0+UBtEv0O6Q3lGd3cqJ+GHH+rksEv3Pj99oxJ3u3VIKA==",
            "dev": true,
            "requires": {
                "loader-utils": "^2.0.0",
                "schema-utils": "^3.0.0"
            },
            "dependencies": {
                "schema-utils": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.0.0.tgz",
                    "integrity": "sha512-6D82/xSzO094ajanoOSbe4YvXWMfn2A//8Y1+MUqFAJul5Bs+yn36xbK9OtNDcRVSBJ9jjeoXftM6CfztsjOAA==",
                    "dev": true,
                    "requires": {
                        "@types/json-schema": "^7.0.6",
                        "ajv": "^6.12.5",
                        "ajv-keywords": "^3.5.2"
                    }
                }
            }
        },
        "rc": {
            "version": "1.2.8",
            "resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
            "integrity": "sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==",
            "dev": true,
            "requires": {
                "deep-extend": "^0.6.0",
                "ini": "~1.3.0",
                "minimist": "^1.2.0",
                "strip-json-comments": "~2.0.1"
            },
            "dependencies": {
                "strip-json-comments": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz",
                    "integrity": "sha1-PFMZQukIwml8DsNEhYwobHygpgo=",
                    "dev": true
                }
            }
        },
        "react-is": {
            "version": "17.0.1",
            "resolved": "https://registry.npmjs.org/react-is/-/react-is-17.0.1.tgz",
            "integrity": "sha512-NAnt2iGDXohE5LI7uBnLnqvLQMtzhkiAOLXTmv+qnF9Ky7xAPcX8Up/xWIhxvLVGJvuLiNc4xQLtuqDRzb4fSA==",
            "dev": true
        },
        "read-cache": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz",
            "integrity": "sha1-5mTvMRYRZsl1HNvo28+GtftY93Q=",
            "dev": true,
            "requires": {
                "pify": "^2.3.0"
            },
            "dependencies": {
                "pify": {
                    "version": "2.3.0",
                    "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
                    "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
                    "dev": true
                }
            }
        },
        "read-pkg": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-2.0.0.tgz",
            "integrity": "sha1-jvHAYjxqbbDcZxPEv6xGMysjaPg=",
            "dev": true,
            "requires": {
                "load-json-file": "^2.0.0",
                "normalize-package-data": "^2.3.2",
                "path-type": "^2.0.0"
            },
            "dependencies": {
                "path-type": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/path-type/-/path-type-2.0.0.tgz",
                    "integrity": "sha1-8BLMuEFbcJb8LaoQVMPXI4lZTHM=",
                    "dev": true,
                    "requires": {
                        "pify": "^2.0.0"
                    }
                },
                "pify": {
                    "version": "2.3.0",
                    "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
                    "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
                    "dev": true
                }
            }
        },
        "read-pkg-up": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-2.0.0.tgz",
            "integrity": "sha1-a3KoBImE4MQeeVEP1en6mbO1Sb4=",
            "dev": true,
            "requires": {
                "find-up": "^2.0.0",
                "read-pkg": "^2.0.0"
            },
            "dependencies": {
                "find-up": {
                    "version": "2.1.0",
                    "resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",
                    "integrity": "sha1-RdG35QbHF93UgndaK3eSCjwMV6c=",
                    "dev": true,
                    "requires": {
                        "locate-path": "^2.0.0"
                    }
                },
                "locate-path": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz",
                    "integrity": "sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=",
                    "dev": true,
                    "requires": {
                        "p-locate": "^2.0.0",
                        "path-exists": "^3.0.0"
                    }
                },
                "p-limit": {
                    "version": "1.3.0",
                    "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-1.3.0.tgz",
                    "integrity": "sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==",
                    "dev": true,
                    "requires": {
                        "p-try": "^1.0.0"
                    }
                },
                "p-locate": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz",
                    "integrity": "sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=",
                    "dev": true,
                    "requires": {
                        "p-limit": "^1.1.0"
                    }
                },
                "p-try": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz",
                    "integrity": "sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M=",
                    "dev": true
                }
            }
        },
        "readable-stream": {
            "version": "2.3.7",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
            "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
            "dev": true,
            "requires": {
                "core-util-is": "~1.0.0",
                "inherits": "~2.0.3",
                "isarray": "~1.0.0",
                "process-nextick-args": "~2.0.0",
                "safe-buffer": "~5.1.1",
                "string_decoder": "~1.1.1",
                "util-deprecate": "~1.0.1"
            }
        },
        "readdirp": {
            "version": "3.5.0",
            "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.5.0.tgz",
            "integrity": "sha512-cMhu7c/8rdhkHXWsY+osBhfSy0JikwpHK/5+imo+LpeasTF8ouErHrlYkwT0++njiyuDvc7OFY5T3ukvZ8qmFQ==",
            "dev": true,
            "requires": {
                "picomatch": "^2.2.1"
            }
        },
        "reflect-metadata": {
            "version": "0.1.13",
            "resolved": "https://registry.npmjs.org/reflect-metadata/-/reflect-metadata-0.1.13.tgz",
            "integrity": "sha512-Ts1Y/anZELhSsjMcU605fU9RE4Oi3p5ORujwbIKXfWa+0Zxs510Qrmrce5/Jowq3cHSZSJqBjypxmHarc+vEWg==",
            "dev": true
        },
        "regenerate": {
            "version": "1.4.2",
            "resolved": "https://registry.npmjs.org/regenerate/-/regenerate-1.4.2.tgz",
            "integrity": "sha512-zrceR/XhGYU/d/opr2EKO7aRHUeiBI8qjtfHqADTwZd6Szfy16la6kqD0MIUs5z5hx6AaKa+PixpPrR289+I0A==",
            "dev": true
        },
        "regenerate-unicode-properties": {
            "version": "8.2.0",
            "resolved": "https://registry.npmjs.org/regenerate-unicode-properties/-/regenerate-unicode-properties-8.2.0.tgz",
            "integrity": "sha512-F9DjY1vKLo/tPePDycuH3dn9H1OTPIkVD9Kz4LODu+F2C75mgjAJ7x/gwy6ZcSNRAAkhNlJSOHRe8k3p+K9WhA==",
            "dev": true,
            "requires": {
                "regenerate": "^1.4.0"
            }
        },
        "regenerator-runtime": {
            "version": "0.13.7",
            "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.7.tgz",
            "integrity": "sha512-a54FxoJDIr27pgf7IgeQGxmqUNYrcV338lf/6gH456HZ/PhX+5BcwHXG9ajESmwe6WRO0tAzRUrRmNONWgkrew==",
            "dev": true
        },
        "regenerator-transform": {
            "version": "0.14.5",
            "resolved": "https://registry.npmjs.org/regenerator-transform/-/regenerator-transform-0.14.5.tgz",
            "integrity": "sha512-eOf6vka5IO151Jfsw2NO9WpGX58W6wWmefK3I1zEGr0lOD0u8rwPaNqQL1aRxUaxLeKO3ArNh3VYg1KbaD+FFw==",
            "dev": true,
            "requires": {
                "@babel/runtime": "^7.8.4"
            }
        },
        "regex-not": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/regex-not/-/regex-not-1.0.2.tgz",
            "integrity": "sha512-J6SDjUgDxQj5NusnOtdFxDwN/+HWykR8GELwctJ7mdqhcyy1xEc4SRFHUXvxTp661YaVKAjfRLZ9cCqS6tn32A==",
            "dev": true,
            "requires": {
                "extend-shallow": "^3.0.2",
                "safe-regex": "^1.1.0"
            }
        },
        "regex-parser": {
            "version": "2.2.11",
            "resolved": "https://registry.npmjs.org/regex-parser/-/regex-parser-2.2.11.tgz",
            "integrity": "sha512-jbD/FT0+9MBU2XAZluI7w2OBs1RBi6p9M83nkoZayQXXU9e8Robt69FcZc7wU4eJD/YFTjn1JdCk3rbMJajz8Q==",
            "dev": true
        },
        "regexp.prototype.flags": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.3.0.tgz",
            "integrity": "sha512-2+Q0C5g951OlYlJz6yu5/M33IcsESLlLfsyIaLJaG4FA2r4yP8MvVMJUUP/fVBkSpbbbZlS5gynbEWLipiiXiQ==",
            "dev": true,
            "requires": {
                "define-properties": "^1.1.3",
                "es-abstract": "^1.17.0-next.1"
            }
        },
        "regexpp": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/regexpp/-/regexpp-3.1.0.tgz",
            "integrity": "sha512-ZOIzd8yVsQQA7j8GCSlPGXwg5PfmA1mrq0JP4nGhh54LaKN3xdai/vHUDu74pKwV8OxseMS65u2NImosQcSD0Q==",
            "dev": true
        },
        "regexpu-core": {
            "version": "4.7.1",
            "resolved": "https://registry.npmjs.org/regexpu-core/-/regexpu-core-4.7.1.tgz",
            "integrity": "sha512-ywH2VUraA44DZQuRKzARmw6S66mr48pQVva4LBeRhcOltJ6hExvWly5ZjFLYo67xbIxb6W1q4bAGtgfEl20zfQ==",
            "dev": true,
            "requires": {
                "regenerate": "^1.4.0",
                "regenerate-unicode-properties": "^8.2.0",
                "regjsgen": "^0.5.1",
                "regjsparser": "^0.6.4",
                "unicode-match-property-ecmascript": "^1.0.4",
                "unicode-match-property-value-ecmascript": "^1.2.0"
            }
        },
        "regextras": {
            "version": "0.7.1",
            "resolved": "https://registry.npmjs.org/regextras/-/regextras-0.7.1.tgz",
            "integrity": "sha512-9YXf6xtW+qzQ+hcMQXx95MOvfqXFgsKDZodX3qZB0x2n5Z94ioetIITsBtvJbiOyxa/6s9AtyweBLCdPmPko/w==",
            "dev": true
        },
        "registry-auth-token": {
            "version": "4.2.1",
            "resolved": "https://registry.npmjs.org/registry-auth-token/-/registry-auth-token-4.2.1.tgz",
            "integrity": "sha512-6gkSb4U6aWJB4SF2ZvLb76yCBjcvufXBqvvEx1HbmKPkutswjW1xNVRY0+daljIYRbogN7O0etYSlbiaEQyMyw==",
            "dev": true,
            "requires": {
                "rc": "^1.2.8"
            }
        },
        "registry-url": {
            "version": "5.1.0",
            "resolved": "https://registry.npmjs.org/registry-url/-/registry-url-5.1.0.tgz",
            "integrity": "sha512-8acYXXTI0AkQv6RAOjE3vOaIXZkT9wo4LOFbBKYQEEnnMNBpKqdUrI6S4NT0KPIo/WVvJ5tE/X5LF/TQUf0ekw==",
            "dev": true,
            "requires": {
                "rc": "^1.2.8"
            }
        },
        "regjsgen": {
            "version": "0.5.2",
            "resolved": "https://registry.npmjs.org/regjsgen/-/regjsgen-0.5.2.tgz",
            "integrity": "sha512-OFFT3MfrH90xIW8OOSyUrk6QHD5E9JOTeGodiJeBS3J6IwlgzJMNE/1bZklWz5oTg+9dCMyEetclvCVXOPoN3A==",
            "dev": true
        },
        "regjsparser": {
            "version": "0.6.4",
            "resolved": "https://registry.npmjs.org/regjsparser/-/regjsparser-0.6.4.tgz",
            "integrity": "sha512-64O87/dPDgfk8/RQqC4gkZoGyyWFIEUTTh80CU6CWuK5vkCGyekIx+oKcEIYtP/RAxSQltCZHCNu/mdd7fqlJw==",
            "dev": true,
            "requires": {
                "jsesc": "~0.5.0"
            },
            "dependencies": {
                "jsesc": {
                    "version": "0.5.0",
                    "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-0.5.0.tgz",
                    "integrity": "sha1-597mbjXW/Bb3EP6R1c9p9w8IkR0=",
                    "dev": true
                }
            }
        },
        "remove-trailing-separator": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/remove-trailing-separator/-/remove-trailing-separator-1.1.0.tgz",
            "integrity": "sha1-wkvOKig62tW8P1jg1IJJuSN52O8=",
            "dev": true
        },
        "repeat-element": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/repeat-element/-/repeat-element-1.1.3.tgz",
            "integrity": "sha512-ahGq0ZnV5m5XtZLMb+vP76kcAM5nkLqk0lpqAuojSKGgQtn4eRi4ZZGm2olo2zKFH+sMsWaqOCW1dqAnOru72g==",
            "dev": true
        },
        "repeat-string": {
            "version": "1.6.1",
            "resolved": "https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz",
            "integrity": "sha1-jcrkcOHIirwtYA//Sndihtp15jc=",
            "dev": true
        },
        "request": {
            "version": "2.88.2",
            "resolved": "https://registry.npmjs.org/request/-/request-2.88.2.tgz",
            "integrity": "sha512-MsvtOrfG9ZcrOwAW+Qi+F6HbD0CWXEh9ou77uOb7FM2WPhwT7smM833PzanhJLsgXjN89Ir6V2PczXNnMpwKhw==",
            "dev": true,
            "requires": {
                "aws-sign2": "~0.7.0",
                "aws4": "^1.8.0",
                "caseless": "~0.12.0",
                "combined-stream": "~1.0.6",
                "extend": "~3.0.2",
                "forever-agent": "~0.6.1",
                "form-data": "~2.3.2",
                "har-validator": "~5.1.3",
                "http-signature": "~1.2.0",
                "is-typedarray": "~1.0.0",
                "isstream": "~0.1.2",
                "json-stringify-safe": "~5.0.1",
                "mime-types": "~2.1.19",
                "oauth-sign": "~0.9.0",
                "performance-now": "^2.1.0",
                "qs": "~6.5.2",
                "safe-buffer": "^5.1.2",
                "tough-cookie": "~2.5.0",
                "tunnel-agent": "^0.6.0",
                "uuid": "^3.3.2"
            },
            "dependencies": {
                "qs": {
                    "version": "6.5.2",
                    "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.2.tgz",
                    "integrity": "sha512-N5ZAX4/LxJmF+7wN74pUD6qAh9/wnvdQcjq9TZjevvXzSUo7bfmw91saqMjzGS2xq91/odN2dW/WOl7qQHNDGA==",
                    "dev": true
                }
            }
        },
        "request-promise-core": {
            "version": "1.1.4",
            "resolved": "https://registry.npmjs.org/request-promise-core/-/request-promise-core-1.1.4.tgz",
            "integrity": "sha512-TTbAfBBRdWD7aNNOoVOBH4pN/KigV6LyapYNNlAPA8JwbovRti1E88m3sYAwsLi5ryhPKsE9APwnjFTgdUjTpw==",
            "dev": true,
            "requires": {
                "lodash": "^4.17.19"
            }
        },
        "request-promise-native": {
            "version": "1.0.9",
            "resolved": "https://registry.npmjs.org/request-promise-native/-/request-promise-native-1.0.9.tgz",
            "integrity": "sha512-wcW+sIUiWnKgNY0dqCpOZkUbF/I+YPi+f09JZIDa39Ec+q82CpSYniDp+ISgTTbKmnpJWASeJBPZmoxH84wt3g==",
            "dev": true,
            "requires": {
                "request-promise-core": "1.1.4",
                "stealthy-require": "^1.1.1",
                "tough-cookie": "^2.3.3"
            }
        },
        "require-directory": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
            "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I=",
            "dev": true
        },
        "require-main-filename": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-2.0.0.tgz",
            "integrity": "sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg==",
            "dev": true
        },
        "requires-port": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/requires-port/-/requires-port-1.0.0.tgz",
            "integrity": "sha1-kl0mAdOaxIXgkc8NpcbmlNw9yv8=",
            "dev": true
        },
        "resolve": {
            "version": "1.19.0",
            "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.19.0.tgz",
            "integrity": "sha512-rArEXAgsBG4UgRGcynxWIWKFvh/XZCcS8UJdHhwy91zwAvCZIbcs+vAbflgBnNjYMs/i/i+/Ux6IZhML1yPvxg==",
            "dev": true,
            "requires": {
                "is-core-module": "^2.1.0",
                "path-parse": "^1.0.6"
            }
        },
        "resolve-cwd": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/resolve-cwd/-/resolve-cwd-2.0.0.tgz",
            "integrity": "sha1-AKn3OHVW4nA46uIyyqNypqWbZlo=",
            "dev": true,
            "requires": {
                "resolve-from": "^3.0.0"
            }
        },
        "resolve-from": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-3.0.0.tgz",
            "integrity": "sha1-six699nWiBvItuZTM17rywoYh0g=",
            "dev": true
        },
        "resolve-url": {
            "version": "0.2.1",
            "resolved": "https://registry.npmjs.org/resolve-url/-/resolve-url-0.2.1.tgz",
            "integrity": "sha1-LGN/53yJOv0qZj/iGqkIAGjiBSo=",
            "dev": true
        },
        "resolve-url-loader": {
            "version": "3.1.2",
            "resolved": "https://registry.npmjs.org/resolve-url-loader/-/resolve-url-loader-3.1.2.tgz",
            "integrity": "sha512-QEb4A76c8Mi7I3xNKXlRKQSlLBwjUV/ULFMP+G7n3/7tJZ8MG5wsZ3ucxP1Jz8Vevn6fnJsxDx9cIls+utGzPQ==",
            "dev": true,
            "requires": {
                "adjust-sourcemap-loader": "3.0.0",
                "camelcase": "5.3.1",
                "compose-function": "3.0.3",
                "convert-source-map": "1.7.0",
                "es6-iterator": "2.0.3",
                "loader-utils": "1.2.3",
                "postcss": "7.0.21",
                "rework": "1.0.1",
                "rework-visit": "1.0.0",
                "source-map": "0.6.1"
            },
            "dependencies": {
                "camelcase": {
                    "version": "5.3.1",
                    "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
                    "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
                    "dev": true
                },
                "emojis-list": {
                    "version": "2.1.0",
                    "resolved": "https://registry.npmjs.org/emojis-list/-/emojis-list-2.1.0.tgz",
                    "integrity": "sha1-TapNnbAPmBmIDHn6RXrlsJof04k=",
                    "dev": true
                },
                "json5": {
                    "version": "1.0.1",
                    "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
                    "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
                    "dev": true,
                    "requires": {
                        "minimist": "^1.2.0"
                    }
                },
                "loader-utils": {
                    "version": "1.2.3",
                    "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-1.2.3.tgz",
                    "integrity": "sha512-fkpz8ejdnEMG3s37wGL07iSBDg99O9D5yflE9RGNH3hRdx9SOwYfnGYdZOUIZitN8E+E2vkq3MUMYMvPYl5ZZA==",
                    "dev": true,
                    "requires": {
                        "big.js": "^5.2.2",
                        "emojis-list": "^2.0.0",
                        "json5": "^1.0.1"
                    }
                },
                "postcss": {
                    "version": "7.0.21",
                    "resolved": "https://registry.npmjs.org/postcss/-/postcss-7.0.21.tgz",
                    "integrity": "sha512-uIFtJElxJo29QC753JzhidoAhvp/e/Exezkdhfmt8AymWT6/5B7W1WmponYWkHk2eg6sONyTch0A3nkMPun3SQ==",
                    "dev": true,
                    "requires": {
                        "chalk": "^2.4.2",
                        "source-map": "^0.6.1",
                        "supports-color": "^6.1.0"
                    }
                },
                "source-map": {
                    "version": "0.6.1",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                    "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                    "dev": true
                },
                "supports-color": {
                    "version": "6.1.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
                    "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^3.0.0"
                    }
                }
            }
        },
        "responselike": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/responselike/-/responselike-1.0.2.tgz",
            "integrity": "sha1-kYcg7ztjHFZCvgaPFa3lpG9Loec=",
            "dev": true,
            "requires": {
                "lowercase-keys": "^1.0.0"
            }
        },
        "restore-cursor": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-3.1.0.tgz",
            "integrity": "sha512-l+sSefzHpj5qimhFSE5a8nufZYAM3sBSVMAPtYkmC+4EH2anSGaEMXSD0izRQbu9nfyQ9y5JrVmp7E8oZrUjvA==",
            "requires": {
                "onetime": "^5.1.0",
                "signal-exit": "^3.0.2"
            }
        },
        "ret": {
            "version": "0.1.15",
            "resolved": "https://registry.npmjs.org/ret/-/ret-0.1.15.tgz",
            "integrity": "sha512-TTlYpa+OL+vMMNG24xSlQGEJ3B/RzEfUlLct7b5G/ytav+wPrplCpVMFuwzXbkecJrb6IYo1iFb0S9v37754mg==",
            "dev": true
        },
        "retry": {
            "version": "0.12.0",
            "resolved": "https://registry.npmjs.org/retry/-/retry-0.12.0.tgz",
            "integrity": "sha1-G0KmJmoh8HQh0bC1S33BZ7AcATs=",
            "dev": true
        },
        "reusify": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
            "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==",
            "dev": true
        },
        "rework": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/rework/-/rework-1.0.1.tgz",
            "integrity": "sha1-MIBqhBNCtUUQqkEQhQzUhTQUSqc=",
            "dev": true,
            "requires": {
                "convert-source-map": "^0.3.3",
                "css": "^2.0.0"
            },
            "dependencies": {
                "convert-source-map": {
                    "version": "0.3.5",
                    "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-0.3.5.tgz",
                    "integrity": "sha1-8dgClQr33SYxof6+BZZVDIarMZA=",
                    "dev": true
                }
            }
        },
        "rework-visit": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/rework-visit/-/rework-visit-1.0.0.tgz",
            "integrity": "sha1-mUWygD8hni96ygCtuLyfZA+ELJo=",
            "dev": true
        },
        "rgb-regex": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/rgb-regex/-/rgb-regex-1.0.1.tgz",
            "integrity": "sha1-wODWiC3w4jviVKR16O3UGRX+rrE=",
            "dev": true
        },
        "rgba-regex": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/rgba-regex/-/rgba-regex-1.0.0.tgz",
            "integrity": "sha1-QzdOLiyglosO8VI0YLfXMP8i7rM=",
            "dev": true
        },
        "rimraf": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
            "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
            "dev": true,
            "requires": {
                "glob": "^7.1.3"
            }
        },
        "ripemd160": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/ripemd160/-/ripemd160-2.0.2.tgz",
            "integrity": "sha512-ii4iagi25WusVoiC4B4lq7pbXfAp3D9v5CwfkY33vffw2+pkDjY1D8GaN7spsxvCSx8dkPqOZCEZyfxcmJG2IA==",
            "dev": true,
            "requires": {
                "hash-base": "^3.0.0",
                "inherits": "^2.0.1"
            }
        },
        "rollup": {
            "version": "2.32.1",
            "resolved": "https://registry.npmjs.org/rollup/-/rollup-2.32.1.tgz",
            "integrity": "sha512-Op2vWTpvK7t6/Qnm1TTh7VjEZZkN8RWgf0DHbkKzQBwNf748YhXbozHVefqpPp/Fuyk/PQPAnYsBxAEtlMvpUw==",
            "dev": true,
            "requires": {
                "fsevents": "~2.1.2"
            }
        },
        "rsvp": {
            "version": "4.8.5",
            "resolved": "https://registry.npmjs.org/rsvp/-/rsvp-4.8.5.tgz",
            "integrity": "sha512-nfMOlASu9OnRJo1mbEk2cz0D56a1MBNrJ7orjRZQG10XDyuvwksKbuXNp6qa+kbn839HwjwhBzhFmdsaEAfauA==",
            "dev": true
        },
        "run-async": {
            "version": "2.4.1",
            "resolved": "https://registry.npmjs.org/run-async/-/run-async-2.4.1.tgz",
            "integrity": "sha512-tvVnVv01b8c1RrA6Ep7JkStj85Guv/YrMcwqYQnwjsAS2cTmmPGBBjAjpCW7RrSodNSoE2/qg9O4bceNvUuDgQ=="
        },
        "run-parallel": {
            "version": "1.1.10",
            "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.1.10.tgz",
            "integrity": "sha512-zb/1OuZ6flOlH6tQyMPUrE3x3Ulxjlo9WIVXR4yVYi4H9UXQaeIsPbLn2R3O3vQCnDKkAl2qHiuocKKX4Tz/Sw==",
            "dev": true
        },
        "run-queue": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/run-queue/-/run-queue-1.0.3.tgz",
            "integrity": "sha1-6Eg5bwV9Ij8kOGkkYY4laUFh7Ec=",
            "dev": true,
            "requires": {
                "aproba": "^1.1.1"
            }
        },
        "rx-lite": {
            "version": "4.0.8",
            "resolved": "https://registry.npmjs.org/rx-lite/-/rx-lite-4.0.8.tgz",
            "integrity": "sha1-Cx4Rr4vESDbwSmQH6S2kJGe3lEQ="
        },
        "rx-lite-aggregates": {
            "version": "4.0.8",
            "resolved": "https://registry.npmjs.org/rx-lite-aggregates/-/rx-lite-aggregates-4.0.8.tgz",
            "integrity": "sha1-dTuHqJoRyVRnxKwWJsTvxOBcZ74=",
            "requires": {
                "rx-lite": "*"
            }
        },
        "rxjs": {
            "version": "6.6.3",
            "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.6.3.tgz",
            "integrity": "sha512-trsQc+xYYXZ3urjOiJOuCOa5N3jAZ3eiSpQB5hIT8zGlL2QfnHLJ2r7GMkBGuIausdJN1OneaI6gQlsqNHHmZQ==",
            "requires": {
                "tslib": "^1.9.0"
            },
            "dependencies": {
                "tslib": {
                    "version": "1.14.1",
                    "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
                    "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
                }
            }
        },
        "safe-buffer": {
            "version": "5.1.2",
            "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
            "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
            "dev": true
        },
        "safe-regex": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/safe-regex/-/safe-regex-1.1.0.tgz",
            "integrity": "sha1-QKNmnzsHfR6UPURinhV91IAjvy4=",
            "dev": true,
            "requires": {
                "ret": "~0.1.10"
            }
        },
        "safer-buffer": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
            "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
        },
        "sane": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/sane/-/sane-4.1.0.tgz",
            "integrity": "sha512-hhbzAgTIX8O7SHfp2c8/kREfEn4qO/9q8C9beyY6+tvZ87EpoZ3i1RIEvp27YBswnNbY9mWd6paKVmKbAgLfZA==",
            "dev": true,
            "requires": {
                "@cnakazawa/watch": "^1.0.3",
                "anymatch": "^2.0.0",
                "capture-exit": "^2.0.0",
                "exec-sh": "^0.3.2",
                "execa": "^1.0.0",
                "fb-watchman": "^2.0.0",
                "micromatch": "^3.1.4",
                "minimist": "^1.1.1",
                "walker": "~1.0.5"
            },
            "dependencies": {
                "anymatch": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",
                    "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",
                    "dev": true,
                    "requires": {
                        "micromatch": "^3.1.4",
                        "normalize-path": "^2.1.1"
                    }
                },
                "braces": {
                    "version": "2.3.2",
                    "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
                    "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
                    "dev": true,
                    "requires": {
                        "arr-flatten": "^1.1.0",
                        "array-unique": "^0.3.2",
                        "extend-shallow": "^2.0.1",
                        "fill-range": "^4.0.0",
                        "isobject": "^3.0.1",
                        "repeat-element": "^1.1.2",
                        "snapdragon": "^0.8.1",
                        "snapdragon-node": "^2.0.1",
                        "split-string": "^3.0.2",
                        "to-regex": "^3.0.1"
                    },
                    "dependencies": {
                        "extend-shallow": {
                            "version": "2.0.1",
                            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                            "dev": true,
                            "requires": {
                                "is-extendable": "^0.1.0"
                            }
                        }
                    }
                },
                "fill-range": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
                    "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
                    "dev": true,
                    "requires": {
                        "extend-shallow": "^2.0.1",
                        "is-number": "^3.0.0",
                        "repeat-string": "^1.6.1",
                        "to-regex-range": "^2.1.0"
                    },
                    "dependencies": {
                        "extend-shallow": {
                            "version": "2.0.1",
                            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                            "dev": true,
                            "requires": {
                                "is-extendable": "^0.1.0"
                            }
                        }
                    }
                },
                "is-number": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
                    "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
                    "dev": true,
                    "requires": {
                        "kind-of": "^3.0.2"
                    },
                    "dependencies": {
                        "kind-of": {
                            "version": "3.2.2",
                            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                            "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                            "dev": true,
                            "requires": {
                                "is-buffer": "^1.1.5"
                            }
                        }
                    }
                },
                "micromatch": {
                    "version": "3.1.10",
                    "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
                    "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
                    "dev": true,
                    "requires": {
                        "arr-diff": "^4.0.0",
                        "array-unique": "^0.3.2",
                        "braces": "^2.3.1",
                        "define-property": "^2.0.2",
                        "extend-shallow": "^3.0.2",
                        "extglob": "^2.0.4",
                        "fragment-cache": "^0.2.1",
                        "kind-of": "^6.0.2",
                        "nanomatch": "^1.2.9",
                        "object.pick": "^1.3.0",
                        "regex-not": "^1.0.0",
                        "snapdragon": "^0.8.1",
                        "to-regex": "^3.0.2"
                    }
                },
                "normalize-path": {
                    "version": "2.1.1",
                    "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
                    "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
                    "dev": true,
                    "requires": {
                        "remove-trailing-separator": "^1.0.1"
                    }
                },
                "to-regex-range": {
                    "version": "2.1.1",
                    "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
                    "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
                    "dev": true,
                    "requires": {
                        "is-number": "^3.0.0",
                        "repeat-string": "^1.6.1"
                    }
                }
            }
        },
        "sass": {
            "version": "1.27.0",
            "resolved": "https://registry.npmjs.org/sass/-/sass-1.27.0.tgz",
            "integrity": "sha512-0gcrER56OkzotK/GGwgg4fPrKuiFlPNitO7eUJ18Bs+/NBlofJfMxmxqpqJxjae9vu0Wq8TZzrSyxZal00WDig==",
            "dev": true,
            "requires": {
                "chokidar": ">=2.0.0 <4.0.0"
            }
        },
        "sass-loader": {
            "version": "10.0.5",
            "resolved": "https://registry.npmjs.org/sass-loader/-/sass-loader-10.0.5.tgz",
            "integrity": "sha512-2LqoNPtKkZq/XbXNQ4C64GFEleSEHKv6NPSI+bMC/l+jpEXGJhiRYkAQToO24MR7NU4JRY2RpLpJ/gjo2Uf13w==",
            "dev": true,
            "requires": {
                "klona": "^2.0.4",
                "loader-utils": "^2.0.0",
                "neo-async": "^2.6.2",
                "schema-utils": "^3.0.0",
                "semver": "^7.3.2"
            },
            "dependencies": {
                "schema-utils": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.0.0.tgz",
                    "integrity": "sha512-6D82/xSzO094ajanoOSbe4YvXWMfn2A//8Y1+MUqFAJul5Bs+yn36xbK9OtNDcRVSBJ9jjeoXftM6CfztsjOAA==",
                    "dev": true,
                    "requires": {
                        "@types/json-schema": "^7.0.6",
                        "ajv": "^6.12.5",
                        "ajv-keywords": "^3.5.2"
                    }
                }
            }
        },
        "saucelabs": {
            "version": "1.5.0",
            "resolved": "https://registry.npmjs.org/saucelabs/-/saucelabs-1.5.0.tgz",
            "integrity": "sha512-jlX3FGdWvYf4Q3LFfFWS1QvPg3IGCGWxIc8QBFdPTbpTJnt/v17FHXYVAn7C8sHf1yUXo2c7yIM0isDryfYtHQ==",
            "dev": true,
            "requires": {
                "https-proxy-agent": "^2.2.1"
            }
        },
        "sax": {
            "version": "1.2.4",
            "resolved": "https://registry.npmjs.org/sax/-/sax-1.2.4.tgz",
            "integrity": "sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw==",
            "dev": true
        },
        "saxes": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/saxes/-/saxes-5.0.1.tgz",
            "integrity": "sha512-5LBh1Tls8c9xgGjw3QrMwETmTMVk0oFgvrFSvWx62llR2hcEInrKNZ2GZCCuuy2lvWrdl5jhbpeqc5hRYKFOcw==",
            "dev": true,
            "requires": {
                "xmlchars": "^2.2.0"
            }
        },
        "schema-utils": {
            "version": "2.7.1",
            "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-2.7.1.tgz",
            "integrity": "sha512-SHiNtMOUGWBQJwzISiVYKu82GiV4QYGePp3odlY1tuKO7gPtphAT5R/py0fA6xtbgLL/RvtJZnU9b8s0F1q0Xg==",
            "dev": true,
            "requires": {
                "@types/json-schema": "^7.0.5",
                "ajv": "^6.12.4",
                "ajv-keywords": "^3.5.2"
            }
        },
        "select-hose": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/select-hose/-/select-hose-2.0.0.tgz",
            "integrity": "sha1-Yl2GWPhlr0Psliv8N2o3NZpJlMo=",
            "dev": true
        },
        "selenium-webdriver": {
            "version": "3.6.0",
            "resolved": "https://registry.npmjs.org/selenium-webdriver/-/selenium-webdriver-3.6.0.tgz",
            "integrity": "sha512-WH7Aldse+2P5bbFBO4Gle/nuQOdVwpHMTL6raL3uuBj/vPG07k6uzt3aiahu352ONBr5xXh0hDlM3LhtXPOC4Q==",
            "dev": true,
            "requires": {
                "jszip": "^3.1.3",
                "rimraf": "^2.5.4",
                "tmp": "0.0.30",
                "xml2js": "^0.4.17"
            },
            "dependencies": {
                "rimraf": {
                    "version": "2.7.1",
                    "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
                    "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
                    "dev": true,
                    "requires": {
                        "glob": "^7.1.3"
                    }
                },
                "tmp": {
                    "version": "0.0.30",
                    "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.0.30.tgz",
                    "integrity": "sha1-ckGdSovn1s51FI/YsyTlk6cRwu0=",
                    "dev": true,
                    "requires": {
                        "os-tmpdir": "~1.0.1"
                    }
                }
            }
        },
        "selfsigned": {
            "version": "1.10.8",
            "resolved": "https://registry.npmjs.org/selfsigned/-/selfsigned-1.10.8.tgz",
            "integrity": "sha512-2P4PtieJeEwVgTU9QEcwIRDQ/mXJLX8/+I3ur+Pg16nS8oNbrGxEso9NyYWy8NAmXiNl4dlAp5MwoNeCWzON4w==",
            "dev": true,
            "requires": {
                "node-forge": "^0.10.0"
            }
        },
        "semver": {
            "version": "7.3.2",
            "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.2.tgz",
            "integrity": "sha512-OrOb32TeeambH6UrhtShmF7CRDqhL6/5XpPNp2DuRH6+9QLw/orhp72j87v8Qa1ScDkvrrBNpZcDejAirJmfXQ==",
            "dev": true
        },
        "semver-compare": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/semver-compare/-/semver-compare-1.0.0.tgz",
            "integrity": "sha1-De4hahyUGrN+nvsXiPavxf9VN/w=",
            "dev": true
        },
        "semver-diff": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/semver-diff/-/semver-diff-3.1.1.tgz",
            "integrity": "sha512-GX0Ix/CJcHyB8c4ykpHGIAvLyOwOobtM/8d+TQkAd81/bEjgPHrfba41Vpesr7jX/t8Uh+R3EX9eAS5be+jQYg==",
            "dev": true,
            "requires": {
                "semver": "^6.3.0"
            },
            "dependencies": {
                "semver": {
                    "version": "6.3.0",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                    "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
                    "dev": true
                }
            }
        },
        "semver-dsl": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/semver-dsl/-/semver-dsl-1.0.1.tgz",
            "integrity": "sha1-02eN5VVeimH2Ke7QJTZq5fJzQKA=",
            "dev": true,
            "requires": {
                "semver": "^5.3.0"
            },
            "dependencies": {
                "semver": {
                    "version": "5.7.1",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
                    "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
                    "dev": true
                }
            }
        },
        "semver-intersect": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/semver-intersect/-/semver-intersect-1.4.0.tgz",
            "integrity": "sha512-d8fvGg5ycKAq0+I6nfWeCx6ffaWJCsBYU0H2Rq56+/zFePYfT8mXkB3tWBSjR5BerkHNZ5eTPIk1/LBYas35xQ==",
            "dev": true,
            "requires": {
                "semver": "^5.0.0"
            },
            "dependencies": {
                "semver": {
                    "version": "5.7.1",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
                    "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
                    "dev": true
                }
            }
        },
        "semver-regex": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/semver-regex/-/semver-regex-2.0.0.tgz",
            "integrity": "sha512-mUdIBBvdn0PLOeP3TEkMH7HHeUP3GjsXCwKarjv/kGmUFOYg1VqEemKhoQpWMu6X2I8kHeuVdGibLGkVK+/5Qw==",
            "dev": true
        },
        "send": {
            "version": "0.17.1",
            "resolved": "https://registry.npmjs.org/send/-/send-0.17.1.tgz",
            "integrity": "sha512-BsVKsiGcQMFwT8UxypobUKyv7irCNRHk1T0G680vk88yf6LBByGcZJOTJCrTP2xVN6yI+XjPJcNuE3V4fT9sAg==",
            "dev": true,
            "requires": {
                "debug": "2.6.9",
                "depd": "~1.1.2",
                "destroy": "~1.0.4",
                "encodeurl": "~1.0.2",
                "escape-html": "~1.0.3",
                "etag": "~1.8.1",
                "fresh": "0.5.2",
                "http-errors": "~1.7.2",
                "mime": "1.6.0",
                "ms": "2.1.1",
                "on-finished": "~2.3.0",
                "range-parser": "~1.2.1",
                "statuses": "~1.5.0"
            },
            "dependencies": {
                "debug": {
                    "version": "2.6.9",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                    "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                    "dev": true,
                    "requires": {
                        "ms": "2.0.0"
                    },
                    "dependencies": {
                        "ms": {
                            "version": "2.0.0",
                            "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                            "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
                            "dev": true
                        }
                    }
                },
                "ms": {
                    "version": "2.1.1",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
                    "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg==",
                    "dev": true
                }
            }
        },
        "serialize-javascript": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/serialize-javascript/-/serialize-javascript-5.0.1.tgz",
            "integrity": "sha512-SaaNal9imEO737H2c05Og0/8LUXG7EnsZyMa8MzkmuHoELfT6txuj0cMqRj6zfPKnmQ1yasR4PCJc8x+M4JSPA==",
            "dev": true,
            "requires": {
                "randombytes": "^2.1.0"
            }
        },
        "serve-index": {
            "version": "1.9.1",
            "resolved": "https://registry.npmjs.org/serve-index/-/serve-index-1.9.1.tgz",
            "integrity": "sha1-03aNabHn2C5c4FD/9bRTvqEqkjk=",
            "dev": true,
            "requires": {
                "accepts": "~1.3.4",
                "batch": "0.6.1",
                "debug": "2.6.9",
                "escape-html": "~1.0.3",
                "http-errors": "~1.6.2",
                "mime-types": "~2.1.17",
                "parseurl": "~1.3.2"
            },
            "dependencies": {
                "debug": {
                    "version": "2.6.9",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                    "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                    "dev": true,
                    "requires": {
                        "ms": "2.0.0"
                    }
                },
                "http-errors": {
                    "version": "1.6.3",
                    "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.6.3.tgz",
                    "integrity": "sha1-i1VoC7S+KDoLW/TqLjhYC+HZMg0=",
                    "dev": true,
                    "requires": {
                        "depd": "~1.1.2",
                        "inherits": "2.0.3",
                        "setprototypeof": "1.1.0",
                        "statuses": ">= 1.4.0 < 2"
                    }
                },
                "inherits": {
                    "version": "2.0.3",
                    "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
                    "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4=",
                    "dev": true
                },
                "ms": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                    "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
                    "dev": true
                },
                "setprototypeof": {
                    "version": "1.1.0",
                    "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.0.tgz",
                    "integrity": "sha512-BvE/TwpZX4FXExxOxZyRGQQv651MSwmWKZGqvmPcRIjDqWub67kTKuIMx43cZZrS/cBBzwBcNDWoFxt2XEFIpQ==",
                    "dev": true
                }
            }
        },
        "serve-static": {
            "version": "1.14.1",
            "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.1.tgz",
            "integrity": "sha512-JMrvUwE54emCYWlTI+hGrGv5I8dEwmco/00EvkzIIsR7MqrHonbD9pO2MOfFnpFntl7ecpZs+3mW+XbQZu9QCg==",
            "dev": true,
            "requires": {
                "encodeurl": "~1.0.2",
                "escape-html": "~1.0.3",
                "parseurl": "~1.3.3",
                "send": "0.17.1"
            }
        },
        "server-destroy": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/server-destroy/-/server-destroy-1.0.1.tgz",
            "integrity": "sha1-8Tv5KOQrnD55OD5hzDmYtdFObN0=",
            "dev": true
        },
        "set-blocking": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
            "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc=",
            "dev": true
        },
        "set-immediate-shim": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/set-immediate-shim/-/set-immediate-shim-1.0.1.tgz",
            "integrity": "sha1-SysbJ+uAip+NzEgaWOXlb1mfP2E=",
            "dev": true
        },
        "set-value": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/set-value/-/set-value-2.0.1.tgz",
            "integrity": "sha512-JxHc1weCN68wRY0fhCoXpyK55m/XPHafOmK4UWD7m2CI14GMcFypt4w/0+NV5f/ZMby2F6S2wwA7fgynh9gWSw==",
            "dev": true,
            "requires": {
                "extend-shallow": "^2.0.1",
                "is-extendable": "^0.1.1",
                "is-plain-object": "^2.0.3",
                "split-string": "^3.0.1"
            },
            "dependencies": {
                "extend-shallow": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                    "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                    "dev": true,
                    "requires": {
                        "is-extendable": "^0.1.0"
                    }
                }
            }
        },
        "setimmediate": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/setimmediate/-/setimmediate-1.0.5.tgz",
            "integrity": "sha1-KQy7Iy4waULX1+qbg3Mqt4VvgoU=",
            "dev": true
        },
        "setprototypeof": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.1.tgz",
            "integrity": "sha512-JvdAWfbXeIGaZ9cILp38HntZSFSo3mWg6xGcJJsd+d4aRMOqauag1C63dJfDw7OaMYwEbHMOxEZ1lqVRYP2OAw==",
            "dev": true
        },
        "sha.js": {
            "version": "2.4.11",
            "resolved": "https://registry.npmjs.org/sha.js/-/sha.js-2.4.11.tgz",
            "integrity": "sha512-QMEp5B7cftE7APOjk5Y6xgrbWu+WkLVQwk8JNjZ8nKRciZaByEW6MubieAiToS7+dwvrjGhH8jRXz3MVd0AYqQ==",
            "dev": true,
            "requires": {
                "inherits": "^2.0.1",
                "safe-buffer": "^5.0.1"
            }
        },
        "shallow-clone": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/shallow-clone/-/shallow-clone-3.0.1.tgz",
            "integrity": "sha512-/6KqX+GVUdqPuPPd2LxDDxzX6CAbjJehAAOKlNpqqUpAqPM6HeL8f+o3a+JsyGjn2lv0WY8UsTgUJjU9Ok55NA==",
            "dev": true,
            "requires": {
                "kind-of": "^6.0.2"
            }
        },
        "shebang-command": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
            "integrity": "sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=",
            "dev": true,
            "requires": {
                "shebang-regex": "^1.0.0"
            }
        },
        "shebang-regex": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
            "integrity": "sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM=",
            "dev": true
        },
        "shellwords": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/shellwords/-/shellwords-0.1.1.tgz",
            "integrity": "sha512-vFwSUfQvqybiICwZY5+DAWIPLKsWO31Q91JSKl3UYv+K5c2QRPzn0qzec6QPu1Qc9eHYItiP3NdJqNVqetYAww==",
            "dev": true,
            "optional": true
        },
        "signal-exit": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.3.tgz",
            "integrity": "sha512-VUJ49FC8U1OxwZLxIbTTrDvLnf/6TDgxZcK8wxR8zs13xpx7xbG60ndBlhNrFi2EMuFRoeDoJO7wthSLq42EjA=="
        },
        "simple-swizzle": {
            "version": "0.2.2",
            "resolved": "https://registry.npmjs.org/simple-swizzle/-/simple-swizzle-0.2.2.tgz",
            "integrity": "sha1-pNprY1/8zMoz9w0Xy5JZLeleVXo=",
            "dev": true,
            "requires": {
                "is-arrayish": "^0.3.1"
            },
            "dependencies": {
                "is-arrayish": {
                    "version": "0.3.2",
                    "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.3.2.tgz",
                    "integrity": "sha512-eVRqCvVlZbuw3GrM63ovNSNAeA1K16kaR/LRY/92w0zxQ5/1YzwblUX652i4Xs9RwAGjW9d9y6X88t8OaAJfWQ==",
                    "dev": true
                }
            }
        },
        "sisteransi": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/sisteransi/-/sisteransi-1.0.5.tgz",
            "integrity": "sha512-bLGGlR1QxBcynn2d5YmDX4MGjlZvy2MRBDRNHLJ8VI6l6+9FUiyTFNJ0IveOSP0bcXgVDPRcfGqA0pjaqUpfVg==",
            "dev": true
        },
        "slash": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
            "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==",
            "dev": true
        },
        "slice-ansi": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-2.1.0.tgz",
            "integrity": "sha512-Qu+VC3EwYLldKa1fCxuuvULvSJOKEgk9pi8dZeCVK7TqBfUNTH4sFkk4joj8afVSfAYgJoSOetjx9QWOJ5mYoQ==",
            "dev": true,
            "requires": {
                "ansi-styles": "^3.2.0",
                "astral-regex": "^1.0.0",
                "is-fullwidth-code-point": "^2.0.0"
            },
            "dependencies": {
                "is-fullwidth-code-point": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
                    "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
                    "dev": true
                }
            }
        },
        "smart-buffer": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/smart-buffer/-/smart-buffer-4.1.0.tgz",
            "integrity": "sha512-iVICrxOzCynf/SNaBQCw34eM9jROU/s5rzIhpOvzhzuYHfJR/DhZfDkXiZSgKXfgv26HT3Yni3AV/DGw0cGnnw==",
            "dev": true
        },
        "snapdragon": {
            "version": "0.8.2",
            "resolved": "https://registry.npmjs.org/snapdragon/-/snapdragon-0.8.2.tgz",
            "integrity": "sha512-FtyOnWN/wCHTVXOMwvSv26d+ko5vWlIDD6zoUJ7LW8vh+ZBC8QdljveRP+crNrtBwioEUWy/4dMtbBjA4ioNlg==",
            "dev": true,
            "requires": {
                "base": "^0.11.1",
                "debug": "^2.2.0",
                "define-property": "^0.2.5",
                "extend-shallow": "^2.0.1",
                "map-cache": "^0.2.2",
                "source-map": "^0.5.6",
                "source-map-resolve": "^0.5.0",
                "use": "^3.1.0"
            },
            "dependencies": {
                "debug": {
                    "version": "2.6.9",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                    "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                    "dev": true,
                    "requires": {
                        "ms": "2.0.0"
                    }
                },
                "define-property": {
                    "version": "0.2.5",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
                    "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
                    "dev": true,
                    "requires": {
                        "is-descriptor": "^0.1.0"
                    }
                },
                "extend-shallow": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                    "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                    "dev": true,
                    "requires": {
                        "is-extendable": "^0.1.0"
                    }
                },
                "ms": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                    "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
                    "dev": true
                },
                "source-map": {
                    "version": "0.5.7",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
                    "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
                    "dev": true
                }
            }
        },
        "snapdragon-node": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/snapdragon-node/-/snapdragon-node-2.1.1.tgz",
            "integrity": "sha512-O27l4xaMYt/RSQ5TR3vpWCAB5Kb/czIcqUFOM/C4fYcLnbZUc1PkjTAMjof2pBWaSTwOUd6qUHcFGVGj7aIwnw==",
            "dev": true,
            "requires": {
                "define-property": "^1.0.0",
                "isobject": "^3.0.0",
                "snapdragon-util": "^3.0.1"
            },
            "dependencies": {
                "define-property": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
                    "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
                    "dev": true,
                    "requires": {
                        "is-descriptor": "^1.0.0"
                    }
                },
                "is-accessor-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
                    "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
                    "dev": true,
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-data-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
                    "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
                    "dev": true,
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-descriptor": {
                    "version": "1.0.2",
                    "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
                    "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
                    "dev": true,
                    "requires": {
                        "is-accessor-descriptor": "^1.0.0",
                        "is-data-descriptor": "^1.0.0",
                        "kind-of": "^6.0.2"
                    }
                }
            }
        },
        "snapdragon-util": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/snapdragon-util/-/snapdragon-util-3.0.1.tgz",
            "integrity": "sha512-mbKkMdQKsjX4BAL4bRYTj21edOf8cN7XHdYUJEe+Zn99hVEYcMvKPct1IqNe7+AZPirn8BCDOQBHQZknqmKlZQ==",
            "dev": true,
            "requires": {
                "kind-of": "^3.2.0"
            },
            "dependencies": {
                "kind-of": {
                    "version": "3.2.2",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                    "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                    "dev": true,
                    "requires": {
                        "is-buffer": "^1.1.5"
                    }
                }
            }
        },
        "sockjs": {
            "version": "0.3.20",
            "resolved": "https://registry.npmjs.org/sockjs/-/sockjs-0.3.20.tgz",
            "integrity": "sha512-SpmVOVpdq0DJc0qArhF3E5xsxvaiqGNb73XfgBpK1y3UD5gs8DSo8aCTsuT5pX8rssdc2NDIzANwP9eCAiSdTA==",
            "dev": true,
            "requires": {
                "faye-websocket": "^0.10.0",
                "uuid": "^3.4.0",
                "websocket-driver": "0.6.5"
            }
        },
        "sockjs-client": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/sockjs-client/-/sockjs-client-1.4.0.tgz",
            "integrity": "sha512-5zaLyO8/nri5cua0VtOrFXBPK1jbL4+1cebT/mmKA1E1ZXOvJrII75bPu0l0k843G/+iAbhEqzyKr0w/eCCj7g==",
            "dev": true,
            "requires": {
                "debug": "^3.2.5",
                "eventsource": "^1.0.7",
                "faye-websocket": "~0.11.1",
                "inherits": "^2.0.3",
                "json3": "^3.3.2",
                "url-parse": "^1.4.3"
            },
            "dependencies": {
                "debug": {
                    "version": "3.2.7",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
                    "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
                    "dev": true,
                    "requires": {
                        "ms": "^2.1.1"
                    }
                },
                "faye-websocket": {
                    "version": "0.11.3",
                    "resolved": "https://registry.npmjs.org/faye-websocket/-/faye-websocket-0.11.3.tgz",
                    "integrity": "sha512-D2y4bovYpzziGgbHYtGCMjlJM36vAl/y+xUyn1C+FVx8szd1E+86KwVw6XvYSzOP8iMpm1X0I4xJD+QtUb36OA==",
                    "dev": true,
                    "requires": {
                        "websocket-driver": ">=0.5.1"
                    }
                }
            }
        },
        "socks": {
            "version": "2.3.3",
            "resolved": "https://registry.npmjs.org/socks/-/socks-2.3.3.tgz",
            "integrity": "sha512-o5t52PCNtVdiOvzMry7wU4aOqYWL0PeCXRWBEiJow4/i/wr+wpsJQ9awEu1EonLIqsfGd5qSgDdxEOvCdmBEpA==",
            "dev": true,
            "requires": {
                "ip": "1.1.5",
                "smart-buffer": "^4.1.0"
            }
        },
        "socks-proxy-agent": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-4.0.2.tgz",
            "integrity": "sha512-NT6syHhI9LmuEMSK6Kd2V7gNv5KFZoLE7V5udWmn0de+3Mkj3UMA/AJPLyeNUVmElCurSHtUdM3ETpR3z770Wg==",
            "dev": true,
            "requires": {
                "agent-base": "~4.2.1",
                "socks": "~2.3.2"
            },
            "dependencies": {
                "agent-base": {
                    "version": "4.2.1",
                    "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-4.2.1.tgz",
                    "integrity": "sha512-JVwXMr9nHYTUXsBFKUqhJwvlcYU/blreOEUkhNR2eXZIvwd+c+o5V4MgDPKWnMS/56awN3TRzIP+KoPn+roQtg==",
                    "dev": true,
                    "requires": {
                        "es6-promisify": "^5.0.0"
                    }
                }
            }
        },
        "source-list-map": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/source-list-map/-/source-list-map-2.0.1.tgz",
            "integrity": "sha512-qnQ7gVMxGNxsiL4lEuJwe/To8UnK7fAnmbGEEH8RpLouuKbeEm0lhbQVFIrNSuB+G7tVrAlVsZgETT5nljf+Iw==",
            "dev": true
        },
        "source-map": {
            "version": "0.7.3",
            "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.7.3.tgz",
            "integrity": "sha512-CkCj6giN3S+n9qrYiBTX5gystlENnRW5jZeNLHpe6aue+SrHcG5VYwujhW9s4dY31mEGsxBDrHR6oI69fTXsaQ=="
        },
        "source-map-loader": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/source-map-loader/-/source-map-loader-1.1.2.tgz",
            "integrity": "sha512-bjf6eSENOYBX4JZDfl9vVLNsGAQ6Uz90fLmOazcmMcyDYOBFsGxPNn83jXezWLY9bJsVAo1ObztxPcV8HAbjVA==",
            "dev": true,
            "requires": {
                "abab": "^2.0.5",
                "iconv-lite": "^0.6.2",
                "loader-utils": "^2.0.0",
                "schema-utils": "^3.0.0",
                "source-map": "^0.6.1",
                "whatwg-mimetype": "^2.3.0"
            },
            "dependencies": {
                "iconv-lite": {
                    "version": "0.6.2",
                    "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.2.tgz",
                    "integrity": "sha512-2y91h5OpQlolefMPmUlivelittSWy0rP+oYVpn6A7GwVHNE8AWzoYOBNmlwks3LobaJxgHCYZAnyNo2GgpNRNQ==",
                    "dev": true,
                    "requires": {
                        "safer-buffer": ">= 2.1.2 < 3.0.0"
                    }
                },
                "schema-utils": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.0.0.tgz",
                    "integrity": "sha512-6D82/xSzO094ajanoOSbe4YvXWMfn2A//8Y1+MUqFAJul5Bs+yn36xbK9OtNDcRVSBJ9jjeoXftM6CfztsjOAA==",
                    "dev": true,
                    "requires": {
                        "@types/json-schema": "^7.0.6",
                        "ajv": "^6.12.5",
                        "ajv-keywords": "^3.5.2"
                    }
                },
                "source-map": {
                    "version": "0.6.1",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                    "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                    "dev": true
                }
            }
        },
        "source-map-resolve": {
            "version": "0.5.3",
            "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.5.3.tgz",
            "integrity": "sha512-Htz+RnsXWk5+P2slx5Jh3Q66vhQj1Cllm0zvnaY98+NFx+Dv2CF/f5O/t8x+KaNdrdIAsruNzoh/KpialbqAnw==",
            "dev": true,
            "requires": {
                "atob": "^2.1.2",
                "decode-uri-component": "^0.2.0",
                "resolve-url": "^0.2.1",
                "source-map-url": "^0.4.0",
                "urix": "^0.1.0"
            }
        },
        "source-map-support": {
            "version": "0.5.19",
            "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.19.tgz",
            "integrity": "sha512-Wonm7zOCIJzBGQdB+thsPar0kYuCIzYvxZwlBa87yi/Mdjv7Tip2cyVbLj5o0cFPN4EVkuTwb3GDDyUx2DGnGw==",
            "dev": true,
            "requires": {
                "buffer-from": "^1.0.0",
                "source-map": "^0.6.0"
            },
            "dependencies": {
                "source-map": {
                    "version": "0.6.1",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                    "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                    "dev": true
                }
            }
        },
        "source-map-url": {
            "version": "0.4.0",
            "resolved": "https://registry.npmjs.org/source-map-url/-/source-map-url-0.4.0.tgz",
            "integrity": "sha1-PpNdfd1zYxuXZZlW1VEo6HtQhKM=",
            "dev": true
        },
        "sourcemap-codec": {
            "version": "1.4.8",
            "resolved": "https://registry.npmjs.org/sourcemap-codec/-/sourcemap-codec-1.4.8.tgz",
            "integrity": "sha512-9NykojV5Uih4lgo5So5dtw+f0JgJX30KCNI8gwhz2J9A15wD0Ml6tjHKwf6fTSa6fAdVBdZeNOs9eJ71qCk8vA=="
        },
        "spdx-correct": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.1.1.tgz",
            "integrity": "sha512-cOYcUWwhCuHCXi49RhFRCyJEK3iPj1Ziz9DpViV3tbZOwXD49QzIN3MpOLJNxh2qwq2lJJZaKMVw9qNi4jTC0w==",
            "dev": true,
            "requires": {
                "spdx-expression-parse": "^3.0.0",
                "spdx-license-ids": "^3.0.0"
            }
        },
        "spdx-exceptions": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.3.0.tgz",
            "integrity": "sha512-/tTrYOC7PPI1nUAgx34hUpqXuyJG+DTHJTnIULG4rDygi4xu/tfgmq1e1cIRwRzwZgo4NLySi+ricLkZkw4i5A==",
            "dev": true
        },
        "spdx-expression-parse": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.1.tgz",
            "integrity": "sha512-cbqHunsQWnJNE6KhVSMsMeH5H/L9EpymbzqTQ3uLwNCLZ1Q481oWaofqH7nO6V07xlXwY6PhQdQ2IedWx/ZK4Q==",
            "dev": true,
            "requires": {
                "spdx-exceptions": "^2.1.0",
                "spdx-license-ids": "^3.0.0"
            }
        },
        "spdx-license-ids": {
            "version": "3.0.6",
            "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.6.tgz",
            "integrity": "sha512-+orQK83kyMva3WyPf59k1+Y525csj5JejicWut55zeTWANuN17qSiSLUXWtzHeNWORSvT7GLDJ/E/XiIWoXBTw==",
            "dev": true
        },
        "spdy": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/spdy/-/spdy-4.0.2.tgz",
            "integrity": "sha512-r46gZQZQV+Kl9oItvl1JZZqJKGr+oEkB08A6BzkiR7593/7IbtuncXHd2YoYeTsG4157ZssMu9KYvUHLcjcDoA==",
            "dev": true,
            "requires": {
                "debug": "^4.1.0",
                "handle-thing": "^2.0.0",
                "http-deceiver": "^1.2.7",
                "select-hose": "^2.0.0",
                "spdy-transport": "^3.0.0"
            }
        },
        "spdy-transport": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/spdy-transport/-/spdy-transport-3.0.0.tgz",
            "integrity": "sha512-hsLVFE5SjA6TCisWeJXFKniGGOpBgMLmerfO2aCyCU5s7nJ/rpAepqmFifv/GCbSbueEeAJJnmSQ2rKC/g8Fcw==",
            "dev": true,
            "requires": {
                "debug": "^4.1.0",
                "detect-node": "^2.0.4",
                "hpack.js": "^2.1.6",
                "obuf": "^1.1.2",
                "readable-stream": "^3.0.6",
                "wbuf": "^1.7.3"
            },
            "dependencies": {
                "readable-stream": {
                    "version": "3.6.0",
                    "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
                    "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
                    "dev": true,
                    "requires": {
                        "inherits": "^2.0.3",
                        "string_decoder": "^1.1.1",
                        "util-deprecate": "^1.0.1"
                    }
                }
            }
        },
        "speed-measure-webpack-plugin": {
            "version": "1.3.3",
            "resolved": "https://registry.npmjs.org/speed-measure-webpack-plugin/-/speed-measure-webpack-plugin-1.3.3.tgz",
            "integrity": "sha512-2ljD4Ch/rz2zG3HsLsnPfp23osuPBS0qPuz9sGpkNXTN1Ic4M+W9xB8l8rS8ob2cO4b1L+WTJw/0AJwWYVgcxQ==",
            "dev": true,
            "requires": {
                "chalk": "^2.0.1"
            }
        },
        "split-string": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/split-string/-/split-string-3.1.0.tgz",
            "integrity": "sha512-NzNVhJDYpwceVVii8/Hu6DKfD2G+NrQHlS/V/qgv763EYudVwEcMQNxd2lh+0VrUByXN/oJkl5grOhYWvQUYiw==",
            "dev": true,
            "requires": {
                "extend-shallow": "^3.0.0"
            }
        },
        "sprintf-js": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
            "integrity": "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw=",
            "dev": true
        },
        "sshpk": {
            "version": "1.16.1",
            "resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.16.1.tgz",
            "integrity": "sha512-HXXqVUq7+pcKeLqqZj6mHFUMvXtOJt1uoUx09pFW6011inTMxqI8BA8PM95myrIyyKwdnzjdFjLiE6KBPVtJIg==",
            "dev": true,
            "requires": {
                "asn1": "~0.2.3",
                "assert-plus": "^1.0.0",
                "bcrypt-pbkdf": "^1.0.0",
                "dashdash": "^1.12.0",
                "ecc-jsbn": "~0.1.1",
                "getpass": "^0.1.1",
                "jsbn": "~0.1.0",
                "safer-buffer": "^2.0.2",
                "tweetnacl": "~0.14.0"
            }
        },
        "ssri": {
            "version": "8.0.0",
            "resolved": "https://registry.npmjs.org/ssri/-/ssri-8.0.0.tgz",
            "integrity": "sha512-aq/pz989nxVYwn16Tsbj1TqFpD5LLrQxHf5zaHuieFV+R0Bbr4y8qUsOA45hXT/N4/9UNXTarBjnjVmjSOVaAA==",
            "dev": true,
            "requires": {
                "minipass": "^3.1.1"
            }
        },
        "stable": {
            "version": "0.1.8",
            "resolved": "https://registry.npmjs.org/stable/-/stable-0.1.8.tgz",
            "integrity": "sha512-ji9qxRnOVfcuLDySj9qzhGSEFVobyt1kIOSkj1qZzYLzq7Tos/oUUWvotUPQLlrsidqsK6tBH89Bc9kL5zHA6w==",
            "dev": true
        },
        "stack-utils": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/stack-utils/-/stack-utils-2.0.3.tgz",
            "integrity": "sha512-gL//fkxfWUsIlFL2Tl42Cl6+HFALEaB1FU76I/Fy+oZjRreP7OPMXFlGbxM7NQsI0ZpUfw76sHnv0WNYuTb7Iw==",
            "dev": true,
            "requires": {
                "escape-string-regexp": "^2.0.0"
            },
            "dependencies": {
                "escape-string-regexp": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-2.0.0.tgz",
                    "integrity": "sha512-UpzcLCXolUWcNu5HtVMHYdXJjArjsF9C0aNnquZYY4uW/Vu0miy5YoWvbV345HauVvcAUnpRuhMMcqTcGOY2+w==",
                    "dev": true
                }
            }
        },
        "static-extend": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/static-extend/-/static-extend-0.1.2.tgz",
            "integrity": "sha1-YICcOcv/VTNyJv1eC1IPNB8ftcY=",
            "dev": true,
            "requires": {
                "define-property": "^0.2.5",
                "object-copy": "^0.1.0"
            },
            "dependencies": {
                "define-property": {
                    "version": "0.2.5",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
                    "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
                    "dev": true,
                    "requires": {
                        "is-descriptor": "^0.1.0"
                    }
                }
            }
        },
        "statuses": {
            "version": "1.5.0",
            "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
            "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow=",
            "dev": true
        },
        "stealthy-require": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/stealthy-require/-/stealthy-require-1.1.1.tgz",
            "integrity": "sha1-NbCYdbT/SfJqd35QmzCQoyJr8ks=",
            "dev": true
        },
        "steno": {
            "version": "0.4.4",
            "resolved": "https://registry.npmjs.org/steno/-/steno-0.4.4.tgz",
            "integrity": "sha1-BxEFvfwobmYVwEA8J+nXtdy4Vcs=",
            "dev": true,
            "requires": {
                "graceful-fs": "^4.1.3"
            }
        },
        "stream-browserify": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/stream-browserify/-/stream-browserify-2.0.2.tgz",
            "integrity": "sha512-nX6hmklHs/gr2FuxYDltq8fJA1GDlxKQCz8O/IM4atRqBH8OORmBNgfvW5gG10GT/qQ9u0CzIvr2X5Pkt6ntqg==",
            "dev": true,
            "requires": {
                "inherits": "~2.0.1",
                "readable-stream": "^2.0.2"
            }
        },
        "stream-each": {
            "version": "1.2.3",
            "resolved": "https://registry.npmjs.org/stream-each/-/stream-each-1.2.3.tgz",
            "integrity": "sha512-vlMC2f8I2u/bZGqkdfLQW/13Zihpej/7PmSiMQsbYddxuTsJp8vRe2x2FvVExZg7FaOds43ROAuFJwPR4MTZLw==",
            "dev": true,
            "requires": {
                "end-of-stream": "^1.1.0",
                "stream-shift": "^1.0.0"
            }
        },
        "stream-http": {
            "version": "2.8.3",
            "resolved": "https://registry.npmjs.org/stream-http/-/stream-http-2.8.3.tgz",
            "integrity": "sha512-+TSkfINHDo4J+ZobQLWiMouQYB+UVYFttRA94FpEzzJ7ZdqcL4uUUQ7WkdkI4DSozGmgBUE/a47L+38PenXhUw==",
            "dev": true,
            "requires": {
                "builtin-status-codes": "^3.0.0",
                "inherits": "^2.0.1",
                "readable-stream": "^2.3.6",
                "to-arraybuffer": "^1.0.0",
                "xtend": "^4.0.0"
            }
        },
        "stream-shift": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/stream-shift/-/stream-shift-1.0.1.tgz",
            "integrity": "sha512-AiisoFqQ0vbGcZgQPY1cdP2I76glaVA/RauYR4G4thNFgkTqr90yXTo4LYX60Jl+sIlPNHHdGSwo01AvbKUSVQ==",
            "dev": true
        },
        "string-argv": {
            "version": "0.3.1",
            "resolved": "https://registry.npmjs.org/string-argv/-/string-argv-0.3.1.tgz",
            "integrity": "sha512-a1uQGz7IyVy9YwhqjZIZu1c8JO8dNIe20xBmSS6qu9kv++k3JGzCVmprbNN5Kn+BgzD5E7YYwg1CcjuJMRNsvg==",
            "dev": true
        },
        "string-length": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/string-length/-/string-length-4.0.1.tgz",
            "integrity": "sha512-PKyXUd0LK0ePjSOnWn34V2uD6acUWev9uy0Ft05k0E8xRW+SKcA0F7eMr7h5xlzfn+4O3N+55rduYyet3Jk+jw==",
            "dev": true,
            "requires": {
                "char-regex": "^1.0.2",
                "strip-ansi": "^6.0.0"
            }
        },
        "string-width": {
            "version": "4.2.0",
            "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.0.tgz",
            "integrity": "sha512-zUz5JD+tgqtuDjMhwIg5uFVV3dtqZ9yQJlZVfq4I01/K5Paj5UHj7VyrQOJvzawSVlKpObApbfD0Ed6yJc+1eg==",
            "requires": {
                "emoji-regex": "^8.0.0",
                "is-fullwidth-code-point": "^3.0.0",
                "strip-ansi": "^6.0.0"
            }
        },
        "string.prototype.trimend": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.2.tgz",
            "integrity": "sha512-8oAG/hi14Z4nOVP0z6mdiVZ/wqjDtWSLygMigTzAb+7aPEDTleeFf+WrF+alzecxIRkckkJVn+dTlwzJXORATw==",
            "dev": true,
            "requires": {
                "define-properties": "^1.1.3",
                "es-abstract": "^1.18.0-next.1"
            },
            "dependencies": {
                "es-abstract": {
                    "version": "1.18.0-next.1",
                    "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.18.0-next.1.tgz",
                    "integrity": "sha512-I4UGspA0wpZXWENrdA0uHbnhte683t3qT/1VFH9aX2dA5PPSf6QW5HHXf5HImaqPmjXaVeVk4RGWnaylmV7uAA==",
                    "dev": true,
                    "requires": {
                        "es-to-primitive": "^1.2.1",
                        "function-bind": "^1.1.1",
                        "has": "^1.0.3",
                        "has-symbols": "^1.0.1",
                        "is-callable": "^1.2.2",
                        "is-negative-zero": "^2.0.0",
                        "is-regex": "^1.1.1",
                        "object-inspect": "^1.8.0",
                        "object-keys": "^1.1.1",
                        "object.assign": "^4.1.1",
                        "string.prototype.trimend": "^1.0.1",
                        "string.prototype.trimstart": "^1.0.1"
                    }
                }
            }
        },
        "string.prototype.trimstart": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.2.tgz",
            "integrity": "sha512-7F6CdBTl5zyu30BJFdzSTlSlLPwODC23Od+iLoVH8X6+3fvDPPuBVVj9iaB1GOsSTSIgVfsfm27R2FGrAPznWg==",
            "dev": true,
            "requires": {
                "define-properties": "^1.1.3",
                "es-abstract": "^1.18.0-next.1"
            },
            "dependencies": {
                "es-abstract": {
                    "version": "1.18.0-next.1",
                    "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.18.0-next.1.tgz",
                    "integrity": "sha512-I4UGspA0wpZXWENrdA0uHbnhte683t3qT/1VFH9aX2dA5PPSf6QW5HHXf5HImaqPmjXaVeVk4RGWnaylmV7uAA==",
                    "dev": true,
                    "requires": {
                        "es-to-primitive": "^1.2.1",
                        "function-bind": "^1.1.1",
                        "has": "^1.0.3",
                        "has-symbols": "^1.0.1",
                        "is-callable": "^1.2.2",
                        "is-negative-zero": "^2.0.0",
                        "is-regex": "^1.1.1",
                        "object-inspect": "^1.8.0",
                        "object-keys": "^1.1.1",
                        "object.assign": "^4.1.1",
                        "string.prototype.trimend": "^1.0.1",
                        "string.prototype.trimstart": "^1.0.1"
                    }
                }
            }
        },
        "string_decoder": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
            "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
            "dev": true,
            "requires": {
                "safe-buffer": "~5.1.0"
            }
        },
        "stringify-object": {
            "version": "3.3.0",
            "resolved": "https://registry.npmjs.org/stringify-object/-/stringify-object-3.3.0.tgz",
            "integrity": "sha512-rHqiFh1elqCQ9WPLIC8I0Q/g/wj5J1eMkyoiD6eoQApWHP0FtlK7rqnhmabL5VUY9JQCcqwwvlOaSuutekgyrw==",
            "dev": true,
            "requires": {
                "get-own-enumerable-property-symbols": "^3.0.0",
                "is-obj": "^1.0.1",
                "is-regexp": "^1.0.0"
            },
            "dependencies": {
                "is-obj": {
                    "version": "1.0.1",
                    "resolved": "https://registry.npmjs.org/is-obj/-/is-obj-1.0.1.tgz",
                    "integrity": "sha1-PkcprB9f3gJc19g6iW2rn09n2w8=",
                    "dev": true
                }
            }
        },
        "strip-ansi": {
            "version": "6.0.0",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
            "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
            "requires": {
                "ansi-regex": "^5.0.0"
            }
        },
        "strip-bom": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
            "integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM=",
            "dev": true
        },
        "strip-eof": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/strip-eof/-/strip-eof-1.0.0.tgz",
            "integrity": "sha1-u0P/VZim6wXYm1n80SnJgzE2Br8=",
            "dev": true
        },
        "strip-final-newline": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/strip-final-newline/-/strip-final-newline-2.0.0.tgz",
            "integrity": "sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA==",
            "dev": true
        },
        "strip-json-comments": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
            "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
            "dev": true
        },
        "style-loader": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/style-loader/-/style-loader-2.0.0.tgz",
            "integrity": "sha512-Z0gYUJmzZ6ZdRUqpg1r8GsaFKypE+3xAzuFeMuoHgjc9KZv3wMyCRjQIWEbhoFSq7+7yoHXySDJyyWQaPajeiQ==",
            "dev": true,
            "requires": {
                "loader-utils": "^2.0.0",
                "schema-utils": "^3.0.0"
            },
            "dependencies": {
                "schema-utils": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.0.0.tgz",
                    "integrity": "sha512-6D82/xSzO094ajanoOSbe4YvXWMfn2A//8Y1+MUqFAJul5Bs+yn36xbK9OtNDcRVSBJ9jjeoXftM6CfztsjOAA==",
                    "dev": true,
                    "requires": {
                        "@types/json-schema": "^7.0.6",
                        "ajv": "^6.12.5",
                        "ajv-keywords": "^3.5.2"
                    }
                }
            }
        },
        "stylehacks": {
            "version": "4.0.3",
            "resolved": "https://registry.npmjs.org/stylehacks/-/stylehacks-4.0.3.tgz",
            "integrity": "sha512-7GlLk9JwlElY4Y6a/rmbH2MhVlTyVmiJd1PfTCqFaIBEGMYNsrO/v3SeGTdhBThLg4Z+NbOk/qFMwCa+J+3p/g==",
            "dev": true,
            "requires": {
                "browserslist": "^4.0.0",
                "postcss": "^7.0.0",
                "postcss-selector-parser": "^3.0.0"
            },
            "dependencies": {
                "postcss-selector-parser": {
                    "version": "3.1.2",
                    "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-3.1.2.tgz",
                    "integrity": "sha512-h7fJ/5uWuRVyOtkO45pnt1Ih40CEleeyCHzipqAZO2e5H20g25Y48uYnFUiShvY4rZWNJ/Bib/KVPmanaCtOhA==",
                    "dev": true,
                    "requires": {
                        "dot-prop": "^5.2.0",
                        "indexes-of": "^1.0.1",
                        "uniq": "^1.0.1"
                    }
                }
            }
        },
        "stylus": {
            "version": "0.54.8",
            "resolved": "https://registry.npmjs.org/stylus/-/stylus-0.54.8.tgz",
            "integrity": "sha512-vr54Or4BZ7pJafo2mpf0ZcwA74rpuYCZbxrHBsH8kbcXOwSfvBFwsRfpGO5OD5fhG5HDCFW737PKaawI7OqEAg==",
            "dev": true,
            "requires": {
                "css-parse": "~2.0.0",
                "debug": "~3.1.0",
                "glob": "^7.1.6",
                "mkdirp": "~1.0.4",
                "safer-buffer": "^2.1.2",
                "sax": "~1.2.4",
                "semver": "^6.3.0",
                "source-map": "^0.7.3"
            },
            "dependencies": {
                "debug": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-3.1.0.tgz",
                    "integrity": "sha512-OX8XqP7/1a9cqkxYw2yXss15f26NKWBpDXQd0/uK/KPqdQhxbPa994hnzjcE2VqQpDslf55723cKPUOGSmMY3g==",
                    "dev": true,
                    "requires": {
                        "ms": "2.0.0"
                    }
                },
                "mkdirp": {
                    "version": "1.0.4",
                    "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
                    "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",
                    "dev": true
                },
                "ms": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                    "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
                    "dev": true
                },
                "semver": {
                    "version": "6.3.0",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                    "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
                    "dev": true
                }
            }
        },
        "stylus-loader": {
            "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/stylus-loader/-/stylus-loader-4.1.1.tgz",
            "integrity": "sha512-Vnm7J/nIs/P6swIrdwJW/dflhsCOiFmb1U3PeQ6phRtg1soPLN4uKnnL7AtGIJDe173elbtYIXVzmCyF493CfA==",
            "dev": true,
            "requires": {
                "fast-glob": "^3.2.4",
                "klona": "^2.0.4",
                "loader-utils": "^2.0.0",
                "normalize-path": "^3.0.0",
                "schema-utils": "^3.0.0"
            },
            "dependencies": {
                "schema-utils": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.0.0.tgz",
                    "integrity": "sha512-6D82/xSzO094ajanoOSbe4YvXWMfn2A//8Y1+MUqFAJul5Bs+yn36xbK9OtNDcRVSBJ9jjeoXftM6CfztsjOAA==",
                    "dev": true,
                    "requires": {
                        "@types/json-schema": "^7.0.6",
                        "ajv": "^6.12.5",
                        "ajv-keywords": "^3.5.2"
                    }
                }
            }
        },
        "supports-color": {
            "version": "5.5.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
            "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
            "requires": {
                "has-flag": "^3.0.0"
            }
        },
        "supports-hyperlinks": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/supports-hyperlinks/-/supports-hyperlinks-2.1.0.tgz",
            "integrity": "sha512-zoE5/e+dnEijk6ASB6/qrK+oYdm2do1hjoLWrqUC/8WEIW1gbxFcKuBof7sW8ArN6e+AYvsE8HBGiVRWL/F5CA==",
            "dev": true,
            "requires": {
                "has-flag": "^4.0.0",
                "supports-color": "^7.0.0"
            },
            "dependencies": {
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "svgo": {
            "version": "1.3.2",
            "resolved": "https://registry.npmjs.org/svgo/-/svgo-1.3.2.tgz",
            "integrity": "sha512-yhy/sQYxR5BkC98CY7o31VGsg014AKLEPxdfhora76l36hD9Rdy5NZA/Ocn6yayNPgSamYdtX2rFJdcv07AYVw==",
            "dev": true,
            "requires": {
                "chalk": "^2.4.1",
                "coa": "^2.0.2",
                "css-select": "^2.0.0",
                "css-select-base-adapter": "^0.1.1",
                "css-tree": "1.0.0-alpha.37",
                "csso": "^4.0.2",
                "js-yaml": "^3.13.1",
                "mkdirp": "~0.5.1",
                "object.values": "^1.1.0",
                "sax": "~1.2.4",
                "stable": "^0.1.8",
                "unquote": "~1.1.1",
                "util.promisify": "~1.0.0"
            }
        },
        "symbol-observable": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/symbol-observable/-/symbol-observable-2.0.3.tgz",
            "integrity": "sha512-sQV7phh2WCYAn81oAkakC5qjq2Ml0g8ozqz03wOGnx9dDlG1de6yrF+0RAzSJD8fPUow3PTSMf2SAbOGxb93BA==",
            "dev": true
        },
        "symbol-tree": {
            "version": "3.2.4",
            "resolved": "https://registry.npmjs.org/symbol-tree/-/symbol-tree-3.2.4.tgz",
            "integrity": "sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw==",
            "dev": true
        },
        "table": {
            "version": "5.4.6",
            "resolved": "https://registry.npmjs.org/table/-/table-5.4.6.tgz",
            "integrity": "sha512-wmEc8m4fjnob4gt5riFRtTu/6+4rSe12TpAELNSqHMfF3IqnA+CH37USM6/YR3qRZv7e56kAEAtd6nKZaxe0Ug==",
            "dev": true,
            "requires": {
                "ajv": "^6.10.2",
                "lodash": "^4.17.14",
                "slice-ansi": "^2.1.0",
                "string-width": "^3.0.0"
            },
            "dependencies": {
                "ansi-regex": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
                    "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
                    "dev": true
                },
                "emoji-regex": {
                    "version": "7.0.3",
                    "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
                    "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA==",
                    "dev": true
                },
                "is-fullwidth-code-point": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
                    "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
                    "dev": true
                },
                "string-width": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
                    "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
                    "dev": true,
                    "requires": {
                        "emoji-regex": "^7.0.1",
                        "is-fullwidth-code-point": "^2.0.0",
                        "strip-ansi": "^5.1.0"
                    }
                },
                "strip-ansi": {
                    "version": "5.2.0",
                    "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
                    "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
                    "dev": true,
                    "requires": {
                        "ansi-regex": "^4.1.0"
                    }
                }
            }
        },
        "tapable": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.1.1.tgz",
            "integrity": "sha512-Wib1S8m2wdpLbmQz0RBEVosIyvb/ykfKXf3ZIDqvWoMg/zTNm6G/tDSuUM61J1kNCDXWJrLHGSFeMhAG+gAGpQ==",
            "dev": true
        },
        "tar": {
            "version": "6.0.5",
            "resolved": "https://registry.npmjs.org/tar/-/tar-6.0.5.tgz",
            "integrity": "sha512-0b4HOimQHj9nXNEAA7zWwMM91Zhhba3pspja6sQbgTpynOJf+bkjBnfybNYzbpLbnwXnbyB4LOREvlyXLkCHSg==",
            "dev": true,
            "requires": {
                "chownr": "^2.0.0",
                "fs-minipass": "^2.0.0",
                "minipass": "^3.0.0",
                "minizlib": "^2.1.1",
                "mkdirp": "^1.0.3",
                "yallist": "^4.0.0"
            },
            "dependencies": {
                "mkdirp": {
                    "version": "1.0.4",
                    "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
                    "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",
                    "dev": true
                }
            }
        },
        "term-size": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/term-size/-/term-size-2.2.1.tgz",
            "integrity": "sha512-wK0Ri4fOGjv/XPy8SBHZChl8CM7uMc5VML7SqiQ0zG7+J5Vr+RMQDoHa2CNT6KHUnTGIXH34UDMkPzAUyapBZg==",
            "dev": true
        },
        "terminal-link": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/terminal-link/-/terminal-link-2.1.1.tgz",
            "integrity": "sha512-un0FmiRUQNr5PJqy9kP7c40F5BOfpGlYTrxonDChEZB7pzZxRNp/bt+ymiy9/npwXya9KH99nJ/GXFIiUkYGFQ==",
            "dev": true,
            "requires": {
                "ansi-escapes": "^4.2.1",
                "supports-hyperlinks": "^2.0.0"
            }
        },
        "terser": {
            "version": "5.3.7",
            "resolved": "https://registry.npmjs.org/terser/-/terser-5.3.7.tgz",
            "integrity": "sha512-lJbKdfxWvjpV330U4PBZStCT9h3N9A4zZVA5Y4k9sCWXknrpdyxi1oMsRKLmQ/YDMDxSBKIh88v0SkdhdqX06w==",
            "dev": true,
            "requires": {
                "commander": "^2.20.0",
                "source-map": "~0.7.2",
                "source-map-support": "~0.5.19"
            }
        },
        "terser-webpack-plugin": {
            "version": "4.2.3",
            "resolved": "https://registry.npmjs.org/terser-webpack-plugin/-/terser-webpack-plugin-4.2.3.tgz",
            "integrity": "sha512-jTgXh40RnvOrLQNgIkwEKnQ8rmHjHK4u+6UBEi+W+FPmvb+uo+chJXntKe7/3lW5mNysgSWD60KyesnhW8D6MQ==",
            "dev": true,
            "requires": {
                "cacache": "^15.0.5",
                "find-cache-dir": "^3.3.1",
                "jest-worker": "^26.5.0",
                "p-limit": "^3.0.2",
                "schema-utils": "^3.0.0",
                "serialize-javascript": "^5.0.1",
                "source-map": "^0.6.1",
                "terser": "^5.3.4",
                "webpack-sources": "^1.4.3"
            },
            "dependencies": {
                "p-limit": {
                    "version": "3.0.2",
                    "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.0.2.tgz",
                    "integrity": "sha512-iwqZSOoWIW+Ew4kAGUlN16J4M7OB3ysMLSZtnhmqx7njIHFPlxWBX8xo3lVTyFVq6mI/lL9qt2IsN1sHwaxJkg==",
                    "dev": true,
                    "requires": {
                        "p-try": "^2.0.0"
                    }
                },
                "schema-utils": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.0.0.tgz",
                    "integrity": "sha512-6D82/xSzO094ajanoOSbe4YvXWMfn2A//8Y1+MUqFAJul5Bs+yn36xbK9OtNDcRVSBJ9jjeoXftM6CfztsjOAA==",
                    "dev": true,
                    "requires": {
                        "@types/json-schema": "^7.0.6",
                        "ajv": "^6.12.5",
                        "ajv-keywords": "^3.5.2"
                    }
                },
                "source-map": {
                    "version": "0.6.1",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                    "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                    "dev": true
                },
                "webpack-sources": {
                    "version": "1.4.3",
                    "resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-1.4.3.tgz",
                    "integrity": "sha512-lgTS3Xhv1lCOKo7SA5TjKXMjpSM4sBjNV5+q2bqesbSPs5FjGmU6jjtBSkX9b4qW87vDIsCIlUPOEhbZrMdjeQ==",
                    "dev": true,
                    "requires": {
                        "source-list-map": "^2.0.0",
                        "source-map": "~0.6.1"
                    }
                }
            }
        },
        "test-exclude": {
            "version": "6.0.0",
            "resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-6.0.0.tgz",
            "integrity": "sha512-cAGWPIyOHU6zlmg88jwm7VRyXnMN7iV68OGAbYDk/Mh/xC/pzVPlQtY6ngoIH/5/tciuhGfvESU8GrHrcxD56w==",
            "dev": true,
            "requires": {
                "@istanbuljs/schema": "^0.1.2",
                "glob": "^7.1.4",
                "minimatch": "^3.0.4"
            }
        },
        "text-table": {
            "version": "0.2.0",
            "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
            "integrity": "sha1-f17oI66AUgfACvLfSoTsP8+lcLQ=",
            "dev": true
        },
        "throat": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/throat/-/throat-5.0.0.tgz",
            "integrity": "sha512-fcwX4mndzpLQKBS1DVYhGAcYaYt7vsHNIvQV+WXMvnow5cgjPphq5CaayLaGsjRdSCKZFNGt7/GYAuXaNOiYCA==",
            "dev": true
        },
        "through": {
            "version": "2.3.8",
            "resolved": "https://registry.npmjs.org/through/-/through-2.3.8.tgz",
            "integrity": "sha1-DdTJ/6q8NXlgsbckEV1+Doai4fU="
        },
        "through2": {
            "version": "2.0.5",
            "resolved": "https://registry.npmjs.org/through2/-/through2-2.0.5.tgz",
            "integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",
            "dev": true,
            "requires": {
                "readable-stream": "~2.3.6",
                "xtend": "~4.0.1"
            }
        },
        "thunky": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/thunky/-/thunky-1.1.0.tgz",
            "integrity": "sha512-eHY7nBftgThBqOyHGVN+l8gF0BucP09fMo0oO/Lb0w1OF80dJv+lDVpXG60WMQvkcxAkNybKsrEIE3ZtKGmPrA==",
            "dev": true
        },
        "timers-browserify": {
            "version": "2.0.12",
            "resolved": "https://registry.npmjs.org/timers-browserify/-/timers-browserify-2.0.12.tgz",
            "integrity": "sha512-9phl76Cqm6FhSX9Xe1ZUAMLtm1BLkKj2Qd5ApyWkXzsMRaA7dgr81kf4wJmQf/hAvg8EEyJxDo3du/0KlhPiKQ==",
            "dev": true,
            "requires": {
                "setimmediate": "^1.0.4"
            }
        },
        "timsort": {
            "version": "0.3.0",
            "resolved": "https://registry.npmjs.org/timsort/-/timsort-0.3.0.tgz",
            "integrity": "sha1-QFQRqOfmM5/mTbmiNN4R3DHgK9Q=",
            "dev": true
        },
        "tmp": {
            "version": "0.0.33",
            "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.0.33.tgz",
            "integrity": "sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==",
            "requires": {
                "os-tmpdir": "~1.0.2"
            }
        },
        "tmpl": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/tmpl/-/tmpl-1.0.4.tgz",
            "integrity": "sha1-I2QN17QtAEM5ERQIIOXPRA5SHdE=",
            "dev": true
        },
        "to-arraybuffer": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/to-arraybuffer/-/to-arraybuffer-1.0.1.tgz",
            "integrity": "sha1-fSKbH8xjfkZsoIEYCDanqr/4P0M=",
            "dev": true
        },
        "to-fast-properties": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
            "integrity": "sha1-3F5pjL0HkmW8c+A3doGk5Og/YW4=",
            "dev": true
        },
        "to-object-path": {
            "version": "0.3.0",
            "resolved": "https://registry.npmjs.org/to-object-path/-/to-object-path-0.3.0.tgz",
            "integrity": "sha1-KXWIt7Dn4KwI4E5nL4XB9JmeF68=",
            "dev": true,
            "requires": {
                "kind-of": "^3.0.2"
            },
            "dependencies": {
                "kind-of": {
                    "version": "3.2.2",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                    "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                    "dev": true,
                    "requires": {
                        "is-buffer": "^1.1.5"
                    }
                }
            }
        },
        "to-readable-stream": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/to-readable-stream/-/to-readable-stream-1.0.0.tgz",
            "integrity": "sha512-Iq25XBt6zD5npPhlLVXGFN3/gyR2/qODcKNNyTMd4vbm39HUaOiAM4PMq0eMVC/Tkxz+Zjdsc55g9yyz+Yq00Q==",
            "dev": true
        },
        "to-regex": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/to-regex/-/to-regex-3.0.2.tgz",
            "integrity": "sha512-FWtleNAtZ/Ki2qtqej2CXTOayOH9bHDQF+Q48VpWyDXjbYxA4Yz8iDB31zXOBUlOHHKidDbqGVrTUvQMPmBGBw==",
            "dev": true,
            "requires": {
                "define-property": "^2.0.2",
                "extend-shallow": "^3.0.2",
                "regex-not": "^1.0.2",
                "safe-regex": "^1.1.0"
            }
        },
        "to-regex-range": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
            "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
            "dev": true,
            "requires": {
                "is-number": "^7.0.0"
            }
        },
        "toidentifier": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.0.tgz",
            "integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw==",
            "dev": true
        },
        "tough-cookie": {
            "version": "2.5.0",
            "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.5.0.tgz",
            "integrity": "sha512-nlLsUzgm1kfLXSXfRZMc1KLAugd4hqJHDTvc2hDIwS3mZAfMEuMbc03SujMF+GEcpaX/qboeycw6iO8JwVv2+g==",
            "dev": true,
            "requires": {
                "psl": "^1.1.28",
                "punycode": "^2.1.1"
            }
        },
        "tr46": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/tr46/-/tr46-2.0.2.tgz",
            "integrity": "sha512-3n1qG+/5kg+jrbTzwAykB5yRYtQCTqOGKq5U5PE3b0a1/mzo6snDhjGS0zJVJunO0NrT3Dg1MLy5TjWP/UJppg==",
            "dev": true,
            "requires": {
                "punycode": "^2.1.1"
            }
        },
        "tree-kill": {
            "version": "1.2.2",
            "resolved": "https://registry.npmjs.org/tree-kill/-/tree-kill-1.2.2.tgz",
            "integrity": "sha512-L0Orpi8qGpRG//Nd+H90vFB+3iHnue1zSSGmNOOCh1GLJ7rUKVwV2HvijphGQS2UmhUZewS9VgvxYIdgr+fG1A==",
            "dev": true
        },
        "ts-jest": {
            "version": "26.4.4",
            "resolved": "https://registry.npmjs.org/ts-jest/-/ts-jest-26.4.4.tgz",
            "integrity": "sha512-3lFWKbLxJm34QxyVNNCgXX1u4o/RV0myvA2y2Bxm46iGIjKlaY0own9gIckbjZJPn+WaJEnfPPJ20HHGpoq4yg==",
            "dev": true,
            "requires": {
                "@types/jest": "26.x",
                "bs-logger": "0.x",
                "buffer-from": "1.x",
                "fast-json-stable-stringify": "2.x",
                "jest-util": "^26.1.0",
                "json5": "2.x",
                "lodash.memoize": "4.x",
                "make-error": "1.x",
                "mkdirp": "1.x",
                "semver": "7.x",
                "yargs-parser": "20.x"
            },
            "dependencies": {
                "mkdirp": {
                    "version": "1.0.4",
                    "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
                    "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",
                    "dev": true
                },
                "yargs-parser": {
                    "version": "20.2.4",
                    "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.4.tgz",
                    "integrity": "sha512-WOkpgNhPTlE73h4VFAFsOnomJVaovO8VqLDzy5saChRBFQFBoMYirowyW+Q9HB4HFF4Z7VZTiG3iSzJJA29yRA==",
                    "dev": true
                }
            }
        },
        "ts-node": {
            "version": "8.3.0",
            "resolved": "https://registry.npmjs.org/ts-node/-/ts-node-8.3.0.tgz",
            "integrity": "sha512-dyNS/RqyVTDcmNM4NIBAeDMpsAdaQ+ojdf0GOLqE6nwJOgzEkdRNzJywhDfwnuvB10oa6NLVG1rUJQCpRN7qoQ==",
            "dev": true,
            "requires": {
                "arg": "^4.1.0",
                "diff": "^4.0.1",
                "make-error": "^1.1.1",
                "source-map-support": "^0.5.6",
                "yn": "^3.0.0"
            }
        },
        "ts-pnp": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/ts-pnp/-/ts-pnp-1.2.0.tgz",
            "integrity": "sha512-csd+vJOb/gkzvcCHgTGSChYpy5f1/XKNsmvBGO4JXS+z1v2HobugDz4s1IeFXM3wZB44uczs+eazB5Q/ccdhQw==",
            "dev": true
        },
        "tsconfig-paths": {
            "version": "3.9.0",
            "resolved": "https://registry.npmjs.org/tsconfig-paths/-/tsconfig-paths-3.9.0.tgz",
            "integrity": "sha512-dRcuzokWhajtZWkQsDVKbWyY+jgcLC5sqJhg2PSgf4ZkH2aHPvaOY8YWGhmjb68b5qqTfasSsDO9k7RUiEmZAw==",
            "dev": true,
            "requires": {
                "@types/json5": "^0.0.29",
                "json5": "^1.0.1",
                "minimist": "^1.2.0",
                "strip-bom": "^3.0.0"
            },
            "dependencies": {
                "json5": {
                    "version": "1.0.1",
                    "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
                    "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
                    "dev": true,
                    "requires": {
                        "minimist": "^1.2.0"
                    }
                }
            }
        },
        "tslib": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.0.3.tgz",
            "integrity": "sha512-uZtkfKblCEQtZKBF6EBXVZeQNl82yqtDQdv+eck8u7tdPxjLu2/lp5/uPW+um2tpuxINHWy3GhiccY7QgEaVHQ=="
        },
        "tslint": {
            "version": "6.1.3",
            "resolved": "https://registry.npmjs.org/tslint/-/tslint-6.1.3.tgz",
            "integrity": "sha512-IbR4nkT96EQOvKE2PW/djGz8iGNeJ4rF2mBfiYaR/nvUWYKJhLwimoJKgjIFEIDibBtOevj7BqCRL4oHeWWUCg==",
            "dev": true,
            "requires": {
                "@babel/code-frame": "^7.0.0",
                "builtin-modules": "^1.1.1",
                "chalk": "^2.3.0",
                "commander": "^2.12.1",
                "diff": "^4.0.1",
                "glob": "^7.1.1",
                "js-yaml": "^3.13.1",
                "minimatch": "^3.0.4",
                "mkdirp": "^0.5.3",
                "resolve": "^1.3.2",
                "semver": "^5.3.0",
                "tslib": "^1.13.0",
                "tsutils": "^2.29.0"
            },
            "dependencies": {
                "semver": {
                    "version": "5.7.1",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
                    "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
                    "dev": true
                },
                "tslib": {
                    "version": "1.14.1",
                    "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
                    "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
                    "dev": true
                }
            }
        },
        "tslint-to-eslint-config": {
            "version": "2.0.0-beta5",
            "resolved": "https://registry.npmjs.org/tslint-to-eslint-config/-/tslint-to-eslint-config-2.0.0-beta5.tgz",
            "integrity": "sha512-6v+jlBFT7fRLAR+MB1ptMtgcNVp+xRomtjPk2DIimZwydhBJBCp/j5gEKKIB1nankWPASDx9f5YUWOh/jwnuXg==",
            "dev": true,
            "requires": {
                "chalk": "4.1.0",
                "commander": "6.2.0",
                "cson-parser": "4.0.5",
                "eslint-config-prettier": "6.15.0",
                "glob": "7.1.6",
                "json5": "2.1.3",
                "lodash": "4.17.20",
                "minimatch": "3.0.4",
                "tslint": "6.1.3",
                "typescript": "4.0.5"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "commander": {
                    "version": "6.2.0",
                    "resolved": "https://registry.npmjs.org/commander/-/commander-6.2.0.tgz",
                    "integrity": "sha512-zP4jEKbe8SHzKJYQmq8Y9gYjtO/POJLgIdKgV7B9qNmABVFVc+ctqSX6iXh4mCpJfRBOabiZ2YKPg8ciDw6C+Q==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "tsutils": {
            "version": "2.29.0",
            "resolved": "https://registry.npmjs.org/tsutils/-/tsutils-2.29.0.tgz",
            "integrity": "sha512-g5JVHCIJwzfISaXpXE1qvNalca5Jwob6FjI4AoPlqMusJ6ftFE7IkkFoMhVLRgK+4Kx3gkzb8UZK5t5yTTvEmA==",
            "dev": true,
            "requires": {
                "tslib": "^1.8.1"
            },
            "dependencies": {
                "tslib": {
                    "version": "1.14.1",
                    "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
                    "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
                    "dev": true
                }
            }
        },
        "tty-browserify": {
            "version": "0.0.0",
            "resolved": "https://registry.npmjs.org/tty-browserify/-/tty-browserify-0.0.0.tgz",
            "integrity": "sha1-oVe6QC2iTpv5V/mqadUk7tQpAaY=",
            "dev": true
        },
        "tunnel-agent": {
            "version": "0.6.0",
            "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
            "integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
            "dev": true,
            "requires": {
                "safe-buffer": "^5.0.1"
            }
        },
        "tweetnacl": {
            "version": "0.14.5",
            "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
            "integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q=",
            "dev": true
        },
        "type": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/type/-/type-1.2.0.tgz",
            "integrity": "sha512-+5nt5AAniqsCnu2cEQQdpzCAh33kVx8n0VoFidKpB1dVVLAN/F+bgVOqOJqOnEnrhp222clB5p3vUlD+1QAnfg==",
            "dev": true
        },
        "type-check": {
            "version": "0.4.0",
            "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
            "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
            "dev": true,
            "requires": {
                "prelude-ls": "^1.2.1"
            }
        },
        "type-detect": {
            "version": "4.0.8",
            "resolved": "https://registry.npmjs.org/type-detect/-/type-detect-4.0.8.tgz",
            "integrity": "sha512-0fr/mIH1dlO+x7TlcMy+bIDqKPsw/70tVyeHW787goQjhmqaZe10uwLujubK9q9Lg6Fiho1KUKDYz0Z7k7g5/g==",
            "dev": true
        },
        "type-fest": {
            "version": "0.11.0",
            "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.11.0.tgz",
            "integrity": "sha512-OdjXJxnCN1AvyLSzeKIgXTXxV+99ZuXl3Hpo9XpJAv9MBcHrrJOQ5kV7ypXOuQie+AmWG25hLbiKdwYTifzcfQ=="
        },
        "type-is": {
            "version": "1.6.18",
            "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
            "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
            "dev": true,
            "requires": {
                "media-typer": "0.3.0",
                "mime-types": "~2.1.24"
            }
        },
        "typedarray": {
            "version": "0.0.6",
            "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
            "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c=",
            "dev": true
        },
        "typedarray-to-buffer": {
            "version": "3.1.5",
            "resolved": "https://registry.npmjs.org/typedarray-to-buffer/-/typedarray-to-buffer-3.1.5.tgz",
            "integrity": "sha512-zdu8XMNEDepKKR+XYOXAVPtWui0ly0NtohUscw+UmaHiAWT8hrV1rr//H6V+0DvJ3OQ19S979M0laLfX8rm82Q==",
            "dev": true,
            "requires": {
                "is-typedarray": "^1.0.0"
            }
        },
        "typescript": {
            "version": "4.0.5",
            "resolved": "https://registry.npmjs.org/typescript/-/typescript-4.0.5.tgz",
            "integrity": "sha512-ywmr/VrTVCmNTJ6iV2LwIrfG1P+lv6luD8sUJs+2eI9NLGigaN+nUQc13iHqisq7bra9lnmUSYqbJvegraBOPQ==",
            "dev": true
        },
        "underscore": {
            "version": "1.11.0",
            "resolved": "https://registry.npmjs.org/underscore/-/underscore-1.11.0.tgz",
            "integrity": "sha512-xY96SsN3NA461qIRKZ/+qox37YXPtSBswMGfiNptr+wrt6ds4HaMw23TP612fEyGekRE6LNRiLYr/aqbHXNedw==",
            "dev": true
        },
        "unicode-canonical-property-names-ecmascript": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/unicode-canonical-property-names-ecmascript/-/unicode-canonical-property-names-ecmascript-1.0.4.tgz",
            "integrity": "sha512-jDrNnXWHd4oHiTZnx/ZG7gtUTVp+gCcTTKr8L0HjlwphROEW3+Him+IpvC+xcJEFegapiMZyZe02CyuOnRmbnQ==",
            "dev": true
        },
        "unicode-match-property-ecmascript": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/unicode-match-property-ecmascript/-/unicode-match-property-ecmascript-1.0.4.tgz",
            "integrity": "sha512-L4Qoh15vTfntsn4P1zqnHulG0LdXgjSO035fEpdtp6YxXhMT51Q6vgM5lYdG/5X3MjS+k/Y9Xw4SFCY9IkR0rg==",
            "dev": true,
            "requires": {
                "unicode-canonical-property-names-ecmascript": "^1.0.4",
                "unicode-property-aliases-ecmascript": "^1.0.4"
            }
        },
        "unicode-match-property-value-ecmascript": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/unicode-match-property-value-ecmascript/-/unicode-match-property-value-ecmascript-1.2.0.tgz",
            "integrity": "sha512-wjuQHGQVofmSJv1uVISKLE5zO2rNGzM/KCYZch/QQvez7C1hUhBIuZ701fYXExuufJFMPhv2SyL8CyoIfMLbIQ==",
            "dev": true
        },
        "unicode-property-aliases-ecmascript": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/unicode-property-aliases-ecmascript/-/unicode-property-aliases-ecmascript-1.1.0.tgz",
            "integrity": "sha512-PqSoPh/pWetQ2phoj5RLiaqIk4kCNwoV3CI+LfGmWLKI3rE3kl1h59XpX2BjgDrmbxD9ARtQobPGU1SguCYuQg==",
            "dev": true
        },
        "union-value": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/union-value/-/union-value-1.0.1.tgz",
            "integrity": "sha512-tJfXmxMeWYnczCVs7XAEvIV7ieppALdyepWMkHkwciRpZraG/xwT+s2JN8+pr1+8jCRf80FFzvr+MpQeeoF4Xg==",
            "dev": true,
            "requires": {
                "arr-union": "^3.1.0",
                "get-value": "^2.0.6",
                "is-extendable": "^0.1.1",
                "set-value": "^2.0.1"
            }
        },
        "uniq": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/uniq/-/uniq-1.0.1.tgz",
            "integrity": "sha1-sxxa6CVIRKOoKBVBzisEuGWnNP8=",
            "dev": true
        },
        "uniqs": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/uniqs/-/uniqs-2.0.0.tgz",
            "integrity": "sha1-/+3ks2slKQaW5uFl1KWe25mOawI=",
            "dev": true
        },
        "unique-filename": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/unique-filename/-/unique-filename-1.1.1.tgz",
            "integrity": "sha512-Vmp0jIp2ln35UTXuryvjzkjGdRyf9b2lTXuSYUiPmzRcl3FDtYqAwOnTJkAngD9SWhnoJzDbTKwaOrZ+STtxNQ==",
            "dev": true,
            "requires": {
                "unique-slug": "^2.0.0"
            }
        },
        "unique-slug": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/unique-slug/-/unique-slug-2.0.2.tgz",
            "integrity": "sha512-zoWr9ObaxALD3DOPfjPSqxt4fnZiWblxHIgeWqW8x7UqDzEtHEQLzji2cuJYQFCU6KmoJikOYAZlrTHHebjx2w==",
            "dev": true,
            "requires": {
                "imurmurhash": "^0.1.4"
            }
        },
        "unique-string": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/unique-string/-/unique-string-2.0.0.tgz",
            "integrity": "sha512-uNaeirEPvpZWSgzwsPGtU2zVSTrn/8L5q/IexZmH0eH6SA73CmAA5U4GwORTxQAZs95TAXLNqeLoPPNO5gZfWg==",
            "dev": true,
            "requires": {
                "crypto-random-string": "^2.0.0"
            }
        },
        "universal-analytics": {
            "version": "0.4.23",
            "resolved": "https://registry.npmjs.org/universal-analytics/-/universal-analytics-0.4.23.tgz",
            "integrity": "sha512-lgMIH7XBI6OgYn1woDEmxhGdj8yDefMKg7GkWdeATAlQZFrMrNyxSkpDzY57iY0/6fdlzTbBV03OawvvzG+q7A==",
            "dev": true,
            "requires": {
                "debug": "^4.1.1",
                "request": "^2.88.2",
                "uuid": "^3.0.0"
            }
        },
        "universalify": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
            "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg==",
            "dev": true
        },
        "unpipe": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
            "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw=",
            "dev": true
        },
        "unquote": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/unquote/-/unquote-1.1.1.tgz",
            "integrity": "sha1-j97XMk7G6IoP+LkF58CYzcCG1UQ=",
            "dev": true
        },
        "unset-value": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/unset-value/-/unset-value-1.0.0.tgz",
            "integrity": "sha1-g3aHP30jNRef+x5vw6jtDfyKtVk=",
            "dev": true,
            "requires": {
                "has-value": "^0.3.1",
                "isobject": "^3.0.0"
            },
            "dependencies": {
                "has-value": {
                    "version": "0.3.1",
                    "resolved": "https://registry.npmjs.org/has-value/-/has-value-0.3.1.tgz",
                    "integrity": "sha1-ex9YutpiyoJ+wKIHgCVlSEWZXh8=",
                    "dev": true,
                    "requires": {
                        "get-value": "^2.0.3",
                        "has-values": "^0.1.4",
                        "isobject": "^2.0.0"
                    },
                    "dependencies": {
                        "isobject": {
                            "version": "2.1.0",
                            "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",
                            "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
                            "dev": true,
                            "requires": {
                                "isarray": "1.0.0"
                            }
                        }
                    }
                },
                "has-values": {
                    "version": "0.1.4",
                    "resolved": "https://registry.npmjs.org/has-values/-/has-values-0.1.4.tgz",
                    "integrity": "sha1-bWHeldkd/Km5oCCJrThL/49it3E=",
                    "dev": true
                }
            }
        },
        "upath": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/upath/-/upath-1.2.0.tgz",
            "integrity": "sha512-aZwGpamFO61g3OlfT7OQCHqhGnW43ieH9WZeP7QxN/G/jS4jfqUkZxoryvJgVPEcrl5NL/ggHsSmLMHuH64Lhg==",
            "dev": true
        },
        "update-notifier": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/update-notifier/-/update-notifier-5.0.1.tgz",
            "integrity": "sha512-BuVpRdlwxeIOvmc32AGYvO1KVdPlsmqSh8KDDBxS6kDE5VR7R8OMP1d8MdhaVBvxl4H3551k9akXr0Y1iIB2Wg==",
            "dev": true,
            "requires": {
                "boxen": "^4.2.0",
                "chalk": "^4.1.0",
                "configstore": "^5.0.1",
                "has-yarn": "^2.1.0",
                "import-lazy": "^2.1.0",
                "is-ci": "^2.0.0",
                "is-installed-globally": "^0.3.2",
                "is-npm": "^5.0.0",
                "is-yarn-global": "^0.3.0",
                "latest-version": "^5.1.0",
                "pupa": "^2.1.1",
                "semver": "^7.3.2",
                "semver-diff": "^3.1.1",
                "xdg-basedir": "^4.0.0"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "dev": true,
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "uri-js": {
            "version": "4.4.0",
            "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.0.tgz",
            "integrity": "sha512-B0yRTzYdUCCn9n+F4+Gh4yIDtMQcaJsmYBDsTSG8g/OejKBodLQ2IHfN3bM7jUsRXndopT7OIXWdYqc1fjmV6g==",
            "requires": {
                "punycode": "^2.1.0"
            }
        },
        "urix": {
            "version": "0.1.0",
            "resolved": "https://registry.npmjs.org/urix/-/urix-0.1.0.tgz",
            "integrity": "sha1-2pN/emLiH+wf0Y1Js1wpNQZ6bHI=",
            "dev": true
        },
        "url": {
            "version": "0.11.0",
            "resolved": "https://registry.npmjs.org/url/-/url-0.11.0.tgz",
            "integrity": "sha1-ODjpfPxgUh63PFJajlW/3Z4uKPE=",
            "dev": true,
            "requires": {
                "punycode": "1.3.2",
                "querystring": "0.2.0"
            },
            "dependencies": {
                "punycode": {
                    "version": "1.3.2",
                    "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.3.2.tgz",
                    "integrity": "sha1-llOgNvt8HuQjQvIyXM7v6jkmxI0=",
                    "dev": true
                }
            }
        },
        "url-parse": {
            "version": "1.4.7",
            "resolved": "https://registry.npmjs.org/url-parse/-/url-parse-1.4.7.tgz",
            "integrity": "sha512-d3uaVyzDB9tQoSXFvuSUNFibTd9zxd2bkVrDRvF5TmvWWQwqE4lgYJ5m+x1DbecWkw+LK4RNl2CU1hHuOKPVlg==",
            "dev": true,
            "requires": {
                "querystringify": "^2.1.1",
                "requires-port": "^1.0.0"
            }
        },
        "url-parse-lax": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/url-parse-lax/-/url-parse-lax-3.0.0.tgz",
            "integrity": "sha1-FrXK/Afb42dsGxmZF3gj1lA6yww=",
            "dev": true,
            "requires": {
                "prepend-http": "^2.0.0"
            }
        },
        "use": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/use/-/use-3.1.1.tgz",
            "integrity": "sha512-cwESVXlO3url9YWlFW/TA9cshCEhtu7IKJ/p5soJ/gGpj7vbvFrAY/eIioQ6Dw23KjZhYgiIo8HOs1nQ2vr/oQ==",
            "dev": true
        },
        "util": {
            "version": "0.11.1",
            "resolved": "https://registry.npmjs.org/util/-/util-0.11.1.tgz",
            "integrity": "sha512-HShAsny+zS2TZfaXxD9tYj4HQGlBezXZMZuM/S5PKLLoZkShZiGk9o5CzukI1LVHZvjdvZ2Sj1aW/Ndn2NB/HQ==",
            "dev": true,
            "requires": {
                "inherits": "2.0.3"
            },
            "dependencies": {
                "inherits": {
                    "version": "2.0.3",
                    "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
                    "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4=",
                    "dev": true
                }
            }
        },
        "util-deprecate": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
            "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8=",
            "dev": true
        },
        "util.promisify": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/util.promisify/-/util.promisify-1.0.1.tgz",
            "integrity": "sha512-g9JpC/3He3bm38zsLupWryXHoEcS22YHthuPQSJdMy6KNrzIRzWqcsHzD/WUnqe45whVou4VIsPew37DoXWNrA==",
            "dev": true,
            "requires": {
                "define-properties": "^1.1.3",
                "es-abstract": "^1.17.2",
                "has-symbols": "^1.0.1",
                "object.getownpropertydescriptors": "^2.1.0"
            }
        },
        "utils-merge": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
            "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM=",
            "dev": true
        },
        "uuid": {
            "version": "3.4.0",
            "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz",
            "integrity": "sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A==",
            "dev": true
        },
        "v8-compile-cache": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/v8-compile-cache/-/v8-compile-cache-2.2.0.tgz",
            "integrity": "sha512-gTpR5XQNKFwOd4clxfnhaqvfqMpqEwr4tOtCyz4MtYZX2JYhfr1JvBFKdS+7K/9rfpZR3VLX+YWBbKoxCgS43Q==",
            "dev": true
        },
        "v8-to-istanbul": {
            "version": "7.0.0",
            "resolved": "https://registry.npmjs.org/v8-to-istanbul/-/v8-to-istanbul-7.0.0.tgz",
            "integrity": "sha512-fLL2rFuQpMtm9r8hrAV2apXX/WqHJ6+IC4/eQVdMDGBUgH/YMV4Gv3duk3kjmyg6uiQWBAA9nJwue4iJUOkHeA==",
            "dev": true,
            "requires": {
                "@types/istanbul-lib-coverage": "^2.0.1",
                "convert-source-map": "^1.6.0",
                "source-map": "^0.7.3"
            }
        },
        "validate-npm-package-license": {
            "version": "3.0.4",
            "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
            "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
            "dev": true,
            "requires": {
                "spdx-correct": "^3.0.0",
                "spdx-expression-parse": "^3.0.0"
            }
        },
        "validate-npm-package-name": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/validate-npm-package-name/-/validate-npm-package-name-3.0.0.tgz",
            "integrity": "sha1-X6kS2B630MdK/BQN5zF/DKffQ34=",
            "dev": true,
            "requires": {
                "builtins": "^1.0.3"
            }
        },
        "vary": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
            "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw=",
            "dev": true
        },
        "vendors": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/vendors/-/vendors-1.0.4.tgz",
            "integrity": "sha512-/juG65kTL4Cy2su4P8HjtkTxk6VmJDiOPBufWniqQ6wknac6jNiXS9vU+hO3wgusiyqWlzTbVHi0dyJqRONg3w==",
            "dev": true
        },
        "verror": {
            "version": "1.10.0",
            "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
            "integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
            "dev": true,
            "requires": {
                "assert-plus": "^1.0.0",
                "core-util-is": "1.0.2",
                "extsprintf": "^1.2.0"
            }
        },
        "vm-browserify": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/vm-browserify/-/vm-browserify-1.1.2.tgz",
            "integrity": "sha512-2ham8XPWTONajOR0ohOKOHXkm3+gaBmGut3SRuu75xLd/RRaY6vqgh8NBYYk7+RW3u5AtzPQZG8F10LHkl0lAQ==",
            "dev": true
        },
        "w3c-hr-time": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/w3c-hr-time/-/w3c-hr-time-1.0.2.tgz",
            "integrity": "sha512-z8P5DvDNjKDoFIHK7q8r8lackT6l+jo/Ye3HOle7l9nICP9lf1Ci25fy9vHd0JOWewkIFzXIEig3TdKT7JQ5fQ==",
            "dev": true,
            "requires": {
                "browser-process-hrtime": "^1.0.0"
            }
        },
        "w3c-xmlserializer": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/w3c-xmlserializer/-/w3c-xmlserializer-2.0.0.tgz",
            "integrity": "sha512-4tzD0mF8iSiMiNs30BiLO3EpfGLZUT2MSX/G+o7ZywDzliWQ3OPtTZ0PTC3B3ca1UAf4cJMHB+2Bf56EriJuRA==",
            "dev": true,
            "requires": {
                "xml-name-validator": "^3.0.0"
            }
        },
        "walker": {
            "version": "1.0.7",
            "resolved": "https://registry.npmjs.org/walker/-/walker-1.0.7.tgz",
            "integrity": "sha1-L3+bj9ENZ3JisYqITijRlhjgKPs=",
            "dev": true,
            "requires": {
                "makeerror": "1.0.x"
            }
        },
        "watchpack": {
            "version": "1.7.5",
            "resolved": "https://registry.npmjs.org/watchpack/-/watchpack-1.7.5.tgz",
            "integrity": "sha512-9P3MWk6SrKjHsGkLT2KHXdQ/9SNkyoJbabxnKOoJepsvJjJG8uYTR3yTPxPQvNDI3w4Nz1xnE0TLHK4RIVe/MQ==",
            "dev": true,
            "requires": {
                "chokidar": "^3.4.1",
                "graceful-fs": "^4.1.2",
                "neo-async": "^2.5.0",
                "watchpack-chokidar2": "^2.0.1"
            }
        },
        "watchpack-chokidar2": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/watchpack-chokidar2/-/watchpack-chokidar2-2.0.1.tgz",
            "integrity": "sha512-nCFfBIPKr5Sh61s4LPpy1Wtfi0HE8isJ3d2Yb5/Ppw2P2B/3eVSEBjKfN0fmHJSK14+31KwMKmcrzs2GM4P0Ww==",
            "dev": true,
            "optional": true,
            "requires": {
                "chokidar": "^2.1.8"
            },
            "dependencies": {
                "anymatch": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",
                    "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",
                    "dev": true,
                    "optional": true,
                    "requires": {
                        "micromatch": "^3.1.4",
                        "normalize-path": "^2.1.1"
                    },
                    "dependencies": {
                        "normalize-path": {
                            "version": "2.1.1",
                            "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
                            "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
                            "dev": true,
                            "optional": true,
                            "requires": {
                                "remove-trailing-separator": "^1.0.1"
                            }
                        }
                    }
                },
                "binary-extensions": {
                    "version": "1.13.1",
                    "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-1.13.1.tgz",
                    "integrity": "sha512-Un7MIEDdUC5gNpcGDV97op1Ywk748MpHcFTHoYs6qnj1Z3j7I53VG3nwZhKzoBZmbdRNnb6WRdFlwl7tSDuZGw==",
                    "dev": true,
                    "optional": true
                },
                "braces": {
                    "version": "2.3.2",
                    "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
                    "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
                    "dev": true,
                    "optional": true,
                    "requires": {
                        "arr-flatten": "^1.1.0",
                        "array-unique": "^0.3.2",
                        "extend-shallow": "^2.0.1",
                        "fill-range": "^4.0.0",
                        "isobject": "^3.0.1",
                        "repeat-element": "^1.1.2",
                        "snapdragon": "^0.8.1",
                        "snapdragon-node": "^2.0.1",
                        "split-string": "^3.0.2",
                        "to-regex": "^3.0.1"
                    },
                    "dependencies": {
                        "extend-shallow": {
                            "version": "2.0.1",
                            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                            "dev": true,
                            "optional": true,
                            "requires": {
                                "is-extendable": "^0.1.0"
                            }
                        }
                    }
                },
                "chokidar": {
                    "version": "2.1.8",
                    "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-2.1.8.tgz",
                    "integrity": "sha512-ZmZUazfOzf0Nve7duiCKD23PFSCs4JPoYyccjUFF3aQkQadqBhfzhjkwBH2mNOG9cTBwhamM37EIsIkZw3nRgg==",
                    "dev": true,
                    "optional": true,
                    "requires": {
                        "anymatch": "^2.0.0",
                        "async-each": "^1.0.1",
                        "braces": "^2.3.2",
                        "fsevents": "^1.2.7",
                        "glob-parent": "^3.1.0",
                        "inherits": "^2.0.3",
                        "is-binary-path": "^1.0.0",
                        "is-glob": "^4.0.0",
                        "normalize-path": "^3.0.0",
                        "path-is-absolute": "^1.0.0",
                        "readdirp": "^2.2.1",
                        "upath": "^1.1.1"
                    }
                },
                "fill-range": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
                    "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
                    "dev": true,
                    "optional": true,
                    "requires": {
                        "extend-shallow": "^2.0.1",
                        "is-number": "^3.0.0",
                        "repeat-string": "^1.6.1",
                        "to-regex-range": "^2.1.0"
                    },
                    "dependencies": {
                        "extend-shallow": {
                            "version": "2.0.1",
                            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                            "dev": true,
                            "optional": true,
                            "requires": {
                                "is-extendable": "^0.1.0"
                            }
                        }
                    }
                },
                "fsevents": {
                    "version": "1.2.13",
                    "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-1.2.13.tgz",
                    "integrity": "sha512-oWb1Z6mkHIskLzEJ/XWX0srkpkTQ7vaopMQkyaEIoq0fmtFVxOthb8cCxeT+p3ynTdkk/RZwbgG4brR5BeWECw==",
                    "dev": true,
                    "optional": true
                },
                "glob-parent": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-3.1.0.tgz",
                    "integrity": "sha1-nmr2KZ2NO9K9QEMIMr0RPfkGxa4=",
                    "dev": true,
                    "optional": true,
                    "requires": {
                        "is-glob": "^3.1.0",
                        "path-dirname": "^1.0.0"
                    },
                    "dependencies": {
                        "is-glob": {
                            "version": "3.1.0",
                            "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",
                            "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",
                            "dev": true,
                            "optional": true,
                            "requires": {
                                "is-extglob": "^2.1.0"
                            }
                        }
                    }
                },
                "is-binary-path": {
                    "version": "1.0.1",
                    "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-1.0.1.tgz",
                    "integrity": "sha1-dfFmQrSA8YenEcgUFh/TpKdlWJg=",
                    "dev": true,
                    "optional": true,
                    "requires": {
                        "binary-extensions": "^1.0.0"
                    }
                },
                "is-number": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
                    "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
                    "dev": true,
                    "optional": true,
                    "requires": {
                        "kind-of": "^3.0.2"
                    },
                    "dependencies": {
                        "kind-of": {
                            "version": "3.2.2",
                            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                            "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                            "dev": true,
                            "optional": true,
                            "requires": {
                                "is-buffer": "^1.1.5"
                            }
                        }
                    }
                },
                "micromatch": {
                    "version": "3.1.10",
                    "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
                    "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
                    "dev": true,
                    "optional": true,
                    "requires": {
                        "arr-diff": "^4.0.0",
                        "array-unique": "^0.3.2",
                        "braces": "^2.3.1",
                        "define-property": "^2.0.2",
                        "extend-shallow": "^3.0.2",
                        "extglob": "^2.0.4",
                        "fragment-cache": "^0.2.1",
                        "kind-of": "^6.0.2",
                        "nanomatch": "^1.2.9",
                        "object.pick": "^1.3.0",
                        "regex-not": "^1.0.0",
                        "snapdragon": "^0.8.1",
                        "to-regex": "^3.0.2"
                    }
                },
                "readdirp": {
                    "version": "2.2.1",
                    "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-2.2.1.tgz",
                    "integrity": "sha512-1JU/8q+VgFZyxwrJ+SVIOsh+KywWGpds3NTqikiKpDMZWScmAYyKIgqkO+ARvNWJfXeXR1zxz7aHF4u4CyH6vQ==",
                    "dev": true,
                    "optional": true,
                    "requires": {
                        "graceful-fs": "^4.1.11",
                        "micromatch": "^3.1.10",
                        "readable-stream": "^2.0.2"
                    }
                },
                "to-regex-range": {
                    "version": "2.1.1",
                    "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
                    "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
                    "dev": true,
                    "optional": true,
                    "requires": {
                        "is-number": "^3.0.0",
                        "repeat-string": "^1.6.1"
                    }
                }
            }
        },
        "wbuf": {
            "version": "1.7.3",
            "resolved": "https://registry.npmjs.org/wbuf/-/wbuf-1.7.3.tgz",
            "integrity": "sha512-O84QOnr0icsbFGLS0O3bI5FswxzRr8/gHwWkDlQFskhSPryQXvrTMxjxGP4+iWYoauLoBvfDpkrOauZ+0iZpDA==",
            "dev": true,
            "requires": {
                "minimalistic-assert": "^1.0.0"
            }
        },
        "wcwidth": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/wcwidth/-/wcwidth-1.0.1.tgz",
            "integrity": "sha1-8LDc+RW8X/FSivrbLA4XtTLaL+g=",
            "requires": {
                "defaults": "^1.0.3"
            }
        },
        "webdriver-js-extender": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/webdriver-js-extender/-/webdriver-js-extender-2.1.0.tgz",
            "integrity": "sha512-lcUKrjbBfCK6MNsh7xaY2UAUmZwe+/ib03AjVOpFobX4O7+83BUveSrLfU0Qsyb1DaKJdQRbuU+kM9aZ6QUhiQ==",
            "dev": true,
            "requires": {
                "@types/selenium-webdriver": "^3.0.0",
                "selenium-webdriver": "^3.0.1"
            }
        },
        "webidl-conversions": {
            "version": "6.1.0",
            "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-6.1.0.tgz",
            "integrity": "sha512-qBIvFLGiBpLjfwmYAaHPXsn+ho5xZnGvyGvsarywGNc8VyQJUMHJ8OBKGGrPER0okBeMDaan4mNBlgBROxuI8w==",
            "dev": true
        },
        "webpack": {
            "version": "4.44.2",
            "resolved": "https://registry.npmjs.org/webpack/-/webpack-4.44.2.tgz",
            "integrity": "sha512-6KJVGlCxYdISyurpQ0IPTklv+DULv05rs2hseIXer6D7KrUicRDLFb4IUM1S6LUAKypPM/nSiVSuv8jHu1m3/Q==",
            "dev": true,
            "requires": {
                "@webassemblyjs/ast": "1.9.0",
                "@webassemblyjs/helper-module-context": "1.9.0",
                "@webassemblyjs/wasm-edit": "1.9.0",
                "@webassemblyjs/wasm-parser": "1.9.0",
                "acorn": "^6.4.1",
                "ajv": "^6.10.2",
                "ajv-keywords": "^3.4.1",
                "chrome-trace-event": "^1.0.2",
                "enhanced-resolve": "^4.3.0",
                "eslint-scope": "^4.0.3",
                "json-parse-better-errors": "^1.0.2",
                "loader-runner": "^2.4.0",
                "loader-utils": "^1.2.3",
                "memory-fs": "^0.4.1",
                "micromatch": "^3.1.10",
                "mkdirp": "^0.5.3",
                "neo-async": "^2.6.1",
                "node-libs-browser": "^2.2.1",
                "schema-utils": "^1.0.0",
                "tapable": "^1.1.3",
                "terser-webpack-plugin": "^1.4.3",
                "watchpack": "^1.7.4",
                "webpack-sources": "^1.4.1"
            },
            "dependencies": {
                "braces": {
                    "version": "2.3.2",
                    "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
                    "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
                    "dev": true,
                    "requires": {
                        "arr-flatten": "^1.1.0",
                        "array-unique": "^0.3.2",
                        "extend-shallow": "^2.0.1",
                        "fill-range": "^4.0.0",
                        "isobject": "^3.0.1",
                        "repeat-element": "^1.1.2",
                        "snapdragon": "^0.8.1",
                        "snapdragon-node": "^2.0.1",
                        "split-string": "^3.0.2",
                        "to-regex": "^3.0.1"
                    },
                    "dependencies": {
                        "extend-shallow": {
                            "version": "2.0.1",
                            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                            "dev": true,
                            "requires": {
                                "is-extendable": "^0.1.0"
                            }
                        }
                    }
                },
                "cacache": {
                    "version": "12.0.4",
                    "resolved": "https://registry.npmjs.org/cacache/-/cacache-12.0.4.tgz",
                    "integrity": "sha512-a0tMB40oefvuInr4Cwb3GerbL9xTj1D5yg0T5xrjGCGyfvbxseIXX7BAO/u/hIXdafzOI5JC3wDwHyf24buOAQ==",
                    "dev": true,
                    "requires": {
                        "bluebird": "^3.5.5",
                        "chownr": "^1.1.1",
                        "figgy-pudding": "^3.5.1",
                        "glob": "^7.1.4",
                        "graceful-fs": "^4.1.15",
                        "infer-owner": "^1.0.3",
                        "lru-cache": "^5.1.1",
                        "mississippi": "^3.0.0",
                        "mkdirp": "^0.5.1",
                        "move-concurrently": "^1.0.1",
                        "promise-inflight": "^1.0.1",
                        "rimraf": "^2.6.3",
                        "ssri": "^6.0.1",
                        "unique-filename": "^1.1.1",
                        "y18n": "^4.0.0"
                    }
                },
                "chownr": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/chownr/-/chownr-1.1.4.tgz",
                    "integrity": "sha512-jJ0bqzaylmJtVnNgzTeSOs8DPavpbYgEr/b0YL8/2GO3xJEhInFmhKMUnEJQjZumK7KXGFhUy89PrsJWlakBVg==",
                    "dev": true
                },
                "enhanced-resolve": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-4.3.0.tgz",
                    "integrity": "sha512-3e87LvavsdxyoCfGusJnrZ5G8SLPOFeHSNpZI/ATL9a5leXo2k0w6MKnbqhdBad9qTobSfB20Ld7UmgoNbAZkQ==",
                    "dev": true,
                    "requires": {
                        "graceful-fs": "^4.1.2",
                        "memory-fs": "^0.5.0",
                        "tapable": "^1.0.0"
                    },
                    "dependencies": {
                        "memory-fs": {
                            "version": "0.5.0",
                            "resolved": "https://registry.npmjs.org/memory-fs/-/memory-fs-0.5.0.tgz",
                            "integrity": "sha512-jA0rdU5KoQMC0e6ppoNRtpp6vjFq6+NY7r8hywnC7V+1Xj/MtHwGIbB1QaK/dunyjWteJzmkpd7ooeWg10T7GA==",
                            "dev": true,
                            "requires": {
                                "errno": "^0.1.3",
                                "readable-stream": "^2.0.1"
                            }
                        }
                    }
                },
                "fill-range": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
                    "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
                    "dev": true,
                    "requires": {
                        "extend-shallow": "^2.0.1",
                        "is-number": "^3.0.0",
                        "repeat-string": "^1.6.1",
                        "to-regex-range": "^2.1.0"
                    },
                    "dependencies": {
                        "extend-shallow": {
                            "version": "2.0.1",
                            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                            "dev": true,
                            "requires": {
                                "is-extendable": "^0.1.0"
                            }
                        }
                    }
                },
                "find-cache-dir": {
                    "version": "2.1.0",
                    "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-2.1.0.tgz",
                    "integrity": "sha512-Tq6PixE0w/VMFfCgbONnkiQIVol/JJL7nRMi20fqzA4NRs9AfeqMGeRdPi3wIhYkxjeBaWh2rxwapn5Tu3IqOQ==",
                    "dev": true,
                    "requires": {
                        "commondir": "^1.0.1",
                        "make-dir": "^2.0.0",
                        "pkg-dir": "^3.0.0"
                    }
                },
                "is-number": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
                    "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
                    "dev": true,
                    "requires": {
                        "kind-of": "^3.0.2"
                    },
                    "dependencies": {
                        "kind-of": {
                            "version": "3.2.2",
                            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                            "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                            "dev": true,
                            "requires": {
                                "is-buffer": "^1.1.5"
                            }
                        }
                    }
                },
                "is-wsl": {
                    "version": "1.1.0",
                    "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-1.1.0.tgz",
                    "integrity": "sha1-HxbkqiKwTRM2tmGIpmrzxgDDpm0=",
                    "dev": true
                },
                "json5": {
                    "version": "1.0.1",
                    "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
                    "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
                    "dev": true,
                    "requires": {
                        "minimist": "^1.2.0"
                    }
                },
                "loader-utils": {
                    "version": "1.4.0",
                    "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-1.4.0.tgz",
                    "integrity": "sha512-qH0WSMBtn/oHuwjy/NucEgbx5dbxxnxup9s4PVXJUDHZBQY+s0NWA9rJf53RBnQZxfch7euUui7hpoAPvALZdA==",
                    "dev": true,
                    "requires": {
                        "big.js": "^5.2.2",
                        "emojis-list": "^3.0.0",
                        "json5": "^1.0.1"
                    }
                },
                "lru-cache": {
                    "version": "5.1.1",
                    "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
                    "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
                    "dev": true,
                    "requires": {
                        "yallist": "^3.0.2"
                    }
                },
                "micromatch": {
                    "version": "3.1.10",
                    "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
                    "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
                    "dev": true,
                    "requires": {
                        "arr-diff": "^4.0.0",
                        "array-unique": "^0.3.2",
                        "braces": "^2.3.1",
                        "define-property": "^2.0.2",
                        "extend-shallow": "^3.0.2",
                        "extglob": "^2.0.4",
                        "fragment-cache": "^0.2.1",
                        "kind-of": "^6.0.2",
                        "nanomatch": "^1.2.9",
                        "object.pick": "^1.3.0",
                        "regex-not": "^1.0.0",
                        "snapdragon": "^0.8.1",
                        "to-regex": "^3.0.2"
                    }
                },
                "rimraf": {
                    "version": "2.7.1",
                    "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
                    "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
                    "dev": true,
                    "requires": {
                        "glob": "^7.1.3"
                    }
                },
                "schema-utils": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-1.0.0.tgz",
                    "integrity": "sha512-i27Mic4KovM/lnGsy8whRCHhc7VicJajAjTrYg11K9zfZXnYIt4k5F+kZkwjnrhKzLic/HLU4j11mjsz2G/75g==",
                    "dev": true,
                    "requires": {
                        "ajv": "^6.1.0",
                        "ajv-errors": "^1.0.0",
                        "ajv-keywords": "^3.1.0"
                    }
                },
                "serialize-javascript": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/serialize-javascript/-/serialize-javascript-4.0.0.tgz",
                    "integrity": "sha512-GaNA54380uFefWghODBWEGisLZFj00nS5ACs6yHa9nLqlLpVLO8ChDGeKRjZnV4Nh4n0Qi7nhYZD/9fCPzEqkw==",
                    "dev": true,
                    "requires": {
                        "randombytes": "^2.1.0"
                    }
                },
                "source-map": {
                    "version": "0.6.1",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                    "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                    "dev": true
                },
                "ssri": {
                    "version": "6.0.1",
                    "resolved": "https://registry.npmjs.org/ssri/-/ssri-6.0.1.tgz",
                    "integrity": "sha512-3Wge10hNcT1Kur4PDFwEieXSCMCJs/7WvSACcrMYrNp+b8kDL1/0wJch5Ni2WrtwEa2IO8OsVfeKIciKCDx/QA==",
                    "dev": true,
                    "requires": {
                        "figgy-pudding": "^3.5.1"
                    }
                },
                "tapable": {
                    "version": "1.1.3",
                    "resolved": "https://registry.npmjs.org/tapable/-/tapable-1.1.3.tgz",
                    "integrity": "sha512-4WK/bYZmj8xLr+HUCODHGF1ZFzsYffasLUgEiMBY4fgtltdO6B4WJtlSbPaDTLpYTcGVwM2qLnFTICEcNxs3kA==",
                    "dev": true
                },
                "terser": {
                    "version": "4.8.0",
                    "resolved": "https://registry.npmjs.org/terser/-/terser-4.8.0.tgz",
                    "integrity": "sha512-EAPipTNeWsb/3wLPeup1tVPaXfIaU68xMnVdPafIL1TV05OhASArYyIfFvnvJCNrR2NIOvDVNNTFRa+Re2MWyw==",
                    "dev": true,
                    "requires": {
                        "commander": "^2.20.0",
                        "source-map": "~0.6.1",
                        "source-map-support": "~0.5.12"
                    }
                },
                "terser-webpack-plugin": {
                    "version": "1.4.5",
                    "resolved": "https://registry.npmjs.org/terser-webpack-plugin/-/terser-webpack-plugin-1.4.5.tgz",
                    "integrity": "sha512-04Rfe496lN8EYruwi6oPQkG0vo8C+HT49X687FZnpPF0qMAIHONI6HEXYPKDOE8e5HjXTyKfqRd/agHtH0kOtw==",
                    "dev": true,
                    "requires": {
                        "cacache": "^12.0.2",
                        "find-cache-dir": "^2.1.0",
                        "is-wsl": "^1.1.0",
                        "schema-utils": "^1.0.0",
                        "serialize-javascript": "^4.0.0",
                        "source-map": "^0.6.1",
                        "terser": "^4.1.2",
                        "webpack-sources": "^1.4.0",
                        "worker-farm": "^1.7.0"
                    }
                },
                "to-regex-range": {
                    "version": "2.1.1",
                    "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
                    "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
                    "dev": true,
                    "requires": {
                        "is-number": "^3.0.0",
                        "repeat-string": "^1.6.1"
                    }
                },
                "webpack-sources": {
                    "version": "1.4.3",
                    "resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-1.4.3.tgz",
                    "integrity": "sha512-lgTS3Xhv1lCOKo7SA5TjKXMjpSM4sBjNV5+q2bqesbSPs5FjGmU6jjtBSkX9b4qW87vDIsCIlUPOEhbZrMdjeQ==",
                    "dev": true,
                    "requires": {
                        "source-list-map": "^2.0.0",
                        "source-map": "~0.6.1"
                    }
                },
                "yallist": {
                    "version": "3.1.1",
                    "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
                    "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
                    "dev": true
                }
            }
        },
        "webpack-dev-middleware": {
            "version": "3.7.2",
            "resolved": "https://registry.npmjs.org/webpack-dev-middleware/-/webpack-dev-middleware-3.7.2.tgz",
            "integrity": "sha512-1xC42LxbYoqLNAhV6YzTYacicgMZQTqRd27Sim9wn5hJrX3I5nxYy1SxSd4+gjUFsz1dQFj+yEe6zEVmSkeJjw==",
            "dev": true,
            "requires": {
                "memory-fs": "^0.4.1",
                "mime": "^2.4.4",
                "mkdirp": "^0.5.1",
                "range-parser": "^1.2.1",
                "webpack-log": "^2.0.0"
            },
            "dependencies": {
                "mime": {
                    "version": "2.4.6",
                    "resolved": "https://registry.npmjs.org/mime/-/mime-2.4.6.tgz",
                    "integrity": "sha512-RZKhC3EmpBchfTGBVb8fb+RL2cWyw/32lshnsETttkBAyAUXSGHxbEJWWRXc751DrIxG1q04b8QwMbAwkRPpUA==",
                    "dev": true
                }
            }
        },
        "webpack-dev-server": {
            "version": "3.11.0",
            "resolved": "https://registry.npmjs.org/webpack-dev-server/-/webpack-dev-server-3.11.0.tgz",
            "integrity": "sha512-PUxZ+oSTxogFQgkTtFndEtJIPNmml7ExwufBZ9L2/Xyyd5PnOL5UreWe5ZT7IU25DSdykL9p1MLQzmLh2ljSeg==",
            "dev": true,
            "requires": {
                "ansi-html": "0.0.7",
                "bonjour": "^3.5.0",
                "chokidar": "^2.1.8",
                "compression": "^1.7.4",
                "connect-history-api-fallback": "^1.6.0",
                "debug": "^4.1.1",
                "del": "^4.1.1",
                "express": "^4.17.1",
                "html-entities": "^1.3.1",
                "http-proxy-middleware": "0.19.1",
                "import-local": "^2.0.0",
                "internal-ip": "^4.3.0",
                "ip": "^1.1.5",
                "is-absolute-url": "^3.0.3",
                "killable": "^1.0.1",
                "loglevel": "^1.6.8",
                "opn": "^5.5.0",
                "p-retry": "^3.0.1",
                "portfinder": "^1.0.26",
                "schema-utils": "^1.0.0",
                "selfsigned": "^1.10.7",
                "semver": "^6.3.0",
                "serve-index": "^1.9.1",
                "sockjs": "0.3.20",
                "sockjs-client": "1.4.0",
                "spdy": "^4.0.2",
                "strip-ansi": "^3.0.1",
                "supports-color": "^6.1.0",
                "url": "^0.11.0",
                "webpack-dev-middleware": "^3.7.2",
                "webpack-log": "^2.0.0",
                "ws": "^6.2.1",
                "yargs": "^13.3.2"
            },
            "dependencies": {
                "ansi-regex": {
                    "version": "2.1.1",
                    "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
                    "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
                    "dev": true
                },
                "anymatch": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",
                    "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",
                    "dev": true,
                    "requires": {
                        "micromatch": "^3.1.4",
                        "normalize-path": "^2.1.1"
                    },
                    "dependencies": {
                        "normalize-path": {
                            "version": "2.1.1",
                            "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
                            "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
                            "dev": true,
                            "requires": {
                                "remove-trailing-separator": "^1.0.1"
                            }
                        }
                    }
                },
                "binary-extensions": {
                    "version": "1.13.1",
                    "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-1.13.1.tgz",
                    "integrity": "sha512-Un7MIEDdUC5gNpcGDV97op1Ywk748MpHcFTHoYs6qnj1Z3j7I53VG3nwZhKzoBZmbdRNnb6WRdFlwl7tSDuZGw==",
                    "dev": true
                },
                "braces": {
                    "version": "2.3.2",
                    "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
                    "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
                    "dev": true,
                    "requires": {
                        "arr-flatten": "^1.1.0",
                        "array-unique": "^0.3.2",
                        "extend-shallow": "^2.0.1",
                        "fill-range": "^4.0.0",
                        "isobject": "^3.0.1",
                        "repeat-element": "^1.1.2",
                        "snapdragon": "^0.8.1",
                        "snapdragon-node": "^2.0.1",
                        "split-string": "^3.0.2",
                        "to-regex": "^3.0.1"
                    },
                    "dependencies": {
                        "extend-shallow": {
                            "version": "2.0.1",
                            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                            "dev": true,
                            "requires": {
                                "is-extendable": "^0.1.0"
                            }
                        }
                    }
                },
                "chokidar": {
                    "version": "2.1.8",
                    "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-2.1.8.tgz",
                    "integrity": "sha512-ZmZUazfOzf0Nve7duiCKD23PFSCs4JPoYyccjUFF3aQkQadqBhfzhjkwBH2mNOG9cTBwhamM37EIsIkZw3nRgg==",
                    "dev": true,
                    "requires": {
                        "anymatch": "^2.0.0",
                        "async-each": "^1.0.1",
                        "braces": "^2.3.2",
                        "fsevents": "^1.2.7",
                        "glob-parent": "^3.1.0",
                        "inherits": "^2.0.3",
                        "is-binary-path": "^1.0.0",
                        "is-glob": "^4.0.0",
                        "normalize-path": "^3.0.0",
                        "path-is-absolute": "^1.0.0",
                        "readdirp": "^2.2.1",
                        "upath": "^1.1.1"
                    }
                },
                "fill-range": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
                    "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
                    "dev": true,
                    "requires": {
                        "extend-shallow": "^2.0.1",
                        "is-number": "^3.0.0",
                        "repeat-string": "^1.6.1",
                        "to-regex-range": "^2.1.0"
                    },
                    "dependencies": {
                        "extend-shallow": {
                            "version": "2.0.1",
                            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                            "dev": true,
                            "requires": {
                                "is-extendable": "^0.1.0"
                            }
                        }
                    }
                },
                "fsevents": {
                    "version": "1.2.13",
                    "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-1.2.13.tgz",
                    "integrity": "sha512-oWb1Z6mkHIskLzEJ/XWX0srkpkTQ7vaopMQkyaEIoq0fmtFVxOthb8cCxeT+p3ynTdkk/RZwbgG4brR5BeWECw==",
                    "dev": true,
                    "optional": true
                },
                "glob-parent": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-3.1.0.tgz",
                    "integrity": "sha1-nmr2KZ2NO9K9QEMIMr0RPfkGxa4=",
                    "dev": true,
                    "requires": {
                        "is-glob": "^3.1.0",
                        "path-dirname": "^1.0.0"
                    },
                    "dependencies": {
                        "is-glob": {
                            "version": "3.1.0",
                            "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",
                            "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",
                            "dev": true,
                            "requires": {
                                "is-extglob": "^2.1.0"
                            }
                        }
                    }
                },
                "is-absolute-url": {
                    "version": "3.0.3",
                    "resolved": "https://registry.npmjs.org/is-absolute-url/-/is-absolute-url-3.0.3.tgz",
                    "integrity": "sha512-opmNIX7uFnS96NtPmhWQgQx6/NYFgsUXYMllcfzwWKUMwfo8kku1TvE6hkNcH+Q1ts5cMVrsY7j0bxXQDciu9Q==",
                    "dev": true
                },
                "is-binary-path": {
                    "version": "1.0.1",
                    "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-1.0.1.tgz",
                    "integrity": "sha1-dfFmQrSA8YenEcgUFh/TpKdlWJg=",
                    "dev": true,
                    "requires": {
                        "binary-extensions": "^1.0.0"
                    }
                },
                "is-number": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
                    "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
                    "dev": true,
                    "requires": {
                        "kind-of": "^3.0.2"
                    },
                    "dependencies": {
                        "kind-of": {
                            "version": "3.2.2",
                            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                            "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                            "dev": true,
                            "requires": {
                                "is-buffer": "^1.1.5"
                            }
                        }
                    }
                },
                "micromatch": {
                    "version": "3.1.10",
                    "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
                    "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
                    "dev": true,
                    "requires": {
                        "arr-diff": "^4.0.0",
                        "array-unique": "^0.3.2",
                        "braces": "^2.3.1",
                        "define-property": "^2.0.2",
                        "extend-shallow": "^3.0.2",
                        "extglob": "^2.0.4",
                        "fragment-cache": "^0.2.1",
                        "kind-of": "^6.0.2",
                        "nanomatch": "^1.2.9",
                        "object.pick": "^1.3.0",
                        "regex-not": "^1.0.0",
                        "snapdragon": "^0.8.1",
                        "to-regex": "^3.0.2"
                    }
                },
                "readdirp": {
                    "version": "2.2.1",
                    "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-2.2.1.tgz",
                    "integrity": "sha512-1JU/8q+VgFZyxwrJ+SVIOsh+KywWGpds3NTqikiKpDMZWScmAYyKIgqkO+ARvNWJfXeXR1zxz7aHF4u4CyH6vQ==",
                    "dev": true,
                    "requires": {
                        "graceful-fs": "^4.1.11",
                        "micromatch": "^3.1.10",
                        "readable-stream": "^2.0.2"
                    }
                },
                "schema-utils": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-1.0.0.tgz",
                    "integrity": "sha512-i27Mic4KovM/lnGsy8whRCHhc7VicJajAjTrYg11K9zfZXnYIt4k5F+kZkwjnrhKzLic/HLU4j11mjsz2G/75g==",
                    "dev": true,
                    "requires": {
                        "ajv": "^6.1.0",
                        "ajv-errors": "^1.0.0",
                        "ajv-keywords": "^3.1.0"
                    }
                },
                "semver": {
                    "version": "6.3.0",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                    "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
                    "dev": true
                },
                "strip-ansi": {
                    "version": "3.0.1",
                    "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
                    "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
                    "dev": true,
                    "requires": {
                        "ansi-regex": "^2.0.0"
                    }
                },
                "supports-color": {
                    "version": "6.1.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
                    "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^3.0.0"
                    }
                },
                "to-regex-range": {
                    "version": "2.1.1",
                    "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
                    "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
                    "dev": true,
                    "requires": {
                        "is-number": "^3.0.0",
                        "repeat-string": "^1.6.1"
                    }
                }
            }
        },
        "webpack-log": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/webpack-log/-/webpack-log-2.0.0.tgz",
            "integrity": "sha512-cX8G2vR/85UYG59FgkoMamwHUIkSSlV3bBMRsbxVXVUk2j6NleCKjQ/WE9eYg9WY4w25O9w8wKP4rzNZFmUcUg==",
            "dev": true,
            "requires": {
                "ansi-colors": "^3.0.0",
                "uuid": "^3.3.2"
            },
            "dependencies": {
                "ansi-colors": {
                    "version": "3.2.4",
                    "resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-3.2.4.tgz",
                    "integrity": "sha512-hHUXGagefjN2iRrID63xckIvotOXOojhQKWIPUZ4mNUZ9nLZW+7FMNoE1lOkEhNWYsx/7ysGIuJYCiMAA9FnrA==",
                    "dev": true
                }
            }
        },
        "webpack-merge": {
            "version": "5.2.0",
            "resolved": "https://registry.npmjs.org/webpack-merge/-/webpack-merge-5.2.0.tgz",
            "integrity": "sha512-QBglJBg5+lItm3/Lopv8KDDK01+hjdg2azEwi/4vKJ8ZmGPdtJsTpjtNNOW3a4WiqzXdCATtTudOZJngE7RKkA==",
            "dev": true,
            "requires": {
                "clone-deep": "^4.0.1",
                "wildcard": "^2.0.0"
            }
        },
        "webpack-sources": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-2.0.1.tgz",
            "integrity": "sha512-A9oYz7ANQBK5EN19rUXbvNgfdfZf5U2gP0769OXsj9CvYkCR6OHOsd6OKyEy4H38GGxpsQPKIL83NC64QY6Xmw==",
            "dev": true,
            "requires": {
                "source-list-map": "^2.0.1",
                "source-map": "^0.6.1"
            },
            "dependencies": {
                "source-map": {
                    "version": "0.6.1",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                    "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                    "dev": true
                }
            }
        },
        "webpack-subresource-integrity": {
            "version": "1.5.1",
            "resolved": "https://registry.npmjs.org/webpack-subresource-integrity/-/webpack-subresource-integrity-1.5.1.tgz",
            "integrity": "sha512-uekbQ93PZ9e7BFB8Hl9cFIVYQyQqiXp2ExKk9Zv+qZfH/zHXHrCFAfw1VW0+NqWbTWrs/HnuDrto3+tiPXh//Q==",
            "dev": true,
            "requires": {
                "webpack-sources": "^1.3.0"
            },
            "dependencies": {
                "source-map": {
                    "version": "0.6.1",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                    "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                    "dev": true
                },
                "webpack-sources": {
                    "version": "1.4.3",
                    "resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-1.4.3.tgz",
                    "integrity": "sha512-lgTS3Xhv1lCOKo7SA5TjKXMjpSM4sBjNV5+q2bqesbSPs5FjGmU6jjtBSkX9b4qW87vDIsCIlUPOEhbZrMdjeQ==",
                    "dev": true,
                    "requires": {
                        "source-list-map": "^2.0.0",
                        "source-map": "~0.6.1"
                    }
                }
            }
        },
        "websocket-driver": {
            "version": "0.6.5",
            "resolved": "https://registry.npmjs.org/websocket-driver/-/websocket-driver-0.6.5.tgz",
            "integrity": "sha1-XLJVbOuF9Dc8bYI4qmkchFThOjY=",
            "dev": true,
            "requires": {
                "websocket-extensions": ">=0.1.1"
            }
        },
        "websocket-extensions": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/websocket-extensions/-/websocket-extensions-0.1.4.tgz",
            "integrity": "sha512-OqedPIGOfsDlo31UNwYbCFMSaO9m9G/0faIHj5/dZFDMFqPTcx6UwqyOy3COEaEOg/9VsGIpdqn62W5KhoKSpg==",
            "dev": true
        },
        "whatwg-encoding": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/whatwg-encoding/-/whatwg-encoding-1.0.5.tgz",
            "integrity": "sha512-b5lim54JOPN9HtzvK9HFXvBma/rnfFeqsic0hSpjtDbVxR3dJKLc+KB4V6GgiGOvl7CY/KNh8rxSo9DKQrnUEw==",
            "dev": true,
            "requires": {
                "iconv-lite": "0.4.24"
            }
        },
        "whatwg-mimetype": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/whatwg-mimetype/-/whatwg-mimetype-2.3.0.tgz",
            "integrity": "sha512-M4yMwr6mAnQz76TbJm914+gPpB/nCwvZbJU28cUD6dR004SAxDLOOSUaB1JDRqLtaOV/vi0IC5lEAGFgrjGv/g==",
            "dev": true
        },
        "whatwg-url": {
            "version": "8.4.0",
            "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-8.4.0.tgz",
            "integrity": "sha512-vwTUFf6V4zhcPkWp/4CQPr1TW9Ml6SF4lVyaIMBdJw5i6qUUJ1QWM4Z6YYVkfka0OUIzVo/0aNtGVGk256IKWw==",
            "dev": true,
            "requires": {
                "lodash.sortby": "^4.7.0",
                "tr46": "^2.0.2",
                "webidl-conversions": "^6.1.0"
            }
        },
        "which": {
            "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
            "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
            "dev": true,
            "requires": {
                "isexe": "^2.0.0"
            }
        },
        "which-module": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz",
            "integrity": "sha1-2e8H3Od7mQK4o6j6SzHD4/fm6Ho=",
            "dev": true
        },
        "which-pm-runs": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/which-pm-runs/-/which-pm-runs-1.0.0.tgz",
            "integrity": "sha1-Zws6+8VS4LVd9rd4DKdGFfI60cs=",
            "dev": true
        },
        "widest-line": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/widest-line/-/widest-line-3.1.0.tgz",
            "integrity": "sha512-NsmoXalsWVDMGupxZ5R08ka9flZjjiLvHVAWYOKtiKM8ujtZWr9cRffak+uSE48+Ob8ObalXpwyeUiyDD6QFgg==",
            "dev": true,
            "requires": {
                "string-width": "^4.0.0"
            }
        },
        "wildcard": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/wildcard/-/wildcard-2.0.0.tgz",
            "integrity": "sha512-JcKqAHLPxcdb9KM49dufGXn2x3ssnfjbcaQdLlfZsL9rH9wgDQjUtDxbo8NE0F6SFvydeu1VhZe7hZuHsB2/pw==",
            "dev": true
        },
        "word-wrap": {
            "version": "1.2.3",
            "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz",
            "integrity": "sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ==",
            "dev": true
        },
        "worker-farm": {
            "version": "1.7.0",
            "resolved": "https://registry.npmjs.org/worker-farm/-/worker-farm-1.7.0.tgz",
            "integrity": "sha512-rvw3QTZc8lAxyVrqcSGVm5yP/IJ2UcB3U0graE3LCFoZ0Yn2x4EoVSqJKdB/T5M+FLcRPjz4TDacRf3OCfNUzw==",
            "dev": true,
            "requires": {
                "errno": "~0.1.7"
            }
        },
        "worker-plugin": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/worker-plugin/-/worker-plugin-5.0.0.tgz",
            "integrity": "sha512-AXMUstURCxDD6yGam2r4E34aJg6kW85IiaeX72hi+I1cxyaMUtrvVY6sbfpGKAj5e7f68Acl62BjQF5aOOx2IQ==",
            "dev": true,
            "requires": {
                "loader-utils": "^1.1.0"
            },
            "dependencies": {
                "json5": {
                    "version": "1.0.1",
                    "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
                    "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
                    "dev": true,
                    "requires": {
                        "minimist": "^1.2.0"
                    }
                },
                "loader-utils": {
                    "version": "1.4.0",
                    "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-1.4.0.tgz",
                    "integrity": "sha512-qH0WSMBtn/oHuwjy/NucEgbx5dbxxnxup9s4PVXJUDHZBQY+s0NWA9rJf53RBnQZxfch7euUui7hpoAPvALZdA==",
                    "dev": true,
                    "requires": {
                        "big.js": "^5.2.2",
                        "emojis-list": "^3.0.0",
                        "json5": "^1.0.1"
                    }
                }
            }
        },
        "wrap-ansi": {
            "version": "5.1.0",
            "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-5.1.0.tgz",
            "integrity": "sha512-QC1/iN/2/RPVJ5jYK8BGttj5z83LmSKmvbvrXPNCLZSEb32KKVDJDl/MOt2N01qU2H/FkzEa9PKto1BqDjtd7Q==",
            "dev": true,
            "requires": {
                "ansi-styles": "^3.2.0",
                "string-width": "^3.0.0",
                "strip-ansi": "^5.0.0"
            },
            "dependencies": {
                "ansi-regex": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
                    "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
                    "dev": true
                },
                "emoji-regex": {
                    "version": "7.0.3",
                    "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
                    "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA==",
                    "dev": true
                },
                "is-fullwidth-code-point": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
                    "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
                    "dev": true
                },
                "string-width": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
                    "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
                    "dev": true,
                    "requires": {
                        "emoji-regex": "^7.0.1",
                        "is-fullwidth-code-point": "^2.0.0",
                        "strip-ansi": "^5.1.0"
                    }
                },
                "strip-ansi": {
                    "version": "5.2.0",
                    "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
                    "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
                    "dev": true,
                    "requires": {
                        "ansi-regex": "^4.1.0"
                    }
                }
            }
        },
        "wrappy": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
            "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=",
            "dev": true
        },
        "write": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/write/-/write-1.0.3.tgz",
            "integrity": "sha512-/lg70HAjtkUgWPVZhZcm+T4hkL8Zbtp1nFNOn3lRrxnlv50SRBv7cR7RqR+GMsd3hUXy9hWBo4CHTbFTcOYwig==",
            "dev": true,
            "requires": {
                "mkdirp": "^0.5.1"
            }
        },
        "write-file-atomic": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-3.0.3.tgz",
            "integrity": "sha512-AvHcyZ5JnSfq3ioSyjrBkH9yW4m7Ayk8/9My/DD9onKeu/94fwrMocemO2QAJFAlnnDN+ZDS+ZjAR5ua1/PV/Q==",
            "dev": true,
            "requires": {
                "imurmurhash": "^0.1.4",
                "is-typedarray": "^1.0.0",
                "signal-exit": "^3.0.2",
                "typedarray-to-buffer": "^3.1.5"
            }
        },
        "ws": {
            "version": "6.2.1",
            "resolved": "https://registry.npmjs.org/ws/-/ws-6.2.1.tgz",
            "integrity": "sha512-GIyAXC2cB7LjvpgMt9EKS2ldqr0MTrORaleiOno6TweZ6r3TKtoFQWay/2PceJ3RuBasOHzXNn5Lrw1X0bEjqA==",
            "dev": true,
            "requires": {
                "async-limiter": "~1.0.0"
            }
        },
        "xdg-basedir": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/xdg-basedir/-/xdg-basedir-4.0.0.tgz",
            "integrity": "sha512-PSNhEJDejZYV7h50BohL09Er9VaIefr2LMAf3OEmpCkjOi34eYyQYAXUTjEQtZJTKcF0E2UKTh+osDLsgNim9Q==",
            "dev": true
        },
        "xml-name-validator": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/xml-name-validator/-/xml-name-validator-3.0.0.tgz",
            "integrity": "sha512-A5CUptxDsvxKJEU3yO6DuWBSJz/qizqzJKOMIfUJHETbBw/sFaDxgd6fxm1ewUaM0jZ444Fc5vC5ROYurg/4Pw==",
            "dev": true
        },
        "xml2js": {
            "version": "0.4.23",
            "resolved": "https://registry.npmjs.org/xml2js/-/xml2js-0.4.23.tgz",
            "integrity": "sha512-ySPiMjM0+pLDftHgXY4By0uswI3SPKLDw/i3UXbnO8M/p28zqexCUoPmQFrYD+/1BzhGJSs2i1ERWKJAtiLrug==",
            "dev": true,
            "requires": {
                "sax": ">=0.6.0",
                "xmlbuilder": "~11.0.0"
            }
        },
        "xmlbuilder": {
            "version": "11.0.1",
            "resolved": "https://registry.npmjs.org/xmlbuilder/-/xmlbuilder-11.0.1.tgz",
            "integrity": "sha512-fDlsI/kFEx7gLvbecc0/ohLG50fugQp8ryHzMTuW9vSa1GJ0XYWKnhsUx7oie3G98+r56aTQIUB4kht42R3JvA==",
            "dev": true
        },
        "xmlchars": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/xmlchars/-/xmlchars-2.2.0.tgz",
            "integrity": "sha512-JZnDKK8B0RCDw84FNdDAIpZK+JuJw+s7Lz8nksI7SIuU3UXJJslUthsi+uWBUYOwPFwW7W7PRLRfUKpxjtjFCw==",
            "dev": true
        },
        "xtend": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
            "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",
            "dev": true
        },
        "y18n": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/y18n/-/y18n-4.0.0.tgz",
            "integrity": "sha512-r9S/ZyXu/Xu9q1tYlpsLIsa3EeLXXk0VwlxqTcFRfg9EhMW+17kbt9G0NrgCmhGb5vT2hyhJZLfDGx+7+5Uj/w==",
            "dev": true
        },
        "yallist": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
            "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
            "dev": true
        },
        "yaml": {
            "version": "1.10.0",
            "resolved": "https://registry.npmjs.org/yaml/-/yaml-1.10.0.tgz",
            "integrity": "sha512-yr2icI4glYaNG+KWONODapy2/jDdMSDnrONSjblABjD9B4Z5LgiircSt8m8sRZFNi08kG9Sm0uSHtEmP3zaEGg==",
            "dev": true
        },
        "yargs": {
            "version": "13.3.2",
            "resolved": "https://registry.npmjs.org/yargs/-/yargs-13.3.2.tgz",
            "integrity": "sha512-AX3Zw5iPruN5ie6xGRIDgqkT+ZhnRlZMLMHAs8tg7nRruy2Nb+i5o9bwghAogtM08q1dpr2LVoS8KSTMYpWXUw==",
            "dev": true,
            "requires": {
                "cliui": "^5.0.0",
                "find-up": "^3.0.0",
                "get-caller-file": "^2.0.1",
                "require-directory": "^2.1.1",
                "require-main-filename": "^2.0.0",
                "set-blocking": "^2.0.0",
                "string-width": "^3.0.0",
                "which-module": "^2.0.0",
                "y18n": "^4.0.0",
                "yargs-parser": "^13.1.2"
            },
            "dependencies": {
                "ansi-regex": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
                    "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
                    "dev": true
                },
                "emoji-regex": {
                    "version": "7.0.3",
                    "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
                    "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA==",
                    "dev": true
                },
                "is-fullwidth-code-point": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
                    "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
                    "dev": true
                },
                "string-width": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
                    "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
                    "dev": true,
                    "requires": {
                        "emoji-regex": "^7.0.1",
                        "is-fullwidth-code-point": "^2.0.0",
                        "strip-ansi": "^5.1.0"
                    }
                },
                "strip-ansi": {
                    "version": "5.2.0",
                    "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
                    "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
                    "dev": true,
                    "requires": {
                        "ansi-regex": "^4.1.0"
                    }
                }
            }
        },
        "yargs-parser": {
            "version": "13.1.2",
            "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-13.1.2.tgz",
            "integrity": "sha512-3lbsNRf/j+A4QuSZfDRA7HRSfWrzO0YjqTJd5kjAq37Zep1CEgaYmrH9Q3GwPiB9cHyd1Y1UwggGhJGoxipbzg==",
            "dev": true,
            "requires": {
                "camelcase": "^5.0.0",
                "decamelize": "^1.2.0"
            },
            "dependencies": {
                "camelcase": {
                    "version": "5.3.1",
                    "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
                    "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
                    "dev": true
                }
            }
        },
        "yn": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/yn/-/yn-3.1.1.tgz",
            "integrity": "sha512-Ux4ygGWsu2c7isFWe8Yu1YluJmqVhxqK2cLXNQA5AcC3QfbGNpM7fu0Y8b/z16pXLnFxZYvWhd3fhBY9DLmC6Q==",
            "dev": true
        },
        "zone.js": {
            "version": "0.10.3",
            "resolved": "https://registry.npmjs.org/zone.js/-/zone.js-0.10.3.tgz",
            "integrity": "sha512-LXVLVEq0NNOqK/fLJo3d0kfzd4sxwn2/h67/02pjCjfKDxgx1i9QqpvtHD8CrBnSSwMw5+dy11O7FRX5mkO7Cg=="
        }
    }