import CreateIdea from './components/CreateIdea'
import Ideas from './components/Ideas'

export const routes = [
  { path:'', name: 'ideas', component: Ideas, title: 'Home', menu:true },
  { path:'*', component: Ideas, menu:false },
  { path:'/new', name:'create-idea', component: CreateIdea, title: 'New Idea', menu:true },
  { path:'/edit/:id', name:'change-idea', component: CreateIdea, title: 'New Idea', menu:false }
];