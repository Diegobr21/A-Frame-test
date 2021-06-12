/* global AFRAME, THREE */

/**
 * Player for animation clips. Intended to be compatible with any model format that supports
 * skeletal or morph animations.
 */
 AFRAME.registerComponent('show_model', {
    init: function () {
      this.model = null;
      this.mixer = null;
  
      var model = this.el.getObject3D('mesh');
      if (model) {
        this.load(model);
      } else {
        this.el.addEventListener('model-loaded', function (e) {
          this.load(e.detail.model);
        }.bind(this));
      }
    }
});