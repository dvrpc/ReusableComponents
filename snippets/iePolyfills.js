// SVG children polyfill
var svgChildrenPolyfill = function(constructor) {
    if (constructor && constructor.prototype && constructor.prototype.children == null) {
        Object.defineProperty(constructor.prototype, 'children', {
            get: function() {
                var i = 0, node, nodes = this.childNodes, children = [];
                while (node = nodes[i++]) {
                    if (node.nodeType === 1) {
                        children.push(node);
                    }
                }
                return children;
            }
        });
    }
}
svgChildrenPolyfill(window.Node || window.Element);

// classList polyfill
if (!('classList' in SVGElement.prototype)) {
    Object.defineProperty(SVGElement.prototype, 'classList', {
      get: function get() {
        var _this = this
  
        return {
          contains: function contains(className) {
            return _this.className.baseVal.split(' ').indexOf(className) !== -1
          },
          add: function add(className) {
            // short out if the class already exists
            if(_this.classList.contains(className)) return

            return _this.setAttribute(
              'class',
              _this.getAttribute('class') + ' ' + className
            )
          },
          remove: function remove(className) {
            if(_this.classList.contains(className)) {
                var reg = new RegExp('(^| )'+className+'($| )','gi')
                var updatedClassList = _this.getAttribute('class').replace(reg, ' ')
                _this.setAttribute('class', updatedClassList)
            }
          },
          toggle: function toggle(className) {
            if (this.contains(className)) {
              this.remove(className)
            } else {
              this.add(className)
            }
          }
        }
      }
    })
  }

// MDN node.remove() polyfill
var removeNodePolyfill = function(arr) {
arr.forEach(function (item) {
    if (item.hasOwnProperty('remove')) {
    return;
    }
    Object.defineProperty(item, 'remove', {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function remove() {
        if (this.parentNode === null) {
        return;
        }
        this.parentNode.removeChild(this);
    }
    });
});
}
removeNodePolyfill([Element.prototype, CharacterData.prototype, DocumentType.prototype])