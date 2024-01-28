function removeUrlAnchor(url){
  let end = url.indexOf('#');
  if(end !== -1){
    return url.slice(0, end);
  } else {
    return url;
  }
}

console.log(removeUrlAnchor('www.codewars.com/katas/'))