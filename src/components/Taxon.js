import React from "react";
import i18n from "../i18n";

import { Box, IconButton, Typography } from '@mui/material';

import ClearIcon from "@mui/icons-material/Clear";
import RestoreIcon from "@mui/icons-material/Restore";

import { getRelevantTaxaCount } from "../utils/logic";
import { capitalize, getImgSrc } from "../utils/helpers";

const ACCENT = "#005a71";
const DIVIDER = "#f2dfc5";

function Taxon(props) {
  const { vernacularName, scientificName, id, label } = props.taxon;
  let media = props.taxon.media;

  let children = [];
  if (props.taxon.children) {
    if (props.filter !== "irrelevant") {
      children = props.taxon.children.filter((child) => child.isRelevant);
    } else {
      children = props.taxon.children.filter((child) => child.isIrrelevant);
    }
  }

  const survivingChild = children.length === 1 ? children[0] : null;

  if (!media && survivingChild && survivingChild.media) {
    media = survivingChild.media;
  } else if (!media && children.length) {
    const child = children.find((c) => c.media);
    if (child) {
      media = child.media;
    }
  }

  const survivingLabel = (() => {
    if (!survivingChild) return null;
    const lbl = survivingChild.label;
    if (lbl && typeof lbl === "object" && lbl[i18n.language]) {
      return capitalize(lbl[i18n.language]);
    }
    if (survivingChild.vernacularName && survivingChild.vernacularName[i18n.language]) {
      return capitalize(survivingChild.vernacularName[i18n.language]);
    }
    if (survivingChild.scientificName) {
      return survivingChild.scientificName;
    }
    return null;
  })();

  const dismissed = props.taxon.dismissed;
  const showDismiss = props.filter !== "irrelevant" && !props.standalone;

  const renderRightButton = () => {
    if (dismissed) {
      return (
        <IconButton
          aria-label="restore"
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            props.toggleDismissTaxon(id);
          }}
          sx={{ color: ACCENT }}
        >
          <RestoreIcon />
        </IconButton>
      );
    }
    if (showDismiss) {
      return (
        <ClearIcon
          onClick={(e) => {
            e.stopPropagation();
            props.toggleDismissTaxon(id);
          }}
          sx={{
            color: ACCENT,
            cursor: "pointer",
            fontSize: 26,
            alignSelf: "center"
          }}
        />
      );
    }
    return null;
  };

  const nameText = !!vernacularName && !!vernacularName[i18n.language]
    ? capitalize(vernacularName[i18n.language])
    : !!scientificName
      ? scientificName
      : !!label
        ? label[i18n.language]
        : "";

  const isItalicName = !(!!vernacularName && !!vernacularName[i18n.language]) && !!scientificName;

  const childCount = !!props.taxon.children && !!props.taxon.children.length && !props.taxon.children[0].label
    ? getRelevantTaxaCount(props.taxon)
    : null;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "stretch",
        padding: "12px 16px",
        backgroundColor: props.filter === "irrelevant" ? "#f5f0e8" : "transparent",
        cursor: "pointer",
        gap: "16px"
      }}
      onClick={() => props.setModal({ taxon: props.taxon })}
    >
      {media ? (
        <Box
          component="img"
          src={getImgSrc(media["mediaElement"], 128, 128)}
          alt=""
          sx={{
            width: 64,
            height: 64,
            objectFit: "cover",
            borderRadius: "6px",
            flex: "0 0 64px"
          }}
        />
      ) : (
        <Box sx={{ width: 64, height: 64, flex: "0 0 64px" }} />
      )}

      <Box sx={{ flex: "1 1 auto", display: "flex", flexDirection: "column", justifyContent: "center", minWidth: 0 }}>
        <Typography
          component="div"
          sx={{
            fontSize: "1.05rem",
            fontWeight: 700,
            lineHeight: 1.25,
            color: "#262F31",
            fontStyle: isItalicName ? "italic" : "normal"
          }}
        >
          {nameText}
          {childCount !== null && ` (${childCount})`}
        </Typography>
        {!!scientificName && !isItalicName && (
          <Typography
            component="div"
            sx={{
              fontSize: "0.9rem",
              fontStyle: "italic",
              color: "#262F31",
              lineHeight: 1.3
            }}
          >
            {scientificName}
          </Typography>
        )}
        {survivingLabel && (
          <Typography
            component="div"
            sx={{
              fontSize: "0.9rem",
              color: "#262F31",
              lineHeight: 1.3,
              marginTop: "2px"
            }}
          >
            {survivingLabel}
          </Typography>
        )}
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        {renderRightButton()}
      </Box>
    </Box>
  );
}

export { DIVIDER, ACCENT };
export default Taxon;
