import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material modules
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatTreeModule } from '@angular/material/tree';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';
import { DateComponent } from './form-controls/date/date.component';
import { InputComponent } from './form-controls/input/input.component';
import { MultiChoicesComponent } from './form-controls/multi-choices/multi-choices.component';
import { SingleChoiceComponent } from './form-controls/single-choice/single-choice.component';
import { RadioGroupComponent } from './form-controls/radio-group/radio-group.component';
import { SnackBarComponent } from './misce/snack-bar/snack-bar.component';
import { SpinnerComponent } from './misce/spinner/spinner.component';
import { LocalStorageInputComponent } from './form-controls/local-storage-input/local-storage-input.component';

@NgModule({
  declarations: [
    DateComponent,
    InputComponent,
    MultiChoicesComponent,
    SingleChoiceComponent,
    RadioGroupComponent,
    SnackBarComponent,
    SpinnerComponent,
    LocalStorageInputComponent,
  ],
  imports: [
    CommonModule, 
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSliderModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    MatTabsModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatTreeModule,
    PortalModule,
    OverlayModule,
    MatAutocompleteModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSliderModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    MatTabsModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatTreeModule,
    MatAutocompleteModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // exported components 
    DateComponent,
    InputComponent,
    MultiChoicesComponent,
    SingleChoiceComponent,
    SpinnerComponent,
    SnackBarComponent,
    RadioGroupComponent,
    LocalStorageInputComponent

  ],
  providers: [CurrencyPipe]
})
export class SharedModule { }
