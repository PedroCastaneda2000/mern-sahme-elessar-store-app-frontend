/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        serif: ["Noto Serif JP", "serif"],
      },
      fontSize: {
        // [font-size, line-height, letter-spacing]
        "72lg": ["4.5rem", "1.2", "-0.025rem"],
        "60lg": ["3.75rem", "1.2", "-0.025rem"],
        "48lg": ["3rem", "1.2", "-0.025rem"],
        "40lg": ["2.5rem", "1.2", "-0.025rem"],

        "32md": ["2rem", "1.3", "-0.02rem"],
        "28md": ["1.75rem", "1.3", "-0.02rem"],
        "24md": ["1.5rem", "1.3", "-0.02rem"],
        "20md": ["1.25rem", "1.3", "-0.02rem"],

        "18sm": ["1.125rem", "1.5", "0rem"],
        "16sm": ["1rem", "1.5", "0rem"],
        "14sm": ["0.875rem", "1.5", "0rem"],
        "12sm": ["0.75rem", "1.5", "0rem"],

        "18lk": ["1.125rem", "1.5", "0rem"],
        "16lk": ["1rem", "1.5", "0rem"],
        "14lk": ["0.875rem", "1.5", "0rem"],

        "14lb": ["0.875rem", "1.5", "0.03rem"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
