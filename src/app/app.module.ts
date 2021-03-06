import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInfo10Component } from './TopBar/user-info10/user-info10.component';
import { IndexCardMain1Component } from './Main/index-card-main1/index-card-main1.component';
import { LineChart2Component } from './Main/line-chart2/line-chart2.component';
import { ScaleSelect3Component } from './Main/scale-select3/scale-select3.component';
import { MonthValues5Component } from './Main/month-values5/month-values5.component';
import { Search7Component } from './SideBar/search7/search7.component';
import { SideBarTabs8Component } from './SideBar/side-bar-tabs8/side-bar-tabs8.component';
import { SideBarList9Component } from './SideBar/side-bar-list9/side-bar-list9.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { LoginComponent } from './Screens/login/login.component';
import { MainAppComponent } from './Screens/main-app/main-app.component';
import { BlackoutDirective } from './blackout.directive';
import { PercentColorDirective } from './percent-color.directive';
import { ChartsModule } from 'ng2-charts';
import { CardInfoButtonsComponent } from './Main/card-info-buttons/card-info-buttons.component';
import { SideBarWatchlistComponent } from './SideBar/side-bar-watchlist/side-bar-watchlist.component';
import { IexFetchingService } from './services/iex-fetching.service';
import { DbUserWatchlistService } from './services/db-user-watchlist.service';
import { IndicatorsComponent } from './Main/company-info-block/indicators/indicators.component';
import { NewsComponent } from './Main/company-info-block/news/news.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './Screens/registration/registration.component';
import { ForSideBarService } from './services/for-side-bar.service';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { IndicatorsListComponent } from './Main/indicators-list/indicators-list.component';
import { IndeciesListComponent } from './Main/indecies-list/indecies-list.component';
import { ChartTypeComponent } from './Main/chart-type/chart-type.component';
import { D3ChartComponent } from './d3-chart/d3-chart.component';

import { SideBarListItemComponent } from './SideBar/side-bar-list-item/side-bar-list-item.component';
import { SideBarListBtnComponent } from './SideBar/side-bar-list-item/side-bar-list-btn/side-bar-list-btn.component';
import { CompanyInfoBlockComponent } from './Main/company-info-block/company-info-block.component';
import { AboutCompanyComponent } from './Main/company-info-block/about-company/about-company.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfo10Component,
    IndexCardMain1Component,
    LineChart2Component,
    ScaleSelect3Component,
    MonthValues5Component,
    Search7Component,
    SideBarTabs8Component,
    SideBarList9Component,
    LoginComponent,
    MainAppComponent,
    CardInfoButtonsComponent,
    BlackoutDirective,
    PercentColorDirective,
    SideBarWatchlistComponent,
    IndicatorsComponent,
    NewsComponent,
    RegistrationComponent,
    IndicatorsListComponent,
    IndeciesListComponent,
    ChartTypeComponent,
    D3ChartComponent,
    SideBarListItemComponent,
    SideBarListBtnComponent,
    CompanyInfoBlockComponent,
    AboutCompanyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    ChartsModule,
    ReactiveFormsModule,
    StorageServiceModule,
  ],
  providers: [IexFetchingService, DbUserWatchlistService, ForSideBarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
