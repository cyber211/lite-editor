export const isSmartPhone = () => {
  const agent = navigator.userAgent
  if (agent.indexOf('iPhone') > 0 || agent.indexOf('iPad') > 0
      || agent.indexOf('ipod') > 0 || agent.indexOf('Android') > 0) {
    return true
  } else {
    return false
  }
}

export const triggerEvent = (el, eventName, options) => {
  let event;
  if (window.CustomEvent) {
    event = new CustomEvent(eventName, {cancelable:true});
  } else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, false, false, options);
  }
  el.dispatchEvent(event);
}

export const parseQuery = (query) => {    
  var s = query.split('&'),
      data = {},
      i = 0,
      iz = s.length,
      param, key, value;
  for (; i < iz; i++) {
      param = s[i].split('=');
      if (param[0] !== void 0) {
          key = param[0];
          value = (param[1] !== void 0) ? param.slice(1).join('=') : key;
          data[key] = decodeURIComponent(value);
      }
  }
  return data;
}

export const getViewPos = (element) => {
  return {
    left: element.getBoundingClientRect().left,
    top: element.getBoundingClientRect().top,
  }
}

export const removeElement = (element) => {
  if(element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
}

export const append = (element,string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(string, 'text/html');
  element.appendChild(doc.querySelector('body').childNodes[0]);
}

export const addClass = (element,className) => {
  if (element.classList) {
    element.classList.add(className);
  } else {
    element.className += ` ${className}`;
  }
}

export const removeClass = (element,className) => {
  if (element.classList) {
    element.classList.remove(className);
  } else {
    element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}

export const before = (el, html) => {
  el.insertAdjacentHTML('beforebegin', html);
}

export const getSelection = () => {
  let text = "";
  if (window.getSelection && window.getSelection().toString()) {
    text = window.getSelection();
    return text;
  }
  else if (document.getSelection && document.getSelection().toString()) {
    text = document.getSelection();
    return text;
  }
  else {
    const selection = document.selection && document.selection.createRange();

    if (!(typeof selection === "undefined")
    && selection.text
    && selection.text.toString()) {
        text = selection.text;
        return text;
    }
  }
  return false;
}
