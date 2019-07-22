import CreateIdea from './components/CreateIdea'
import Ideas from './components/Ideas'

export const routes = [
  { path:'', component: Ideas, title: 'Home' },
  { path:'/new', component: CreateIdea, title: 'New Idea' }
];