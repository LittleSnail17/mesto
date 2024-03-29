export class Section{
    constructor( {items, renderer}, containerSelector) {
     this._items = items;
     this._renderer = renderer;
     this._container = document.querySelector(containerSelector);
    }

    prependItem(element) { 
    this._container.prepend(element);
    };

    appendItem(element) { 
    this._container.append(element);
    };
    
    renderItems(items) { 
    items.forEach(item => {
    this._renderer(item);
      });
    }
}