export const imageFromHtmlFeed = (html) => {
  var regex = /(https?:\/\/[^ ]*\.(?:gif|png|jpg|jpeg))/i;

  if (new RegExp(regex).test(html)) {
    let imgurl = regex.exec(html)[1];

    if (imgurl) return imgurl;
  } else {
    return null;
  }
};
