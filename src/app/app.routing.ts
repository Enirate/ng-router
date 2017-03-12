import { NgModule } from '@angular/core'; //we need this because we'll import routing modules and it will serves as decorator.
import { Routes, RouterModule } from '@angular/router'; //routing modules needed

//Our component on which we want to use routes
import { AboutComponent } from './components/about/about.component';
import { TechLeadersComponent } from './components/tech-leaders/tech-leaders.component'; //  'import { TechLeadersComponent }' we import classes 
//so we locate the habitat file
import { TechpreneursComponent } from './components/techpreneurs/techpreneurs.component'; //'./' takes you out of the present file into the app folder
import { ErrorComponent } from './components/error/error.component';
import { TechLeadersDetailsComponent } from './components/tech-leaders-details/tech-leaders-details.component';
import { TechpreneursDetailsComponent } from './components/techpreneurs-details/techpreneurs-details.component';

const routes:Routes = [ 
    
    //we create an array of type Routes holding objects which in turn holds routing logics as props
    {
        path: 'about', //first props of routes object is path of type string holding our base url extension.
        component: AboutComponent //component loaded at this url. The second props. (props = property.)
    },
    {
        path: 'techpreneurs',
        component: TechpreneursComponent,
        children:[
            {
                path:'techpreneurs-details/:id',
                component: TechpreneursDetailsComponent
            },
            
        ]
    },
    {
        path: 'tech-leaders',
        component: TechLeadersComponent,
        children:[
            {
                path:'tech-leaders-details/:id',
                component: TechLeadersDetailsComponent
            },
            
        ]
    },
    {
        path:'', //base url will show this component.
        pathMatch:'full',
        redirectTo:'tech-leaders' //redirect to this component path. Notice: component path(string) not component class name
    },
    {
        path:'**', //if url extension doesn't exit users will be redirected to this component.
        component:ErrorComponent
    }
];

//implement modules
@NgModule({
    imports:[RouterModule.forRoot(routes)], //returns a Router Module configured for our predeclared routes
    exports:[RouterModule] //we export the configured module so we can import it in our root module, thereby implementing
    //the routing logic in the entire app.
})

export class AppRoutingModule {}

//Finally we import our components as one, so we don't import twice.
export const routingComponent = [ErrorComponent, TechLeadersComponent, TechpreneursComponent, AboutComponent, TechpreneursDetailsComponent,TechLeadersDetailsComponent];


