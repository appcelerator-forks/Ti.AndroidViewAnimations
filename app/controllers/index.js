var Techniques = require('com.daimajia.androidanimations.library.Techniques'),
    YoYo = require('com.daimajia.androidanimations.library.YoYo'),
    AccelerateDecelerateInterpolator = require('android.view.animation.AccelerateDecelerateInterpolator');

function onTableClick(e) {
    YoYo.with(Techniques[e.row.title]).duration(1200).interpolate(new AccelerateDecelerateInterpolator()).playOn($.lbl);
}

$.winIndex.open();