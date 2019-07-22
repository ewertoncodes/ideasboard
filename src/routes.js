import CreateIdea from './components/CreateIdea'
import Ideas from './components/Ideas'

export const routes = [
  { path:'', component: Ideas },
  { path:'/new', component: CreateIdea }
];