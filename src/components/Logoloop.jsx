import React from 'react'
import LogoLoop from './logo/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiGit, SiMongodb, SiMongoose, SiExpress, SiPostman, SiNodedotjs, SiGithub, SiVscodium, SiGithubcopilot, SiRender } from 'react-icons/si';


const Logoloop = () => {
  
    
const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiHtml5 />, title: "Html5", href: "https://html5up.net/" },
  { node: <SiCss3 />, title: "CSS#", href: "https://css-tricks.com/" },
  { node: <SiJavascript />, title: "JS", href: "https://www.javascript.com/" },
  { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com/" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com/" },
  { node: <SiGithub />, title: "Github", href: "https://github.com/" },
  
  { node: <SiMongodb />, title: "MongoDb", href: "https://www.mongodb.com/" },
  { node: <SiMongoose />, title: "Mongoose", href: "https://mongoosejs.com/" },
  { node: <SiExpress />, title: "ExpressJs", href: "https://expressjs.com/" },
  { node: <SiPostman />, title: "Postman", href: "https://www.postman.com/" },
  { node: <SiNodedotjs />, title: "Nodejs", href: "https://nodejs.org/" },
  { node: <SiGithubcopilot />, title: "copilot", href: "https://github.com/copilot" },
   { node: <SiRender />, title: "render", href: "https://dashboard.render.com/" },
  



  





];

// Alternative with image sources



  return (

    <div className='flex flex-col my-4  gap-4' style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      <h1 className="text-4xl mx-3 font-bold">Skills & Technologies</h1>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
        <LogoLoop
        logos={techLogos}
        speed={120}
        direction="right"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}

export default Logoloop