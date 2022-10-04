
export const imageFromHtmlFeed = (html) => {
  var regex = /(https?:\/\/[^ ]*\.(?:gif|png|jpg|jpeg))/i;

  if (new RegExp(regex).test(html)) {
    let imgurl = regex.exec(html)[1];

    if (imgurl) return imgurl;
  } else {
    return null;
  }
};

export const formatHTML = (html) => {
  if (html === null || html === "") return false;
  else html = html.toString();

  const stringWithoutTags=  html.replace(/(<([^>]+)>)/gi, "");
  return stringWithoutTags.substring(0, 200).trim();
};


export const fullHtml = (html) => {
  if (html === null || html === "") return false;
  else html = html.toString();

  const stringWithoutTags=  html.replace(/(<([^>]+)>)/gi, "");
  const nolinks = stringWithoutTags.split('more')[0]+'';
  return nolinks.trim();
};