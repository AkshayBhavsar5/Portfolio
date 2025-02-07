import React from 'react'
import TextScramble from '@skits/react-text-scramble'
function Text() {
  return (
    <div className="tracking-widest">
      <TextScramble
        text="Akshay Bhavsar"
        autostart
        wrappingElement="p" // Wraps the provided text in 'p' tags - <p>{text}</p>
        characters="!<>-_\\/[]{}—=+*^?#________" // Scramble text using numbers only
        speed={40}
        delay={10}
        revealText
        revealSpeed={100}
        revealMode="typewriter" // Reveal text from left to right
      />
      
    </div>
    // {
//   "name": "portfolio",
//   "private": true,
//   "version": "0.0.0",
//   "type": "module",
//   "scripts": {
//     "dev": "vite",
//     "build": "vite build",
//     "lint": "eslint .",
//     "preview": "vite preview"
//   },
//   "dependencies": {
//     "@emotion/react": "^11.13.3",
//     "@emotion/styled": "^11.13.0",
//     "@material-tailwind/react": "^2.1.10",
//     "@mui/icons-material": "^6.1.4",
//     "@mui/material": "^6.1.4",
//     "@skits/react-text-scramble": "^1.1.0",
//     "react": "^18.3.1",
//     "react-dom": "^18.3.1",
//     "react-hook-form": "^7.53.1",
//     "react-router-dom": "^6.27.0"
//   },
//   "devDependencies": {
//     "@eslint/js": "^9.11.1",
//     "@types/react": "^18.3.10",
//     "@types/react-dom": "^18.3.0",
//     "@vitejs/plugin-react": "^4.3.2",
//     "autoprefixer": "^10.4.20",
//     "eslint": "^9.11.1",
//     "eslint-plugin-react": "^7.37.0",
//     "eslint-plugin-react-hooks": "^5.1.0-rc.0",
//     "eslint-plugin-react-refresh": "^0.4.12",
//     "globals": "^15.9.0",
//     "postcss": "^8.4.47",
//     "tailwindcss": "^3.4.14",
//     "vite": "^5.4.8"
//   }
// }
  )
}

export default Text