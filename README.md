# Ti.AndroidViewAnimations
Originally posted on LoopModules website: https://loopmodules.com/downloads/ti-androidviewanimations/

Ti.AndroidViewAnimations is an Android Hyperloop wrapper of the AndroidViewAnimations library. It provides a wide range of different animations that can be applied to your Titanium components.

With Titanium and Hyperloop you can embed this module into your project and with a few lines of code you will have some animations working beautifully.

# DEMO RUNNING WITH HYPERLOOP

![alt text](https://i0.wp.com/loopmodules.com/wp-content/uploads/edd/2016/11/AndroidViewAnimations.gif)

# Requirements
We recommend you taking a look at Appcelerator’s documentation on how to run HyperLoop in an Android Titanium project: Hyperloop_for_Android_Programming_Guide.

HyperLoop does a pretty good job in allowing you to use Java with Javascript syntax, but that doesn’t mean that you won’t need to learn Java if you want to customise the module / create your own. Take your time and look up Java tutorials on the internet – it will make everything easier in the long run.

# Environment setup
This module was tested and developed with the following environment:

* Titanium SDK 6.0.0.v20161017194738
* HyperLoop 2.0.0
We included a full project within this zip so you can quickly build and run it.
The only thing you need to do is make sure that the GUID value in the TiApp.xml is valid, or copy all the properties defined in the provided TiApp.xml to an existing one.

# Usage
Creating animations within your components is fairly easy with this module.
You will have to define your Titanium components as you always do and decide which component you want to animate.

After that you just need to decide which animation you want to use and then invoke this module:

YoYo.with(Techniques['$ANIMATION_NAME']).duration(1200).interpolate(new AccelerateDecelerateInterpolator()).playOn($YOUR_COMPONENT);
We are shipping an example of usage with this module, so feel free to get it and learn from it.
