/*
Copyright 2012 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Author: Eric Bidelman (ericbidelman@chromium.org)
*/



function DnDFileController(selector,  onDropCallback, onDragEnterCallback, onDragLeaveCallback) {
  var el_ = document.querySelector(selector);

  this.dragenter = function(e) {
    e.stopPropagation();
    e.preventDefault();

    //el_.classList.add('dropping');
    if(onDragEnterCallback)
      onDragEnterCallback();

  };

  this.dragover = function(e) {
    e.stopPropagation();
    e.preventDefault();
  };

  this.dragleave = function(e) {
    Dnd_whenReallyOutside.bind(this)(e, function(){
      e.stopPropagation();
      e.preventDefault();
      //el_.classList.remove('dropping');
      if(onDragLeaveCallback)
        onDragLeaveCallback();
    });
  };

  this.drop = function(e) {
    e.stopPropagation();
    e.preventDefault();

    //el_.classList.remove('dropping');
    if(onDragLeaveCallback)
        onDragLeaveCallback();

    onDropCallback.bind(this)(e.dataTransfer.files);
  };

  el_.addEventListener('dragenter', this.dragenter, false);
  el_.addEventListener('dragover', this.dragover, false);
  el_.addEventListener('dragend', this.dragleave, false);
  el_.addEventListener('dragleave', this.dragleave, false);
  el_.addEventListener('drop', this.drop, false);
}


function Dnd_whenReallyOutside(e, callback){
    var rect = this.getBoundingClientRect();
    var getXY = function getCursorPosition(event) {
        var x, y;

        if (typeof event.clientX === 'undefined') {
            // try touch screen
            x = event.pageX + document.documentElement.scrollLeft;
            y = event.pageY + document.documentElement.scrollTop;
        } else {
            x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }

        return { x: x, y : y };
    };

    var pos = getXY(e);

    // Check the mouseEvent coordinates are outside of the rectangle
    if (pos.x > rect.left + rect.width - 1 || pos.x < rect.left || pos.y > rect.top + rect.height - 1 || pos.y < rect.top) {
        callback(e);
    }
  }
