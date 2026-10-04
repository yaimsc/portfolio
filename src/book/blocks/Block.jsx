import { ChapterHead } from "./ChapterHead.jsx";
import { ListBlock } from "./ListBlock.jsx";
import { PointsBlock } from "./PointsBlock.jsx";
import { StepsBlock } from "./StepsBlock.jsx";
import { FigureBlock } from "./FigureBlock.jsx";
import { SwatchesBlock } from "./SwatchesBlock.jsx";
import { BlurBlock } from "./BlurBlock.jsx";
import { NoticeBlock } from "./NoticeBlock.jsx";
import { ExampleBlock } from "./ExampleBlock.jsx";
import { Prologue } from "./Prologue.jsx";
import { Hobbies } from "./Hobbies.jsx";
import { Toc } from "./Toc.jsx";
import { Guide } from "./Guide.jsx";
import { Contact } from "./Contact.jsx";
import { End } from "./End.jsx";
import s from "./Block.module.scss";

export function Block({ b }) {
  switch (b.type) {
    case "prologue":
      return <Prologue />;
    case "hobbies":
      return <Hobbies />;
    case "index":
      return <Toc />;
    case "guide":
      return <Guide />;
    case "contact":
      return <Contact />;
    case "end":
      return <End />;
    case "chapterHead":
      return <ChapterHead p={b.p} />;
    case "label":
      return <p className={`mono ${s.label}`}>{b.text}</p>;
    case "list":
      return <ListBlock title={b.title} items={b.items} />;
    case "points":
      return <PointsBlock title={b.title} items={b.items} />;
    case "steps":
      return <StepsBlock title={b.title} steps={b.steps} />;
    case "figure":
      return <FigureBlock src={b.src} alt={b.alt} caption={b.caption} />;
    case "swatches":
      return <SwatchesBlock title={b.title} items={b.items} />;
    case "blur":
      return <BlurBlock caption={b.caption} />;
    case "notice":
      return <NoticeBlock text={b.text} />;
    default:
      return <ExampleBlock text={b.text} />;
  }
}
