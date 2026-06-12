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

// When a media file has been expanded into several sized variants, pick the
// smallest one whose width covers the requested display width (so we never
// upscale), falling back to the largest available variant.
const pickVariant = (variants, width) => {
  const valid = variants.filter((v) => v && (v.url || v.file));
  if (!valid.length) return null;

  const sized = valid.filter((v) => typeof v.width === "number");
  if (!sized.length) return valid[0];

  const requested = parseInt(width) || 0;
  const covering = sized
    .filter((v) => v.width >= requested)
    .sort((a, b) => a.width - b.width);
  if (covering.length) return covering[0];

  return sized.sort((a, b) => b.width - a.width)[0];
};

export const getImgSrc = (mediaElement, width, height) => {
  if (!mediaElement) return "";

  let file = mediaElement["file"];
  if (Array.isArray(file)) {
    file = pickVariant(file, width);
  }
  if (!file) return "";

  if (file["file"]) {
    return file["file"];
  }

  if (file["url"] && file["url"]["externalId"]) {
    return "https://www.artsdatabanken.no/Media/" + file["url"]["externalId"] + "?mode=" + parseInt(width) + "x" + parseInt(height)
  }

  if (typeof file["url"] === "string" && file["url"].includes("/")) {
    return file["url"]
  }

  return ""
}