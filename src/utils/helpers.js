// capitalize a string
export const capitalize = (str) => {
  if (!str || typeof str !== "string") {
    return false
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const languageLabel = (code) => {
  try {
    const dn = new Intl.DisplayNames([code], { type: 'language' })
    const name = dn.of(code)
    return name ? name.charAt(0).toUpperCase() + name.slice(1) : code
  } catch (e) {
    return code
  }
}

export const getImgSrc = (mediaElement, width, height) => {
  
  if (mediaElement["file"]["file"]){
    return mediaElement["file"]["file"];
  }
  
  if (mediaElement["file"]["url"]["externalId"]) {
    return "https://www.artsdatabanken.no/Media/" + mediaElement["file"]["url"]["externalId"] + "?mode=" + parseInt(width) + "x" + parseInt(height)
  }
  
  if (mediaElement["file"]["url"].includes("/")) {
    return mediaElement["file"]["url"]
  }
  
  return ""
}