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
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
