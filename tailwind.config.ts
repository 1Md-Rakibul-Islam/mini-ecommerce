import type { Config } from 'tailwindcss'
import plugin from "tailwindcss/plugin";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  blackMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.75rem",
      }
    },
    screens: {
      xsm: "400px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
      "xxl+": "1500px",
      "3xl": "1600px",
      "4xl": "1800px",
    },
    extend: {
      colors: {
        primary: "#F29620",
        secondary: "#45F882",
        success: {
          DEFAULT: colors.green[500],
          ...colors.green,
        },
        danger: "#EB3A3A",
        error: "#ff6363",
        warning: {
          DEFAULT: colors.yellow[600],
          ...colors.yellow,
        },
        info: {
          DEFAULT: colors.teal[500],
          ...colors.teal,
        },
        light: {
          DEFAULT: colors.gray[100],
          ...colors.gray,
        },
        dark: {
          DEFAULT: colors.gray[800],
          ...colors.gray,
        },
        "w-neutral": {
          1: "#FEFEFE",
          2: "#F3F5F7",
          3: "#E8ECEF",
          4: "#9CABB9",
        },
        "b-neutral": {
          1: "#343839",
          2: "#232627",
          3: "#0E1012",
          4: "#030304",
        },
        title: {
          1: "#080808",
        },
        shap: "#212529",
        body: "#7C7C7C",
        white: "#FFFFFF",
        black: "#000000",
      },
      boxShadow: {
        1: "0px 6px 30px 0px rgba(5, 58, 43, 0.08)",
        2: "0px 20px 24px -4px rgba(5, 58, 43, 0.04), 0px 8px 11px -4px rgba(5, 58, 43, 0.04)",
        3: "0px 0px 6px 0px rgba(0, 0, 0, 0.20)",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      spacing: {
        "1px": "1px",
        15: "60px",
        18: "72px",
        25: "100px",
        30: "120px",
      },
      borderRadius: {
        primary: "0.25rem",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
      },
    },
  },

  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugin(function ({ addComponents }: any) {
      addComponents({
        ".transition-1": {
          transition: "all 0.5s ease-in-out",
        },
        ".transition-2": {
          transition: "all 0.7s ease-in-out",
        },
        ".transition-3": {
          transition: "all 1s ease-in-out",
        },
        ".transition-4": {
          transition: "all 1.5s ease-in-out",
        },
        ".transition-5": {
          transition: "all 2s ease-in-out",
        },
      });
    }),
  ],
} satisfies Config;
export default config
