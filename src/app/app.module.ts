import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { NavComponent } from './header/nav/nav.component';
import { IconComponent } from './icon/icon.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { CardRecipesComponent } from './card-recipes/card-recipes.component';
import { CardAdComponent } from './card-ad/card-ad.component';
import { TimeGroupComponent } from './time-group/time-group.component';
import { ContainerComponent } from './container/container.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { TitleDivisionComponent } from './title-division/title-division.component';
import { PostInstagramComponent } from './post-instagram/post-instagram.component';
import { PostComponent } from './post-instagram/post/post.component';
import { RecipesComponent } from './recipes/recipes.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { InputComponent } from './input/input.component';
import { InputSelectComponent } from './input/input-select/input-select.component';
import { InputTextAreaComponent } from './input/input-text-area/input-text-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    NavComponent,
    IconComponent,
    CardComponent,
    ButtonComponent,
    CardRecipesComponent,
    CardAdComponent,
    TimeGroupComponent,
    ContainerComponent,
    LearnMoreComponent,
    TitleDivisionComponent,
    PostInstagramComponent,
    PostComponent,
    RecipesComponent,
    PageHomeComponent,
    PageContactComponent,
    InputComponent,
    InputSelectComponent,
    InputTextAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
