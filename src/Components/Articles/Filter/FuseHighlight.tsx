import React from "react";
import { FilteredArticles, IndicesTypes } from "../../../types/article";
import { trimText } from "../extra/functions";

// Finds `obj[path][to][key]` from `path.to.key`
const resolveAttribute = (obj: FilteredArticles, key: string) =>
  key.split(".").reduce((prev: any, curr: any) => prev?.[curr], obj);

// Recursively builds JSX output adding `<mark>` tags around matches
const highlight: any = (value: string, indices: IndicesTypes = [], i = 1) => {
  const pair = indices[indices.length - i];
  return !pair ? (
    trimText(value)
  ) : (
    <>
      {highlight(trimText(value.substring(0, pair[0])), indices, i + 1)}
      <mark>{value.substring(pair[0], pair[1] + 1)}</mark>
      {trimText(value.substring(pair[1] + 1))}
    </>
  );
};

// FuseHighlight component
const FuseHighlight = ({ hit, attribute }: { hit: any; attribute: string }) => {
  const matches =
    typeof hit.item === "string"
      ? hit.matches?.[0]
      : hit.matches?.find((m: { key: string }) => m.key === attribute);
  const fallback =
    typeof hit.item === "string"
      ? hit.item
      : resolveAttribute(hit.item, attribute);
  return highlight(matches?.value || fallback, matches?.indices);
};

export default FuseHighlight;
