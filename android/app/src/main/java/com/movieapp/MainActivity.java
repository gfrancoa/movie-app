package com.movieapp;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
 
  //added for config of react-native-screens
   @Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
  
   @Override
  protected String getMainComponentName() {
    return "movieapp";
  }
}