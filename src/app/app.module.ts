import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule} from '@angular/forms';

import { ContactsAppComponent } from './contacts.component';
import { ContactsService } from './contacts.service';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';

import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';


@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent, ContactsDetailComponent, ContactsEditorComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
     RouterModule.forRoot(APP_ROUTES)
  ],
  bootstrap: [ContactsAppComponent],
  providers: [ { provide: ContactsService, useClass: ContactsService } ]
})
export class ContactsModule {

}
