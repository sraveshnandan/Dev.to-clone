/// <reference types="vite/client" />

import { ReactElement } from "react"


type testType = {
  title: string,
  desc: string
}

type ChildrenType = {
  children?: React.ReactElement,
  containerStyles?: string
}
type childrenType = React.ReactElement


type DataType = {
  map(arg0: (d: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode
  title: string,
  desc: string
}


type PostContent = {
  title: string,
  tag: string[],
  comments: Object[],
  author: string,
  published_date: string

}

interface SocialSignInButton {
  title: string,
  icon: ReactElement
}


 type RequestProp = {
  data?:Object,
  url:string,
  method:string,
  
 }