import AgentCypher from "../components/screenshots/AgentCypher.jpg";
import AgentCypherScreenshot1 from "../components/screenshots/AgentCypherScreenshot1.jpg";
import AgentCypherScreenshot2 from "../components/screenshots/AgentCypherScreenshot2.jpg";
import AgentCypherScreenshot3 from "../components/screenshots/AgentCypherScreenshot3.jpg";

import Recyp from "../components/screenshots/recyp.jpg";


import FiatRouter from "../components/screenshots/Fiatrouter.jpg";

import FiatRouterScreenshot1 from "../components/screenshots/FiatrouterScreenshot1.jpg";
import FiatRouterScreenshot2 from "../components/screenshots/FiatrouterScreenshot2.jpg";
import FiatRouterScreenshot3 from "../components/screenshots/FiatrouterScreenshot3.jpg";

import ChatterWallet from "../components/screenshots/ChatterWallet.jpg";
import ChatterWalletScreenshot1 from "../components/screenshots/ChatterwalletScreenshot1.jpg";
import ChatterWalletScreenshot2 from "../components/screenshots/ChatterwalletScreenshot2.jpg";
import ChatterWalletScreenshot3 from "../components/screenshots/ChatterwalletScreenshot3.jpg";

import SolaraPay from "../components/screenshots/SolaraPay.jpg";
import SolaraPayScreenshot1 from "../components/screenshots/SolarapayScreenshot1.jpg";
import SolaraPayScreenshot2 from "../components/screenshots/SolarapayScreenshot2.jpg";
import SolaraPayScreenshot3 from "../components/screenshots/SolarapayScreenshot3.jpg";

import UnderRealm from "../components/screenshots/UnderRealm.jpg";
import UnderrealmScreenshot1 from "../components/screenshots/UnderrealmScreenshot1.jpg";
import UnderrealmScreenshot2 from "../components/screenshots/UnderrealmScreenshot2.jpg";

import WeaveIt from "../components/screenshots/WeaveIt.jpg";
import WeaveItScreenshot1 from "../components/screenshots/WeaveitScreenshot.jpg";

import DefaultLogo from "../components/screenshots/DefaultLogo.jpg";

