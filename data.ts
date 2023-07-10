import js from '@/assets/js.svg'
import ts from '@/assets/ts.svg'
import react from '@/assets/react.svg'
import boot from '@/assets/bootstrap.svg'
import css from '@/assets/css.svg'
import fig from '@/assets/figma.svg'
import git from '@/assets/git.svg'
import github from '@/assets/github.svg'
import html from '@/assets/html.svg'
import mongo from '@/assets/mongo.svg'
import next from '@/assets/next.svg'
import rtk from '@/assets/rtk.svg'
import sass from '@/assets/sass.svg'
import sql from '@/assets/Vector.svg'
import motion from '@/assets/motion.png'
import mui from '@/assets/mui.png'
import tail from '@/assets/tail.png'
import prisma from '@/assets/prisma.png'
import pro from '@/assets/pro.png'

import { StaticImageData } from 'next/image'

export interface NavLink {
  id: number
  title: string
  url: string
}

export const navLinks: NavLink[] = [
  { id: 1, title: '_hello', url: '/' },
  { id: 2, title: '_about-me', url: '/about' },
  { id: 3, title: '_projects', url: '/projects' },
  { id: 4, title: '_resume', url: '/resume' },
]

export interface Skills {
  id: number
  name: string
  img: StaticImageData
}

export const skills: Skills[] = [
  {
    id: 1,
    name: 'javascript',
    img: js,
  },
  {
    id: 2,
    name: 'typescript',
    img: ts,
  },
  {
    id: 3,
    name: 'nextjs',
    img: next,
  },

  {
    id: 4,
    name: 'react',
    img: react,
  },

  {
    id: 5,
    name: 'redux',
    img: rtk,
  },

  {
    id: 6,
    name: 'bootstrap',
    img: boot,
  },

  {
    id: 7,
    name: 'css',
    img: css,
  },

  {
    id: 8,
    name: 'figma',
    img: fig,
  },

  {
    id: 9,
    name: 'git',
    img: git,
  },

  {
    id: 10,
    name: 'github',
    img: github,
  },

  {
    id: 11,
    name: 'mongo',
    img: mongo,
  },
  {
    id: 12,
    name: 'html',
    img: html,
  },
  {
    id: 13,
    name: 'sass',
    img: sass,
  },
  {
    id: 14,
    name: 'sql',
    img: sql,
  },
  {
    id: 15,
    name: 'framer motion',
    img: motion,
  },
  {
    id: 16,
    name: 'mui',
    img: mui,
  },
  {
    id: 17,
    name: 'prisma',
    img: prisma,
  },
  {
    id: 18,
    name: 'tail',
    img: tail,
  },
]

export interface Projects {
  id: string
  img: StaticImageData
  name: string
  projectNo: string
  desc: string
  icon: StaticImageData
}

export const project: Projects[] = [
  {
    id: 'wefgh',
    img: pro,
    name: '_ber-shop',
    projectNo: 'project 1',
    desc: 'an e-commerce website',
    icon: react,
  },
  {
    id: 'wedfg',
    img: pro,
    name: '_ber-shop',
    projectNo: 'project 2',
    desc: 'an e-commerce website',
    icon: react,
  },
  {
    id: 'kmfgh',
    img: pro,
    name: '_ber-shop',
    projectNo: 'project 3',
    desc: 'an e-commerce website',
    icon: react,
  },
  {
    id: 'ewfdgg',
    img: pro,
    name: '_ber-shop',
    projectNo: 'project 4',
    desc: 'an e-commerce website',
    icon: react,
  },
]
