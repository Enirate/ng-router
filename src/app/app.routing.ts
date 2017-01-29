import { NgModule } from '@angular/core'; //we need this because we'll import routing modules and it will serves as decorator.
import { Routes, RouterModule } from '@angular/router'; //routing modules needed

//Our component on which we want to use routes
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component'; //  'import { SecondComponent }' we import classes 
//so we locate the habitat file
import { ThirdComponent } from './third/third.component'; //'./' takes you out of the present file into the app folder

const routes:Routes = [ 

    //first object will help handle redirects
    {
        path:'', //if no route extension match
        pathMatch:'full',
        redirectTo:'first' //redirect to this component path. Notice: component path(string) not component class name
    },
    
    //we create an array of type Routes holding objects which in turn holds routing logics as props
    {
        path: 'first', //first props of routes object is path of type string holding our base url extension.
        component: FirstComponent //component loaded at this url. The second props. (props = property.)
    },
    {
        path: 'second',
        component: SecondComponent
    },
    {
        path: 'third',
        component: ThirdComponent
    }
];

//implement modules
@NgModule({
    imports:[RouterModule.forRoot(routes)] //returns a Router Module configured for our predeclared routes
})