interface AppDetails {
    id: number;
    url: string;
    alt: string;
    label: string;
    description: string;
    company: string;
    systemRequirements: string[];
    additionalInfo: string;
    screenshots: { url: string; alt: string }[];
    link: string;
  }
  
  export const apps: AppDetails[] = [
    { 
      id: 1, 
      url: AgentCypher, 
      alt: "Photo 1", 
      label: "Agent Cypher", 
      description: "Digital safety agent securing onchain activities", 
      company: "agentcypher", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: AgentCypherScreenshot1, alt: "Screenshot 1" },
        { url: AgentCypherScreenshot2, alt: "Screenshot 2" },
        { url: AgentCypherScreenshot3, alt: "Screenshot 3" },
      ],
      link: "https://x.com/agentcypher_/status/1893306287632384081?s=12",
    },
    
    { 
      id: 2, 
      url: Recyp, 
      alt: "Photo 2", 
      label: "Recyp", 
      description: "Simplify token lifecycle through conversational Ai", 
      company: "recyp", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        // { url: RecypScreenshot1, alt: "Screenshot 1" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot2.jpg", alt: "Screenshot 2" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot3.jpg", alt: "Screenshot 3" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://x.com/recypagent?s=21",
    },
    
    { 
      id: 3, 
      url: FiatRouter, 
      alt: "Photo 3", 
      label: "FiatRouter", 
      description: "Secure Solana onboarding Fiat to Crypto routing", 
      company: "Thewise", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers' ,
      screenshots: [
        { url: FiatRouterScreenshot1, alt: "Screenshot 1" },
        { url: FiatRouterScreenshot2, alt: "Screenshot 2" },
        { url: FiatRouterScreenshot3, alt: "Screenshot 3" },
        // { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://x.com/fiatrouter?s=11",
    },
      
    { 
      id: 4, 
      url: ChatterWallet, 
      alt: "Photo 4", 
      label: "Chatter Wallet", 
      description: "Bridging everyday convenience with Web3, the fastest and most convenient way to make Global Digital and Utility Payments, as seamless as sending a message!", 
      company: "chatterwallet", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: ChatterWalletScreenshot1, alt: "Screenshot 1" },
        { url: ChatterWalletScreenshot2, alt: "Screenshot 2" },
        { url: ChatterWalletScreenshot3, alt: "Screenshot 3" },
        // { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://x.com/chatterwallet?s=21",
    },
    
    { 
      id: 5, 
      url: SolaraPay, 
      alt: "Photo 5", 
      label: "Solara Pay", 
      description: "Transforming payroll with seamless, instant solutions for business and web3 communities. Proudly powered by Solana", 
      company: "solara pay", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: SolaraPayScreenshot1, alt: "Screenshot 1" },
        { url: SolaraPayScreenshot2, alt: "Screenshot 2" },
        { url: SolaraPayScreenshot3, alt: "Screenshot 3" },
        // { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://x.com/thesolara?s=11",
    },
    
    { 
      id: 6, 
      url: UnderRealm, 
      alt: "Photo 6", 
      label: "Under Realm", 
      description: "Recycling app to save the ", 
      company: "under realm", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: UnderrealmScreenshot1, alt: "Screenshot 1" },
        { url: UnderrealmScreenshot2, alt: "Screenshot 2" },
        // { url: "./screenshots/InstaScreenshots/InstagramScreenshot3.jpg", alt: "Screenshot 3" },
        // { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://www.instagram.com",
    },
    
    { 
      id: 7, 
      url: WeaveIt, 
      alt: "Photo 7", 
      label: "WeaveIt", 
      description: "Automating compllex trading tasks for regular crypto traders", 
      company: "TheWise", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: WeaveItScreenshot1, alt: "Screenshot 1" },
        { url: WeaveIt, alt: "Screenshot 2" },
        // { url: "./screenshots/InstaScreenshots/InstagramScreenshot3.jpg", alt: "Screenshot 3" },
        // { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://x.com/weaveitagent?s=11",
    },
    
    { 
      id: 8, 
      url: DefaultLogo, 
      alt: "Photo 8", 
      label: "Twitter", 
      description: "Social media app to connect with friends and family", 
      company: "Meta", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot1.jpg", alt: "Screenshot 1" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot2.jpg", alt: "Screenshot 2" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot3.jpg", alt: "Screenshot 3" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://www.instagram.com",
    },
    
    { 
      id: 9, 
      url: DefaultLogo, 
      alt: "Photo 9", 
      label: "Discord", 
      description: "Social media app to connect with friends and family", 
      company: "Meta", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot1.jpg", alt: "Screenshot 1" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot2.jpg", alt: "Screenshot 2" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot3.jpg", alt: "Screenshot 3" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://www.instagram.com",
    },
    
    { 
      id: 10, 
      url: DefaultLogo, 
      alt: "Photo 10", 
      label: "Github", 
      description: "Social media app to connect with friends and family", 
      company: "Meta", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot1.jpg", alt: "Screenshot 1" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot2.jpg", alt: "Screenshot 2" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot3.jpg", alt: "Screenshot 3" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://www.instagram.com",
    },
    
    { 
      id: 11, 
      url: DefaultLogo, 
      alt: "Photo 11", 
      label: "Google", 
      description: "Search engine to find information", 
      company: "Google", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot1.jpg", alt: "Screenshot 1" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot2.jpg", alt: "Screenshot 2" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot3.jpg", alt: "Screenshot 3" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://www.instagram.com",
    },
    
    { 
      id: 12, 
      url: DefaultLogo, 
      alt: "Photo 12", 
      label: "Tiktok", 
      description: "Social media app to connect with friends and family", 
      company: "Meta", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot1.jpg", alt: "Screenshot 1" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot2.jpg", alt: "Screenshot 2" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot3.jpg", alt: "Screenshot 3" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://www.instagram.com",
    },
    
    { 
      id: 13, 
      url: DefaultLogo, 
      alt: "Photo 13", 
      label: "Youtube", 
      description: "Video sharing platform", 
      company: "Google", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot1.jpg", alt: "Screenshot 1" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot2.jpg", alt: "Screenshot 2" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot3.jpg", alt: "Screenshot 3" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://www.instagram.com",
    },
    
    { 
      id: 14, 
      url: DefaultLogo, 
      alt: "Photo 14", 
      label: "Snapchat", 
      description: "Social media app to connect with friends and family", 
      company: "Meta", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot1.jpg", alt: "Screenshot 1" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot2.jpg", alt: "Screenshot 2" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot3.jpg", alt: "Screenshot 3" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://www.instagram.com",
    },  
  ];
  
  


  export const Games: AppDetails[] = [
    { 
      id: 15, 
      url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", 
      alt: "Photo 1", 
      label: "Instagram", 
      description: "Social media app to connect with friends and family", 
      company: "Meta", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot1.jpg", alt: "Screenshot 1" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot2.jpg", alt: "Screenshot 2" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot3.jpg", alt: "Screenshot 3" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://www.instagram.com",
    },
    
    { 
      id: 16, 
      url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", 
      alt: "Photo 2", 
      label: "Facebook", 
      description: "Social media app to connect with friends and family", 
      company: "Meta", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot1.jpg", alt: "Screenshot 1" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot2.jpg", alt: "Screenshot 2" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot3.jpg", alt: "Screenshot 3" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://www.instagram.com",
    },
    
    { 
      id: 17, 
      url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", 
      alt: "Photo 3", 
      label: "Weaveit Agent", 
      description: "Solana agent sdk fo action inegration", 
      company: "Thewise", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers' ,
      screenshots: [
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot1.jpg", alt: "Screenshot 1" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot2.jpg", alt: "Screenshot 2" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot3.jpg", alt: "Screenshot 3" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://www.instagram.com",
    },
      
    { 
      id: 18, 
      url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", 
      alt: "Photo 4", 
      label: "FiatRouter", 
      description: "Fiat onramp for crypto", 
      company: "FiatRouter", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot1.jpg", alt: "Screenshot 1" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot2.jpg", alt: "Screenshot 2" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot3.jpg", alt: "Screenshot 3" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://www.instagram.com",
    },
    
    { 
      id: 19, 
      url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", 
      alt: "Photo 5", 
      label: "Recyp", 
      description: "Recycling app to save the planet", 
      company: "Recyp", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot1.jpg", alt: "Screenshot 1" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot2.jpg", alt: "Screenshot 2" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot3.jpg", alt: "Screenshot 3" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://www.instagram.com",
    },
    
    { 
      id: 20, 
      url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", 
      alt: "Photo 6", 
      label: "Trash to Cash", 
      description: "Recycling app to save the planet", 
      company: "Recyp", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot1.jpg", alt: "Screenshot 1" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot2.jpg", alt: "Screenshot 2" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot3.jpg", alt: "Screenshot 3" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://www.instagram.com",
    },
    
    { 
      id: 21, 
      url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", 
      alt: "Photo 7", 
      label: "Chatter Wallet", 
      description: "Crypto wallet for social media", 
      company: "Chatter", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot1.jpg", alt: "Screenshot 1" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot2.jpg", alt: "Screenshot 2" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot3.jpg", alt: "Screenshot 3" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://www.instagram.com",
    },
    
    { 
      id: 22, 
      url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", 
      alt: "Photo 8", 
      label: "Twitter", 
      description: "Social media app to connect with friends and family", 
      company: "Meta", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot1.jpg", alt: "Screenshot 1" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot2.jpg", alt: "Screenshot 2" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot3.jpg", alt: "Screenshot 3" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://www.instagram.com",
    },
    
    { 
      id: 23, 
      url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", 
      alt: "Photo 9", 
      label: "Discord", 
      description: "Social media app to connect with friends and family", 
      company: "Meta", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot1.jpg", alt: "Screenshot 1" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot2.jpg", alt: "Screenshot 2" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot3.jpg", alt: "Screenshot 3" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://www.instagram.com",
    },
    
    { 
      id: 24, 
      url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", 
      alt: "Photo 10", 
      label: "Github", 
      description: "Social media app to connect with friends and family", 
      company: "Meta", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot1.jpg", alt: "Screenshot 1" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot2.jpg", alt: "Screenshot 2" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot3.jpg", alt: "Screenshot 3" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://www.instagram.com",
    },
    
    { 
      id: 25, 
      url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", 
      alt: "Photo 11", 
      label: "Google", 
      description: "Search engine to find information", 
      company: "Google", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot1.jpg", alt: "Screenshot 1" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot2.jpg", alt: "Screenshot 2" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot3.jpg", alt: "Screenshot 3" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://www.instagram.com",
    },
    
    { 
      id: 26, 
      url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", 
      alt: "Photo 12", 
      label: "Tiktok", 
      description: "Social media app to connect with friends and family", 
      company: "Meta", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot1.jpg", alt: "Screenshot 1" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot2.jpg", alt: "Screenshot 2" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot3.jpg", alt: "Screenshot 3" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://www.instagram.com",
    },
    
    { 
      id: 27, 
      url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", 
      alt: "Photo 13", 
      label: "Youtube", 
      description: "Video sharing platform", 
      company: "Google", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot1.jpg", alt: "Screenshot 1" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot2.jpg", alt: "Screenshot 2" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot3.jpg", alt: "Screenshot 3" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://www.instagram.com",
    },
    
    { 
      id: 28, 
      url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", 
      alt: "Photo 14", 
      label: "Snapchat", 
      description: "Social media app to connect with friends and family", 
      company: "Meta", 
      systemRequirements: ['IOS 16 or later'],
      additionalInfo: 'was created by a team of dedicated developers',
      screenshots: [
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot1.jpg", alt: "Screenshot 1" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot2.jpg", alt: "Screenshot 2" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot3.jpg", alt: "Screenshot 3" },
        { url: "./screenshots/InstaScreenshots/InstagramScreenshot4.jpg", alt: "Screenshot 4" },
      ],
      link: "https://www.instagram.com",
    },  
  ];
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  