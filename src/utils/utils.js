//function to get the image from the html content
export const imageFromHtmlFeed = (html) => {
  const regex = /(https?:\/\/[^ ]*\.(?:gif|png|jpg|jpeg))/i;
  const imgurl = new RegExp(regex).test(html) ? regex.exec(html)[1] : null;
  return imgurl;
};

//function to format the html content to show 200 characters, and remove the html tags
export const formatHTML = (html) => {
  (html === null || html === "") ? false :html.toString();
  const stringWithoutTags = html.replace(/(<([^>]+)>)/gi, "");
  return stringWithoutTags.substring(0, 200).trim();
};

//function to format the html content to show the full content, and remove the html tags
export const fullHtml = (html) => {
  (html === null || html === "") ? false : html.toString();
  const stringWithoutTags = html.replace(/(<([^>]+)>)/gi, "");
  const nolinks = stringWithoutTags.split("more")[0] + "";
  return nolinks.trim();
};
