import { Routes,RouterLink } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { SandwichComponent } from './sandwich/sandwich.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PizzaComponent } from './pizza/pizza.component';
import { ResturantComponent } from './resturant/resturant.component';
import { DosaResComponent } from './dosa-res/dosa-res.component';
import { Dosa1Component } from './dosa1/dosa1.component';
import { Dosa2Component } from './dosa2/dosa2.component';
import { Dosa3Component } from './dosa3/dosa3.component';
import { Chinese1Component } from './chinese1/chinese1.component';
import { Chinese2Component } from './chinese2/chinese2.component';
import { Chinese3Component } from './chinese3/chinese3.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { SearchComponent } from './search/search.component';
import {KfcComponent} from './kfc/kfc.component'
import { BurgerComponent } from './burger/burger.component';
import { LuckyComponent } from './lucky/lucky.component';
import { IdliResComponent } from './idli-res/idli-res.component';
import { Idli1Component } from './idli1/idli1.component';
import { Idli2Component } from './idli2/idli2.component';
export const routes: Routes = [
  {
    path:'',
    component:MainpageComponent
  },
  {
    path:'corporate',
    component:FooterComponent
  },
  {
    path:'sandwich',
    component:SandwichComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'fav',
    component:FavoritesComponent
  },
  {
    path:'pizza',
    component:PizzaComponent
  },
  {
    path:'dosa-res',
    component:DosaResComponent
  },
  {
    path:'restuarant',
    component:ResturantComponent
  },
  {
    path:'dosa1',
    component:Dosa1Component
  },
  {
    path:'dosa2',
    component:Dosa2Component
  },
  {
    path:'dosa3',
    component:Dosa3Component
  },
  {
    path:'chinese1',
    component:Chinese1Component
  },
  {
    path:'chinese2',
    component:Chinese2Component
  },
  {
    path:'chinese3',
    component:Chinese3Component
  },
  { path: 'order-history', 
    component: OrderHistoryComponent 
  },
{
  path:'search',
  component:SearchComponent
},{
  path:'kfc',
  component:KfcComponent
},
{
  path:'burger',
  component:BurgerComponent
},
{
  path:'lucky',
  component:LuckyComponent
},
{
  path:'idli-res',
  component:IdliResComponent
},
{
  path:'idli1',
  component:Idli1Component
},
{
  path:'idli2',
  component:Idli2Component
}
];
