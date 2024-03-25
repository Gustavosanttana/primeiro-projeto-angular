import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { LOCALE_ID } from '@angular/core';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { HeaderComponent } from './componets/templete/header/header.component';
import { FooterComponent } from './conponents/templete/footer/footer.component';
import { NavComponent } from './components/templete/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { RedDirective } from './directives/red.directive'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import localePt  from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt)





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
     CommonModule,
     HeaderComponent,
     FooterComponent, 
     NavComponent,
     HomeComponent,
     MatToolbarModule,
     MatSidenavModule,
     MatListModule,
     MatCardModule,
     RedDirective,
     ProductCreateComponent,
     MatButtonModule,
     MatSnackBarModule,
     HttpClientModule,
     FormsModule,
     MatFormFieldModule,
     MatInputModule,
     ProductRead2Component,
     MatTableModule,
     MatPaginatorModule,
     MatSortModule,
     ProductUpdateComponent
     
    ],
    providers:[{
      provide:LOCALE_ID,
      useValue: 'pt-BR'
    }],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  
}
