import { FilteredArticles, IndicesTypes } from "../../../../types/article";
import { trimText } from "../../extra/functions";

const resolveAttribute = (obj: FilteredArticles, key: string) =>
  key.split(".").reduce((prev: any, curr: any) => prev?.[curr], obj);

const highlight: any = (value: string, indices: IndicesTypes = [], i = 1) => {
  const pair = indices[indices.length - i];
  const textTohighlight = pair ? value.substring(pair[0], pair[1] + 1) : "";
  const reg = new RegExp("\\b" + textTohighlight, "ig").test(value);
  console.log(reg);

  return !pair ? (
    trimText(value)
  ) : (
    <>
      {highlight(trimText(value.substring(0, pair[0])), indices, i + 1)}
      {reg ? <mark>{textTohighlight}</mark> : <>{textTohighlight}</>}

      {trimText(value.substring(pair[1] + 1))}
    </>
  );
};

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
