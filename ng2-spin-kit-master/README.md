ng2-spin-kit
===============

SpinKit (https://github.com/tobiasahlin/SpinKit) spinners for AngularJS v2.x

Inspired by angular-spinkit (https://github.com/Urigo/angular-spinkit)

Improved WoltersKluwerPL/ng2-spin-kit (https://github.com/WoltersKluwerPL/ng2-spin-kit)

![ng2-spin-kit](ng2-spin-kit.gif?raw=true "ng2-spin-kit")

## Usage
1. Install with NPM:
  ```bash
  npm install ng2-spin-kit-new --save
  ```
### 1. Update your `systemjs.config.js` file.
-Add following line in map:

```js
map: {
      //...
      'ng2-spin-kit-new': 'npm:ng2-spin-kit-new',
     }
```
-and in packages:

```js
packages: {
      //...
      'ng2-spin-kit-new': {
         main: './main.js',
         defaultExtension: 'js'
       },
```

### 2. Import one component in `app.module.ts`
  ```javascript
  import {RotatingPlaneComponent} from 'ng2-spin-kit-new/app/spinner/rotating-plane.component'
  ```

### 3. or all of them in `app.module.ts`
  ```javascript
  import * as spinner from 'ng2-spin-kit-new/app/spinners'
  ```
  
### 4. Include as component in `@NgModule`:
  ```javascript
  import { NgModule }      from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import * as spinner from 'ng2-spin-kit-new/app/spinners';
  
@NgModule({
  imports: [ BrowserModule ],
  declarations: [ 
                  spinner.RotatingPlaneComponent,
                  spinner.DoubleBounceComponent,
                  spinner.WaveComponent,
                  spinner.WanderingCubesComponent,
                  spinner.PulseComponent,
                  spinner.ChasingDotsComponent,
                  spinner.CircleComponent,
                  spinner.ThreeBounceComponent,
                  spinner.CubeGridComponent,
                  spinner.WordPressComponent,
                  spinner.FadingCircleComponent,
                  spinner.FoldingCubeComponent
                ],
  bootstrap: [ AppComponent ]
})
  ```

  ```html
  <sk-rotating-plane [isRunning]="..." [delay]="..."></sk-rotating-plane>
  <sk-double-bounce [isRunning]="..." [delay]="..."></sk-double-bounce>
  <sk-wave [isRunning]="..." [delay]="..."></sk-wave>
  <sk-wandering-cubes [isRunning]="..." [delay]="..."></sk-wandering-cubes>
  <sk-pulse [isRunning]="..." [delay]="..."></sk-pulse>
  <sk-chasing-dots [isRunning]="..." [delay]="..."></sk-chasing-dots>
  <sk-circle [isRunning]="..." [delay]="..."></sk-circle>
  <sk-three-bounce [isRunning]="..." [delay]="..."></sk-three-bounce>
  <sk-cube-grid [isRunning]="..." [delay]="..."></sk-cube-grid>
  <sk-word-press [isRunning]="..." [delay]="..."></sk-word-press>
  <sk-fading-circle [isRunning]="..." [delay]="..."></sk-fading-circle>
  <sk-folding-cube [isRunning]="..." [delay]="..."></sk-folding-cube>
  ```

#### For every component you can set:
  ```
  [isRunning]: boolean - state of the spinner, true - visible, false - hidden, default: true
  ```
  
  ```
  [delay]: number - representing the milliseconds to wait, before showing the spinner, default: 0
  ```
  
#### You can generate JavaScript code based on TypeScript by:
  ```bash
  npm run tcs
  ```
  
#### To regenerate typings:
  ```bash
  npm run typings
  ```
  
#### To compile and run demo app in browser:
  ```bash
  npm start
  ```
  
## Add all your requests and ideas in the issues area or send us a pull request!
